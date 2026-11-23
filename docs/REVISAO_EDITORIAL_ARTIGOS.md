# Revisão Editorial — BLOCO CRYPTO

**Data:** 22 de novembro de 2026  
**Branch:** `editorial/revisao-artigos-2026-11`  
**Base:** `8c30d248d3686b2660023a627e3562ae950724ab`  
**Escopo:** 20 arquivos Markdown em `src/content/noticias/` e `src/content/educacao/`.

## Objetivo

Aprimorar precisão factual, clareza, utilidade para o leitor, transparência das fontes e distinção entre notícia, análise e conteúdo educacional. A revisão foi feita sem alterar a arquitetura Astro e sem modificar a branch `main`.

## Resultado editorial por artigo

| Arquivo | Tratamento aplicado |
| --- | --- |
| `noticias/bitcoin-core-vulnerability.md` | Reescrito com foco exclusivo na CVE-2026-117348, versões corrigidas, impacto e comunicado oficial. |
| `noticias/bitcoin-core-mitigacao-dos.md` | Diferenciado para tratar das CVEs-2026-117349 e 2026-117350, sem misturar os vetores. |
| `noticias/receita-federal-declaracao-cripto.md` | Reescrito como guia de reporte DeCripto; separa obrigação informacional de tributação. |
| `noticias/receita-federal-airdrops-staking.md` | Retiradas afirmações genéricas de custo zero e tributação uniforme; reforçada a necessidade de classificar cada recebimento. |
| `noticias/analise-responsabilidade-civil-smart-contracts.md` | Removida atribuição genérica ao STJ; contextualizado o REsp 1.885.201/SP e seus limites. |
| `noticias/phishing-permit2-evm.md` | Explicadas as diferenças entre SignatureTransfer e AllowanceTransfer, aprovação ERC-20 prévia e riscos de assinatura. |
| `noticias/phishing-assinaturas-permit2.md` | Diferenciado como checklist prático para leitura de assinaturas e permissões; link interno corrigido. |
| `noticias/revogar-permissoes.md` | Atualizado com limites das allowances, revogação, custo de transação e relação com Permit2. |
| `noticias/analise-auditoria-pontes-cross-chain.md` | Removida alegação de experiência pessoal não comprovada; exemplos Ronin e Wormhole contextualizados com fontes. |
| `noticias/como-auditar-nos-validadores.md` | Transformado em guia de avaliação de descentralização e disponibilidade; separa clientes de execução e consenso. |
| `noticias/auditoria-nos-validadores.md` | Diferenciado como roteiro de auditoria técnica e documentação de evidências. |
| `noticias/analise-custo-liquidacao-rollups.md` | Removidas afirmações não demonstradas sobre algoritmos e custos; explicados componentes de custo e variáveis. |
| `noticias/comparativo-layer-2.md` | Corrigido o comparativo de Arbitrum, OP Mainnet e Base; evitadas equivalências incorretas e prazos estáticos sem contexto. |
| `noticias/dex-recorde-layer-2.md` | Retirada cifra de volume sem fonte/metodologia; transformado em guia para interpretar recordes. |
| `noticias/volume-dex-layer-2.md` | Diferenciado como análise dos fatores que influenciam custos e atividade de DEXs. |
| `noticias/analise-mev-privado-dexs.md` | Removidas garantias indevidas sobre proteção contra MEV e cashback; incluídos limites de RPCs privados e OFAs. |
| `noticias/segregacao-patrimonial.md` | Corrigida a equivalência entre segregação patrimonial e Proof of Reserves; explicitadas limitações da PoR. |
| `noticias/bancos-centrais-liquidacao-stablecoins.md` | Reescrito como explicação de DvP e projetos de tokenização; distinguido protótipo de produção. |
| `noticias/prompt-injection-agentes-cripto.md` | Corrigida a ideia de que delimitadores XML ou prompts bastam; incluídas defesas determinísticas em camadas. |
| `educacao/o-que-e-impermanent-loss.md` | Corrigida a explicação de perda impermanente, comparação com HODL, fórmula e limitações do modelo. |

## Padrões editoriais aplicados

1. Não publicar números, recordes ou percentuais sem fonte, período e metodologia.
2. Não atribuir declarações a órgãos públicos ou tribunais sem documento identificável.
3. Diferenciar comunicado oficial, interpretação editorial e hipótese técnica.
4. Não tratar correlação como causalidade.
5. Explicar limites de segurança, auditorias, provas criptográficas e ferramentas.
6. Preferir documentação primária, legislação, comunicados oficiais e fontes institucionais.
7. Não inventar autoria, experiência profissional, credenciais ou declarações de especialistas.
8. Evitar promessas de proteção absoluta, retornos ou ausência de risco.
9. Usar linguagem clara em português e explicar termos técnicos na primeira ocorrência.
10. Preservar os campos de frontmatter exigidos por `src/content.config.ts`.

## Fontes primárias consultadas

