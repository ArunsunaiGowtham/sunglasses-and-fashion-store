/**
 * Sunglasses & Fashion Accessories Store
 * Single-Page Blog Interactive Controller (Reference Format: 18 Articles, 3-Column Grid)
 * Strict Requirement: All reading and filtering occurs on blog.html without navigating away.
 */

(function () {
  "use strict";

  let activeCategory = "all";
  let activeSearch = "";

  document.addEventListener("DOMContentLoaded", function () {
    const blogListContainer = document.getElementById("blogArticlesContainer");
    if (!blogListContainer) return;

    initBlogSearch();
    initBlogCategories();
    renderBlogArticles();
    initHashArticle();
  });

  function initBlogSearch() {
    const searchInput = document.getElementById("blogSearchInput");
    if (!searchInput) return;

    searchInput.addEventListener("input", function () {
      activeSearch = this.value.trim().toLowerCase();
      renderBlogArticles();
    });

    const resetBtn = document.getElementById("btnResetBlogSearch");
    if (resetBtn) {
      resetBtn.addEventListener("click", function () {
        if (searchInput) searchInput.value = "";
        activeSearch = "";
        const allBtn = document.querySelector('[data-blog-category="all"]');
        if (allBtn) allBtn.click();
      });
    }
  }

  function initBlogCategories() {
    const categoryLinks = document.querySelectorAll("[data-blog-category]");
    categoryLinks.forEach((link) => {
      link.addEventListener("click", function (e) {
        e.preventDefault();
        categoryLinks.forEach((l) => l.classList.remove("active"));
        this.classList.add("active");
        activeCategory = this.getAttribute("data-blog-category");
        renderBlogArticles();
      });
    });
  }

  function renderBlogArticles() {
    const container = document.getElementById("blogArticlesContainer");
    const countEl = document.getElementById("blogArticlesCount");
    const emptyStateEl = document.getElementById("blogEmptyState");
    if (!container || typeof BLOG_DATA === "undefined") return;

    let filtered = BLOG_DATA.filter((article) => {
      // Category filter
      if (activeCategory !== "all" && article.category.toLowerCase() !== activeCategory.toLowerCase()) {
        return false;
      }
      // Search filter
      if (activeSearch) {
        const titleMatch = article.title.toLowerCase().includes(activeSearch);
        const excerptMatch = article.shortDesc.toLowerCase().includes(activeSearch);
        const catMatch = article.category.toLowerCase().includes(activeSearch);
        const tagMatch = article.tags.some((t) => t.toLowerCase().includes(activeSearch));
        const authorMatch = article.author.toLowerCase().includes(activeSearch);
        if (!titleMatch && !excerptMatch && !catMatch && !tagMatch && !authorMatch) {
          return false;
        }
      }
      return true;
    });

    if (countEl) {
      countEl.textContent =
        filtered.length === BLOG_DATA.length
          ? `Showing all ${filtered.length} articles`
          : `Showing ${filtered.length} of ${BLOG_DATA.length} articles`;
    }

    if (filtered.length === 0) {
      container.innerHTML = "";
      if (emptyStateEl) emptyStateEl.classList.remove("d-none");
      return;
    }

    if (emptyStateEl) emptyStateEl.classList.add("d-none");

    let html = "";
    filtered.forEach((article) => {
      html += `
        <div class="col-12 col-md-6 col-lg-4 d-flex">
          <div class="blog-card w-100">
            <div class="blog-card-img-wrap" style="cursor: pointer;" onclick="openArticleReader('${article.id}')" title="Click to read full article">
              <img src="${article.image}" alt="${article.title}" loading="lazy">
              <span class="blog-card-category">${article.category}</span>
            </div>
            <div class="blog-card-body">
              <div class="blog-meta">
                <span class="blog-meta-item"><i class="bi bi-calendar3"></i> ${article.date}</span>
                <span class="blog-meta-item"><i class="bi bi-clock"></i> ${article.readTime}</span>
              </div>
              <h5 class="blog-title" title="${article.title}">
                <a href="javascript:void(0)" onclick="openArticleReader('${article.id}')">${article.title}</a>
              </h5>
              <p class="blog-excerpt">${article.shortDesc}</p>
              <div class="blog-card-footer">
                <div class="blog-author-info">
                  <div class="blog-author-avatar">${article.author.charAt(0)}</div>
                  <span class="blog-author-name">${article.author}</span>
                </div>
                <button type="button" class="btn-read-article" onclick="openArticleReader('${article.id}')">
                  Read Full Story <i class="bi bi-arrow-right"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      `;
    });

    container.innerHTML = html;
  }

  // Open Full Article Reader (2-Column Dedicated View Matching Reference)
  window.openArticleReader = function (articleId) {
    const data = (typeof BLOG_DATA !== "undefined" && BLOG_DATA) ? BLOG_DATA : (window.BLOG_DATA || []);
    if (!data || data.length === 0) return;
    const article = data.find((a) => a.id === articleId);
    if (!article) return;

    // Left Column elements
    const detailImg = document.getElementById("detailArticleImg");
    const detailMeta = document.getElementById("detailArticleMeta");
    const detailCategory = document.getElementById("detailArticleCategory");
    const detailTitle = document.getElementById("detailArticleTitle");
    const detailBody = document.getElementById("detailArticleBody");
    const detailTags = document.getElementById("detailArticleTags");
    const breadcrumbCat = document.getElementById("articleBreadcrumbCategory");

    if (detailImg) {
      detailImg.src = article.image;
      detailImg.alt = article.title;
    }

    if (detailMeta) {
      detailMeta.innerHTML = `
        <span class="d-inline-flex align-items-center"><i class="bi bi-person me-2 fs-6"></i>${article.author}, ${article.authorRole}</span>
        <span class="d-inline-flex align-items-center"><i class="bi bi-calendar3 me-2 fs-6"></i>${article.date}</span>
        <span class="d-inline-flex align-items-center"><i class="bi bi-clock me-2 fs-6"></i>${article.readTime}</span>
      `;
    }

    if (detailCategory) detailCategory.textContent = article.category;
    if (detailTitle) detailTitle.textContent = article.title;
    if (detailBody) detailBody.innerHTML = article.fullContent;

    if (detailTags && article.tags) {
      let tagsHtml = "";
      article.tags.forEach((tag) => {
        tagsHtml += `<span class="badge bg-secondary-subtle text-secondary me-1 mb-1 px-2 py-1">#${tag}</span>`;
      });
      detailTags.innerHTML = tagsHtml;
    }

    if (breadcrumbCat) {
      breadcrumbCat.textContent = article.category;
    }

    // Right Column: All 18 Knowledge Guides List
    const guidesListEl = document.getElementById("sidebarGuidesList");
    if (guidesListEl) {
      let guidesHtml = "";
      data.forEach((item, idx) => {
        const isActive = item.id === article.id;
        guidesHtml += `
          <a href="javascript:void(0)" class="sidebar-guide-item ${isActive ? "active" : ""}" onclick="openArticleReader('${item.id}')" title="${item.title}">
            <span class="guide-item-title text-truncate me-2">${idx + 1}. ${item.title}</span>
            ${isActive ? "" : '<span class="guide-item-arrow">&rarr;</span>'}
          </a>
        `;
      });
      guidesListEl.innerHTML = guidesHtml;

      const activeEl = guidesListEl.querySelector(".sidebar-guide-item.active");
      if (activeEl) {
        activeEl.scrollIntoView({ block: "nearest", behavior: "smooth" });
      }
    }

    // Toggle View: hide catalog grid, show 2-column reader view
    const catalogView = document.getElementById("blogCatalogView");
    const detailView = document.getElementById("blogArticleDetailView");

    if (catalogView) catalogView.classList.add("d-none");
    if (detailView) {
      detailView.classList.remove("d-none");
      detailView.scrollIntoView({ behavior: "smooth", block: "start" });
    }

    // Update URL hash without reload
    try {
      if (window.location.hash !== "#" + article.id) {
        history.pushState({ articleId: article.id }, "", "#" + article.id);
      }
    } catch (e) {}
  };

  // Close Article Reader & Return to Catalog Grid
  window.closeArticleReader = function () {
    const catalogView = document.getElementById("blogCatalogView");
    const detailView = document.getElementById("blogArticleDetailView");

    if (detailView) detailView.classList.add("d-none");
    if (catalogView) {
      catalogView.classList.remove("d-none");
      catalogView.scrollIntoView({ behavior: "smooth", block: "start" });
    }

    try {
      history.pushState(null, "", window.location.pathname + window.location.search);
    } catch (e) {}
  };

  // Auto-open article if URL contains hash (e.g. #blog-1)
  function initHashArticle() {
    const hash = window.location.hash ? window.location.hash.replace("#", "") : "";
    if (hash && typeof BLOG_DATA !== "undefined") {
      const exists = BLOG_DATA.some((a) => a.id === hash);
      if (exists) {
        setTimeout(() => openArticleReader(hash), 150);
      }
    }
  }

  // Handle browser back/forward buttons
  window.addEventListener("popstate", function () {
    const hash = window.location.hash ? window.location.hash.replace("#", "") : "";
    if (hash && typeof BLOG_DATA !== "undefined" && BLOG_DATA.some((a) => a.id === hash)) {
      openArticleReader(hash);
    } else {
      closeArticleReader();
    }
  });
})();
