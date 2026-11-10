import React, { useState } from 'react';
import { BRAND_INFO, SPECIALTIES } from '../data/content';
import { Calendar, Clock, Send, CheckCircle2, MessageCircle, Mail, MapPin, Sparkles, Copy, Check } from 'lucide-react';

interface BookingSectionProps {
  preselectedServiceId?: string;
}

export const BookingSection: React.FC<BookingSectionProps> = ({ preselectedServiceId }) => {
  const [selectedService, setSelectedService] = useState<string>(
    preselectedServiceId || 'massoterapia-avancada'
  );
  const [focusArea, setFocusArea] = useState<string>('Dores tensionais na coluna e cervical');
  const [period, setPeriod] = useState<string>('Tarde');
  const [preferredDay, setPreferredDay] = useState<string>('Segunda a Sexta');
  const [name, setName] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [notes, setNotes] = useState<string>('');
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [copied, setCopied] = useState<boolean>(false);

  const currentServiceObj = SPECIALTIES.find((s) => s.id === selectedService) || SPECIALTIES[0];

  const focusOptions = [
    'Dores tensionais na coluna e cervical',
    'Sobrecarga de estresse e fadiga crônica',
    'Retenção de líquidos e inchaço corporal',
    'Rigidez articular e postura no trabalho',
    'Reconexão corporal e alinhamento integral',
  ];

  const generateWhatsAppMessage = () => {
    const lines = [
      `Olá, Luana! Gostaria de agendar um atendimento no Espaço Zensorial.`,
      ``,
      `*Atendimento Escolhido:* ${currentServiceObj.title}`,
      `*Foco Principal:* ${focusArea}`,
      `*Período de Preferência:* ${period} (${preferredDay})`,
      name ? `*Nome do Interagente:* ${name}` : '',
      phone ? `*WhatsApp de Contato:* ${phone}` : '',
      notes ? `*Observações de Saúde:* ${notes}` : '',
      ``,
      `Agradeço desde já pela atenção!`,
    ].filter(Boolean);

    return lines.join('\n');
  };

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = generateWhatsAppMessage();
    const encoded = encodeURIComponent(message);
    const url = `https://wa.me/${BRAND_INFO.phoneRaw}?text=${encoded}`;
    setIsSubmitted(true);
    window.open(url, '_blank');
  };

  const handleCopySummary = () => {
    const text = generateWhatsAppMessage();
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contato" className="py-20 lg:py-28 bg-[#121B16] relative noise-subtle">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 right-10 w-[500px] h-[500px] bg-[#16A34A]/8 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest text-[#D4AF37] bg-[#1A2820] border border-[#D4AF37]/25">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>Agendamento & Contato</span>
          </div>

          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-[#FAF7EE] tracking-tight">
            Reserve o Seu Momento de Cuidado
          </h2>

          <p className="text-base sm:text-lg text-[#A3B5AA] leading-relaxed">
            Os atendimentos são presenciais, exclusivamente com hora marcada no Rio de Janeiro. Preencha os detalhes abaixo para iniciar seu contato direto pelo WhatsApp com Luana Lopes.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Interactive Booking Form */}
          <div className="lg:col-span-7 bg-[#16231B] border border-[#D4AF37]/30 rounded-3xl p-7 sm:p-9 shadow-2xl">
            <div className="flex items-center justify-between pb-6 mb-6 border-b border-[#D4AF37]/15">
              <div className="flex items-center gap-2.5">
                <Calendar className="w-5 h-5 text-[#D4AF37]" />
                <span className="font-display font-bold text-lg text-[#FAF7EE]">
                  Pré-Agendamento Inteligente
                </span>
              </div>
              <span className="text-xs text-[#22C55E] flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-[#22C55E] animate-pulse" />
                Atendimento Ativo
              </span>
            </div>

            <form onSubmit={handleWhatsAppSubmit} className="space-y-6">
              {/* Step 1: Select Service */}
              <div className="space-y-2.5">
                <label className="text-xs font-semibold uppercase tracking-wider text-[#FAF7EE] flex items-center justify-between">
                  <span>1. Escolha a sua Prática Terapêutica:</span>
                  <span className="text-[#D4AF37] text-[11px] font-normal">
                    {currentServiceObj.duration}
                  </span>
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                  {SPECIALTIES.map((s) => (
                    <button
                      type="button"
                      key={s.id}
                      onClick={() => setSelectedService(s.id)}
                      className={`p-3 rounded-xl text-left border text-xs transition-all cursor-pointer ${
                        selectedService === s.id
                          ? 'bg-[#1F3327] border-[#D4AF37] text-[#FAF7EE] font-medium shadow-md shadow-[#D4AF37]/10'
                          : 'bg-[#121B16] border-[#D4AF37]/15 text-[#A3B5AA] hover:border-[#D4AF37]/40'
                      }`}
                    >
                      <div className="font-semibold text-[#FAF7EE] truncate">{s.title}</div>
                      <div className="text-[10px] text-[#D4AF37] mt-0.5">{s.badge}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 2: Main Need / Focus */}
              <div className="space-y-2">
                <label className="text-xs font-semibold uppercase tracking-wider text-[#FAF7EE]">
                  2. Qual o foco prioritário do seu corpo?
                </label>
                <select
                  value={focusArea}
                  onChange={(e) => setFocusArea(e.target.value)}
                  className="w-full p-3 rounded-xl bg-[#121B16] border border-[#D4AF37]/25 text-xs sm:text-sm text-[#FAF7EE] focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37]"
                >
                  {focusOptions.map((opt, i) => (
                    <option key={i} value={opt} className="bg-[#16231B] text-[#FAF7EE]">
                      {opt}
                    </option>
                  ))}
                </select>
              </div>

              {/* Step 3: Period & Preferred Day */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-xs font-semibold uppercase tracking-wider text-[#FAF7EE] flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-[#D4AF37]" />
                    <span>3. Período de preferência:</span>
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {['Manhã', 'Tarde', 'Flexível'].map((p) => (
                      <button
                        type="button"
                        key={p}
                        onClick={() => setPeriod(p)}
                        className={`py-2 text-xs rounded-lg border text-center transition-all cursor-pointer ${
                          period === p
                            ? 'bg-[#D4AF37] text-[#121B16] font-bold border-[#D4AF37]'
                            : 'bg-[#121B16] border-[#D4AF37]/20 text-[#A3B5AA] hover:border-[#D4AF37]/40'
                        }`}
                      >
                        {p}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-semibold uppercase tracking-wider text-[#FAF7EE]">
                    Disponibilidade na semana:
                  </label>
                  <input
                    type="text"
                    value={preferredDay}
                    onChange={(e) => setPreferredDay(e.target.value)}
                    placeholder="Ex: Terças e quintas"
                    className="w-full p-2.5 rounded-xl bg-[#121B16] border border-[#D4AF37]/25 text-xs sm:text-sm text-[#FAF7EE] focus:outline-none focus:border-[#D4AF37]"
                  />
                </div>
              </div>

              {/* Step 4: Interagente Contact Info */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold uppercase tracking-wider text-[#FAF7EE]">
                    Seu Nome Completo:
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Como prefere ser chamado(a)?"
                    className="w-full p-3 rounded-xl bg-[#121B16] border border-[#D4AF37]/25 text-xs sm:text-sm text-[#FAF7EE] focus:outline-none focus:border-[#D4AF37]"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold uppercase tracking-wider text-[#FAF7EE]">
                    WhatsApp de Contato:
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="(21) 99999-9999"
                    className="w-full p-3 rounded-xl bg-[#121B16] border border-[#D4AF37]/25 text-xs sm:text-sm text-[#FAF7EE] focus:outline-none focus:border-[#D4AF37]"
                  />
                </div>
              </div>

              {/* Optional Health Notes */}
              <div className="space-y-1.5">
                <label className="text-xs font-semibold uppercase tracking-wider text-[#FAF7EE]">
                  Observações de saúde ou histórico breve (opcional):
                </label>
                <textarea
                  rows={2}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Alguma contraindicação médica, cirurgia recente ou dor específica que devemos saber?"
                  className="w-full p-3 rounded-xl bg-[#121B16] border border-[#D4AF37]/25 text-xs sm:text-sm text-[#FAF7EE] focus:outline-none focus:border-[#D4AF37]"
                />
              </div>

              {/* Actions: Primary CTA Entrar em Contato */}
              <div className="space-y-3 pt-3">
                <button
                  type="submit"
                  className="w-full py-4 rounded-2xl text-xs sm:text-sm font-bold uppercase tracking-wider text-[#121B16] bg-gradient-to-r from-[#F3E5AB] via-[#D4AF37] to-[#B89B30] hover:brightness-110 shadow-xl shadow-[#D4AF37]/25 transition-all flex items-center justify-center gap-2.5 cursor-pointer transform hover:-translate-y-0.5 active:translate-y-0"
                >
                  <MessageCircle className="w-5 h-5 text-[#121B16]" />
                  <span>Entrar em Contato</span>
                </button>

                <div className="flex items-center justify-between text-[11px] text-[#A3B5AA] px-1">
                  <span>Mensagem formatada para o WhatsApp de Luana Lopes</span>
                  <button
                    type="button"
                    onClick={handleCopySummary}
                    className="flex items-center gap-1 text-[#D4AF37] hover:underline cursor-pointer"
                  >
                    {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copied ? 'Copiado!' : 'Copiar resumo'}</span>
                  </button>
                </div>
              </div>
            </form>

            {isSubmitted && (
              <div className="mt-6 p-4 rounded-2xl bg-[#1F3327] border border-[#22C55E]/40 flex items-center gap-3 text-xs text-[#FAF7EE]">
                <CheckCircle2 className="w-5 h-5 text-[#22C55E] flex-shrink-0" />
                <span>
                  O WhatsApp foi aberto! Se a conversa não iniciou automaticamente, utilize o botão do WhatsApp no canto inferior ou ligue para {BRAND_INFO.phoneDisplay}.
                </span>
              </div>
            )}
          </div>

          {/* Right Column: Institutional Contacts & Hours Info */}
          <div className="lg:col-span-5 space-y-6">
            {/* Direct Contact Card */}
            <div className="rounded-3xl bg-[#16231B] border border-[#D4AF37]/25 p-7 sm:p-8 space-y-6 shadow-xl">
              <div className="space-y-1">
                <span className="text-xs uppercase tracking-wider text-[#D4AF37] font-semibold">
                  Canais Oficiais de Atendimento
                </span>
                <h3 className="font-display font-bold text-2xl text-[#FAF7EE]">
                  Espaço Zensorial
                </h3>
                <p className="text-xs text-[#A3B5AA] leading-relaxed">
                  Ambiente harmonizado no Rio de Janeiro preparado para desacelerar o ritmo e acolher o seu bem-estar com total privacidade.
                </p>
              </div>

              <div className="space-y-4 pt-2">
                {/* WhatsApp */}
                <a
                  href={`https://wa.me/${BRAND_INFO.phoneRaw}?text=${encodeURIComponent(
                    'Olá Luana! Gostaria de tirar dúvidas sobre o atendimento integrativo no Espaço Zensorial.'
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3.5 p-4 rounded-2xl bg-[#121B16] border border-[#22C55E]/30 hover:border-[#22C55E] transition-all group"
                >
                  <div className="p-2.5 rounded-xl bg-[#22C55E]/15 text-[#22C55E] group-hover:bg-[#22C55E] group-hover:text-[#121B16] transition-colors">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] text-[#A3B5AA] uppercase font-semibold">
                      WhatsApp Direto
                    </div>
                    <div className="font-display font-bold text-sm text-[#FAF7EE] group-hover:text-[#D4AF37] transition-colors">
                      {BRAND_INFO.phoneDisplay}
                    </div>
                  </div>
                </a>

                {/* Email */}
                <a
                  href={`mailto:${BRAND_INFO.email}?subject=Consulta%20Espa%C3%A7o%20Zensorial`}
                  className="flex items-center gap-3.5 p-4 rounded-2xl bg-[#121B16] border border-[#D4AF37]/20 hover:border-[#D4AF37] transition-all group"
                >
                  <div className="p-2.5 rounded-xl bg-[#D4AF37]/15 text-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-[#121B16] transition-colors">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] text-[#A3B5AA] uppercase font-semibold">
                      E-mail Institucional
                    </div>
                    <div className="font-display font-bold text-xs sm:text-sm text-[#FAF7EE] group-hover:text-[#D4AF37] transition-colors">
                      {BRAND_INFO.email}
                    </div>
                  </div>
                </a>

                {/* Location */}
                <div className="flex items-center gap-3.5 p-4 rounded-2xl bg-[#121B16] border border-[#D4AF37]/15">
                  <div className="p-2.5 rounded-xl bg-[#D4AF37]/10 text-[#D4AF37]">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] text-[#A3B5AA] uppercase font-semibold">
                      Localização
                    </div>
                    <div className="font-display font-medium text-xs sm:text-sm text-[#FAF7EE]">
                      {BRAND_INFO.location}
                    </div>
                    <div className="text-[10px] text-[#A3B5AA] mt-0.5">
                      Atendimento presencial com agendamento prévio
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Preparation Tip Card */}
            <div className="p-6 rounded-3xl bg-[#142019] border border-[#D4AF37]/20 space-y-2">
              <div className="text-xs font-semibold uppercase tracking-wider text-[#D4AF37]">
                Recomendação Para o Seu Dia
              </div>
              <p className="text-xs text-[#A3B5AA] leading-relaxed">
                Recomendamos chegar com 10 minutos de antecedência para desfrutar da nossa <strong>estação de chás e aromas vivos de eucalipto</strong>, permitindo que a frequência cardíaca e a mente desacelerem antes de deitar na maca.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
