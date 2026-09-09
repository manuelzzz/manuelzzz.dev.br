---
title: "Minha primeira contribuição open-source: um PR no site do Dart"
date: 2026-09-09
category: open-source
tags: ["dart", "open-source", "documentação"]
summary: "Meu primeiro PR aceito em um projeto open-source de peso: renomeei uma classe no tutorial de OOP do dart.dev. Mudança pequena, mas aprendi bastante no processo — incluindo a CLA da Google."
---

Fiz meu primeiro PR pra um projeto open-source de verdade: [dart-lang/site-www#7497](https://github.com/dart-lang/site-www/pull/7497),
o repositório que mantém o [dart.dev](https://dart.dev).

## A mudança

Pequena, no fundo: a classe abstrata `Argument`, usada no tutorial de orientação a objetos,
representava tanto `Option` quanto `Command` — só que "argument", em terminologia de CLI,
normalmente se refere a parâmetros posicionais. Isso deixava o exemplo ambíguo. Renomeei pra
`CliElement`, que descreve melhor a abstração compartilhada.

Já existia uma [issue #7462](https://github.com/dart-lang/site-www/issues/7462) aberta por outra
pessoa descrevendo exatamente esse problema — não fui eu que encontrei essa pequena correção, só peguei uma issue
já trackeada e mandei o PR. Bom ponto de entrada pra uma primeira contribuição: o problema
já estava definido, só faltava alguém resolver.

23 linhas adicionadas, 23 removidas. Só troca de nome, sem mudança de comportamento — mas
precisei entender o exemplo inteiro do tutorial pra ter certeza de que a renomeação fazia sentido
em todos os lugares onde a classe era usada.

## O que aprendi no processo

- **CLA da Google**: antes do PR ser aceito, precisei assinar o Contributor License Agreement da
  Google — documento legal que formaliza que a contribuição pode ser usada pelo projeto. Não
  sabia que isso era necessário até topar com o bot do CLA no PR.
- **Guia de estilo de documentação**: o repositório segue as
  [Google Developer Documentation Guidelines](https://developers.google.com/style) — nada de
  "i.e."/"e.g.", nada de primeira pessoa ("I"/"we"), quebras de linha semânticas de até 80
  caracteres. Detalhes que eu não pensaria em seguir sem o checklist do PR template.
- **PR pequeno, review estruturado**: mesmo sendo uma mudança pequena, teve um processo de review
  de verdade, com checklist de contribuição e expectativas claras — nada de "só sobe e já era".

Mudança pequena, mas valeu muito pela experiência de passar pelo processo inteiro de contribuir
com um projeto open-source estabelecido, de fora pra dentro.

## Próximos passos

Agora que entendi o fluxo, quero ir atrás de mais issues já trackeadas em projetos que uso — e,
se eu topar com algum bug que ainda não tem issue aberta, subir a issue eu mesmo e tentar resolver
também. Progresso disso deve aparecer em changelogs futuros por aqui.
