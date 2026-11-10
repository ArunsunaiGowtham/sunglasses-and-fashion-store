const fs = require('fs');
const files = fs.readdirSync('.').filter(f => f.endsWith('.html'));
files.forEach(f => {
  const content = fs.readFileSync(f, 'utf8');
  const match = content.match(/<nav[^>]*class="([^"]*)"/);
  if (match) console.log(f + ': ' + match[1]);
});

