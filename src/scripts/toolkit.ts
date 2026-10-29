import { GUIDE_IDS, PROGRESS_KEY, parseProgress, nextGuide } from '../lib/progress.mjs';
import { searchGuides } from '../lib/search.mjs';

document.documentElement.classList.add('js');
document.querySelectorAll<HTMLElement>('.nav-toggle, [data-open-search], [data-progress-panel], [data-mark-complete]').forEach(el => { el.hidden = false; });

let toastTimer: ReturnType<typeof setTimeout>;
function announce(message: string) {
  const toast = document.querySelector<HTMLElement>('.toast');
  if (!toast) return;
  clearTimeout(toastTimer);
  toast.textContent = message;
  toastTimer = setTimeout(() => { toast.textContent = ''; }, 4500);
}

let storageAvailable = true;
function readStorage(key: string) {
  try { return localStorage.getItem(key); } catch { storageAvailable = false; return null; }
}
function writeStorage(key: string, value: string) {
  try { localStorage.setItem(key, value); } catch { storageAvailable = false; }
}
let completed = parseProgress(readStorage(PROGRESS_KEY));

function updateProgress() {
  document.querySelectorAll<HTMLElement>('[data-nav-guide]').forEach(el => {
    const id = el.dataset.navGuide || '';
    const done = completed.includes(id);
    el.classList.toggle('is-complete', done);
    el.textContent = done ? '✓' : String(GUIDE_IDS.indexOf(id) + 1).padStart(2, '0');
    if (done) el.setAttribute('aria-label', 'Marked complete'); else el.removeAttribute('aria-label');
  });
  document.querySelectorAll<HTMLElement>('[data-path-guide]').forEach(el => {
    const done = completed.includes(el.dataset.pathGuide || '');
    el.classList.toggle('is-complete', done);
    const index = el.querySelector<HTMLElement>('[data-path-index]');
    if (index) {
      index.textContent = done ? '✓' : String(GUIDE_IDS.indexOf(el.dataset.pathGuide || '') + 1).padStart(2, '0');
      if (done) index.setAttribute('aria-label', 'Marked complete'); else index.removeAttribute('aria-label');
    }
    const time = el.querySelector<HTMLElement>('[data-path-time]');
    if (time) time.textContent = done ? 'Marked complete' : time.dataset.duration || '';
  });
  document.querySelectorAll<HTMLButtonElement>('[data-mark-complete]').forEach(button => {
    const done = completed.includes(button.dataset.markComplete || '');
    button.setAttribute('aria-pressed', String(done));
    const label = button.querySelector('[data-complete-label]');
    if (label) label.textContent = done ? 'Marked complete · undo' : 'Mark guide complete';
  });
  const progress = document.querySelector<HTMLProgressElement>('progress');
  if (progress) progress.value = completed.length;
  const count = document.querySelector('[data-progress-count]');
  if (count) count.textContent = `${completed.length} of ${GUIDE_IDS.length} guides marked complete`;
  const reset = document.querySelector<HTMLButtonElement>('[data-reset-progress]');
  if (reset) reset.hidden = completed.length === 0 && readiness.length === 0;
  const note = document.querySelector('[data-storage-note]');
  if (note && !storageAvailable) note.textContent = 'Browser storage is unavailable. Checkmarks work for this page only and may reset when you leave.';
  const continueLink = document.querySelector<HTMLAnchorElement>('[data-continue]');
  if (continueLink) {
    const next = nextGuide(completed);
    continueLink.href = `${continueLink.dataset.guideBase}${next || 'verify'}/`;
    continueLink.childNodes[0].textContent = completed.length === 0 ? 'Start your setup ' : next ? 'Continue your setup ' : 'Revisit your results ';
  }
}

