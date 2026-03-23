---
layout: default
title: SOL Carry Signals
description: Earn 12-30% APR on Solana carry trades. Non-custodial signals for sophisticated DeFi traders.
permalink: /
body_class: page-home
---

<!-- ═══════════════════════════════════ HERO ═══════════════════════════════════ -->
<section class="hero" aria-label="Hero">
  <div class="hero__bg" aria-hidden="true">
    <div class="hero__bg-grid"></div>
    <div class="hero__bg-orb hero__bg-orb--1"></div>
    <div class="hero__bg-orb hero__bg-orb--2"></div>
    <div class="hero__bg-orb hero__bg-orb--3"></div>
  </div>

  <div class="hero__content">
    <div class="hero__eyebrow">
      <span class="hero__eyebrow-dot" aria-hidden="true"></span>
      Non-Custodial · Solana DeFi
    </div>

    <h1 class="hero__headline">
      SOL Carry Signals:<br>
      <span class="highlight">12–30% APR,</span><br>
      Non-Custodial
    </h1>

    <p class="hero__subheadline">
      Precision carry trade signals for Solana. Monitor funding rates, get actionable alerts, and hedge risk — without giving up your keys.
    </p>

    <div class="hero__actions">
      <a href="{{ '/pricing/' | relative_url }}" class="btn btn--cta btn--xl">
        Get Signals Now
      </a>
      <a href="#how-it-works" class="btn btn--ghost btn--xl">
        See How It Works
      </a>
    </div>

    <div class="hero__stats">
      <div class="hero__stat">
        <span class="hero__stat-value">12–30%</span>
        <span class="hero__stat-label">Historical APR</span>
      </div>
      <div class="hero__stat">
        <span class="hero__stat-value">Non-Custodial</span>
        <span class="hero__stat-label">Your Keys, Your SOL</span>
      </div>
      <div class="hero__stat">
        <span class="hero__stat-value">Real-Time</span>
        <span class="hero__stat-label">Signal Delivery</span>
      </div>
      <div class="hero__stat">
        <span class="hero__stat-value">24/7</span>
        <span class="hero__stat-label">Market Monitoring</span>
      </div>
    </div>
  </div>

  <p class="hero__disclaimer">
    Past performance is not indicative of future results. APR figures represent historical carry yields and are not guaranteed. Cryptocurrency trading involves substantial risk of loss.
  </p>
</section>

<!-- ══════════════════════════════ HOW IT WORKS ══════════════════════════════ -->
<section class="section" id="how-it-works" aria-labelledby="how-it-works-title">
  <div class="container">

    <div class="section-header">
      <p class="section-header__eyebrow">Process</p>
      <h2 class="section-header__title" id="how-it-works-title">How It Works</h2>
      <p class="section-header__subtitle">
        Four steps from market conditions to profit — all while maintaining full custody of your assets.
      </p>
    </div>

    <div class="steps">

      <div class="step">
        <div class="step__number" aria-hidden="true">1</div>
        <div class="step__icon" aria-hidden="true">🔍</div>
        <h3 class="step__title">Spot SOL Carry</h3>
        <p class="step__desc">
          Our engine scans Solana perpetual markets, LST yields, and lending protocols 24/7 to detect high-probability carry opportunities.
        </p>
      </div>

      <div class="step">
        <div class="step__number" aria-hidden="true">2</div>
        <div class="step__icon" aria-hidden="true">📊</div>
        <h3 class="step__title">Monitor Rates</h3>
        <p class="step__desc">
          Funding rates, borrow costs, and LST premiums are tracked in real time across Drift, Mango, and Marginfi to find the best carry spread.
        </p>
      </div>

      <div class="step">
        <div class="step__number" aria-hidden="true">3</div>
        <div class="step__icon" aria-hidden="true">⚡</div>
        <h3 class="step__title">Alert You</h3>
        <p class="step__desc">
          Receive precise entry, stop-loss, and target levels via Telegram or email the moment a signal crosses your APR threshold.
        </p>
      </div>

      <div class="step">
        <div class="step__number" aria-hidden="true">4</div>
        <div class="step__icon" aria-hidden="true">🛡️</div>
        <h3 class="step__title">Hedge Risk</h3>
        <p class="step__desc">
          Each signal includes an optional delta-neutral hedge recommendation to reduce directional exposure and lock in the carry spread.
        </p>
      </div>

    </div>

  </div>
</section>

<div class="divider" role="separator"></div>

