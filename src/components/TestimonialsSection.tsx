import React from 'react';
import { TESTIMONIALS } from '../data/content';
import { Sparkles, Star, Quote, CheckCircle } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  return (
    <section id="depoimentos" className="py-20 lg:py-28 bg-[#0E1612] relative overflow-hidden border-t border-b border-[#D4AF37]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest text-[#D4AF37] bg-[#1A2820] border border-[#D4AF37]/25">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>Google Avaliações</span>
          </div>

          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-[#FAF7EE] tracking-tight">
            Depoimentos Autênticos de Quem Viveu a Transformação
          </h2>

          <p className="text-base sm:text-lg text-[#A3B5AA] leading-relaxed">
            Avaliações 5 estrelas verificadas no Google Meu Negócio da Dra. Luana Lopes — Espaço Zensorial no Rio de Janeiro.
          </p>

          {/* Google Summary Badge */}
          <div className="pt-2 flex items-center justify-center">
            <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-[#15221B] border border-[#D4AF37]/30 shadow-lg">
              {/* Google G SVG */}
              <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24">
                <path
                  fill="#4285F4"
                  d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.8-2.4 3.65v3.03h3.88c2.27-2.09 3.665-5.17 3.665-9.12z"
                />
                <path
                  fill="#34A853"
                  d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.03c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.13C3.27 21.41 7.34 24 12 24z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.28 14.29c-.25-.72-.38-1.49-.38-2.29s.13-1.57.38-2.29V6.58H1.25C.45 8.18 0 9.99 0 12s.45 3.82 1.25 5.42l4.03-3.13z"
                />
                <path
                  fill="#EA4335"
                  d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.34 0 3.27 2.59 1.25 6.58l4.03 3.13c.95-2.83 3.6-4.96 6.72-4.96z"
                />
              </svg>
              <div className="flex items-center gap-1.5">
                <span className="font-display font-bold text-sm text-[#FAF7EE]">5,0</span>
                <div className="flex items-center gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-[#D4AF37] text-[#D4AF37]" />
                  ))}
                </div>
              </div>
              <span className="text-xs text-[#C2D0C7] font-medium border-l border-[#D4AF37]/25 pl-3">
                Classificação Máxima no Google
              </span>
            </div>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-12">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="flex flex-col justify-between p-7 sm:p-8 rounded-3xl bg-[#15221B] border border-[#D4AF37]/20 shadow-xl hover:border-[#D4AF37]/45 transition-all duration-300 group hover:-translate-y-1"
            >
              <div className="space-y-4">
                {/* Header with Google logo, Stars, Date */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1">
                      {[...Array(t.stars)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-[#D4AF37] text-[#D4AF37]" />
                      ))}
                    </div>
                    {t.date && (
                      <span className="text-[11px] text-[#8E9F94]">
                        • {t.date}
                      </span>
                    )}
                  </div>

                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#121B16] border border-[#D4AF37]/20 text-[10px] font-medium text-[#FAF7EE]">
                    {/* Tiny Google Icon */}
                    <svg className="w-3 h-3 flex-shrink-0" viewBox="0 0 24 24">
                      <path
                        fill="#4285F4"
                        d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.8-2.4 3.65v3.03h3.88c2.27-2.09 3.665-5.17 3.665-9.12z"
                      />
                      <path
                        fill="#34A853"
                        d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.03c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.13C3.27 21.41 7.34 24 12 24z"
                      />
                      <path
                        fill="#FBBC05"
                        d="M5.28 14.29c-.25-.72-.38-1.49-.38-2.29s.13-1.57.38-2.29V6.58H1.25C.45 8.18 0 9.99 0 12s.45 3.82 1.25 5.42l4.03-3.13z"
                      />
                      <path
                        fill="#EA4335"
                        d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.34 0 3.27 2.59 1.25 6.58l4.03 3.13c.95-2.83 3.6-4.96 6.72-4.96z"
                      />
                    </svg>
                    <span>Google</span>
                  </div>
                </div>

                {/* Highlight Badge */}
                <div className="text-xs font-semibold text-[#D4AF37] leading-snug">
                  "{t.highlight}"
                </div>

                {/* Quote */}
                <p className="text-xs sm:text-sm text-[#C2D0C7] font-light leading-relaxed italic">
                  "{t.quote}"
                </p>
              </div>

              {/* Author Info */}
              <div className="pt-5 mt-5 border-t border-[#D4AF37]/15 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-[#1A2820] to-[#2B3F33] border border-[#D4AF37]/40 flex items-center justify-center font-display font-bold text-sm text-[#D4AF37]">
                    {t.author.charAt(0)}
                  </div>
                  <div>
                    <div className="font-display font-bold text-sm text-[#FAF7EE]">
                      {t.author}
                    </div>
                    <div className="text-[11px] text-[#A3B5AA]">
                      {t.treatment}
                    </div>
                  </div>
                </div>

                <div className="text-[10px] text-[#22C55E] flex items-center gap-1 font-medium bg-[#16A34A]/10 px-2 py-0.5 rounded-full border border-[#22C55E]/20">
                  <CheckCircle className="w-3 h-3" />
                  <span>Verificado</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust banner */}
        <div className="p-6 rounded-2xl bg-[#16251D] border border-[#D4AF37]/25 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="space-y-1">
            <div className="font-display font-bold text-sm sm:text-base text-[#FAF7EE]">
              Atendimentos Exclusivos com Hora Marcada no Rio de Janeiro
            </div>
            <div className="text-xs text-[#A3B5AA]">
              Sem salas de espera tumultuadas. Cada horário é dedicado integralmente a você.
            </div>
          </div>
          <div className="text-xs font-semibold uppercase tracking-wider text-[#D4AF37] px-4 py-2 rounded-full border border-[#D4AF37]/30 bg-[#121B16]">
            Espaço Zensorial
          </div>
        </div>
      </div>
    </section>
  );
};
