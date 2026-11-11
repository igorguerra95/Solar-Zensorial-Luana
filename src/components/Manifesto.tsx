import React from 'react';
import { Flame, Trees, Sun, Sparkles } from 'lucide-react';

export const Manifesto: React.FC = () => {
  return (
    <section className="py-20 lg:py-28 bg-[#0E1612] relative overflow-hidden border-t border-b border-[#D4AF37]/15">
      {/* Decorative botanical light rays */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#1B2F24]/40 via-transparent to-transparent pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest text-[#D4AF37] bg-[#1A2820] border border-[#D4AF37]/25">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>O Manifesto</span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-[#FAF7EE] tracking-tight">
            O corpo não carrega apenas tensões físicas, <br />
            <span className="italic font-serif-editorial text-[#D4AF37] font-normal">
              ele guarda histórias, vivências e memórias.
            </span>
          </h2>
          <p className="text-base sm:text-lg text-[#A3B5AA] leading-relaxed">
            O alívio real e duradouro não acontece na superfície — ele exige escuta, presença e reconexão com aquilo que nos sustenta.
          </p>
        </div>

        {/* Narrative Box with 2 Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16">
          <div className="lg:col-span-6 space-y-6 text-[#C2D0C7] text-base sm:text-lg leading-relaxed font-light">
            <p className="p-6 rounded-2xl bg-[#15221B] border-l-2 border-[#D4AF37] shadow-lg">
              <strong className="text-[#FAF7EE] font-semibold block mb-2 font-display">
                A ponte entre o toque e os recursos botânicos
              </strong>
              A massoterapia integrativa é a ponte entre a sensibilidade do toque e a força dos recursos naturais. Aqui, cada atendimento é pensado como um ritual individualizado de saúde: uno a precisão da anatomia ao cuidado botânico da fitoterapia e à delicadeza da recepção sensorial.
            </p>

            <p className="p-6 rounded-2xl bg-[#15221B] border-l-2 border-[#22C55E] shadow-lg">
              <strong className="text-[#FAF7EE] font-semibold block mb-2 font-display">
                Autonomia e qualidade de vida corporal
              </strong>
              Não busco apenas silenciar o desconforto, mas cultivar a sua autonomia para que você volte a habitar o seu próprio corpo com presença, vitalidade e clareza.
            </p>
          </div>

          <div className="lg:col-span-6">
            <div className="relative p-8 rounded-3xl bg-gradient-to-br from-[#1C2C23] via-[#16241D] to-[#121B16] border border-[#D4AF37]/30 shadow-2xl">
              <div className="text-xs uppercase tracking-widest text-[#D4AF37] font-semibold mb-3">
                A Metáfora da Árvore Imponente
              </div>
              <h3 className="font-display font-bold text-2xl text-[#FAF7EE] mb-4">
                Imagine o seu organismo como uma grande árvore:
              </h3>
              <p className="text-[#A3B5AA] text-sm leading-relaxed mb-6">
                Para que os galhos floresçam em equilíbrio e os frutos da vitalidade apareçam no dia a dia, as raízes profundas precisam estar nutridas, oxigenadas e livres de nós.
              </p>

              {/* The 3 concept pillars */}
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 rounded-xl bg-[#121B16]/80 border border-[#D4AF37]/20">
                  <div className="p-2.5 rounded-lg bg-[#D4AF37]/15 text-[#D4AF37] flex-shrink-0">
                    <Flame className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-sm text-[#FAF7EE]">
                      A Alquimia: O Fogo Transformador
                    </h4>
                    <p className="text-xs text-[#A3B5AA] mt-1 leading-relaxed">
                      A magia do toque consciente, da fitoterapia, da aromaterapia e do movimento que transforma a dor em leveza e a fadiga em vitalidade.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-xl bg-[#121B16]/80 border border-[#22C55E]/20">
                  <div className="p-2.5 rounded-lg bg-[#22C55E]/15 text-[#22C55E] flex-shrink-0">
                    <Trees className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-sm text-[#FAF7EE]">
                      As Raízes: A Base Invisível
                    </h4>
                    <p className="text-xs text-[#A3B5AA] mt-1 leading-relaxed">
                      Aquilo que ninguém vê, mas que sustenta tudo: os seus pés na terra, a sua estrutura física, o seu eixo e a sabedoria botânica da natureza.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-xl bg-[#121B16]/80 border border-[#D4AF37]/20">
                  <div className="p-2.5 rounded-lg bg-[#D4AF37]/15 text-[#D4AF37] flex-shrink-0">
                    <Sun className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-sm text-[#FAF7EE]">
                      O Despertar: A Seiva que Volta a Fluir
                    </h4>
                    <p className="text-xs text-[#A3B5AA] mt-1 leading-relaxed">
                      O milagre silencioso em que o organismo lembra quem é e volta a sugar a seiva vital. Não é um milagre externo, mas o seu próprio corpo desatando nós do passado e florescendo com qualidade de vida.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
