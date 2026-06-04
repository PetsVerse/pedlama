import type { Metadata } from 'next';
import Link from 'next/link';

const PAGE_TITLE = "Política de Privacidade — Pé d'Lama";

// Substituir pelo email real quando confirmado
const CONTACT_EMAIL = 'geral@pedlama.pt';

const LAST_UPDATED = '4 de junho de 2026';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: { absolute: PAGE_TITLE },
    robots: { index: false, follow: false },
    alternates: {
      canonical: 'https://www.pedlama.pt/privacidade/',
    },
  };
}

export default function PrivacidadePage() {
  return (
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
              Política de Privacidade
            </span>
          </li>
        </ol>
      </nav>

      <div className="py-section lg:py-section-lg">
        <h1 className="text-center font-display text-display-lg text-forest">
          Política de Privacidade
        </h1>

        <article className="legal-prose mx-auto mt-10 max-w-3xl rounded-lg bg-cream p-8 md:p-10">
          <p className="text-sm text-storm/80">
            <strong>Última actualização:</strong> {LAST_UPDATED}
          </p>

          <h2>Responsável pelo Tratamento</h2>
          <p>
            O responsável pelo tratamento dos dados pessoais é{' '}
            <strong>Virgílio Morouço</strong>, na qualidade de proprietário do
            espaço Pé d&apos;Lama, com sede em Portugal, através do website{' '}
            <strong>pedlama.pt</strong> (domínio canónico: www.pedlama.pt).
          </p>

          <h2>Dados Recolhidos</h2>
          <p>
            Através do formulário de reservas (pedidos de contacto e orçamento),
            podemos recolher:
          </p>
          <ul>
            <li>Nome</li>
            <li>Email</li>
            <li>Telefone</li>
          </ul>
          <p>
            Opcionalmente: tipo de evento, data pretendida, número de convidados
            e mensagem livre.
          </p>

          <h2>Finalidade</h2>
          <p>
            Os dados são utilizados exclusivamente para responder aos teus
            pedidos de reserva, enviar orçamentos, confirmar disponibilidade e
            manter comunicação relacionada com o teu evento no Pé d&apos;Lama.
          </p>

          <h2>Conservação</h2>
          <p>
            Os dados de contacto são conservados apenas pelo tempo necessário
            para gerir o pedido e a relação comercial. Apagamos os dados após{' '}
            <strong>12 meses sem actividade</strong> relacionada com o teu
            pedido, salvo obrigação legal de conservação mais prolongada.
          </p>

          <h2>Direitos</h2>
          <p>
            Nos termos do Regulamento Geral de Protecção de Dados (RGPD), tens
            direito de acesso, rectificação, apagamento, limitação do
            tratamento, oposição e portabilidade dos teus dados. Para exercer
            estes direitos, contacta-nos por email.
          </p>

          <h2>Cookies</h2>
          <p>
            Este website pode utilizar cookies do{' '}
            <strong>Google Analytics</strong> para análise de tráfego e
            melhoria da experiência de utilização. Podes desactivar cookies no
            teu navegador ou através das ferramentas de opt-out do Google.
          </p>

          <h2>Contacto</h2>
          <p>
            Para questões sobre privacidade ou tratamento de dados, envia email
            para:{' '}
            {/* Substituir pelo email real */}
            <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
          </p>
        </article>
      </div>
    </div>
  );
}
