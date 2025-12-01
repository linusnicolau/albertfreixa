import { QuoteIcon, ExternalLinkIcon } from '../utils/icons.js';

const InterviewsSection = () => {
    return (
        <div id="press" className="relative min-h-[50vh] bg-[#0a0a0a] text-white pt-24 pb-32 overflow-hidden border-t border-white/5">
            <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-[#0a0a0a] to-transparent z-10 pointer-events-none"></div>
            <div className="relative z-20 container mx-auto px-6 max-w-6xl">
                <div className="text-center mb-24 space-y-4">
                    <h2 className="text-blue-500 font-bold tracking-[0.25em] uppercase text-xs md:text-sm">Press & Media</h2>
                    <h3 className="text-4xl md:text-7xl font-black italic uppercase tracking-tighter">Interviews <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-600">& Insight</span></h3>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
                    <div className="lg:col-span-7">
                        <div className="flex items-center gap-4 mb-8"><span className="w-12 h-1 bg-gray-700"></span><h4 className="text-xl font-bold uppercase tracking-widest">Latest Press</h4></div>
                        <div className="space-y-4">
                            <div className="bg-[#161616] p-6 rounded-xl border border-white/5 flex justify-between items-center"><div><h5 className="text-lg font-bold text-gray-200 mb-2">Albert Freixa: The Defensive Wall of Arandina</h5><div className="flex gap-4 text-xs text-gray-500 uppercase tracking-wider font-mono"><span>Local Sport News</span><span>•</span><span>Sep 2024</span></div></div><div className="text-blue-500"><ExternalLinkIcon /></div></div>
                        </div>
                    </div>
                    <div className="lg:col-span-5 flex flex-col gap-6">
                        <div className="flex items-center gap-4 mb-2 lg:mb-2"><span className="w-12 h-1 bg-gray-700"></span><h4 className="text-xl font-bold uppercase tracking-widest">Voices</h4></div>
                        <div className="bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] p-8 rounded-xl border border-white/5 relative"><div className="absolute top-4 right-4 opacity-50"><QuoteIcon /></div><p className="text-lg md:text-xl font-serif italic text-gray-300 mb-6 relative z-10 leading-relaxed">"Discipline beats talent when talent doesn't work hard. My focus is always on consistency."</p><div><p className="text-white font-bold uppercase text-sm tracking-wide">Albert Freixa</p><p className="text-blue-500 text-xs uppercase tracking-widest mt-1">Post-match Interview, 2023</p></div></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InterviewsSection;