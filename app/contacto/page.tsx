import type { Metadata } from 'next';
import Link from 'next/link';
import ContactButtons from '@/components/ui/ContactButtons';
import {
  CONTACT,
  FULL_ADDRESS,
  MAPS_DIRECTIONS_URL,
  RESERVATIONS_LIVE,
} from '@/lib/site-config';

const PAGE_TITLE = "Contacto — Pé d'Lama";

const PAGE_DESCRIPTION =
  'Contacta o Virgílio Morouço no Pé d\'Lama: dúvidas, orçamentos sem compromisso e visitas ao espaço de festas. Resposta em 24 horas — ou formulário de reservas.';

const OG_IMAGE = 'https://www.pedlama.pt/images/og-contacto.jpg';

const CONTACT_EMAIL = CONTACT.email;
const CONTACT_PHONE = CONTACT.phone;
const CONTACT_PHONE_HREF = CONTACT.phoneHref;

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: { absolute: PAGE_TITLE },
    description: PAGE_DESCRIPTION,
    robots: { index: true, follow: true },
    alternates: {
      canonical: 'https://www.pedlama.pt/contacto/',
      languages: { 'pt-PT': 'https://www.pedlama.pt/contacto/' },
    },
    openGraph: {
      title: PAGE_TITLE,
      description: PAGE_DESCRIPTION,
      url: 'https://www.pedlama.pt/contacto/',
      siteName: "Pé d'Lama",
      locale: 'pt_PT',
      type: 'website',
      images: [
        {
          url: OG_IMAGE,
          width: 1200,
          height: 630,
          alt: "Contacto Pé d'Lama — Virgílio Morouço",
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

const contactoJsonLd = {
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
      name: 'Contacto',
      item: 'https://www.pedlama.pt/contacto/',
    },
  ],
};

export default function ContactoPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactoJsonLd) }}
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
                Contacto
              </span>
            </li>
          </ol>
        </nav>

        <header className="py-section text-center lg:max-w-3xl lg:mx-auto lg:py-section-lg">
          <h1 className="font-display text-display-lg text-forest">
            Estamos aqui para ajudar
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-storm">
            Para marcar uma festa, saber datas livres e horários, ou pedir
            condições para outro evento — fale connosco. A forma mais rápida é
            o WhatsApp.
          </p>
        </header>

        <section className="pb-section lg:pb-section-lg">
          <div className="grid gap-8 md:grid-cols-2 lg:gap-10">
          <div className="rounded-lg border border-forest/10 bg-cream p-8">
            <h2 className="font-display text-2xl text-forest">
              Contactos directos
            </h2>

            <dl className="mt-8 space-y-8">
              <div>
                <dt className="text-xs font-bold uppercase tracking-widest text-terracotta">
                  Email
                </dt>
                <dd className="mt-2">
                  <a
                    href={`mailto:${CONTACT_EMAIL}`}
                    className="inline-flex min-h-[44px] items-center text-base font-medium text-forest underline decoration-terracotta/40 underline-offset-4 transition-colors hover:text-terracotta focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-terracotta"
                  >
                    {CONTACT_EMAIL}
                  </a>
                </dd>
              </div>

              <div>
                <dt className="text-xs font-bold uppercase tracking-widest text-terracotta">
                  Telefone / WhatsApp
                </dt>
                <dd className="mt-2">
                  <a
                    href={`tel:${CONTACT_PHONE_HREF}`}
                    className="inline-flex min-h-[44px] items-center text-base font-medium text-forest underline decoration-terracotta/40 underline-offset-4 transition-colors hover:text-terracotta focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-terracotta"
                  >
                    {CONTACT_PHONE}
                  </a>
                </dd>
              </div>

              <div>
                <dt className="text-xs font-bold uppercase tracking-widest text-terracotta">
                  Localização
                </dt>
                <dd className="mt-2 text-base text-storm">
                  {FULL_ADDRESS}
                  <span className="mt-1 block text-sm text-storm/80">
                    A 3 km da rotunda da Azoia (IC2), em direção a Maceira
                  </span>
                </dd>
              </div>

              <div>
                <dt className="text-xs font-bold uppercase tracking-widest text-terracotta">
                  Dias e horários
                </dt>
                <dd className="mt-2 text-base text-storm">
                  Contacte-nos para saber a disponibilidade
                </dd>
              </div>
            </dl>
          </div>

          <div className="flex flex-col justify-center rounded-lg bg-forest p-8">
            <h2 className="font-display text-2xl text-cream">
              Marcar uma festa
            </h2>
            <p className="mt-4 leading-relaxed text-cream/75">
              Envie-nos a data pretendida e o número de crianças. A mensagem
              já vai preparada — só tem de completar.
            </p>
            <ContactButtons tone="dark" className="mt-8 sm:flex-col" />
            {RESERVATIONS_LIVE ? (
              <Link
                href="/reservas/"
                className="mt-6 inline-flex min-h-[44px] items-center text-sm font-bold text-terracotta-light hover:text-cream"
              >
                Ou preencha o formulário de reserva →
              </Link>
            ) : null}
          </div>
          </div>

          <div className="mx-auto mt-10 max-w-4xl">
            <div className="relative w-full overflow-hidden rounded-sm border border-forest/10">
              <iframe
                src="https://maps.google.com/maps?q=39.703778,-8.866861&output=embed"
                title="Localização do Pé d'Lama no Google Maps"
                loading="lazy"
                className="h-[300px] w-full border-0 rounded-sm md:h-[400px]"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <a
              href={MAPS_DIRECTIONS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex min-h-[44px] items-center gap-2 font-body text-sm font-bold uppercase tracking-widest text-terracotta transition-colors hover:text-terracotta-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-terracotta"
            >
              Abrir no Google Maps →
            </a>
          </div>
        </section>
      </div>
    </>
  );
}
