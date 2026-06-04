'use client';

import Link from 'next/link';
import { useMemo, useState } from 'react';
import type { ReservationPayload } from '@/app/api/reservas/route';

type FormStatus = 'idle' | 'loading' | 'success' | 'error';

interface FormData {
  nome: string;
  email: string;
  telefone: string;
  tipo_evento: ReservationPayload['tipo_evento'] | '';
  data_pretendida: string;
  num_convidados: string;
  mensagem: string;
}

const INITIAL_FORM: FormData = {
  nome: '',
  email: '',
  telefone: '',
  tipo_evento: '',
  data_pretendida: '',
  num_convidados: '',
  mensagem: '',
};

const inputClass =
  'w-full min-h-[44px] rounded-sm border border-forest/20 bg-offwhite px-4 py-2 text-storm transition-colors focus:border-forest focus:outline-none focus:ring-1 focus:ring-forest/30';

const FALLBACK_EMAIL = 'geral@pedlama.pt';

export default function ReservationForm() {
  const [formData, setFormData] = useState<FormData>(INITIAL_FORM);
  const [status, setStatus] = useState<FormStatus>('idle');

  const isRequiredValid = useMemo(() => {
    return (
      formData.nome.trim().length > 0 &&
      formData.email.trim().length > 0 &&
      formData.telefone.trim().length > 0 &&
      formData.tipo_evento !== '' &&
      formData.data_pretendida.trim().length > 0
    );
  }, [formData]);

  const updateField = <K extends keyof FormData>(
    field: K,
    value: FormData[K]
  ) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (status === 'error') setStatus('idle');
  };

  const handleSubmit = async () => {
    if (!isRequiredValid || status === 'loading') return;

    setStatus('loading');

    const payload: ReservationPayload = {
      nome: formData.nome.trim(),
      email: formData.email.trim(),
      telefone: formData.telefone.trim(),
      tipo_evento: formData.tipo_evento as ReservationPayload['tipo_evento'],
      data_pretendida: formData.data_pretendida,
      ...(formData.num_convidados.trim()
        ? { num_convidados: Number(formData.num_convidados) }
        : {}),
      ...(formData.mensagem.trim()
        ? { mensagem: formData.mensagem.trim() }
        : {}),
    };

    try {
      const response = await fetch('/api/reservas', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        setStatus('error');
        return;
      }

      setStatus('success');
    } catch {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="rounded-lg border border-forest/10 bg-cream p-8 text-center md:p-12">
        <p className="text-4xl" aria-hidden="true">
          🎉
        </p>
        <h2 className="mt-4 font-display text-2xl text-forest">
          Pedido enviado com sucesso
        </h2>
        <p className="mt-4 leading-relaxed text-storm">
          Obrigado, {formData.nome.trim()}. Recebemos o teu pedido de reserva e
          respondemos em até 24 horas — sem compromisso. Verifica também o teu
          email; se não receberes confirmação, contacta-nos em{' '}
          <a
            href={`mailto:${FALLBACK_EMAIL}`}
            className="font-medium text-terracotta underline hover:text-terracotta-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-terracotta"
          >
            {FALLBACK_EMAIL}
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <div className="rounded-lg border border-forest/10 bg-cream p-6 md:p-10">
      {status === 'error' && (
        <div
          className="mb-6 rounded-sm border border-terracotta/30 bg-terracotta/10 px-4 py-3 text-sm text-forest"
          role="alert"
        >
          <p className="font-medium">Não foi possível enviar o pedido.</p>
          <p className="mt-1 text-storm">
            Tenta outra vez dentro de momentos ou envia-nos um email directo
            para{' '}
            <a
              href={`mailto:${FALLBACK_EMAIL}`}
              className="font-bold text-terracotta underline hover:text-terracotta-dark"
            >
              {FALLBACK_EMAIL}
            </a>
            .
          </p>
        </div>
      )}

      <div className="space-y-6">
        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <label htmlFor="reserva-nome" className="block text-sm font-medium text-forest">
              Nome <span className="text-terracotta">*</span>
            </label>
            <input
              id="reserva-nome"
              type="text"
              name="nome"
              autoComplete="name"
              required
              value={formData.nome}
              onChange={(e) => updateField('nome', e.target.value)}
              className={`mt-2 ${inputClass}`}
            />
          </div>

          <div>
            <label htmlFor="reserva-email" className="block text-sm font-medium text-forest">
              Email <span className="text-terracotta">*</span>
            </label>
            <input
              id="reserva-email"
              type="email"
              name="email"
              autoComplete="email"
              required
              value={formData.email}
              onChange={(e) => updateField('email', e.target.value)}
              className={`mt-2 ${inputClass}`}
            />
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <label htmlFor="reserva-telefone" className="block text-sm font-medium text-forest">
              Telefone <span className="text-terracotta">*</span>
            </label>
            <input
              id="reserva-telefone"
              type="tel"
              name="telefone"
              autoComplete="tel"
              required
              value={formData.telefone}
              onChange={(e) => updateField('telefone', e.target.value)}
              className={`mt-2 ${inputClass}`}
            />
          </div>

          <div>
            <label htmlFor="reserva-tipo" className="block text-sm font-medium text-forest">
              Tipo de evento <span className="text-terracotta">*</span>
            </label>
            <select
              id="reserva-tipo"
              name="tipo_evento"
              required
              value={formData.tipo_evento}
              onChange={(e) =>
                updateField(
                  'tipo_evento',
                  e.target.value as FormData['tipo_evento']
                )
              }
              className={`mt-2 ${inputClass}`}
            >
              <option value="" disabled>
                Selecciona uma opção
              </option>
              <option value="festa infantil">Festa infantil</option>
              <option value="evento adultos">Evento de adultos</option>
              <option value="outro">Outro</option>
            </select>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <label htmlFor="reserva-data" className="block text-sm font-medium text-forest">
              Data pretendida <span className="text-terracotta">*</span>
            </label>
            <input
              id="reserva-data"
              type="date"
              name="data_pretendida"
              required
              value={formData.data_pretendida}
              onChange={(e) => updateField('data_pretendida', e.target.value)}
              className={`mt-2 ${inputClass}`}
            />
          </div>

          <div>
            <label htmlFor="reserva-convidados" className="block text-sm font-medium text-forest">
              Número de convidados
            </label>
            <input
              id="reserva-convidados"
              type="number"
              name="num_convidados"
              min={1}
              max={300}
              value={formData.num_convidados}
              onChange={(e) => updateField('num_convidados', e.target.value)}
              className={`mt-2 ${inputClass}`}
              placeholder="Opcional"
            />
          </div>
        </div>

        <div>
          <label htmlFor="reserva-mensagem" className="block text-sm font-medium text-forest">
            Mensagem
          </label>
          <textarea
            id="reserva-mensagem"
            name="mensagem"
            rows={4}
            value={formData.mensagem}
            onChange={(e) => updateField('mensagem', e.target.value)}
            className={`mt-2 min-h-[44px] resize-y ${inputClass}`}
            placeholder="Conta-nos mais sobre o evento que imaginas (opcional)"
          />
        </div>

        <p className="text-xs leading-relaxed text-storm/80">
          Ao enviar este pedido, aceitas que tratemos os teus dados para
          responder ao orçamento, nos termos da nossa{' '}
          <Link
            href="/privacidade/"
            className="font-medium text-terracotta underline hover:text-terracotta-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-terracotta"
          >
            Política de Privacidade
          </Link>
          .
        </p>

        <button
          type="button"
          onClick={handleSubmit}
          disabled={!isRequiredValid || status === 'loading'}
          className="w-full min-h-[52px] rounded-sm bg-terracotta px-6 text-sm font-bold uppercase tracking-widest text-white transition-colors hover:bg-terracotta-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-forest disabled:cursor-not-allowed disabled:bg-storm/30"
        >
          {status === 'loading' ? 'A enviar…' : 'Enviar pedido de reserva'}
        </button>
      </div>

      <p className="mt-8 text-center text-sm text-storm">
        Preferes email?{' '}
        {/* Substituir pelo email real de contacto quando confirmado */}
        <a
          href={`mailto:${FALLBACK_EMAIL}`}
          className="font-medium text-terracotta underline hover:text-terracotta-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-terracotta"
        >
          {FALLBACK_EMAIL}
        </a>
      </p>
    </div>
  );
}
