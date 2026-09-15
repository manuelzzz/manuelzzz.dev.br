---
title: "O que projetos open-source grandes me ensinaram sobre comunicação"
date: 2026-09-15
category: aprendizado
tags: ["open-source", "comunicação", "code-review", "processo"]
summary: "Ultimamente venho atrás de mais contribuições open-source (e tentando criar as minhas, em escala bem menor). O maior aprendizado não foi código e sim comunicação assíncrona."
---

Depois da minha primeira contribuição no [dart-lang/site-www](https://github.com/dart-lang/site-www),
venho tentando ir atrás de mais issues trackeadas em projetos que uso e hoje tenho dois PRs em
andamento no website do flutter, relacionados ao Blog (o que me interessa tendo em vista o conteúdo técnico e informativo que depende de humanos), e devo trazer atualizações sobre eles em breve por aqui. Em paralelo, também
venho tentando criar os meus próprios projetos open-source, claro que em proporções bem menores o [VersionGate](https://github.com/manuelzzz/versiongate), o
[The Cheat Sheet](https://github.com/manuelzzz/the_cheat_sheet), o
[DevGrid](https://github.com/manuelzzz/DevGrid) que vocês já devem conhecer, se não, ao terminar de ler esse artigo, recomendo darem uma olhada no repo deles!

Bom, nesse processo todo, tem muito aprendizado esperado: lidar com código de projetos grandes,
entender convenções de um repositório que não é seu, gerenciar issues, revisar PR de outra
pessoa. Tudo isso importa, mas por hoje vou deixar de lado — porque tem uma coisa que se destaca
muito mais que o resto: **comunicação** (de verdade, eu to impressionado).

## O nível de comunicação é invejável

Acompanhar o fluxo de issues e PRs de projetos como os do `flutter.dev`/`dart.dev` é impressionante.
É um volume gigante de gente, de fuso horário diferente, trabalhando ao mesmo tempo em coisas
relacionadas — e mesmo assim, a maior parte das decisões importantes acontece dentro de um
comentário de issue ou de um `.md` de proposta. As pessoas explicam contexto, decisão e próximo
passo por escrito, de um jeito que o histórico inteiro fica ali, pesquisável, sem precisar
perguntar de novo três semanas depois.

E o contraste engraçado é que isso não é proporcional ao tamanho do time. É normal ver empresas,
projetos ou times bem menores que deveriam conseguir se alinhar tão bem ou melhor, já que têm
muito menos gente e muito menos ruído e acabam vivendo de reunião de alinhamento toda semana, e ainda
assim errando os mesmos pontos por falta de contexto escrito. Enquanto isso, esses projetos gigantes
resolvem um bocado de coisa só cuidando bem do próprio inbox do GitHub e reclamando quando alguém
te pinga (minha suspeita é q os cara já tem uma mensagem pre-pronta para quando são marcados em issues que eles não acham que eles tenham tanto a ver com o assunto)

## O que dá pra aprender com isso

Separei aqui o que venho tentando aplicar pra ser um dev mais "resolvedor de problema no
comentário da issue", e menos "desenhando quadro e compartilhando tela numa call":

- **Contexto completo antes de pedir ajuda.** Descrever o problema, o que já foi tentado e a
  hipótese atual num comentário substitui metade das perguntas de esclarecimento que uma call
  levaria 10 minutos pra fazer.
- **Fechar o loop por escrito.** Toda decisão tomada numa call rápida vira, na sequência, um
  resumo comentado na issue ou no PR — quem não estava na call também precisa saber o que foi
  decidido, e o motivo.
- **Comentário rico em vez de "vamos alinhar isso rapidinho?"** Trecho de código, link pra linha
  específica, checklist do que falta, é sério, um comentário bem escrito resolve o que uma reunião
  resolveria, sem exigir que todo mundo pare o que está fazendo ao mesmo tempo.
- **Escrever pensando em quem vai ler depois.** Todo comentário de issue é, na prática,
  documentação pública. Vale (MUITO) a pena escrever como se outra pessoa fosse encontrar aquele thread daqui
  a um ano tentando entender por que uma decisão foi tomada.
- **Um assunto por comentário.** Misturar cinco perguntas diferentes num comentário só faz a
  resposta demorar mais e fica difícil de referenciar depois.
- **Pedir revisão específica.** "Dá uma olhada geral" gera review genérico. Apontar a linha, o
  trecho, a dúvida exata gera resposta útil.
- **Normalizar admitir erro em público, no próprio thread.** Parte do que faz esses projetos
  funcionarem é a naturalidade de alguém voltar num comentário anterior e dizer "na verdade, eu
  estava errado sobre isso" — sem drama, só corrigindo o histórico.

Nada disso é novidade nenhuma, mas é bem diferente ver escrito e ver aplicado de verdade, issue
após issue, em escala. Fica registrado aqui como lembrete pra mim mesmo da próxima vez que a
resposta automática for "bora marcar uma call".
