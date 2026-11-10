import React from 'react';
import { TESTIMONIALS } from '../data/content';
import { Sparkles, Star, Quote, CheckCircle } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  return (
    <section id="depoimentos" className="py-20 lg:py-28 bg-[#0E1612] relative overflow-hidden border-t border-b border-[#D4AF37]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest text-[#D4AF37] bg-[#1A2820] border border-[#D4AF37]/25">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>Vozes dos Interagentes</span>
          </div>

          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-[#FAF7EE] tracking-tight">
            Relatos de Alívio, Reconexão & Vitalidade
          </h2>

          <p className="text-base sm:text-lg text-[#A3B5AA] leading-relaxed">
            Aqui, cada interagente é acolhido com escuta sensível e precisão biomecânica. Veja a transformação contada por quem vivenciou as sessões.
          </p>
        </div>

        {/* Testimonials Grid optimized for mobile, tablet (2 cols) and PC (3 cols) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="flex flex-col justify-between p-7 sm:p-8 rounded-3xl bg-[#15221B] border border-[#D4AF37]/20 shadow-xl hover:border-[#D4AF37]/45 transition-all duration-300 group hover:-translate-y-1"
            >
              <div className="space-y-4">
                {/* Stars and Treatment tag */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    {[...Array(t.stars)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#D4AF37] text-[#D4AF37]" />
                    ))}
                  </div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#A3B5AA] px-2 py-0.5 rounded bg-[#121B16] border border-[#D4AF37]/15">
                    Verificado
                  </span>
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
              <div className="pt-6 mt-6 border-t border-[#D4AF37]/15 flex items-center justify-between">
                <div>
                  <div className="font-display font-bold text-sm text-[#FAF7EE]">
                    {t.author}
                  </div>
                  <div className="text-[11px] text-[#A3B5AA]">
                    {t.role} • {t.location}
                  </div>
                </div>

                <div className="text-[10px] text-[#22C55E] flex items-center gap-1 font-medium">
                  <CheckCircle className="w-3.5 h-3.5" />
                  <span>Interagente</span>
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
