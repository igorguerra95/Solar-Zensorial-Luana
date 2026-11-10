import React, { useState } from 'react';
import { BRAND_INFO } from '../data/content';
import { MessageCircle, X } from 'lucide-react';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  const whatsappUrl = `https://wa.me/${BRAND_INFO.phoneRaw}?text=${encodeURIComponent(
    'Olá Luana! Gostaria de informações para agendar um atendimento no Espaço Zensorial.'
  )}`;

  return (
    <div
      className="fixed z-50 flex items-end flex-col gap-2 pointer-events-auto"
      style={{
        bottom: 'max(1.5rem, calc(1rem + env(safe-area-inset-bottom, 0px)))',
        right: 'max(1.25rem, calc(1rem + env(safe-area-inset-right, 0px)))',
      }}
    >
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 p-3 rounded-2xl bg-[#16231B] border border-[#22C55E]/40 shadow-2xl text-xs text-[#FAF7EE] max-w-xs animate-in fade-in slide-in-from-bottom-2 duration-300">
          <div className="flex-1 leading-snug">
            <span className="font-semibold text-[#22C55E] block text-[11px] uppercase tracking-wider">
              Espaço Zensorial
            </span>
            <span>Olá! Tem dúvidas ou quer agendar seu atendimento com Luana Lopes?</span>
          </div>
          <button
            onClick={() => setShowTooltip(false)}
            aria-label="Fechar mensagem"
            className="p-1 rounded-full text-[#A3B5AA] hover:text-white"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Conversar no WhatsApp com Luana Lopes"
        className="relative group p-4 rounded-full bg-gradient-to-r from-[#22C55E] to-[#16A34A] text-white shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300 whatsapp-pulse flex items-center justify-center cursor-pointer"
      >
        <MessageCircle className="w-7 h-7 fill-white text-[#16A34A]" />

        {/* Pulse ring animation */}
        <span className="absolute inset-0 rounded-full bg-[#22C55E] opacity-30 animate-ping -z-10" />

        <span className="sr-only">Falar no WhatsApp com Luana Lopes</span>
      </a>
    </div>
  );
};
