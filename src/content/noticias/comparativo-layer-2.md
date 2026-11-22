---
title: "Redes Layer 2 na prática: comparativo técnico entre Arbitrum, Base e Optimism"
description: "Como os rollups reduzem o custo de transação mantendo a liquidação na rede principal."
pubDate: 2026-11-22
category: "INFRAESTRUTURA"
readingTime: "5 min"
featured: false
---

Os *Optimistic Rollups* consolidam centenas de operações fora da cadeia primária (*off-chain*) e submetem apenas provas compactadas e dados de chamada (*calldata/blobs*) para validação na Ethereum L1.

## Comparativo de arquitetura

| Rede | Sequenciador | Stack Base | Janela de Fraude |
| :--- | :--- | :--- | :--- |
| **Arbitrum One** | Arbitrum Nitro | AVM / Nitro | 7 dias com multi-round interactive fraud proofs |
| **Optimism Mainnet** | OP Stack | Bedrock | Cannon fault proof system |
| **Base** | OP Stack (Coinbase) | Bedrock / Superchain | Alinhada à infraestrutura da OP Superchain |

## Blobs de Dados (EIP-4844)
Com a implementação da EIP-4844 (*Proto-Danksharding*), as L2s passaram a publicar transações usando *blob-carrying transactions*, reduzindo as taxas de liquidação em mais de 80% sem comprometer a descentralização da camada base.