document.querySelectorAll<HTMLButtonElement>('[data-mark-complete]').forEach(button => button.addEventListener('click', () => {
  const id = button.dataset.markComplete || '';
  if (!GUIDE_IDS.includes(id)) return;
  completed = completed.includes(id) ? completed.filter(item => item !== id) : [...completed, id];
  writeStorage(PROGRESS_KEY, JSON.stringify(completed));
  updateProgress();
  announce(completed.includes(id) ? (storageAvailable ? 'Guide marked complete. Saved on this device.' : 'Guide marked complete for this page. Browser storage is unavailable.') : 'Guide marked as still in progress.');
}));

let resetPending = false;
document.querySelector<HTMLButtonElement>('[data-reset-progress]')?.addEventListener('click', (event) => {
  const button = event.currentTarget as HTMLButtonElement;
  if (!resetPending) {
    resetPending = true;
    button.textContent = 'Click again to reset all checkmarks';
    setTimeout(() => { resetPending = false; button.textContent = 'Reset my progress'; }, 5000);
    return;
  }
  completed = [];
  readiness = [];
  writeStorage(PROGRESS_KEY, '[]');
  writeStorage('cpe-toolkit:readiness:v1', '[]');
  checks.forEach(input => { input.checked = false; });
  resetPending = false;
  button.textContent = 'Reset my progress';
  updateProgress();
  announce('Your setup checkmarks have been reset.');
});

const checks = [...document.querySelectorAll<HTMLInputElement>('[data-readiness-check]')];
let readiness: string[] = [];
try { const parsed: unknown = JSON.parse(readStorage('cpe-toolkit:readiness:v1') || '[]'); if (Array.isArray(parsed)) readiness = parsed.filter((id): id is string => typeof id === 'string'); } catch { /* Invalid optional storage is treated as empty. */ }
checks.forEach(input => {
  input.checked = readiness.includes(input.id);
  input.addEventListener('change', () => {
    readiness = checks.filter(check => check.checked).map(check => check.id);
    writeStorage('cpe-toolkit:readiness:v1', JSON.stringify(readiness));
    const status = document.querySelector('[data-checklist-status]');
    if (status) status.textContent = `${checks.filter(check => check.checked).length} of ${checks.length} checked. ${storageAvailable ? 'Saved only in this browser.' : 'Storage is unavailable; checkmarks may reset when you leave.'}`;
  });
});
updateProgress();
window.addEventListener('storage', event => { if (event.key === PROGRESS_KEY || event.key === null) { completed = parseProgress(readStorage(PROGRESS_KEY)); updateProgress(); } });

document.querySelectorAll<HTMLElement>('.prose pre').forEach(pre => {
  const code = pre.querySelector('code');
  if (!code) return;
  const button = document.createElement('button');
  button.type = 'button';
  button.className = 'copy-button';
  button.textContent = 'Copy';
  button.setAttribute('aria-label', 'Copy code to clipboard');
  button.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(code.textContent || '');
      button.textContent = 'Copied';
      announce('Code copied to clipboard.');
      setTimeout(() => { button.textContent = 'Copy'; }, 2000);
    } catch { announce('Clipboard access is unavailable. Select the code and copy it manually.'); }
  });
  pre.append(button);
});

document.querySelectorAll<HTMLButtonElement>('[data-print]').forEach(button => { button.hidden = false; button.addEventListener('click', () => window.print()); });

const menuButton = document.querySelector<HTMLButtonElement>('.nav-toggle');
const sidebar = document.querySelector<HTMLElement>('.sidebar');
const backdrop = document.querySelector<HTMLButtonElement>('.nav-backdrop');
const pageShell = document.querySelector<HTMLElement>('.page-shell');
function closeMenu() {
  document.documentElement.classList.remove('nav-open');
  menuButton?.setAttribute('aria-expanded', 'false');
  if (backdrop) backdrop.hidden = true;
  if (pageShell) pageShell.inert = false;
}
menuButton?.addEventListener('click', () => {
  const open = !document.documentElement.classList.contains('nav-open');
  document.documentElement.classList.toggle('nav-open', open);
  menuButton.setAttribute('aria-expanded', String(open));
  if (backdrop) backdrop.hidden = !open;
  if (pageShell) pageShell.inert = open;
  if (open) sidebar?.querySelector<HTMLButtonElement>('.nav-close')?.focus();
});
document.querySelectorAll('.nav-close, .nav-backdrop').forEach(button => button.addEventListener('click', () => { closeMenu(); menuButton?.focus(); }));
sidebar?.addEventListener('keydown', event => {
  if (!document.documentElement.classList.contains('nav-open') || event.key !== 'Tab') return;
  const items = [...sidebar.querySelectorAll<HTMLElement>('a, button')].filter(el => el.getClientRects().length > 0);
  const first = items[0]; const last = items[items.length - 1];
  if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last?.focus(); }
  else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first?.focus(); }
});
window.matchMedia('(min-width: 761px)').addEventListener('change', event => { if (event.matches) closeMenu(); });

