import type { Metadata } from 'next';
import Link from 'next/link';
import StormCarousel from '@/components/ui/StormCarousel';
import { prelaunchHidden, RESERVATIONS_LIVE } from '@/lib/site-config';

const PAGE_TITLE = "A Nossa História — Pé d'Lama";

const PAGE_DESCRIPTION =
  'A história real do Pé d\'Lama: devastado pela tempestade de 2026, reconstruído por Virgílio Morouço. Resiliência, família e a reabertura de um espaço único.';

const OG_IMAGE = 'https://www.pedlama.pt/images/og-sobre.jpg';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: { absolute: PAGE_TITLE },
    description: PAGE_DESCRIPTION,
    robots: { index: true, follow: true },
    alternates: {
      canonical: 'https://www.pedlama.pt/sobre/',
      languages: { 'pt-PT': 'https://www.pedlama.pt/sobre/' },
    },
    openGraph: {
      title: PAGE_TITLE,
      description: PAGE_DESCRIPTION,
      url: 'https://www.pedlama.pt/sobre/',
      siteName: "Pé d'Lama",
      locale: 'pt_PT',
      type: 'website',
      images: [
        {
          url: OG_IMAGE,
          width: 1200,
          height: 630,
          alt: "A história do Pé d'Lama — resiliência após a tempestade de 2026",
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

const sobreJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
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
          name: 'A Nossa História',
          item: 'https://www.pedlama.pt/sobre/',
        },
      ],
    },
    {
      '@type': 'AboutPage',
      name: 'A Nossa História',
      url: 'https://www.pedlama.pt/sobre/',
      description: PAGE_DESCRIPTION,
      mainEntity: {
        '@type': 'Person',
        name: 'Virgílio Morouço',
        jobTitle: 'Fundador do Pé d\'Lama',
      },
    },
  ],
};

interface TimelineMoment {
  phase: string;
  title: string;
  body: string;
  phaseColor: 'terracotta' | 'storm';
  photoNote?: string;
}

const timeline: TimelineMoment[] = [
  {
    phase: 'O início',
    title: 'Construído com as mãos',
    phaseColor: 'terracotta',
    body: 'O Virgílio Morouço criou o Pé d\'Lama tijolo a tijolo, com paciência e capricho. Um espaço verde, cheio de vida, que se foi tornando no lugar favorito das famílias da região para celebrar — aniversários, piqueniques, tardes que ficam na memória.',
  },
  {
    phase: 'Janeiro 2026',
    title: 'A tempestade',
    phaseColor: 'storm',
    photoNote: 'pedlama1.jpg a pedlama5.jpg',
    body: 'Uma tempestade severa atingiu o espaço com uma violência que ninguém esperava. Árvores centenárias arrancadas pela raiz. Estruturas danificadas. Em poucas horas, o Pé d\'Lama ficou irreconhecível — um silêncio onde antes havia risos.',
  },
  {
    phase: 'Março – Maio 2026',
    title: 'A reconstrução',
    phaseColor: 'terracotta',
    body: 'Dia após dia, ramo a ramo, pedra a pedra. Com a ajuda da família e de quem nunca deixou de acreditar no espaço, o trabalho avançou sem fanfarra — apenas com a teimosia de quem sabe o que vale a pena guardar.',
  },
  {
    phase: 'Hoje',
    title: 'De pé outra vez',
    phaseColor: 'terracotta',
    body: 'O Pé d\'Lama reabriu. Mais limpo, mais seguro, com a mesma alma de sempre — e com uma história que nenhum outro espaço de festas em Portugal pode contar. Pronto para receber as vossas celebrações.',
  },
];

function phaseLabelClass(color: TimelineMoment['phaseColor']): string {
  return color === 'storm'
    ? 'text-storm/60'
    : 'text-terracotta';
}

