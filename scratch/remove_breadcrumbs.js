const fs = require('fs');

const subpages = [
  'about.html', 'blog.html', 'brands.html', 'cart.html', 'checkout.html',
  'contact.html', 'offers.html', 'privacy-policy.html', 'product-details.html',
  'shop.html', 'terms-of-care.html'
];

subpages.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  // Match <nav aria-label="breadcrumb"...> ... </nav> plus optional preceding whitespace
  const regex = /[ \t]*<nav aria-label="breadcrumb"[^>]*>[\s\S]*?<\/nav>[ \t]*\r?\n?/g;
  if (regex.test(content)) {
    content = content.replace(regex, '');
    fs.writeFileSync(file, content, 'utf8');
    console.log(`[${file}] Breadcrumb navigation removed successfully.`);
  } else {
    console.log(`[${file}] No breadcrumb found.`);
  }
});

