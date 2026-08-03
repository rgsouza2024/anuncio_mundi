# Planejamento do Site — Mundi Consciente Square

**Versão:** 1.2  
**Data:** 14/07/2026  
**Status:** implementação local concluída e validada; publicação pendente  
**Destino inicial:** Vercel (`*.vercel.app`)

## 1. Objetivo

Criar uma landing page de imóvel único, com apresentação editorial de alto padrão e foco em conversão direta pelo WhatsApp. O site deve transmitir sofisticação sem sacrificar objetividade, desempenho, acessibilidade ou fidelidade ao imóvel real.

O resultado esperado é uma página:

- bonita e coerente com as artes grafite/dourado já produzidas;
- rápida em celulares e conexões móveis;
- clara para compradores qualificados;
- preparada para compartilhamento por WhatsApp e redes sociais;
- sem formulário, cookies, analytics ou banco de dados;
- publicada inicialmente em uma URL da Vercel.

## 2. Decisões já tomadas

| Tema | Decisão |
|---|---|
| Formato | Landing page de uma única rota |
| Conversão | WhatsApp direto |
| Contato | “Fale com Rodrigo”, sem atribuição de proprietário ou corretor |
| Tráfego inicial | Compartilhamento direto e orgânico |
| Direção visual | Editorial sofisticada |
| Paleta | Grafite, dourado contido e marfim |
| Preço | Visível na primeira tela |
| Fotografias | Somente imagens reais fornecidas |
| Áreas comuns | 17 fotografias no desktop; seleção de 6 e lightbox completo no mobile |
| Localização | Identificar o edifício e abrir mapa externo sob demanda |
| Privacidade | Não divulgar o número da unidade |
| Hospedagem | Vercel |
| Domínio próprio | Fora da primeira versão |
| Analytics/pixels | Fora da primeira versão |

## 3. Estado atual da pasta

A raiz contém as fontes do anúncio já otimizadas:

- 60 arquivos WebP do imóvel e da garagem em `assets-webp/fotos/`;
- 32 fotografias WebP tratadas das áreas comuns em `assets-webp/area-comum/`;
- 21 fotografias WebP tratadas do segundo lote de áreas comuns em `assets-webp/area-comum-lote-2/`;
- 5 artes WebP em `assets-webp/referencias/`;
- 1 mapa WebP em `assets-webp/mapa/`;
- 1 documento Word com textos e pesquisa de mercado.

Os JPG e PNG originais do lote inicial foram copiados para backup externo, convertidos com remoção de metadados e excluídos desta pasta por decisão do responsável. O mesmo fluxo foi aplicado às 32 fotografias do primeiro lote das áreas comuns: tratamento adaptativo, conversão para WebP e exclusão dos originais após confirmação de backup. No segundo lote, as fontes foram preservadas e 21 versões tratadas foram geradas. Uma seleção editorial de 21 fotografias compõe a galeria do apartamento em `site/public/images/`. Uma imagem adicional de garagem e escaninho foi publicada em seção própria, e 17 fotografias selecionadas das áreas comuns foram publicadas na seção do condomínio; o novo arquivo-fonte `garagem_mundi.png` foi preservado.

O diretório `site/` contém a landing page implementada em Next.js 16, React 19 e TypeScript, com dependências travadas em `package-lock.json`. Conteúdo, galeria acessível, SEO, dados estruturados e cabeçalhos de segurança estão implementados. O acervo mestre em `assets-webp/` permanece separado dos 39 arquivos publicados.

Das 39 imagens públicas, 33 receberam tratamento fotográfico adaptativo de exposição, luminosidade, contraste, balanço de branco, saturação e nitidez. As seis imagens mais recentes — hero, vista, sala de estar, garagem e duas fotografias da piscina — foram preservadas sem tratamento adicional. O processo não utiliza IA generativa, mantém dimensões e elementos visuais e preserva as versões anteriores no acervo mestre.

