const fs = require('fs');
const files = [
  'index.html', 'index-2.html', 'about.html', 'shop.html', 'brands.html',
  'blog.html', 'offers.html', 'contact.html', 'cart.html', 'checkout.html',
  'product-details.html', 'terms-of-care.html', 'privacy-policy.html'
];

files.forEach(f => {
  const content = fs.readFileSync(f, 'utf8');
  const hasNewsletter = content.includes('newsletter-form') || content.includes('NEWSLETTER');
  const hasFooter = content.includes('site-footer');
  console.log(`${f}: hasNewsletter=${hasNewsletter}, hasFooter=${hasFooter}`);
});

