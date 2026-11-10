import React, { useState } from 'react';
import { FAQS, BRAND_INFO } from '../data/content';
import { ChevronDown, HelpCircle, MessageCircle } from 'lucide-react';

export const FAQSection: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>('faq-1');

  const toggleFAQ = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-20 lg:py-28 bg-[#0E1612] relative overflow-hidden border-t border-[#D4AF37]/15">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest text-[#D4AF37] bg-[#1A2820] border border-[#D4AF37]/25">
            <HelpCircle className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>Tire Suas Dúvidas</span>
          </div>

          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-[#FAF7EE] tracking-tight">
            Perguntas Frequentes
          </h2>

          <p className="text-base text-[#A3B5AA] leading-relaxed max-w-2xl mx-auto">
            Esclarecimentos detalhados sobre o conceito de interagente, rituais sensoriais, agendamentos e cuidados integrativos.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {FAQS.map((faq, index) => {
            const isOpen = openId === faq.id;

            return (
              <div
                key={faq.id}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? 'bg-[#16231B] border-[#D4AF37]/50 shadow-lg shadow-[#D4AF37]/5'
                    : 'bg-[#121B16] border-[#D4AF37]/15 hover:border-[#D4AF37]/35'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(faq.id)}
                  aria-expanded={isOpen}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                >
                  <div className="flex items-center gap-4">
                    <span className="font-display font-bold text-xs sm:text-sm text-[#D4AF37] w-6 flex-shrink-0">
                      0{index + 1}
                    </span>
                    <span className="font-display font-semibold text-sm sm:text-base text-[#FAF7EE]">
                      {faq.question}
                    </span>
                  </div>

                  <div
                    className={`p-2 rounded-full border border-[#D4AF37]/20 flex-shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 bg-[#D4AF37]/15 text-[#D4AF37]' : 'text-[#A3B5AA]'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-xs sm:text-sm text-[#C2D0C7] font-light leading-relaxed border-t border-[#D4AF37]/10 space-y-3">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Extra question helper */}
        <div className="mt-12 text-center p-6 rounded-2xl bg-[#142019] border border-[#D4AF37]/20 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left space-y-0.5">
            <div className="font-display font-semibold text-sm text-[#FAF7EE]">
              Tem alguma dúvida específica ou condição física que não viu aqui?
            </div>
            <div className="text-xs text-[#A3B5AA]">
              Fale diretamente com Luana Lopes pelo WhatsApp para uma orientação prévia.
            </div>
          </div>
          <a
            href={`https://wa.me/${BRAND_INFO.phoneRaw}?text=${encodeURIComponent(
              'Olá Luana! Tenho uma dúvida sobre os atendimentos no Espaço Zensorial.'
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold text-[#121B16] bg-[#D4AF37] hover:brightness-110 flex-shrink-0 transition-all cursor-pointer"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Falar no WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
};
