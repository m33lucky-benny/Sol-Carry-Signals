---
layout: default
title: Funding Dashboard
description: Live Solana carry funding rate dashboard. Track APR spreads, LST yields, and perp funding rates in real time.
permalink: /dashboard/
body_class: page-dashboard
---

<section class="section">
  <div class="container">

    <div class="section-header">
      <p class="section-header__eyebrow">Live Data</p>
      <h1 class="section-header__title">Funding Dashboard</h1>
      <p class="section-header__subtitle">
        Real-time Solana carry metrics: LST yields, perpetual funding rates, and net carry spread across protocols.
      </p>
    </div>

    <!-- Stats row -->
    <div class="card-grid card-grid--4" style="margin-bottom:2.5rem;">
      <div class="card card--stat">
        <div class="card__number">24.8%</div>
        <div class="card__label">Current Best APR</div>
      </div>
      <div class="card card--stat">
        <div class="card__number">5</div>
        <div class="card__label">Active Signals</div>
      </div>
      <div class="card card--stat">
        <div class="card__number">0.082%</div>
        <div class="card__label">Avg Funding Rate (8h)</div>
      </div>
      <div class="card card--stat">
        <div class="card__number">8.4%</div>
        <div class="card__label">mSOL Staking APY</div>
      </div>
    </div>

    <!-- Dashboard embed -->
    <div class="dashboard__iframe-wrap">
      <!-- Replace src with your live dashboard URL (Dune, Grafana, custom app, etc.) -->
      <div class="dashboard__placeholder">
        <div class="placeholder-icon" aria-hidden="true">📊</div>
        <p><strong>Live Dashboard Embed</strong></p>
        <p>
          Replace this placeholder with your dashboard iframe.<br>
          Supported: Dune Analytics, Grafana, custom React app.
        </p>
        <p style="font-size:0.75rem; margin-top:0.5rem;">
          Example: <code>&lt;iframe src="https://dune.com/embeds/your-query" ...&gt;</code>
        </p>
        <a href="{{ '/pricing/' | relative_url }}" class="btn btn--primary" style="margin-top:1rem;">
          Subscribe for Live Access
        </a>
      </div>
    </div>

    <p style="font-size:0.75rem; color:#7a8aaa; text-align:center; margin-top:1rem;">
      Data refreshes every 60 seconds. Pro and Premium subscribers see live data with no delay.
    </p>

  </div>
</section>

<!-- Protocol breakdown -->
<section class="section" style="padding-top:0;" aria-labelledby="protocols-title">
  <div class="container">

    <div class="section-header" style="margin-bottom:2rem;">
      <h2 class="section-header__title" id="protocols-title">Protocol Breakdown</h2>
    </div>

    <div class="card-grid">
      <div class="card">
        <div class="card__icon" aria-hidden="true">🌊</div>
        <h3 class="card__title">Drift Protocol</h3>
        <p class="card__subtitle">Perpetuals funding</p>
        <div class="card__body" style="margin-top:1rem;">
          <div style="display:flex; justify-content:space-between; padding:0.5rem 0; border-bottom:1px solid #1e2a42; font-size:0.875rem;">
            <span style="color:#7a8aaa;">SOL-PERP 8h rate</span>
            <span class="signal-positive">+0.082%</span>
          </div>
          <div style="display:flex; justify-content:space-between; padding:0.5rem 0; font-size:0.875rem;">
            <span style="color:#7a8aaa;">Annualised equiv.</span>
            <span style="color:#e8ecf4;">+26.9%</span>
          </div>
        </div>
      </div>

      <div class="card">
        <div class="card__icon" aria-hidden="true">⚡</div>
        <h3 class="card__title">Marginfi</h3>
        <p class="card__subtitle">Lending rates</p>
        <div class="card__body" style="margin-top:1rem;">
          <div style="display:flex; justify-content:space-between; padding:0.5rem 0; border-bottom:1px solid #1e2a42; font-size:0.875rem;">
            <span style="color:#7a8aaa;">SOL borrow APR</span>
            <span style="color:#ef4444;">+4.2%</span>
          </div>
          <div style="display:flex; justify-content:space-between; padding:0.5rem 0; font-size:0.875rem;">
            <span style="color:#7a8aaa;">USDC supply APR</span>
            <span class="signal-positive">+6.8%</span>
          </div>
        </div>
      </div>

      <div class="card">
        <div class="card__icon" aria-hidden="true">🔷</div>
        <h3 class="card__title">Jito / mSOL</h3>
        <p class="card__subtitle">LST yields</p>
        <div class="card__body" style="margin-top:1rem;">
          <div style="display:flex; justify-content:space-between; padding:0.5rem 0; border-bottom:1px solid #1e2a42; font-size:0.875rem;">
            <span style="color:#7a8aaa;">jitoSOL APY</span>
            <span class="signal-positive">+9.1%</span>
          </div>
          <div style="display:flex; justify-content:space-between; padding:0.5rem 0; font-size:0.875rem;">
            <span style="color:#7a8aaa;">mSOL APY</span>
            <span class="signal-positive">+8.4%</span>
          </div>
        </div>
      </div>
    </div>

  </div>
</section>
