import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Featured', href: '#featured' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Showreel', href: '#showreel' },
    { name: 'Process', href: '#process' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out border-b border-transparent px-6 md:px-12 py-6 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md border-gray-200 py-4 shadow-sm' : ''
      }`}
    >
      <div className="max-w-[1600px] mx-auto flex items-center justify-between">
        <a href="#" className="text-3xl md:text-4xl font-display uppercase tracking-tighter leading-none z-50 relative">
          QUSERA
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-12">
          <ul className="flex space-x-8 text-sm font-medium uppercase tracking-widest text-muted">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a href={link.href} className="hover:text-black transition-colors duration-300">
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            className="group relative inline-flex items-center justify-center px-8 py-3 bg-black text-white font-medium uppercase text-sm tracking-wider overflow-hidden rounded-full"
          >
            <span className="absolute inset-0 bg-accent translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300 ease-out"></span>
            <span className="relative group-hover:text-black transition-colors duration-300">Start Project</span>
          </a>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden z-50 relative text-black p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-0 left-0 right-0 h-screen bg-white z-40 flex flex-col justify-center items-center space-y-8"
          >
            <ul className="flex flex-col items-center space-y-6 text-3xl font-display uppercase">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="hover:text-accent transition-colors duration-300"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="px-8 py-4 bg-accent text-black font-display text-xl uppercase tracking-wider"
            >
              Start Project
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
