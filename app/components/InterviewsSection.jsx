import { ExternalLinkIcon, InstagramIcon, PlayIcon } from '../utils/icons.js';

const InterviewsSection = () => {

    // DATOS DE LAS 3 ENTREVISTAS
    // 1. Rellena los 'link' con las URLs reales.
    // 2. Rellena 'thumbnail' con la ruta de tu imagen (ej: '/thumbnails/interview1.jpg').
    //    Si lo dejas en null, se mostrará el fondo abstracto por defecto.
    const interviews = [
        {
            id: 1,
            title: "Pre-Match Thoughts",
            context: "Pre-game analysis & sensations against UE Santa Coloma",
            date: "Season 24/25",
            link: "https://www.instagram.com/reel/DCreMrjoXkM/?igsh=MWt3cWtpYjI1aDU4dw%3D%3D",
            duration: "Reel",
            thumbnail: 'tne1.jpg'
        },
        {
            id: 2,
            title: "Last game of the season",
            context: "Last game of the season analysis",
            date: "Season 23/24",
            link: "https://www.instagram.com/reel/DDrFmALIqH6/?igsh=MTk0OTJ6amE3b3owOA%3D%3D",
            duration: "Reel",
            thumbnail: 'tne2.jpg'
        },
        {
            id: 3,
            title: "Post-draw thoughts",
            context: "Draw analysis against UE Santa Coloma",
            date: "Season 23/24",
            link: "https://www.instagram.com/reel/DFk2eZgIdz5/?igsh=aGxsb3VhNDU5bHF1",
            duration: "Reel",
            thumbnail: 'tne3.jpg'
        }
    ];

    return (
        <div id="press" className="relative min-h-[60vh] bg-[#0a0a0a] text-white pt-24 pb-32 overflow-hidden border-t border-white/5">

            {/* Background Effects */}
            <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-[#0a0a0a] to-transparent z-10 pointer-events-none"></div>
            <div className="absolute bottom-0 right-0 w-[40vw] h-[40vw] bg-blue-900/5 blur-[100px] rounded-full pointer-events-none"></div>

            <div className="relative z-20 container mx-auto px-6 max-w-6xl">

                {/* Header */}
                <div className="text-center mb-16 space-y-4">
                    <h2 className="text-blue-500 font-bold tracking-[0.25em] uppercase text-xs md:text-sm">Press & Media</h2>
                    <h3 className="text-4xl md:text-6xl font-black italic uppercase tracking-tighter">
                        Interviews <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-600">& Insight</span>
                    </h3>
                    <p className="text-gray-400 text-sm max-w-lg mx-auto">
                        Personal reflections and media appearances.
                    </p>
                </div>

                {/* Grid de 3 Entrevistas */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {interviews.map((interview) => (
                        <a
                            key={interview.id}
                            href={interview.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative bg-[#111] rounded-2xl border border-white/5 hover:border-blue-500/50 overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_40px_rgba(0,0,0,0.3)] flex flex-col"
                        >
                            {/* Thumbnail Area - AHORA EN FORMATO VERTICAL 9:16 */}
                            <div className="aspect-[9/16] bg-gradient-to-br from-gray-800 to-black relative flex items-center justify-center overflow-hidden">

                                {/* LÓGICA DE THUMBNAIL */}
                                {interview.thumbnail ? (
                                    <img
                                        src={interview.thumbnail}
                                        alt={interview.title}
                                        className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                    />
                                ) : (
                                    // Fallback: Fondo abstracto si no hay imagen
                                    <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] group-hover:scale-105 transition-transform duration-700"></div>
                                )}

                                {/* Overlay oscuro sutil para mejorar contraste si hay foto */}
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors"></div>

                                {/* Play Button Overlay */}
                                <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 group-hover:scale-110 group-hover:bg-blue-600 group-hover:border-blue-500 transition-all duration-300 z-10 shadow-lg">
                                    <PlayIcon />
                                </div>

                                {/* Platform Badge */}
                                <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider flex items-center gap-1 border border-white/10 text-white z-20">
                                    <InstagramIcon /> Reel
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-6 flex flex-col flex-grow bg-[#111] relative z-20">
                                <div className="flex justify-between items-start mb-3">
                                    <span className="text-blue-500 text-xs font-bold uppercase tracking-widest">{interview.date}</span>
                                    <ExternalLinkIcon className="text-gray-600 group-hover:text-white transition-colors w-4 h-4" />
                                </div>

                                <h4 className="text-lg font-bold text-white mb-2 leading-tight group-hover:text-blue-400 transition-colors">
                                    {interview.title}
                                </h4>
                                <p className="text-xs text-gray-500 mb-4 flex-grow">
                                    {interview.context}
                                </p>

                                <div className="pt-4 border-t border-white/5 flex items-center text-xs font-bold uppercase tracking-widest text-gray-400 group-hover:text-white transition-colors">
                                    Watch Interview <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                                </div>
                            </div>
                        </a>
                    ))}
                </div>

            </div>
        </div>
    );
};

export default InterviewsSection;