type SearchEntry = { title: string; description: string; url: string; body: string };
const dialog = document.querySelector<HTMLDialogElement>('.search-dialog');
const input = document.querySelector<HTMLInputElement>('#guide-search');
const resultList = document.querySelector<HTMLUListElement>('.search-results');
const status = document.querySelector<HTMLElement>('.search-status');
let searchIndex: SearchEntry[] | null = null;
let loadPromise: Promise<void> | null = null;
function renderSearch() {
  if (!input || !resultList || !status || !searchIndex) return;
  resultList.replaceChildren();
  if (!input.value.trim()) { status.textContent = 'Type a word to search the toolkit.'; return; }
  const matches = searchGuides(searchIndex, input.value);
  status.textContent = matches.length ? `${matches.length} result${matches.length === 1 ? '' : 's'} found.` : 'No matching guides. Try a simpler word, or open Troubleshooting from the navigation.';
  matches.forEach((entry: SearchEntry) => {
    const li = document.createElement('li'); const link = document.createElement('a');
    const title = document.createElement('strong'); const description = document.createElement('span');
    link.href = entry.url; title.textContent = entry.title; description.textContent = entry.description;
    link.append(title, description); li.append(link); resultList.append(li);
  });
}
async function loadSearch() {
  if (searchIndex || !dialog || !status) return;
  status.textContent = 'Loading the guide index…';
  try {
    const response = await fetch(dialog.dataset.searchUrl || '');
    if (!response.ok) throw new Error('Guide index unavailable');
    searchIndex = await response.json();
    renderSearch();
  } catch {
    status.textContent = 'Search could not load. Close and reopen to try again, or use the guide navigation.';
  } finally { loadPromise = null; }
}
function openSearch() {
  if (!dialog || dialog.open) return;
  closeMenu();
  dialog.showModal();
  input?.focus();
  if (!searchIndex && !loadPromise) loadPromise = loadSearch(); else renderSearch();
}
document.querySelector('[data-open-search]')?.addEventListener('click', openSearch);
document.querySelector('[data-close-search]')?.addEventListener('click', () => dialog?.close());
dialog?.addEventListener('click', event => { if (event.target === dialog) { const box = dialog.getBoundingClientRect(); if (event.clientX < box.left || event.clientX > box.right || event.clientY < box.top || event.clientY > box.bottom) dialog.close(); } });
input?.addEventListener('input', renderSearch);
input?.addEventListener('keydown', event => { if (event.key === 'ArrowDown') { event.preventDefault(); resultList?.querySelector('a')?.focus(); } });
document.addEventListener('keydown', event => {
  const target = event.target as HTMLElement;
  const editing = target.matches('input, textarea, select') || target.isContentEditable;
  if (event.key === '/' && !editing && !event.ctrlKey && !event.metaKey && !event.altKey) { event.preventDefault(); openSearch(); }
  if (event.key === 'Escape' && document.documentElement.classList.contains('nav-open')) { closeMenu(); menuButton?.focus(); }
});

function openLinkedProblem() {
  if (!location.hash) return;
  const problem = document.getElementById(decodeURIComponent(location.hash.slice(1)));
  if (problem instanceof HTMLDetailsElement) problem.open = true;
}
openLinkedProblem();
window.addEventListener('hashchange', openLinkedProblem);
