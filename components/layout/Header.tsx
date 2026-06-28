'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useId, useState } from 'react';

const navLinks = [
  { href: '/sobre/', label: 'A Nossa História' },
  { href: '/galeria/', label: 'Galeria' },
  { href: '/pacotes/', label: 'Pacotes' },
  { href: '/contacto/', label: 'Contacto' },
] as const;

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const menuId = useId();

  useEffect(() => {
    if (!isOpen) return;

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsOpen(false);
    };

    document.addEventListener('keydown', handleEscape);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-forest/10 bg-offwhite/95 backdrop-blur-sm">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 md:h-20 md:px-6 lg:px-8">
        <Link
          href="/"
          className="inline-flex min-h-[44px] items-center gap-2.5 font-display text-xl text-forest transition-colors duration-200 hover:text-terracotta focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-terracotta md:gap-3 md:text-2xl"
        >
          <Image
            src="/images/logo.png"
            alt=""
            width={88}
            height={88}
            className="h-[72px] w-[72px] shrink-0 object-contain md:h-[88px] md:w-[88px]"
            priority
          />
          Pé d&apos;Lama
        </Link>

        <nav
          className="hidden items-center gap-1 lg:flex"
          aria-label="Navegação principal"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="inline-flex min-h-[44px] items-center rounded-md px-3 text-sm font-medium text-storm transition-colors hover:text-forest focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-terracotta"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/reservas/"
            className="ml-2 inline-flex min-h-[44px] items-center rounded-md bg-terracotta px-5 text-sm font-bold text-white transition-colors hover:bg-terracotta-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-forest"
          >
            Reservar
          </Link>
        </nav>

        <button
          type="button"
          className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-md text-forest transition-colors hover:text-terracotta focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-terracotta lg:hidden"
          aria-expanded={isOpen}
          aria-controls={menuId}
          aria-label={isOpen ? 'Fechar menu' : 'Abrir menu'}
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <span className="sr-only">{isOpen ? 'Fechar menu' : 'Abrir menu'}</span>
          <span className="relative flex h-5 w-6 flex-col justify-between" aria-hidden="true">
            <span
              className={`block h-0.5 w-full origin-center rounded-full bg-current transition-all duration-300 ease-out ${
                isOpen ? 'translate-y-[9px] rotate-45' : ''
              }`}
            />
            <span
              className={`block h-0.5 w-full rounded-full bg-current transition-all duration-300 ease-out ${
                isOpen ? 'scale-x-0 opacity-0' : ''
              }`}
            />
            <span
              className={`block h-0.5 w-full origin-center rounded-full bg-current transition-all duration-300 ease-out ${
                isOpen ? '-translate-y-[9px] -rotate-45' : ''
              }`}
            />
          </span>
        </button>
      </div>

      <nav
        id={menuId}
        className={`border-t border-forest/10 bg-offwhite/98 lg:hidden ${
          isOpen ? 'animate-fade-in block' : 'hidden'
        }`}
        aria-label="Navegação mobile"
        aria-hidden={!isOpen}
      >
        <ul className="mx-auto flex max-w-7xl flex-col px-4 py-3 md:px-6">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="flex min-h-[44px] items-center border-b border-forest/5 text-base font-medium text-storm transition-colors hover:text-forest focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-terracotta"
                onClick={closeMenu}
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li className="pt-2">
            <Link
              href="/reservas/"
              className="flex min-h-[44px] items-center justify-center rounded-md bg-terracotta px-5 text-base font-bold text-white transition-colors hover:bg-terracotta-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-forest"
              onClick={closeMenu}
            >
              Reservar
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
