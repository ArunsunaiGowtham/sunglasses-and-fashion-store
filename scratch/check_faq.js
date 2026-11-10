const fs = require('fs');
const files = fs.readdirSync('.').filter(f => f.endsWith('.html'));
files.forEach(f => {
  const content = fs.readFileSync(f, 'utf8');
  if (content.toLowerCase().includes('faq') || content.toLowerCase().includes('accordion')) {
    console.log(f + ': has FAQ / accordion');
  }
});

