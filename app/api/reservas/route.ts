import { NextResponse } from 'next/server';

export interface ReservationPayload {
  nome: string;
  email: string;
  telefone: string;
  tipo_evento: 'festa infantil' | 'evento adultos' | 'outro';
  data_pretendida: string;
  num_convidados?: number;
  mensagem?: string;
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const VALID_TIPOS: ReservationPayload['tipo_evento'][] = [
  'festa infantil',
  'evento adultos',
  'outro',
];

function isValidPayload(body: unknown): body is ReservationPayload {
  if (!body || typeof body !== 'object') return false;

  const data = body as Record<string, unknown>;

  if (typeof data.nome !== 'string' || data.nome.trim().length === 0) {
    return false;
  }
  if (typeof data.email !== 'string' || !EMAIL_REGEX.test(data.email.trim())) {
    return false;
  }
  if (typeof data.telefone !== 'string' || data.telefone.trim().length === 0) {
    return false;
  }
  if (
    typeof data.tipo_evento !== 'string' ||
    !VALID_TIPOS.includes(data.tipo_evento as ReservationPayload['tipo_evento'])
  ) {
    return false;
  }
  if (
    typeof data.data_pretendida !== 'string' ||
    data.data_pretendida.trim().length === 0
  ) {
    return false;
  }

  if (data.num_convidados !== undefined && data.num_convidados !== null) {
    const n = Number(data.num_convidados);
    if (!Number.isFinite(n) || n < 1 || n > 300) return false;
  }

  if (data.mensagem !== undefined && typeof data.mensagem !== 'string') {
    return false;
  }

  return true;
}

export async function POST(request: Request) {
  try {
    const body: unknown = await request.json();

    if (!isValidPayload(body)) {
      return NextResponse.json(
        { error: 'Dados inválidos. Verifica os campos obrigatórios.' },
        { status: 400 }
      );
    }

    const payload: ReservationPayload = {
      nome: body.nome.trim(),
      email: body.email.trim().toLowerCase(),
      telefone: body.telefone.trim(),
      tipo_evento: body.tipo_evento,
      data_pretendida: body.data_pretendida,
      ...(body.num_convidados !== undefined && body.num_convidados !== null
        ? { num_convidados: Number(body.num_convidados) }
        : {}),
      ...(body.mensagem?.trim()
        ? { mensagem: body.mensagem.trim() }
        : {}),
    };

    console.log('[reservas]', new Date().toISOString(), payload);

    // TODO: integração Resend — enviar email de notificação
    // import { Resend } from 'resend';
    // const resend = new Resend(process.env.RESEND_API_KEY);
    // await resend.emails.send({
    //   from: 'Pé d\'Lama <reservas@pedlama.pt>',
    //   to: process.env.EMAIL_TO ?? 'pedlama.maceira@gmail.com',
    //   subject: `Nova reserva — ${payload.nome}`,
    //   html: `
    //     <h2>Novo pedido de reserva</h2>
    //     <p><strong>Nome:</strong> ${payload.nome}</p>
    //     <p><strong>Email:</strong> ${payload.email}</p>
    //     <p><strong>Telefone:</strong> ${payload.telefone}</p>
    //     <p><strong>Tipo:</strong> ${payload.tipo_evento}</p>
    //     <p><strong>Data:</strong> ${payload.data_pretendida}</p>
    //     ${payload.num_convidados ? `<p><strong>Convidados:</strong> ${payload.num_convidados}</p>` : ''}
    //     ${payload.mensagem ? `<p><strong>Mensagem:</strong> ${payload.mensagem}</p>` : ''}
    //   `,
    // });

    return NextResponse.json(
      { success: true, message: 'Pedido recebido com sucesso.' },
      { status: 200 }
    );
  } catch (error) {
    console.error('[reservas] erro interno:', error);
    return NextResponse.json(
      { error: 'Erro interno. Tenta novamente ou contacta-nos por email.' },
      { status: 500 }
    );
  }
}
