const fs = require('fs');

const subpages = [
  'about.html', 'blog.html', 'brands.html', 'cart.html', 'checkout.html',
  'contact.html', 'offers.html', 'privacy-policy.html', 'product-details.html',
  'shop.html', 'terms-of-care.html'
];

subpages.forEach(file => {
  const content = fs.readFileSync(file, 'utf8');
  const match = content.match(/<nav aria-label="breadcrumb"[^>]*>[\s\S]*?<\/nav>/);
  if (match) {
    console.log(`[${file}] matches:\n${match[0]}\n---`);
  } else {
    console.log(`[${file}] NO match`);
  }
});

