import { CheckIcon, InstagramIcon, scrollToSection } from '../utils/icons.js';

const TacticalBoard = () => {
    const positions = [
        { id: 1, top: '90%', left: '50%', label: '1' },
        { id: 2, top: '75%', left: '90%', label: '2' },
        { id: 4, top: '75%', left: '65%', label: '4', active: true },
        { id: 5, top: '75%', left: '35%', label: '5', active: true },
        { id: 3, top: '75%', left: '10%', label: '3' },
        { id: 6, top: '55%', left: '50%', label: '6', active: true },
        { id: 8, top: '40%', left: '30%', label: '8' },
        { id: 7, top: '40%', left: '70%', label: '7' },
        { id: 11, top: '15%', left: '85%', label: '11' },
        { id: 9, top: '10%', left: '50%', label: '9' },
        { id: 10, top: '15%', left: '15%', label: '10' },
    ];

    return (
        <div className="w-full h-full min-h-[140px] bg-gradient-to-b from-green-900/40 to-green-900/20 rounded-md border border-white/10 relative overflow-hidden backdrop-blur-sm shadow-inner aspect-[3/4] mx-auto">
            <div className="absolute inset-2 border border-white/20 rounded-sm opacity-50"></div>
            <div className="absolute top-[45%] left-2 right-2 h-px bg-white/20 opacity-30"></div>
            <div className="absolute top-[45%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 border border-white/20 rounded-full opacity-30"></div>
            {positions.map((pos) => (
                <div key={pos.id} className={`absolute flex items-center justify-center w-5 h-5 md:w-6 md:h-6 -translate-x-1/2 -translate-y-1/2 rounded-full border text-[9px] font-bold transition-all duration-500 ${pos.active ? 'bg-blue-600 border-blue-400 text-white shadow-[0_0_10px_rgba(59,130,246,0.8)] z-10' : 'bg-white/10 border-white/20 text-white/30'}`} style={{ top: pos.top, left: pos.left }}>
                    {pos.label}
                </div>
            ))}
        </div>
    );
};

