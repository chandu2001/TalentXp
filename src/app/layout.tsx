'use client';
import './globals.css';
import { Toaster } from 'react-hot-toast';
import Header from '@/components/sections/Header';
import Footer from '@/components/sections/Footer';
import { Poppins, PT_Sans } from 'next/font/google';
import { AnimatePresence, motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import Chatbot from '@/components/chatbot/Chatbot';

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${poppins.variable} ${ptSans.variable} font-body antialiased bg-background`}>
        <Toaster />
        <Header />
        <AnimatePresence mode="wait">
          <motion.main
            key={pathname}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="pt-20"
          >
            {children}
          </motion.main>
        </AnimatePresence>
        <Footer />
        <Chatbot />
      </body>
    </html>
  );
}
