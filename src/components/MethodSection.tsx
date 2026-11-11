import React, { useState } from 'react';
import { METHOD_PHASES, BOTANICAL_RITUALS } from '../data/content';
import { Sparkles, HeartHandshake, Coffee, Leaf, CheckCircle2, Wind } from 'lucide-react';

export const MethodSection: React.FC = () => {
  const [selectedPhase, setSelectedPhase] = useState<number>(1);

  const getPhaseIcon = (iconName: string) => {
    switch (iconName) {
      case 'HeartHandshake':
        return <HeartHandshake className="w-5 h-5 text-[#D4AF37]" />;
      case 'Coffee':
        return <Coffee className="w-5 h-5 text-[#22C55E]" />;
      case 'Leaf':
      default:
        return <Leaf className="w-5 h-5 text-[#D4AF37]" />;
    }
  };

  return (
    <section id="metodo" className="py-20 lg:py-28 bg-[#0E1612] relative overflow-hidden">
      {/* Decorative botanical backdrop */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#16A34A]/8 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest text-[#D4AF37] bg-[#1A2820] border border-[#D4AF37]/25">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>O Método Integrativo</span>
          </div>

          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-[#FAF7EE] tracking-tight">
            Como Funciona Cada Atendimento
          </h2>

          <p className="text-base sm:text-lg text-[#A3B5AA] leading-relaxed">
            Compreendo que a tensão física, o esgotamento mental e os desequilíbrios metabólicos estão interligados. Meu atendimento segue uma trilha sensorial e biomecânica em 3 etapas consagradas.
          </p>
        </div>

        {/* 3 Phases Stepper */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-16">
          {METHOD_PHASES.map((phase) => {
            const isActive = selectedPhase === phase.step;

            return (
              <div
                key={phase.step}
                onClick={() => setSelectedPhase(phase.step)}
                className={`p-7 rounded-3xl border transition-all duration-300 cursor-pointer relative flex flex-col justify-between ${
                  isActive
                    ? 'bg-[#1C2C23] border-[#D4AF37] shadow-xl shadow-[#D4AF37]/10 -translate-y-1'
                    : 'bg-[#142019] border-[#D4AF37]/15 hover:border-[#D4AF37]/40 hover:bg-[#18261F]'
                }`}
              >
                <div>
                  {/* Step indicator */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-10 h-10 rounded-xl bg-[#121B16] border border-[#D4AF37]/25 flex items-center justify-center font-display font-bold text-sm text-[#D4AF37]">
                      0{phase.step}
                    </div>
                    <div className="p-2 rounded-lg bg-[#121B16] border border-[#D4AF37]/20">
                      {getPhaseIcon(phase.iconName)}
                    </div>
                  </div>

                  <div className="space-y-2 mb-4">
                    <h3 className="font-display font-bold text-xl text-[#FAF7EE]">
                      {phase.title}
                    </h3>
                    {phase.subtitle && (
                      <div className="text-xs uppercase tracking-wider text-[#D4AF37] font-medium">
                        {phase.subtitle}
                      </div>
                    )}
                  </div>

                  <p className="text-xs sm:text-sm text-[#A3B5AA] leading-relaxed mb-6 font-light">
                    {phase.description}
                  </p>
                </div>

                {phase.details && phase.details.length > 0 && (
                  <div className="space-y-2 pt-4 border-t border-[#D4AF37]/15">
                    {phase.details.map((detail, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-[#C2D0C7]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#22C55E] flex-shrink-0" />
                        <span>{detail}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* The Sensory Rituals Showcase */}
        <div className="rounded-3xl bg-gradient-to-br from-[#16251D] via-[#121B16] to-[#0D1510] border border-[#D4AF37]/25 p-8 sm:p-12 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#D4AF37]">
                <Wind className="w-4 h-4 text-[#D4AF37]" />
                <span>Rituais Sensoriais da Sessão</span>
              </div>
              <h3 className="font-display font-bold text-2xl sm:text-3xl text-[#FAF7EE]">
                A preparação do sistema nervoso antes do toque manual
              </h3>
              <p className="text-sm text-[#A3B5AA] leading-relaxed">
                A pele e o olfato atuam diretamente sobre o sistema nervoso autônomo. Cada elemento botânico presente no Espaço Zensorial foi escolhido para dissolver o estresse e a agitação mental diária e abrir caminho para a liberação muscular profunda.
              </p>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-4">
              {BOTANICAL_RITUALS.map((ritual) => (
                <div
                  key={ritual.id}
                  className="p-5 rounded-2xl bg-[#142019] border border-[#D4AF37]/20 space-y-3"
                >
                  <div className="text-xs font-semibold text-[#D4AF37] uppercase tracking-wider">
                    {ritual.title}
                  </div>
                  <div className="text-xs font-medium text-[#FAF7EE]">
                    {ritual.botanicalElement}
                  </div>
                  <p className="text-[11px] text-[#A3B5AA] leading-relaxed">
                    {ritual.purpose}
                  </p>
                  <div className="text-[10px] text-[#C2D0C7] italic pt-2 border-t border-[#D4AF37]/10">
                    "{ritual.sensoryNote}"
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
