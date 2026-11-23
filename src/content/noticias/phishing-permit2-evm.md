---
title: "Permit2 e phishing: como funcionam as assinaturas de permissões em carteiras EVM"
description: "Entenda a diferença entre SignatureTransfer e AllowanceTransfer e confira o que validar antes de assinar uma mensagem."
pubDate: 2026-11-20
category: "SEGURANÇA"
readingTime: "6 min"
featured: false
---

O **Permit2**, da Uniswap, é um conjunto de contratos que padroniza autorizações de transferência de tokens em redes compatíveis com a Ethereum Virtual Machine (EVM). Ele pode reduzir a necessidade de aprovações repetidas na blockchain, mas também exige atenção: uma assinatura é uma autorização criptográfica e não deve ser tratada como um simples clique para conectar uma carteira.

## Primeiro passo: entenda as duas modalidades

O Permit2 reúne dois mecanismos com comportamentos diferentes:

- **SignatureTransfer:** permite autorizar uma transferência específica por assinatura, com parâmetros como token, quantidade, destinatário e nonce. A assinatura é apresentada em uma transação on-chain para executar a transferência.
- **AllowanceTransfer:** permite estabelecer uma autorização com quantidade e prazo de validade para um *spender*. O mecanismo usa assinaturas e controles de nonce e expiração para administrar essas permissões.

Em geral, o usuário também precisa ter aprovado previamente o contrato Permit2 no contrato ERC-20 do token. Portanto, a segurança depende tanto da aprovação on-chain quanto do conteúdo e do contexto da assinatura solicitada.

## Como um golpe pode explorar o mecanismo

Uma página falsa pode imitar uma aplicação conhecida e induzir a vítima a assinar uma mensagem que concede uma autorização real. O risco não está no simples ato de conectar a carteira, mas em autorizar uma operação cujos parâmetros não foram compreendidos.

Antes de assinar, confira:

1. **Domínio e origem:** acesse a aplicação por um endereço oficial salvo ou confirmado por canais confiáveis.
2. **Token e quantidade:** verifique qual ativo pode ser movimentado e qual limite está sendo autorizado.
3. **Destinatário ou spender:** confira o endereço do contrato que receberá a autorização.
4. **Prazo e nonce:** observe a validade e os dados de unicidade da autorização.
5. **Tipo de mensagem:** identifique se a carteira está pedindo uma assinatura de transferência ou uma autorização persistente.

Desconfie de páginas que solicitem uma assinatura de permissão sob o pretexto de apenas conectar a carteira, verificar identidade ou liberar uma recompensa.

## Como reduzir o risco

- Não assine mensagens cujo conteúdo a carteira não consiga apresentar de forma compreensível.
- Use ferramentas de simulação e análise de assinatura, mas não as trate como garantia absoluta.
- Revise periodicamente as aprovações ERC-20 e as permissões associadas ao Permit2.
- Revogue permissões que não sejam mais necessárias, conferindo a rede e o contrato corretos.
- Nunca compartilhe sua frase-semente ou chave privada.

## Fontes técnicas

- [Uniswap — Permit2 documentation](https://docs.uniswap.org/contracts/permit2/overview)
- [Uniswap — Permit2 no GitHub](https://github.com/Uniswap/permit2)
- [Revoke.cash — Token approvals](https://revoke.cash/learn/approvals)

*Uma assinatura pode autorizar movimentação de ativos. Leia os parâmetros e confirme a origem antes de aprovar qualquer mensagem.*