A versão local passou por lint, verificação de tipos, build de produção e testes responsivos em 360, 768 e 1440 px. A publicação na Vercel permanece como etapa separada, pois depende de autorização explícita para criar uma implantação externa.

## 4. Público e proposta de valor

### Público principal

- compradores de imóvel residencial de alto padrão em Goiânia;
- famílias que valorizam localização, andar alto, orientação nascente e planta com três suítes;
- compradores que buscam imóvel mobiliado e pronto para ocupação;
- interessados nos setores Marista, Bueno e Oeste.

### Mensagem central

> Um apartamento de 147 m², na Prumada 1 do Mundi Consciente Square, com orientação nascente, vista livre para a praça, três suítes e negociação porteira fechada.

### Hierarquia comercial

1. Localização e vista livre.
2. Prumada 1, nascente e 20º andar.
3. Planta vazada e área social integrada.
4. Porteira fechada.
5. Projeto de interiores, áudio e acabamento.
6. Garagem, escaninho, condomínio e documentação.
7. Investimento e contato.

## 5. Redação e limites das afirmações

O texto terá apelo comercial, mas evitará promessas absolutas ou conclusões não comprovadas.

### Substituições obrigatórias

| Evitar | Usar |
|---|---|
| “Vista permanente” ou “vista definitiva” | “Vista livre para a praça” |
| “Silencioso” ou “elimina o ruído” | “Menor exposição aos ruídos da rua e das áreas comuns” |
| “Sem taxa extra” | “Rateio referente à reforma informado como quitado pelo proprietário” |
| “Ficam todos os itens” | “Itens apresentados nas fotografias, conforme inventário a ser formalizado na negociação” |
| “Pronto para financiamento imediato” | “Quitado, escriturado e registrado; condições de financiamento sujeitas à análise” |

### Aviso final

O rodapé deverá informar:

> Informações, valores, disponibilidade e itens incluídos na negociação estão sujeitos a confirmação. A modalidade porteira fechada será formalizada por inventário contratual.

## 6. Arquitetura da informação

### 6.1 Cabeçalho

- marca textual “Mundi Consciente Square”;
- links: Visão geral, Imóvel, Galeria, Porteira fechada, Condomínio, Localização e Contato;
- CTA “Falar com Rodrigo”;
- versão móvel com menu acessível e bloqueio de rolagem enquanto aberto.

### 6.2 Hero — visão geral

- fotografia real da área social com a vista;
- selo “Setor Marista · Goiânia”;
- título “Mundi Consciente Square”;
- frase principal “Prumada 1. Nascente. Vista livre para a praça.”;
- investimento “R$ 1.630.000”;
- resumo: 147 m², três suítes, três vagas e 20º andar;
- CTA principal para WhatsApp;
- CTA secundário “Conhecer o imóvel”, apontando para a próxima seção.

### 6.3 Atributos que uma reforma não cria

Quatro destaques em composição editorial:

1. **Prumada 1** — uma das posições mais desejadas do empreendimento.
2. **Nascente** — menor incidência do sol da tarde na varanda.
3. **20º andar** — vista ampla e menor exposição aos ruídos urbanos.
4. **Vista livre** — frente para a praça do Colégio Protágoras.

### 6.4 O imóvel

- texto curto sobre planta vazada, três suítes e integração social;
- números principais em uma ficha técnica;
- fotografia ampla da sala/varanda;
- destaques para cozinha integrada e churrasqueira a carvão.

### 6.5 Galeria

- usar de 18 a 24 fotografias reais;
- organizar por: Área social, Cozinha, Suítes, Banheiros e Vista;
- grade editorial assimétrica no desktop e grade simples no celular;
- botão “Ver todas as fotos”;
- lightbox com legenda, anterior/próxima, contador e fechamento;
- navegação por teclado, toque e Escape;
- foco preso dentro do lightbox enquanto aberto;
- respeitar `prefers-reduced-motion`.

