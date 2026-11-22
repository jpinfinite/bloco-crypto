---
title: "O cemitério de protocolos: lições de 5 anos auditando pontes entre cadeias heterogêneas"
description: "Principais vetores de invasão em contratos de ponte: replay attacks, chaves de validação comprometidas e falhas de verificação de mensagens."
pubDate: 2026-11-17
category: "SEGURANÇA"
readingTime: "8 min"
featured: false
---

As pontes entre blockchains (*cross-chain bridges*) foram historicamente responsáveis pelas maiores perdas financeiras do ecossistema cripto, ultrapassando US$ 3 bilhões em explorações documentadas.

## Vetores recorrentes de falha
* **Validação por multisig insuficiente:** Protocolos que confiaram em conjuntos pequenos de validadores sofreram ataques de engenharia social e roubo de chaves privadas (ex: Ronin).
* **Falsificação de provas:** Erros na lógica de verificação de árvores de Merkle permitiram que invasores cunhassem tokens sem o correspondente bloqueio na cadeia de origem (ex: Wormhole).
* **Replay de Mensagens:** A falta de identificadores únicos por cadeia de destino possibilitou a repetição de mensagens autorizadas em diferentes forks.
