import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });
const playfair = Playfair_Display({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rincón del Hombre | Ropa y Accesorios Masculinos Premium",
  description:
    "Descubre ropa y accesorios de calidad para hombres que buscan estilo y presencia. Envíos gratis en compras mayores a $1,500.",
  keywords:
    "ropa hombre, accesorios masculinos, playeras, polos, sudaderas, moda masculina",
  openGraph: {
    title: "Rincón del Hombre | Ropa Masculina Premium",
    description: "Descubre nuestro catálogo de ropa y accesorios masculinos.",
    type: "website",
    url: "https://rincondelh.vercel.app",
    images: [
      {
        url: "https://images.unsplash.com/photo-1595777707802-04aebc9d9fbb?w=1200&h=630",
        width: 1200,
        height: 630,
        alt: "Rincón del Hombre",
      },
    ],
  },
  viewport: "width=device-width, initial-scale=1.0",
  charset: "utf-8",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={`${inter.className} bg-white`}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
