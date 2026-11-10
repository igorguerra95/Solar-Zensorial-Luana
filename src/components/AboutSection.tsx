import React from 'react';
import { BRAND_INFO } from '../data/content';
import { SolarLogo } from './SolarLogo';
import { Award, Compass, ShieldCheck, Sparkles, BookOpen } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="sobre" className="py-20 lg:py-28 bg-[#121B16] relative overflow-hidden noise-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest text-[#D4AF37] bg-[#1A2820] border border-[#D4AF37]/25">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>Sobre Mim</span>
          </div>

          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-[#FAF7EE] tracking-tight">
            A Trajetória de Luana Lopes
          </h2>

          <p className="text-base sm:text-lg text-[#A3B5AA] leading-relaxed">
            Da sensibilidade infantil ao pódio mundial da massoterapia: a união entre a sabedoria ancestral botânica e o rigor acadêmico da naturologia.
          </p>
        </div>

        {/* Narrative Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-16">
          {/* Left Column: Visual Profile & Credentials Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="relative rounded-3xl overflow-hidden bg-gradient-to-b from-[#1C2C23] to-[#142019] border border-[#D4AF37]/30 p-6 sm:p-8 shadow-2xl">
              {/* Portrait Photo of Dra. Luana no Espaço Zensorial */}
              <div className="relative rounded-2xl overflow-hidden border border-[#D4AF37]/30 mb-6 group shadow-lg">
                <div className="aspect-[4/4.5] w-full overflow-hidden bg-[#121B16]">
                  <img
                    src={BRAND_INFO.photoConsultorio}
                    alt="Dra. Luana Lopes no Espaço Zensorial"
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500 ease-out"
                    loading="lazy"
                  />
                </div>
                {/* Subtle gradient vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#121B16] via-transparent to-transparent opacity-80" />
                
                {/* Name badge overlaid on bottom of portrait */}
                <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl bg-[#142019]/90 backdrop-blur-md border border-[#D4AF37]/25">
                  <div className="font-display font-bold text-base text-[#FAF7EE]">
                    {BRAND_INFO.professional}
                  </div>
                  <div className="text-xs text-[#D4AF37] font-medium">
                    {BRAND_INFO.role}
                  </div>
                  <div className="text-[11px] text-[#A3B5AA]">
                    {BRAND_INFO.specialization} • {BRAND_INFO.academic}
                  </div>
                </div>
              </div>

              {/* Award Callout */}
              <div className="p-4 rounded-2xl bg-gradient-to-r from-[#D4AF37]/20 via-[#16A34A]/15 to-[#D4AF37]/10 border border-[#D4AF37]/40 flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-[#D4AF37] text-[#121B16] flex-shrink-0">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <div className="font-display font-bold text-sm text-[#FAF7EE]">
                    4º Lugar Mundial (2026)
                  </div>
                  <div className="text-xs text-[#E5D9B6] leading-tight">
                    Campeonato Internacional de Massoterapia
                  </div>
                </div>
              </div>

              {/* Official Credentials List */}
              <div className="mt-6 space-y-3">
                <div className="text-xs uppercase tracking-wider text-[#A3B5AA] font-semibold">
                  Chancelas & Registros Oficiais:
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between p-3 rounded-xl bg-[#121B16] border border-[#D4AF37]/15 text-xs">
                    <span className="text-[#FAF7EE] font-medium flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4 text-[#22C55E]" />
                      FENATE / RJ
                    </span>
                    <span className="font-mono text-[#D4AF37]">Nº 0080</span>
                  </div>

                  <div className="flex items-center justify-between p-3 rounded-xl bg-[#121B16] border border-[#D4AF37]/15 text-xs">
                    <span className="text-[#FAF7EE] font-medium flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4 text-[#22C55E]" />
                      ABRANA
                    </span>
                    <span className="font-mono text-[#D4AF37]">Nº 100647</span>
                  </div>

                  <div className="flex items-center justify-between p-3 rounded-xl bg-[#121B16] border border-[#D4AF37]/15 text-xs">
                    <span className="text-[#FAF7EE] font-medium flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4 text-[#22C55E]" />
                      CRTH - BR
                    </span>
                    <span className="font-mono text-[#D4AF37]">Nº 02840/25</span>
                  </div>
                </div>
              </div>

              {/* Asia Immersion & Academic Milestone */}
              <div className="mt-6 pt-6 border-t border-[#D4AF37]/15 flex items-center gap-3 text-xs text-[#C2D0C7]">
                <Compass className="w-4 h-4 text-[#D4AF37] flex-shrink-0" />
                <span>
                  <strong>Imersão na Ásia (2016):</strong> Aprofundamento nas filosofias e práticas terapêuticas orientais.
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: The Real Biography from the PDF */}
          <div className="lg:col-span-7 space-y-8 text-[#C2D0C7] text-base leading-relaxed font-light">
            {/* Story Block 1: Childhood Alchemy */}
            <div className="p-7 sm:p-8 rounded-3xl bg-[#15221B] border border-[#D4AF37]/20 space-y-4 shadow-lg">
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#D4AF37]">
                <Sparkles className="w-4 h-4 text-[#D4AF37]" />
                <span>A Alquimia da Infância & A Semente do Cuidado</span>
              </div>
              <p>
                Houve um tempo em que o desamparo era tanto que o meu corpo parecia um território estrangeiro. Se as vozes ao meu redor me anulavam, o meu silêncio buscava um sentido que as minhas origens não sabiam explicar. Foi nesse vácuo de afeto que meus olhos se voltaram para o chão e minhas mãos se encontraram com a terra.
              </p>
              <p>
                Essa vocação nunca foi um acaso: a <em>Alquimia da Infância</em> já ganhava forma desde criança. Relembro com carinho dos meus primeiros rituais nos "dias de autocuidado", onde eu misturava folhas, flores, ervas e infusões imaginárias. Eu ajustava a iluminação, preparava os aromas e criava ambientes aconchegantes, transformando brincadeiras de menina em verdadeiras experiências de encantamento.
              </p>
              <p className="p-4 rounded-xl bg-[#121B16] border-l-2 border-[#D4AF37] text-sm text-[#EFECE6] italic">
                "Aos 17 anos, dei o meu primeiro passo oficial ao me entregar à Massoterapia. Quando todos viam incerteza e falta de abrigo familiar, minha intuição enxergava a semente de um grande propósito. Decidi permanecer, cair, levantar e honrar o que queimava em meu peito."
              </p>
            </div>

            {/* Story Block 2: The Scientific Awakening */}
            <div className="p-7 sm:p-8 rounded-3xl bg-[#15221B] border border-[#D4AF37]/20 space-y-4 shadow-lg">
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#22C55E]">
                <BookOpen className="w-4 h-4 text-[#22C55E]" />
                <span>O Despertar da Ciência & A Trajetória Integrativa</span>
              </div>
              <p>
                Em uma madrugada de 2019, em meio às tempestades emocionais, uma voz suave sussurrou uma única palavra: <strong>Naturopatia</strong>. Foi o momento em que toda aquela alquimia intuitiva começou a ganhar contornos, corpo e forma acadêmica.
              </p>
              <p>
                Em 2016, eu já havia buscado aprofundamento na Ásia, imergindo no conhecimento filosófico e técnico das terapias orientais. O grande despertar aconteceu quando percebi que a transformação que eu procurava fora já habitava na sensibilidade das minhas próprias mãos. Da fusão entre a sabedoria milenar e o rigor acadêmico, estruturei a minha abordagem integrativa que hoje transforma vidas no Espaço Zensorial.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
