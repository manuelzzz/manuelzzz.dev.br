---
title: "Testei o Jaspr como alternativa ao Astro"
date: 2026-09-08
category: aprendizado
tags: ["dart", "jaspr", "astro", "ssg"]
summary: "Rodei um protótipo em Jaspr (framework web em Dart, DX inspirada em Flutter) numa branch separada pra avaliar se valeria migrar o site. Decidi esperar até ter uma versão 1.y.z."
---

Como sou desenvolvedor Dart/Flutter no dia a dia, fiquei curioso sobre o [Jaspr](https://jaspr.site)
— um framework web em Dart com DX inspirada em Flutter, suportando SSG, SSR e SPA — como possível
substituto do Astro pra esse site.

Antes de migrar qualquer coisa de verdade, criei um protótipo isolado numa branch separada
(sem tocar no site em produção), com 3 páginas reaproveitando o conteúdo real daqui: home,
projetos e changelog usando `jaspr_content` pra carregar markdown com frontmatter.

## O que achei bom

- A API de componentes (`div()`, `section()`, `css()`...) realmente lembra Flutter/Widgets, com
  CSS type-safe em Dart.
- Hot reload rápido depois do build inicial (~0.5s em reloads incrementais).
- `jaspr_content` cobre bem o caso de blog/changelog: markdown, frontmatter, layouts prontos
  (`BlogLayout`, `DocsLayout`), e é possível misturar páginas de conteúdo com componentes normais
  via `ContentApp.custom` + `routerBuilder`.
- Existe integração com RSS (`RssOutput`) e Tailwind (`jaspr_tailwind`) — não é tão limitado
  quanto eu achava numa primeira pesquisa só pela documentação.

## O que me fez desistir por enquanto

- `jaspr` (v0.23.4) e `jaspr_content` (v0.5.4) ainda são **pré-1.0**. Bati num conflito de
  versão entre `jaspr_builder` e `build_web_compilers` logo no scaffold inicial — resolvido, mas
  é o tipo de atrito comum em pacote que ainda não estabilizou a API.
- Sem validação de schema tipado no frontmatter (tipo o Zod do Astro Content Collections) —
  erro de digitação no frontmatter só quebra em runtime, não no build.
- Ecossistema bem menor (`jaspr_content` tem uns 10 mil downloads no pub.dev, contra milhões do
  Astro no npm) — menos exemplos, menos plugins prontos.
- Achei uma pegadinha não muito óbvia: `FilesystemLoader` trata o diretório apontado como raiz
  das rotas, então precisei reestruturar as pastas pra manter o prefixo `/changelog` nas URLs.

## Decisão

Vou esperar o Jaspr amadurecer — pelo menos até ter uma versão `1.y.z` — antes de considerar
migrar de verdade. Por enquanto, o site continua em Astro. Bom experimento, mesmo assim.
