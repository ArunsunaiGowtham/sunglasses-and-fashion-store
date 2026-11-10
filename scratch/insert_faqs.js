const fs = require('fs');

const faqHTML = `
  <!-- ================= FREQUENTLY ASKED QUESTIONS (FAQ) ================= -->
  <section class="site-faq-section py-5">
    <div class="container">
      <div class="text-center mx-auto mb-5" style="max-width: 720px;">
        <span class="badge-luxury badge-gold mb-2">Got Questions?</span>
        <h2 class="display-6 fw-bold mb-2">Frequently Asked Questions</h2>
        <p class="text-muted">
          Everything you need to know about certified UV optical protection, authentic Tuscan leather craft, express worldwide shipping, and our 30-day in-home trial.
        </p>
      </div>

      <div class="row justify-content-center">
        <div class="col-12 col-lg-10 col-xl-8">
          <div class="accordion site-faq-accordion" id="storeFaqAccordion">
            
            <!-- Item 1 -->
            <div class="accordion-item">
              <h2 class="accordion-header" id="faqHeading1">
                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#faqCollapse1" aria-expanded="true" aria-controls="faqCollapse1">
                  <i class="bi bi-shield-check me-2 text-secondary"></i>
                  Are all Solaris & Co. sunglasses certified with UV400 and polarized optics?
                </button>
              </h2>
              <div id="faqCollapse1" class="accordion-collapse collapse show" aria-labelledby="faqHeading1" data-bs-parent="#storeFaqAccordion">
                <div class="accordion-body">
                  Yes, 100% of our sunglasses are equipped with certified laboratory-tested UV400 lenses that block 99.9% of harmful UVA and UVB radiation. All tinted and mirrored models feature multi-layer anti-reflective polarization to eliminate water and road glare for peak optical clarity.
                </div>
              </div>
            </div>

            <!-- Item 2 -->
            <div class="accordion-item">
              <h2 class="accordion-header" id="faqHeading2">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faqCollapse2" aria-expanded="false" aria-controls="faqCollapse2">
                  <i class="bi bi-gem me-2 text-secondary"></i>
                  What leather and materials are used in your belts and wallets?
                </button>
              </h2>
              <div id="faqCollapse2" class="accordion-collapse collapse" aria-labelledby="faqHeading2" data-bs-parent="#storeFaqAccordion">
                <div class="accordion-body">
                  Our belts and leather accessories are handcrafted in Florence, Italy, using certified full-grain vegetable-tanned Tuscan cowhide. We use solid forged brass and hypoallergenic alloy buckles designed to develop an authentic, rich patina over decades of wear.
                </div>
              </div>
            </div>

            <!-- Item 3 -->
            <div class="accordion-item">
              <h2 class="accordion-header" id="faqHeading3">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faqCollapse3" aria-expanded="false" aria-controls="faqCollapse3">
                  <i class="bi bi-arrow-repeat me-2 text-secondary"></i>
                  What is your return, exchange, and 30-day trial policy?
                </button>
              </h2>
              <div id="faqCollapse3" class="accordion-collapse collapse" aria-labelledby="faqHeading3" data-bs-parent="#storeFaqAccordion">
                <div class="accordion-body">
                  We offer a complimentary 30-day in-home trial on all eyewear and accessories. If the frame size, facial fit, or lens tint does not completely delight you, return it in original condition for a 100% full refund or free exchange with prepaid shipping labels included.
                </div>
              </div>
            </div>

            <!-- Item 4 -->
            <div class="accordion-item">
              <h2 class="accordion-header" id="faqHeading4">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faqCollapse4" aria-expanded="false" aria-controls="faqCollapse4">
                  <i class="bi bi-truck me-2 text-secondary"></i>
                  How long does shipping take and is international delivery tracked?
                </button>
              </h2>
              <div id="faqCollapse4" class="accordion-collapse collapse" aria-labelledby="faqHeading4" data-bs-parent="#storeFaqAccordion">
                <div class="accordion-body">
                  Domestic priority orders arrive within 2–3 business days. International express courier orders arrive within 3–5 business days, fully insured and tracked end-to-end. All customs duties and import taxes are calculated and prepaid at checkout with no surprise fees upon arrival.
                </div>
              </div>
            </div>

            <!-- Item 5 -->
            <div class="accordion-item">
              <h2 class="accordion-header" id="faqHeading5">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faqCollapse5" aria-expanded="false" aria-controls="faqCollapse5">
                  <i class="bi bi-award me-2 text-secondary"></i>
                  Do your products come with an official warranty?
                </button>
              </h2>
              <div id="faqCollapse5" class="accordion-collapse collapse" aria-labelledby="faqHeading5" data-bs-parent="#storeFaqAccordion">
                <div class="accordion-body">
                  Every Solaris & Co. accessory includes our comprehensive 2-Year Atelier Warranty covering structural frame integrity, hinge springs, and optical coatings. We also provide lifetime complimentary frame realignment and screw-tightening services at our flagship ateliers.
                </div>
              </div>
            </div>

            <!-- Item 6 -->
            <div class="accordion-item">
              <h2 class="accordion-header" id="faqHeading6">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faqCollapse6" aria-expanded="false" aria-controls="faqCollapse6">
                  <i class="bi bi-person-check me-2 text-secondary"></i>
                  How do I choose the most flattering frame for my face shape?
                </button>
              </h2>
              <div id="faqCollapse6" class="accordion-collapse collapse" aria-labelledby="faqHeading6" data-bs-parent="#storeFaqAccordion">
                <div class="accordion-body">
                  Angular frames (aviator, square, geometric) bring definition to round and oval faces; curved frames (round, cat-eye) soften square and heart-shaped jawlines. You can read our detailed Face Shape Guide on our blog or message our optical stylists via live chat for personalized sizing advice.
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  </section>
`;

const pages = [
  'index.html', 'index-2.html', 'about.html', 'shop.html', 'brands.html',
  'blog.html', 'offers.html', 'contact.html', 'cart.html', 'checkout.html',
  'product-details.html', 'terms-of-care.html', 'privacy-policy.html'
];

pages.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  if (content.includes('id="storeFaqAccordion"')) {
    console.log(`[${file}] FAQ already present, skipping.`);
    return;
  }

  // If page has NEWSLETTER SUBSCRIPTION, place before it
  if (file === 'index.html' || file === 'index-2.html') {
    const marker = '<!-- ================= NEWSLETTER SUBSCRIPTION ================= -->';
    if (content.includes(marker)) {
      content = content.replace(marker, faqHTML + '\n  ' + marker);
      fs.writeFileSync(file, content, 'utf8');
      console.log(`[${file}] Inserted FAQ before newsletter.`);
      return;
    }
  }

  // Otherwise place before site-footer or FOOTER comment
  const footerComment = '<!-- ================= FOOTER ================= -->';
  const footerTag = '<footer class="site-footer">';
  
  if (content.includes(footerComment)) {
    content = content.replace(footerComment, faqHTML + '\n  ' + footerComment);
    fs.writeFileSync(file, content, 'utf8');
    console.log(`[${file}] Inserted FAQ before footer comment.`);
  } else if (content.includes(footerTag)) {
    content = content.replace(footerTag, faqHTML + '\n  ' + footerTag);
    fs.writeFileSync(file, content, 'utf8');
    console.log(`[${file}] Inserted FAQ before footer tag.`);
  } else {
    console.warn(`[${file}] Could not find footer marker!`);
  }
});

