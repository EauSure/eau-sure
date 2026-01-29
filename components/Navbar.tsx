'use client'

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, FileText, Activity, Mail, Home } from 'lucide-react';
import Link from 'next/link'; // Import nécessaire pour la navigation entre pages
import { usePathname } from 'next/navigation'; // Pour savoir sur quelle page on est
import Logo from './Logo';

const navLinks = [
  { name: 'Overview', href: '/#overview', icon: Home },
  { name: 'Architecture', href: '/#specs', icon: Activity },
  // LE LIEN CHANGE ICI : On pointe vers la nouvelle page
  { name: 'Documentation', href: '/documentation', icon: FileText }, 
  { name: 'Contact', href: '/#contact', icon: Mail },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    setMobileMenuOpen(false);

    // Si c'est un lien ancre (#) ET qu'on est sur la page d'accueil, on scroll fluide
    if (href.startsWith('/#') && isHomePage) {
      e.preventDefault();
      const id = href.replace('/', ''); // On garde juste #overview
      const element = document.querySelector(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    // Sinon, on laisse Link faire son travail (changement de page normal)
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
          isScrolled || !isHomePage // Toujours sombre si on n'est pas sur l'accueil
            ? 'bg-[#000810]/80 backdrop-blur-md border-slate-800/50 py-4' 
            : 'bg-transparent border-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          
          <Link href="/" className="text-2xl font-bold text-white tracking-tighter z-50 relative">
            Eau<span className="text-cyan-400">Sûre</span>
          </Link>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="text-sm font-medium text-slate-300 hover:text-cyan-400 transition-colors relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 transition-all group-hover:w-full" />
              </Link>
            ))}
            
            <Link 
              href="/#contact"
              className="px-5 py-2 bg-slate-800 hover:bg-slate-700 text-white text-sm font-semibold rounded-full border border-slate-700 hover:border-cyan-500/50 transition-all"
            >
              Accès Partenaire
            </Link>
          </div>

          {/* MOBILE TOGGLE */}
          <button 
            className="md:hidden text-white z-50 relative"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </motion.nav>

      {/* MOBILE MENU OVERLAY */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-40 bg-[#000810] md:hidden flex flex-col justify-center items-center gap-8"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="text-2xl font-light text-slate-300 hover:text-cyan-400 flex items-center gap-3"
              >
                <link.icon className="w-6 h-6 opacity-50" />
                {link.name}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}