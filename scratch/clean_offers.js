const fs = require('fs');
let html = fs.readFileSync('offers.html', 'utf8');

const duplicateBlock = `        <div class="fs-4 text-white-50">:</div>
        <div class="text-center px-2 px-sm-3">
          <div class="display-6 fw-bold text-secondary font-monospace" id="cdHours">14</div>
          <div class="small text-uppercase text-white-50" style="font-size: 0.72rem;">Hours</div>
        </div>
        <div class="fs-4 text-white-50">:</div>
        <div class="text-center px-2 px-sm-3">
          <div class="display-6 fw-bold text-secondary font-monospace" id="cdMinutes">36</div>
          <div class="small text-uppercase text-white-50" style="font-size: 0.72rem;">Minutes</div>
        </div>
        <div class="fs-4 text-white-50">:</div>
        <div class="text-center px-2 px-sm-3">
          <div class="display-6 fw-bold text-secondary font-monospace" id="cdSeconds">45</div>
          <div class="small text-uppercase text-white-50" style="font-size: 0.72rem;">Seconds</div>
        </div>
      </div>`;

// Replace lines 130-145
const regex = /\s*<div class="fs-4 text-white-50">:<\/div>\s*<div class="text-center px-2 px-sm-3">\s*<div class="display-6 fw-bold text-secondary font-monospace" id="cdHours">[\s\S]*?<\/div>\s*<\/div>/;

if (regex.test(html)) {
  html = html.replace(regex, '');
  fs.writeFileSync('offers.html', html, 'utf8');
  console.log('Removed duplicate countdown block from offers.html');
} else {
  console.error('Duplicate block not found');
}

