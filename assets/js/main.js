/**
 * SOL Carry Signals — main.js
 * Vanilla JS only. No inline event handlers (CSP compliant).
 * Three responsibilities: header scroll state, mobile nav toggle, FAQ accordion.
 */

(function () {
  'use strict';

  // ─── Header scroll class ──────────────────────────────────────────────────
  var header = document.querySelector('.site-header');
  if (header) {
    var onScroll = function () {
      if (window.scrollY > 20) {
        header.classList.add('site-header--scrolled');
      } else {
        header.classList.remove('site-header--scrolled');
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll(); // run once on load
  }

  // ─── Mobile nav toggle ────────────────────────────────────────────────────
  var mobileToggle = document.querySelector('.site-header__mobile-toggle');
  var mobileNav    = document.getElementById('mobile-nav');

  if (mobileToggle && mobileNav) {
    mobileToggle.addEventListener('click', function () {
      var isOpen = mobileNav.classList.toggle('is-open');
      mobileToggle.setAttribute('aria-expanded', String(isOpen));
    });

    // Close on outside click
    document.addEventListener('click', function (e) {
      if (
        mobileNav.classList.contains('is-open') &&
        !mobileToggle.contains(e.target) &&
        !mobileNav.contains(e.target)
      ) {
        mobileNav.classList.remove('is-open');
        mobileToggle.setAttribute('aria-expanded', 'false');
      }
    });

    // Close on nav link click
    mobileNav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        mobileNav.classList.remove('is-open');
        mobileToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // ─── FAQ accordion ────────────────────────────────────────────────────────
  var faqButtons = document.querySelectorAll('.faq__question');

  faqButtons.forEach(function (btn) {
    btn.addEventListener('click', function () {
      var answer    = btn.nextElementSibling;
      var isOpen    = btn.getAttribute('aria-expanded') === 'true';

      // Close all others
      faqButtons.forEach(function (other) {
        if (other !== btn) {
          other.setAttribute('aria-expanded', 'false');
          var otherAnswer = other.nextElementSibling;
          if (otherAnswer) otherAnswer.classList.remove('is-open');
        }
      });

      // Toggle current
      btn.setAttribute('aria-expanded', String(!isOpen));
      if (answer) answer.classList.toggle('is-open', !isOpen);
    });
  });

  // ─── Smooth scroll for anchor links ──────────────────────────────────────
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      var targetId = anchor.getAttribute('href').slice(1);
      if (!targetId) return;
      var target = document.getElementById(targetId);
      if (target) {
        e.preventDefault();
        var headerH = header ? header.getBoundingClientRect().height : 68;
        var top     = target.getBoundingClientRect().top + window.scrollY - headerH - 16;
        window.scrollTo({ top: top, behavior: 'smooth' });
      }
    });
  });

})();
