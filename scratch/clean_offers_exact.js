const fs = require('fs');
let html = fs.readFileSync('offers.html', 'utf8');

const needle = '<div class="offers-countdown-pill';
const endNeedle = '</div>\r\n    </div>\r\n  </section>';
const altEnd = '</div>\n    </div>\n  </section>';

// Let's inspect between needle and </section>
const sIdx = html.indexOf(needle);
const eIdx = html.indexOf('</section>', sIdx);
console.log('Section content:', JSON.stringify(html.substring(sIdx, eIdx)));

const cleanPill = `<div class="offers-countdown-pill d-inline-flex align-items-center justify-content-center gap-2 gap-sm-3 py-2 px-3 rounded-pill">
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
      </div>
    </div>
  `;

html = html.substring(0, sIdx) + cleanPill + html.substring(eIdx);
fs.writeFileSync('offers.html', html, 'utf8');
console.log('Updated offers.html cleanly');