Não usar as artes com textos como fotografias da galeria. Elas servem apenas como referência de identidade.

### 6.6 Projeto de interiores e áudio

- lavabo em ônix translúcido com LED;
- marcenaria sob medida;
- receiver Denon;
- caixas JBL embutidas;
- tratamento acústico na área social;
- climatização Samsung e Carrier;
- fechadura digital e câmeras internas.

Usar fotografias reais do lavabo e da área social, sem alterar materiais, vista ou equipamentos.

### 6.7 Porteira fechada

- explicar que a negociação contempla os itens apresentados nas fotografias;
- listar categorias: mobiliário, marcenaria, camas, sofás, mesas, cadeiras, TVs, eletrodomésticos e climatização;
- destacar que o inventário final será formalizado na negociação;
- não prometer objetos decorativos ou pessoais não documentados.

### 6.8 Garagem e escaninho

- três vagas: uma independente e duas em gaveta;
- proximidade dos elevadores;
- escaninho com prateleiras e suporte de teto para bicicleta;
- não usar imagens genéricas ou de terceiros.

### 6.9 Condomínio

Apresentar em grade de ícones:

- piscina climatizada com borda infinita;
- spa e sauna úmida;
- academia;
- quadra poliesportiva;
- brinquedoteca e playground;
- espaço de beleza;
- três salões de festas;
- quiosque gourmet;
- praça do fogo;
- salão de jogos;
- duas áreas gourmet no rooftop;
- minimercado;
- Espaço Delivery.

Incluir:

- “Área comum recentemente reformada e modernizada”;
- “Rateio referente à reforma informado como quitado pelo proprietário”;
- “Condomínio aproximado: R$ 1.300/mês”.

Não criar espaço vazio ou fotografias simuladas. Quando fotos reais forem fornecidas, adicionar uma galeria própria sem alterar a estrutura restante.

### 6.10 Localização

- Rua 27, Setor Marista, sem número da unidade;
- Complexo Órion e Hospital Albert Einstein;
- Colégio Protágoras e Colégio Imaculada;
- Avenida Portugal;
- encontro dos setores Marista, Bueno e Oeste;
- botão “Abrir localização no Google Maps”.

O mapa não será incorporado. O clique abrirá uma nova aba com busca pelo empreendimento, usando `noopener` e `noreferrer`.

### 6.11 Investimento, documentação e contato

- investimento: R$ 1.630.000,00;
- imóvel quitado, escriturado e registrado;
- condomínio aproximado: R$ 1.300/mês;
- CTA final de WhatsApp;
- contato apresentado como “Fale com Rodrigo”.

### 6.12 Rodapé

- nome do empreendimento e localização;
- telefone de contato;
- aviso de confirmação das informações;
- ausência de CRECI ou atribuição profissional;
- link de retorno ao topo.

## 7. Identidade visual

### Paleta

| Papel | Cor sugerida |
|---|---|
| Fundo principal | `#11100F` |
| Fundo elevado | `#1A1815` |
| Dourado | `#B58B4A` |
| Dourado claro | `#D2B176` |
| Marfim | `#F4EFE7` |
| Texto secundário | `#BEB6AA` |
| Bordas | `rgba(210, 177, 118, 0.24)` |

### Tipografia

- títulos: Cormorant Garamond;
- interface e corpo: Manrope;
- fontes carregadas com `next/font`, hospedadas junto ao build;
- evitar fontes externas carregadas no navegador.

### Composição

- fotografias grandes e respiro generoso;
- linhas finas douradas;
- números e atributos com aparência editorial;
- cantos discretamente arredondados;
- sem excesso de cartões, sombras ou efeitos de vidro;
- animações curtas de entrada e hover, sem parallax pesado;
- nenhuma imagem gerada por IA.

## 8. Organização técnica

### Estrutura prevista

