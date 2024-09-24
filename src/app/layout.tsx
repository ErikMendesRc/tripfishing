import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Trip Fishing | Pacotes de Pesca Exclusivos",
  description: "Descubra os melhores pacotes de pesca com a Trip Fishing. Sua aventura de pesca começa aqui! Reserve agora e aproveite experiências inesquecíveis nas melhores locações.",
  openGraph: {
    title: "Trip Fishing | Pacotes de Pesca Exclusivos",
    description: "Descubra os melhores pacotes de pesca com a Trip Fishing. Sua aventura de pesca começa aqui! Reserve agora e aproveite experiências inesquecíveis nas melhores locações.",
    url: "https://www.tripfishing.com.br",
    siteName: "Trip Fishing",
    images: [
      {
        url: "https://www.tripfishing.com.br/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Imagem de Pacote de Pesca",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
