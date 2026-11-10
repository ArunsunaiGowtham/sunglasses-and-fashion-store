const fs = require('fs');
const js = fs.readFileSync('js/products-data.js', 'utf8');
const lines = js.split('\n');
lines.forEach((l, i) => {
  if (l.includes('"sg-7"') || l.includes('"belt-1"') || l.includes('"cap-1"') || l.includes('"acc-1"')) {
    console.log((i+1) + ': ' + l);
  }
});

