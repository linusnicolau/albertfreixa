import { useState, useEffect } from 'react';
// Asegúrate de importar tus iconos correctamente según tu estructura de archivos
import { ArrowLeft, ArrowRight, PlayIcon, YoutubeIcon, InstagramIcon } from '../utils/icons.js';

const MediaSection = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const galleryImages = [
        {
            id: 1,
            src: '/ordino-team.png',
            caption: 'Ordino Team'
        },
        {
            id: 2,
            src: '/victory.png',
            caption: 'Team Celebration'
        },
        {
            id: 3,
            src: '/defensive-action.png',
            caption: 'Defensive Action'
        },
        {
            id: 4,
            src: '/training-camp.png',
            caption: 'Training Camp'
        },
    ];

    const videos = [
        { id: 1, platform: 'youtube', title: 'Highlights 24/25', subtitle: '2025 season highlights', link: 'https://youtu.be/opLadYWNsF0?si=GnBRXMulYMs4EWuq', duration: '1:14' },
        { id: 2, platform: 'youtube', title: 'Highlights 23/24', subtitle: '2024 season highlights', link: 'https://www.youtube.com/watch?v=vNJIvNm_gF4', duration: '2:55' },
        { id: 3, platform: 'instagram', title: 'Matchday Performance', subtitle: 'vs Inter Escaldes', link: 'https://www.instagram.com/reel/DCreMrjoXkM/', duration: 'Reel' },
        { id: 4, platform: 'instagram', title: 'Goal Celebration', subtitle: 'Crucial header goal', link: 'https://www.instagram.com/reel/DFk2eZgIdz5/', duration: 'Reel' }
    ];

    useEffect(() => { const interval = setInterval(() => setCurrentImageIndex((prev) => (prev + 1) % galleryImages.length), 5000); return () => clearInterval(interval); }, []);

    return (
        <div id="media" className="relative min-h-screen bg-[#0a0a0a] text-white pt-24 pb-24 overflow-hidden border-t border-white/5">
            <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-[#0a0a0a] to-transparent z-10 pointer-events-none"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] bg-blue-900/5 blur-[120px] rounded-full pointer-events-none"></div>
            <div className="relative z-20 container mx-auto px-6 max-w-7xl">
                <div className="text-center mb-20 space-y-4">
                    <h2 className="text-blue-500 font-bold tracking-[0.25em] uppercase text-xs md:text-sm">Gallery & Highlights</h2>
                    <h3 className="text-4xl md:text-7xl font-black italic uppercase tracking-tighter">Media <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-600">Center</span></h3>
                </div>
                <div className="mb-24">
                    <div className="flex items-center justify-between mb-8"><h4 className="text-xl font-bold uppercase tracking-wide flex items-center gap-2"><span className="w-2 h-8 bg-blue-500 rounded-full"></span>On The Pitch</h4><div className="flex gap-2"><button onClick={() => setCurrentImageIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length)} className="p-3 rounded-full border border-white/10 hover:bg-white/10 hover:border-white/30 transition-all text-gray-400 hover:text-white"><ArrowLeft /></button><button onClick={() => setCurrentImageIndex((prev) => (prev + 1) % galleryImages.length)} className="p-3 rounded-full border border-white/10 hover:bg-white/10 hover:border-white/30 transition-all text-gray-400 hover:text-white"><ArrowRight /></button></div></div>

                    {/* CARRUSEL DE IMÁGENES */}
                    <div className="relative w-full aspect-[16/9] md:aspect-[21/9] bg-[#111] rounded-2xl overflow-hidden border border-white/5 shadow-2xl group">
                        {galleryImages.map((img, index) => (
                            <div key={img.id} className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentImageIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}>

                                {/* 2. AQUÍ SE MUESTRA LA IMAGEN */}
                                {/* Antes había un div placeholder, ahora usamos <img> */}
                                <img
                                    src={img.src}
                                    alt={img.caption}
                                    className="w-full h-full object-cover object-center"
                                />

                                {/* Overlay oscuro para que el texto se lea bien */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>

                                <div className="absolute bottom-8 left-8 md:bottom-12 md:left-12">
                                    <p className="text-blue-400 text-xs font-bold uppercase tracking-widest mb-2">Gallery</p>
                                    <h3 className="text-2xl md:text-4xl font-black italic uppercase text-white">{img.caption}</h3>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* SECCIÓN DE VÍDEOS */}
                <div>
                    <div className="flex items-end justify-between mb-10 border-b border-white/10 pb-4"><h4 className="text-xl font-bold uppercase tracking-wide flex items-center gap-2"><span className="w-2 h-8 bg-blue-500 rounded-full"></span>Video Highlights</h4></div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {videos.map((video) => (
                            <a key={video.id} href={video.link} target="_blank" rel="noopener noreferrer" className="group relative block bg-[#111] rounded-xl overflow-hidden border border-white/5 hover:border-blue-500/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
                                <div className="relative aspect-[9/16] md:aspect-video w-full bg-gray-800 overflow-hidden">
                                    {/* Si quieres miniaturas para los vídeos, añade una propiedad 'thumbnail' al array videos y usa <img src={video.thumbnail} ... /> aquí */}
                                    <div className="absolute inset-0 bg-gray-800 group-hover:scale-105 transition-transform duration-700 flex items-center justify-center">
                                        <span className="text-white/10 text-xs font-black uppercase">Video Thumbnail</span>
                                    </div>
                                    <div className="absolute inset-0 flex items-center justify-center z-10"><div className="w-14 h-14 rounded-full bg-blue-600/90 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 backdrop-blur-sm"><PlayIcon /></div></div>
                                    <div className="absolute top-3 right-3 z-20 bg-black/60 backdrop-blur-md px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider text-white border border-white/10 flex items-center gap-1">{video.platform === 'youtube' ? <YoutubeIcon /> : <InstagramIcon />}{video.platform}</div>
                                    <div className="absolute bottom-3 right-3 z-20 bg-black/80 px-2 py-1 rounded text-xs font-mono text-gray-300">{video.duration}</div>
                                </div>
                                <div className="p-5"><h5 className="text-lg font-bold text-white leading-tight mb-1 group-hover:text-blue-400 transition-colors">{video.title}</h5><p className="text-sm text-gray-500">{video.subtitle}</p></div>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MediaSection;