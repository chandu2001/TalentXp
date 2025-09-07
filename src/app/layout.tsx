import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from 'react-hot-toast';
import Header from '@/components/sections/Header';
import Footer from '@/components/sections/Footer';
import { Poppins, PT_Sans } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['600', '700', '800'],
  variable: '--font-poppins',
});

const ptSans = PT_Sans({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-pt-sans',
});

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
      <body className={`${poppins.variable} ${ptSans.variable} font-body antialiased bg-background`}>
        <Toaster />
        <Header />
        <main className="pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
