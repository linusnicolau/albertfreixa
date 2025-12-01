import { useState, useEffect } from 'react';
import { scrollToSection } from '../utils/icons.js';

export default function Navbar() {
    // Estado para cambiar el fondo del navbar al hacer scroll
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`fixed top-0 left-0 w-full z-50 flex justify-between items-center px-6 py-6 md:px-12 transition-all duration-300 ${scrolled ? 'bg-[#0a0a0a]/90 backdrop-blur-md shadow-lg py-4' : 'bg-transparent'}`}>
            {/* LOGO */}
            <div
                onClick={(e) => scrollToSection(e, 'hero')}
                className="text-2xl font-black tracking-tighter uppercase italic z-50 mix-blend-difference text-white cursor-pointer select-none hover:opacity-80 transition-opacity"
            >
                AF<span className="text-2xl font-black tracking-tighter uppercase italic z-50 mix-blend-difference text-blue-500 cursor-pointer select-none hover:opacity-80 transition-opacity">6</span>
            </div>

            {/* LINKS DE NAVEGACIÓN */}
            <div className="hidden lg:flex gap-8 text-sm font-semibold tracking-widest uppercase text-gray-400 z-50">
                <a href="#hero" onClick={(e) => scrollToSection(e, 'hero')} className="hover:text-white transition-colors">Home</a>
                <a href="#stats" onClick={(e) => scrollToSection(e, 'stats')} className="hover:text-white transition-colors">Stats</a>
                <a href="#media" onClick={(e) => scrollToSection(e, 'media')} className="hover:text-white transition-colors">Media</a>
                <a href="#press" onClick={(e) => scrollToSection(e, 'press')} className="hover:text-white transition-colors">Press</a>
                <a href="#contact" onClick={(e) => scrollToSection(e, 'contact')} className="hover:text-white transition-colors">Contact</a>
            </div>

            {/* BOTÓN DE ACCIÓN (BOOK) */}
            <div className="flex gap-4 z-50">
                <a href="#contact" className="border border-white/20 px-4 py-2 rounded-full text-xs uppercase hover:bg-white hover:text-black transition-all bg-black/50 backdrop-blur-md cursor-pointer">
                    Inquiries
                </a>
            </div>
        </nav>
    );
};