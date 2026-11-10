const fs = require('fs');
const files = fs.readdirSync('.').filter(f => f.endsWith('.html'));

files.forEach(f => {
  const content = fs.readFileSync(f, 'utf8');
  const lines = content.split('\n');
  lines.forEach((l, i) => {
    if (l.includes('aria-label="breadcrumb"')) {
      console.log(`${f}:${i+1}: ${l.trim()}`);
    }
  });
});

