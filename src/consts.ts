export const SITE_TITLE = 'Manuel Santos Souza';
export const SITE_HANDLE = 'manuelzzz';
export const SITE_DESCRIPTION =
  'Portfólio e changelog técnico de Manuel Santos Souza — projetos, aprendizados e progresso em open-source.';

export const PERSON_JOB_TITLE = 'Desenvolvedor Mobile & Frontend';

export const HERO_STACK = ['Flutter', 'React Native', 'Expo', 'React', 'TypeScript', 'Swift'];

export const PROOF_POINTS = [
  { label: 'downloads', value: '+140 mil' },
  { label: 'usuários', value: '+15 mil' },
  { label: 'apps Flutter em produção', value: '+10' },
  { label: 'projetos open-source ativos', value: '4' },
] as const;

export const MAIN_STACK = [
  { group: 'Mobile & Native', items: ['Flutter', 'Dart', 'React Native', 'Expo', 'Swift', 'UIKit', 'SwiftUI'] },
  { group: 'Backend', items: ['Java', 'Spring', 'Go', 'PostgreSQL', 'REST APIs', 'GraphQL'] },
  { group: 'Frontend', items: ['React', 'TypeScript', 'JavaScript', 'Jaspr', 'Tailwind CSS'] },
  {
    group: 'Engineering & Ops',
    items: ['TDD', 'Clean Architecture', 'CI/CD', 'Docker', 'GitHub Actions', 'GitLab CI/CD', 'Git'],
  },
] as const;

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

export const STATUS_LABELS: Record<string, string> = {
  ativo: 'ativo',
  pausado: 'pausado',
  arquivado: 'arquivado',
  concluido: 'concluído',
};

export const STATUS_COLORS: Record<string, string> = {
  ativo: 'text-accent-teal border-accent-teal/40 bg-accent-teal/10',
  pausado: 'text-accent-amber border-accent-amber/40 bg-accent-amber/10',
  arquivado: 'text-fg-muted border-fg-muted/40 bg-fg-muted/10',
  concluido: 'text-accent-violet border-accent-violet/40 bg-accent-violet/10',
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
  Git: 'simple-icons:git',
  GraphQL: 'simple-icons:graphql',
  'REST APIs': 'lucide:webhook',
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

// Cor oficial de marca por tecnologia (hex do simple-icons: https://github.com/simple-icons/simple-icons).
// Algumas marcas (Next.js, Java/OpenJDK, UIKit/Apple, Markdown, Expo) são oficialmente preto/quase-preto —
// nesses casos usamos var(--color-fg) em vez da cor literal, pra continuar visível nos dois temas
// (um hex fixo cinza-claro sumiria no fundo claro do tema light).
export const TECH_COLORS: Record<string, string> = {
  'React Native': '#61dafb',
  React: '#61dafb',
  'Next.js': 'var(--color-fg)',
  Expo: 'var(--color-fg)',
  TypeScript: '#3178c6',
  JavaScript: '#f7df1e',
  Docker: '#2496ed',
  'Docker Compose': '#2496ed',
  Flutter: '#02569b',
  Dart: '#0175c2',
  PHP: '#777bb4',
  'GitHub Actions': '#2088ff',
  'GitLab CI/CD': '#fc6d26',
  Git: '#f03c2e',
  GraphQL: '#e10098',
  'REST APIs': '#0ea5e9',
  Java: 'var(--color-fg)',
  Spring: '#6db33f',
  Thymeleaf: '#005f0f',
  Figma: '#f24e1e',
  Swift: '#f05138',
  SwiftUI: '#f05138',
  UIKit: 'var(--color-fg)',
  Kotlin: '#7f52ff',
  Astro: '#bc52ee',
  Starlight: '#bc52ee',
  'Tailwind CSS': '#06b6d4',
  Go: '#00add8',
  PostgreSQL: '#4169e1',
  'Prisma ORM': '#2d3748',
  Markdown: 'var(--color-fg)',
};
