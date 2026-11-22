---
title: "Aprovações ilimitadas em contratos inteligentes: como auditar e revogar permissões"
description: "Passo a passo para verificar quais protocolos DeFi ainda têm acesso aos seus tokens ERC-20."
pubDate: 2026-11-21
category: "SEGURANÇA"
readingTime: "3 min"
featured: true
---

Ao interagir com aplicações descentralizadas (DApps), a assinatura de `approve(address spender, uint256 amount)` muitas vezes concede permissão irrestrita (`type(uint256).max`) para o contrato movimentar seus fundos.

## O risco da aprovação infinita
Mesmo após concluir um swap ou depósito, a permissão permanece gravada no estado do contrato daquele token ERC-20. Caso o protocolo explorado sofra uma vulnerabilidade no futuro, invasores podem drenar os ativos da sua carteira sem exigir novas confirmações.

## Como auditar e revogar
1. Conecte sua carteira em serviços de auditoria on-chain reconhecidos (ex: Revoke.cash ou os scanners nativos de cada rede).
2. Verifique os contratos aprovados e reduza o limite para zero (`revoke`).
3. Adote o hábito de aprovar apenas o montante exato necessário para cada transação individual.
