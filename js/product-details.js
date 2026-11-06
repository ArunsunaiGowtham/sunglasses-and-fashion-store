/**
 * Sunglasses & Fashion Accessories Store
 * Product Details Page Interactive Logic
 * Handles: Gallery Switching, Dynamic Spec Tables, Color Picking, Quantity Control, Related Products, Review Submission
 */

(function () {
  "use strict";

  let currentProduct = null;
  let selectedColor = "";
  let selectedQuantity = 1;

  document.addEventListener("DOMContentLoaded", function () {
    const pageContainer = document.getElementById("productDetailsPage");
    if (!pageContainer) return;

    loadProductFromUrl();
  });

  function loadProductFromUrl() {
    const params = new URLSearchParams(window.location.search);
    const productId = params.get("id") || "sg-1";

    if (typeof PRODUCTS_DATA === "undefined") return;
    currentProduct = PRODUCTS_DATA.find((p) => p.id === productId) || PRODUCTS_DATA[0];

    renderProductDetails();
    renderRelatedProducts();
    initReviewForm();
  }

  function renderProductDetails() {
    if (!currentProduct) return;

    // Breadcrumbs & Title
    const breadcrumbCat = document.getElementById("detailBreadcrumbCategory");
    const breadcrumbName = document.getElementById("detailBreadcrumbName");
    const titleEl = document.getElementById("detailTitle");
    const brandEl = document.getElementById("detailBrand");
    const priceEl = document.getElementById("detailPrice");
    const oldPriceEl = document.getElementById("detailOldPrice");
    const discountEl = document.getElementById("detailDiscount");
    const ratingEl = document.getElementById("detailRating");
    const reviewsCountEl = document.getElementById("detailReviewsCount");
    const descEl = document.getElementById("detailDesc");

    if (breadcrumbCat) {
      breadcrumbCat.textContent = currentProduct.category.toUpperCase();
      breadcrumbCat.href = `shop.html?category=${currentProduct.category}`;
    }
    if (breadcrumbName) breadcrumbName.textContent = currentProduct.name;
    if (titleEl) titleEl.textContent = currentProduct.name;
    if (brandEl) brandEl.textContent = currentProduct.brand;
    if (priceEl) priceEl.textContent = `$${currentProduct.price.toFixed(2)}`;

    if (oldPriceEl) {
      if (currentProduct.originalPrice) {
        oldPriceEl.textContent = `$${currentProduct.originalPrice.toFixed(2)}`;
        oldPriceEl.style.display = "inline";
      } else {
        oldPriceEl.style.display = "none";
      }
    }

    if (discountEl) {
      if (currentProduct.discount) {
        discountEl.textContent = currentProduct.discount;
        discountEl.style.display = "inline-block";
      } else {
        discountEl.style.display = "none";
      }
    }

    if (ratingEl && reviewsCountEl) {
      const fullStars = Math.floor(currentProduct.rating);
      let starsHtml = "";
      for (let i = 0; i < fullStars; i++) starsHtml += `<i class="bi bi-star-fill text-warning"></i>`;
      if (currentProduct.rating % 1 >= 0.5) starsHtml += `<i class="bi bi-star-half text-warning"></i>`;
      ratingEl.innerHTML = starsHtml;
      reviewsCountEl.textContent = `(${currentProduct.reviewsCount} customer reviews)`;
    }

    if (descEl) descEl.textContent = currentProduct.description;

    // Gallery
    renderGallery();

    // Color Swatches
    renderColors();

    // Quantity Selector
    initQuantityControls();

    // Action Buttons (Add to Cart / Wishlist)
    initActionButtons();

    // Specifications Table (Category-Matched)
    renderSpecifications();
  }

  function renderGallery() {
    const mainImg = document.getElementById("detailMainImg");
    const thumbsContainer = document.getElementById("detailThumbsRow");
    if (!mainImg || !thumbsContainer) return;

    mainImg.src = currentProduct.image;
    mainImg.alt = currentProduct.name;

    const gallery = currentProduct.gallery && currentProduct.gallery.length > 0
      ? currentProduct.gallery
      : [currentProduct.image];

    if (gallery.length <= 1) {
      thumbsContainer.style.display = "none";
      thumbsContainer.innerHTML = "";
    } else {
      thumbsContainer.style.display = "flex";
      let thumbsHtml = "";
      gallery.forEach((imgUrl, index) => {
        thumbsHtml += `
          <div class="gallery-thumb-item ${index === 0 ? "active" : ""}" data-img="${imgUrl}">
            <img src="${imgUrl}" alt="${currentProduct.name} - view ${index + 1}">
          </div>
        `;
      });
      thumbsContainer.innerHTML = thumbsHtml;

      const thumbs = thumbsContainer.querySelectorAll(".gallery-thumb-item");
      thumbs.forEach((thumb) => {
        thumb.addEventListener("click", function () {
          thumbs.forEach((t) => t.classList.remove("active"));
          this.classList.add("active");
          const targetImg = this.getAttribute("data-img");
          mainImg.style.opacity = "0.4";
          setTimeout(() => {
            mainImg.src = targetImg;
            mainImg.style.opacity = "1";
          }, 150);
        });
      });
    }
  }

  function renderColors() {
    const colorsContainer = document.getElementById("detailColorOptions");
    const colorLabel = document.getElementById("selectedColorLabel");
    if (!colorsContainer || !currentProduct.colors) return;

    selectedColor = currentProduct.colors[0]?.name || "Standard";
    if (colorLabel) colorLabel.textContent = selectedColor;

    let html = "";
    currentProduct.colors.forEach((col, idx) => {
      html += `
        <div class="color-option-btn ${idx === 0 ? "active" : ""}" data-color-name="${col.name}" title="${col.name}" style="cursor: pointer;">
          <span class="swatch-dot" style="background-color: ${col.code}; width: 22px; height: 22px;"></span>
          <span class="small ms-1">${col.name}</span>
        </div>
      `;
    });

    colorsContainer.innerHTML = html;

    const btns = colorsContainer.querySelectorAll(".color-option-btn");
    btns.forEach((b) => {
      b.addEventListener("click", function () {
        btns.forEach((x) => x.classList.remove("active"));
        this.classList.add("active");
        selectedColor = this.getAttribute("data-color-name");
        if (colorLabel) colorLabel.textContent = selectedColor;
      });
    });
  }

  function initQuantityControls() {
    selectedQuantity = 1;
    const qtyInput = document.getElementById("detailQtyInput");
    const btnMinus = document.getElementById("detailQtyMinus");
    const btnPlus = document.getElementById("detailQtyPlus");

    if (qtyInput) qtyInput.value = 1;

    if (btnMinus && qtyInput) {
      btnMinus.onclick = function () {
        if (selectedQuantity > 1) {
          selectedQuantity--;
          qtyInput.value = selectedQuantity;
        }
      };
    }

    if (btnPlus && qtyInput) {
      btnPlus.onclick = function () {
        selectedQuantity++;
        qtyInput.value = selectedQuantity;
      };
    }
  }

  function initActionButtons() {
    const btnAddToCart = document.getElementById("detailBtnAddToCart");
    const btnWishlist = document.getElementById("detailBtnWishlist");

    if (btnAddToCart) {
      btnAddToCart.onclick = function () {
        window.addToCart(currentProduct.id, selectedQuantity, selectedColor);
      };
    }

    if (btnWishlist) {
      const wishlist = window.getWishlist();
      const isFav = wishlist.includes(currentProduct.id);
      btnWishlist.classList.toggle("active", isFav);
      btnWishlist.innerHTML = `<i class="bi bi-heart${isFav ? "-fill text-danger" : ""}"></i>`;

      btnWishlist.onclick = function () {
        window.toggleWishlist(currentProduct.id);
        const updatedWishlist = window.getWishlist();
        const nowFav = updatedWishlist.includes(currentProduct.id);
        btnWishlist.classList.toggle("active", nowFav);
        btnWishlist.innerHTML = `<i class="bi bi-heart${nowFav ? "-fill text-danger" : ""}"></i>`;
      };
    }
  }

  function renderSpecifications() {
    const tableBody = document.getElementById("detailSpecsTableBody");
    if (!tableBody || !currentProduct.specs) return;

    let html = "";
    for (const [key, val] of Object.entries(currentProduct.specs)) {
      html += `
        <tr>
          <th scope="row" class="text-nowrap">${key}</th>
          <td>${val}</td>
        </tr>
      `;
    }

    tableBody.innerHTML = html;
  }

  function renderRelatedProducts() {
    const container = document.getElementById("detailRelatedProducts");
    if (!container || typeof PRODUCTS_DATA === "undefined") return;

    const related = window.getRelatedProducts(currentProduct.category, currentProduct.id, 4);
    let html = "";
    related.forEach((prod) => {
      html += window.createProductCardHTML(prod);
    });

    container.innerHTML = html;
  }

  function initReviewForm() {
    const form = document.getElementById("productReviewForm");
    if (!form) return;

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      const nameInput = document.getElementById("reviewAuthorName");
      const commentInput = document.getElementById("reviewText");

      if (!nameInput.value.trim() || !commentInput.value.trim()) {
        window.showToast("Please complete your name and review message.", "warning", "bi-exclamation-circle");
        return;
      }

      window.showToast(
        "Thank you! Your verified customer review has been submitted for moderation.",
        "success",
        "bi-star-fill"
      );

      form.reset();
    });
  }
})();

