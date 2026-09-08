'use strict';

/** Format the draft separately from the email handoff. */
function createConsultationDraft(values) {
  const clean = (value) => String(value || '').trim();
  const subject = `Permintaan konsultasi — ${clean(values.service)}`;
  const body = [
    'Yth. Tim KJPP Rachmat MP & Rekan,', '',
    'Saya ingin mendiskusikan kebutuhan berikut:', '',
    `Nama: ${clean(values.name)}`,
    `Perusahaan / institusi: ${clean(values.company) || '—'}`,
    `Email: ${clean(values.email)}`,
    `Telepon: ${clean(values.phone) || '—'}`,
    `Layanan: ${clean(values.service)}`, '',
    'Ringkasan kebutuhan:', clean(values.message), '', 'Terima kasih.'
  ].join('\n');
  return { subject, body,
    url: `mailto:kjpp.rmpjkt@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  };
}

function initializeNavigation() {
  const toggle = document.querySelector('.menu-btn');
  const nav = document.querySelector('#primary-navigation');
  if (!toggle || !nav) return;
  const mobile = window.matchMedia('(max-width: 1020px)');
  const setOpen = (open, returnFocus = false) => {
    nav.classList.toggle('is-open', open);
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Tutup menu navigasi' : 'Buka menu navigasi');
    if (returnFocus) toggle.focus();
  };
  toggle.addEventListener('click', () => setOpen(toggle.getAttribute('aria-expanded') !== 'true'));
  nav.addEventListener('click', (event) => { if (event.target.closest('a')) setOpen(false); });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') setOpen(false, true);
  });
  document.addEventListener('click', (event) => {
    if (mobile.matches && !event.target.closest('.navbar')) setOpen(false);
  });
  document.addEventListener('focusin', (event) => {
    if (mobile.matches && !event.target.closest('.navbar')) setOpen(false);
  });
  const onBreakpointChange = () => setOpen(false);
  if (mobile.addEventListener) mobile.addEventListener('change', onBreakpointChange);
  else if (mobile.addListener) mobile.addListener(onBreakpointChange);
  setOpen(false);
  document.documentElement.classList.add('nav-ready');
}

function initializeReveal() {
  const nodes = Array.from(document.querySelectorAll('.reveal'));
  const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
  if (preference.matches || !('IntersectionObserver' in window)) return;
  let observer;
  const showAll = () => {
    nodes.forEach((node) => node.classList.remove('is-pending'));
    if (observer) observer.disconnect();
  };
  try {
    observer = new IntersectionObserver((entries) => {
      entries.forEach(({ target, isIntersecting }) => {
        if (!isIntersecting) return;
        target.classList.remove('is-pending');
        target.classList.add('is-visible');
        observer.unobserve(target);
      });
    }, { threshold: 0, rootMargin: '0px 0px -24px 0px' });
    const anchor = document.querySelector(':target');
    nodes.forEach((node) => {
      if (node.getBoundingClientRect().top < window.innerHeight || (anchor && node.contains(anchor))) return;
      node.classList.add('is-pending');
      observer.observe(node);
    });
    if (preference.addEventListener) preference.addEventListener('change', (event) => { if (event.matches) showAll(); });
    window.addEventListener('beforeprint', showAll);
    window.addEventListener('pageshow', (event) => { if (event.persisted) showAll(); });
  } catch (_) { showAll(); }
}

function initializeContact() {
  const form = document.querySelector('#contact-form');
  if (!form) return;
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    if (!form.reportValidity()) return;
    const draft = createConsultationDraft(Object.fromEntries(new FormData(form).entries()));
    document.querySelector('#email-draft').value = `Subjek: ${draft.subject}\n\n${draft.body}`;
    document.querySelector('#email-fallback').hidden = false;
    document.querySelector('#form-status').textContent = 'Draf siap dibuka di aplikasi email. Pesan belum terkirim; silakan tinjau dan kirim melalui aplikasi email Anda.';
    // This explicit user action composes an email; it does not send or store data.
    window.location.href = draft.url;
  });
  form.querySelector('button[type="submit"]').disabled = false;
}

if (typeof document !== 'undefined') {
  initializeNavigation();
  initializeContact();
  initializeReveal();
  document.querySelectorAll('[data-year]').forEach((node) => { node.textContent = String(new Date().getFullYear()); });
}
if (typeof module !== 'undefined' && module.exports) module.exports = { createConsultationDraft };