export default function SobrePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(sobreJsonLd) }}
      />

      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        {/* Breadcrumb */}
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
                A Nossa História
              </span>
            </li>
          </ol>
        </nav>

        {/* Page header */}
        <header className="py-section lg:max-w-3xl lg:py-section-lg">
          <p className="text-xs font-bold uppercase tracking-widest text-terracotta">
            A nossa história
          </p>
          <h1 className="mt-3 font-display text-display-lg text-forest">
            Uma casa que recusou cair
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-storm">
            Esta não é uma história de marketing. É a história real de um
            espaço, de uma família e de uma vontade que a natureza não
            conseguiu quebrar.
          </p>
        </header>
      </div>

      {/* Timeline */}
      <section className="bg-offwhite py-section lg:py-section-lg">
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <div className="relative">
            <div
              className="absolute left-4 top-0 hidden h-full w-px bg-forest/15 lg:left-1/2 lg:block lg:-translate-x-1/2"
              aria-hidden="true"
            />

            <ol className="space-y-16 lg:space-y-24">
              {timeline.map((moment, index) => {
                const isLeft = index % 2 === 0;

                return (
                  <li
                    key={moment.phase}
                    className="relative lg:grid lg:grid-cols-2 lg:gap-16 lg:gap-x-20"
                  >
                    <div
                      className={`absolute left-4 top-8 z-10 hidden h-3 w-3 -translate-x-1/2 rounded-full border-2 border-offwhite bg-terracotta lg:left-1/2 lg:block ${
                        moment.phaseColor === 'storm' ? 'bg-storm' : ''
                      }`}
                      aria-hidden="true"
                    />

                    <div
                      className={
                        isLeft
                          ? 'lg:pr-8 lg:text-right'
                          : 'lg:col-start-2 lg:pl-8'
                      }
                    >
                      <p
                        className={`text-xs font-bold uppercase tracking-widest ${phaseLabelClass(moment.phaseColor)}`}
                      >
                        {moment.phase}
                      </p>
                      <h2 className="mt-2 font-display text-display-md text-forest">
                        {moment.title}
                      </h2>
                      <p className="mt-4 leading-relaxed text-storm">
                        {moment.body}
                      </p>
                    </div>

                    <div
                      className={
                        isLeft
                          ? 'mt-8 lg:col-start-2 lg:mt-0 lg:pl-8'
                          : 'mt-8 lg:col-start-1 lg:row-start-1 lg:mt-0 lg:pr-8'
                      }
                    >
                      {moment.phase === 'Janeiro 2026' ? (
                        <StormCarousel />
                      ) : (
                        <div className="aspect-[4/3] overflow-hidden rounded-lg bg-storm/10">
                          {/* Substituir por next/image: foto do momento */}
                        </div>
                      )}
                    </div>
                  </li>
                );
              })}
            </ol>
          </div>
        </div>
      </section>

      {/* Citação Virgílio */}
      <section className="bg-forest py-section lg:py-section-lg">
        <div className="mx-auto max-w-4xl px-4 text-center md:px-6 lg:px-8">
          <blockquote className="font-display text-2xl italic leading-relaxed text-cream md:text-3xl">
            &ldquo;Não estava nos meus planos desistir. Nunca esteve. Este
            espaço é feito de tempo, de suor e de memórias boas demais para
            abandonar.&rdquo;
          </blockquote>
          <footer className="mt-8 text-sm font-medium text-cream/75">
            — Virgílio Morouço, fundador do Pé d&apos;Lama
          </footer>
        </div>
      </section>

      {/* CTA final */}
      <section className="bg-cream py-section lg:py-section-lg">
        <div className="mx-auto max-w-3xl px-4 text-center md:px-6 lg:px-8">
          <h2 className="font-display text-display-md text-forest">
            Vem celebrar connosco
          </h2>
          <p className="mt-6 leading-relaxed text-storm">
            O melhor tributo a esta história é enchê-la de festas novas — de
            risos, de bolos, de momentos que as vossas famílias vão recordar
            durante anos.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/pacotes/"
              className={`${prelaunchHidden} inline-flex min-h-[44px] w-full items-center justify-center rounded-md bg-terracotta px-8 text-base font-bold text-white transition-colors hover:bg-terracotta-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-forest sm:w-auto`}
              aria-hidden={!RESERVATIONS_LIVE}
              tabIndex={RESERVATIONS_LIVE ? undefined : -1}
            >
              Ver Pacotes
            </Link>
            <Link
              href="/galeria/"
              className="inline-flex min-h-[44px] w-full items-center justify-center rounded-md border border-forest px-8 text-base font-medium text-forest transition-colors hover:bg-forest/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-terracotta sm:w-auto"
            >
              Ver Galeria
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
