/**
 * Solaris & Co. - Checkout Page Controller
 * Manages order summary calculation, shipping selection, promo codes, payment validation, and order placement.
 */

(function () {
  "use strict";

  const CART_KEY = "lux_store_cart";
  let appliedPromo = null; // { code: 'SOLARIS10', discountPercent: 0.10 }

  document.addEventListener("DOMContentLoaded", function () {
    initCheckoutPage();
  });

  function initCheckoutPage() {
    renderCheckoutSummary();
    setupShippingMethodListeners();
    setupPaymentTabListeners();
    setupPromoCode();
    setupCheckoutForm();
  }

  function getCartItems() {
    try {
      return JSON.parse(localStorage.getItem(CART_KEY)) || [];
    } catch (e) {
      return [];
    }
  }

  function renderCheckoutSummary() {
    const cart = getCartItems();
    const activeView = document.getElementById("checkoutActiveView");
    const emptyView = document.getElementById("checkoutEmptyView");
    const itemsListEl = document.getElementById("checkoutItemsList");
    const countBadge = document.getElementById("checkoutItemCountBadge");

    if (cart.length === 0) {
      if (activeView) activeView.classList.add("d-none");
      if (emptyView) emptyView.classList.remove("d-none");
      return;
    }

    if (activeView) activeView.classList.remove("d-none");
    if (emptyView) emptyView.classList.add("d-none");

    const totalQty = cart.reduce((sum, item) => sum + item.quantity, 0);
    if (countBadge) {
      countBadge.textContent = `${totalQty} ${totalQty === 1 ? "Item" : "Items"}`;
    }

    if (itemsListEl) {
      let html = "";
      cart.forEach((item) => {
        const lineTotal = item.price * item.quantity;
        html += `
          <div class="checkout-item-row">
            <div class="checkout-item-thumb position-relative">
              <img src="${item.image}" alt="${item.name}">
              <span class="checkout-qty-badge">${item.quantity}</span>
            </div>
            <div class="flex-grow-1 min-w-0">
              <div class="fw-bold text-main small text-truncate" title="${item.name}">${item.name}</div>
              <div class="small text-muted">${item.color || "Standard"} • ${item.brand || "Solaris"}</div>
            </div>
            <div class="text-end ps-2">
              <div class="fw-semibold text-main small">$${lineTotal.toFixed(2)}</div>
            </div>
          </div>
        `;
      });
      itemsListEl.innerHTML = html;
    }

    updateTotals();
  }

  function getSelectedShippingCost() {
    const selected = document.querySelector('input[name="shippingMethod"]:checked');
    return selected ? parseFloat(selected.value) || 0 : 0;
  }

  function updateTotals() {
    const cart = getCartItems();
    const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const shipping = getSelectedShippingCost();
    const taxRate = 0.08; // 8% estimated luxury retail tax
    const tax = subtotal * taxRate;

    let discount = 0;
    if (appliedPromo) {
      discount = subtotal * appliedPromo.discountPercent;
    }

    const total = Math.max(0, subtotal + shipping + tax - discount);

    const subtotalEl = document.getElementById("summarySubtotal");
    const shippingEl = document.getElementById("summaryShipping");
    const taxEl = document.getElementById("summaryTax");
    const discountRow = document.getElementById("summaryDiscountRow");
    const discountEl = document.getElementById("summaryDiscount");
    const totalEl = document.getElementById("summaryTotal");

    if (subtotalEl) subtotalEl.textContent = `$${subtotal.toFixed(2)}`;

    if (shippingEl) {
      if (shipping === 0) {
        shippingEl.textContent = "FREE";
        shippingEl.className = "checkout-calc-val text-success";
      } else {
        shippingEl.textContent = `$${shipping.toFixed(2)}`;
        shippingEl.className = "checkout-calc-val text-main";
      }
    }

    if (taxEl) taxEl.textContent = `$${tax.toFixed(2)}`;

    if (discountRow && discountEl) {
      if (discount > 0) {
        discountRow.classList.remove("d-none");
        discountEl.textContent = `-$${discount.toFixed(2)} (${appliedPromo.code})`;
      } else {
        discountRow.classList.add("d-none");
      }
    }

    if (totalEl) totalEl.textContent = `$${total.toFixed(2)}`;
  }

  function setupShippingMethodListeners() {
    const radios = document.querySelectorAll('input[name="shippingMethod"]');
    radios.forEach((radio) => {
      radio.addEventListener("change", function () {
        document.querySelectorAll(".shipping-option-card").forEach((c) => c.classList.remove("active"));
        const parentCard = this.closest(".shipping-option-card");
        if (parentCard) parentCard.classList.add("active");
        updateTotals();
      });
    });
  }

  function setupPaymentTabListeners() {
    const tabButtons = document.querySelectorAll(".payment-tab-btn");
    const cardFields = document.getElementById("paymentCardFields");
    const paypalFields = document.getElementById("paymentPaypalFields");
    const codFields = document.getElementById("paymentCodFields");

    tabButtons.forEach((btn) => {
      btn.addEventListener("click", function () {
        tabButtons.forEach((b) => b.classList.remove("active"));
        this.classList.add("active");

        const tab = this.getAttribute("data-payment-tab");
        if (cardFields) cardFields.classList.toggle("d-none", tab !== "card");
        if (paypalFields) paypalFields.classList.toggle("d-none", tab !== "paypal");
        if (codFields) codFields.classList.toggle("d-none", tab !== "cod");

        // Toggle required attributes on card inputs
        const cardInputs = cardFields ? cardFields.querySelectorAll("input") : [];
        cardInputs.forEach((inp) => {
          if (tab === "card") {
            inp.setAttribute("required", "");
          } else {
            inp.removeAttribute("required");
            inp.classList.remove("is-invalid");
          }
        });
      });
    });
  }

  function setupPromoCode() {
    const btnApply = document.getElementById("btnApplyPromo");
    const inputPromo = document.getElementById("checkoutPromoInput");
    const feedbackEl = document.getElementById("promoFeedback");

    if (!btnApply || !inputPromo) return;

    btnApply.addEventListener("click", function () {
      const code = inputPromo.value.trim().toUpperCase();
      if (!code) {
        showPromoMsg("Please enter a valid coupon or gift voucher code.", "danger");
        return;
      }

      if (code === "SOLARIS10") {
        appliedPromo = { code: "SOLARIS10", discountPercent: 0.1 };
        showPromoMsg("Bespoke coupon SOLARIS10 applied! 10% discount deducted.", "success");
        updateTotals();
      } else if (code === "LUXURY20") {
        appliedPromo = { code: "LUXURY20", discountPercent: 0.2 };
        showPromoMsg("VIP styling voucher LUXURY20 applied! 20% discount deducted.", "success");
        updateTotals();
      } else {
        showPromoMsg(`Coupon "${code}" is invalid or expired. Try SOLARIS10.`, "danger");
      }
    });

    function showPromoMsg(msg, type) {
      if (!feedbackEl) return;
      feedbackEl.textContent = msg;
      feedbackEl.className = `small mt-2 text-${type}`;
      feedbackEl.classList.remove("d-none");
    }
  }

  function setupCheckoutForm() {
    const form = document.getElementById("checkoutForm");
    if (!form) return;

    // Card formatting helpers
    const cardNumInput = document.getElementById("cardNumber");
    if (cardNumInput) {
      cardNumInput.addEventListener("input", function (e) {
        let val = e.target.value.replace(/\D/g, "").substring(0, 16);
        let formatted = val.match(/.{1,4}/g)?.join(" ") || val;
        e.target.value = formatted;
      });
    }

    const cardExpiryInput = document.getElementById("cardExpiry");
    if (cardExpiryInput) {
      cardExpiryInput.addEventListener("input", function (e) {
        let val = e.target.value.replace(/\D/g, "").substring(0, 4);
        if (val.length >= 2) {
          e.target.value = val.substring(0, 2) + "/" + val.substring(2);
        } else {
          e.target.value = val;
        }
      });
    }

    form.addEventListener("submit", function (e) {
      e.preventDefault();

      if (!form.checkValidity()) {
        e.stopPropagation();
        form.classList.add("was-validated");

        // Focus first invalid element
        const firstInvalid = form.querySelector(":invalid");
        if (firstInvalid) {
          firstInvalid.scrollIntoView({ behavior: "smooth", block: "center" });
          firstInvalid.focus();
        }
        if (window.showToast) {
          window.showToast("Please complete all required shipping & payment fields.", "warning", "bi-exclamation-triangle");
        }
        return;
      }

      form.classList.add("was-validated");

      // Complete Order
      const btnPlaceOrder = document.getElementById("btnPlaceOrder");
      if (btnPlaceOrder) {
        btnPlaceOrder.disabled = true;
        btnPlaceOrder.innerHTML = `<span class="spinner-border spinner-border-sm me-2" role="status"></span> Encrypting & Processing...`;
      }

      setTimeout(() => {
        completeOrder();
      }, 1200);
    });
  }

  function completeOrder() {
    const email = document.getElementById("custEmail")?.value || "client@example.com";
    const total = document.getElementById("summaryTotal")?.textContent || "$0.00";
    const orderRef = "#SOL-" + Math.floor(100000 + Math.random() * 900000);

    // Populate Success Modal
    const refEl = document.getElementById("orderSuccessRef");
    const emailEl = document.getElementById("orderSuccessEmail");
    const totalEl = document.getElementById("orderSuccessTotal");

    if (refEl) refEl.textContent = orderRef;
    if (emailEl) emailEl.textContent = email;
    if (totalEl) totalEl.textContent = total;

    // Clear cart in localStorage
    localStorage.removeItem(CART_KEY);

    // Update global cart badges & offcanvas
    if (typeof window.saveCart === "function") {
      window.saveCart([]);
    } else {
      const badges = document.querySelectorAll(".cart-badge-count");
      badges.forEach((b) => (b.style.display = "none"));
    }

    // Show Celebration Modal
    const modalEl = document.getElementById("orderSuccessModal");
    if (modalEl && window.bootstrap) {
      const modal = new bootstrap.Modal(modalEl);
      modal.show();
    } else {
      alert(`Order Confirmed! Your order reference is ${orderRef}. Total: ${total}.`);
      window.location.href = "shop.html";
    }
  }
})();

