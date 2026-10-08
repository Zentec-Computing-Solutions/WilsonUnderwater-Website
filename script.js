"use strict";
const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#navigation');
function setMenu(open) {
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
  navigation.classList.toggle('is-open', open);
}
menuButton.addEventListener('click', () => setMenu(menuButton.getAttribute('aria-expanded') !== 'true'));
navigation.addEventListener('click', (event) => { if (event.target.closest('a')) setMenu(false); });
document.addEventListener('keydown', (event) => { if (event.key === 'Escape' && menuButton.getAttribute('aria-expanded') === 'true') { setMenu(false); menuButton.focus(); } });
document.addEventListener('click', (event) => { if (!event.target.closest('.site-header')) setMenu(false); });
window.matchMedia('(min-width: 681px)').addEventListener('change', (event) => { if (event.matches) setMenu(false); });
document.querySelector('#year').textContent = new Date().getFullYear();
document.querySelectorAll('[data-service]').forEach((link) => link.addEventListener('click', () => {
  document.querySelector('#service').value = link.dataset.service;
}));
const form = document.querySelector('#enquiry-form');
const status = document.querySelector('#form-status');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  if (!form.reportValidity()) return;
  const fields = new FormData(form);
  const value = (key) => String(fields.get(key) || '').trim();
  const subject = 'Website enquiry: ' + value('service');
  const body = ['Hello Wilson Underwater Services,', '', 'Name: ' + value('name'), 'Email: ' + value('email'), 'Company: ' + (value('company') || 'Not provided'), 'Service: ' + value('service'), '', 'Project details:', value('message')].join('\n');
  const recipient = 'info@wilsonunderwater.co.nz';
  document.querySelector('#draft-text').value = 'To: ' + recipient + '\nSubject: ' + subject + '\n\n' + body;
  document.querySelector('#email-fallback').hidden = false;
  status.textContent = 'Your draft is ready. Complete sending in your email app, or use the copy option below.';
  window.location.href = 'mailto:' + recipient + '?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
});
document.querySelector('#copy-draft').addEventListener('click', async () => {
  const draft = document.querySelector('#draft-text');
  try {
    await navigator.clipboard.writeText(draft.value);
    status.textContent = 'Enquiry copied. Paste it into an email to info@wilsonunderwater.co.nz.';
  } catch {
    draft.focus(); draft.select();
    status.textContent = 'Your enquiry is selected. Copy it and paste it into your email app.';
  }
});
