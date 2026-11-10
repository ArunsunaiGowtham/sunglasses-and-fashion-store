const fs = require('fs');
const code = fs.readFileSync('js/products-data.js', 'utf8');
const fn = new Function(code + '; return PRODUCTS_DATA;');
const products = fn();

function getBadge(product) {
  if (product.badge) {
    return { text: product.badge, class: product.badgeClass || 'badge-gold' };
  } else if (product.discount && !product.isNew && !product.isTrending) {
    return { text: product.discount, class: 'badge-discount' };
  } else if (product.isTrending && !product.isNew) {
    return { text: 'TRENDING', class: 'badge-gold' };
  } else if (product.isNew) {
    return { text: 'NEW', class: 'badge-dark' };
  } else if (product.discount) {
    return { text: product.discount, class: 'badge-discount' };
  } else if (product.isBestSeller) {
    return { text: 'BEST SELLER', class: 'badge-gold' };
  }
  return null;
}

console.log('--- HOME TRENDING (sg-1, sg-2, sg-3, sg-5) ---');
const trending = products.filter(p => p.category === 'sunglasses' && p.isTrending).slice(0, 4);
trending.forEach(p => {
  const b = getBadge(p);
  console.log(p.id.padEnd(8), '|', p.name.padEnd(30), '|', b ? `${b.text} (${b.class})` : 'NO BADGE');
});

console.log('\n--- HOME NEW ARRIVALS ---');
const arrivals = products.filter(p => p.isNew).slice(0, 4);
arrivals.forEach(p => {
  const b = getBadge(p);
  console.log(p.id.padEnd(8), '|', p.name.padEnd(30), '|', b ? `${b.text} (${b.class})` : 'NO BADGE');
});
