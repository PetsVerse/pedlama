import type { Metadata } from 'next';
import Link from 'next/link';

const PAGE_TITLE = "Termos e Condições — Pé d'Lama";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: { absolute: PAGE_TITLE },
    robots: { index: false, follow: false },
    alternates: {
      canonical: 'https://www.pedlama.pt/termos/',
    },
  };
}

export default function TermosPage() {
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
              Termos e Condições
            </span>
          </li>
        </ol>
      </nav>

      <div className="py-section lg:py-section-lg">
        <h1 className="text-center font-display text-display-lg text-forest">
          Termos e Condições
        </h1>

        <article className="legal-prose mx-auto mt-10 max-w-3xl rounded-lg bg-cream p-8 md:p-10">
          <h2>Identificação</h2>
          <p>
            O website pedlama.pt é gerido por <strong>Virgílio Morouço</strong>,
            proprietário do espaço Pé d&apos;Lama, com actividade em{' '}
            <strong>Portugal</strong>.
          </p>

          <h2>Serviços</h2>
          <p>
            O Pé d&apos;Lama disponibiliza um espaço para{' '}
            <strong>festas infantis e eventos de adultos</strong>, incluindo
            utilização do recinto, apoio na organização conforme pacotes
            acordados, e serviços complementares definidos em orçamento
            personalizado.
          </p>

          <h2>Reservas</h2>
          <p>
            Os pedidos efectuados através do website ou por contacto directo
            estão <strong>sujeitos a confirmação</strong> de disponibilidade
            por parte do Pé d&apos;Lama. A reserva só se considera vinculativa
            após aceitação expressa do orçamento e, quando aplicável, pagamento
            de <strong>sinal</strong> acordado entre as partes.
          </p>

          <h2>Cancelamentos</h2>
          <p>
            {/* Substituir quando a política estiver definida */}
            [POLÍTICA DE CANCELAMENTO] — A política de cancelamento e
            reembolso será comunicada no orçamento e confirmada pelo Virgílio
            Morouço em função da data do evento e dos custos já incorridos.
          </p>

          <h2>Responsabilidade</h2>
          <p>
            O organizador do evento é responsável pelo comportamento dos
            convidados e pelo cumprimento das regras de utilização do espaço.
            O Pé d&apos;Lama não se responsabiliza por objectos pessoais
            esquecidos no recinto, nem por danos resultantes de uso indevido das
            instalações, salvo dolo ou negligência grave comprovada.
          </p>

          <h2>Lei Aplicável</h2>
          <p>
            Estes termos regem-se pela <strong>lei portuguesa</strong>. Para
            resolução de litígios, fica estabelecido o foro da comarca de{' '}
            <strong>[COMARCA — preencher]</strong>, com renúncia a qualquer
            outro, salvo disposição legal imperativa em contrário.
          </p>
        </article>
      </div>
    </div>
  );
}
