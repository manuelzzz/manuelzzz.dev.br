---
title: "version_policy"
description: "Motor de políticas de atualização de versão, agnóstico de framework, em Dart puro. Dado o histórico de releases e a versão atual do app, determina se a atualização é desnecessária, opcional ou obrigatória — percorrendo o caminho de upgrade, não só comparando a versão atual com a mais recente."
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
