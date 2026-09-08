export const SITE_TITLE = 'Manuel Santos Souza';
export const SITE_HANDLE = 'manuelzzz';
export const SITE_DESCRIPTION =
  'Portfólio e changelog técnico de Manuel Santos Souza — projetos, aprendizados e progresso em open-source.';

export const NAV_ITEMS = [
  { label: 'home', href: '/' },
  { label: 'projects', href: '/projects' },
  { label: 'changelog', href: '/changelog' },
  { label: 'now', href: '/now' },
] as const;

export const SOCIAL_LINKS = [
  { label: 'GitHub', href: 'https://github.com/manuelzzz', icon: 'simple-icons:github' },
  { label: 'GitLab', href: 'https://gitlab.com/manuelzzz', icon: 'simple-icons:gitlab' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/manuelzzz/', icon: 'simple-icons:linkedin' },
  { label: 'Email', href: 'mailto:manuelssouza23@icloud.com', icon: 'lucide:mail' },
  { label: 'Projetos', href: '/projects', icon: 'lucide:folder-git-2' },
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

export const CATEGORY_ICONS: Record<string, string> = {
  'open-source': 'lucide:git-branch',
  aprendizado: 'lucide:book-open',
  projeto: 'lucide:rocket',
  infra: 'lucide:server',
  nota: 'lucide:sticky-note',
};

// Ícone de marca por tecnologia (slug do Iconify). Tecnologias sem entrada aqui
// aparecem como tag de texto puro, sem ícone — evita gambiarra de ícone genérico.
export const TECH_ICONS: Record<string, string> = {
  'React Native': 'simple-icons:react',
  React: 'simple-icons:react',
  'Next.js': 'simple-icons:nextdotjs',
  Expo: 'simple-icons:expo',
  TypeScript: 'simple-icons:typescript',
  JavaScript: 'simple-icons:javascript',
  Docker: 'simple-icons:docker',
  'Docker Compose': 'simple-icons:docker',
  Flutter: 'simple-icons:flutter',
  Dart: 'simple-icons:dart',
  PHP: 'simple-icons:php',
  'GitHub Actions': 'simple-icons:githubactions',
  'GitLab CI/CD': 'simple-icons:gitlab',
  Java: 'simple-icons:openjdk',
  Spring: 'simple-icons:spring',
  Thymeleaf: 'simple-icons:thymeleaf',
  Figma: 'simple-icons:figma',
  Swift: 'simple-icons:swift',
  SwiftUI: 'simple-icons:swift',
  UIKit: 'simple-icons:apple',
  Kotlin: 'simple-icons:kotlin',
  Astro: 'simple-icons:astro',
  Starlight: 'simple-icons:astro',
  'Tailwind CSS': 'simple-icons:tailwindcss',
  Go: 'simple-icons:go',
  PostgreSQL: 'simple-icons:postgresql',
  'Prisma ORM': 'simple-icons:prisma',
  Markdown: 'simple-icons:markdown',
};
