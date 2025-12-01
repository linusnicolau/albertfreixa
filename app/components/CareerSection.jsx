import { useState } from 'react';
import { ChevronDownIcon, TrophyIcon } from '../utils/icons.js';

export default function CareerSection() {
    const [openId, setOpenId] = useState(null);
    const toggleAccordion = (id) => setOpenId(openId === id ? null : id);

    const careerData = [
        { id: 'arandina', team: 'Arandina CF', league: '3ª RFEF', period: '2024 - Present', logoPlaceholder: 'AR', details: 'Current season. Consolidating position in the defensive line.', stats: null },
        { id: 'ordino', team: 'FC Ordino', league: '1st Div Andorra', period: '2023 - 2024', logoPlaceholder: 'FCO', details: 'Full season in top-tier football.', stats: { matches: 0, minutes: 0, goals: 0, clean_sheets: 0 } },
        { id: 'llosetense', team: 'C.D. Llosetense', league: '3ª RFEF', period: 'Jan 23 - Apr 23', logoPlaceholder: 'CDL', details: 'Winter signing. Immediate impact on defensive stability.', stats: { matches: 0, minutes: 0, goals: 0, clean_sheets: 0 } },
        { id: 'cangibert', team: 'Can Gibert U.E.', league: '1ª Catalana', period: '2020 - 2022', logoPlaceholder: 'CG', details: 'Developed leadership skills. Commanded the defensive line.', stats: { matches: 0, minutes: 0, goals: 0, clean_sheets: 0 } },
        { id: 'lugo', team: 'CD Lugo B', league: '2ª RFEF (Trials)', period: 'May 2022', logoPlaceholder: 'LUG', details: 'High-performance trials in subsidiary environment.', stats: null },
        { id: 'palafrugell', team: 'F.C. Palafrugell', league: '2ª Catalana', period: '2019 - 2020', logoPlaceholder: 'FCP', details: 'Transition to Senior football.', stats: null },
        { id: 'palamos', team: 'Palamós C.F.', league: 'Youth Preferential', period: '2013 - 2015', logoPlaceholder: 'PAL', details: 'Formative stage.', stats: null },
        { id: 'fcb', team: 'FC Barcelona', league: 'La Masia (Trials)', period: 'Summer 2012', logoPlaceholder: 'FCB', details: 'Access trials. Methodology learning.', stats: null },
        { id: 'begur', team: 'Begur Sports Foundation', league: 'Youth Academy', period: '2006 - 2011', logoPlaceholder: 'BEG', details: 'League Champions.', achievements: true, stats: null }
    ];

    return (
        <div id="stats" className="relative min-h-screen bg-[#0a0a0a] text-white pt-24 pb-24 overflow-hidden border-t border-white/5">
            <div className="absolute top-0 left-0 w-full h-48 bg-gradient-to-b from-[#0a0a0a] to-transparent z-10 pointer-events-none"></div>
            <div className="fixed top-[20%] right-0 w-[60vw] h-[60vw] bg-blue-900/5 blur-[150px] rounded-full pointer-events-none"></div>
            <div className="relative z-20 container mx-auto px-6 max-w-6xl">
                <div className="text-center mb-24 space-y-4 relative z-20">
                    <h2 className="text-blue-500 font-bold tracking-[0.25em] uppercase text-xs md:text-sm">Timeline & Performance</h2>
                    <h3 className="text-4xl md:text-6xl font-black italic uppercase tracking-tighter">Career <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-600">Stats</span></h3>
                </div>
                <div className="relative">
                    <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500/20 via-white/10 to-transparent md:-translate-x-1/2 z-0"></div>
                    <div className="flex flex-col gap-8 md:gap-0">
                        {careerData.map((item, index) => {
                            const isOpen = openId === item.id;
                            const isEven = index % 2 === 0;
                            return (
                                <div key={item.id} className={`relative z-10 flex flex-col md:flex-row items-center w-full ${isEven ? 'md:flex-row-reverse' : ''} ${isOpen ? 'mb-12' : 'mb-0'} transition-all duration-500`}>
                                    <div className="hidden md:block md:w-1/2"></div>
                                    <div className="absolute left-6 md:left-1/2 -translate-x-1/2 flex items-center justify-center z-20">
                                        <div className={`bg-[#0a0a0a] border border-white/10 px-3 py-1 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider shadow-xl transition-colors duration-300 ${isOpen ? 'text-blue-400 border-blue-500/50' : 'text-gray-500'}`}>{item.period}</div>
                                    </div>
                                    <div className={`w-full md:w-1/2 pl-16 md:pl-0 ${isEven ? 'md:pr-12' : 'md:pl-12'}`}>
                                        <button onClick={() => toggleAccordion(item.id)} className={`w-full text-left relative overflow-hidden rounded-xl border transition-all duration-500 group ${isOpen ? 'bg-[#161616] border-blue-500/30 shadow-[0_0_30px_rgba(59,130,246,0.1)]' : 'bg-[#111]/60 border-white/5 hover:border-white/20'}`}>
                                            <div className="p-5 md:p-6">
                                                <div className="flex items-center gap-4">
                                                    <div className={`w-12 h-12 md:w-14 md:h-14 rounded-full bg-black border-2 flex items-center justify-center relative overflow-hidden flex-shrink-0 transition-colors ${isOpen ? 'border-blue-500' : 'border-white/10'}`}><span className="text-xs font-black text-gray-700">{item.logoPlaceholder}</span></div>
                                                    <div className="flex-grow min-w-0"><h4 className={`text-lg md:text-xl font-black uppercase italic tracking-tight truncate transition-colors ${isOpen ? 'text-white' : 'text-gray-300 group-hover:text-white'}`}>{item.team}</h4><p className="text-xs md:text-sm text-gray-500 uppercase font-medium">{item.league}</p></div>
                                                    <div className={`text-gray-600 transition-colors ${isOpen ? 'text-blue-500' : 'group-hover:text-white'}`}><ChevronDownIcon isOpen={isOpen} /></div>
                                                </div>
                                                <div className={`grid transition-all duration-500 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100 mt-6 pt-6 border-t border-white/5' : 'grid-rows-[0fr] opacity-0'}`}>
                                                    <div className="overflow-hidden min-h-0">
                                                        <p className="text-gray-400 text-sm leading-relaxed mb-4">{item.details}</p>
                                                        {item.achievements && (<div className="inline-flex items-center gap-2 text-yellow-500 text-xs font-bold bg-yellow-500/5 px-3 py-1.5 rounded border border-yellow-500/10 mb-4"><TrophyIcon /><span>LEAGUE CHAMPIONS</span></div>)}
                                                        {item.stats && (<div className="bg-black/40 rounded-lg p-4 border border-white/5"><h5 className="text-[10px] text-blue-500 uppercase tracking-widest font-bold mb-3">Performance Stats</h5><div className="grid grid-cols-2 md:grid-cols-4 gap-4"><div className="text-center p-2 bg-white/5 rounded border border-white/5"><span className="block text-xl font-bold text-white">{item.stats.matches}</span><span className="text-[10px] text-gray-500 uppercase">Matches</span></div><div className="text-center p-2 bg-white/5 rounded border border-white/5"><span className="block text-xl font-bold text-white">{item.stats.minutes}'</span><span className="text-[10px] text-gray-500 uppercase">Minutes</span></div><div className="text-center p-2 bg-white/5 rounded border border-white/5"><span className="block text-xl font-bold text-white">{item.stats.goals}</span><span className="text-[10px] text-gray-500 uppercase">Goals</span></div><div className="text-center p-2 bg-white/5 rounded border border-white/5"><span className="block text-xl font-bold text-white">{item.stats.clean_sheets}</span><span className="text-[10px] text-gray-500 uppercase">Clean Sheets</span></div></div></div>)}
                                                    </div>
                                                </div>
                                            </div>
                                        </button>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                    <div className="flex justify-center mt-12"><div className="w-2 h-2 bg-gray-700 rounded-full"></div></div>
                </div>
            </div>
        </div>
    );
};