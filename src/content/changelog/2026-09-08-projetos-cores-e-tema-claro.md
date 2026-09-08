---
title: "Projetos em destaque automáticos, cores de marca e correções no tema claro"
date: 2026-09-08
category: infra
tags: ["astro", "tailwind", "acessibilidade", "ux"]
summary: "Rodada de ajustes no site: projeto novo, distinção entre docs e live, cores oficiais por tecnologia, e uma correção de verdade no tema claro que eu tinha errado duas vezes antes de achar a causa raiz."
---

## Novo projeto

Adicionei o [version_policy](https://github.com/manuelzzz/version_policy) — motor de políticas
de atualização de versão em Dart puro, sem Flutter/HTTP/UI, que uso como peça de domínio
reaproveitável em conjunto com o VersionGate.

## "docs" vs "live"

Os cards de projeto agora distinguem link de **documentação** (`docs →`) de link de **produto ao
vivo** (`live →`). O VersionGate, por exemplo, só tem docs publicadas (Astro + Starlight) — não
faz sentido chamar isso de "live".

## Projetos em destaque = projetos ativos

Removi o campo manual `featured` do schema dos projetos. Antes eu precisava lembrar de marcar
`featured: true` toda vez que adicionava um projeto novo — e esqueci exatamente disso com o
version_policy. Agora "em destaque" é derivado direto do `status: ativo`, sem flag pra manter
sincronizada.

## Cores de marca nas tecnologias

Cada tag de tecnologia (nas experiências e nos projetos) agora usa a cor oficial da marca — puxei
os valores hex direto da base do [simple-icons](https://github.com/simple-icons/simple-icons), o
mesmo pacote que fornece os ícones. GitLab laranja `#fc6d26`, Flutter azul `#02569b`, e assim por
diante, tanto no ícone quanto na borda da tag.

Isso quase deu errado: algumas marcas (Next.js, Java, UIKit, Markdown) são oficialmente pretas, e
eu tinha fixado um cinza-claro no lugar do preto pra não sumir no fundo escuro — só que era um
hex literal, então no tema claro o cinza-claro sumia *nele também*. Troquei pra `var(--color-fg)`,
que se adapta ao tema.

## Um carrossel que ganhou e perdeu um recurso

Adicionei um carrossel pros projetos em destaque (2 por vez, com scroll-snap) e tentei acrescentar
indicadores de página (dots). Não emplacou: o cálculo de posição rodava antes do layout
estabilizar e os dots simplesmente não apareciam de forma confiável. Removi os dots por completo
e deixei só as setas de navegação, que funcionavam bem desde o início — às vezes a versão mais
simples é a que se sustenta.

## Tema claro: a correção que eu errei duas vezes

O texto das páginas de conteúdo (`/now`, entradas de changelog) estava ilegível no tema claro.
Minha primeira tentativa foi trocar `prose-invert` por variáveis CSS ligadas aos tokens de cor do
site — parecia certo, mas continuou quebrado. Descobri o motivo: eu tinha colocado a
sobrescrita dentro de `@layer base`, e as regras do próprio `@tailwindcss/typography` têm
prioridade maior no cascade do Tailwind v4, então minha correção nunca vencia de verdade — o
texto continuava usando a paleta cinza padrão do plugin, calibrada pra fundo branco.

A correção certa foi mover a sobrescrita pra fora de qualquer `@layer` — CSS "sem camada" tem
prioridade sobre qualquer coisa dentro de `@layer`, independente da ordem no arquivo.

## Outros ajustes pequenos

- Espaço faltando entre um `</a>` e o texto seguinte em `/now` (quebra de linha no meio do
  parágrafo sendo colapsada sem espaço).
- Textos mais longos (bio da home, corpo das entradas de changelog) agora justificados.
