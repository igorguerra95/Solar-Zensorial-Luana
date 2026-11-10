import React from 'react';
import { BRAND_INFO } from '../data/content';
import { SolarLogo } from './SolarLogo';
import { Instagram, Mail, Phone, ShieldCheck, Heart, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      className="bg-[#0A100D] border-t border-[#D4AF37]/20 text-[#A3B5AA] pt-16 pb-12 relative overflow-hidden"
      style={{ paddingBottom: 'max(3rem, calc(2rem + env(safe-area-inset-bottom, 0px)))' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#D4AF37]/15">
          {/* Col 1: Brand Info & Mission */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <SolarLogo size="lg" />
              <div>
                <span className="font-display font-bold text-xl text-[#FAF7EE] tracking-tight block">
                  Solar Zensorial
                </span>
                <span className="text-xs text-[#D4AF37] font-medium tracking-wide">
                  {BRAND_INFO.professional}
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#A3B5AA] leading-relaxed max-w-md font-light">
              "{BRAND_INFO.tagline}"
            </p>

            <div className="pt-2">
              <div className="text-[11px] text-[#FAF7EE] font-medium mb-1">
                {BRAND_INFO.role}
              </div>
              <div className="text-[11px] text-[#A3B5AA]">
                {BRAND_INFO.specialization} • {BRAND_INFO.academic}
              </div>
            </div>
          </div>

          {/* Col 2: Credenciais & Conselho */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="font-display font-semibold text-xs uppercase tracking-widest text-[#FAF7EE]">
              Registros Oficiais & Associações
            </h4>
            <div className="space-y-2 text-xs">
              <div className="flex items-center gap-2 p-2.5 rounded-xl bg-[#121B16] border border-[#D4AF37]/15">
                <ShieldCheck className="w-4 h-4 text-[#22C55E]" />
                <span className="text-[#FAF7EE]">FENATE/RJ:</span>
                <span className="font-mono text-[#D4AF37]">Nº 0080</span>
              </div>
              <div className="flex items-center gap-2 p-2.5 rounded-xl bg-[#121B16] border border-[#D4AF37]/15">
                <ShieldCheck className="w-4 h-4 text-[#22C55E]" />
                <span className="text-[#FAF7EE]">ABRANA:</span>
                <span className="font-mono text-[#D4AF37]">Nº 100647</span>
              </div>
              <div className="flex items-center gap-2 p-2.5 rounded-xl bg-[#121B16] border border-[#D4AF37]/15">
                <ShieldCheck className="w-4 h-4 text-[#22C55E]" />
                <span className="text-[#FAF7EE]">CRTH-BR:</span>
                <span className="font-mono text-[#D4AF37]">Nº 02840/25</span>
              </div>
            </div>
          </div>

          {/* Col 3: Direct Links & Channels */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-display font-semibold text-xs uppercase tracking-widest text-[#FAF7EE]">
              Canais Oficiais
            </h4>
            <div className="space-y-2 text-xs">
              <a
                href={`https://wa.me/${BRAND_INFO.phoneRaw}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 p-2 text-[#C2D0C7] hover:text-[#D4AF37] transition-colors"
              >
                <Phone className="w-4 h-4 text-[#22C55E]" />
                <span>{BRAND_INFO.phoneDisplay}</span>
              </a>

              <a
                href={`mailto:${BRAND_INFO.email}`}
                className="flex items-center gap-2.5 p-2 text-[#C2D0C7] hover:text-[#D4AF37] transition-colors"
              >
                <Mail className="w-4 h-4 text-[#D4AF37]" />
                <span className="truncate">{BRAND_INFO.email}</span>
              </a>

              <a
                href={BRAND_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 p-2 text-[#C2D0C7] hover:text-[#D4AF37] transition-colors"
              >
                <Instagram className="w-4 h-4 text-[#D4AF37]" />
                <span>{BRAND_INFO.instagram}</span>
              </a>
            </div>

            <div className="pt-2">
              <button
                onClick={scrollToTop}
                className="inline-flex items-center gap-1.5 text-xs text-[#A3B5AA] hover:text-[#FAF7EE] p-2 rounded-lg bg-[#121B16] border border-[#D4AF37]/20 transition-all cursor-pointer"
              >
                <ArrowUp className="w-3.5 h-3.5" />
                <span>Voltar ao topo</span>
              </button>
            </div>
          </div>
        </div>

        {/* Disclaimer & Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left text-[11px] text-[#7A8C82]">
          <p className="max-w-2xl leading-relaxed">
            <strong>Aviso de Saúde:</strong> A massoterapia integrativa, fitoterapia e terapias complementares atuam para promover o bem-estar sistêmico e o equilíbrio psicossomático, não substituindo o diagnóstico ou tratamento médico convencional.
          </p>

          <p className="flex items-center gap-1 flex-shrink-0">
            <span>© {new Date().getFullYear()} Solar Zensorial - Luana Lopes. Todos os direitos reservados.</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
