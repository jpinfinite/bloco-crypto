---
title: "O que é Impermanent Loss (Perda Impermanente) em Pools de Liquidez"
description: "Entenda a matemática por trás do rebalanceamento automático em formadores de mercado automatizados (AMMs)."
trilha: "03. DeFi"
nivel: "Intermediário"
readingTime: "6 min"
order: 1
---

Ao fornecer liquidez em uma corretora descentralizada (DEX) como Uniswap ou Raydium, você deposita dois ativos em proporção definida (geralmente 50% / 50% em valor).

## Por que a perda acontece?
O algoritmo **AMM** (*Automated Market Maker*) mantém a proporção do pool equilibrada. Se o preço de um dos ativos sobe ou cai fortemente em relação ao outro, arbitradores negociam com o pool até igualar o preço externo — deixando você com **mais do ativo que desvalorizou** e **menos do ativo que valorizou**.

> A perda é chamada de "impermanente" porque só se concretiza no momento em que você saca os tokens da pool. Se os preços voltarem à proporção inicial, a perda desaparece.

## A fórmula matemática
Em uma pool clássica de produto constante ($x \cdot y = k$), a perda impermanente em função da razão de preço $r = P_1 / P_0$ é calculada por:

$$\text{IL} = \frac{2\sqrt{r}}{1 + r} - 1$$

Se o preço do ativo dobra ($r = 2$), a perda impermanente pura em relação ao HODL é de aproximadamente $-5,72\%$.
