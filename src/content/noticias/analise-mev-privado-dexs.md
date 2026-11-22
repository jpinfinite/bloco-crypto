---
title: "A anatomia do MEV privado e seu impacto invisível na execução de swaps em DEXs"
description: "Como leilões de fluxo de ordens (OFA) e pools privadas de construtores de blocos redistribuem valor sem passar pela mempool pública."
pubDate: 2026-11-16
category: "MERCADO"
readingTime: "6 min"
featured: false
---

O valor máximo extraível (*MEV*) evoluiu dos ataques front-running em mempools públicas para acordos privados entre interfaces de carteiras e construtores de blocos especializados.

## O papel dos Order Flow Auctions (OFA)
Em vez de propagar transações abertamente para a rede pública:
* **Proteção contra Sandwiches:** Os nós RPC privados encaminham as ordens diretamente a construtores que garantem execução sem reordenação maliciosa.
* **Rebate de MEV:** Parte do excedente gerado pelo rebalanceamento de arbitragem é devolvida diretamente ao usuário na forma de descontos ou cashback em tokens nativos.
