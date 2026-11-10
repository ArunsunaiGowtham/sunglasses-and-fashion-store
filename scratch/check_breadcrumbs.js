const fs = require('fs');
const files = fs.readdirSync('.').filter(f => f.endsWith('.html'));
files.forEach(f => {
  const content = fs.readFileSync(f, 'utf8');
  if (content.includes('aria-label="breadcrumb"') || content.includes('breadcrumb-item')) {
    console.log(f + ': has breadcrumb');
  }
});

