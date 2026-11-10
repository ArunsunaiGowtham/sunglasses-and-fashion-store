const fs = require('fs');

const files = fs.readdirSync('.').filter(f => f.endsWith('.html'));
const voidTags = new Set(['area', 'base', 'br', 'col', 'embed', 'hr', 'img', 'input', 'link', 'meta', 'param', 'source', 'track', 'wbr']);

let totalErrors = 0;

files.forEach(file => {
  const content = fs.readFileSync(file, 'utf8');
  // Simple check for unclosed or mismatched structural tags like div, section, nav, ul, li
  const tagsToCheck = ['div', 'section', 'nav', 'ul', 'li', 'header', 'footer', 'main', 'article'];
  const counts = {};
  tagsToCheck.forEach(t => {
    const openMatches = content.match(new RegExp('<' + t + '(\\s+[^>]*)?>', 'gi')) || [];
    const closeMatches = content.match(new RegExp('</' + t + '>', 'gi')) || [];
    counts[t] = { open: openMatches.length, close: closeMatches.length };
    if (openMatches.length !== closeMatches.length) {
      console.log(`[${file}] Mismatch in <${t}>: ${openMatches.length} open vs ${closeMatches.length} close`);
      totalErrors++;
    }
  });
});

if (totalErrors === 0) {
  console.log(`All ${files.length} HTML files passed structural tag validation perfectly!`);
} else {
  console.log(`Found ${totalErrors} tag mismatch errors.`);
}

