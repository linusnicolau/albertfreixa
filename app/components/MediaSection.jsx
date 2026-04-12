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
        {
            id: 1,
            platform: 'youtube',
            title: '3RFEF Highlights',
            subtitle: '2026-2025 season highlights',
            link: 'https://youtu.be/qtjRTuzBRLk?si=yeS5JKNy1CUSs0Z-',
            duration: '4:01',
            // AÑADE TU MINIATURA AQUÍ (ej: '/thumbnails/video1.jpg')
            thumbnail: 'tn1.jpg'
        },
        {
            id: 2,
            platform: 'youtube',
            title: 'Highlights 23/24',
            subtitle: '2024 season highlights',
            link: 'https://www.youtube.com/watch?v=vNJIvNm_gF4',
            duration: '2:55',
            // AÑADE TU MINIATURA AQUÍ
            thumbnail: 'tn2.jpg'
        },
        {
            id: 3,
            platform: 'instagram',
            title: 'New Content Soon',
            subtitle: 'Stay tuned',
            link: null,
            duration: 'Soon',
            isPlaceholder: true,
            thumbnail: null,
        },
        // --- VÍDEOS PENDIENTES (Placeholders) ---
        {
            id: 4,
            platform: 'instagram',
            title: 'New Content Soon',
            subtitle: 'Stay tuned',
            link: null,
            duration: 'Soon',
            isPlaceholder: true,
            thumbnail: null
        }
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

                {/* SECCIÓN IMÁGENES */}
                <div className="mb-24">
                    <div className="flex items-center justify-between mb-8"><h4 className="text-xl font-bold uppercase tracking-wide flex items-center gap-2"><span className="w-2 h-8 bg-blue-500 rounded-full"></span>On The Pitch</h4><div className="flex gap-2"><button onClick={() => setCurrentImageIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length)} className="p-3 rounded-full border border-white/10 hover:bg-white/10 hover:border-white/30 transition-all text-gray-400 hover:text-white"><ArrowLeft /></button><button onClick={() => setCurrentImageIndex((prev) => (prev + 1) % galleryImages.length)} className="p-3 rounded-full border border-white/10 hover:bg-white/10 hover:border-white/30 transition-all text-gray-400 hover:text-white"><ArrowRight /></button></div></div>

                    <div className="relative w-full aspect-[16/9] md:aspect-[21/9] bg-[#111] rounded-2xl overflow-hidden border border-white/5 shadow-2xl group">
                        {galleryImages.map((img, index) => (
                            <div key={img.id} className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentImageIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}>
                                <img
                                    src={img.src}
                                    alt={img.caption}
                                    className="w-full h-full object-cover object-center"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>
                                <div className="absolute bottom-8 left-8 md:bottom-12 md:left-12">
                                    <p className="text-blue-400 text-xs font-bold uppercase tracking-widest mb-2">Gallery</p>
                                    <h3 className="text-2xl md:text-4xl font-black italic uppercase text-white">{img.caption}</h3>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* SECCIÓN VÍDEOS */}
                <div>
                    <div className="flex items-end justify-between mb-10 border-b border-white/10 pb-4"><h4 className="text-xl font-bold uppercase tracking-wide flex items-center gap-2"><span className="w-2 h-8 bg-blue-500 rounded-full"></span>Video Highlights</h4></div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {videos.map((video) => (
                            <div
                                key={video.id}
                                // Si es placeholder, usamos div y estilos apagados. Si no, usamos link y estilos activos.
                                onClick={() => !video.isPlaceholder && window.open(video.link, '_blank')}
                                className={`group relative block rounded-xl overflow-hidden border transition-all duration-300 
                                    ${video.isPlaceholder
                                        ? 'bg-[#111] border-white/5 opacity-60 cursor-default grayscale' // Estilos para "Coming Soon"
                                        : 'bg-[#111] border-white/5 hover:border-blue-500/50 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)] cursor-pointer' // Estilos normales
                                    }`}
                            >
                                <div className="relative aspect-[9/16] md:aspect-video w-full bg-gray-800 overflow-hidden">

                                    {/* --- LÓGICA DE THUMBNAIL --- */}
                                    {/* Si hay una imagen definida en 'video.thumbnail', la mostramos. Si no, mostramos el fondo gris por defecto. */}
                                    {video.thumbnail ? (
                                        <img
                                            src={video.thumbnail}
                                            alt={video.title}
                                            className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                        />
                                    ) : (
                                        <div className="absolute inset-0 bg-gray-800 group-hover:scale-105 transition-transform duration-700 flex items-center justify-center">
                                            <span className="text-white/10 text-xs font-black uppercase">
                                                {video.isPlaceholder ? 'Pending' : 'Video Thumbnail'}
                                            </span>
                                        </div>
                                    )}

                                    {/* Icono Central: Play o Reloj */}
                                    <div className="absolute inset-0 flex items-center justify-center z-10">
                                        <div className={`w-14 h-14 rounded-full flex items-center justify-center shadow-lg backdrop-blur-sm transition-transform duration-300
                                            ${video.isPlaceholder ? 'bg-gray-700/50 text-gray-400' : 'bg-blue-600/90 group-hover:scale-110 text-white'}`}>
                                            {video.isPlaceholder ? (
                                                // Icono Reloj (SVG inline)
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                                            ) : (
                                                <PlayIcon />
                                            )}
                                        </div>
                                    </div>

                                    {/* Badges de Plataforma (Solo si no es placeholder) */}
                                    {!video.isPlaceholder && (
                                        <div className="absolute top-3 right-3 z-20 bg-black/60 backdrop-blur-md px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider text-white border border-white/10 flex items-center gap-1">
                                            {video.platform === 'youtube' ? <YoutubeIcon /> : <InstagramIcon />}
                                            {video.platform}
                                        </div>
                                    )}

                                    {/* Duración */}
                                    <div className="absolute bottom-3 right-3 z-20 bg-black/80 px-2 py-1 rounded text-xs font-mono text-gray-300">
                                        {video.duration}
                                    </div>
                                </div>
                                <div className="p-5">
                                    <h5 className={`text-lg font-bold leading-tight mb-1 transition-colors ${video.isPlaceholder ? 'text-gray-400' : 'text-white group-hover:text-blue-400'}`}>
                                        {video.title}
                                    </h5>
                                    <p className="text-sm text-gray-500">{video.subtitle}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MediaSection;