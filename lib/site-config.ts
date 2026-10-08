/**
 * Chave do Web3Forms (grátis, envia os pedidos para o Gmail).
 * Enquanto não estiver definida, o formulário de reservas fica escondido
 * e os contactos são feitos por WhatsApp / email.
 */
export const WEB3FORMS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_KEY ?? '';

/** Formulário de reservas online só aparece quando há chave do Web3Forms */
export const RESERVATIONS_LIVE = WEB3FORMS_KEY.length > 0;

export const prelaunchHidden = RESERVATIONS_LIVE ? '' : 'hidden';

export function isPrelaunchNavLink(href: string): boolean {
  return href === '/reservas/';
}

export function prelaunchNavHidden(href: string): string {
  return !RESERVATIONS_LIVE && isPrelaunchNavLink(href) ? 'hidden' : '';
}

export const CONTACT = {
  email: 'pedlama.maceira@gmail.com',
  phone: '+351 915 716 693',
  phoneHref: '+351915716693',
  whatsappNumber: '351915716693',
  streetAddress: 'Estrada 356-1 n.º 11, Alcogulhe de Cima',
  postalCode: '2405-003',
  locality: 'Maceira',
  region: 'Leiria',
  latitude: 39.703778,
  longitude: -8.866861,
  instagram: 'https://www.instagram.com/pedlama.maceira/',
  facebook: 'https://www.facebook.com/profile.php?id=61591089437946',
} as const;

export const FULL_ADDRESS = `${CONTACT.streetAddress}, ${CONTACT.postalCode} ${CONTACT.locality}`;

export const MAPS_DIRECTIONS_URL = `https://www.google.com/maps/dir/?api=1&destination=${CONTACT.latitude},${CONTACT.longitude}`;

const DEFAULT_WHATSAPP_MESSAGE =
  "Olá! Gostaria de saber mais sobre as festas no Pé d'Lama.";

export function whatsappUrl(message: string = DEFAULT_WHATSAPP_MESSAGE): string {
  return `https://wa.me/${CONTACT.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export const BIRTHDAY_WHATSAPP_MESSAGE =
  "Olá! Gostaria de marcar uma festa de aniversário no Pé d'Lama.\n\nData pretendida:\nNome e idade da criança:\nN.º de crianças (aprox.):";

export const EVENT_WHATSAPP_MESSAGE =
  "Olá! Gostaria de pedir informações sobre o aluguer do espaço Pé d'Lama para um evento.\n\nTipo de evento:\nData pretendida:\nN.º de pessoas (aprox.):";

export function mailtoUrl(subject: string, body: string): string {
  return `mailto:${CONTACT.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

export const BIRTHDAY_MAILTO = mailtoUrl(
  'Pedido de festa de aniversário',
  "Olá!\n\nGostaria de marcar uma festa de aniversário no Pé d'Lama.\n\nData pretendida:\nNome e idade da criança:\nN.º de crianças (aprox.):\nContacto telefónico:\n\nObrigado!"
);

export const EVENT_MAILTO = mailtoUrl(
  'Pedido de informação — aluguer do espaço',
  "Olá!\n\nGostaria de pedir informações sobre o aluguer do espaço Pé d'Lama.\n\nTipo de evento:\nData pretendida:\nN.º de pessoas (aprox.):\nContacto telefónico:\n\nObrigado!"
);

/** Preçário — aniversários com menu incluído */
export const BIRTHDAY_PRICING = {
  duration: 'Diversão 1h30 + lanche 30 a 45 minutos',
  tiers: [
    { label: 'De 12 a 20 crianças', price: '19,00 €' },
    { label: 'Mais de 20 crianças', price: '18,50 €' },
  ],
  fromPrice: '18,50 €',
  minimum: '228,00 €',
  menu: [
    'Folhados de salsicha',
    'Sandes mistas: pão normal, pão de leite e croissants',
    'Batatas fritas',
    'Gelatina ou gelados',
    'Bolo de aniversário',
    'Guloseimas: rebuçados de fruta',
    'Água + 2 bebidas à escolha: Ice Tea, Coca-Cola ou sumo de laranja',
  ],
  extras: [
    { label: 'Fruta natural', price: '+1 € por criança' },
    { label: 'Exclusividade do espaço', price: '+100 €' },
  ],
  included: [
    'Balões para todos',
    'Convites com mapa de localização',
    'Monitores a acompanhar as crianças',
    'Lanche em sala separada',
  ],
  payment:
    'É pedido um sinal de 50 € no momento da marcação; o restante é pago até ao fim da festa, em dinheiro, MB Way ou Multibanco.',
} as const;

export const FAQ = [
  {
    q: 'Quantas crianças são precisas para marcar uma festa?',
    a: 'O preço é por criança, a partir de 12 crianças. O valor mínimo por festa é de 228 €.',
  },
  {
    q: 'As crianças ficam acompanhadas?',
    a: 'Sim. Durante toda a festa as crianças são acompanhadas pelos nossos monitores.',
  },
  {
    q: 'O espaço é só para a nossa festa?',
    a: 'O espaço de diversão pode ser partilhado com outras festas, mas o lanche é sempre numa sala separada. Se preferirem o espaço só para vós, a exclusividade tem um acréscimo de 100 €.',
  },
  {
    q: 'É preciso levar alguma coisa?',
    a: 'Sim — meias antiderrapantes, de uso obrigatório. Os convites com mapa, os balões, o lanche e o bolo já estão incluídos.',
  },
  {
    q: 'Como funciona o pagamento?',
    a: 'Pedimos um sinal de 50 € na marcação. O restante é pago até ao fim da festa, em dinheiro, MB Way ou Multibanco.',
  },
  {
    q: 'Que dias e horários têm disponíveis?',
    a: 'Os horários variam consoante a agenda. Fale connosco por WhatsApp, telefone ou email e indicamos as datas livres.',
  },
  {
    q: 'Também alugam o espaço para outros eventos?',
    a: 'Sim — batizados, aniversários de adultos, encontros de família ou de empresa. As condições são sob consulta.',
  },
] as const;
