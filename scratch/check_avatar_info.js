const fs = require('fs');
const dims = require('./check_dims.js');
// let's check avatar files
fs.readdirSync('images/avatars').forEach(f => {
  const buf = fs.readFileSync('images/avatars/' + f);
  console.log(f, buf.length, 'bytes');
});

