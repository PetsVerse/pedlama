import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import ContactButtons from '@/components/ui/ContactButtons';
import StormCarousel from '@/components/ui/StormCarousel';

const PAGE_TITLE = "Quem Somos — Pé d'Lama, Maceira";

const PAGE_DESCRIPTION =
  "O Pé d'Lama é um espaço familiar de festas de aniversário em Maceira, Leiria, criado por Virgílio Morouço. Natureza, sentidos e família — e uma história de reconstrução.";

const OG_IMAGE = 'https://www.pedlama.pt/images/og-default.jpg';

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
          alt: "Pé d'Lama — festas de aniversário em Maceira, Leiria",
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
          name: 'Quem Somos',
          item: 'https://www.pedlama.pt/sobre/',
        },
      ],
    },
    {
      '@type': 'AboutPage',
      name: 'Quem Somos',
      url: 'https://www.pedlama.pt/sobre/',
      description: PAGE_DESCRIPTION,
      about: { '@id': 'https://www.pedlama.pt/#negocio' },
    },
  ],
};

const values = [
  {
    title: 'Natureza',
    body: 'Brincar ao ar livre, sujar as mãos, descobrir o que cresce à volta. O espaço exterior é parte da festa, não um extra.',
  },
  {
    title: 'Sentidos',
    body: 'Escorregar, saltar, mergulhar na piscina de bolas, provar o bolo. Festas para viver com o corpo todo — não só para ver.',
  },
  {
    title: 'Família',
    body: 'Somos um negócio de família e recebemos cada festa como se fosse nossa. Os monitores tratam das crianças; os pais aproveitam.',
  },
] as const;

const chapters = [
  {
    phase: 'O início',
    title: 'Construído com as mãos',
    body: "O Virgílio Morouço criou o Pé d'Lama tijolo a tijolo, com paciência e capricho. Um espaço verde, cheio de vida, que se foi tornando num lugar especial para as famílias da região celebrarem.",
  },
  {
    phase: 'Janeiro 2026',
    title: 'A tempestade',
    body: "Uma tempestade severa arrancou árvores e danificou estruturas. Em poucas horas, o Pé d'Lama ficou irreconhecível.",
  },
  {
    phase: 'Março – Maio 2026',
    title: 'A reconstrução',
    body: 'Com a ajuda da família e de quem nunca deixou de acreditar no espaço, reconstruímos tudo — ramo a ramo, pedra a pedra.',
  },
  {
    phase: 'Hoje',
    title: 'Pronto para a vossa festa',
    body: "O Pé d'Lama está de volta: mais limpo, mais seguro e com a mesma alma de sempre. Agora, o que queremos é enchê-lo de festas.",
  },
] as const;

export default function SobrePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(sobreJsonLd) }}
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
                Quem Somos
              </span>
            </li>
          </ol>
        </nav>

        {/* Intro */}
        <header className="grid items-center gap-10 pb-12 pt-12 lg:grid-cols-[3fr_2fr] lg:pt-section">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-terracotta">
              Quem somos
            </p>
            <h1 className="mt-3 font-display text-display-lg text-forest">
              Um espaço de família, feito para as famílias
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-storm">
              O Pé d&apos;Lama é um espaço de festas de aniversário em
              Alcogulhe de Cima, Maceira, a poucos minutos de Leiria. Aqui as
              crianças brincam dentro e lá fora, acompanhadas por monitores,
              enquanto os pais relaxam — sem terem de se preocupar com o
              lanche, o bolo ou a arrumação.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-storm">
              A nossa ideia é simples:{' '}
              <em className="text-forest">
                aprender, explorar e crescer em contacto com a natureza.
              </em>
            </p>
          </div>
          <div className="flex justify-center">
            <Image
              src="/images/logopedlama.png"
              alt="Logótipo do Pé d'Lama — Natureza, Sentidos, Família"
              width={1000}
              height={1041}
              className="h-auto w-2/3 max-w-xs lg:w-full"
            />
          </div>
        </header>
      </div>

      {/* Valores */}
      <section className="bg-forest py-section">
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <h2 className="text-center font-display text-display-md text-cream">
            O que nos guia
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {values.map((value) => (
              <div key={value.title} className="rounded-lg bg-forest-light/40 p-8">
                <h3 className="font-display text-2xl text-terracotta-light">
                  {value.title}
                </h3>
                <p className="mt-3 leading-relaxed text-cream/85">{value.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* História */}
      <section className="bg-offwhite py-section lg:py-section-lg">
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <p className="text-xs font-bold uppercase tracking-widest text-terracotta">
            A nossa história
          </p>
          <h2 className="mt-3 font-display text-display-md text-forest">
            Levámos um tombo. <span className="italic">Levantámo-nos.</span>
          </h2>

          <div className="mt-10 grid gap-12 lg:grid-cols-2 lg:gap-16">
            <ol className="relative space-y-8 border-l-2 border-forest/15 pl-8">
              {chapters.map((chapter) => (
                <li key={chapter.phase} className="relative">
                  <span
                    className="absolute -left-[41px] top-1 h-4 w-4 rounded-full border-2 border-offwhite bg-terracotta"
                    aria-hidden="true"
                  />
                  <p className="text-xs font-bold uppercase tracking-widest text-terracotta">
                    {chapter.phase}
                  </p>
                  <h3 className="mt-1 font-display text-xl text-forest">
                    {chapter.title}
                  </h3>
                  <p className="mt-2 leading-relaxed text-storm">{chapter.body}</p>
                </li>
              ))}
            </ol>
            <div>
              <StormCarousel />
              <p className="mt-2 text-center text-sm text-storm">
                O espaço logo após a tempestade de janeiro de 2026.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Citação */}
      <section className="bg-cream py-section">
        <div className="mx-auto max-w-4xl px-4 text-center md:px-6 lg:px-8">
          <blockquote className="font-display text-2xl italic leading-relaxed text-forest md:text-3xl">
            &ldquo;Não estava nos meus planos desistir. Nunca esteve. Este
            espaço é feito de tempo, de suor e de memórias boas demais para
            abandonar.&rdquo;
          </blockquote>
          <footer className="mt-6 text-sm font-medium text-storm">
            — Virgílio Morouço, fundador do Pé d&apos;Lama
          </footer>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-terracotta py-section">
        <div className="mx-auto max-w-3xl px-4 text-center md:px-6 lg:px-8">
          <h2 className="font-display text-display-md text-cream">
            Venha conhecer o Pé d&apos;Lama
          </h2>
          <p className="mt-4 leading-relaxed text-cream/90">
            Quer marcar uma festa ou visitar o espaço primeiro? Fale connosco.
          </p>
          <ContactButtons tone="dark" className="mt-8 justify-center" />
          <Link
            href="/pacotes/"
            className="mt-6 inline-flex min-h-[44px] items-center font-bold text-cream underline underline-offset-4 hover:text-offwhite"
          >
            Ver preços →
          </Link>
        </div>
      </section>
    </>
  );
}
