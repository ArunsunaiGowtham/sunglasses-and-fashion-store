const fs = require('fs');

fs.readdirSync('images/brands').forEach(f => {
  const content = fs.readFileSync('images/brands/' + f, 'utf8');
  console.log(`[${f}] ${content.substring(0, 200)}...`);
});

