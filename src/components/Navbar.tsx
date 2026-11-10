import React, { useState, useEffect } from 'react';
import { BRAND_INFO } from '../data/content';
import { SolarLogo } from './SolarLogo';
import { Menu, X, ArrowUpRight, ShieldCheck, Calendar, Phone } from 'lucide-react';

interface NavbarProps {
  onOpenBooking: (serviceId?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Início', href: '#inicio' },
    { label: 'Especialidades', href: '#especialidades' },
    { label: 'O Método', href: '#metodo' },
    { label: 'Sobre Luana', href: '#sobre' },
    { label: 'Depoimentos', href: '#depoimentos' },
    { label: 'Perguntas Frequentes', href: '#faq' },
    { label: 'Contato', href: '#contato' },
  ];

  const handleLinkClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'glass-nav py-3 shadow-2xl shadow-black/40'
            : 'bg-gradient-to-b from-[#121B16]/95 via-[#121B16]/80 to-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo and Brand Title */}
            <a
              href="#inicio"
              className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/50 rounded-lg p-1"
            >
              <SolarLogo size="md" className="group-hover:scale-105 transition-transform duration-500" />
              <div className="flex flex-col">
                <span className="font-display font-bold text-lg sm:text-xl tracking-tight text-[#EFECE6] group-hover:text-[#FFF8E7] transition-colors flex items-center gap-1.5">
                  Luana Lopes
                </span>
                <span className="text-[10px] sm:text-[11px] font-medium text-[#A3B5AA] leading-tight">
                  Massoterapeuta integrativa & especialista em Fitoterapia
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-7">
              {navLinks.slice(0, 6).map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleLinkClick(link.href)}
                  className="text-xs uppercase tracking-widest font-medium text-[#C8D3CC] hover:text-[#D4AF37] transition-colors cursor-pointer"
                >
                  {link.label}
                </button>
              ))}
            </nav>

            {/* Desktop Actions */}
            <div className="hidden sm:flex items-center gap-3">
              <div className="hidden xl:flex items-center gap-1.5 text-xs text-[#A3B5AA] px-2.5 py-1 rounded-full border border-[#D4AF37]/20 bg-[#16251D]/60">
                <ShieldCheck className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>CRTH-BR 02840/25</span>
              </div>

              <button
                onClick={() => onOpenBooking()}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider text-[#121B16] bg-gradient-to-r from-[#F3E5AB] via-[#D4AF37] to-[#B89B30] hover:brightness-110 shadow-lg shadow-[#D4AF37]/20 transition-all cursor-pointer active:scale-95"
              >
                <Calendar className="w-3.5 h-3.5 text-[#121B16]" />
                <span>Entrar em Contato</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#121B16]" />
              </button>
            </div>

            {/* Mobile Hamburger Toggle */}
            <div className="flex items-center gap-2 lg:hidden">
              <button
                onClick={() => onOpenBooking()}
                className="sm:hidden px-3 py-1.5 rounded-full text-[11px] font-semibold text-[#121B16] bg-[#D4AF37] cursor-pointer"
              >
                Contato
              </button>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Abrir menu de navegação"
                className="p-2 rounded-lg text-[#EFECE6] hover:text-[#D4AF37] hover:bg-[#1A2820] transition-colors cursor-pointer"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Drawer content with safe area support for iPhone notch and home indicator */}
          <div
            className="fixed inset-y-0 right-0 w-full max-w-xs bg-[#15221B] border-l border-[#D4AF37]/20 p-6 flex flex-col justify-between shadow-2xl z-50 overflow-y-auto"
            style={{
              paddingTop: 'max(1.5rem, calc(1rem + env(safe-area-inset-top, 0px)))',
              paddingBottom: 'max(1.5rem, calc(1rem + env(safe-area-inset-bottom, 0px)))',
            }}
          >
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-[#D4AF37]/15">
                <div className="flex items-center gap-2.5">
                  <SolarLogo size="sm" />
                  <div>
                    <div className="font-display font-bold text-sm text-[#EFECE6]">
                      Luana Lopes
                    </div>
                    <div className="text-[10px] text-[#A3B5AA] leading-tight">
                      Massoterapeuta integrativa & especialista em Fitoterapia
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-1.5 rounded-md text-[#A3B5AA] hover:text-white"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Navigation Links */}
              <div className="flex flex-col gap-2 mt-6">
                {navLinks.map((link) => (
                  <button
                    key={link.href}
                    onClick={() => handleLinkClick(link.href)}
                    className="flex items-center justify-between py-3 px-3 rounded-lg text-left text-sm font-medium text-[#EFECE6] hover:text-[#D4AF37] hover:bg-[#1F3027] transition-all cursor-pointer"
                  >
                    <span>{link.label}</span>
                    <ArrowUpRight className="w-4 h-4 text-[#A3B5AA]" />
                  </button>
                ))}
              </div>
            </div>

            {/* Bottom Mobile Drawer Actions */}
            <div className="pt-6 border-t border-[#D4AF37]/15 space-y-3">
              <div className="text-[11px] text-[#A3B5AA] flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#D4AF37]" />
                <span>FENATE/RJ 0080 • CRTH-BR 02840/25</span>
              </div>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full py-3 rounded-xl font-semibold text-xs uppercase tracking-wider text-[#121B16] bg-gradient-to-r from-[#F3E5AB] via-[#D4AF37] to-[#B89B30] flex items-center justify-center gap-2 cursor-pointer"
              >
                <Calendar className="w-4 h-4" />
                <span>Entrar em Contato</span>
              </button>

              <a
                href={`https://wa.me/${BRAND_INFO.phoneRaw}?text=${encodeURIComponent(
                  'Olá Luana! Gostaria de informações sobre atendimento no Espaço Zensorial.'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 rounded-xl text-xs font-medium text-[#A3B5AA] border border-[#D4AF37]/20 flex items-center justify-center gap-2 hover:bg-[#1F3027] transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#22C55E]" />
                <span>WhatsApp: {BRAND_INFO.phoneDisplay}</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
