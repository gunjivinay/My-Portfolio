import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Palette } from 'lucide-react';
import { ThemeType } from '../App';

interface NavbarProps {
  theme: ThemeType;
  toggleThemeSelector: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ theme, toggleThemeSelector }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      
      // Update active section based on scroll position
      const sections = ['home', 'about', 'skills', 'projects','contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  const getNavbarBackground = () => {
    if (!scrolled) return 'bg-transparent';
    
    switch (theme) {
      case 'dark':
        return 'bg-dark/90 backdrop-blur-md';
      case 'blue':
        return 'bg-blue-950/90 backdrop-blur-md';
      case 'purple':
        return 'bg-purple-950/90 backdrop-blur-md';
      case 'green':
        return 'bg-green-950/90 backdrop-blur-md';
      default:
        return 'bg-white/90 backdrop-blur-md';
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? `py-3 shadow-md ${getNavbarBackground()}` : 'py-5 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <nav className="flex items-center justify-between">
          <motion.a 
            href="#home"
            className="text-2xl font-heading font-bold text-primary-600 dark:text-primary-400"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            Portfolio
          </motion.a>

          {/* Desktop Navigation */}
          <motion.ul 
            className="hidden md:flex space-x-8"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {navLinks.map((link, index) => (
              <li key={index}>
                <a 
                  href={link.href} 
                  className={`font-medium transition-colors relative ${
                    activeSection === link.href.substring(1)
                      ? 'text-primary-600 dark:text-primary-400'
                      : 'hover:text-primary-600 dark:hover:text-primary-400'
                  }`}
                >
                  {link.name}
                  {activeSection === link.href.substring(1) && (
                    <motion.span 
                      className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary-500"
                      layoutId="activeNavIndicator"
                    />
                  )}
                </a>
              </li>
            ))}
          </motion.ul>

          <div className="flex items-center space-x-4">
            <motion.button
              onClick={toggleThemeSelector}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Palette size={20} />
            </motion.button>

            {/* Mobile Menu Button */}
            <motion.button
              className="md:hidden p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              onClick={toggleMenu}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </nav>
      </div>

      {/* Mobile Navigation */}
      <motion.div
        className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}
        initial={{ opacity: 0, height: 0 }}
        animate={{ 
          opacity: isOpen ? 1 : 0,
          height: isOpen ? 'auto' : 0
        }}
        transition={{ duration: 0.3 }}
      >
        <div className="container mx-auto px-4 py-4 bg-white dark:bg-dark shadow-lg rounded-b-lg">
          <ul className="space-y-4">
            {navLinks.map((link, index) => (
              <motion.li 
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 * index }}
              >
                <a 
                  href={link.href} 
                  className={`block py-2 font-medium transition-colors ${
                    activeSection === link.href.substring(1)
                      ? 'text-primary-600 dark:text-primary-400'
                      : 'hover:text-primary-600 dark:hover:text-primary-400'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              </motion.li>
            ))}
          </ul>
        </div>
      </motion.div>
    </header>
  );
};

export default Navbar;