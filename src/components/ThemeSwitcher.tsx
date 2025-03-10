import React from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon, Droplets, Flower, Leaf, X } from 'lucide-react';
import { ThemeType } from '../App';

interface ThemeSwitcherProps {
  currentTheme: ThemeType;
  changeTheme: (theme: ThemeType) => void;
  closeSelector: () => void;
}

const ThemeSwitcher: React.FC<ThemeSwitcherProps> = ({ 
  currentTheme, 
  changeTheme,
  closeSelector
}) => {
  const themes = [
    { id: 'light', name: 'Light', icon: <Sun size={24} /> },
    { id: 'dark', name: 'Dark', icon: <Moon size={24} /> },
    { id: 'blue', name: 'Ocean', icon: <Droplets size={24} /> },
    { id: 'purple', name: 'Lavender', icon: <Flower size={24} /> },
    { id: 'green', name: 'Forest', icon: <Leaf size={24} /> },
  ];

  const getButtonClass = (themeId: string) => {
    const isActive = currentTheme === themeId;
    
    const baseClasses = "flex flex-col items-center justify-center p-4 rounded-lg transition-all";
    
    if (isActive) {
      switch (themeId) {
        case 'light':
          return `${baseClasses} bg-gray-200 text-gray-900 ring-2 ring-gray-400`;
        case 'dark':
          return `${baseClasses} bg-gray-800 text-white ring-2 ring-gray-600`;
        case 'blue':
          return `${baseClasses} bg-blue-800 text-white ring-2 ring-blue-500`;
        case 'purple':
          return `${baseClasses} bg-purple-800 text-white ring-2 ring-purple-500`;
        case 'green':
          return `${baseClasses} bg-green-800 text-white ring-2 ring-green-500`;
      }
    }
    
    return `${baseClasses} hover:bg-gray-100 dark:hover:bg-gray-800 blue-theme:hover:bg-blue-900 purple-theme:hover:bg-purple-900 green-theme:hover:bg-green-900`;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="fixed top-20 right-4 md:right-10 z-50 p-4 rounded-lg shadow-xl bg-white dark:bg-gray-800 blue-theme:bg-blue-900 purple-theme:bg-purple-900 green-theme:bg-green-900"
    >
      <div className="flex justify-between items-center mb-3">
        <h3 className="font-medium">Select Theme</h3>
        <button 
          onClick={closeSelector}
          className="p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 blue-theme:hover:bg-blue-800 purple-theme:hover:bg-purple-800 green-theme:hover:bg-green-800"
        >
          <X size={18} />
        </button>
      </div>
      
      <div className="grid grid-cols-3 gap-2">
        {themes.map((theme) => (
          <motion.button
            key={theme.id}
            onClick={() => changeTheme(theme.id as ThemeType)}
            className={getButtonClass(theme.id)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="mb-2">{theme.icon}</div>
            <span className="text-xs">{theme.name}</span>
          </motion.button>
        ))}
      </div>
    </motion.div>
  );
};

export default ThemeSwitcher;