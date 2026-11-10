import React from 'react';
import { BRAND_INFO, STATS } from '../data/content';
import { SolarLogo } from './SolarLogo';
import { ArrowUpRight, Award, Sparkles, Compass, ShieldCheck, HeartHandshake } from 'lucide-react';

interface HeroProps {
  onOpenBooking: () => void;
  onExploreMethod: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking, onExploreMethod }) => {
  return (
    <section
      id="inicio"
      className="relative min-h-[92vh] flex items-center pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden noise-subtle"
    >
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[900px] h-[500px] bg-gradient-to-tr from-[#16A34A]/15 via-[#D4AF37]/10 to-transparent blur-[140px] pointer-events-none rounded-full" />
      <div className="absolute bottom-10 right-[-10%] w-[450px] h-[450px] bg-[#16A34A]/10 blur-[130px] pointer-events-none rounded-full" />
      <div className="absolute top-10 left-[-5%] w-[400px] h-[400px] bg-[#D4AF37]/8 blur-[120px] pointer-events-none rounded-full" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Top Badges */}
        <div className="flex flex-wrap items-center gap-3 mb-6 sm:mb-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide gold-badge text-[#F3E5AB]">
            <Award className="w-4 h-4 text-[#D4AF37]" />
            <span>4º Lugar no Campeonato Internacional de Massoterapia</span>
          </div>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-[#1A2A21] border border-[#22C55E]/20 text-[#A3B5AA]">
            <span className="w-2 h-2 rounded-full bg-[#22C55E] animate-pulse" />
            <span>Espaço Zensorial • Rio de Janeiro – RJ</span>
          </div>
        </div>

        {/* Main Grid: Headline & Brand Presence */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Dramatic Display Headline & Copy */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8">
            <div className="space-y-4">
              <span className="text-xs sm:text-sm font-semibold tracking-[0.25em] uppercase text-[#D4AF37] block">
                Saúde Sistêmica & Microeletrônica Muscular
              </span>

              <h1 className="font-display font-bold tracking-tight text-[#FAF7EE] text-[2.75rem] sm:text-6xl lg:text-[4.25rem] leading-[1.04]">
                Alquimia das Raízes: <br />
                <span className="gold-gradient-text">A Raiz da Sua</span>{' '}
                <span className="italic font-serif-editorial font-normal font-light">Transformação.</span>
              </h1>
            </div>

            <p className="text-base sm:text-lg lg:text-xl text-[#C2D0C7] font-light leading-relaxed max-w-2xl">
              Despertando as raízes da saúde através da alquimia entre a sabedoria da natureza e o cuidado sistêmico. Unimos a precisão da anatomia ao cuidado botânico da fitoterapia e à delicadeza da recepção sensorial.
            </p>

            {/* Author Attribution Card */}
            <div className="flex items-center gap-3.5 p-3 rounded-2xl bg-[#18261F]/70 border border-[#D4AF37]/20 max-w-xl backdrop-blur-sm">
              <SolarLogo size="md" />
              <div className="text-xs">
                <div className="font-semibold text-[#FAF7EE] text-sm">
                  Por {BRAND_INFO.professional}
                </div>
                <div className="text-[#A3B5AA]">
                  {BRAND_INFO.role} • {BRAND_INFO.academic}
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <button
                onClick={onOpenBooking}
                className="group relative inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full text-sm font-bold uppercase tracking-wider text-[#121B16] bg-gradient-to-r from-[#F3E5AB] via-[#D4AF37] to-[#B89B30] hover:brightness-110 shadow-xl shadow-[#D4AF37]/25 transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
              >
                <HeartHandshake className="w-4 h-4 text-[#121B16]" />
                <span>Entrar em Contato</span>
                <ArrowUpRight className="w-4 h-4 text-[#121B16] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>

              <button
                onClick={onExploreMethod}
                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full text-sm font-medium text-[#FAF7EE] bg-[#18261F] hover:bg-[#20332A] border border-[#D4AF37]/30 hover:border-[#D4AF37]/60 transition-all cursor-pointer"
              >
                <Compass className="w-4 h-4 text-[#D4AF37]" />
                <span>Conhecer a Trajetória</span>
              </button>
            </div>
          </div>

          {/* Right Column: Authentic Editorial Photo & Floating Quote */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Decorative aura glow */}
              <div className="absolute -inset-1.5 rounded-[2.5rem] bg-gradient-to-b from-[#D4AF37]/30 via-[#16A34A]/20 to-[#D4AF37]/10 blur-xl opacity-80" />

              <div className="relative rounded-[2.5rem] overflow-hidden bg-[#16241D] border border-[#D4AF37]/40 shadow-2xl group">
                {/* Image Container with guaranteed mobile height */}
                <div className="relative w-full h-[400px] sm:h-[480px] lg:h-[540px] min-h-[360px] overflow-hidden bg-[#16241D]">
                  <img
                    src={BRAND_INFO.photoClinical}
                    alt="Dra. Luana Lopes — Massoterapeuta Integrativa"
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out block"
                    loading="eager"
                    onError={(e) => {
                      const target = e.currentTarget;
                      if (!target.dataset.tried) {
                        target.dataset.tried = 'true';
                        target.src = './luana-jaleco.jpg';
                      }
                    }}
                  />

                  {/* Gradient shadow overlay for text legibility */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0E1712] via-[#0E1712]/50 to-transparent" />

                  {/* Top floating pill badge */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                    <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#121B16]/85 backdrop-blur-md border border-[#D4AF37]/30 text-[11px] font-semibold text-[#FAF7EE] shadow-lg">
                      <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
                      <span>Espaço Zensorial • RJ</span>
                    </div>

                    <div className="px-2.5 py-1 rounded-full bg-[#16A34A]/80 backdrop-blur-md text-[10px] font-bold text-white uppercase tracking-wider">
                      Atendimento Presencial
                    </div>
                  </div>

                  {/* Bottom Overlaid Quote & Credentials */}
                  <div className="absolute bottom-0 inset-x-0 p-5 sm:p-7 space-y-3.5">
                    <blockquote className="space-y-2">
                      <p className="font-serif-editorial text-base sm:text-lg text-[#FFF9EB] font-light leading-snug italic drop-shadow-md">
                        "Eu sou a prova viva de que o cuidado cura, de que o amor é o maior legado e de que cada um de nós é plenamente capaz de renascer e florescer com soberania sobre a própria história."
                      </p>
                      <footer className="flex items-center justify-between pt-1">
                        <div>
                          <span className="text-xs uppercase tracking-wider text-[#D4AF37] font-semibold block">
                            — Luana Lopes
                          </span>
                          <span className="text-[10px] text-[#A3B5AA]">
                            Criadora do Método Alquimia das Raízes
                          </span>
                        </div>
                      </footer>
                    </blockquote>

                    {/* Official Registration Pills */}
                    <div className="flex flex-wrap gap-1.5 pt-1 border-t border-[#D4AF37]/20 text-[10px] text-[#C2D0C7]">
                      <span className="px-2 py-0.5 rounded bg-[#121B16]/90 border border-[#D4AF37]/20 font-mono">
                        FENATE/RJ 0080
                      </span>
                      <span className="px-2 py-0.5 rounded bg-[#121B16]/90 border border-[#D4AF37]/20 font-mono">
                        ABRANA 100647
                      </span>
                      <span className="px-2 py-0.5 rounded bg-[#121B16]/90 border border-[#D4AF37]/20 font-mono">
                        CRTH-BR 02840/25
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Real Stats Metric Cards Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mt-16 sm:mt-20 pt-10 border-t border-[#D4AF37]/15">
          {STATS.map((stat, i) => (
            <div
              key={i}
              className="glass-card rounded-2xl p-5 sm:p-6 transition-all duration-300 hover:-translate-y-1 group"
            >
              <div className="font-display font-bold text-2xl sm:text-3xl lg:text-4xl gold-gradient-text tracking-tight mb-1">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm font-semibold text-[#FAF7EE] mb-1">
                {stat.label}
              </div>
              <div className="text-[11px] sm:text-xs text-[#A3B5AA] leading-snug">
                {stat.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
