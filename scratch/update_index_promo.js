const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

const target = `<h2 class="display-6 fw-bold mb-2">Summer Solar Clearance</h2>`;
const replacement = `<h2 class="display-6 fw-bold mb-2 text-white">Summer Solar Clearance</h2>`;

const couponTarget = `<span class="text-white-50 small">Code: <strong class="text-white font-monospace">SOLARIS25</strong></span>`;
const couponReplacement = `<div class="promo-coupon-pill">
              <span class="promo-coupon-label"><i class="bi bi-ticket-perforated-fill me-1 text-secondary"></i> Coupon Code:</span>
              <span class="promo-coupon-code">SOLARIS25</span>
              <button type="button" class="promo-coupon-btn" onclick="window.copyCoupon('SOLARIS25')" title="Click to copy coupon code" aria-label="Copy code SOLARIS25">
                <i class="bi bi-clipboard"></i>
              </button>
            </div>`;

if (html.includes(target) && html.includes(couponTarget)) {
  html = html.replace(target, replacement);
  html = html.replace(couponTarget, couponReplacement);
  fs.writeFileSync('index.html', html, 'utf8');
  console.log('Successfully updated index.html for Issue 4 & 5');
} else {
  console.error('Target not found in index.html');
}

