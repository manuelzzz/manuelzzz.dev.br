---
title: "version_policy"
description: "Motor de políticas de atualização de versão, agnóstico de framework, em Dart puro. Dado o histórico de releases e a versão atual do app, determina se a atualização é desnecessária, opcional ou obrigatória — percorrendo o caminho de upgrade, não só comparando a versão atual com a mais recente."
problem: "Comparar só a versão atual do usuário contra a mais recente pode deixar passar uma atualização obrigatória que existe *entre* as duas — o app segue achando que está tudo bem quando não está."
solution: "Lib pure Dart (sem Flutter, HTTP, storage ou UI) que percorre o histórico completo de releases entre a versão atual e a mais recente, e resolve uma única pergunta: qual é a exigência de atualização — nenhuma, opcional ou obrigatória?"
contribution: "Projeto próprio, extraído da lógica de políticas de atualização usada no VersionGate para ser reutilizável independente de framework. Licença MIT."
learnings: "Separar essa lógica do VersionGate deixou claro o valor de isolar uma regra de negócio pura (sem I/O) numa lib própria — o consumidor decide o que fazer com a resposta (diálogo, bloqueio, log), a lib só resolve a regra."
stack: ["Dart"]
status: ativo
repoUrl: "https://github.com/manuelzzz/version_policy"
order: 6
---

Pure Dart — sem Flutter, sem HTTP, sem storage, sem UI. Resolve uma única pergunta: dado o
histórico de releases e a versão atual, qual é a exigência de atualização? O que fazer com a
resposta (mostrar um diálogo, bloquear o app, logar um aviso) fica por conta de quem consome a
lib.

A motivação: uma atualização obrigatória pode estar *entre* a versão do usuário e a mais recente
— comparar só as duas pontas pode deixar passar um release obrigatório no meio do caminho.
Licença MIT.
