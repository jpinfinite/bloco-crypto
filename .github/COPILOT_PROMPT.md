# Prompt para GitHub Copilot Agents (Automations)

**Trigger:** `Pull request opened` ou `Schedule (Weekly)`

```text
Audite todos os arquivos Markdown em src/content/noticias/ e src/content/educacao/.
Verifique:
1. Se o frontmatter segue estritamente o schema de src/content.config.ts (title, description, category/trilha, readingTime).
2. Se algum texto contém linguagem de recomendação financeira ou promessa de retorno (ex: "compre agora", "vai valorizar", "melhor investimento") e sugira reescrita neutra e técnica.
3. Se todos os links internos apontam para rotas existentes em src/pages/.
Abra uma Issue ou comente no PR com o relatório objetivo.
```
