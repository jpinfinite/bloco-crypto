---
title: "O que compõe o custo de liquidação de um rollup depois dos blobs"
description: "Dados, execução, sequenciamento e disponibilidade ajudam a explicar por que as taxas de Layer 2 não caem a um piso único."
pubDate: 2026-11-18
category: "INFRAESTRUTURA"
readingTime: "6 min"
featured: false
---

A introdução dos *blobs* pela EIP-4844 criou um mercado de taxas separado para dados publicados por rollups na Ethereum. A mudança reduziu o custo de disponibilidade de dados em muitas condições, mas não eliminou os demais componentes do custo de uma Layer 2.

Por isso, não existe um único “piso teórico” aplicável a todas as redes. O custo final depende da arquitetura, do volume de transações, da compressão, da demanda por espaço em blobs e das políticas de cobrança de cada operador.

## Os componentes de custo

### 1. Publicação de dados

Rollups precisam disponibilizar dados suficientes para que terceiros possam reconstruir ou verificar o estado da rede. Eles podem publicar dados em blobs ou calldata, de acordo com o projeto e as condições do mercado. Blobs têm um mercado de taxas próprio e disponibilidade temporária; não são armazenamento permanente.

### 2. Execução na Layer 2

A rede precisa executar transações, atualizar estado e manter infraestrutura de nós. O custo operacional pode incluir hardware, armazenamento, monitoramento e serviços auxiliares. A forma como esses custos entram na taxa do usuário varia entre redes.

### 3. Sequenciamento e inclusão

Muitas redes utilizam um sequenciador que recebe e ordena transações. A centralização ou descentralização desse componente afeta o modelo de confiança, a resistência à censura e a disponibilidade. Não é correto afirmar que todos os custos do sequenciador são automaticamente repassados de uma mesma maneira ao usuário.

### 4. Provas e mecanismos de segurança

Rollups otimistas e de conhecimento zero usam mecanismos diferentes para validar transições de estado. Provas, contestação, operadores e contratos de liquidação têm custos e requisitos próprios. Não se deve tratar todos os rollups como se utilizassem a mesma arquitetura.

## Por que as taxas variam

A taxa efetiva pode mudar com a demanda por blobs, a quantidade de dados por transação, a compressão, a congestão, a complexidade da execução e as regras do protocolo. Quando a demanda por blobs aumenta, o preço desse recurso também pode subir.

Além disso, a taxa exibida ao usuário pode incluir margem ou componentes definidos pela própria rede. Comparar apenas a taxa de publicação na Ethereum não revela o custo completo de uma operação.

## Como comparar redes

Use transações equivalentes e registre o horário da consulta, o tipo de operação, o custo de execução na L2, o custo de dados e eventuais componentes adicionais. Diferencie custo de liquidação do custo total cobrado do usuário.

## Fontes técnicas

- [EIP-4844 — Blob-carrying transactions](https://eips.ethereum.org/EIPS/eip-4844)
- [Ethereum.org — Dencun](https://ethereum.org/roadmap/dencun/)
- [Ethereum.org — Optimistic Rollups](https://ethereum.org/developers/docs/scaling/optimistic-rollups/)

*Os custos variam conforme a rede e as condições de mercado. Não use estimativas antigas como cotação atual.*
