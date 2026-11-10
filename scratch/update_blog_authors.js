const fs = require('fs');

const avatarMap = {
  "Elena Vance": "images/avatars/avatar-1.jpg",
  "Nicholas Sterling": "images/avatars/avatar-2.jpg",
  "Isabella Fontana": "images/avatars/avatar-3.jpg",
  "Marcus Chen": "images/avatars/avatar-4.jpg",
  "Sophia Lorenzi": "images/avatars/avatar-1.jpg",
  "Matteo Rossi": "images/avatars/avatar-2.jpg",
  "Camilla Vega": "images/avatars/avatar-3.jpg",
  "Lucas Moreau": "images/avatars/avatar-4.jpg",
  "Harrison Blake": "images/avatars/avatar-2.jpg",
  "Claire Dubois": "images/avatars/avatar-1.jpg",
  "Alexander Wright": "images/avatars/avatar-4.jpg",
  "Vivienne St. Claire": "images/avatars/avatar-3.jpg",
  "Julian Brooks": "images/avatars/avatar-2.jpg",
  "Gemma Ward": "images/avatars/avatar-1.jpg",
  "Beatrice Howard": "images/avatars/avatar-3.jpg",
  "Dr. Aris Thorne": "images/avatars/avatar-4.jpg",
  "Dr. Oliver Sterling": "images/avatars/avatar-2.jpg",
  "Dominic Silva": "images/avatars/avatar-4.jpg"
};

let raw = fs.readFileSync('js/blog-data.js', 'utf8');
// Parse by extracting the array
const fn = new Function(raw + '; return BLOG_DATA;');
const data = fn();

data.forEach(article => {
  article.authorAvatar = avatarMap[article.author] || "images/avatars/avatar-1.jpg";
});

const newCode = `/**
 * Sunglasses & Fashion Accessories Store
 * Comprehensive 18-Article Editorial & Knowledge Base Database
 * Strictly 18 Unique Articles, 18 Distinct Authors, 6 Curated Categories
 * Single-Page Architecture (Full content rendered inline/modal)
 */

const BLOG_DATA = ${JSON.stringify(data, null, 2)};
`;

fs.writeFileSync('js/blog-data.js', newCode, 'utf8');
console.log('Successfully added authorAvatar to all 18 articles in blog-data.js!');

