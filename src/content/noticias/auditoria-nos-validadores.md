---
title: "Auditoria técnica de validadores: evidências para medir disponibilidade e concentração"
description: "Como documentar atestações, clientes, provedores de nuvem e ASNs sem confundir indicadores públicos com prova de independência."
pubDate: 2026-11-19
category: "INFRAESTRUTURA"
readingTime: "6 min"
featured: false
---

Uma auditoria técnica de validadores deve produzir evidências reproduzíveis. Um painel de uptime pode indicar que um nó esteve disponível, mas não demonstra sozinho quem o opera, onde está hospedado ou quais dependências compartilha com outros validadores.

Este artigo aprofunda a coleta de evidências. Para uma visão inicial das métricas de desempenho e dos limites dos dados públicos, consulte também [Como avaliar a descentralização e a disponibilidade de validadores Proof-of-Stake](./como-auditar-nos-validadores).

## Evidências de desempenho

Registre o identificador do validador, a rede, o intervalo analisado, a fonte dos dados e a data de coleta. Quando aplicável, compare:

- atestações esperadas e incluídas;
- pontualidade das atestações;
- propostas de bloco atribuídas e realizadas;
- penalidades, eventos de slashing e períodos de inatividade.

Não compare períodos com durações diferentes sem normalizar os indicadores. Uma métrica agregada pode ocultar interrupções curtas ou diferenças de participação na rede.

## Evidências de software

Registre separadamente os clientes de execução e de consenso, suas versões e as datas de atualização. A diversidade de clientes é relevante porque uma falha compartilhada pode afetar muitos nós, mas a simples contagem de nomes de software não mede o risco total: versão, configuração, dependências e participação relativa também importam.

## Evidências de infraestrutura

Quando as informações forem públicas, documente:

1. ASN e provedor associado ao endereço observado.
2. Região ou país inferido a partir da fonte utilizada.
3. Endereços IP observados ao longo do período.
4. Relações conhecidas entre operador, hospedagem e serviço RPC.
5. Limitações e possíveis falsos positivos.

Um ASN identifica uma rede autônoma, não o proprietário do validador. Serviços de hospedagem podem operar vários ASNs, e um operador pode distribuir seus nós por diferentes provedores. Não declare concentração de propriedade apenas com base em endereços IP semelhantes.

## Padrão mínimo de evidência

Para cada conclusão, mantenha uma trilha com fonte, horário, consulta, intervalo, critério e resultado. Classifique os achados como:

- **Observado:** diretamente demonstrado pelos dados.
- **Inferido:** interpretação plausível, mas não comprovada.
- **Não verificável:** informação ausente ou insuficiente.

Essa separação evita transformar estimativas de localização ou correlações de rede em afirmações categóricas sobre controle operacional.

## Fontes técnicas

- [Ethereum.org — Nós e clientes](https://ethereum.org/en/developers/docs/nodes-and-clients/)
- [Ethereum consensus specifications](https://github.com/ethereum/consensus-specs)
- [Ethereum.org — Proof-of-Stake](https://ethereum.org/en/developers/docs/consensus-mechanisms/pos/)

*Este roteiro não certifica a segurança de um validador. Uma auditoria formal exige acesso, escopo e evidências adicionais.*
