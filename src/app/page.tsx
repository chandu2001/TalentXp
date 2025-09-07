import { Toaster } from 'react-hot-toast';
import Header from '@/components/sections/Header';
import Hero from '@/components/sections/Hero';
import Services from '@/components/sections/Services';
import About from '@/components/sections/About';
import CaseStudies from '@/components/sections/CaseStudies';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/sections/Footer';
import Careers from '@/components/sections/Careers';

export default function Home() {
  return (
    <>
      <Toaster />
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
        <CaseStudies />
        <Careers />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
