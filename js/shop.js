/**
 * Sunglasses & Fashion Accessories Store
 * Shop Page Interactive Logic
 * Handles: Filtering, Real-time Search, Sorting, Price Range Slider, Pagination/Counts
 */

(function () {
  "use strict";

  let activeCategory = "all";
  let activeBrand = "all";
  let activeGender = "all";
  let activeMaxPrice = 350;
  let activeSort = "featured";
  let activeSearchQuery = "";
  let currentPage = 1;
  const itemsPerPage = 12;

  document.addEventListener("DOMContentLoaded", function () {
    if (!document.getElementById("shopProductsContainer")) return;

    parseUrlParameters();
    initFilters();
    initPriceSlider();
    initSearch();
    initSorting();
    renderShopProducts();
  });

  function parseUrlParameters() {
    const params = new URLSearchParams(window.location.search);
    if (params.has("category")) {
      activeCategory = params.get("category").toLowerCase();
    }
    if (params.has("brand")) {
      activeBrand = params.get("brand");
    }
    if (params.has("search")) {
      activeSearchQuery = params.get("search").toLowerCase();
      const searchInput = document.getElementById("shopSearchInput");
      if (searchInput) searchInput.value = activeSearchQuery;
    }
    if (params.has("gender")) {
      activeGender = params.get("gender").toLowerCase();
    }
  }

  function initFilters() {
    // Category chips / links
    const categoryBtns = document.querySelectorAll("[data-filter-category]");
    categoryBtns.forEach((btn) => {
      const cat = btn.getAttribute("data-filter-category").toLowerCase();
      if (cat === activeCategory) {
        btn.classList.add("active");
      } else {
        btn.classList.remove("active");
      }

      btn.addEventListener("click", function (e) {
        e.preventDefault();
        activeCategory = this.getAttribute("data-filter-category").toLowerCase();
        categoryBtns.forEach((b) => {
          b.classList.toggle("active", b.getAttribute("data-filter-category").toLowerCase() === activeCategory);
        });
        currentPage = 1;
        renderShopProducts();
      });
    });

    // Brand Radios / Checkboxes
    const brandRadios = document.querySelectorAll('input[name="brandFilter"]');
    brandRadios.forEach((radio) => {
      if (radio.value === activeBrand) radio.checked = true;
      radio.addEventListener("change", function () {
        activeBrand = this.value;
        currentPage = 1;
        renderShopProducts();
      });
    });

    // Gender Filters
    const genderRadios = document.querySelectorAll('input[name="genderFilter"]');
    genderRadios.forEach((radio) => {
      if (radio.value === activeGender) radio.checked = true;
      radio.addEventListener("change", function () {
        activeGender = this.value;
        currentPage = 1;
        renderShopProducts();
      });
    });

    // Reset Filters Button
    const resetBtn = document.getElementById("btnResetFilters");
    if (resetBtn) {
      resetBtn.addEventListener("click", function () {
        activeCategory = "all";
        activeBrand = "all";
        activeGender = "all";
        activeMaxPrice = 350;
        activeSearchQuery = "";
        activeSort = "featured";

        // Reset UI
        categoryBtns.forEach((b) => {
          b.classList.toggle("active", b.getAttribute("data-filter-category") === "all");
        });

        const allBrandRadio = document.getElementById("brandAll");
        if (allBrandRadio) allBrandRadio.checked = true;

        const allGenderRadio = document.getElementById("genderAll");
        if (allGenderRadio) allGenderRadio.checked = true;

        const priceRange = document.getElementById("priceRangeInput");
        const priceDisplay = document.getElementById("priceRangeValue");
        if (priceRange) priceRange.value = 350;
        if (priceDisplay) priceDisplay.textContent = "$350";

        const searchInput = document.getElementById("shopSearchInput");
        if (searchInput) searchInput.value = "";

        const sortSelect = document.getElementById("shopSortSelect");
        if (sortSelect) sortSelect.value = "featured";

        currentPage = 1;
        renderShopProducts();
        window.showToast("All filters have been reset", "info", "bi-arrow-counterclockwise");
      });
    }
  }

  function initPriceSlider() {
    const rangeInput = document.getElementById("priceRangeInput");
    const rangeValue = document.getElementById("priceRangeValue");
    if (!rangeInput || !rangeValue) return;

    rangeInput.addEventListener("input", function () {
      activeMaxPrice = parseFloat(this.value);
      rangeValue.textContent = `$${activeMaxPrice}`;
      currentPage = 1;
      renderShopProducts();
    });
  }

  function initSearch() {
    const searchInput = document.getElementById("shopSearchInput");
    if (!searchInput) return;

    let debounceTimer;
    searchInput.addEventListener("input", function () {
      clearTimeout(debounceTimer);
      debounceTimer = setTimeout(() => {
        activeSearchQuery = this.value.trim().toLowerCase();
        currentPage = 1;
        renderShopProducts();
      }, 250);
    });
  }

  function initSorting() {
    const sortSelect = document.getElementById("shopSortSelect");
    if (!sortSelect) return;

    sortSelect.addEventListener("change", function () {
      activeSort = this.value;
      renderShopProducts();
    });
  }

  function renderShopProducts() {
    const container = document.getElementById("shopProductsContainer");
    const countEl = document.getElementById("shopResultCount");
    const emptyStateEl = document.getElementById("shopEmptyState");
    if (!container || typeof PRODUCTS_DATA === "undefined") return;

    // 1. Filter
    let filtered = PRODUCTS_DATA.filter((item) => {
      // Category filter
      if (activeCategory !== "all" && item.category.toLowerCase() !== activeCategory) {
        return false;
      }
      // Brand filter
      if (activeBrand !== "all" && item.brand.toLowerCase() !== activeBrand.toLowerCase()) {
        return false;
      }
      // Gender filter
      if (activeGender !== "all" && item.gender.toLowerCase() !== activeGender && item.gender !== "unisex") {
        return false;
      }
      // Price filter
      if (item.price > activeMaxPrice) {
        return false;
      }
      // Search query
      if (activeSearchQuery) {
        const titleMatch = item.name.toLowerCase().includes(activeSearchQuery);
        const descMatch = item.shortDesc.toLowerCase().includes(activeSearchQuery);
        const brandMatch = item.brand.toLowerCase().includes(activeSearchQuery);
        const subCatMatch = item.subCategory ? item.subCategory.toLowerCase().includes(activeSearchQuery) : false;
        if (!titleMatch && !descMatch && !brandMatch && !subCatMatch) {
          return false;
        }
      }
      return true;
    });

    // 2. Sort
    filtered.sort((a, b) => {
      if (activeSort === "price-low") return a.price - b.price;
      if (activeSort === "price-high") return b.price - a.price;
      if (activeSort === "rating") return b.rating - a.rating;
      if (activeSort === "newest") return (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0);
      if (activeSort === "bestseller") return (b.isBestSeller ? 1 : 0) - (a.isBestSeller ? 1 : 0);
      // default: featured
      return (b.isFeatured ? 1 : 0) - (a.isFeatured ? 1 : 0);
    });

    // 3. Update count
    if (countEl) {
      countEl.textContent = `Showing ${filtered.length} of ${PRODUCTS_DATA.length} products`;
    }

    // 4. Empty State Handling
    if (filtered.length === 0) {
      container.innerHTML = "";
      if (emptyStateEl) emptyStateEl.classList.remove("d-none");
      return;
    }

    if (emptyStateEl) emptyStateEl.classList.add("d-none");

    // 5. Render product cards
    let html = "";
    filtered.forEach((product) => {
      html += window.createProductCardHTML(product, "col-12 col-sm-6 col-lg-4");
    });

    container.innerHTML = html;
  }
})();

