---
title: "DevGrid"
description: "Contribution graph unificado, combinando atividade do GitHub e do GitLab num só grid — gerado diariamente via GitHub Actions."
problem: "Uso GitHub e GitLab no dia a dia, e cada plataforma só mostra o próprio contribution graph — nenhuma das duas enxerga a atividade na outra."
solution: "Workflow do GitHub Actions que roda todo dia, soma a atividade das duas plataformas por dia, e gera um SVG único (versões light e dark) publicado numa branch de assets do próprio repositório, consumível via URL raw por qualquer site."
contribution: "Projeto próprio, criado e mantido do zero. Integrado neste site com alternância automática entre as versões light/dark conforme o tema escolhido pelo usuário."
learnings: "Depurar um bug de contraste entre as células vazias do SVG e o fundo do container me fez prestar mais atenção à diferença entre cor de fundo de página e cor de fundo de card ao reaproveitar assets de terceiros."
stack: ["TypeScript", "GitHub Actions"]
status: ativo
repoUrl: "https://github.com/manuelzzz/DevGrid"
order: 7
---

Minhas contribuições ficam espalhadas entre GitHub e GitLab (uso os dois no dia a dia), e cada
plataforma só mostra o próprio gráfico. O DevGrid junta as duas fontes num único contribution
graph, com SVGs light/dark regenerados todo dia por workflow.
