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

### Smoke test

O smoke test usa Python 3.12 e Playwright. Instale a dependência e o Chromium:

```bash
python -m pip install -r tests/requirements.txt
python -m playwright install chromium
```

Com o build pronto, inicie o servidor em um terminal:

```bash
npm run build
npm run start
```

Em outro terminal, execute:

```bash
npm run test:smoke
npm run test:lighthouse
```

As capturas do smoke são gravadas em `.test-artifacts/smoke/`. O Lighthouse audita a experiência móvel e exige pontuação mínima de 90 em desempenho, acessibilidade, boas práticas e SEO.

## Conteúdo

Os dados comerciais, a modalidade de negociação (`Porteira fechada`), o valor aproximado do condomínio, o telefone, a mensagem do WhatsApp, as comodidades e as galerias ficam centralizados em `src/data/property.ts`. O site não exibe o valor de venda do imóvel na interface, nos metadados de compartilhamento (Open Graph / Twitter) nem nos dados estruturados (`JSON-LD`).

A galeria principal do apartamento reúne 21 fotografias (exibindo 8 na grade inicial em telas móveis com o botão *"Ver todas as 21 fotos"* para abrir o lightbox completo) e a seção do condomínio reúne 17 fotografias (exibindo 6 na grade inicial em telas móveis com o botão *"Ver todas as 17 fotos"*). As imagens públicas estão organizadas por ambiente em `public/images/`; o acervo mestre permanece fora da pasta pública, em `../assets-webp/`.

Ao atualizar o conteúdo:

1. Confirmar condomínio, modalidade de negociação, disponibilidade e inventário.
2. Não inserir o número da unidade nem o valor de venda do imóvel em textos, metadados, JSON-LD ou nomes de arquivos.
3. Publicar apenas fotografias reais e sem metadados sensíveis (EXIF).
4. Manter a captura de mapa e as artes de referência fora de `public/`.
5. Executar `npm run lint`, `npm run typecheck`, `npm run build` e `npm run test:smoke` antes da publicação.

## Publicação

Configure `NEXT_PUBLIC_SITE_URL` com a URL canônica antes do build de produção. Na Vercel, o projeto também reconhece automaticamente `VERCEL_PROJECT_PRODUCTION_URL` ou `VERCEL_URL`.

### Vercel

O site está publicado em:

- Produção: <https://anuncio-mundi.vercel.app>
- Projeto: `anuncio-mundi`
- Repositório: `rgsouza2024/anuncio_mundi`
- Branch de produção: `main`

Configuração do projeto:

| Opção | Valor |
| --- | --- |
| Framework Preset | `Next.js` |
| Root Directory | `site` |
| Node.js Version | `24.x` |
| Install Command | padrão do Vercel (`npm install`) |
| Build Command | padrão do Next.js (`npm run build`) |
| Output Directory | padrão do Next.js |

O GitHub está conectado ao Vercel. Cada atualização de uma branch ou pull request gera uma implantação de pré-visualização; depois do merge na `main`, uma nova implantação de produção é iniciada automaticamente e o domínio principal passa a apontar para ela.

Não é necessário cadastrar `NEXT_PUBLIC_SITE_URL` na Vercel enquanto as variáveis automáticas `VERCEL_PROJECT_PRODUCTION_URL` ou `VERCEL_URL` estiverem disponíveis. Use `NEXT_PUBLIC_SITE_URL` somente para substituir explicitamente a URL canônica.

Se o domínio retornar `404: NOT_FOUND` apesar de a implantação constar como pronta, confirme se `Root Directory` está definido como `site` e se o preset está definido como `Next.js`. Após alterar essas opções, faça um redeploy usando as configurações mais recentes do projeto.
