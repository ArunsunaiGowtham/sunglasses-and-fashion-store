const fs = require('fs');

const pages = [
  'about.html', 'blog.html', 'brands.html', 'cart.html', 'checkout.html',
  'contact.html', 'index-2.html', 'index.html', 'offers.html',
  'privacy-policy.html', 'product-details.html', 'shop.html', 'terms-of-care.html'
];

const newFooterBrand = `<a class="navbar-brand text-white mb-3 d-inline-flex align-items-center" href="index.html">
            <div class="brand-icon-box">
              <i class="bi bi-eyeglasses"></i>
            </div>
            <span>SOLARIS<span class="text-secondary">&</span>CO.</span>
          </a>`;

pages.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  const idx = content.indexOf('brand-subtitle');
  if (idx !== -1) {
    const start = content.lastIndexOf('<a class="navbar-brand', idx);
    const end = content.indexOf('</a>', idx) + 4;
    content = content.substring(0, start) + newFooterBrand + content.substring(end);
    fs.writeFileSync(file, content, 'utf8');
    console.log(`[${file}] Successfully synced footer brand logo with navbar!`);
  } else {
    console.log(`[${file}] brand-subtitle not found`);
  }
});
