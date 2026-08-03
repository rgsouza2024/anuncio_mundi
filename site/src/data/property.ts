export type GalleryImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
  category: "Social" | "Cozinha" | "Vista" | "Suítes" | "Banheiros" | "Apoio";
};

export type CommonAreaImage = {
  src: string;
  alt: string;
  label: string;
  width: number;
  height: number;
};

function resolveSiteUrl() {
  const explicitUrl = process.env.NEXT_PUBLIC_SITE_URL;
  const vercelUrl =
    process.env.VERCEL_PROJECT_PRODUCTION_URL ?? process.env.VERCEL_URL;

  if (explicitUrl) return explicitUrl;
  if (vercelUrl) return `https://${vercelUrl}`;
  return "http://localhost:3000";
}

function formatBrl(value: number) {
  return `R$ ${value.toLocaleString("pt-BR", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })}`;
}

const name = "Mundi Consciente Square";
const address = {
  street: "Rua 27",
  district: "Setor Marista",
  city: "Goiânia",
  state: "GO",
  stateName: "Goiás",
  country: "BR",
} as const;
const priceValue = 1650000;
const areaValue = 147;
const floorValue = 20;
const suiteCount = 3;
const parkingCount = 3;
const position = "Prumada 1";
const orientation = "Nascente";
const contactName = "Rodrigo";
const area = `${areaValue} m²`;
const floor = `${floorValue}º andar`;
const suites = `${suiteCount} suítes`;
const parking = `${parkingCount} vagas`;
const price = formatBrl(priceValue);
const description = `Apartamento de ${area}, ${orientation.toLowerCase()}, com ${suites} e negociação porteira fechada no ${address.district}.`;
const seo = {
  title: `${name} à venda | ${area} no ${address.district}`,
  description: `Apartamento de ${area} à venda no ${address.district}, ${address.city}: ${suites}, ${position}, ${orientation.toLowerCase()}, ${floor} e porteira fechada por ${price}.`,
  socialTitle: `${name} | ${area} · ${orientation} · Porteira fechada`,
  keywords: [
    name,
    `apartamento à venda no ${address.district}`,
    `apartamento ${area} em ${address.city}`,
    `${suiteCount} suítes`,
    "porteira fechada",
  ],
  image: {
    url: "/images/social/hero-varanda-vista.webp",
    width: 1448,
    height: 1086,
    alt: `Varanda gourmet com vista no ${name}`,
  },
} as const;

