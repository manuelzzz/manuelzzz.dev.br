---
title: "PR mergeado no flutter/website: botão de voltar ao topo nos posts do blog"
date: 2026-09-16
category: open-source
tags: ["dart", "flutter", "open-source", "ui"]
summary: "Meu PR que adiciona um botão de voltar ao topo nos posts do blog do flutter.dev foi mergeado — um dos dois que mencionei estarem em andamento."
---

Um dos dois PRs que comentei estarem em andamento no [flutter/website](https://github.com/flutter/website)
acabou de ser mergeado: [flutter/website#13882](https://github.com/flutter/website/pull/13882).

## A mudança

Um botão flutuante de "voltar ao topo" pros posts longos do blog: aparece depois que o leitor
rola a página além da hero, e leva de volta ao topo com scroll suave. Implementei como
`BackToTopButton`, componente compartilhado em `site_shared` — reutilizando o mesmo sinal de
scroll-spy que já existia pro `in-content`, sem precisar de tracking de scroll novo.

Por enquanto o botão só está ligado ao layout do blog, mas o componente ficou reutilizável pra outros conteúdos longos do site no futuro.

Esse PR é irmão do de índice/tabela de conteúdo (#13881). Deixei os dois separados de propósito,
sem dependência de código entre eles, pra cada um poder ser revisado e mergeado de forma
independente. Tudo isso, claro, depois de tomar uma chamada no pé do ouvido por subir um MR com duas features independentes.

Enfim, esse outro PR acabou por ficar de stand-by pelos próximos tempos. Aparentemente a Issue que a tabela com os conteúdos. O revisor do PR deixou avisado que durante os próximos dias ele vai trabalhar em uma feature relacionada aos heros das imagens do blog, ou seja, meu MR vai findar por ficar em segundo plano. Independentemente, após essa nova feature ser mergeada ele vai voltar a ser revisado.

## Criei vergonha na cara

Depois de implementar isso pro site do Flutter, ficou impossível não notar que faltava exatamente
a mesma coisa por aqui. Então criei vergonha na cara e trouxe os dois recursos pro próprio site:
um botão de voltar ao topo (aparece só depois que rola um pouco a página, some quando volta pro
início, scroll suave) espalhado por todas as páginas, e um sumário nas páginas de changelog que
têm heading suficiente pra justificar um. Ironicamente, acabei implementando por aqui o TOC antes
mesmo do meu próprio PR de TOC no site do Flutter ser revisado.
