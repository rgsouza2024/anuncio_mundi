# Anúncio — Mundi Consciente Square

Repositório da landing page editorial do apartamento no **Mundi Consciente Square** (Setor Marista, Goiânia/GO), com foco em apresentação arquitetônica, negociação na modalidade **porteira fechada** (sem exposição de preço de venda na página) e conversão direta via WhatsApp.

## Estrutura do Repositório

- [`site/`](./site/README.md) — Aplicação web em Next.js 16, React 19 e TypeScript, com testes automatizados em Playwright e auditoria mobile via Lighthouse.
- [`PLANEJAMENTO_SITE.md`](./PLANEJAMENTO_SITE.md) — Documento de arquitetura da informação, diretrizes visuais, SEO, privacidade e critérios de aceite.
- [`assets-webp/`](./assets-webp/) — Acervo mestre de fotografias tratadas em formato WebP (fora do diretório público da aplicação).
- [`.github/workflows/ci.yml`](./.github/workflows/ci.yml) — Pipeline de integração contínua (auditoria de segurança, lint, verificação de tipos, build, smoke tests em 360/768/1440 px e Lighthouse mobile).

## Comandos Rápidos

A aplicação fica no diretório `site/`:

```bash
cd site
npm install
npm run dev
```

Consulte [`site/README.md`](./site/README.md) para instruções detalhadas de build, testes e publicação na Vercel.
