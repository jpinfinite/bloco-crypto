---
title: "Por que taxas menores podem mudar a atividade das corretoras descentralizadas em Layer 2"
description: "Como custos de transação, liquidez, incentivos e execução influenciam o uso de DEXs em rollups — sem atribuir toda mudança a um único fator."
pubDate: 2026-11-21
category: "MERCADO"
readingTime: "5 min"
featured: false
---

Redes Layer 2 podem reduzir o custo de execução de operações em comparação com a camada principal da Ethereum em determinadas condições. Para corretoras descentralizadas (*DEXs*), isso pode tornar swaps de menor valor e estratégias de rebalanceamento mais viáveis.

Mas a relação entre taxas e volume não é automática: atividade de mercado também depende de liquidez, spreads, incentivos, qualidade de execução, ativos disponíveis e confiança na infraestrutura.

## Como os custos entram na decisão

Uma negociação em uma DEX pode envolver mais de um custo: taxa de rede da Layer 2, custo de publicação de dados e liquidação na Ethereum, taxa cobrada pelo protocolo, *slippage* decorrente da profundidade de liquidez e custo de arbitragem ou rebalanceamento da posição.

Uma taxa de rede pequena não garante que o custo total do swap seja baixo. Em pools pouco líquidas, o *slippage* pode superar com folga a economia obtida no gás.

## O papel dos blobs

A atualização Dencun introduziu transações com blobs por meio da EIP-4844. Os blobs criam um mercado de taxas separado para dados publicados por rollups e podem reduzir o custo de disponibilidade de dados em relação ao uso de calldata.

Os blobs não tornam todas as transações da Ethereum mais baratas nem beneficiam automaticamente qualquer rede compatível com EVM. O benefício depende de a Layer 2 utilizar a Ethereum para publicar dados e de como o custo é repassado aos usuários.

## Como avaliar se a redução de taxas aumentou a adoção

Uma análise consistente compara séries de taxas com volume, usuários ativos, número de transações, liquidez e receita dos protocolos. Também deve controlar eventos como incentivos, campanhas, listagens e períodos de volatilidade.

Se apenas o volume aumenta, não é possível concluir que houve adoção sustentável. Se usuários e liquidez também crescem ao longo do tempo, a hipótese ganha evidências adicionais — ainda assim, correlação não prova causalidade.

## Fontes técnicas

- [Ethereum.org — Dencun](https://ethereum.org/roadmap/dencun/)
- [EIP-4844 — Blob-carrying transactions](https://eips.ethereum.org/EIPS/eip-4844)
- [Ethereum.org — Optimistic Rollups](https://ethereum.org/developers/docs/scaling/optimistic-rollups/)

*As taxas variam com demanda, parâmetros da rede e aplicação. Consulte os dados atuais antes de comparar custos.*
