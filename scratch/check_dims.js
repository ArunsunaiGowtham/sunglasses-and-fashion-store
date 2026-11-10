const fs = require('fs');

function getDimensions(filePath) {
  const buf = fs.readFileSync(filePath);
  // Check PNG
  if (buf[0] === 0x89 && buf[1] === 0x50 && buf[2] === 0x4E && buf[3] === 0x47) {
    return { width: buf.readUInt32BE(16), height: buf.readUInt32BE(20), type: 'png' };
  }
  // Check JPEG
  if (buf[0] === 0xFF && buf[1] === 0xD8) {
    let offset = 2;
    while (offset < buf.length) {
      if (buf[offset] !== 0xFF) break;
      const marker = buf[offset + 1];
      if (marker === 0xC0 || marker === 0xC2) {
        return { height: buf.readUInt16BE(offset + 5), width: buf.readUInt16BE(offset + 7), type: 'jpg' };
      }
      const len = buf.readUInt16BE(offset + 2);
      offset += 2 + len;
    }
  }
  return null;
}

['sg-1.jpg', 'sg-2.jpg', 'sg-3.jpg', 'sg-5.jpg'].forEach(name => {
  const p = 'images/products/' + name;
  if (fs.existsSync(p)) {
    console.log(name, getDimensions(p));
  } else {
    console.log(name, 'not found');
  }
});

