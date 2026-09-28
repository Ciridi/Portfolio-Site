import { getCollection } from 'astro:content';

/** Local paths only. Honors /repo-name on GitHub Pages and / on custom domains. */
export function withBase(path = ''): string {
  return `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${path.replace(/^\//, '')}`;
}
export function projectPath(id: string): string {
  return withBase(`projects/${encodeURIComponent(id)}/`);
}
/** One publication and sorting rule for both the index and generated routes. */
export async function publishedProjects() {
  const entries = await getCollection('projects', ({ data }) => !data.draft);
  return entries.sort((a, b) =>
    Number(b.data.featured) - Number(a.data.featured)
    || a.data.order - b.data.order
    || b.data.year - a.data.year
    || a.data.title.localeCompare(b.data.title)
  );
}
