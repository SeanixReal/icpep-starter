export const site = {
  name: 'CpE Starter Toolkit',
  chapter: 'ICpEP.SE · CIT-U Chapter',
  version: '0.1.0',
  reviewed: 'October 29, 2026',
  repository: 'https://github.com/SeanixReal/icpep-starter',
};

export function url(path = ''): string {
  return `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${path.replace(/^\//, '')}`;
}

export const sections = [
  { label: 'Your setup path', items: [
    { id: 'readiness', title: 'Before you begin', number: '01' },
    { id: 'editor', title: 'Set up VS Code', number: '02' },
    { id: 'c-cpp', title: 'Set up C & C++', number: '03' },
    { id: 'python', title: 'Set up Python', number: '04' },
    { id: 'git-github', title: 'Git & GitHub', number: '05' },
    { id: 'verify', title: 'Run your first programs', number: '06' },
  ] },
  { label: 'Keep exploring', items: [
    { id: 'macos', title: 'A note for Mac users' },
  ] },
];
