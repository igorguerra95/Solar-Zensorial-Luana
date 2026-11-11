import React, { useState } from 'react';
import { SPECIALTIES, SYMPTOM_FINDER } from '../data/content';
import { Sparkles, Droplets, Flame, Check, Clock, UserCheck, ArrowUpRight, HelpCircle } from 'lucide-react';

interface SpecialtiesProps {
  onSelectService: (serviceId: string) => void;
}

export const Specialties: React.FC<SpecialtiesProps> = ({ onSelectService }) => {
  const [activeSymptom, setActiveSymptom] = useState<string | null>(null);
  const [highlightedServiceId, setHighlightedServiceId] = useState<string>('massoterapia-avancada');

  const handleSymptomClick = (symptomId: string, recommendedServiceId: string) => {
    setActiveSymptom(symptomId);
    setHighlightedServiceId(recommendedServiceId);
  };

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Sparkles':
        return <Sparkles className="w-6 h-6 text-[#D4AF37]" />;
      case 'Droplets':
        return <Droplets className="w-6 h-6 text-[#22C55E]" />;
      case 'Flame':
      default:
        return <Flame className="w-6 h-6 text-[#D4AF37]" />;
    }
  };

  return (
    <section id="especialidades" className="py-20 lg:py-28 bg-[#121B16] relative noise-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest text-[#D4AF37] bg-[#1A2820] border border-[#D4AF37]/25">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>Nossas Práticas</span>
          </div>

          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-[#FAF7EE] tracking-tight">
            Tratamentos & Sessões Integrativas
          </h2>

          <p className="text-base sm:text-lg text-[#A3B5AA] leading-relaxed">
            Cada atendimento é desenhado sob medida: uno manobras manuais de alta precisão a óleos vegetais puros e sinergias botânicas para devolver a leveza, o alívio e a consciência corporal.
          </p>
        </div>

        {/* Interactive Symptom Recommendation Bar */}
        <div className="mb-16 p-6 sm:p-8 rounded-3xl bg-[#16231B] border border-[#D4AF37]/25 shadow-xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#D4AF37]">
                <HelpCircle className="w-4 h-4 text-[#D4AF37]" />
                <span>Guia Inteligente de Recomendação</span>
              </div>
              <h3 className="font-display font-bold text-lg sm:text-xl text-[#FAF7EE]">
                O que o seu organismo mais precisa hoje?
              </h3>
            </div>
            <span className="text-xs text-[#A3B5AA]">
              Clique no sintoma para recomendação imediata
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {SYMPTOM_FINDER.map((symptom) => {
              const isSelected = activeSymptom === symptom.id;
              return (
                <button
                  key={symptom.id}
                  onClick={() => handleSymptomClick(symptom.id, symptom.recommendedService)}
                  className={`p-4 rounded-2xl text-left transition-all duration-300 border cursor-pointer ${
                    isSelected
                      ? 'bg-[#22392D] border-[#D4AF37] shadow-lg shadow-[#D4AF37]/15 ring-1 ring-[#D4AF37]'
                      : 'bg-[#121B16] border-[#D4AF37]/15 hover:border-[#D4AF37]/40 hover:bg-[#1A2820]'
                  }`}
                >
                  <div className="font-display font-semibold text-sm text-[#FAF7EE] mb-1">
                    {symptom.title}
                  </div>
                  <div className="text-xs text-[#A3B5AA] leading-relaxed">
                    {symptom.desc}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Cards Grid for the Official Treatments */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {SPECIALTIES.map((service) => {
            const isHighlighted = highlightedServiceId === service.id;

            return (
              <div
                key={service.id}
                className={`flex flex-col justify-between rounded-3xl p-7 sm:p-8 transition-all duration-300 ${
                  isHighlighted
                    ? 'bg-[#1C2C23] border-2 border-[#D4AF37] shadow-2xl shadow-[#D4AF37]/20 relative -translate-y-1'
                    : 'bg-[#16231B]/90 border border-[#D4AF37]/20 hover:border-[#D4AF37]/40 hover:bg-[#19271E]'
                }`}
              >
                <div className="space-y-6">
                  {/* Badge & Duration */}
                  <div className="flex items-center justify-between gap-2">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#D4AF37]/15 border border-[#D4AF37]/30 text-[#F3E5AB]">
                      {service.badge}
                    </span>

                    <span className="flex items-center gap-1 text-xs text-[#A3B5AA]">
                      <Clock className="w-3.5 h-3.5 text-[#D4AF37]" />
                      <span>{service.duration}</span>
                    </span>
                  </div>

                  {/* Icon & Title */}
                  <div className="space-y-2">
                    <div className="w-12 h-12 rounded-2xl bg-[#121B16] border border-[#D4AF37]/20 flex items-center justify-center shadow-inner">
                      {getServiceIcon(service.iconName)}
                    </div>

                    <h3 className="font-display font-bold text-2xl text-[#FAF7EE] tracking-tight">
                      {service.title}
                    </h3>
                    <p className="text-xs uppercase tracking-wider text-[#D4AF37] font-medium">
                      {service.subtitle}
                    </p>
                  </div>

                  {/* Descriptions from PDF */}
                  <div className="space-y-4 text-xs sm:text-sm text-[#C2D0C7] leading-relaxed font-light">
                    <div>
                      <strong className="text-[#FAF7EE] font-medium block mb-1">
                        Foco Terapêutico:
                      </strong>
                      <p>{service.description}</p>
                    </div>

                    <div className="p-3.5 rounded-xl bg-[#121B16]/80 border border-[#D4AF37]/15">
                      <strong className="text-[#D4AF37] text-xs font-semibold flex items-center gap-1.5 mb-1">
                        <UserCheck className="w-3.5 h-3.5" />
                        Para quem é indicado:
                      </strong>
                      <p className="text-xs text-[#A3B5AA] leading-relaxed">
                        {service.forWhom}
                      </p>
                    </div>

                    <div>
                      <strong className="text-[#FAF7EE] font-medium block mb-1">
                        A Experiência no Consultório:
                      </strong>
                      <p className="text-xs text-[#A3B5AA] leading-relaxed">
                        {service.experience}
                      </p>
                    </div>

                    {/* Benefits bullet list */}
                    <div className="pt-2">
                      <strong className="text-[#FAF7EE] text-xs font-semibold uppercase tracking-wider block mb-2.5">
                        Benefícios Principais:
                      </strong>
                      <ul className="space-y-2">
                        {service.benefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-xs text-[#C2D0C7]">
                            <Check className="w-4 h-4 text-[#22C55E] flex-shrink-0 mt-0.5" />
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Bottom CTA to Book / Contact */}
                <div className="pt-8 mt-6 border-t border-[#D4AF37]/15">
                  <button
                    onClick={() => onSelectService(service.id)}
                    className={`w-full py-3.5 rounded-2xl text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all cursor-pointer ${
                      isHighlighted
                        ? 'bg-gradient-to-r from-[#F3E5AB] via-[#D4AF37] to-[#B89B30] text-[#121B16] hover:brightness-110 shadow-lg shadow-[#D4AF37]/20'
                        : 'bg-[#121B16] text-[#FAF7EE] border border-[#D4AF37]/30 hover:border-[#D4AF37] hover:bg-[#1A2820]'
                    }`}
                  >
                    <span>Entrar em Contato</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
