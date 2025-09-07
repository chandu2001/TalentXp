'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Logo } from '../ui/Logo';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const checkLoginStatus = () => {
      const loggedIn = localStorage.getItem('isLoggedIn') === 'true';
      setIsLoggedIn(loggedIn);
    };
    checkLoginStatus();
    // Listen for storage changes to update login status across tabs
    window.addEventListener('storage', checkLoginStatus);
    return () => {
      window.removeEventListener('storage', checkLoginStatus);
    }
  }, [pathname]);


  const baseNavigation = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Solutions', href: '/solutions' },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'Careers', href: '/careers' },
    { name: 'Video Generation', href: '/video-generation'}
  ];

  const navigation = [
    ...baseNavigation,
    isLoggedIn
      ? { name: 'Dashboard', href: '/employee-dashboard' }
      : { name: 'Employee Login', href: '/employee-login' }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="flex-shrink-0">
            <div className="flex items-center space-x-2">
              <Logo className="h-10 w-10" />
              <span className="text-2xl font-bold text-foreground font-headline">TalentXp</span>
            </div>
          </Link>

          <nav className="hidden md:flex space-x-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  'px-3 py-2 text-sm font-medium transition-colors rounded-md',
                  pathname === item.href
                    ? 'text-primary-foreground bg-primary'
                    : 'text-foreground hover:bg-muted'
                )}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex">
            <Button asChild>
              <Link href="/contact">
                Contact Us
              </Link>
            </Button>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-foreground hover:text-primary p-2"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="md:hidden bg-background border-t overflow-hidden"
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                   className={cn(
                    'block px-3 py-2 text-base font-medium rounded-md',
                    pathname === item.href
                      ? 'bg-primary text-primary-foreground'
                      : 'text-foreground hover:bg-muted'
                  )}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="px-3 pt-2">
                <Button asChild className="w-full">
                    <Link
                        href="/contact"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Contact Us
                    </Link>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
