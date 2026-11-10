const fs = require('fs');
let html = fs.readFileSync('brands.html', 'utf8');

const oldNav = `<div class="btn-group" role="group">
            <button type="button" class="btn btn-outline-dark btn-sm active" data-brand-filter="all">All Brands
              (8)</button>
            <button type="button" class="btn btn-outline-dark btn-sm" data-brand-filter="sunglasses">Eyewear</button>
            <button type="button" class="btn btn-outline-dark btn-sm" data-brand-filter="leather">Accessories</button>
          </div>`;

const newNav = `<div class="brand-filter-nav" role="tablist">
            <button type="button" class="brand-filter-pill active" data-brand-filter="all">
              <i class="bi bi-grid-fill"></i> All Brands <span class="badge rounded-pill bg-dark text-white ms-1">8</span>
            </button>
            <button type="button" class="brand-filter-pill" data-brand-filter="sunglasses">
              <i class="bi bi-eyeglasses"></i> Eyewear
            </button>
            <button type="button" class="brand-filter-pill" data-brand-filter="leather">
              <i class="bi bi-gem"></i> Accessories
            </button>
          </div>`;

// Replace ignoring \r\n vs \n
const regex = /<div class="btn-group" role="group">[\s\S]*?<\/div>/;
if (regex.test(html)) {
  html = html.replace(regex, newNav);
  fs.writeFileSync('brands.html', html, 'utf8');
  console.log('Successfully updated brands.html filter design!');
} else {
  console.error('Target not found in brands.html');
}

