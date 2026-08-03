import Image from "next/image";
import { CommonAreasGallery } from "@/components/common-areas-gallery";
import { Gallery } from "@/components/gallery";
import { Header } from "@/components/header";
import { property, whatsappUrl } from "@/data/property";

const whatsappHref = whatsappUrl();

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Apartment",
    name: property.name,
    description: property.description,
    floorSize: { "@type": "QuantitativeValue", value: property.areaValue, unitCode: "MTK" },
    numberOfBedrooms: property.suiteCount,
    address: {
      "@type": "PostalAddress",
      streetAddress: property.address.street,
      addressLocality: property.address.city,
      addressRegion: property.address.state,
      addressCountry: property.address.country,
    },
    offers: {
      "@type": "Offer",
      price: property.priceValue,
      priceCurrency: "BRL",
      url: property.siteUrl,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }}
      />
      <Header whatsappHref={whatsappHref} />

      <main id="top">
        <section className="hero" id="visao-geral" aria-labelledby="hero-title">
          <Image
            className="hero-image"
            src="/images/social/hero-varanda-vista.webp"
            alt="Varanda gourmet do apartamento com vista para o Setor Marista"
            fill
            preload
            fetchPriority="high"
            sizes="100vw"
          />
          <div className="hero-overlay" />
          <div className="hero-rail" aria-hidden="true">
            <span>{property.address.city}</span>
            <span>16°41′S · 49°15′W</span>
          </div>
          <div className="hero-content shell">
            <p className="eyebrow">{property.location.replace(", ", " · ")}</p>
            <h1 id="hero-title">
              Mundi Consciente
              <span>Square</span>
            </h1>
            <p className="hero-statement">{property.position}. {property.orientation}.<br />Vista livre para a praça.</p>
            <div className="hero-bottom">
              <div className="hero-price">
                <span>Investimento</span>
                <strong>{property.price}</strong>
              </div>
              <div className="hero-actions">
                <a className="button button-gold" href={whatsappHref} target="_blank" rel="noopener noreferrer">
                  Agendar uma visita <span aria-hidden="true">↗</span>
                </a>
                <a className="text-link" href="#imovel">Conhecer o imóvel <span aria-hidden="true">↓</span></a>
              </div>
            </div>
          </div>
          <div className="hero-facts">
            {[property.area, property.suites, property.parking, property.floor].map((fact) => (
              <span key={fact}>{fact}</span>
            ))}
          </div>
        </section>

        <section className="immutable-section section-dark" aria-labelledby="immutable-title">
          <div className="shell">
            <div className="section-heading split-heading">
              <p className="kicker">A essência</p>
              <h2 id="immutable-title">Há atributos que<br />uma reforma não cria.</h2>
              <p>Antes do mobiliário, da marcenaria e dos acabamentos, existem escolhas que definem a experiência de morar.</p>
            </div>
            <div className="highlight-grid">
              {property.highlights.map((highlight) => (
                <article key={highlight.number}>
                  <span>{highlight.number}</span>
                  <h3>{highlight.title}</h3>
                  <p>{highlight.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="property-section section-ivory" id="imovel" aria-labelledby="property-title">
          <div className="shell property-intro">
            <div>
              <p className="kicker">O imóvel</p>
              <h2 id="property-title">Uma planta pensada para a vida acontecer por inteiro.</h2>
            </div>
            <div className="body-copy">
              <p>Os {property.area} privativos organizam {property.suites} plenas e uma área social contínua. A cozinha se conecta à varanda gourmet, enquanto a planta vazada favorece circulação de ar e luz natural.</p>
              <p>A churrasqueira a carvão, a marcenaria sob medida e os ambientes integrados criam uma casa funcional no cotidiano e generosa ao receber.</p>
            </div>
          </div>
          <div className="property-visual shell-wide">
            <div className="property-image-wrap">
              <Image src="/images/social/sala-varanda.webp" alt="Sala integrada à varanda gourmet" fill sizes="(max-width: 900px) 100vw, 70vw" />
              <span className="image-caption">Sala · Varanda gourmet · Vista</span>
            </div>
            <aside className="property-specs" aria-label="Ficha técnica do imóvel">
              <p>Ficha técnica</p>
              <dl>
                <div><dt>Área privativa</dt><dd>{property.area}</dd></div>
                <div><dt>Configuração</dt><dd>{property.suites}</dd></div>
                <div><dt>Posição</dt><dd>{property.position}</dd></div>
                <div><dt>Orientação</dt><dd>{property.orientation}</dd></div>
                <div><dt>Garagem</dt><dd>{property.parking}</dd></div>
                <div><dt>Andar</dt><dd>{property.floor}</dd></div>
              </dl>
            </aside>
          </div>
        </section>

        <section className="gallery-section section-dark" id="galeria" aria-labelledby="gallery-title">
          <div className="shell section-heading gallery-heading">
            <div>
              <p className="kicker">Galeria</p>
              <h2 id="gallery-title">Um percurso pelos ambientes.</h2>
            </div>
            <p>Fotografias reais do apartamento. Selecione uma imagem para navegar pela galeria completa.</p>
          </div>
          <div className="shell-wide">
            <Gallery images={property.gallery} />
          </div>
        </section>

        <section className="craft-section section-ivory" aria-labelledby="craft-title">
          <div className="shell craft-grid">
            <div className="craft-copy">
              <p className="kicker">Interiores & áudio</p>
              <h2 id="craft-title">Detalhes que revelam cuidado.</h2>
              <p>A área social recebeu marcenaria planejada, sistema de áudio integrado com receiver Denon e caixas JBL embutidas, além de tratamento acústico no forro.</p>
              <ul className="detail-list">
                <li>Lavabo em ônix translúcido com LED</li>
                <li>Climatização Samsung e Carrier</li>
                <li>Fechadura digital e câmeras internas</li>
                <li>Soluções de armazenamento sob medida</li>
              </ul>
            </div>
            <div className="craft-images">
              <div className="craft-image-main">
                <Image src="/images/banheiros/lavabo-onix.webp" alt="Lavabo com cuba iluminada em ônix" fill sizes="(max-width: 800px) 75vw, 35vw" />
              </div>
              <div className="craft-image-secondary">
                <Image src="/images/social/sala-estar.webp" alt="Sala com marcenaria e espaço para sistema de áudio" fill sizes="(max-width: 800px) 60vw, 28vw" />
              </div>
            </div>
          </div>
        </section>

        <section className="turnkey-section" aria-labelledby="turnkey-title">
          <Image src="/images/cozinha/varanda-gourmet-integrada.webp" alt="Varanda gourmet mobiliada e integrada" fill sizes="100vw" />
          <div className="turnkey-overlay" />
          <div className="shell turnkey-content">
            <p className="kicker">Porteira fechada</p>
            <h2 id="turnkey-title">Chegar.<br />Abrir a porta.<br />Morar.</h2>
            <div className="turnkey-panel">
              <p>A negociação contempla os itens apresentados nas fotografias, conforme inventário a ser formalizado entre as partes.</p>
              <ul>
                {property.inventory.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </div>
          </div>
        </section>

        <section className="parking-section section-dark" aria-labelledby="parking-title">
          <div className="shell parking-grid">
            <div>
              <p className="kicker">Garagem & escaninho</p>
              <h2 id="parking-title">A praticidade também mora nos detalhes.</h2>
            </div>
            <div className="parking-facts">
              <article><strong>01 + 02</strong><span>Uma vaga independente e duas em gaveta</span></article>
              <article><strong>Próximo</strong><span>Vagas localizadas nas proximidades dos elevadores</span></article>
              <article><strong>Privativo</strong><span>Escaninho com prateleiras e suporte de teto para bicicleta</span></article>
            </div>
          </div>
          <figure className="shell parking-visual">
            <Image
              src="/images/apoio/garagem-tres-vagas-escaninho.webp"
              alt="Conjunto das três vagas de garagem com o escaninho privativo ao fundo"
              width={1294}
              height={1216}
              sizes="(max-width: 800px) calc(100vw - 32px), 980px"
            />
            <figcaption>
              <span>Registro real</span>
              <p>As {property.parking} e o escaninho privativo, localizados próximos aos elevadores.</p>
            </figcaption>
          </figure>
        </section>

        <section className="amenities-section section-ivory" id="condominio" aria-labelledby="amenities-title">
          <div className="shell section-heading split-heading">
            <p className="kicker">Condomínio</p>
            <h2 id="amenities-title">Lazer completo,<br />recentemente renovado.</h2>
            <p>Estrutura ampla para bem-estar, convivência e serviços cotidianos, distribuída entre o térreo, mezanino e rooftop.</p>
          </div>
          <CommonAreasGallery images={property.commonAreas} />
          <div className="shell amenity-grid">
            {property.amenities.map((amenity, index) => (
              <div key={amenity}><span>{String(index + 1).padStart(2, "0")}</span><p>{amenity}</p></div>
            ))}
          </div>
          <div className="shell condominium-note">
            <p>Rateio referente à reforma informado como quitado pelo proprietário.</p>
            <strong>{property.condominium}</strong>
          </div>
        </section>

        <section className="location-section section-dark" id="localizacao" aria-labelledby="location-title">
          <div className="location-image">
            <Image src="/images/vista/vista-praca.webp" alt="Vista do apartamento para a praça e o entorno do Setor Marista" fill sizes="(max-width: 900px) 100vw, 50vw" />
          </div>
          <div className="location-copy">
            <p className="kicker">Localização</p>
            <h2 id="location-title">No encontro entre Marista, Bueno e Oeste.</h2>
            <p>Na {property.address.street}, ao lado do Complexo Órion e do Hospital Israelita Albert Einstein, em frente ao Colégio Protágoras e próximo ao Colégio Imaculada.</p>
            <ul>
              <li>Complexo Órion e serviços de saúde</li>
              <li>Escolas e conveniências a poucos minutos</li>
              <li>Acesso rápido à Av. Portugal, Av. Mutirão e Av. D</li>
            </ul>
            <a className="button button-outline" href={property.mapUrl} target="_blank" rel="noopener noreferrer">
              Abrir no Google Maps <span aria-hidden="true">↗</span>
            </a>
          </div>
        </section>

        <section className="contact-section section-gold" id="contato" aria-labelledby="contact-title">
          <div className="shell contact-grid">
            <div>
              <p className="kicker">Uma visita muda a perspectiva</p>
              <h2 id="contact-title">Conheça pessoalmente.</h2>
            </div>
            <div className="contact-price">
              <span>Investimento</span>
              <strong>{property.price}</strong>
              <p>Imóvel informado como quitado, escriturado e registrado.</p>
            </div>
            <a className="contact-action" href={whatsappHref} target="_blank" rel="noopener noreferrer">
              <span>Fale com {property.contactName}</span>
              <strong>{property.phone}</strong>
              <i aria-hidden="true">↗</i>
            </a>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="shell footer-top">
          <div className="brand footer-brand"><span>Mundi Consciente</span><strong>Square</strong></div>
          <p>{property.address.district}<br />{property.address.city} · {property.address.stateName}</p>
          <a href="#top">Voltar ao topo ↑</a>
        </div>
        <div className="shell footer-bottom">
          <p>Informações, valores, disponibilidade e itens incluídos na negociação estão sujeitos a confirmação. A modalidade porteira fechada será formalizada por inventário contratual.</p>
          <span>© {new Date().getFullYear()} {property.name}</span>
        </div>
      </footer>

      <a
        className="whatsapp-float"
        href={whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar com Rodrigo pelo WhatsApp"
      >
        <span className="whatsapp-label" aria-hidden="true">Falar pelo WhatsApp</span>
        <svg aria-hidden="true" viewBox="0 0 32 32" focusable="false">
          <path d="M16.04 3A12.92 12.92 0 0 0 5.05 22.72L3.2 29l6.45-1.8A12.96 12.96 0 1 0 16.04 3Zm0 23.58c-2.17 0-4.3-.59-6.14-1.7l-.44-.26-3.82 1.06 1.02-3.73-.29-.46A10.53 10.53 0 1 1 16.04 26.58Zm5.78-7.9c-.31-.16-1.87-.92-2.16-1.03-.29-.1-.5-.16-.71.16-.21.31-.81 1.03-1 1.24-.18.21-.36.24-.68.08-.31-.16-1.33-.49-2.53-1.56a9.48 9.48 0 0 1-1.75-2.17c-.18-.31-.02-.48.14-.64.14-.14.31-.37.47-.55.16-.18.21-.31.31-.52.11-.21.06-.4-.02-.55-.08-.16-.71-1.72-.98-2.35-.26-.62-.52-.54-.71-.55h-.61c-.21 0-.55.08-.84.39-.29.32-1.11 1.09-1.11 2.65 0 1.56 1.14 3.07 1.3 3.28.16.21 2.24 3.42 5.42 4.8.76.32 1.35.52 1.81.67.76.24 1.45.21 2 .13.61-.09 1.87-.77 2.14-1.51.26-.74.26-1.38.18-1.51-.08-.13-.29-.21-.61-.37Z" />
        </svg>
      </a>
    </>
  );
}
