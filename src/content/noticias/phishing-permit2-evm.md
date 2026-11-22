---
title: "Phishing por meio de assinaturas Permit2: entenda o novo vetor de ataque em carteiras EVM"
description: "Como a assinatura off-chain de permissões de transferência pode ser manipulada por interfaces fraudulentas."
pubDate: 2026-11-20
category: "SEGURANÇA"
readingTime: "6 min"
featured: false
---

Pesquisadores de segurança on-chain identificaram um aumento expressivo em incidentes de drenagem de fundos viabilizados por meio da assinatura cega de mensagens `EIP-712` atreladas ao padrão **Permit2**.

## Como opera o Permit2
Criado originalmente para melhorar a experiência do usuário permitindo aprovações sem custo de transação direta via gás, o Permit2 transfere a autorização para uma assinatura criptográfica legível pelo contrato.

## A vulnerabilidade de contexto
Sites maliciosos clonam a identidade visual de protocolos conhecidos e solicitam a assinatura de um objeto tipado contendo:
* **Spender:** Endereço do contrato de drenagem controlado pelo invasor.
* **Nonce e Prazo de Validade:** Configurados para validade indeterminada.
* **Token e Quantia:** Máximo do saldo disponível (`2^256 - 1`).

Uma vez assinada a mensagem na carteira, o invasor submete a transação à rede, transferindo instantaneamente os ativos sem exigir nova confirmação na carteira da vítima.
