import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import ContactButtons from '@/components/ui/ContactButtons';
import { CONTACT } from '@/lib/site-config';

const PAGE_TITLE = "Galeria — Pé d'Lama";

const PAGE_DESCRIPTION =
  "Fotos do Pé d'Lama em Maceira, Leiria: o espaço de festas de aniversário, a zona exterior e o antes e depois da tempestade de 2026.";

const OG_IMAGE = 'https://www.pedlama.pt/images/og-default.jpg';

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
  /** Fotos reais; vazio = mostra "fotos em breve" */
  photos: { src: string; alt: string }[];
}

// Para adicionar fotos: colocar em public/images/galeria/ e listar aqui.
const categories: GalleryCategory[] = [
  {
    id: 'espaco-hoje',
    title: 'O Espaço Hoje',
    description:
      'A zona de diversão, as salas de lanche e o espaço exterior em contacto com a natureza.',
    photos: [],
  },
  {
    id: 'festas',
    title: 'Festas de Aniversário',
    description: 'Momentos das festas que aqui celebrámos.',
    photos: [],
  },
  {
    id: 'historia',
    title: 'Antes: a tempestade de 2026',
    description:
      'Como ficou o espaço depois da tempestade de janeiro de 2026 — antes de o reconstruirmos.',
    photos: [
      { src: '/images/pedlama1.jpg', alt: "Árvores derrubadas no Pé d'Lama pela tempestade de janeiro de 2026" },
      { src: '/images/pedlama3.jpg', alt: "Árvore arrancada pela raiz no jardim do Pé d'Lama" },
      { src: '/images/pedlama6.jpg', alt: "Telhado danificado pela tempestade no Pé d'Lama" },
      { src: '/images/pedlama7.jpg', alt: "Árvores e galhos caídos junto ao edifício do Pé d'Lama" },
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
            O espaço, as festas e o caminho que fizemos até aqui.
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

              {category.photos.length > 0 ? (
                <div className="mt-8 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
                  {category.photos.map((photo) => (
                    <div
                      key={photo.src}
                      className="relative aspect-square overflow-hidden rounded-lg bg-storm/10"
                    >
                      <Image
                        src={photo.src}
                        alt={photo.alt}
                        fill
                        sizes="(max-width: 1024px) 50vw, 25vw"
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
              ) : (
                <div className="mt-8 rounded-lg border border-dashed border-forest/25 bg-cream px-6 py-10 text-center text-storm">
                  📸 Fotos novas em breve — entretanto, veja o nosso{' '}
                  <a
                    href={CONTACT.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold text-terracotta underline hover:text-terracotta-dark"
                  >
                    Instagram
                  </a>
                  .
                </div>
              )}
            </div>
          </section>
        ))}
      </div>

      <section className="bg-cream py-section text-center lg:py-section-lg">
        <div className="mx-auto max-w-2xl px-4 md:px-6 lg:px-8">
          <h2 className="font-display text-display-md text-forest">
            A próxima festa pode ser a vossa
          </h2>
          <p className="mt-4 text-storm">
            Fale connosco para saber as datas disponíveis.
          </p>
          <ContactButtons className="mt-8 justify-center" />
        </div>
      </section>
    </>
  );
}
