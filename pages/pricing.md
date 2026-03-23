---
layout: default
title: Pricing
description: Choose the SOL Carry Signals plan that fits your trading style. Basic $29, Pro $79, Premium $199 per month.
permalink: /pricing/
body_class: page-pricing
---

<!-- ══════════════════════════════ PRICING HERO ═════════════════════════════ -->
<section class="section" style="padding-bottom:0;" aria-labelledby="pricing-page-title">
  <div class="container">
    <div class="section-header">
      <p class="section-header__eyebrow">Pricing</p>
      <h1 class="section-header__title" id="pricing-page-title">Choose Your Plan</h1>
      <p class="section-header__subtitle">
        All plans include a 7-day money-back guarantee. Cancel anytime — no lock-in contracts.
      </p>
    </div>
  </div>
</section>

<!-- ═══════════════════════════════ TIER CARDS ══════════════════════════════ -->
<section class="section" aria-label="Pricing tiers">
  <div class="container">
    {% include pricing.html %}
  </div>
</section>

<!-- ═══════════════════════════ COMPARISON TABLE ════════════════════════════ -->
<section class="section" aria-labelledby="compare-title">
  <div class="container">

    <div class="section-header">
      <p class="section-header__eyebrow">Compare</p>
      <h2 class="section-header__title" id="compare-title">Full Feature Comparison</h2>
    </div>

    <div style="overflow-x:auto;">
      <table class="pricing-compare" role="table">
        <thead>
          <tr>
            <th scope="col">Feature</th>
            <th scope="col">Basic<br><span style="font-weight:400;text-transform:none;letter-spacing:0;">$29/mo</span></th>
            <th scope="col">Pro<br><span style="font-weight:400;text-transform:none;letter-spacing:0;">$79/mo</span></th>
            <th scope="col">Premium<br><span style="font-weight:400;text-transform:none;letter-spacing:0;">$199/mo</span></th>
          </tr>
        </thead>
        <tbody>
          <tr><td>Signal frequency</td><td>Daily digest</td><td>Real-time</td><td>Real-time</td></tr>
          <tr><td>Active signals</td><td>3</td><td>15</td><td>Unlimited</td></tr>
          <tr><td>Email alerts</td><td class="check">✓</td><td class="check">✓</td><td class="check">✓</td></tr>
          <tr><td>Telegram alerts</td><td class="dash">—</td><td class="check">✓</td><td class="check">✓</td></tr>
          <tr><td>Hedge recommendations</td><td class="dash">—</td><td class="check">✓</td><td class="check">✓</td></tr>
          <tr><td>Historical data</td><td>30 days</td><td>180 days</td><td>2 years</td></tr>
          <tr><td>REST API access</td><td class="dash">—</td><td class="dash">—</td><td class="check">✓</td></tr>
          <tr><td>Custom APR thresholds</td><td class="dash">—</td><td class="dash">—</td><td class="check">✓</td></tr>
          <tr><td>Priority support</td><td class="dash">—</td><td class="dash">—</td><td>24h SLA</td></tr>
          <tr><td>Money-back guarantee</td><td>7 days</td><td>7 days</td><td>7 days</td></tr>
        </tbody>
      </table>
    </div>

  </div>
</section>

<!-- ════════════════════════════════ FAQ ════════════════════════════════════ -->
<section class="section" aria-labelledby="pricing-faq-title">
  <div class="container">
    <div style="max-width:720px; margin:0 auto;">

      <div class="section-header">
        <p class="section-header__eyebrow">Questions</p>
        <h2 class="section-header__title" id="pricing-faq-title">Billing FAQ</h2>
      </div>

      <div class="faq">

        <div class="faq__item">
          <button class="faq__question" aria-expanded="false">
            How does billing work?
            <span class="faq__question-icon" aria-hidden="true">+</span>
          </button>
          <div class="faq__answer">
            <p>All plans are billed monthly in advance via Stripe. You will receive a receipt by email. Payments are processed in USD. Local currency conversions are handled by Stripe.</p>
          </div>
        </div>

        <div class="faq__item">
          <button class="faq__question" aria-expanded="false">
            Can I switch plans mid-cycle?
            <span class="faq__question-icon" aria-hidden="true">+</span>
          </button>
          <div class="faq__answer">
            <p>Yes. Upgrades take effect immediately and you are charged the prorated difference. Downgrades take effect at the next billing cycle.</p>
          </div>
        </div>

        <div class="faq__item">
          <button class="faq__question" aria-expanded="false">
            What payment methods are accepted?
            <span class="faq__question-icon" aria-hidden="true">+</span>
          </button>
          <div class="faq__answer">
            <p>We accept all major credit and debit cards (Visa, Mastercard, Amex) via Stripe. Crypto payments are not currently supported.</p>
          </div>
        </div>

        <div class="faq__item">
          <button class="faq__question" aria-expanded="false">
            What is the refund policy?
            <span class="faq__question-icon" aria-hidden="true">+</span>
          </button>
          <div class="faq__answer">
            <p>We offer a 7-day money-back guarantee for first-time subscribers. Contact support within 7 days of your first payment for a full refund. Subsequent billing periods are non-refundable.</p>
          </div>
        </div>

      </div>

    </div>
  </div>
</section>

<!-- ══════════════════════════════ DISCLAIMER ═══════════════════════════════ -->
<section style="padding-bottom: 4rem;">
  <div class="container">
    <div style="max-width:720px; margin:0 auto; padding:1.5rem; background:rgba(245,158,11,0.05); border:1px solid rgba(245,158,11,0.15); border-radius:10px;">
      <p style="font-size:0.75rem; color:#7a8aaa; line-height:1.75; margin:0;">
        <strong style="color:#f59e0b;">Important Risk Disclosure:</strong> SOL Carry Signals provides informational signals only and does not constitute financial advice. Cryptocurrency and DeFi trading involves substantial risk of loss. The 12–30% APR range reflects historical carry yields and is not a guarantee of future returns. You may lose some or all of your capital. By subscribing, you confirm you are not a US person and that use of this service complies with laws in your jurisdiction.
      </p>
    </div>
  </div>
</section>
