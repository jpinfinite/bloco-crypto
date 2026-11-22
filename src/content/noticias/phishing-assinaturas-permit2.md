---
title: "Checklist de segurança: o que conferir antes de assinar uma permissão Permit2"
description: "Um roteiro prático para avaliar domínio, token, quantidade, spender, validade e permissões de tokens em carteiras EVM."
pubDate: 2026-11-20
category: "SEGURANÇA"
readingTime: "4 min"
featured: false
---

Uma solicitação de assinatura pode parecer inofensiva porque não exige o pagamento imediato de gás. Ainda assim, assinaturas estruturadas podem autorizar contratos a movimentar tokens. Esse risco aparece em golpes que imitam aplicações DeFi e exploram mecanismos como o **Permit2**.

Este guia é um checklist prático. Para entender a arquitetura e as diferenças entre SignatureTransfer e AllowanceTransfer, consulte também o artigo [Phishing por meio de assinaturas Permit2](./phishing-permit2-evm).

## Antes de conectar a carteira

- Confira o domínio letra por letra e evite links recebidos por mensagens privadas.
- Entre na aplicação por um endereço oficial, salvo previamente.
- Desconfie de páginas que exigem assinatura para apenas conectar a carteira, consultar saldo ou verificar elegibilidade.

## Antes de assinar

Leia os campos exibidos pela carteira e confirme:

1. **Rede:** a assinatura pertence à rede em que você pretende operar?
2. **Token:** qual ativo está sendo autorizado?
3. **Quantidade:** o limite corresponde à operação que você deseja realizar?
4. **Spender ou destinatário:** o endereço é o contrato esperado e foi confirmado em fonte confiável?
5. **Prazo:** a autorização expira quando? Há um prazo compatível com a finalidade?
6. **Nonce:** a autorização é única e não está sendo reutilizada?
7. **Contexto:** a assinatura corresponde a uma ação que você iniciou conscientemente?

Não aprove uma mensagem se os dados forem incompletos, ilegíveis ou incompatíveis com a ação que está sendo apresentada pela interface.

## Depois da operação

- Revise as permissões ERC-20 concedidas ao contrato Permit2 e aos aplicativos utilizados.
- Remova autorizações que não sejam mais necessárias.
- Confirme a rede e o endereço do contrato antes de revogar.
- Lembre-se de que revogar uma aprovação pode exigir uma transação on-chain e o pagamento de taxa de rede.

## O que uma ferramenta de segurança não garante

Simuladores, extensões de carteira e serviços de consulta de permissões ajudam a interpretar operações, mas não substituem a verificação independente do domínio, do contrato e dos parâmetros. Uma interface pode apresentar dados incompletos ou estar comprometida.

## Fontes

- [Uniswap — Permit2 documentation](https://docs.uniswap.org/contracts/permit2/overview)
- [Revoke.cash — Token approvals](https://revoke.cash/learn/approvals)
- [Ethereum.org — Security](https://ethereum.org/en/security/)

*Nunca compartilhe sua frase-semente ou chave privada. Nenhum suporte legítimo precisa desses dados.*
