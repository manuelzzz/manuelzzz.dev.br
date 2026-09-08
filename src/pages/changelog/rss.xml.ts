import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';
import { SITE_TITLE } from '../../consts';

export async function GET(context: APIContext) {
  const entries = await getCollection('changelog', ({ data }) => !data.draft);

  return rss({
    title: `${SITE_TITLE} — changelog`,
    description: 'Progresso em projetos, contribuições open-source e notas técnicas.',
    site: context.site!,
    items: entries
      .sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf())
      .map((entry) => ({
        title: entry.data.title,
        pubDate: entry.data.date,
        description: entry.data.summary,
        link: `/changelog/${entry.id}/`,
        categories: [entry.data.category, ...entry.data.tags],
      })),
  });
}
