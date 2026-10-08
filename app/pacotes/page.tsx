import type { Metadata } from 'next';
import Link from 'next/link';
import ContactButtons from '@/components/ui/ContactButtons';
import { BIRTHDAY_PRICING, FAQ } from '@/lib/site-config';

const PAGE_TITLE = "Preços — Festas de Aniversário | Pé d'Lama, Maceira";

const PAGE_DESCRIPTION =
  'Preçário das festas de aniversário no Pé d\'Lama, Maceira (Leiria): 19 € por criança (18,50 € acima de 20), menu, bolo, balões e convites incluídos. Aluguer para outros eventos sob consulta.';

const OG_IMAGE = 'https://www.pedlama.pt/images/og-pacotes.jpg';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: { absolute: PAGE_TITLE },
    description: PAGE_DESCRIPTION,
    robots: { index: true, follow: true },
    alternates: {
      canonical: 'https://www.pedlama.pt/pacotes/',
      languages: { 'pt-PT': 'https://www.pedlama.pt/pacotes/' },
    },
    openGraph: {
      title: PAGE_TITLE,
      description: PAGE_DESCRIPTION,
      url: 'https://www.pedlama.pt/pacotes/',
      siteName: "Pé d'Lama",
      locale: 'pt_PT',
      type: 'website',
      images: [
        {
          url: OG_IMAGE,
          width: 1200,
          height: 630,
          alt: "Preçário das festas de aniversário no Pé d'Lama",
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

const pacotesJsonLd = {
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
          name: 'Preços',
          item: 'https://www.pedlama.pt/pacotes/',
        },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: FAQ.map((item) => ({
        '@type': 'Question',
        name: item.q,
        acceptedAnswer: { '@type': 'Answer', text: item.a },
      })),
    },
  ],
};

export default function PacotesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pacotesJsonLd) }}
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
                Preços
              </span>
            </li>
          </ol>
        </nav>

        <header className="pb-10 pt-12 text-center lg:mx-auto lg:max-w-3xl lg:pt-section">
          <p className="text-xs font-bold uppercase tracking-widest text-terracotta">
            Preçário
          </p>
          <h1 className="mt-3 font-display text-display-lg text-forest">
            Aniversários com menu incluído
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-storm">
            {BIRTHDAY_PRICING.duration}. Monitores, lanche, bolo, balões e
            convites — tudo num só preço por criança.
          </p>
        </header>
      </div>

      {/* Preço + menu */}
      <section className="bg-offwhite py-12 lg:py-section">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 md:px-6 lg:grid-cols-2 lg:px-8">
          <div className="rounded-lg border-2 border-terracotta/40 bg-cream p-8 md:p-10">
            <h2 className="font-display text-2xl text-forest">Preço</h2>
            <dl className="mt-6 divide-y divide-forest/10">
              {BIRTHDAY_PRICING.tiers.map((tier) => (
                <div
                  key={tier.label}
                  className="flex items-baseline justify-between gap-4 py-4"
                >
                  <dt className="text-storm">{tier.label}</dt>
                  <dd className="text-right">
                    <span className="font-display text-3xl font-bold text-forest">
                      {tier.price}
                    </span>
                    <span className="block text-xs text-storm">por criança</span>
                  </dd>
                </div>
              ))}
              <div className="flex items-baseline justify-between gap-4 py-4">
                <dt className="text-storm">Valor mínimo por festa</dt>
                <dd className="font-bold text-forest">
                  {BIRTHDAY_PRICING.minimum}
                </dd>
              </div>
            </dl>

            <h3 className="mt-8 text-xs font-bold uppercase tracking-widest text-terracotta">
              Extras opcionais
            </h3>
            <ul className="mt-3 space-y-2">
              {BIRTHDAY_PRICING.extras.map((extra) => (
                <li
                  key={extra.label}
                  className="flex justify-between gap-4 text-storm"
                >
                  <span>{extra.label}</span>
                  <span className="font-bold text-forest">{extra.price}</span>
                </li>
              ))}
            </ul>

            <h3 className="mt-8 text-xs font-bold uppercase tracking-widest text-terracotta">
              Incluído
            </h3>
            <ul className="mt-3 space-y-2 text-storm">
              {BIRTHDAY_PRICING.included.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="text-forest" aria-hidden="true">
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-lg border border-forest/10 bg-cream p-8 md:p-10">
            <h2 className="font-display text-2xl text-forest">Menu do lanche</h2>
            <ul className="mt-6 space-y-3 text-storm">
              {BIRTHDAY_PRICING.menu.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span
                    className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-terracotta"
                    aria-hidden="true"
                  />
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm text-storm">
              Opção de fruta natural: acréscimo de 1 € por criança.
            </p>

            <div className="mt-8 rounded-md bg-terracotta/10 p-5 text-sm text-forest">
              <p className="font-bold">Meias antiderrapantes obrigatórias</p>
              <p className="mt-1 text-storm">
                Para a segurança de todos na zona de diversão.
              </p>
            </div>

            <h3 className="mt-8 text-xs font-bold uppercase tracking-widest text-terracotta">
              Pagamento
            </h3>
            <p className="mt-3 leading-relaxed text-storm">
              {BIRTHDAY_PRICING.payment}
            </p>
          </div>
        </div>

        <div className="mx-auto mt-12 max-w-3xl px-4 text-center md:px-6 lg:px-8">
          <p className="font-display text-xl text-forest">
            Quer saber se a sua data está livre?
          </p>
          <p className="mt-2 text-storm">
            Para dias, horários e disponibilidade, fale connosco.
          </p>
          <ContactButtons className="mt-6 justify-center" />
        </div>
      </section>

      {/* Outros eventos */}
      <section className="bg-forest py-section">
        <div className="mx-auto max-w-3xl px-4 text-center md:px-6 lg:px-8">
          <h2 className="font-display text-display-md text-cream">
            Aluguer do espaço para outros eventos
          </h2>
          <p className="mt-4 leading-relaxed text-cream/80">
            Batizados, aniversários de adultos, encontros de família ou de
            empresa. Espaço interior e exterior, em contacto com a natureza.
          </p>
          <p className="mt-6 font-display text-2xl text-terracotta-light">
            Preço sob consulta
          </p>
          <ContactButtons
            kind="event"
            tone="dark"
            className="mt-8 justify-center"
          />
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="scroll-mt-24 bg-cream py-section">
        <div className="mx-auto max-w-3xl px-4 md:px-6 lg:px-8">
          <h2 className="text-center font-display text-display-md text-forest">
            Perguntas frequentes
          </h2>
          <div className="mt-10 divide-y divide-forest/10 border-y border-forest/10">
            {FAQ.map((item) => (
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
        </div>
      </section>
    </>
  );
}
