import type { Metadata } from 'next';
import Link from 'next/link';

const PAGE_TITLE = "Galeria — Pé d'Lama";

const PAGE_DESCRIPTION =
  'Fotos do Pé d\'Lama: espaço recuperado após a tempestade de 2026, antes e depois, festas infantis e eventos para adultos. Vê o nosso espaço em imagens online.';

const OG_IMAGE = 'https://www.pedlama.pt/images/og-galeria.jpg';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: { absolute: PAGE_TITLE },
    description: PAGE_DESCRIPTION,
    robots: { index: true, follow: true },
    alternates: {
      canonical: 'https://www.pedlama.pt/galeria/',
      languages: { 'pt-PT': 'https://www.pedlama.pt/galeria/' },
    },
    openGraph: {
      title: PAGE_TITLE,
      description: PAGE_DESCRIPTION,
      url: 'https://www.pedlama.pt/galeria/',
      siteName: "Pé d'Lama",
      locale: 'pt_PT',
      type: 'website',
      images: [
        {
          url: OG_IMAGE,
          width: 1200,
          height: 630,
          alt: "Galeria de fotos do Pé d'Lama",
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: PAGE_TITLE,
      description: PAGE_DESCRIPTION,
      images: [OG_IMAGE],
    },
  };
}

const galeriaJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Início',
      item: 'https://www.pedlama.pt/',
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Galeria',
      item: 'https://www.pedlama.pt/galeria/',
    },
  ],
};

interface GalleryCategory {
  id: string;
  title: string;
  description: string;
  cellBg: string;
  cells: { id: string; placeholder: string }[];
}

const categories: GalleryCategory[] = [
  {
    id: 'espaco-hoje',
    title: 'O Espaço Hoje',
    description:
      'O Pé d\'Lama depois da recuperação — verde, limpo e cheio de vida.',
    cellBg: 'bg-forest/10',
    cells: [
      { id: 'hoje-1', placeholder: 'Foto do espaço actual 1 — vista geral do recinto' },
      { id: 'hoje-2', placeholder: 'Foto do espaço actual 2 — zona exterior / relvado' },
      { id: 'hoje-3', placeholder: 'Foto do espaço actual 3 — área de festas' },
      { id: 'hoje-4', placeholder: 'Foto do espaço actual 4 — detalhe natureza / árvores' },
    ],
  },
  {
    id: 'historia',
    title: 'A Nossa História',
    description:
      'O antes e o depois. A tempestade de 2026 e a reconstrução.',
    cellBg: 'bg-storm/15',
    cells: [
      {
        id: 'hist-1',
        placeholder:
          'pedlama1.jpg — foto real da tempestade (cliente). Substituir por next/image',
      },
      {
        id: 'hist-2',
        placeholder:
          'pedlama2.jpg — foto real da tempestade (cliente). Substituir por next/image',
      },
      {
        id: 'hist-3',
        placeholder:
          'pedlama3.jpg — foto real da tempestade (cliente). Substituir por next/image',
      },
      {
        id: 'hist-4',
        placeholder:
          'pedlama4.jpg — foto real da tempestade (cliente). Substituir por next/image',
      },
    ],
  },
  {
    id: 'infantis',
    title: 'Festas Infantis',
    description:
      'Momentos inesquecíveis das festas que aqui celebrámos.',
    cellBg: 'bg-forest/10',
    cells: [
      { id: 'inf-1', placeholder: 'Festa infantil 1 — crianças no espaço exterior' },
      { id: 'inf-2', placeholder: 'Festa infantil 2 — decoração e mesa de festa' },
      { id: 'inf-3', placeholder: 'Festa infantil 3 — jogos e atividades' },
      { id: 'inf-4', placeholder: 'Festa infantil 4 — momento de celebração em família' },
    ],
  },
  {
    id: 'adultos',
    title: 'Eventos de Adultos',
    description:
      'Reuniões, comemorações e muito mais.',
    cellBg: 'bg-forest/10',
    cells: [
      { id: 'adu-1', placeholder: 'Evento adultos 1 — reunião ou comemoração no espaço' },
      { id: 'adu-2', placeholder: 'Evento adultos 2 — zona coberta / convívio' },
      { id: 'adu-3', placeholder: 'Evento adultos 3 — ambiente nocturno ou diurno' },
      { id: 'adu-4', placeholder: 'Evento adultos 4 — grupo e espaço configurado' },
    ],
  },
];

export default function GaleriaPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(galeriaJsonLd) }}
      />

      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <nav
          aria-label="Breadcrumb"
          className="border-b border-forest/10 py-4 text-sm text-storm"
        >
          <ol className="flex flex-wrap items-center gap-2">
            <li>
              <Link
                href="/"
                className="transition-colors hover:text-forest focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-terracotta"
              >
                Início
              </Link>
            </li>
            <li aria-hidden="true" className="text-storm/40">
              /
            </li>
            <li>
              <span className="font-medium text-forest" aria-current="page">
                Galeria
              </span>
            </li>
          </ol>
        </nav>

        <header className="py-section text-center lg:max-w-3xl lg:mx-auto lg:py-section-lg">
          <h1 className="font-display text-display-lg text-forest">
            O nosso espaço em imagens
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-storm">
            Da tempestade à reabertura — e de todas as festas que aqui
            aconteceram.
          </p>
        </header>
      </div>

      <div className="bg-offwhite">
        {categories.map((category, index) => (
          <section
            key={category.id}
            className={`py-section lg:py-section-lg ${
              index > 0 ? 'border-t border-forest/10' : ''
            }`}
          >
            <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
              <h2 className="font-display text-display-md text-forest">
                {category.title}
              </h2>
              <p className="mt-3 max-w-2xl text-storm">{category.description}</p>

              {category.id === 'historia' && (
                <p className="mt-2 text-sm italic text-storm/80">
                  Nota: estas quatro células recebem as fotos reais da tempestade
                  (pedlama1.jpg a pedlama5.jpg — 5 ficheiros do cliente; usar as
                  4 principais na galeria).
                </p>
              )}

              <div className="mt-8 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
                {category.cells.map((cell) => (
                  <div
                    key={cell.id}
                    className={`relative aspect-square overflow-hidden rounded-lg ${category.cellBg}`}
                  >
                    {/* Substituir por next/image: {cell.placeholder} */}
                    <span className="sr-only">{cell.placeholder}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>
        ))}
      </div>

      <section className="bg-cream py-section text-center lg:py-section-lg">
        <div className="mx-auto max-w-2xl px-4 md:px-6 lg:px-8">
          <h2 className="font-display text-display-md text-forest">
            Queres ser o próximo?
          </h2>
          <p className="mt-4 text-storm">
            A tua festa ou evento pode ser o próximo capítulo desta galeria.
          </p>
          <Link
            href="/reservas/"
            className="mt-8 inline-flex min-h-[44px] items-center justify-center rounded-md bg-terracotta px-10 text-base font-bold text-white transition-colors hover:bg-terracotta-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-forest"
          >
            Reservar Agora
          </Link>
        </div>
      </section>
    </>
  );
}