export default function HeroSection() {
    return (
        <div id="hero" className="relative min-h-[100dvh] bg-[#0a0a0a] text-white overflow-hidden font-sans selection:bg-white selection:text-black flex flex-col">
            {/* NOTE: Navbar is now in App.jsx or loaded separately, but typically Hero contains layout. 
          Here we assume Navbar is rendered by App.jsx fixed at top. */}

            {/* BACKGROUND TEXT */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden z-0">
                <h1 className="text-[20vw] md:text-[23vw] font-black text-white/5 leading-none tracking-tighter translate-y-10 scale-150 md:scale-100">FREIXA</h1>
            </div>

            {/* MAIN CONTENT */}
            <main className="relative z-10 container mx-auto flex-grow grid grid-cols-1 lg:grid-cols-12 gap-4 px-6 pb-0 h-full">
                {/* TEXTO IZQUIERDA */}
                <div className="lg:col-span-4 flex flex-col justify-center space-y-6 z-30 order-1 text-center lg:text-left self-center mt-20 lg:mt-0">
                    <div className="space-y-1">
                        <h2 className="text-blue-500 font-bold tracking-widest uppercase text-xs md:text-sm">Professional Footballer</h2>
                        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase leading-[0.9] italic drop-shadow-xl">
                            Albert <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">Freixa</span>
                        </h1>
                    </div>
                    <div className="pt-2">
                        <h3 className="text-xs uppercase tracking-widest text-gray-500 mb-3 font-bold hidden md:block">Key Attributes</h3>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-2 gap-y-2 text-sm text-gray-300 text-left max-w-sm mx-auto lg:mx-0 font-medium">
                            <li className="flex items-center gap-2"> <CheckIcon /> Ball Distribution </li>
                            <li className="flex items-center gap-2"> <CheckIcon /> Technical Ability </li>
                            <li className="flex items-center gap-2"> <CheckIcon /> Aerial Dominance </li>
                            <li className="flex items-center gap-2"> <CheckIcon /> Defensive Solidity </li>
                            <li className="flex items-center gap-2"> <CheckIcon /> Consistency </li>
                        </ul>
                    </div>
                    <div className="flex items-center justify-center lg:justify-start gap-4 pt-2">
                        <a href="https://instagram.com/freeixa" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full hover:bg-white/20 transition-all border border-white/10 text-white text-xs uppercase tracking-wider backdrop-blur-md">
                            <InstagramIcon /> <span className="hidden sm:inline">@freeixa</span>
                        </a>
                    </div>
                </div>

                {/* IMAGEN CENTRAL */}
                <div className="lg:col-span-4 relative h-[50vh] lg:h-[100vh] flex items-end justify-center z-10 order-2 lg:order-2 -mx-6 lg:mx-0 pointer-events-none self-end">
                    <div className="absolute bottom-0 lg:top-[60%] left-1/2 -translate-x-1/2 lg:-translate-y-1/2 w-[80vw] h-[80vw] lg:w-[50vw] lg:h-[50vw] bg-blue-600/30 blur-[100px] rounded-full mix-blend-screen"></div>
                    <img src="/albert-freixa-hero.png" alt="Albert Freixa" className="h-full w-auto object-contain object-bottom scale-x-[-1] scale-125 lg:scale-195 origin-bottom drop-shadow-[0_0_35px_rgba(59,130,246,0.5)] relative z-10" />
                </div>

                {/* STATS DERECHA */}
                <div className="lg:col-span-4 flex flex-col justify-center items-end z-30 order-3 w-full self-center mb-8 lg:mb-0 ml-12">
                    <div className="w-full max-w-md bg-[#111]/70 backdrop-blur-xl border border-white/10 rounded-2xl p-5 shadow-2xl relative overflow-hidden group">
                        <div className="absolute -top-4 -right-2 text-[100px] font-black text-white/5 italic select-none z-0">6</div>
                        <div className="relative z-10">
                            <div className="flex justify-between items-end mb-4 border-b border-white/10 pb-3">
                                <div><h3 className="text-xl font-bold text-white uppercase italic tracking-tighter">Season Stats</h3><p className="text-[10px] text-gray-400">Latest Update: 2024/25</p></div>
                                <div className="text-right"><span className="block text-[10px] text-gray-500 uppercase">Nationality</span><span className="font-bold text-white text-sm">Spain <span className="text-lg">🇪🇸</span></span></div>
                            </div>
                            <div className="flex flex-row gap-4">
                                <div className="w-1/3 flex flex-col justify-center"><TacticalBoard /><p className="text-[9px] text-center text-gray-500 mt-2 uppercase tracking-wide">Pref. Zones</p></div>
                                <div className="w-2/3 grid grid-cols-2 gap-3 content-center">
                                    <div className="bg-white/5 rounded p-2 border border-white/5"><p className="text-[9px] text-gray-500 uppercase font-bold">Position</p><p className="text-sm font-bold text-white leading-tight">Centre Back</p><p className="text-[10px] text-blue-400">CDM / Pivot</p></div>
                                    <div className="bg-white/5 rounded p-2 border border-white/5"><p className="text-[9px] text-gray-500 uppercase font-bold">Division</p><p className="text-sm font-bold text-white">3ª RFEF</p></div>
                                    <div className="bg-white/5 rounded p-2 border border-white/5"><p className="text-[9px] text-gray-500 uppercase font-bold">Height</p><p className="text-lg font-bold text-white">1.88<span className="text-xs text-gray-400 font-normal">m</span></p></div>
                                    <div className="bg-white/5 rounded p-2 border border-white/5"><p className="text-[9px] text-gray-500 uppercase font-bold">Foot</p><div className="flex items-center gap-1"><span className="text-sm font-bold text-white">Right</span><span className="w-1.5 h-1.5 rounded-full bg-blue-500 shadow-[0_0_5px_blue]"></span></div></div>
                                </div>
                            </div>
                            <div className="mt-4 pt-3 border-t border-white/10 flex justify-between items-center">
                                <div className="text-[10px] text-gray-500">Teams: <span className="text-gray-300">Palamós, Lugo B, Ordino...</span></div>
                                {/* Botón que lleva a la sección completa de stats */}
                                <button onClick={(e) => scrollToSection(e, 'stats')} className="text-[10px] bg-white text-black px-3 py-1 rounded font-bold uppercase hover:bg-gray-200 transition-colors cursor-pointer">Full Profile</button>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <div className="absolute bottom-0 left-0 w-full h-24 lg:h-32 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/90 to-transparent z-20 pointer-events-none"></div>
        </div>
    );
};