import type { Metadata } from 'next';
import Link from 'next/link';
import ReservationForm from '@/components/sections/ReservationForm';

const PAGE_TITLE = "Reservas — Pé d'Lama";

const PAGE_DESCRIPTION =
  'Reserva o teu evento no Pé d\'Lama: formulário simples, resposta em 24 horas e orçamento sem compromisso. Festas infantis e eventos adultos — envia o pedido!';

const OG_IMAGE = 'https://www.pedlama.pt/images/og-reservas.jpg';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: { absolute: PAGE_TITLE },
    description: PAGE_DESCRIPTION,
    robots: { index: true, follow: true },
    alternates: {
      canonical: 'https://www.pedlama.pt/reservas/',
      languages: { 'pt-PT': 'https://www.pedlama.pt/reservas/' },
    },
    openGraph: {
      title: PAGE_TITLE,
      description: PAGE_DESCRIPTION,
      url: 'https://www.pedlama.pt/reservas/',
      siteName: "Pé d'Lama",
      locale: 'pt_PT',
      type: 'website',
      images: [
        {
          url: OG_IMAGE,
          width: 1200,
          height: 630,
          alt: "Reservar evento no Pé d'Lama",
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

const reservasJsonLd = {
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
      name: 'Reservas',
      item: 'https://www.pedlama.pt/reservas/',
    },
  ],
};

export default function ReservasPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reservasJsonLd) }}
      />

      <div className="mx-auto max-w-3xl px-4 md:px-6 lg:px-8">
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
                Reservas
              </span>
            </li>
          </ol>
        </nav>

        <header className="py-section lg:py-section-lg">
          <h1 className="font-display text-display-lg text-forest">
            Reserva o teu evento
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-storm">
            Preenche o formulário abaixo e respondemos em até 24 horas com
            disponibilidade e orçamento — sem compromisso até confirmares.
          </p>
        </header>

        <div className="pb-section lg:pb-section-lg">
          <ReservationForm />
        </div>
      </div>
    </>
  );
}
