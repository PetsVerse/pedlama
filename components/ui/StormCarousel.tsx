'use client';

import Image from 'next/image';
import { useCallback, useState } from 'react';

const STORM_PHOTOS = [
  {
    src: '/images/pedlama1.jpg',
    alt: 'Árvores derrubadas no espaço Pé d\'Lama pela tempestade de fevereiro de 2026',
  },
  {
    src: '/images/pedlama2.jpg',
    alt: 'Tronco partido pela força da tempestade no Pé d\'Lama',
  },
  {
    src: '/images/pedlama3.jpg',
    alt: 'Árvore arrancada pela raiz no jardim do Pé d\'Lama',
  },
  {
    src: '/images/pedlama4.jpg',
    alt: 'Danos causados pela tempestade de 2026 no espaço Pé d\'Lama',
  },
  {
    src: '/images/pedlama5.jpg',
    alt: 'Vista geral dos estragos da tempestade no Pé d\'Lama',
  },
] as const;

const TOTAL = STORM_PHOTOS.length;

export default function StormCarousel() {
  const [current, setCurrent] = useState(0);

  const goTo = useCallback((index: number) => {
    setCurrent((index + TOTAL) % TOTAL);
  }, []);

  const goPrevious = useCallback(() => {
    goTo(current - 1);
  }, [current, goTo]);

  const goNext = useCallback(() => {
    goTo(current + 1);
  }, [current, goTo]);

  return (
    <div className="relative">
      <div
        className="relative aspect-[4/3] overflow-hidden rounded-lg bg-storm/15"
        role="region"
        aria-roledescription="carrossel"
        aria-label="Fotos da tempestade de fevereiro de 2026 no Pé d'Lama"
      >
        {STORM_PHOTOS.map((photo, index) => (
          <div
            key={photo.src}
            className={`absolute inset-0 transition-opacity duration-300 ${
              index === current ? 'opacity-100' : 'pointer-events-none opacity-0'
            }`}
            aria-hidden={index !== current}
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
              priority={index === 0}
            />
          </div>
        ))}

        <button
          type="button"
          onClick={goPrevious}
          className="absolute left-3 top-1/2 z-10 inline-flex min-h-[44px] min-w-[44px] -translate-y-1/2 items-center justify-center rounded-full bg-offwhite/90 text-xl font-bold text-terracotta shadow-sm transition-colors hover:bg-offwhite focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-terracotta"
          aria-label="Foto anterior"
        >
          ←
        </button>

        <button
          type="button"
          onClick={goNext}
          className="absolute right-3 top-1/2 z-10 inline-flex min-h-[44px] min-w-[44px] -translate-y-1/2 items-center justify-center rounded-full bg-offwhite/90 text-xl font-bold text-terracotta shadow-sm transition-colors hover:bg-offwhite focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-terracotta"
          aria-label="Foto seguinte"
        >
          →
        </button>

        <span
          className="absolute bottom-3 right-3 z-20 rounded-md bg-forest px-3 py-1 text-xs font-bold text-cream"
          aria-hidden="true"
        >
          Fevereiro 2026
        </span>
      </div>

      <div
        className="mt-4 flex items-center justify-center gap-2"
        role="tablist"
        aria-label="Selecionar foto da tempestade"
      >
        {STORM_PHOTOS.map((photo, index) => (
          <button
            key={photo.src}
            type="button"
            role="tab"
            aria-selected={index === current}
            aria-label={`Ver foto ${index + 1} de ${TOTAL}`}
            onClick={() => goTo(index)}
            className={`h-2.5 w-2.5 rounded-full transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-terracotta ${
              index === current ? 'bg-terracotta' : 'bg-forest/30'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
