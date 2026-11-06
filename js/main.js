/**
 * Sunglasses & Fashion Accessories Store
 * Core Main JavaScript File
 * Handles: Theme, RTL, Cart, Wishlist, QuickView, Toasts, Product Card Generator
 */

(function () {
  "use strict";

  // ==========================================
  // STORAGE KEYS
  // ==========================================
  const THEME_KEY = "lux_store_theme";
  const RTL_KEY = "lux_store_dir";
  const CART_KEY = "lux_store_cart";
  const WISHLIST_KEY = "lux_store_wishlist";

  // ==========================================
  // INITIALIZATION ON DOM LOAD
  // ==========================================
  document.addEventListener("DOMContentLoaded", function () {
    initTheme();
    initRTL();
    initNavbarScroll();
    initCart();
    initWishlist();
    initNewsletterForms();
    initToastContainer();
    initActiveNavLinks();
    initNavDropdowns();
  });

  // ==========================================
  // THEME MANAGEMENT (LIGHT & DARK MODE)
  // ==========================================
  window.setTheme = function (theme) {
    applyTheme(theme);
    localStorage.setItem(THEME_KEY, theme);
  };

  function initTheme() {
    const savedTheme = localStorage.getItem(THEME_KEY) || "light";
    applyTheme(savedTheme);

    const toggleBtns = document.querySelectorAll(".theme-toggle-btn");
    toggleBtns.forEach((btn) => {
      btn.addEventListener("click", function () {
        const currentTheme = document.documentElement.getAttribute("data-theme") || "light";
        const newTheme = currentTheme === "dark" ? "light" : "dark";
        window.setTheme(newTheme);
      });
    });
  }

  function applyTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    document.documentElement.setAttribute("data-bs-theme", theme);
    const icons = document.querySelectorAll(".theme-toggle-icon");
    const labels = document.querySelectorAll(".theme-toggle-label");

    icons.forEach((icon) => {
      if (theme === "dark") {
        icon.className = "bi bi-sun-fill theme-toggle-icon text-warning";
      } else {
        icon.className = "bi bi-moon-stars-fill theme-toggle-icon";
      }
    });

    labels.forEach((label) => {
      label.textContent = theme === "dark" ? "Light" : "Dark";
    });
  }

  // ==========================================
  // RTL / LTR TOGGLE (CIRCULAR BUTTON REFERENCE)
  // ==========================================
  function initRTL() {
    const savedDir = localStorage.getItem(RTL_KEY) || "ltr";
    applyRTL(savedDir);

    const toggleBtns = document.querySelectorAll(".rtl-toggle-circle");
    toggleBtns.forEach((btn) => {
      btn.addEventListener("click", function () {
        const currentDir = document.documentElement.getAttribute("dir") || "ltr";
        const newDir = currentDir === "rtl" ? "ltr" : "rtl";
        applyRTL(newDir);
        localStorage.setItem(RTL_KEY, newDir);
      });
    });
  }

  function applyRTL(dir) {
    document.documentElement.setAttribute("dir", dir);
    const circleBtns = document.querySelectorAll(".rtl-toggle-circle");
    circleBtns.forEach((btn) => {
      btn.textContent = dir === "rtl" ? "LTR" : "RTL";
      btn.setAttribute("title", dir === "rtl" ? "Switch to LTR Layout" : "Switch to RTL Layout");
      btn.setAttribute("aria-label", dir === "rtl" ? "Switch to LTR Layout" : "Switch to RTL Layout");
    });
  }

  // ==========================================
  // NAVBAR SCROLL & ACTIVE LINKS
  // ==========================================
  function initNavbarScroll() {
    const navbar = document.querySelector(".site-navbar");
    if (!navbar) return;

    window.addEventListener("scroll", function () {
      if (window.scrollY > 40) {
        navbar.classList.add("scrolled");
      } else {
        navbar.classList.remove("scrolled");
      }
    });
  }

  function initActiveNavLinks() {
    const currentPath = window.location.pathname.split("/").pop() || "index.html";
    const navLinks = document.querySelectorAll(".navbar-nav .nav-link, .dropdown-item");

    navLinks.forEach((link) => {
      const href = link.getAttribute("href");
      if (href && (href === currentPath || (currentPath === "" && href === "index.html"))) {
        link.classList.add("active");
        const parentDropdown = link.closest(".nav-item.dropdown");
        if (parentDropdown) {
          const dropdownToggle = parentDropdown.querySelector(".nav-link.dropdown-toggle");
          if (dropdownToggle) dropdownToggle.classList.add("active");
        }
      }
    });
  }

  // ==========================================
  // NAVBAR DROPDOWN LOGIC (ROBUST HOVER & CLICK FOR ALL DEVICES)
  // ==========================================
  function initNavDropdowns() {
    const dropdownItems = document.querySelectorAll(".nav-item.dropdown");
    
    dropdownItems.forEach((item) => {
      const toggle = item.querySelector(".dropdown-toggle");
      const menu = item.querySelector(".dropdown-menu");
      if (!toggle || !menu) return;

      let isHovered = false;

      // Desktop hover interaction
      item.addEventListener("mouseenter", function () {
        if (window.innerWidth >= 992) {
          isHovered = true;
          menu.classList.add("show");
          toggle.setAttribute("aria-expanded", "true");
        }
      });

      item.addEventListener("mouseleave", function () {
        if (window.innerWidth >= 992) {
          isHovered = false;
          menu.classList.remove("show");
          toggle.setAttribute("aria-expanded", "false");
        }
      });

      // Handle click/tap on the dropdown toggle button/link
      toggle.addEventListener("click", function (e) {
        e.preventDefault();
        e.stopPropagation();
        
        // If already hovered open on desktop, ensure it remains open
        if (window.innerWidth >= 992 && isHovered && menu.classList.contains("show")) {
          return;
        }

        const isShown = menu.classList.contains("show");
        
        // Close other dropdowns
        document.querySelectorAll(".dropdown-menu.show").forEach((m) => {
          if (m !== menu) m.classList.remove("show");
        });
        document.querySelectorAll(".dropdown-toggle[aria-expanded='true']").forEach((t) => {
          if (t !== toggle) t.setAttribute("aria-expanded", "false");
        });

        if (isShown) {
          menu.classList.remove("show");
          toggle.setAttribute("aria-expanded", "false");
        } else {
          menu.classList.add("show");
          toggle.setAttribute("aria-expanded", "true");
        }
      });
    });

    // Close open dropdowns when clicking outside
    document.addEventListener("click", function (e) {
      if (!e.target.closest(".nav-item.dropdown")) {
        document.querySelectorAll(".dropdown-menu.show").forEach((m) => m.classList.remove("show"));
        document.querySelectorAll(".dropdown-toggle[aria-expanded='true']").forEach((t) => t.setAttribute("aria-expanded", "false"));
      }
    });
  }

  // ==========================================
  // TOAST NOTIFICATIONS
  // ==========================================
  function initToastContainer() {
    if (!document.querySelector(".toast-container-custom")) {
      const container = document.createElement("div");
      container.className = "toast-container-custom";
      document.body.appendChild(container);
    }
  }

  window.showToast = function (message, type = "info", icon = "bi-check-circle-fill") {
    const container = document.querySelector(".toast-container-custom");
    if (!container) return;

    const toast = document.createElement("div");
    toast.className = `custom-toast border-${type}`;
    toast.innerHTML = `
      <i class="bi ${icon} fs-5 text-secondary"></i>
      <div class="flex-grow-1">
        <div class="small fw-bold">${message}</div>
      </div>
      <button type="button" class="btn-close btn-close-white small ms-2" aria-label="Close"></button>
    `;

    const closeBtn = toast.querySelector(".btn-close");
    closeBtn.addEventListener("click", () => toast.remove());

    container.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = "0";
      toast.style.transform = "translateY(15px)";
      toast.style.transition = "all 0.3s ease";
      setTimeout(() => toast.remove(), 300);
    }, 3500);
  };

  // ==========================================
  // CART MANAGEMENT
  // ==========================================
  window.getCart = function () {
    try {
      return JSON.parse(localStorage.getItem(CART_KEY)) || [];
    } catch (e) {
      return [];
    }
  };

  window.saveCart = function (cart) {
    localStorage.setItem(CART_KEY, JSON.stringify(cart));
    updateCartBadges();
    renderCart();
  };

  window.addToCart = function (productId, quantity = 1, selectedColor = null) {
    if (typeof PRODUCTS_DATA === "undefined") return;
    const product = PRODUCTS_DATA.find((p) => p.id === productId);
    if (!product) return;

    const cart = getCart();
    const color = selectedColor || (product.colors && product.colors[0] ? product.colors[0].name : "Standard");
    const existingIndex = cart.findIndex((item) => item.id === productId && item.color === color);

    if (existingIndex > -1) {
      cart[existingIndex].quantity += quantity;
    } else {
      cart.push({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        category: product.category,
        brand: product.brand,
        color: color,
        quantity: quantity
      });
    }

    saveCart(cart);
    showToast(`Added "${product.name}" to cart!`, "success", "bi-cart-check-fill");

    // Open Offcanvas Cart
    const cartEl = document.getElementById("cartOffcanvas");
    if (cartEl && window.bootstrap) {
      const bsOffcanvas = bootstrap.Offcanvas.getOrCreateInstance(cartEl);
      bsOffcanvas.show();
    }
  };

  window.updateCartQuantity = function (productId, color, delta) {
    const cart = getCart();
    const item = cart.find((i) => i.id === productId && i.color === color);
    if (!item) return;

    item.quantity += delta;
    if (item.quantity <= 0) {
      removeFromCart(productId, color);
      return;
    }

    saveCart(cart);
  };

  window.removeFromCart = function (productId, color) {
    let cart = getCart();
    cart = cart.filter((i) => !(i.id === productId && i.color === color));
    saveCart(cart);
    showToast("Item removed from cart", "info", "bi-trash");
  };

  function updateCartBadges() {
    const cart = getCart();
    const totalCount = cart.reduce((sum, item) => sum + item.quantity, 0);
    const badges = document.querySelectorAll(".cart-badge-count");
    badges.forEach((b) => {
      b.textContent = totalCount;
      b.style.display = totalCount > 0 ? "flex" : "none";
    });
  }

  function renderCart() {
    const cartListEl = document.getElementById("cartItemsList");
    const subtotalEl = document.getElementById("cartSubtotal");
    const shippingProgressEl = document.getElementById("freeShippingProgress");
    const shippingMsgEl = document.getElementById("freeShippingMsg");
    const emptyMsgEl = document.getElementById("cartEmptyMsg");
    const footerEl = document.getElementById("cartFooter");

    if (!cartListEl) return;

    const cart = getCart();
    if (cart.length === 0) {
      cartListEl.innerHTML = "";
      if (emptyMsgEl) emptyMsgEl.classList.remove("d-none");
      if (footerEl) footerEl.classList.add("d-none");
      if (subtotalEl) subtotalEl.textContent = "$0.00";
      return;
    }

    if (emptyMsgEl) emptyMsgEl.classList.add("d-none");
    if (footerEl) footerEl.classList.remove("d-none");

    let subtotal = 0;
    let html = "";

    cart.forEach((item) => {
      const lineTotal = item.price * item.quantity;
      subtotal += lineTotal;
      html += `
        <div class="cart-item-row">
          <div class="cart-item-thumb">
            <img src="${item.image}" alt="${item.name}">
          </div>
          <div class="cart-item-info">
            <div class="cart-item-name">${item.name}</div>
            <div class="small text-muted mb-1">Color: ${item.color} | Brand: ${item.brand}</div>
            <div class="d-flex align-items-center justify-content-between mt-2">
              <div class="quantity-control">
                <button type="button" class="quantity-btn" onclick="updateCartQuantity('${item.id}', '${item.color}', -1)">-</button>
                <input type="text" class="quantity-input" value="${item.quantity}" readonly>
                <button type="button" class="quantity-btn" onclick="updateCartQuantity('${item.id}', '${item.color}', 1)">+</button>
              </div>
              <div class="cart-item-price">$${lineTotal.toFixed(2)}</div>
            </div>
          </div>
          <button type="button" class="cart-item-remove ms-2" onclick="removeFromCart('${item.id}', '${item.color}')" title="Remove item">
            <i class="bi bi-trash3"></i>
          </button>
        </div>
      `;
    });

    cartListEl.innerHTML = html;

    if (subtotalEl) {
      subtotalEl.textContent = `$${subtotal.toFixed(2)}`;
    }

    // Free Shipping threshold $150
    const freeShippingGoal = 150;
    if (shippingProgressEl && shippingMsgEl) {
      if (subtotal >= freeShippingGoal) {
        shippingProgressEl.style.width = "100%";
        shippingProgressEl.classList.replace("bg-secondary", "bg-success");
        shippingMsgEl.innerHTML = `<span class="text-success fw-bold"><i class="bi bi-check-circle-fill me-1"></i>Congratulations! You qualify for Free Premium Express Delivery!</span>`;
      } else {
        const remaining = (freeShippingGoal - subtotal).toFixed(2);
        const percent = Math.min(100, Math.round((subtotal / freeShippingGoal) * 100));
        shippingProgressEl.style.width = `${percent}%`;
        shippingProgressEl.classList.replace("bg-success", "bg-secondary");
        shippingMsgEl.innerHTML = `Add <strong class="text-secondary">$${remaining}</strong> more to unlock <strong>Free Express Shipping</strong>!`;
      }
    }
  }

  function initCart() {
    updateCartBadges();
    renderCart();

    const checkoutBtn = document.getElementById("btnCheckoutDemo");
    if (checkoutBtn) {
      checkoutBtn.addEventListener("click", function (e) {
        const cart = getCart();
        if (cart.length === 0) {
          e.preventDefault();
          showToast("Your cart is empty! Browse products to add items.", "warning", "bi-cart-x");
          return;
        }
        window.location.href = "checkout.html";
      });
    }
  }

  // ==========================================
  // WISHLIST MANAGEMENT
  // ==========================================
  window.getWishlist = function () {
    try {
      return JSON.parse(localStorage.getItem(WISHLIST_KEY)) || [];
    } catch (e) {
      return [];
    }
  };

  window.saveWishlist = function (wishlist) {
    localStorage.setItem(WISHLIST_KEY, JSON.stringify(wishlist));
    updateWishlistBadges();
    renderWishlist();
  };

  window.toggleWishlist = function (productId) {
    if (typeof PRODUCTS_DATA === "undefined") return;
    const product = PRODUCTS_DATA.find((p) => p.id === productId);
    if (!product) return;

    let wishlist = getWishlist();
    const index = wishlist.findIndex((id) => id === productId);

    if (index > -1) {
      wishlist.splice(index, 1);
      saveWishlist(wishlist);
      showToast(`Removed "${product.name}" from wishlist`, "info", "bi-heart");
    } else {
      wishlist.push(productId);
      saveWishlist(wishlist);
      showToast(`Added "${product.name}" to wishlist!`, "success", "bi-heart-fill");
    }

    // Update active class on heart buttons
    document.querySelectorAll(`.btn-wishlist-${productId}`).forEach((btn) => {
      btn.classList.toggle("active", wishlist.includes(productId));
    });
  };

  function updateWishlistBadges() {
    const wishlist = getWishlist();
    const badges = document.querySelectorAll(".wishlist-badge-count");
    badges.forEach((b) => {
      b.textContent = wishlist.length;
      b.style.display = wishlist.length > 0 ? "flex" : "none";
    });
  }

  function renderWishlist() {
    const listEl = document.getElementById("wishlistItemsList");
    const emptyEl = document.getElementById("wishlistEmptyMsg");
    if (!listEl) return;

    const wishlist = getWishlist();
    if (wishlist.length === 0) {
      listEl.innerHTML = "";
      if (emptyEl) emptyEl.classList.remove("d-none");
      return;
    }

    if (emptyEl) emptyEl.classList.add("d-none");

    let html = "";
    wishlist.forEach((id) => {
      const product = PRODUCTS_DATA.find((p) => p.id === id);
      if (!product) return;

      html += `
        <div class="cart-item-row">
          <div class="cart-item-thumb">
            <img src="${product.image}" alt="${product.name}">
          </div>
          <div class="cart-item-info">
            <div class="cart-item-name">${product.name}</div>
            <div class="small text-muted mb-1">${product.category.toUpperCase()} | ${product.brand}</div>
            <div class="cart-item-price">$${product.price.toFixed(2)}</div>
          </div>
          <div class="d-flex align-items-center gap-2">
            <button type="button" class="btn btn-sm btn-luxury px-3" onclick="addToCart('${product.id}'); toggleWishlist('${product.id}')" title="Move to Cart">
              <i class="bi bi-cart-plus me-1"></i> Add
            </button>
            <button type="button" class="cart-item-remove" onclick="toggleWishlist('${product.id}')" title="Remove">
              <i class="bi bi-x-lg"></i>
            </button>
          </div>
        </div>
      `;
    });

    listEl.innerHTML = html;
  }

  function initWishlist() {
    updateWishlistBadges();
    renderWishlist();
  }

  // ==========================================
  // QUICK VIEW MODAL
  // ==========================================
  window.openQuickView = function (productId) {
    if (typeof PRODUCTS_DATA === "undefined") return;
    const product = PRODUCTS_DATA.find((p) => p.id === productId);
    if (!product) return;

    const modalTitle = document.getElementById("quickViewTitle");
    const modalImg = document.getElementById("quickViewImg");
    const modalBrand = document.getElementById("quickViewBrand");
    const modalPrice = document.getElementById("quickViewPrice");
    const modalOldPrice = document.getElementById("quickViewOldPrice");
    const modalDesc = document.getElementById("quickViewDesc");
    const modalColors = document.getElementById("quickViewColors");
    const modalSpecs = document.getElementById("quickViewSpecs");
    const modalBtnAdd = document.getElementById("quickViewBtnAdd");
    const modalDetailsLink = document.getElementById("quickViewDetailsLink");

    if (modalTitle) modalTitle.textContent = product.name;
    if (modalImg) modalImg.src = product.image;
    if (modalBrand) modalBrand.textContent = product.brand;
    if (modalPrice) modalPrice.textContent = `$${product.price.toFixed(2)}`;
    if (modalOldPrice) {
      if (product.originalPrice) {
        modalOldPrice.textContent = `$${product.originalPrice.toFixed(2)}`;
        modalOldPrice.style.display = "inline";
      } else {
        modalOldPrice.style.display = "none";
      }
    }
    if (modalDesc) modalDesc.textContent = product.description;

    if (modalColors && product.colors) {
      let colorsHtml = "";
      product.colors.forEach((col, idx) => {
        colorsHtml += `
          <div class="form-check form-check-inline">
            <input class="form-check-input" type="radio" name="quickViewColor" id="qvCol_${idx}" value="${col.name}" ${idx === 0 ? "checked" : ""}>
            <label class="form-check-label small" for="qvCol_${idx}">
              <span class="swatch-dot d-inline-block align-middle me-1" style="background-color: ${col.code}"></span>
              ${col.name}
            </label>
          </div>
        `;
      });
      modalColors.innerHTML = colorsHtml;
    }

    if (modalSpecs && product.specs) {
      let specsHtml = "";
      const keys = Object.keys(product.specs).slice(0, 4);
      keys.forEach((k) => {
        specsHtml += `
          <div class="col-6 mb-2">
            <span class="text-muted small">${k}:</span>
            <div class="fw-semibold small">${product.specs[k]}</div>
          </div>
        `;
      });
      modalSpecs.innerHTML = specsHtml;
    }

    if (modalBtnAdd) {
      modalBtnAdd.onclick = function () {
        const selectedColorRadio = document.querySelector('input[name="quickViewColor"]:checked');
        const color = selectedColorRadio ? selectedColorRadio.value : null;
        addToCart(product.id, 1, color);

        const modalEl = document.getElementById("quickViewModal");
        if (modalEl && window.bootstrap) {
          const bsModal = bootstrap.Modal.getInstance(modalEl);
          if (bsModal) bsModal.hide();
        }
      };
    }

    if (modalDetailsLink) {
      modalDetailsLink.href = `product-details.html?id=${product.id}`;
    }

    const modalEl = document.getElementById("quickViewModal");
    if (modalEl && window.bootstrap) {
      const bsModal = bootstrap.Modal.getOrCreateInstance(modalEl);
      bsModal.show();
    }
  };

  // ==========================================
  // UNIFORM PRODUCT CARD GENERATOR
  // ==========================================
  window.createProductCardHTML = function (product, colClass = "col-12 col-sm-6 col-lg-3 mb-4") {
    const wishlist = getWishlist();
    const isWishlisted = wishlist.includes(product.id);

    // Badges
    let badgesHtml = "";
    if (product.discount) {
      badgesHtml += `<span class="badge-luxury badge-discount">${product.discount}</span>`;
    }
    if (product.isNew) {
      badgesHtml += `<span class="badge-luxury badge-dark">NEW</span>`;
    }
    if (product.isTrending) {
      badgesHtml += `<span class="badge-luxury badge-gold">TRENDING</span>`;
    }

    // Swatches
    let swatchesHtml = "";
    if (product.colors && product.colors.length > 0) {
      swatchesHtml = `<div class="color-swatch-list">`;
      product.colors.slice(0, 3).forEach((c) => {
        swatchesHtml += `<span class="swatch-dot" style="background-color: ${c.code}" title="${c.name}"></span>`;
      });
      if (product.colors.length > 3) {
        swatchesHtml += `<span class="small text-muted">+${product.colors.length - 3}</span>`;
      }
      swatchesHtml += `</div>`;
    }

    // Stars
    const fullStars = Math.floor(product.rating);
    const halfStar = product.rating % 1 >= 0.5;
    let starsHtml = "";
    for (let i = 0; i < fullStars; i++) starsHtml += `<i class="bi bi-star-fill"></i>`;
    if (halfStar) starsHtml += `<i class="bi bi-star-half"></i>`;

    return `
      <div class="${colClass} product-col-item d-flex" data-category="${product.category}" data-brand="${product.brand}" data-price="${product.price}">
        <div class="product-card w-100">
          <div class="product-thumb-wrapper">
            <a href="product-details.html?id=${product.id}">
              <img src="${product.image}" alt="${product.name}" loading="lazy">
            </a>
            <div class="product-badge-list">
              ${badgesHtml}
            </div>
            <div class="product-actions-floating">
              <button type="button" class="action-btn-pill btn-wishlist-${product.id} ${isWishlisted ? "active" : ""}" onclick="toggleWishlist('${product.id}')" title="Wishlist">
                <i class="bi bi-heart${isWishlisted ? "-fill text-danger" : ""}"></i>
              </button>
              <button type="button" class="action-btn-pill" onclick="openQuickView('${product.id}')" title="Quick View">
                <i class="bi bi-eye"></i>
              </button>
            </div>
          </div>
          <div class="product-body">
            <div class="product-brand-row">
              <span class="product-brand">${product.brand}</span>
              ${swatchesHtml}
            </div>
            <h6 class="product-title">
              <a href="product-details.html?id=${product.id}">${product.name}</a>
            </h6>
            <div class="product-rating">
              <span class="stars">${starsHtml}</span>
              <span>(${product.reviewsCount})</span>
            </div>
            <div class="product-price-wrapper">
              <span class="product-price">$${product.price.toFixed(2)}</span>
              ${product.originalPrice ? `<span class="product-old-price">$${product.originalPrice.toFixed(2)}</span>` : ""}
            </div>
            <div class="product-card-footer mt-auto">
              <button type="button" class="btn-add-cart-sm" onclick="addToCart('${product.id}')">
                <i class="bi bi-bag-plus"></i> Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    `;
  };

  // ==========================================
  // NEWSLETTER & GENERAL UTILITIES
  // ==========================================
  function initNewsletterForms() {
    const forms = document.querySelectorAll(".newsletter-form");
    forms.forEach((form) => {
      form.addEventListener("submit", function (e) {
        e.preventDefault();
        const input = form.querySelector('input[type="email"]');
        if (!input) return;

        const email = input.value.trim();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!email || !emailRegex.test(email)) {
          showToast("Please provide a valid email address.", "danger", "bi-exclamation-triangle-fill");
          input.focus();
          return;
        }

        showToast(
          "Thank you for subscribing! Check your inbox for your 15% VIP discount code.",
          "success",
          "bi-envelope-check-fill"
        );
        input.value = "";
      });
    });
  }

  // Coupon Copy Helper
  window.copyCoupon = function (code) {
    navigator.clipboard
      .writeText(code)
      .then(() => {
        showToast(`Promo code "${code}" copied to clipboard!`, "success", "bi-clipboard-check");
      })
      .catch(() => {
        showToast(`Code: ${code}`, "info", "bi-clipboard");
      });
  };
})();

