import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import StormCarousel from '@/components/ui/StormCarousel';
import { prelaunchHidden, RESERVATIONS_LIVE } from '@/lib/site-config';

const PAGE_TITLE =
  "Pé d'Lama — Espaço de Festas Infantis e Eventos em Portugal";

const PAGE_DESCRIPTION =
  'Festas infantis, eventos para adultos no Pé d\'Lama, em Portugal. Reabrimos em 2026 após a tempestade — um espaço de volta, com alma, natureza e família.';

const OG_IMAGE = 'https://www.pedlama.pt/images/og-home.jpg';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: { absolute: PAGE_TITLE },
    description: PAGE_DESCRIPTION,
    robots: { index: true, follow: true },
    alternates: {
      canonical: 'https://www.pedlama.pt/',
      languages: { 'pt-PT': 'https://www.pedlama.pt/' },
    },
    openGraph: {
      title: PAGE_TITLE,
      description: PAGE_DESCRIPTION,
      url: 'https://www.pedlama.pt/',
      siteName: "Pé d'Lama",
      locale: 'pt_PT',
      type: 'website',
      images: [
        {
          url: OG_IMAGE,
          width: 1200,
          height: 630,
          alt: "Pé d'Lama — espaço de festas infantis e eventos em Portugal",
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

const homeJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite',
      name: "Pé d'Lama",
      url: 'https://www.pedlama.pt',
      description:
        'Espaço de festas infantis e eventos de adultos em Portugal — Natureza · Sentidos · Família',
      inLanguage: 'pt-PT',
    },
    {
      '@type': 'Organization',
      name: "Pé d'Lama",
      url: 'https://www.pedlama.pt',
      founder: { '@type': 'Person', name: 'Virgílio Morouço' },
    },
    {
      '@type': 'EventVenue',
      name: "Pé d'Lama",
      url: 'https://www.pedlama.pt',
      description:
        'Espaço de festas infantis e eventos em Portugal, reaberto em 2026 após tempestade severa',
      address: { '@type': 'PostalAddress', addressCountry: 'PT' },
      founder: { '@type': 'Person', name: 'Virgílio Morouço' },
    },
  ],
};

