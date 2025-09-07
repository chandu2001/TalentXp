'use client';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Linkedin, Twitter, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerLinks = {
    'Services': [
      { name: 'AI/ML Consulting', href: '#services' },
      { name: 'Talent Acquisition', href: '#services' },
      { name: 'GenAI Solutions', href: '#services' },
      { name: 'Talent Analytics', href: '#services' },
    ],
    'Company': [
      { name: 'About Us', href: '#about' },
      { name: 'Case Studies', href: '#case-studies' },
      { name: 'Careers', href: '#careers' },
      { name: 'Contact Us', href: '#contact' },
    ],
    'Resources': [
      { name: 'Blog', href: '#' },
      { name: 'Whitepapers', href: '#' },
      { name: 'Community', href: '#' },
      { name: 'Partners', href: '#' },
    ]
  };

  return (
    <footer className="bg-gray-900 text-white font-body">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-16">
          <div className="grid lg:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:col-span-1"
            >
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg font-headline">TX</span>
                </div>
                <span className="text-2xl font-bold font-headline">TalentXp</span>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Empowering businesses with AI-driven talent solutions.
              </p>
              <div className="flex space-x-4 mt-6">
                <a href="#" target="_blank" rel="noopener noreferrer" className="p-2 bg-gray-800 rounded-lg hover:bg-blue-600 transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer" className="p-2 bg-gray-800 rounded-lg hover:bg-blue-600 transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </motion.div>

            {Object.entries(footerLinks).map(([category, links], index) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: (index + 1) * 0.1 }}
                viewport={{ once: true }}
              >
                <h4 className="font-semibold text-white mb-6 font-headline">{category}</h4>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link.name}>
                      <a href={link.href} className="text-gray-300 hover:text-blue-400 transition-colors text-sm">
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="py-8 border-t border-gray-800"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-xl font-semibold mb-2 font-headline">Stay Updated</h3>
              <p className="text-gray-300">Get the latest insights on AI and talent management.</p>
            </div>
            <form className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400"
                aria-label="Email for newsletter"
              />
              <button type="submit" className="px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-lg font-medium hover:scale-105 transition-transform">
                Subscribe
              </button>
            </form>
          </div>
        </motion.div>

        <div className="py-6 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-gray-400 mb-4 md:mb-0">
              © {new Date().getFullYear()} TalentXp. All rights reserved.
            </div>
            <div className="flex items-center space-x-6">
              <a href="#" className="text-sm text-gray-400 hover:text-blue-400 transition-colors">Privacy Policy</a>
              <a href="#" className="text-sm text-gray-400 hover:text-blue-400 transition-colors">Terms of Service</a>
              <button
                onClick={scrollToTop}
                className="p-2 bg-gray-800 rounded-lg hover:bg-blue-600 transition-colors"
                aria-label="Scroll to top"
              >
                <ArrowUp className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
