---
title: "Desenvolvedores lançam atualização do Bitcoin Core para mitigar vetor de DoS"
description: "Nova versão corrige falha na camada de comunicação P2P identificada durante auditoria de memória de nós completos."
pubDate: 2026-11-22
category: "INFRAESTRUTURA"
readingTime: "3 min"
featured: false
---

Os mantenedores do **Bitcoin Core** disponibilizaram uma atualização de manutenção focada no fortalecimento da camada de rede ponto a ponto (P2P) dos nós validadores.

## O que foi corrigido
A atualização endereça um vetor de negação de serviço (*Denial of Service - DoS*) em que nós maliciosos poderiam enviar sequências específicas de mensagens de inventário de blocos para elevar o consumo de memória RAM do nó receptor.

* **Impacto nos fundos:** Nenhum. A vulnerabilidade afetava apenas a disponibilidade do nó na rede, sem qualquer risco às chaves privadas ou regras de consenso.
* **Recomendação técnica:** Operadores de *full nodes* e infraestruturas de liquidação devem atualizar seus binários para a versão mais recente verificando as assinaturas PGP oficiais.