export const property = {
  name,
  location: `${address.district}, ${address.city}`,
  address,
  description,
  seo,
  price,
  priceValue,
  condominium: "Aproximadamente R$ 1.300/mês",
  area,
  areaValue,
  floor,
  suites,
  suiteCount,
  parking,
  position,
  orientation,
  contactName,
  phone: "+55 61 98147-4572",
  phoneNormalized: "5561981474572",
  whatsappMessage:
    `Olá, ${contactName}. Vi o site do apartamento no ${name} e gostaria de receber mais informações e agendar uma visita.`,
  siteUrl: resolveSiteUrl(),
  mapUrl: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${name} ${address.city}`)}`,
  highlights: [
    {
      number: "01",
      title: position,
      text: "Uma posição privilegiada dentro do empreendimento.",
    },
    {
      number: "02",
      title: orientation,
      text: "Luz da manhã e menor incidência do sol da tarde na varanda.",
    },
    {
      number: "03",
      title: floor,
      text: "Amplitude visual e menor exposição aos ruídos urbanos.",
    },
    {
      number: "04",
      title: "Vista livre",
      text: "Abertura frontal para a praça do Colégio Protágoras.",
    },
  ],
  amenities: [
    "Piscina climatizada com borda infinita",
    "Spa e sauna úmida",
    "Academia ampla e equipada",
    "Quadra poliesportiva",
    "Brinquedoteca e playground",
    "Espaço de beleza",
    "Três salões de festas",
    "Quiosque gourmet",
    "Praça do fogo",
    "Salão de jogos",
    "Duas áreas gourmet no rooftop",
    "Minimercado e Espaço Delivery",
  ],
  commonAreas: [
    { src: "/images/condominio/piscina-borda-infinita-dia.webp", alt: "Piscina com borda infinita, deck e vista para a cidade durante o dia", label: "Piscina climatizada", width: 573, height: 450 },
    { src: "/images/condominio/piscina-cascatas.webp", alt: "Piscina climatizada com duas cascatas e espreguiçadeiras no deck", label: "Piscina e cascatas", width: 588, height: 522 },
    { src: "/images/condominio/piscina-noturna.webp", alt: "Piscina e solário iluminados durante a noite", label: "Piscina à noite", width: 640, height: 348 },
    { src: "/images/condominio/praca-do-fogo.webp", alt: "Praça do Fogo com pergolado, mobiliário e vista urbana", label: "Praça do Fogo", width: 1600, height: 1200 },
    { src: "/images/condominio/portaria-lobby.webp", alt: "Lobby da portaria com pé-direito alto e ambientes de espera", label: "Portaria", width: 1600, height: 1200 },
    { src: "/images/condominio/quiosque-gourmet.webp", alt: "Quiosque gourmet com churrasqueira, forno e mesas", label: "Quiosque gourmet", width: 1600, height: 1200 },
    { src: "/images/condominio/academia.webp", alt: "Academia equipada com aparelhos aeróbicos e de musculação", label: "Academia", width: 1600, height: 1200 },
    { src: "/images/condominio/brinquedoteca.webp", alt: "Brinquedoteca com escorregador e espaço de atividades", label: "Brinquedoteca", width: 1600, height: 1200 },
    { src: "/images/condominio/quadra-poliesportiva.webp", alt: "Quadra poliesportiva cercada e integrada à área de lazer", label: "Quadra poliesportiva", width: 1600, height: 1200 },
    { src: "/images/condominio/espaco-de-beleza.webp", alt: "Espaço de beleza com área de espera e bancada de atendimento", label: "Espaço de beleza", width: 1600, height: 1200 },
    { src: "/images/condominio/piscina-climatizada.webp", alt: "Piscina climatizada com borda infinita e vista para a cidade", label: "Piscina e vista", width: 640, height: 348 },
    { src: "/images/condominio/salao-panoramico.webp", alt: "Salão panorâmico mobiliado com vista ampla da cidade", label: "Salão panorâmico", width: 640, height: 348 },
    { src: "/images/condominio/salao-de-festas.webp", alt: "Salão de festas com mesas e espaço para recepções", label: "Salão de festas", width: 640, height: 348 },
    { src: "/images/condominio/entrada-social.webp", alt: "Entrada social iluminada do Mundi Consciente Square", label: "Entrada social", width: 640, height: 348 },
    { src: "/images/condominio/fachada-mundi.webp", alt: "Fachada da torre residencial do Mundi Consciente Square", label: "Fachada", width: 860, height: 1200 },
    { src: "/images/condominio/piscina-deck.webp", alt: "Piscina com borda infinita, deck e espreguiçadeiras", label: "Piscina e deck", width: 640, height: 348 },
    { src: "/images/condominio/piscina-jardim-noturna.webp", alt: "Piscina iluminada à noite junto ao jardim e ao solário", label: "Piscina e jardim", width: 640, height: 348 },
  ],
  inventory: [
    "Mobiliário apresentado",
    "Marcenaria sob medida",
    "Camas, sofás, mesas e cadeiras",
    "Televisores",
    "Eletrodomésticos da cozinha e área de serviço",
    "Climatização Samsung e Carrier",
  ],
  gallery: [
    { src: "/images/social/hero-varanda-vista.webp", alt: "Varanda gourmet com mesa de jantar, luminárias e vista urbana", width: 1448, height: 1086, category: "Social" },
    { src: "/images/social/area-social-integrada.webp", alt: "Varanda gourmet integrada à sala e à cozinha", width: 1280, height: 960, category: "Social" },
    { src: "/images/social/sala-varanda.webp", alt: "Sala de estar integrada à varanda envidraçada", width: 1280, height: 960, category: "Social" },
    { src: "/images/social/sala-estar.webp", alt: "Sala de estar com sofás e marcenaria para televisão", width: 1448, height: 1086, category: "Social" },
    { src: "/images/social/sala-integrada.webp", alt: "Perspectiva ampla da sala de estar e da varanda", width: 1280, height: 960, category: "Social" },
    { src: "/images/cozinha/cozinha-planejada.webp", alt: "Cozinha planejada com bancada de granito e iluminação embutida", width: 959, height: 1280, category: "Cozinha" },
    { src: "/images/cozinha/varanda-gourmet-integrada.webp", alt: "Varanda gourmet com dois ambientes e integração social", width: 1280, height: 960, category: "Cozinha" },
    { src: "/images/cozinha/churrasqueira-carvao.webp", alt: "Churrasqueira a carvão e bancada da varanda gourmet", width: 1280, height: 960, category: "Cozinha" },
    { src: "/images/cozinha/cozinha-eletrodomesticos.webp", alt: "Cozinha com marcenaria e eletrodomésticos instalados", width: 960, height: 1280, category: "Cozinha" },
    { src: "/images/vista/vista-praca.webp", alt: "Vista livre do vigésimo andar para a praça e o Setor Marista", width: 1448, height: 1086, category: "Vista" },
    { src: "/images/suites/suite-principal.webp", alt: "Suíte principal com cama e iluminação indireta", width: 960, height: 1280, category: "Suítes" },
    { src: "/images/suites/suite-dois.webp", alt: "Suíte com bancada de estudos e marcenaria", width: 1280, height: 960, category: "Suítes" },
    { src: "/images/suites/suite-escritorio-bancada.webp", alt: "Suíte com bancada de estudos, prateleiras, climatização e vista urbana", width: 1448, height: 1086, category: "Suítes" },
    { src: "/images/suites/suite-escritorio-cama.webp", alt: "Suíte com cama auxiliar, bancada planejada e parede em revestimento cerâmico", width: 1448, height: 1086, category: "Suítes" },
    { src: "/images/banheiros/banheiro-suite-principal.webp", alt: "Banheiro da suíte com bancada dupla e box de vidro", width: 960, height: 1280, category: "Banheiros" },
    { src: "/images/banheiros/banheiro-suite.webp", alt: "Banheiro de suíte com bancada de pedra e box", width: 960, height: 1280, category: "Banheiros" },
    { src: "/images/banheiros/lavabo-onix.webp", alt: "Lavabo com cuba em ônix translúcido iluminada", width: 960, height: 1280, category: "Banheiros" },
    { src: "/images/banheiros/lavabo-onix-detalhe.webp", alt: "Detalhe da cuba retroiluminada em ônix", width: 960, height: 1280, category: "Banheiros" },
    { src: "/images/apoio/area-servico.webp", alt: "Área de serviço com armários e equipamentos", width: 960, height: 1280, category: "Apoio" },
    { src: "/images/apoio/circulacao-suites.webp", alt: "Circulação das suítes com armários espelhados", width: 1280, height: 960, category: "Apoio" },
    { src: "/images/apoio/hall-entrada.webp", alt: "Hall interno com marcenaria em madeira", width: 960, height: 1280, category: "Apoio" },
  ] satisfies GalleryImage[],
} as const;

export function whatsappUrl() {
  return `https://wa.me/${property.phoneNormalized}?text=${encodeURIComponent(property.whatsappMessage)}`;
}

export const navigation = [
  { href: "#visao-geral", label: "Visão geral" },
  { href: "#imovel", label: "O imóvel" },
  { href: "#galeria", label: "Galeria" },
  { href: "#condominio", label: "Condomínio" },
  { href: "#localizacao", label: "Localização" },
];