const packages = [
  {
    emoji: '🎈',
    title: 'Festa Infantil',
    tagline: 'Para os pequenos que merecem um dia inesquecível',
    features: [
      'Espaço exterior',
      'Jogos',
      'Decoração',
      'Até 50 convidados',
    ],
  },
  {
    emoji: '✨',
    title: 'Pacote Completo',
    tagline: 'Deixa tudo connosco — apareces e celebras',
    features: [
      'Tudo incluído',
      'Animação',
      'Catering',
      'Personalizado a 100%',
    ],
  },
  {
    emoji: '🥂',
    title: 'Evento de Adultos',
    tagline: 'Reuniões, comemorações e momentos que ficam',
    features: [
      'Espaço coberto e descoberto',
      'Bar',
      'Estacionamento',
      'Até 100 pessoas',
    ],
  },
] as const;

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeJsonLd) }}
      />

      {/* ——— HERO ——— */}
      <section className="relative -mt-16 min-h-screen bg-forest md:-mt-20">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/images/hero-espaco.jpg')" }}
          role="img"
          aria-label="Vista do espaço Pé d'Lama rodeado de natureza"
        >
          {/* Substituir por next/image quando hero-espaco.jpg estiver disponível */}
        </div>
        <div className="absolute inset-0 bg-forest-dark/60" aria-hidden="true" />

        <div className="relative mx-auto flex min-h-screen max-w-7xl items-center px-4 pb-16 pt-16 md:px-6 md:pt-20 lg:px-8">
          <div className="grid w-full items-center gap-10 lg:grid-cols-2 lg:gap-12">
            <div>
              <span className="mb-6 inline-flex w-fit items-center rounded-full border border-terracotta/40 bg-terracotta/20 px-4 py-1.5 text-sm font-medium text-terracotta-light">
                ✦ Reaberto em 2026
              </span>

              <h1 className="max-w-4xl font-display text-display-xl text-cream">
                Um lugar que a tempestade não conseguiu{' '}
                <span className="italic text-terracotta">apagar</span>
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-cream/75 md:text-xl">
                Quando a tempestade de janeiro de 2026 devastou o Pé d&apos;Lama,
                o Virgílio Morouço não desistiu. Hoje o espaço está de volta — mais
                forte, mais bonito, pronto para receber as vossas festas.
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
                <Link
                  href="/reservas/"
                  className={`${prelaunchHidden} inline-flex min-h-[44px] items-center justify-center rounded-md bg-terracotta px-8 text-base font-bold text-white transition-colors hover:bg-terracotta-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cream`}
                  aria-hidden={!RESERVATIONS_LIVE}
                  tabIndex={RESERVATIONS_LIVE ? undefined : -1}
                >
                  Reservar a Minha Festa
                </Link>
                <Link
                  href="/sobre/"
                  className="inline-flex min-h-[44px] items-center justify-center rounded-md border border-cream/40 px-8 text-base font-medium text-cream transition-colors hover:border-cream hover:bg-cream/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cream"
                >
                  A Nossa História
                </Link>
              </div>
            </div>

            <div className="relative hidden justify-center lg:flex">
              <Image
                src="/images/pezinho3.png"
                alt="Pezinho, mascote do Pé d'Lama"
                width={1000}
                height={1487}
                className="h-auto w-full max-h-[min(70vh,640px)] object-contain object-bottom"
                priority
              />
            </div>
          </div>

        </div>
      </section>

      {/* ——— HISTÓRIA TEASER ——— */}
      <section className="bg-cream py-section lg:py-section-lg">
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <StormCarousel />

            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-terracotta">
                A nossa história
              </p>
              <h2 className="mt-3 font-display text-display-lg text-forest">
                Levámos um tombo.{' '}
                <span className="italic">Levantámo-nos.</span>
              </h2>
              <p className="mt-6 leading-relaxed text-storm">
                Em janeiro de 2026, uma tempestade severa arrasou o que tínhamos
                construído com as nossas mãos — estruturas, árvores, memórias
                de anos de festas. Por momentos, parecia que tudo tinha acabado.
              </p>
              <p className="mt-4 leading-relaxed text-storm">
                Mas o Pé d&apos;Lama não é só um espaço: é uma história de
                família e de raízes. Com trabalho, comunidade e teimosia boa,
                reabrimos as portas — porque as celebrações que importam não
                podem esperar.
              </p>
              <Link
                href="/sobre/"
                className="mt-8 inline-flex min-h-[44px] items-center text-base font-bold text-terracotta transition-colors hover:text-terracotta-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-terracotta"
              >
                Ler a história completa →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ADSENSE SLOT: header-banner */}

      {/* ——— PACOTES ——— */}
      <section
        className={`${prelaunchHidden} bg-offwhite py-section lg:py-section-lg`}
        aria-hidden={!RESERVATIONS_LIVE}
      >
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <h2 className="text-center font-display text-display-lg text-forest">
            Festas que ficam na memória
          </h2>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {packages.map((pkg) => (
              <article
                key={pkg.title}
                className="flex flex-col rounded-lg border border-forest/10 bg-cream p-8 transition-colors hover:border-terracotta/30"
              >
                <h3 className="font-display text-xl text-forest">
                  <span aria-hidden="true">{pkg.emoji} </span>
                  {pkg.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-storm">
                  {pkg.tagline}
                </p>
                <ul className="mt-6 flex-1 space-y-2 text-sm text-storm">
                  {pkg.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
                      <span
                        className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-terracotta"
                        aria-hidden="true"
                      />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/pacotes/"
                  className="mt-8 inline-flex min-h-[44px] items-center text-sm font-bold text-terracotta transition-colors hover:text-terracotta-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-terracotta"
                >
                  Ver detalhes →
                </Link>
              </article>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/reservas/"
              className="inline-flex min-h-[44px] items-center justify-center rounded-md bg-forest px-10 text-base font-bold text-cream transition-colors hover:bg-forest-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-terracotta"
            >
              Pedir Orçamento
            </Link>
          </div>
        </div>
      </section>

      {/* ——— GALERIA TEASER ——— */}
      <section className="bg-forest py-section lg:py-section-lg">
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <h2 className="font-display text-display-md text-cream">
              Vê onde a magia acontece
            </h2>
            <Link
              href="/galeria/"
              className="inline-flex min-h-[44px] shrink-0 items-center text-sm font-bold text-terracotta-light transition-colors hover:text-cream focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cream"
            >
              Ver galeria completa →
            </Link>
          </div>

          <Link
            href="/galeria/"
            className="mt-10 grid grid-cols-2 gap-3 sm:gap-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cream md:gap-6"
            aria-label="Ver galeria completa de fotos do espaço"
          >
            {[1, 2, 3, 4].map((cell) => (
              <div
                key={cell}
                className="aspect-square rounded-lg bg-forest-light/40"
              >
                {/* Substituir por next/image: galeria foto {cell} */}
              </div>
            ))}
          </Link>
        </div>
      </section>

      {/* ——— CTA FINAL ——— */}
      <section className="bg-terracotta py-section lg:py-section-lg">
        <div className="mx-auto max-w-3xl px-4 text-center md:px-6 lg:px-8">
          <h2 className="font-display text-display-lg text-cream">
            Pronto para celebrar <span className="italic">connosco</span>?
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-cream/90">
            A nossa agenda para 2026 vai abrir brevemente. Seja uma festa de anos para
            o mais pequeno ou uma comemoração entre amigos — há um lugar à
            vossa espera, de pé outra vez.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/reservas/"
              className={`${prelaunchHidden} inline-flex min-h-[44px] w-full items-center justify-center rounded-md bg-cream px-8 text-base font-bold text-terracotta-dark transition-colors hover:bg-offwhite focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-forest sm:w-auto`}
              aria-hidden={!RESERVATIONS_LIVE}
              tabIndex={RESERVATIONS_LIVE ? undefined : -1}
            >
              Reservar Agora
            </Link>
            <Link
              href="/contacto/"
              className="inline-flex min-h-[44px] w-full items-center justify-center rounded-md border border-cream/50 px-8 text-base font-medium text-cream transition-colors hover:border-cream hover:bg-cream/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cream sm:w-auto"
            >
              Falar Connosco
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
