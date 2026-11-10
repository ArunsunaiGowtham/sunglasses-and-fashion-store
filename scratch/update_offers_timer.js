const fs = require('fs');
let html = fs.readFileSync('offers.html', 'utf8');

const oldCountdown = `<!-- Live Flash Sale Countdown Clock -->
      <div class="d-inline-flex align-items-center justify-content-center gap-2 gap-sm-3 p-3 rounded-4 bg-surface bg-opacity-10 border border-secondary border-opacity-25 shadow">
        <div class="text-center px-2 px-sm-3">
          <div class="display-6 fw-bold text-secondary font-monospace" id="cdDays">02</div>
          <div class="small text-uppercase text-white-50" style="font-size: 0.72rem;">Days</div>
        </div>
        <div class="fs-4 text-white-50">:</div>
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

const newCountdown = `<!-- Live Flash Sale Countdown Clock (Compact Luxury Size) -->
      <div class="offers-countdown-pill d-inline-flex align-items-center justify-content-center gap-2 gap-sm-3 py-2 px-3 rounded-pill">
        <div class="text-center px-2">
          <div class="offers-countdown-digit" id="cdDays">02</div>
          <div class="offers-countdown-unit">Days</div>
        </div>
        <div class="offers-countdown-sep">:</div>
        <div class="text-center px-2">
          <div class="offers-countdown-digit" id="cdHours">14</div>
          <div class="offers-countdown-unit">Hours</div>
        </div>
        <div class="offers-countdown-sep">:</div>
        <div class="text-center px-2">
          <div class="offers-countdown-digit" id="cdMinutes">36</div>
          <div class="offers-countdown-unit">Mins</div>
        </div>
        <div class="offers-countdown-sep">:</div>
        <div class="text-center px-2">
          <div class="offers-countdown-digit" id="cdSeconds">45</div>
          <div class="offers-countdown-unit">Secs</div>
        </div>
      </div>`;

const regex = /<!-- Live Flash Sale Countdown Clock -->[\s\S]*?<\/div>\s*<\/div>/;
if (regex.test(html)) {
  html = html.replace(regex, newCountdown);
  fs.writeFileSync('offers.html', html, 'utf8');
  console.log('Successfully updated offers.html countdown label size!');
} else {
  console.error('Target not found in offers.html');
}

