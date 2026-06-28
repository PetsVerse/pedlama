/** Ocultar pacotes e reservas até o sistema estar activo */
export const RESERVATIONS_LIVE = false;

export const prelaunchHidden = RESERVATIONS_LIVE ? '' : 'hidden';

export function isPrelaunchNavLink(href: string): boolean {
  return href === '/pacotes/' || href === '/reservas/';
}

export function prelaunchNavHidden(href: string): string {
  return !RESERVATIONS_LIVE && isPrelaunchNavLink(href) ? 'hidden' : '';
}
