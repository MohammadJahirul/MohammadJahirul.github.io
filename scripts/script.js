'use strict';
document.documentElement.classList.add('js-ready');
const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#navigation');
const closeMenu = () => { navigation.classList.remove('is-open'); menuButton.setAttribute('aria-expanded', 'false'); };
menuButton.addEventListener('click', () => { const open = menuButton.getAttribute('aria-expanded') !== 'true'; menuButton.setAttribute('aria-expanded', String(open)); navigation.classList.toggle('is-open', open); });
navigation.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', event => { if (event.key === 'Escape' && navigation.classList.contains('is-open')) { closeMenu(); menuButton.focus(); } });
const desktop = window.matchMedia('(min-width: 651px)');
desktop.addEventListener('change', event => { if (event.matches) closeMenu(); });
const clock = document.querySelector('#dhaka-time');
function updateTime() { clock.textContent = new Intl.DateTimeFormat('en-GB', {timeZone:'Asia/Dhaka', hour:'2-digit',minute:'2-digit',hour12:false}).format(new Date()) + ' LOCAL'; }
updateTime(); setInterval(updateTime, 60000);
document.querySelector('#year').textContent = new Date().getFullYear();
let returnFocus;
document.querySelectorAll('[data-dialog]').forEach(button => button.addEventListener('click', () => {
 const dialog = document.getElementById(button.dataset.dialog);
 returnFocus = button; dialog.showModal(); dialog.scrollTop = 0; document.body.classList.add('modal-open');
 dialog.querySelector('.dialog-close').focus();
}));
document.querySelectorAll('dialog').forEach(dialog => {
 dialog.querySelector('.dialog-close').addEventListener('click', () => dialog.close());
 dialog.addEventListener('click', event => { const r = dialog.getBoundingClientRect(); if (event.target === dialog && (event.clientX < r.left || event.clientX > r.right || event.clientY < r.top || event.clientY > r.bottom)) dialog.close(); });
 dialog.addEventListener('close', () => { document.body.classList.remove('modal-open'); returnFocus?.focus(); });
});
const copyButton = document.querySelector('#copy-email');
const copyStatus = document.querySelector('#copy-status');
copyButton.addEventListener('click', async () => {
 try { await navigator.clipboard.writeText('muhmd.jahir@gmail.com'); copyButton.textContent='Email copied ✓'; copyStatus.textContent='Email address copied to clipboard.'; }
 catch { copyButton.textContent='Select email above to copy'; copyStatus.textContent='Clipboard unavailable. Select and copy the email address shown above.'; }
});
