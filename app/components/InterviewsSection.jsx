import { useState, useEffect } from 'react';
import { ExternalLinkIcon, InstagramIcon, PlayIcon } from '../utils/icons.js';

// SVG Icons for the text-based interview
const NewspaperIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><path d="M16 8h2"></path><path d="M16 12h2"></path><path d="M16 16h2"></path><path d="M6 8h6v8H6z"></path></svg>
);

const CloseIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
);

const InterviewsSection = () => {
    const [selectedArticle, setSelectedArticle] = useState(null);
    const [activeLang, setActiveLang] = useState('en'); // Default original language: English

    const interviews = [
        {
            id: 4,
            title: "The adventure of the first player from Girona in the Maldives First Division",
            context: "Exclusive interview granted to Diari de Girona on the occasion of his signing with Buru Sports Club.",
            date: "July 9, 2026",
            link: "https://www.diaridegirona.cat/esports/2026/07/09/l-aventura-primer-gironi-primera-132261987.html",
            duration: "5 min read",
            thumbnail: 'entrevista.png',
            isText: true,
            source: "Diari de Girona",
            translations: {
                ca: {
                    title: "L’aventura del primer gironí a la Primera Divisió de les Maldives",
                    subtitle: "Entrevista concedida a Diari de Girona",
                    author: "Per Jordi Bofill",
                    date: "9 de juliol, 2026",
                    sourceText: "Entrevista concedida al Diari de Girona",
                    linkText: "Llegir article original al Diari de Girona",
                    intro: "El central de Begur i pioner Albert Freixa (2001) fitxa pel Buru Sports Club, on emprendrà un viatge desconegut que el durà a competir per segona vegada a la seva vida a l’elit del futbol. Després d’una trajectòria que l’ha portat a defensar els colors de l’Aro, el Palafrugell, el Llosetense i l’Arandina, a més d’una experiència prèvia a la Primera Divisió d’Andorra, Freixa inicia aquesta nova aventura a l’exòtic futbol de les Maldives. Amb només 25 anys, assumeix el repte com una oportunitat única per continuar creixent a nivell professional i personal.",
                    qa: [
                        { q: "Com sorgeix aquesta oportunitat de fitxar pel Buru Sports Club de les Maldives?", a: "Doncs tot va començar a través d'un representant que es mou molt pel mercat asiàtic. Jo ja feia temps que tenia la inquietud d'explorar el futbol a l'estranger. Quan em va arribar la proposta, vaig pensar que era un d'aquells trens que només passen un cop a la vida i que no podia deixar escapar." },
                        { q: "T'has convertit en el primer gironí a jugar a la Primera Divisió de les Maldives. Com et fa sentir això?", a: "És un orgull i una gran responsabilitat. Ser un pioner en un futbol tan desconegut per a nosaltres és un repte molt especial. M'agrada obrir camí i demostrar que els jugadors d'aquí podem competir a qualsevol part del món." },
                        { q: "Què en saps d'aquest nou destí i del Buru Sports Club?", a: "Sé que és un repte exòtic, però a nivell professional és molt seriós. El club està creixent molt i la lliga és molt competitiva, amb molts jugadors locals amb talent i estrangers de qualitat. Sé que serà un viatge desconegut, però estic molt motivat." },
                        { q: "Tens només 25 anys, però ja has passat per Andorra, l'Aro, el Palafrugell, el Llosetense, l'Arandina... Com t'ha ajudat aquesta trajectòria a preparar-te?", a: "M'ha fet madurar molt ràpidament. L'experiència a Andorra, jugant a la primera divisió d'allà, em va donar el primer tast del que és competir al màxim nivell de lliga. Cada equip on he estat m'ha aportat quelcom, tant a nivell defensiu com mental. Estar lluny de casa ja no em fa por, i futbolísticament em sento preparat." },
                        { q: "Quins objectius et marques per a aquesta temporada a les Maldives?", a: "L'objectiu principal és consolidar-me a l'onze inicial del Buru Sports Club, aportar el meu gra de sorra en defense i ajudar l'equip a assolir les millors posicions possibles a la taula. A nivell personal, vull gaudir de l'experiència i créixer com a futbolista i com a persona." }
                    ]
                },
                es: {
                    title: "La aventura del primer gerundense en la Primera División de las Maldivas",
                    subtitle: "Entrevista concedida a Diari de Girona",
                    author: "Por Jordi Bofill",
                    date: "9 de julio, 2026",
                    sourceText: "Entrevista concedida a Diari de Girona",
                    linkText: "Leer artículo original en Diari de Girona",
                    intro: "El defensa central de Begur y pionero Albert Freixa (2001) ficha por el Buru Sports Club, donde emprenderá un viaje desconocido que le llevará a competir por segunda vez en su vida en la élite del fútbol. Tras una trayectoria que le ha llevado a defender los colores del Aro, el Palafrugell, el Llosetense y la Arandina, además de una experiencia previa en la Primera División de Andorra, Freixa inicia esta nueva aventura en el exótico fútbol de las Maldivas. Con solo 25 años, asume el reto como una oportunidad única para seguir creciendo a nivel profesional y personal.",
                    qa: [
                        { q: "¿Cómo surge esta oportunidad de fichar por el Buru Sports Club de las Maldivas?", a: "Pues todo empezó a través de un representante que se mueve mucho en el mercado asiático. Yo ya llevaba tiempo con la inquietud de explorar el fútbol en el extranjero. Cuando me llegó la propuesta, pensé que era uno de esos trenes que solo pasan una vez en la vida y que no podía dejar escapar." },
                        { q: "¿Te has convertido en el primer gerundense en jugar en la Primera División de las Maldivas. ¿Cómo te hace sentir esto?", a: "Es un orgullo y una gran responsabilidad. Ser un pionero en un fútbol tan desconocido para nosotros es un reto muy especial. Me gusta abrir camino y demostrar que los jugadores de aquí podemos competir en cualquier parte del mundo." },
                        { q: "¿Qué sabes de este nuevo destino y del Buru Sports Club?", a: "Sé que es un reto exótico, pero a nivel profesional es muy serio. El club está creciendo mucho y la liga es muy competitiva, con muchos jugadores locales con talento y extranjeros de calidad. Sé que será un viaje desconocido, pero estoy muy motivado." },
                        { q: "Tienes solo 25 años, pero ya has pasado por Andorra, el Aro, el Palafrugell, el Llosetense, la Arandina... ¿Cómo te ha ayudado esta trayectoria a prepararte?", a: "Me ha hecho madurar muy rápido. La experiencia en Andorra, jugando en la primera división de allí, me dio el primer contacto con lo que es competir al máximo nivel de liga. Cada equipo en el que he estado me ha aportado algo, tanto a nivel defensivo como mental. Estar lejos de casa ya no me asusta, y futbolísticamente me siento listo." },
                        { q: "¿Qué objetivos te marcas para esta temporada en las Maldivas?", a: "El objetivo principal es consolidarme en el once inicial del Buru Sports Club, aportar mi grano de arena en defensa y ayudar al equipo a alcanzar las mejores posiciones posibles en la tabla. A nivel personal, quiero disfrutar de la experiencia y crecer como futbolista y como persona." }
                    ]
                },
                en: {
                    title: "The adventure of the first player from Girona in the Maldives First Division",
                    subtitle: "Interview granted to Diari de Girona",
                    author: "By Jordi Bofill",
                    date: "July 9, 2026",
                    sourceText: "Interview granted to Diari de Girona",
                    linkText: "Read original article on Diari de Girona",
                    intro: "The central defender from Begur and pioneer Albert Freixa (2001) signs with Buru Sports Club, embarking on an unknown journey that will lead him to compete for the second time in his life in elite football. After a career that has seen him represent Aro, Palafrugell, Llosetense, and Arandina, along with previous experience in the First Division of Andorra, Freixa begins this new adventure in the exotic football scene of the Maldives. At just 25 years old, he takes on the challenge as a unique opportunity to continue growing both professionally and personally.",
                    qa: [
                        { q: "How did this opportunity to sign for Buru Sports Club in the Maldives come about?", a: "Well, it all started through an agent who is very active in the Asian market. I had been eager to explore football abroad for a while. When the proposal reached me, I thought it was one of those trains that only pass once in a lifetime and that I couldn't let go." },
                        { q: "You have become the first player from Girona to play in the Maldives First Division. How does that make you feel?", a: "It is a source of pride and a great responsibility. Being a pioneer in a football scene that is so unknown to us is a very special challenge. I like to pave the way and show that players from our region can compete anywhere in the world." },
                        { q: "What do you know about this new destination and Buru Sports Club?", a: "I know it is an exotic challenge, but at a professional level, it is very serious. The club is growing a lot and the league is very competitive, with many talented local players and quality foreigners. I know it will be an unknown journey, but I am highly motivated." },
                        { q: "You are only 25 years old, but you have already played in Andorra, Aro, Palafrugell, Llosetense, Arandina... How has this trajectory helped you prepare?", a: "It has made me mature very quickly. The experience in Andorra, playing in the first division there, gave me my first taste of competing at the top league level. Every team I have been with has contributed something to me, both defensively and mentally. Being far from home no longer scares me, and football-wise I feel ready." },
                        { q: "What goals do you set for this season in the Maldives?", a: "The main goal is to establish myself in the starting eleven of Buru Sports Club, contribute my grain of sand in defense, and help the team reach the best possible positions in the table. On a personal level, I want to enjoy the experience and grow both as a footballer and as a person." }
                    ]
                }
            }
        },
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

    useEffect(() => {
        if (selectedArticle) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [selectedArticle]);

    const openArticle = (article) => {
        setSelectedArticle(article);
        setActiveLang('en'); // Reset to default English language when opening
    };

    const closeArticle = () => {
        setSelectedArticle(null);
    };

    const CardWrapper = ({ interview, children, onClick }) => {
        if (interview.isText) {
            return (
                <div
                    onClick={onClick}
                    className="cursor-pointer group relative bg-[#111] rounded-2xl border border-white/5 hover:border-blue-500/50 overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_40px_rgba(0,0,0,0.3)] flex flex-col text-left h-full"
                >
                    {children}
                </div>
            );
        }
        return (
            <a
                href={interview.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative bg-[#111] rounded-2xl border border-white/5 hover:border-blue-500/50 overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_40px_rgba(0,0,0,0.3)] flex flex-col h-full"
            >
                {children}
            </a>
        );
    };

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

                {/* Grid de 4 Entrevistas */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {interviews.map((interview) => (
                        <CardWrapper
                            key={interview.id}
                            interview={interview}
                            onClick={() => interview.isText && openArticle(interview)}
                        >
                            {/* Thumbnail Area - FORMATO VERTICAL 9:16 */}
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

                                {/* Overlay oscuro sutil para mejorar contraste */}
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors"></div>

                                {/* Play Button o Document Reader Button Overlay */}
                                <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 group-hover:scale-110 group-hover:bg-blue-600 group-hover:border-blue-500 transition-all duration-300 z-10 shadow-lg text-white">
                                    {interview.isText ? <NewspaperIcon /> : <PlayIcon />}
                                </div>

                                {/* Platform Badge */}
                                <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider flex items-center gap-1.5 border border-white/10 text-white z-20">
                                    {interview.isText ? (
                                        <span className="text-blue-400 font-bold">{interview.source}</span>
                                    ) : (
                                        <>
                                            <InstagramIcon /> Reel
                                        </>
                                    )}
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-6 flex flex-col flex-grow bg-[#111] relative z-20">
                                <div className="flex justify-between items-start gap-2 mb-3">
                                    <span className="text-blue-500 text-xs font-bold uppercase tracking-widest">{interview.date}</span>
                                    <span className="text-gray-400 text-[10px] font-mono uppercase tracking-wider bg-white/5 px-2 py-0.5 rounded border border-white/5 whitespace-nowrap flex-shrink-0">{interview.duration}</span>
                                </div>

                                <h4 className="text-base font-bold text-white mb-2 leading-tight group-hover:text-blue-400 transition-colors line-clamp-3">
                                    {interview.title}
                                </h4>
                                <p className="text-xs text-gray-500 mb-4 flex-grow line-clamp-3">
                                    {interview.context}
                                </p>

                                <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs font-bold uppercase tracking-widest text-gray-400 group-hover:text-white transition-colors mt-auto">
                                    <span>{interview.isText ? 'Read Interview' : 'Watch Interview'}</span>
                                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                                </div>
                            </div>
                        </CardWrapper>
                    ))}
                </div>

            </div>

            {/* Trilingual Reader Modal */}
            {selectedArticle && (
                <div 
                    onClick={closeArticle}
                    className="fixed inset-0 bg-black/85 backdrop-blur-md z-50 flex items-center justify-center p-4 md:p-6 transition-opacity duration-300 cursor-pointer"
                >
                    <div 
                        className="bg-[#111] border border-white/10 rounded-3xl max-w-5xl w-full max-h-[90vh] overflow-hidden flex flex-col relative shadow-[0_20px_50px_rgba(0,0,0,0.6)] animate-in fade-in zoom-in-95 duration-200 cursor-default"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Close button */}
                        <button 
                            onClick={closeArticle}
                            className="absolute top-4 right-4 text-gray-400 hover:text-white bg-white/5 hover:bg-white/10 p-2 rounded-full border border-white/10 transition-colors z-30"
                            aria-label="Close modal"
                        >
                            <CloseIcon />
                        </button>

                        {/* Modal Header */}
                        <div className="p-6 md:p-8 pr-14 md:pr-16 pb-4 border-b border-white/5 relative z-20 text-left bg-gradient-to-b from-white/[0.02] to-transparent flex-shrink-0">
                            <div className="flex flex-wrap items-center gap-3 mb-2 text-xs font-bold tracking-wider text-blue-500 uppercase">
                                <span>{selectedArticle.translations[activeLang].sourceText}</span>
                                <span className="text-white/20">•</span>
                                <span className="text-gray-400 font-normal">{selectedArticle.translations[activeLang].date}</span>
                            </div>
                            
                            <h3 className="text-xl md:text-3xl font-black italic uppercase tracking-tight text-white leading-tight mb-4">
                                {selectedArticle.translations[activeLang].title}
                            </h3>

                            {/* Author details and Language Selector Tabs */}
                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-2">
                                <span className="text-xs text-gray-400">{selectedArticle.translations[activeLang].author}</span>
                                
                                {/* Language switcher buttons */}
                                <div className="flex bg-white/5 border border-white/10 p-1 rounded-full w-fit">
                                    {[
                                        { code: 'ca', label: 'Català' },
                                        { code: 'es', label: 'Español' },
                                        { code: 'en', label: 'English' }
                                    ].map((lang) => (
                                        <button
                                            key={lang.code}
                                            onClick={() => setActiveLang(lang.code)}
                                            className={`px-3 py-1 rounded-full text-xs font-bold uppercase transition-all duration-300 ${
                                                activeLang === lang.code
                                                    ? 'bg-blue-600 text-white shadow-md'
                                                    : 'text-gray-400 hover:text-white'
                                            }`}
                                        >
                                            {lang.label}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Scrollable Article Body */}
                        <div className="overflow-y-auto p-6 md:p-8 space-y-6 flex-grow text-left text-gray-300 text-sm md:text-base leading-relaxed">
                            {/* Lead / Intro Paragraph */}
                            {selectedArticle.translations[activeLang].intro && (
                                <p className="text-gray-200 font-medium text-base md:text-lg leading-relaxed border-b border-white/5 pb-6 mb-6 italic bg-white/[0.01] p-4 rounded-xl border border-white/5">
                                    {selectedArticle.translations[activeLang].intro}
                                </p>
                            )}

                            {/* Q&A dialogue */}
                            {selectedArticle.translations[activeLang].qa.map((item, idx) => (
                                <div key={idx} className="space-y-2 border-b border-white/[0.03] pb-4 last:border-b-0 last:pb-0">
                                    <p className="font-bold text-blue-400 italic">
                                        {item.q}
                                    </p>
                                    <p className="text-gray-300 font-light pl-2 border-l-2 border-white/10">
                                        {item.a}
                                    </p>
                                </div>
                            ))}
                        </div>

                        {/* Modal Footer with external link */}
                        <div className="p-6 md:p-8 pt-4 border-t border-white/5 bg-white/[0.01] flex flex-col sm:flex-row gap-4 items-center justify-between flex-shrink-0">
                            <span className="text-[11px] text-gray-500 uppercase tracking-widest italic">
                                * {selectedArticle.translations[activeLang].sourceText}
                            </span>
                            <a
                                href={selectedArticle.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full sm:w-auto bg-white hover:bg-gray-100 text-black px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all duration-300 hover:shadow-lg active:scale-95"
                            >
                                <span>{selectedArticle.translations[activeLang].linkText}</span>
                                <ExternalLinkIcon className="w-3.5 h-3.5" />
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default InterviewsSection;