<!-- ══════════════════════════ SIGNALS PREVIEW ══════════════════════════════ -->
{% include signals-preview.html %}

<div class="divider" role="separator"></div>

<!-- ══════════════════════════════ PRICING ═══════════════════════════════════ -->
<section class="section" id="pricing" aria-labelledby="pricing-title">
  <div class="container">

    <div class="section-header">
      <p class="section-header__eyebrow">Pricing</p>
      <h2 class="section-header__title" id="pricing-title">Simple, Transparent Pricing</h2>
      <p class="section-header__subtitle">
        Cancel anytime. No lock-in. Upgrade or downgrade instantly.
      </p>
    </div>

    {% include pricing.html %}

    <p class="text-center text-muted" style="margin-top: 2rem; font-size: 0.875rem;">
      All plans billed monthly via Stripe. Prices in USD.
      <a href="{{ '/pricing/' | relative_url }}">View full feature comparison →</a>
    </p>

  </div>
</section>

<div class="divider" role="separator"></div>

<!-- ════════════════════════════════ FAQ ════════════════════════════════════ -->
<section class="section" id="faq" aria-labelledby="faq-title">
  <div class="container">
    <div class="container-narrow" style="max-width:720px; margin:0 auto;">

      <div class="section-header">
        <p class="section-header__eyebrow">FAQ</p>
        <h2 class="section-header__title" id="faq-title">Frequently Asked Questions</h2>
      </div>

      <div class="faq" role="list">

        <div class="faq__item" role="listitem">
          <button class="faq__question" aria-expanded="false">
            What is a carry trade on Solana?
            <span class="faq__question-icon" aria-hidden="true">+</span>
          </button>
          <div class="faq__answer">
            <p>A carry trade captures the spread between the yield earned on a long Solana position (via LST staking or lending) and the cost of maintaining a short hedge (funding rate on a perp). When the yield exceeds the hedge cost, you earn a positive carry with minimal directional risk.</p>
          </div>
        </div>

        <div class="faq__item" role="listitem">
          <button class="faq__question" aria-expanded="false">
            Is this non-custodial? Do you hold my SOL?
            <span class="faq__question-icon" aria-hidden="true">+</span>
          </button>
          <div class="faq__answer">
            <p>We never touch your funds. SOL Carry Signals is a signal service only — you retain full custody at all times. You receive alerts with entry/exit parameters and execute trades yourself through your own wallet and exchange accounts.</p>
          </div>
        </div>

        <div class="faq__item" role="listitem">
          <button class="faq__question" aria-expanded="false">
            What do the 12–30% APR figures mean?
            <span class="faq__question-icon" aria-hidden="true">+</span>
          </button>
          <div class="faq__answer">
            <p>These represent the annualised carry spread captured by historical signals — not a guaranteed return. Actual results vary based on execution, slippage, network fees, and market conditions. Past performance does not guarantee future results. You should never allocate capital you cannot afford to lose.</p>
          </div>
        </div>

        <div class="faq__item" role="listitem">
          <button class="faq__question" aria-expanded="false">
            How are signals delivered?
            <span class="faq__question-icon" aria-hidden="true">+</span>
          </button>
          <div class="faq__answer">
            <p>Basic subscribers receive a daily email digest. Pro and Premium subscribers receive real-time alerts via Telegram bot and email as soon as a signal is generated. Premium subscribers also get API access for direct integration.</p>
          </div>
        </div>

        <div class="faq__item" role="listitem">
          <button class="faq__question" aria-expanded="false">
            Can I cancel my subscription?
            <span class="faq__question-icon" aria-hidden="true">+</span>
          </button>
          <div class="faq__answer">
            <p>Yes, cancel anytime from your billing portal. Your subscription remains active until the end of the current billing period. There are no cancellation fees or minimum commitments.</p>
          </div>
        </div>

        <div class="faq__item" role="listitem">
          <button class="faq__question" aria-expanded="false">
            Is this available in my country?
            <span class="faq__question-icon" aria-hidden="true">+</span>
          </button>
          <div class="faq__answer">
            <p>SOL Carry Signals is not available to residents of the United States or jurisdictions where such financial signal services are restricted. By subscribing, you confirm you are not a US person and that use of this service is permitted in your jurisdiction. See our <a href="{{ '/legal/terms/' | relative_url }}">Terms of Service</a> for the full list of restricted regions.</p>
          </div>
        </div>

      </div>

    </div>
  </div>
</section>
