import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from 'react-hot-toast';
import Header from '@/components/sections/Header';
import Footer from '@/components/sections/Footer';

export const metadata: Metadata = {
  title: 'TalentXp - AI/ML Consulting & Talent Solutions',
  description: 'Empowering Businesses with AI-Driven Talent Solutions',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="httpshttps://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@600;700;800&family=PT+Sans:wght@400;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased">
        <Toaster />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
