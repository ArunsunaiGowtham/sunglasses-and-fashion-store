const fs = require('fs');

const files = fs.readdirSync('.').filter(f => f.endsWith('.html'));

files.forEach(f => {
  const content = fs.readFileSync(f, 'utf8');
  const footerIdx = content.indexOf('<footer');
  if (footerIdx !== -1) {
    const footerChunk = content.substring(footerIdx, footerIdx + 800);
    const match = footerChunk.match(/<a class="navbar-brand[^>]*>[\s\S]*?<\/a>/);
    if (match) {
      console.log(`[${f}] Footer brand:\n${match[0].replace(/\s+/g, ' ')}\n`);
    } else {
      console.log(`[${f}] No navbar-brand in footer`);
    }
  }
});

