---
title: "VersionGate"
description: "Serviço open-source self-hosted para gerenciar políticas de atualização de apps mobile: o cliente consulta o servidor e recebe se deve continuar normalmente, exibir um alerta de atualização disponível, ou forçar uma atualização obrigatória."
problem: "Apps mobile precisam de uma forma confiável de sinalizar ao cliente se ele deve seguir normalmente, avisar sobre uma atualização disponível, ou bloquear o uso até atualizar — sem depender de um serviço fechado de terceiros."
solution: "Servidor self-hosted que expõe uma REST API de políticas de atualização: o app consulta a versão atual contra o histórico de releases cadastrado e recebe de volta a ação recomendada (seguir, avisar ou bloquear)."
contribution: "Projeto próprio, do design da API à documentação. Não distribui binários — gerencia apenas metadados de release e políticas. Documentação publicada com Astro + Starlight. Licença MIT."
stack: ["Go", "PostgreSQL", "Docker", "Docker Compose", "Astro", "Starlight"]
status: ativo
repoUrl: "https://github.com/manuelzzz/versiongate"
docsUrl: "https://manuelzzz.github.io/versiongate/"
order: 1
---

Não distribui binários — gerencia apenas metadados de release e políticas de atualização.
Expõe uma REST API e um CLI para migrations e setup. Documentação publicada com Astro +
Starlight. Licença MIT.
