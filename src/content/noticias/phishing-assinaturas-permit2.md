---
title: "Phishing via assinaturas Permit2: entenda o vetor de ataque em carteiras EVM"
description: "Como mensagens off-chain aparentemente inofensivas podem autorizar a movimentação de tokens sem gerar transação prévia."
pubDate: 2026-11-20
category: "SEGURANÇA"
readingTime: "6 min"
featured: false
---

O padrão **Permit2** foi criado para melhorar a experiência de usuário em aplicações DeFi, permitindo aprovar gastos de tokens por meio de uma assinatura criptográfica gratuita (*off-chain*). Contudo, sites falsos exploram esse mecanismo para enganar usuários desatentos.

## Como identificar e se proteger
1. **Leia o conteúdo da assinatura:** Carteiras modernas exibem os campos estruturados (EIP-712). Desconfie se um site pedir assinatura de `PermitSingle` ou `PermitBatch` apenas para "conectar" ou "verificar elegibilidade".
2. **Use simuladores de transação:** Extensões de segurança mostram exatamente quais tokens sairão da sua carteira antes da confirmação final.
3. **Audite permissões periodicamente:** Utilize ferramentas como Revoke.cash para encerrar autorizações antigas.
