const fs = require('fs');
let html = fs.readFileSync('index-2.html', 'utf8');

html = html.replace(
  '<h3 class="h2 fw-bold mb-2">The Executive Wardrobe</h3>',
  '<h3 class="h2 fw-bold mb-2 text-white">The Executive Wardrobe</h3>'
);

html = html.replace(
  '<h3 class="h2 fw-bold mb-2">The Riviera Siren</h3>',
  '<h3 class="h2 fw-bold mb-2 text-white">The Riviera Siren</h3>'
);

fs.writeFileSync('index-2.html', html, 'utf8');
console.log('Successfully updated index-2.html promo headings to text-white');

