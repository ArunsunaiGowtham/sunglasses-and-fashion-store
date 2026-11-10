const fs = require('fs');
let html = fs.readFileSync('blog.html', 'utf8');

const oldPills = `<div class="blog-pills-wrap" id="blogCategoryPillsWrap">
            <button type="button" class="btn-blog-pill active" data-blog-category="all">
              All Articles <span class="pill-count">( 18 )</span>
            </button>
            <button type="button" class="btn-blog-pill" data-blog-category="Sunglasses Trends">
              Sunglasses Trends <span class="pill-count">( 3 )</span>
            </button>
            <button type="button" class="btn-blog-pill" data-blog-category="Leather Belts & Care">
              Leather Belts & Care <span class="pill-count">( 3 )</span>
            </button>
            <button type="button" class="btn-blog-pill" data-blog-category="Caps & Headwear">
              Caps & Headwear <span class="pill-count">( 3 )</span>
            </button>
            <button type="button" class="btn-blog-pill" data-blog-category="Luxury Accessories">
              Luxury Accessories <span class="pill-count">( 3 )</span>
            </button>
            <button type="button" class="btn-blog-pill" data-blog-category="Face Shape Guides">
              Face Shape Guides <span class="pill-count">( 3 )</span>
            </button>
            <button type="button" class="btn-blog-pill" data-blog-category="UV & Lens Optics">
              UV & Lens Optics <span class="pill-count">( 3 )</span>
            </button>
          </div>`;

const newPills = `<div class="blog-pills-wrap" id="blogCategoryPillsWrap">
            <button type="button" class="btn-blog-pill active" data-blog-category="all">
              <i class="bi bi-grid-fill me-1"></i> All Articles <span class="pill-count">(18)</span>
            </button>
            <button type="button" class="btn-blog-pill" data-blog-category="Sunglasses Trends">
              <i class="bi bi-eyeglasses me-1"></i> Sunglasses Trends <span class="pill-count">(3)</span>
            </button>
            <button type="button" class="btn-blog-pill" data-blog-category="Leather Belts & Care">
              <i class="bi bi-gem me-1"></i> Leather Belts & Care <span class="pill-count">(3)</span>
            </button>
            <button type="button" class="btn-blog-pill" data-blog-category="Caps & Headwear">
              <i class="bi bi-shield me-1"></i> Caps & Headwear <span class="pill-count">(3)</span>
            </button>
            <button type="button" class="btn-blog-pill" data-blog-category="Luxury Accessories">
              <i class="bi bi-watch me-1"></i> Luxury Accessories <span class="pill-count">(3)</span>
            </button>
            <button type="button" class="btn-blog-pill" data-blog-category="Face Shape Guides">
              <i class="bi bi-person-badge me-1"></i> Face Shape Guides <span class="pill-count">(3)</span>
            </button>
            <button type="button" class="btn-blog-pill" data-blog-category="UV & Lens Optics">
              <i class="bi bi-sun me-1"></i> UV & Lens Optics <span class="pill-count">(3)</span>
            </button>
          </div>`;

const regex = /<div class="blog-pills-wrap" id="blogCategoryPillsWrap">[\s\S]*?<\/div>/;
if (regex.test(html)) {
  html = html.replace(regex, newPills);
  fs.writeFileSync('blog.html', html, 'utf8');
  console.log('Successfully updated blog.html pill icons and labels!');
} else {
  console.error('Target not found in blog.html');
}

