import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import ContactButtons from '@/components/ui/ContactButtons';
import StormCarousel from '@/components/ui/StormCarousel';
import { BIRTHDAY_PRICING, FAQ } from '@/lib/site-config';

const PAGE_TITLE =
  "Pé d'Lama — Festas de Aniversário para Crianças em Maceira, Leiria";

const PAGE_DESCRIPTION =
  "Festas de aniversário para crianças em Maceira (Leiria): 1h30 de diversão com monitores, lanche e bolo incluídos, desde 18,50 € por criança. Espaço interior e exterior em contacto com a natureza.";

const OG_IMAGE = 'https://www.pedlama.pt/images/og-default.jpg';

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
          alt: "Pé d'Lama — festas de aniversário para crianças em Maceira",
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
  '@type': 'WebSite',
  name: "Pé d'Lama",
  url: 'https://www.pedlama.pt',
  inLanguage: 'pt-PT',
};

const steps = [
  {
    n: '1',
    title: '1h30 de diversão',
    body: 'Escorrega, piscina de bolas, jogos e espaço exterior — sempre com monitores a acompanhar as crianças.',
  },
  {
    n: '2',
    title: 'Lanche em sala própria',
    body: 'Depois da brincadeira, 30 a 45 minutos de lanche numa sala separada, só para a vossa festa.',
  },
  {
    n: '3',
    title: 'Bolo e parabéns',
    body: 'O bolo de aniversário está incluído. Vocês só têm de trazer a vela… e as meias antiderrapantes!',
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
      <section className="relative overflow-hidden bg-cream">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-12 md:px-6 md:py-16 lg:grid-cols-2 lg:gap-12 lg:px-8 lg:py-20">
          <div>
            <span className="inline-flex w-fit items-center rounded-full border border-forest/20 bg-offwhite px-4 py-1.5 text-sm font-medium text-forest">
              📍 Maceira · Leiria
            </span>
            <h1 className="mt-6 font-display text-display-xl text-forest">
              Festas de aniversário em contacto com a{' '}
              <span className="italic text-terracotta">natureza</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-storm md:text-xl">
              Aprender, explorar e crescer. Diversão com monitores, lanche,
              bolo e balões — tudo incluído. Os pais só têm de aparecer e
              aproveitar.
            </p>

            <p className="mt-6 text-forest">
              <span className="text-sm">Desde </span>
              <span className="font-display text-3xl font-bold">
                {BIRTHDAY_PRICING.fromPrice}
              </span>
              <span className="text-sm"> por criança · menu incluído</span>
            </p>

            <ContactButtons className="mt-8" />

            <Link
              href="/pacotes/"
              className="mt-5 inline-flex min-h-[44px] items-center text-base font-bold text-terracotta transition-colors hover:text-terracotta-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-terracotta"
            >
              Ver preçário completo →
            </Link>
          </div>

          <div className="relative flex justify-center">
            <Image
              src="/images/pezinho3.png"
              alt="Pezinho, a mascote do Pé d'Lama"
              width={1000}
              height={1487}
              className="h-auto w-2/3 max-h-[60vh] object-contain sm:w-1/2 lg:w-full"
              priority
            />
          </div>
        </div>
      </section>

      {/* ——— COMO FUNCIONA ——— */}
      <section className="bg-offwhite py-section lg:py-section-lg">
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <p className="text-center text-xs font-bold uppercase tracking-widest text-terracotta">
            Como funciona a festa
          </p>
          <h2 className="mt-3 text-center font-display text-display-lg text-forest">
            Simples para os pais, mágico para os miúdos
          </h2>

          <ol className="mt-12 grid gap-8 md:grid-cols-3">
            {steps.map((step) => (
              <li
                key={step.n}
                className="rounded-lg border border-forest/10 bg-cream p-8"
              >
                <span
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-terracotta font-display text-lg font-bold text-white"
                  aria-hidden="true"
                >
                  {step.n}
                </span>
                <h3 className="mt-4 font-display text-xl text-forest">
                  {step.title}
                </h3>
                <p className="mt-2 leading-relaxed text-storm">{step.body}</p>
              </li>
            ))}
          </ol>

          <div className="mt-12 rounded-lg bg-forest p-8 text-cream md:p-10">
            <h3 className="font-display text-2xl">Já está tudo incluído</h3>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {[...BIRTHDAY_PRICING.included, 'Bolo de aniversário', 'Lanche completo + bebidas'].map(
                (item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="text-terracotta-light" aria-hidden="true">
                      ✓
                    </span>
                    {item}
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
      </section>

      {/* ——— PREÇO ——— */}
      <section className="bg-cream py-section lg:py-section-lg">
        <div className="mx-auto max-w-3xl px-4 text-center md:px-6 lg:px-8">
          <p className="text-xs font-bold uppercase tracking-widest text-terracotta">
            Preço
          </p>
          <h2 className="mt-3 font-display text-display-lg text-forest">
            Aniversários com menu incluído
          </h2>
          <p className="mt-4 text-storm">{BIRTHDAY_PRICING.duration}</p>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {BIRTHDAY_PRICING.tiers.map((tier) => (
              <div
                key={tier.label}
                className="rounded-lg border border-forest/15 bg-offwhite p-6"
              >
                <p className="text-sm font-medium text-storm">{tier.label}</p>
                <p className="mt-2 font-display text-4xl font-bold text-forest">
                  {tier.price}
                </p>
                <p className="text-sm text-storm">por criança</p>
              </div>
            ))}
          </div>
          <p className="mt-4 text-sm text-storm">
            Valor mínimo por festa: {BIRTHDAY_PRICING.minimum}
          </p>

          <Link
            href="/pacotes/"
            className="mt-8 inline-flex min-h-[48px] items-center justify-center rounded-md bg-forest px-8 text-base font-bold text-cream transition-colors hover:bg-forest-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-terracotta"
          >
            Ver menu e condições
          </Link>
        </div>
      </section>

      {/* ——— O ESPAÇO ——— */}
      <section className="bg-offwhite py-section lg:py-section-lg">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 md:px-6 lg:grid-cols-2 lg:gap-20 lg:px-8">
          <div className="order-2 flex justify-center lg:order-1">
            <Image
              src="/images/pezinho1.png"
              alt=""
              width={1000}
              height={1000}
              className="h-auto w-2/3 max-w-sm object-contain"
            />
          </div>
          <div className="order-1 lg:order-2">
            <p className="text-xs font-bold uppercase tracking-widest text-terracotta">
              O espaço
            </p>
            <h2 className="mt-3 font-display text-display-lg text-forest">
              Brincar dentro e lá fora
            </h2>
            <p className="mt-6 leading-relaxed text-storm">
              O Pé d&apos;Lama tem uma zona interior de diversão — com
              escorrega e piscina de bolas — e um espaço exterior verde, para
              as crianças correrem, explorarem e brincarem em contacto com a
              natureza.
            </p>
            <p className="mt-4 leading-relaxed text-storm">
              Os lanches são servidos em salas separadas, para que cada festa
              tenha o seu momento. Se preferirem o espaço só para a vossa
              festa, também é possível.
            </p>
            <p className="mt-6 text-xs font-bold uppercase tracking-widest text-forest">
              Natureza · Sentidos · Família
            </p>
          </div>
        </div>
      </section>

      {/* ——— OUTROS EVENTOS ——— */}
      <section className="bg-forest py-section lg:py-section-lg">
        <div className="mx-auto max-w-4xl px-4 text-center md:px-6 lg:px-8">
          <p className="text-xs font-bold uppercase tracking-widest text-terracotta-light">
            Aluguer do espaço
          </p>
          <h2 className="mt-3 font-display text-display-lg text-cream">
            Também para batizados, aniversários de adultos e outros eventos
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-cream/80">
            Encontros de família, comemorações entre amigos ou eventos de
            empresa — o Pé d&apos;Lama pode ser vosso. Condições sob consulta.
          </p>
          <ContactButtons
            kind="event"
            tone="dark"
            className="mt-10 justify-center"
          />
        </div>
      </section>

      {/* ——— ANTES E DEPOIS ——— */}
      <section className="bg-cream py-section lg:py-section-lg">
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <StormCarousel />
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-terracotta">
                Antes e depois
              </p>
              <h2 className="mt-3 font-display text-display-md text-forest">
                Levámos um tombo. <span className="italic">Levantámo-nos.</span>
              </h2>
              <p className="mt-6 leading-relaxed text-storm">
                Em janeiro de 2026 uma tempestade deitou abaixo árvores e
                estruturas do Pé d&apos;Lama. Com trabalho e a ajuda de muita
                gente, reconstruímos tudo — e o espaço está hoje mais seguro e
                mais bonito do que nunca.
              </p>
              <Link
                href="/sobre/"
                className="mt-6 inline-flex min-h-[44px] items-center text-base font-bold text-terracotta transition-colors hover:text-terracotta-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-terracotta"
              >
                Conhecer a nossa história →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ——— FAQ ——— */}
      <section className="bg-offwhite py-section lg:py-section-lg">
        <div className="mx-auto max-w-3xl px-4 md:px-6 lg:px-8">
          <h2 className="text-center font-display text-display-lg text-forest">
            Perguntas frequentes
          </h2>
          <div className="mt-10 divide-y divide-forest/10 border-y border-forest/10">
            {FAQ.slice(0, 5).map((item) => (
              <details key={item.q} className="group py-2">
                <summary className="flex min-h-[48px] cursor-pointer list-none items-center justify-between gap-4 font-medium text-forest">
                  {item.q}
                  <span
                    className="text-terracotta transition-transform group-open:rotate-45"
                    aria-hidden="true"
                  >
                    +
                  </span>
                </summary>
                <p className="pb-4 leading-relaxed text-storm">{item.a}</p>
              </details>
            ))}
          </div>
          <p className="mt-6 text-center">
            <Link
              href="/pacotes/#faq"
              className="inline-flex min-h-[44px] items-center font-bold text-terracotta hover:text-terracotta-dark"
            >
              Ver todas as perguntas →
            </Link>
          </p>
        </div>
      </section>

      {/* ——— CTA FINAL ——— */}
      <section className="bg-terracotta py-section lg:py-section-lg">
        <div className="mx-auto max-w-3xl px-4 text-center md:px-6 lg:px-8">
          <h2 className="font-display text-display-lg text-cream">
            Vamos marcar a festa?
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-cream/90">
            Diga-nos a data e o número de crianças — respondemos com a
            disponibilidade o mais depressa possível.
          </p>
          <ContactButtons tone="dark" className="mt-10 justify-center" />
        </div>
      </section>
    </>
  );
}
