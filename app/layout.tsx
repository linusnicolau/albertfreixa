import './globals.css'; // Asegúrate de importar tus estilos globales

// --- 1. CONFIGURACIÓN DEL VIEWPORT (Color del tema) ---
export const viewport = {
  themeColor: '#ffffff',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};

// --- 2. METADATA Y SEO (Aquí van tus iconos y datos para Google) ---
export const metadata = {
  // Título inteligente: Muestra "Albert Freixa" por defecto, o añade sufijos en otras páginas
  title: {
    default: 'Albert Freixa | Professional Footballer',
    template: '%s | Albert Freixa'
  },
  description: 'Official portfolio of Albert Freixa, professional Centre-Back (CB/CDM) currently playing for Arandina CF in 3ª RFEF. View stats, highlights, and career history.',

  // Palabras clave para que te encuentren
  keywords: ['Albert Freixa', 'Footballer', 'Centre Back', 'Defensa Central', 'Arandina CF', 'Futbolista Profesional', '3 RFEF'],

  // Autores y Creador
  authors: [{ name: 'Albert Freixa' }, { name: 'Linus Nicolau', url: 'https://instagram.com/linusnicolau' }],
  creator: 'Linus Nicolau',

  // --- TUS ICONOS (Next.js genera los links automáticamente) ---
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
      { url: '/android-icon-192x192.png', sizes: '192x192', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-icon-57x57.png', sizes: '57x57' },
      { url: '/apple-icon-60x60.png', sizes: '60x60' },
      { url: '/apple-icon-72x72.png', sizes: '72x72' },
      { url: '/apple-icon-76x76.png', sizes: '76x76' },
      { url: '/apple-icon-114x114.png', sizes: '114x114' },
      { url: '/apple-icon-120x120.png', sizes: '120x120' },
      { url: '/apple-icon-144x144.png', sizes: '144x144' },
      { url: '/apple-icon-152x152.png', sizes: '152x152' },
      { url: '/apple-icon-180x180.png', sizes: '180x180' },
    ],
    other: [
      { rel: 'apple-touch-icon-precomposed', url: '/apple-icon-precomposed.png' },
    ],
  },

  // Enlace al archivo Manifest
  manifest: '/manifest.json',

  // Open Graph (Cómo se ve cuando compartes el link en WhatsApp/Twitter)
  openGraph: {
    title: 'Albert Freixa | Professional Footballer',
    description: 'Centre-Back playing for Arandina CF. View highlights and stats.',
    url: 'https://www.albertfreixa.com', // Poner tu dominio real cuando lo tengas
    siteName: 'Albert Freixa Official',
    images: [
      {
        url: '/og-image.jpg', // Crea una imagen de 1200x630px en tu carpeta public para esto
        width: 1200,
        height: 630,
        alt: 'Albert Freixa Profile',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },

  // Verificación para Google Search Console (Opcional pero recomendado)
  verification: {
    google: 'tu-codigo-de-verificacion-google',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {

  // --- 3. DATOS ESTRUCTURADOS (JSON-LD) ---
  // Esto es lo que hace que Google entienda que eres una PERSONA y un ATLETA
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Albert Freixa',
    jobTitle: 'Professional Footballer',
    url: 'https://www.albertfreixa.com', // Tu web real
    sameAs: [
      'https://instagram.com/freeixa',
      'https://www.transfermarkt.es/albert-freixa/profil/spieler/1318898',
      'https://www.linkedin.com/in/tu-perfil' // Si tienes
    ],
    athlete: {
      '@type': 'SportsTeam',
      name: 'Arandina CF'
    },
    height: '1.88 m',
    gender: 'Male',
    nationality: 'Spanish'
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Inyectamos los datos estructurados para Google */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-[#0a0a0a] text-white antialiased">
        {children}
      </body>
    </html>
  );
}