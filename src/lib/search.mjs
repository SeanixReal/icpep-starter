const normalize = (text) => text.toLowerCase().normalize('NFKD').replace(/[\u0300-\u036f]/g, '');

export function searchGuides(entries, query) {
  const terms = normalize(query.trim()).split(/\s+/).filter(Boolean);
  if (!terms.length) return [];
  return entries.map((entry) => {
    const title = normalize(entry.title);
    const description = normalize(entry.description);
    const text = `${title} ${description} ${normalize(entry.body || '')}`;
    if (!terms.every((term) => text.includes(term))) return null;
    return { entry, score: terms.reduce((score, term) => score + (title.includes(term) ? 8 : 0) + (description.includes(term) ? 3 : 0) + 1, 0) };
  }).filter(Boolean).sort((a, b) => b.score - a.score).slice(0, 8).map((match) => match.entry);
}
