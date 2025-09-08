import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Logo } from '../ui/Logo';

const Footer = () => {
  const footerLinks = {
    'Services': [
      { name: 'IT Services', href: '/services' },
      { name: 'Quality Assurance', href: '/services' },
      { name: 'Usability Consulting', href: '/services' },
      { name: 'Cloud Services', href: '/services' },
    ],
    'Company': [
      { name: 'About Us', href: '/about' },
      { name: 'Case Studies', href: '/case-studies' },
      { name: 'Solutions', href: '/solutions' },
      { name: 'Contact Us', href: '/contact' },
    ],
    'Careers': [
      { name: 'Open Positions', href: '/careers' },
      { name: 'Culture', href: '/careers' },
    ]
  };

  return (
    <footer className="bg-secondary text-foreground font-body border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-16">
          <div className="grid lg:grid-cols-12 gap-8">
            <div className="lg:col-span-4">
               <Link href="/" className="flex items-center space-x-2 mb-4">
                <Logo className="h-10 w-10" />
                <span className="text-2xl font-bold font-headline text-foreground">TalentXp</span>
              </Link>
              <p className="text-muted-foreground mb-6 leading-relaxed text-sm">
                Innovative, high quality and best-in-class IT Consulting and IT Solutions & Services.
              </p>
            </div>

            <div className="lg:col-span-5 grid grid-cols-3 gap-8">
              {Object.entries(footerLinks).map(([category, links]) => (
                <div key={category}>
                  <h4 className="font-semibold text-foreground mb-4 font-headline text-sm uppercase tracking-wider">{category}</h4>
                  <ul className="space-y-3">
                    {links.map((link) => (
                      <li key={link.name}>
                        <Link href={link.href} className="text-muted-foreground hover:text-primary transition-colors text-sm">
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="lg:col-span-3">
               <h4 className="font-semibold text-foreground mb-4 font-headline text-sm uppercase tracking-wider">Stay Updated</h4>
               <p className="text-muted-foreground text-sm mb-4">Get the latest insights on IT services and solutions.</p>
               <form className="flex space-x-2">
                <Input type="email" placeholder="Enter your email" className="flex-1 bg-background" aria-label="Email for newsletter"/>
                <Button type="submit">Subscribe</Button>
              </form>
            </div>
          </div>
        </div>

        <div className="py-6 border-t">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm">
            <div className="text-muted-foreground mb-4 md:mb-0">
              © {new Date().getFullYear()} TalentXp Technologies. All rights reserved.
            </div>
            <div className="flex items-center space-x-6">
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">Privacy Policy</Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
