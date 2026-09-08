# manuelzzz.dev.br

Portfólio pessoal e "blog" baseado em changelogs, publicado em [manuelzzz.dev.br](https://manuelzzz.dev.br).

Construído com [Astro](https://astro.build) + [Tailwind CSS](https://tailwindcss.com), 100%
estático, sem backend. Todo o conteúdo (changelogs e projetos) é Markdown versionado no repo.

## Desenvolvimento

```sh
npm install
npm run dev
```

## Estrutura de conteúdo

- `src/content/changelog/*.md` — entradas do changelog, uma por arquivo, nomeadas com prefixo de
  data (`YYYY-MM-DD-titulo.md`). Frontmatter: `title`, `date`, `category`
  (`open-source` | `aprendizado` | `projeto` | `infra` | `nota`), `tags`, `summary`, `project`
  (opcional), `draft` (opcional).
- `src/content/projects/*.md` — projetos do portfólio. Frontmatter: `title`, `description`,
  `stack`, `status` (`ativo` | `pausado` | `arquivado` | `concluido`), `repoUrl`, `liveUrl`,
  `featured`, `order`.

Para publicar uma nova entrada de changelog ou projeto, basta adicionar o arquivo Markdown e dar
push — o deploy é automático.

## Build & deploy

```sh
npm run build
npm run preview
```

O deploy para o GitHub Pages acontece automaticamente via GitHub Actions
(`.github/workflows/deploy.yml`) a cada push na branch `main`.
