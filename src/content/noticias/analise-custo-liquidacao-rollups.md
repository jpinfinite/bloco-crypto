---
title: "Por que o custo de liquidação de rollups ainda não atingiu seu piso teórico pós-blobs"
description: "Gargalos de compressão de calldata e dinâmica de mercado dos sequenciadores centralizados."
pubDate: 2026-11-18
category: "INFRAESTRUTURA"
readingTime: "6 min"
featured: false
---

Embora a introdução de blobs de dados transitórios tenha reduzido drasticamente as taxas na L1, a arquitetura interna dos sequenciadores ainda impõe custos operacionais que podem ser otimizados.

## Limitações atuais da compressão
1. **Algoritmos de Compressão de Estado:** A maioria dos sequenciadores utiliza Brotli ou Zstandard sem particionamento por frequência de chamadas, gerando redundância em lotes pequenos.
2. **Sequenciamento Centralizado:** O custo de infraestrutura dos nós sequenciadores proprietários é repassado nas taxas base da L2, mantendo uma margem de segurança contra volatilidade da L1.
3. **Perspectivas:** A introdução de sequenciamento compartilhado e nós provadores baseados em ZK promete comprimir a liquidação a frações de centavo por transferência.
