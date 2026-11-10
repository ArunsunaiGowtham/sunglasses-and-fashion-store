const fs = require('fs');
const html = fs.readFileSync('index.html', 'utf8');

const navMatch = html.match(/<a class="navbar-brand"[^>]*>[\s\S]*?<\/a>/);
console.log('--- NAVBAR BRAND ---');
console.log(navMatch ? navMatch[0] : 'not found');

const footerIdx = html.indexOf('<footer class="site-footer">');
if (footerIdx !== -1) {
  const footerChunk = html.substring(footerIdx, footerIdx + 1200);
  console.log('--- FOOTER CHUNK ---');
  console.log(footerChunk);
}

