---
title: "Como auditar nós validadores e verificar o tempo de atividade independente de infraestrutura"
description: "Roteiro técnico para inspecionar integridade de atestações e detectar concentração de operadores em nuvens públicas."
pubDate: 2026-11-19
category: "INFRAESTRUTURA"
readingTime: "5 min"
featured: false
---

A saúde e a descentralização de redes baseadas em Prova de Participação (*Proof-of-Stake*) dependem da diversidade geográfica e de provedores dos seus validadores.

## Indicadores de auditoria independente
1. **Diversidade de Clientes:** Redes saudáveis mantêm equilíbrio entre clientes de consenso (como Lighthouse, Prysm, Teku) para evitar que um bug em um único cliente provoque cortes em massa (*slashing*).
2. **Distribuição de ASN:** Verificar quais Sistemas Autônomos (ASNs) hospedam os nós validadores é essencial para avaliar a resiliência contra bloqueios de provedores de nuvem (como AWS e Hetzner).
3. **Métricas de Eficácia de Atestação:** Taxas de atestações corretas e tempo de propagação no gossip network revelam a qualidade de rede de cada validador auditado.
