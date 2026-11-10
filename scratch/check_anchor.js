const fs = require('fs');
const html = fs.readFileSync('index.html', 'utf8');
const idx = html.indexOf('brand-subtitle');
const start = html.lastIndexOf('<a class="navbar-brand', idx);
const end = html.indexOf('</a>', idx) + 4;
console.log('Exact anchor:');
console.log(html.substring(start, end));

