import type { Metadata } from 'next';
import Link from 'next/link';

const PAGE_TITLE = "Pacotes de Festas e Eventos — Pé d'Lama";

const PAGE_DESCRIPTION =
  'Pacotes de festa infantil e eventos para adultos no Pé d\'Lama, Portugal. Festas à medida na natureza — orçamento sem compromisso para famílias, grupos e mais.';

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
          alt: "Pacotes de festas e eventos no Pé d'Lama",
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
      name: 'Pacotes',
      item: 'https://www.pedlama.pt/pacotes/',
    },
  ],
};

interface PackageCard {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  note: string;
  highlighted?: boolean;
}

const packages: PackageCard[] = [
  {
    id: 'infantil',
    title: 'Festa Infantil',
    subtitle: 'Para os 3 aos 12 anos',
    description:
      'Um espaço verde, seguro e amplo, cheio de natureza à volta das crianças. A nossa equipa apoia-vos em cada detalhe para que o dia corra sem stress — só tenham de chegar e celebrar.',
    features: [
      'Espaço exterior amplo e vedado',
      'Área de jogos e atividades',
      'Apoio na decoração e montagem',
      'Instalações sanitárias',
      'Estacionamento',
      'Até 50 convidados',
    ],
    note: 'Animação e catering disponíveis como extra',
  },
  {
    id: 'completo',
    title: 'Pacote Completo',
    subtitle: 'A opção sem preocupações',
    description:
      'Deixas tudo connosco — apareces e celebras. Coordenamos decoração, animação e catering para que a vossa festa seja exactamente como a sonham, sem correrias no dia.',
    features: [
      'Tudo do pacote base incluído',
      'Decoração temática',
      'Animação profissional',
      'Coordenação no dia',
      'Catering',
      'Personalizado a 100%',
    ],
    note: 'Preço mediante consulta — pedido de orçamento sem compromisso',
    highlighted: true,
  },
  {
    id: 'adultos',
    title: 'Evento de Adultos',
    subtitle: 'Reuniões, comemorações e mais',
    description:
      'Reformas de anos, aniversários, reuniões de família ou encontros entre amigos — um ambiente diferente, com natureza e liberdade para configurar o espaço à vossa medida.',
    features: [
      'Espaço coberto e descoberto',
      'Até 100 pessoas',
      'Bar de apoio',
      'Estacionamento amplo',
      'Espaço verde',
      'Flexibilidade de configuração',
    ],
    note: 'Disponível para eventos diurnos e nocturnos',
  },
];

function FeatureList({
  features,
  highlighted,
}: {
  features: string[];
  highlighted?: boolean;
}) {
  return (
    <ul className="mt-6 space-y-3">
      {features.map((feature) => (
        <li
          key={feature}
          className={`flex items-start gap-3 text-sm ${
            highlighted ? 'text-cream/80' : 'text-storm'
          }`}
        >
          <span
            className={`mt-0.5 shrink-0 font-bold ${
              highlighted ? 'text-terracotta-light' : 'text-terracotta'
            }`}
            aria-hidden="true"
          >
            ✓
          </span>
          {feature}
        </li>
      ))}
    </ul>
  );
}

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
                Pacotes
              </span>
            </li>
          </ol>
        </nav>

        <header className="py-section text-center lg:max-w-3xl lg:mx-auto lg:py-section-lg">
          <h1 className="font-display text-display-lg text-forest">
            Festas que ficam na memória
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-storm">
            Escolhe o pacote ideal para a tua celebração ou pede-nos algo feito
            à medida. Respondemos com orçamento claro — sem compromisso.
          </p>
        </header>
      </div>

      <section className="pb-section lg:pb-section-lg">
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-3 lg:gap-6 lg:items-stretch">
            {packages.map((pkg) => {
              const highlighted = pkg.highlighted === true;

              return (
                <article
                  key={pkg.id}
                  className={`relative flex flex-col rounded-lg border p-8 ${
                    highlighted
                      ? 'border-forest bg-forest lg:scale-[1.02] lg:shadow-xl'
                      : 'border-forest/15 bg-cream'
                  }`}
                >
                  {highlighted && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-terracotta px-4 py-1 text-xs font-bold uppercase tracking-wider text-cream">
                      Mais popular
                    </span>
                  )}

                  <h2
                    className={`font-display text-2xl ${
                      highlighted ? 'text-cream' : 'text-forest'
                    }`}
                  >
                    {pkg.title}
                  </h2>
                  <p
                    className={`mt-1 text-sm font-medium ${
                      highlighted ? 'text-terracotta-light' : 'text-terracotta'
                    }`}
                  >
                    {pkg.subtitle}
                  </p>
                  <p
                    className={`mt-4 flex-1 text-sm leading-relaxed ${
                      highlighted ? 'text-cream/85' : 'text-storm'
                    }`}
                  >
                    {pkg.description}
                  </p>

                  <FeatureList
                    features={pkg.features}
                    highlighted={highlighted}
                  />

                  <p
                    className={`mt-6 text-sm italic ${
                      highlighted ? 'text-cream/70' : 'text-storm/80'
                    }`}
                  >
                    {pkg.note}
                  </p>

                  <Link
                    href="/reservas/"
                    className={`mt-8 inline-flex min-h-[44px] items-center justify-center rounded-md px-6 text-center text-sm font-bold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${
                      highlighted
                        ? 'bg-terracotta text-white hover:bg-terracotta-dark focus-visible:outline-cream'
                        : 'bg-forest text-cream hover:bg-forest-dark focus-visible:outline-terracotta'
                    }`}
                  >
                    Pedir Orçamento
                  </Link>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-cream py-section text-center lg:py-section-lg">
        <div className="mx-auto max-w-2xl px-4 md:px-6 lg:px-8">
          <h2 className="font-display text-display-md text-forest">
            Tens dúvidas?
          </h2>
          <p className="mt-4 text-storm">
            Estamos disponíveis para esclarecer tudo sobre pacotes, datas e
            personalização.
          </p>
          <Link
            href="/contacto/"
            className="mt-6 inline-flex min-h-[44px] items-center text-base font-bold text-terracotta transition-colors hover:text-terracotta-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-terracotta"
          >
            Falar connosco →
          </Link>
        </div>
      </section>
    </>
  );
}
