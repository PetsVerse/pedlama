import Link from 'next/link';

const navLinks = [
  { href: '/sobre/', label: 'A Nossa História' },
  { href: '/galeria/', label: 'Galeria' },
  { href: '/pacotes/', label: 'Pacotes' },
  { href: '/contacto/', label: 'Contacto' },
  { href: '/reservas/', label: 'Reservar' },
] as const;

const legalLinks = [
  { href: '/privacidade/', label: 'Privacidade' },
  { href: '/termos/', label: 'Termos' },
] as const;

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-forest text-cream/80">
      {/* ADSENSE SLOT: footer-banner */}
      <div className="mx-auto max-w-7xl px-4 py-12 md:px-6 md:py-16 lg:px-8">
        <div className="grid gap-10 md:grid-cols-3 md:gap-8">
          <div>
            <p className="font-display text-2xl text-cream">Pé d&apos;Lama</p>
            <p className="mt-3 text-sm leading-relaxed text-cream/80">
              Um espaço com história. Festas com alma.
            </p>
            <p className="mt-4 text-xs tracking-wide text-cream/60">
              Natureza · Sentidos · Família
            </p>
          </div>

          <nav aria-label="Links do site">
            <h2 className="text-xs font-bold uppercase tracking-wider text-cream">
              Navegação
            </h2>
            <ul className="mt-4 space-y-1">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="inline-flex min-h-[44px] items-center text-sm text-cream/80 transition-colors hover:text-cream focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cream"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Informação legal">
            <h2 className="text-xs font-bold uppercase tracking-wider text-cream">
              Legal
            </h2>
            <ul className="mt-4 space-y-1">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="inline-flex min-h-[44px] items-center text-sm text-cream/80 transition-colors hover:text-cream focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cream"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-12 border-t border-cream/15 pt-8 text-center">
          <p className="font-display text-lg italic text-cream">
            De pé outra vez. Sempre.
          </p>
          <p className="mt-4 text-xs text-cream/60">
            © {year} Pé d&apos;Lama · Virgílio Morouço · Portugal
          </p>
        </div>
      </div>
    </footer>
  );
}
