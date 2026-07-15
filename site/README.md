# Mundi Consciente Square

Landing page de imóvel único, desenvolvida em Next.js, com apresentação editorial, galeria acessível e conversão direta pelo WhatsApp.

## Desenvolvimento

```bash
npm install
npm run dev
```

Acesse `http://localhost:3000`.

## Verificação

```bash
npm run lint
npm run typecheck
npm run build
```

## Conteúdo

Os dados comerciais, o telefone, a mensagem do WhatsApp, as comodidades e a galeria ficam centralizados em `src/data/property.ts`.

As 21 fotografias publicadas estão organizadas por ambiente em `public/images/`. O acervo mestre permanece fora da pasta pública, em `../assets-webp/`.

Ao atualizar o conteúdo:

1. Confirmar preço, condomínio, disponibilidade e inventário.
2. Não inserir o número da unidade em textos, metadados ou arquivos.
3. Publicar apenas fotografias reais e sem metadados sensíveis.
4. Manter a captura de mapa e as artes de referência fora de `public/`.
5. Executar lint, tipos e build antes da publicação.

## Publicação

Configure `NEXT_PUBLIC_SITE_URL` com a URL canônica antes do build de produção. Na Vercel, o projeto também reconhece automaticamente `VERCEL_PROJECT_PRODUCTION_URL` ou `VERCEL_URL`.

O diretório raiz do projeto na Vercel deve ser `site/`.
