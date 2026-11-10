import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Manifesto } from './components/Manifesto';
import { Specialties } from './components/Specialties';
import { MethodSection } from './components/MethodSection';
import { AboutSection } from './components/AboutSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { BookingSection } from './components/BookingSection';
import { FAQSection } from './components/FAQSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export default function App() {
  const [selectedServiceId, setSelectedServiceId] = useState<string>('massoterapia-avancada');

  const scrollToBooking = (serviceId?: string) => {
    if (serviceId) {
      setSelectedServiceId(serviceId);
    }
    const bookingEl = document.getElementById('contato');
    if (bookingEl) {
      bookingEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToAbout = () => {
    const aboutEl = document.getElementById('sobre');
    if (aboutEl) {
      aboutEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#121B16] text-[#EFECE6] font-sans antialiased selection:bg-[#D4AF37]/30 selection:text-[#FFF8E7] flex flex-col justify-between">
      {/* Top Navbar */}
      <Navbar onOpenBooking={() => scrollToBooking()} />

      {/* Main Content Sections (Strict Order: inicio -> especialidades -> sobre -> contato) */}
      <main className="flex-1">
        {/* 1. Início (Hero + Manifesto Integrado) */}
        <Hero
          onOpenBooking={() => scrollToBooking()}
          onExploreMethod={() => scrollToAbout()}
        />

        <Manifesto />

        {/* 2. Especialidades & Rituais */}
        <Specialties
          onSelectService={(serviceId) => scrollToBooking(serviceId)}
        />

        {/* O Método Integrativo & Rituais Sensoriais */}
        <MethodSection />

        {/* 3. Sobre Mim (Trajetória de Luana Lopes, Ásia, Mundial e Credenciais) */}
        <AboutSection />

        {/* Depoimentos dos Interagentes */}
        <TestimonialsSection />

        {/* 4. Contato & Agendamento Online Inteligente */}
        <BookingSection preselectedServiceId={selectedServiceId} />

        {/* Perguntas Frequentes (FAQ) */}
        <FAQSection />
      </main>

      {/* Rodapé Institucional */}
      <Footer />

      {/* Botão Flutuante do WhatsApp */}
      <FloatingWhatsApp />
    </div>
  );
}