```text
site/
├── public/
│   ├── images/
│   │   ├── social/
│   │   ├── cozinha/
│   │   ├── suites/
│   │   ├── banheiros/
│   │   └── vista/
│   └── og.png
├── src/
│   ├── app/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── robots.ts
│   │   └── sitemap.ts
│   ├── components/
│   │   ├── header.tsx
│   │   ├── gallery.tsx
│   │   ├── lightbox.tsx
│   │   └── whatsapp-link.tsx
│   └── data/
│       └── property.ts
├── next.config.ts
├── package.json
└── README.md
```

### Dados centralizados

`property.ts` será a única fonte para:

- preço;
- condomínio;
- metragem;
- andar;
- quartos/suítes;
- vagas;
- telefone e mensagem do WhatsApp;
- localização;
- diferenciais;
- comodidades;
- inventário resumido;
- galeria e textos alternativos.

Não haverá API pública, rota de servidor, formulário, autenticação, banco de dados ou armazenamento local.

### WhatsApp

Número normalizado: `5562998700055`.

Mensagem:

> Olá, Rodrigo. Vi o site do apartamento no Mundi Consciente Square e gostaria de receber mais informações e agendar uma visita.

Todos os CTAs usarão a mesma função para gerar o link `https://wa.me/` com mensagem codificada.

## 9. Tratamento das imagens

- preservar o backup externo dos arquivos originais;
- manter o acervo mestre otimizado em `assets-webp/` fora da pasta pública;
- publicar somente a curadoria em `site/public/images/`, com nomes por ambiente e sem identificação da unidade;
- manter EXIF e demais metadados ausentes dos arquivos publicados;
- não alterar elementos físicos, vista, mobiliário ou materiais;
- permitir apenas correções técnicas não enganosas, como rotação e compressão;
- usar `next/image` com dimensões explícitas;
- usar os WebP previamente validados e permitir ao `next/image` negociar formatos derivados quando aplicável;
- carregar prioritariamente somente a imagem principal;
- aplicar lazy loading nas demais;
- fornecer texto alternativo descritivo em português;
- não publicar a captura de mapa existente.

O card social será criado em 1200×630 com fotografia real, sobreposição grafite e os textos essenciais. Não será gerada uma versão artificial do imóvel.

## 10. SEO e compartilhamento

- idioma `pt-BR`;
- título: “Apartamento à venda no Mundi Consciente Square | 147 m², nascente e porteira fechada”;
- descrição com localização, três suítes, Prumada 1 e preço;
- Open Graph e metadados para compartilhamento;
- `robots.txt` indexável em produção;
- `sitemap.xml` com a rota principal;
- canonical baseado na URL de produção da Vercel;
- JSON-LD com `Apartment` e `Offer`;
- preço em BRL;
- endereço limitado ao edifício e bairro;
- nenhum número de unidade no HTML, metadados, JSON-LD, nomes de arquivo ou textos alternativos.

## 11. Segurança e privacidade

- não coletar dados pessoais;
- não usar cookies, pixels, analytics ou scripts de marketing;
- não registrar mensagens ou cliques no servidor;
- não expor número da unidade;
- não usar imagens externas em runtime;
- proteger links externos com `noopener noreferrer`;
- configurar `Content-Security-Policy`, `Referrer-Policy`, `X-Content-Type-Options` e `Permissions-Policy`;
- restringir frames com `frame-ancestors 'none'`;
- permitir somente recursos necessários da própria origem;
- não declarar HSTS manualmente no ambiente local; utilizar HTTPS fornecido pela Vercel em produção;
- evitar dados de terceiros presentes na pesquisa do Word.

Como não haverá entrada de usuário nem backend, não serão necessários CSRF, CAPTCHA, rate limiting ou política de retenção de leads.

## 12. Acessibilidade

