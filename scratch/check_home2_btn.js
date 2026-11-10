const fs = require('fs');
const html = fs.readFileSync('index-2.html', 'utf8');
const lines = html.split('\n');
lines.forEach((l, i) => {
  if (l.includes("Men's Accessories") || l.includes("Women's Collection")) {
    console.log((i+1) + ': ' + l);
  }
});

