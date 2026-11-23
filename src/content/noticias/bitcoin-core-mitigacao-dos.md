---
title: "Bitcoin Core: duas falhas de consumo de memória afetavam a disponibilidade de nós"
description: "Entenda as CVEs-2026-117349 e 2026-117350, seus cenários de exploração e as versões corrigidas."
pubDate: 2026-11-22
category: "INFRAESTRUTURA"
readingTime: "5 min"
featured: false
---

Além da falha de anúncios duplicados de transações órfãs divulgada em novembro, o Bitcoin Core publicou dois avisos distintos sobre consumo excessivo de memória: **CVE-2026-117349** e **CVE-2026-117350**. Os problemas têm causas diferentes e não devem ser confundidos com a CVE-2026-117348.

## CVE-2026-117349: crescimento de fila em peers antigos

O primeiro problema envolvia peers que não suportavam o mecanismo de *ping* com nonce do BIP31. Em determinadas condições, um peer podia permanecer pausado para envio enquanto o nó continuava acumulando anúncios de transações na fila.

O aviso oficial descreve crescimento de memória que poderia chegar a aproximadamente 2 MB por hora por peer de entrada e 5 MB por hora por peer de saída. O impacto dependia das condições de conexão e configuração.

A correção foi disponibilizada nas versões 29.5, 30.4, 31.2 e 32.1.

## CVE-2026-117350: dados TCP urgentes em sistemas não Linux

A segunda falha estava no caminho de monitoramento de sockets baseado em `select()`, utilizado em plataformas não Linux. Um peer malicioso podia enviar dados TCP urgentes (*out-of-band*) e provocar leituras adicionais mesmo quando o processamento normal estava pausado, levando ao crescimento ilimitado da fila.

De acordo com o comunicado, o problema afetava o caminho utilizado em sistemas não Linux; usuários Linux não eram afetados por esse vetor específico. As versões corrigidas informadas foram 29.5, 30.4, 31.2 e 32.1.

## Recomendações para operadores

1. Identifique o sistema operacional e a versão exata do Bitcoin Core em execução.
2. Consulte os avisos oficiais de cada CVE para confirmar se a versão está afetada.
3. Atualize para uma versão corrigida suportada pela série utilizada.
4. Não trate os três avisos de novembro como uma única vulnerabilidade: cada um tem causa, condições e correção próprias.

A classificação indicada nos avisos é de severidade média. Os impactos descritos são relacionados à disponibilidade do nó e ao consumo de recursos, não a uma quebra das regras de consenso ou ao acesso direto às chaves privadas.

## Fontes oficiais

- [Bitcoin Core — CVE-2026-117349 (28 out. 2026)](https://bitcoincore.org/en/2026/10/28/disclose-fpausesend-oom/)
- [Bitcoin Core — CVE-2026-117350 (28 out. 2026)](https://bitcoincore.org/en/2026/10/28/disclose-tcp-oom/)
- [Bitcoin Core — Security Advisories](https://bitcoincore.org/en/security-advisories/)

*Consulte sempre os avisos oficiais antes de decidir a atualização de um nó de produção.*
