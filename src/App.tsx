import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Github, 
  Linkedin, 
  Twitter, 
  Mail, 
  Menu, 
  X, 
  Code, 
  Palette, 
  Globe, 
  Database, 
  Smartphone, 
  Briefcase, 
  GraduationCap, 
  User, 
  FileCode, 
  MessageSquare,
  Sun,
  Moon,
  Sparkles
} from 'lucide-react';

// Components
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ThemeSwitcher from './components/ThemeSwitcher';

// Theme types
export type ThemeType = 'light' | 'dark' | 'blue' | 'purple' | 'green';

function App() {
  const [theme, setTheme] = useState<ThemeType>('light');
  const [showThemeSelector, setShowThemeSelector] = useState(false);

  useEffect(() => {
    // Check user preference
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const savedTheme = localStorage.getItem('portfolio-theme') as ThemeType;
    
    if (savedTheme) {
      setTheme(savedTheme);
    } else if (prefersDark) {
      setTheme('dark');
    }
  }, []);

  const toggleThemeSelector = () => {
    setShowThemeSelector(!showThemeSelector);
  };

  const changeTheme = (newTheme: ThemeType) => {
    setTheme(newTheme);
    localStorage.setItem('portfolio-theme', newTheme);
    setShowThemeSelector(false);
  };

  const getThemeClasses = () => {
    switch (theme) {
      case 'dark':
        return 'dark bg-dark text-white';
      case 'blue':
        return 'blue-theme bg-blue-950 text-white';
      case 'purple':
        return 'purple-theme bg-purple-950 text-white';
      case 'green':
        return 'green-theme bg-green-950 text-white';
      default:
        return 'bg-white text-gray-900';
    }
  };

  return (
    <div className={`${getThemeClasses()} transition-colors duration-500`}>
      <Navbar theme={theme} toggleThemeSelector={toggleThemeSelector} />
      
      <AnimatePresence>
        {showThemeSelector && (
          <ThemeSwitcher 
            currentTheme={theme} 
            changeTheme={changeTheme} 
            closeSelector={() => setShowThemeSelector(false)} 
          />
        )}
      </AnimatePresence>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </motion.div>
      
      {/* Floating particles effect */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {Array.from({ length: 20 }).map((_, index) => (
          <motion.div
            key={index}
            className={`absolute rounded-full ${
              theme === 'light' 
                ? 'bg-primary-200' 
                : theme === 'blue' 
                  ? 'bg-blue-400' 
                  : theme === 'purple' 
                    ? 'bg-purple-400' 
                    : theme === 'green' 
                      ? 'bg-green-400' 
                      : 'bg-gray-700'
            } opacity-20`}
            style={{
              width: Math.random() * 20 + 5,
              height: Math.random() * 20 + 5,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, Math.random() * 100 - 50],
              x: [0, Math.random() * 100 - 50],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: Math.random() * 20 + 10,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default App;