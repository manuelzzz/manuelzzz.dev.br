export const SITE_TITLE = 'Manuel Souza';
export const SITE_DESCRIPTION =
  'Portfólio e changelog técnico de Manuel Souza — projetos, aprendizados e progresso em open-source.';

export const NAV_ITEMS = [
  { label: 'home', href: '/' },
  { label: 'projects', href: '/projects' },
  { label: 'changelog', href: '/changelog' },
  { label: 'now', href: '/now' },
] as const;

// TODO: confira/ajuste esses links antes de publicar
export const SOCIAL_LINKS = [
  { label: 'GitHub', href: 'https://github.com/manuelzzz' },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/manuelzzz' },
  { label: 'Email', href: 'mailto:manuelssouza23@icloud.com' },
] as const;

export const CATEGORY_LABELS: Record<string, string> = {
  'open-source': 'open-source',
  aprendizado: 'aprendizado',
  projeto: 'projeto',
  infra: 'infra',
  nota: 'nota',
};

export const CATEGORY_COLORS: Record<string, string> = {
  'open-source': 'text-accent-teal border-accent-teal/40 bg-accent-teal/10',
  aprendizado: 'text-accent-amber border-accent-amber/40 bg-accent-amber/10',
  projeto: 'text-accent-violet border-accent-violet/40 bg-accent-violet/10',
  infra: 'text-fg-muted border-fg-muted/40 bg-fg-muted/10',
  nota: 'text-accent-teal border-accent-teal/40 bg-accent-teal/10',
};