- contraste mínimo WCAG AA;
- estrutura semântica com um único `h1`;
- navegação utilizável por teclado;
- foco sempre visível;
- `aria-label` nos controles da galeria;
- fechamento do lightbox com Escape;
- foco devolvido ao elemento que abriu o lightbox;
- alvos de toque com pelo menos 44×44 px;
- textos alternativos específicos;
- conteúdo legível sem JavaScript, exceto interações da galeria;
- animações reduzidas quando o sistema solicitar.

## 13. Desempenho

Metas para teste móvel:

- Lighthouse ≥ 90 em desempenho, acessibilidade, boas práticas e SEO;
- LCP < 2,5 s;
- CLS < 0,1;
- INP < 200 ms quando mensurável;
- JavaScript do cliente restrito ao menu e à galeria;
- nenhuma biblioteca visual pesada;
- sem vídeo automático, mapa incorporado ou fonte remota em runtime.

## 14. Validação funcional e visual

### Conteúdo

- confirmar 147 m²;
- confirmar três suítes;
- confirmar três vagas;
- confirmar Prumada 1;
- confirmar 20º andar;
- confirmar R$ 1.630.000,00;
- confirmar condomínio aproximado de R$ 1.300,00;
- confirmar o telefone `+55 62 99870-0055`.

### Responsividade

Testar em:

- 360 px;
- 768 px;
- 1440 px;
- tela ultrawide.

Verificar menu, hero, quebra de títulos, grade, imagens, CTA fixo, rodapé e ausência de rolagem horizontal.

### Interação

- todos os CTAs abrem o WhatsApp correto;
- mensagem aparece completa e corretamente codificada;
- menu móvel abre e fecha;
- links de âncora chegam à seção correta;
- lightbox suporta teclado, toque, Escape e retorno de foco;
- mapa abre em nova aba;
- interface continua compreensível com movimento reduzido.

### Segurança e privacidade

- buscar “2001” em `site/src` e `site/public`;
- buscar formulários, cookies, pixels e scripts externos;
- confirmar ausência dos contatos de terceiros existentes no Word;
- inspecionar cabeçalhos na URL publicada;
- confirmar que os arquivos públicos não possuem EXIF.

### Qualidade técnica

- `npm run lint`;
- verificação de tipos do TypeScript;
- `npm run build`;
- Lighthouse móvel;
- revisão visual da URL publicada.

## 15. Publicação na Vercel

1. Finalizar dependências e gerar `package-lock.json`.
2. Construir e validar localmente.
3. Autenticar a Vercel CLI se necessário.
4. Publicar uma implantação de prévia a partir de `site/`.
5. Revisar a URL de prévia.
6. Corrigir somente problemas reais encontrados.
7. Publicar a mesma versão em produção.
8. Entregar a URL `vercel.app`.

Domínio próprio, Google Analytics, Meta Pixel, campanhas e captação por formulário não fazem parte desta versão.

## 16. Critérios de aceite

O projeto estará concluído quando:

- a landing page estiver publicada na Vercel;
- o site usar apenas fotografias reais e autorizadas;
- preço e atributos estiverem consistentes em todas as seções;
- nenhum número de unidade estiver exposto;
- os CTAs de WhatsApp funcionarem;
- a página estiver acessível e responsiva nos tamanhos definidos;
- o build, lint e tipos passarem;
- não houver formulário, cookie, analytics ou imagem externa não autorizada;
- os cabeçalhos de segurança estiverem ativos;
- a documentação de manutenção estiver no `README.md` do site.

## 17. Ordem de execução

1. Finalizar e validar o scaffold Next.js.
2. Centralizar os dados do imóvel.
3. Selecionar, copiar, renomear e sanitizar as fotografias.
4. Implementar estrutura, conteúdo e identidade visual.
5. Implementar menu, galeria e lightbox.
6. Configurar SEO, card social e dados estruturados.
7. Aplicar segurança e acessibilidade.
8. Executar build, lint, tipos e validação responsiva.
9. Publicar prévia na Vercel.
10. Revisar e promover para produção.
