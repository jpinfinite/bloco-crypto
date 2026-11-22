---
title: "Aprovações de tokens: como auditar e revogar permissões ERC-20"
description: "Veja como identificar contratos autorizados a movimentar seus tokens, entender allowances ilimitadas e reduzir permissões desnecessárias."
pubDate: 2026-11-21
category: "SEGURANÇA"
readingTime: "4 min"
featured: true
---

Ao usar uma aplicação descentralizada, uma carteira pode solicitar uma aprovação ERC-20 para que determinado contrato movimente uma quantidade de tokens em nome do usuário. Essa autorização é conhecida como *allowance* e pode continuar ativa depois que a operação original termina.

## O risco das aprovações ilimitadas

Algumas aplicações solicitam uma permissão muito alta — frequentemente o valor máximo permitido pelo padrão do token — para evitar novas aprovações em operações futuras.

Se o contrato autorizado for comprometido, atualizado de forma maliciosa ou deixar de ser confiável, uma permissão ainda válida pode expor os tokens até o limite autorizado. Isso não significa que qualquer invasão de um protocolo permita movimentar automaticamente todos os ativos: o risco depende do token, do contrato autorizado, do valor e das regras da aplicação.

## Como auditar permissões

1. Acesse uma ferramenta de consulta de aprovações ou o explorador oficial da rede.
2. Conecte a carteira somente ao domínio correto e confira a rede selecionada.
3. Revise token, endereço do contrato autorizado e quantidade aprovada.
4. Identifique permissões antigas ou que não correspondam mais a aplicações utilizadas.
5. Consulte a documentação do protocolo antes de revogar uma permissão que ainda seja necessária.

## Como revogar

Em ferramentas compatíveis, escolha a autorização específica e solicite a revogação ou a redução do limite. A alteração normalmente exige uma transação on-chain e o pagamento de taxa de rede.

Revogar uma permissão não desfaz transações anteriores, não recupera tokens já transferidos e não garante que uma carteira esteja livre de outros riscos. Verifique também as autorizações em outras redes.

## Permit2 exige atenção adicional

O Permit2 possui módulos próprios para transferências por assinatura e permissões com prazo e limite. Além de revisar a aprovação ERC-20 concedida ao contrato Permit2, o usuário deve compreender as permissões internas que concedeu a cada spender.

Para entender a diferença entre esses mecanismos, leia também nosso guia sobre [phishing e assinaturas Permit2](./phishing-permit2-evm).

## Fontes

- [Ethereum.org — ERC-20 token standard](https://ethereum.org/en/developers/docs/standards/tokens/erc-20/)
- [Uniswap — Permit2 overview](https://developers.uniswap.org/docs/protocols/permit2/overview)
- [Revoke.cash — Token approvals](https://revoke.cash/learn/approvals)

*Nunca informe sua frase-semente ou chave privada a ferramentas de auditoria de permissões. Confirme sempre a rede e o domínio antes de conectar a carteira.*