- Bitcoin Core: [CVE-2026-117348](https://bitcoincore.org/en/2026/11/20/disclose-orphan-inv-stall/), [CVE-2026-117349](https://bitcoincore.org/en/2026/10/28/disclose-fpausesend-oom/), [CVE-2026-117350](https://bitcoincore.org/en/2026/10/28/disclose-tcp-oom/).
- Receita Federal: [atos da DeCripto](https://www.gov.br/receitafederal/pt-br/assuntos/orientacao-tributaria/declaracoes-e-demonstrativos/criptoativos/decripto), [orientação do Ministério da Fazenda](https://www.gov.br/fazenda/pt-br/assuntos/noticias/2025/novembro/receita-federal-atualiza-regulamentacao-de-criptoativos-para-adapta-la-ao-padrao-internacional), [Perguntas e Respostas IRPF 2026](https://www.gov.br/receitafederal/pt-br/centrais-de-conteudo/publicacoes/perguntas-e-respostas/dirpf/p-r-irpf-2026-v1-00-2026-04-23.pdf).
- STJ: [Informativo 719 — REsp 1.885.201/SP](https://scon.stj.jus.br/jurisprudencia/externo/informativo/?acao=pesquisar&aplicacao=informativo&livre=%40CNOT%3D%27018677%27).
- Uniswap: [Permit2 overview](https://developers.uniswap.org/docs/protocols/permit2/overview), [SignatureTransfer](https://developers.uniswap.org/docs/protocols/permit2/concepts/signature-transfer), [AllowanceTransfer](https://developers.uniswap.org/docs/protocols/permit2/concepts/allowance-transfer).
- Ethereum: [Dencun](https://ethereum.org/roadmap/dencun/), [EIP-4844](https://eips.ethereum.org/EIPS/eip-4844), [Optimistic Rollups](https://ethereum.org/developers/docs/scaling/optimistic-rollups/).
- Arbitrum, OP Stack e Base: [Nitro](https://docs.arbitrum.io/how-arbitrum-works/inside-arbitrum-nitro), [Fault Proof Specification](https://specs.optimism.io/fault-proof/index.html), [Base fault proofs](https://blog.base.org/fault-proofs-are-now-live-on-base-mainnet).
- BIS: [Project Agorá](https://www.bis.org/media-releases/20260527-project-agora-shows-how-tokenisation-can-improve-wholesale-cross-border-payments-work-will).
- Segurança: [OWASP Top 10 for LLM Applications](https://genai.owasp.org/llm-top-10/), [Ronin — documento do DOJ](https://www.justice.gov/usao-sdny/file/1311391/dl?inline=), [Wormhole — análise CertiK](https://www.certik.com/blog/wormhole-bridge-exploit-incident-analysis).

## Validação técnica executada

A branch foi clonada em uma pasta isolada, sem alterar a pasta original do projeto:

`D:\\Bloco-cripto\\bloco-crypto-editorial-check`

- Commit de correção editorial validado: `bed7f7c689777f9276d63ecbd8452396b6d64495`.
- `npm ci`: concluído.
- `node --test tests/*.js`: **7 testes aprovados, 0 falhas** (o projeto não define script `npm test`).
- `npm run build`: **concluído com 29 páginas estáticas**.
- Rotas internas dos artigos principais: verificadas e geradas.
- Link interno entre os dois guias Permit2: verificado no HTML gerado.
- Fórmula de perda impermanente: identificado que Astro exibia os delimitadores LaTeX como texto; substituídos por expressão Unicode legível e coberta por teste automatizado.
- Tabela comparativa Layer 2: confirmada no HTML gerado com cabeçalho e três linhas de redes; falta apenas conferência visual de responsividade em telas estreitas.
- 11 URLs externas de fontes primárias testadas: 10 responderam HTTP 200; a página da Receita Federal retornou HTTP 403 ao teste automatizado HEAD, embora tenha sido localizada e consultada pelo mecanismo de pesquisa. Isso parece ser restrição automatizada do portal, não evidência de URL inexistente.

### Aviso de dependências

A instalação reportou **2 vulnerabilidades moderadas** associadas a dependências do projeto, incluindo `postcss-selector-parser`. O comando `npm audit --omit=dev` também as reportou. Não foi aplicado `npm audit fix --force`, pois a sugestão do npm envolve alteração potencialmente incompatível de dependências e está fora do escopo editorial.

## Pendências antes de integrar

- Conferir visualmente a tabela comparativa em telas estreitas e a apresentação final da fórmula Unicode em navegadores móveis e desktop.
- Considerar uma etapa de produto para adicionar `dateModified`, autoria editorial confirmada e política de correções; o schema atual da coleção não possui esses campos.
- Submeter conteúdo tributário e jurídico a revisão profissional antes de tratá-lo como orientação especializada.
- Tratar as duas vulnerabilidades moderadas de dependências em uma tarefa técnica separada.

## Estado

**Revisão textual dos 20 arquivos concluída e validação automatizada aprovada nesta branch.** Nenhuma alteração foi integrada à `main` ou publicada em produção.
