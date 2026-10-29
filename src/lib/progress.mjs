export const PROGRESS_KEY = 'cpe-toolkit:progress:v1';
export const GUIDE_IDS = ['readiness', 'editor', 'c-cpp', 'python', 'git-github', 'verify'];

/** Stored data is untrusted, optional, and limited to known guide identifiers. */
export function parseProgress(raw) {
  try {
    const value = JSON.parse(raw || '[]');
    return Array.isArray(value) ? [...new Set(value.filter((id) => GUIDE_IDS.includes(id)))] : [];
  } catch {
    return [];
  }
}

export function nextGuide(completed) {
  return GUIDE_IDS.find((id) => !completed.includes(id)) || null;
}
