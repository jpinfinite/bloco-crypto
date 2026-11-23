---
title: "O que é Impermanent Loss (perda impermanente) em pools de liquidez"
description: "Entenda por que o rebalanceamento de um AMM pode deixar o provedor de liquidez com menos valor que uma simples posição em carteira."
trilha: "03. DeFi"
nivel: "Intermediário"
readingTime: "7 min"
order: 1
---

Ao fornecer liquidez a uma corretora descentralizada (DEX), o usuário deposita ativos em um pool para permitir que outras pessoas negociem. Em um AMM de produto constante, como o modelo clássico x vezes y igual a k, a quantidade relativa dos ativos muda conforme as negociações e a arbitragem ajustam o pool aos preços praticados no mercado.

Essa mudança pode fazer com que o valor da posição do provedor de liquidez fique abaixo do valor que ele teria se simplesmente mantivesse os mesmos ativos na carteira. Essa diferença é chamada de **perda impermanente** (*impermanent loss*).

## Por que a perda acontece?

Imagine um pool com dois ativos. Se o preço de um deles sobe em relação ao outro, arbitradores compram do pool o ativo que ficou relativamente barato e depositam o ativo que ficou relativamente caro. Como consequência, o provedor termina com uma quantidade maior do ativo que teve desempenho inferior e uma quantidade menor do ativo que valorizou.

A perda impermanente mede a diferença entre o valor da posição mantida no pool e o valor hipotético dos mesmos ativos se tivessem permanecido na carteira, sem fornecer liquidez.

## Fórmula no modelo de produto constante

Para uma pool sem taxas, com liquidez distribuída por toda a faixa de preços e sem outras alterações, a perda relativa em função da razão entre o preço final e o inicial do ativo é:

**IL = (2 × √r) / (1 + r) − 1**

Em que r = P1/P0, com P0 como o preço relativo inicial do ativo e P1 como o preço relativo final, medidos em relação ao outro ativo.

Se o preço relativo dobra (r = 2), a posição no pool fica aproximadamente **5,72% abaixo** da estratégia de apenas manter os ativos. Isso não significa necessariamente que o provedor perdeu 5,72% do capital inicial: significa que seu resultado ficou 5,72% abaixo do cenário de referência HODL, antes de considerar taxas e outros custos.

## Por que o nome "impermanente" pode confundir?

A diferença é calculada em relação ao preço de referência e pode diminuir se a razão entre os preços retornar ao nível inicial. Porém, ela não desaparece automaticamente quando o usuário saca os tokens, nem existe garantia de que os preços voltarão.

A perda pode ser realizada ao retirar a liquidez, mas a comparação econômica existe enquanto a posição está aberta. Por isso, muitos materiais também usam o termo *divergence loss*.

## Taxas, riscos e limitações

As taxas de negociação recebidas pelo provedor podem compensar parte ou toda a perda impermanente, mas isso depende do volume, da taxa cobrada, da participação do provedor no pool e da evolução dos preços.

A fórmula apresentada não inclui taxas recebidas, custos de gás e rebalanceamento, mudanças nas regras do pool, liquidez concentrada, riscos de contratos inteligentes, oráculos ou desvalorização de um dos ativos.

## Antes de fornecer liquidez

Compare o retorno esperado das taxas com a volatilidade dos ativos, entenda o desenho do AMM e simule cenários de preço. Uma pool com dois ativos voláteis pode ter um perfil de risco muito diferente de uma pool de stablecoins.

## Fontes para aprofundamento

- [Uniswap — Understanding impermanent loss](https://support.uniswap.org/hc/en-us/articles/20904453704589-What-is-Impermanent-Loss)
- [Uniswap — Concentrated liquidity](https://docs.uniswap.org/concepts/protocol/concentrated-liquidity)

*Conteúdo educacional. A fórmula é um modelo simplificado e não representa previsão de retorno.*
