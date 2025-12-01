import { MailIcon, WhatsAppIcon, InstagramIcon, ArrowUpRight } from '../utils/icons.js';

export default function ContactSection() {
    return (
        <div id="contact" className="relative min-h-screen bg-[#0a0a0a] text-white pt-24 pb-12 overflow-hidden border-t border-white/5 flex flex-col justify-between">
            <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-[#0a0a0a] to-transparent z-10 pointer-events-none"></div>
            <div className="absolute bottom-0 right-0 w-[60vw] h-[60vw] bg-blue-900/10 blur-[150px] rounded-full pointer-events-none"></div>
            <div className="relative z-20 container mx-auto px-6 max-w-6xl flex-grow flex flex-col justify-center">
                <div className="text-center mb-16 md:mb-24 space-y-4">
                    <h2 className="text-blue-500 font-bold tracking-[0.25em] uppercase text-xs md:text-sm">Get In Touch</h2>
                    <h3 className="text-4xl md:text-7xl font-black italic uppercase tracking-tighter">Contact <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-600">& Booking</span></h3>
                    <p className="text-gray-400 max-w-lg mx-auto text-sm md:text-base leading-relaxed">Available for trials, transfers, and professional inquiries. Currently based in Spain, open to international opportunities.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
                    <a href="mailto:albertfreixa10@gmail.com" className="group relative bg-[#111] rounded-2xl p-8 border border-white/5 hover:border-blue-500/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_10px_40px_rgba(59,130,246,0.1)] flex flex-col items-center text-center">
                        <div className="w-16 h-16 bg-blue-500/10 rounded-full flex items-center justify-center text-blue-500 mb-6 group-hover:bg-blue-500 group-hover:text-white transition-colors duration-300"><MailIcon /></div>
                        <h4 className="text-xl font-bold uppercase italic tracking-wide mb-2">Email</h4><p className="text-gray-400 text-sm mb-6">For official club proposals and detailed documentation.</p><span className="text-white font-mono text-sm border-b border-white/20 pb-1 group-hover:border-blue-500 transition-colors">albertfreixa10@gmail.com</span>
                    </a>
                    <a href="https://wa.me/34629638725" target="_blank" rel="noopener noreferrer" className="group relative bg-[#111] rounded-2xl p-8 border border-white/5 hover:border-green-500/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_10px_40px_rgba(34,197,94,0.1)] flex flex-col items-center text-center">
                        <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center text-green-500 mb-6 group-hover:bg-green-500 group-hover:text-white transition-colors duration-300"><WhatsAppIcon /></div>
                        <h4 className="text-xl font-bold uppercase italic tracking-wide mb-2">WhatsApp</h4><p className="text-gray-400 text-sm mb-6">Direct contact for agents and quick inquiries.</p><span className="text-white font-mono text-sm border-b border-white/20 pb-1 group-hover:border-green-500 transition-colors flex items-center gap-2">+34 629 638 725 <ArrowUpRight /></span>
                    </a>
                    <a href="https://instagram.com/freeixa" target="_blank" rel="noopener noreferrer" className="group relative bg-[#111] rounded-2xl p-8 border border-white/5 hover:border-pink-500/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_10px_40px_rgba(236,72,153,0.1)] flex flex-col items-center text-center">
                        <div className="w-16 h-16 bg-pink-500/10 rounded-full flex items-center justify-center text-pink-500 mb-6 group-hover:bg-pink-500 group-hover:text-white transition-colors duration-300"><InstagramIcon /></div>
                        <h4 className="text-xl font-bold uppercase italic tracking-wide mb-2">Instagram</h4><p className="text-gray-400 text-sm mb-6">Follow the daily routine and match highlights.</p><span className="text-white font-mono text-sm border-b border-white/20 pb-1 group-hover:border-pink-500 transition-colors flex items-center gap-2">@freeixa <ArrowUpRight /></span>
                    </a>
                </div>
            </div>
            <footer className="mt-24 border-t border-white/10 bg-black pt-12 pb-8">
                <div className="container mx-auto px-6 text-center">
                    <div className="text-2xl font-black tracking-tighter uppercase italic text-white/20 mb-6 select-none">AF<span className="text-blue-900/40">6</span></div>
                    <p className="text-gray-600 text-xs uppercase tracking-widest mb-4">© 2025 Albert Freixa. Professional Footballer Profile.</p>
                </div>
            </footer>
        </div>
    );
};