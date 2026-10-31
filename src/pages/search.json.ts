import { getCollection } from 'astro:content';
import { url } from '../lib/site';
export async function GET() {
  const guides = await getCollection('guides');
  const entries = guides.map(guide => ({ title: guide.data.title, description: guide.data.description, url: url(`guides/${guide.id}/`), body: guide.body || '' }));
  entries.push(
    { title: 'Troubleshooting', description: 'Fix PATH, compiler, Python launcher, and Git errors.', url: url('troubleshooting/'), body: 'not recognized command not found cannot open file missing exe administrator blocked store alias credentials authentication' },
    { title: 'Learning roadmap', description: 'Practice variables, loops, functions, debugging, and a first project.', url: url('roadmap/'), body: 'beginner exercises learning programming practice projects next steps' },
    { title: 'Downloads', description: 'The complete guide, verification programs, and official software links.', url: url('downloads/'), body: 'download print pdf markdown zip hello.c hello.cpp hello.py VS Code MSYS2 Python Git' },
    { title: 'About the toolkit', description: 'Review status, contribution links, and what is still proposed.', url: url('about/'), body: 'faculty approval pilot testing review version privacy local storage contribute repository roadmap' },
  );
  return new Response(JSON.stringify(entries), { headers: { 'Content-Type': 'application/json; charset=utf-8' } });
}
