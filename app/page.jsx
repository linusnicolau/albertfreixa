"use client"

import { useEffect } from "react";
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import CareerSection from './components/CareerSection';
import MediaSection from './components/MediaSection';
import InterviewSection from './components/InterviewsSection';
import ContactSection from './components/ContactSection';

export default function App() {
  useEffect(() => {
    document.title = "Albert Freixa | Professional Footballer";
  }, []);

  return (
    <div className="bg-[#0a0a0a]">
      {/* Para que funcione la navegación entre archivos en tu proyecto local:
          1. Asegúrate de que los IDs (id="hero", id="stats", etc.) están en los componentes.
          2. Importa Navbar en App.jsx y colócalo arriba del todo.
      */}
      <Navbar />
      <HeroSection />
      <CareerSection />
      <MediaSection />
      <InterviewSection />
      <ContactSection />
    </div>
  );
}