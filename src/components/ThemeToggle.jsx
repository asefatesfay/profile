import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const ThemeToggle = () => {
  const { isDark, toggleTheme } = useTheme();
  const [isToggling, setIsToggling] = useState(false);

  const handleToggle = () => {
    setIsToggling(true);
    toggleTheme();
    setTimeout(() => setIsToggling(false), 300);
  };

  return (
    <motion.button
      onClick={handleToggle}
      className={`flex items-center justify-center p-2 rounded-lg transition-all duration-300 ${
        isDark 
          ? 'bg-gray-700 text-yellow-400 hover:bg-gray-600 shadow-lg' 
          : 'bg-gray-100 text-gray-600 hover:bg-gray-200 shadow-sm'
      } ${isToggling ? 'ring-2 ring-blue-400 ring-opacity-50' : ''}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      animate={{ 
        rotate: isDark ? 180 : 0,
        scale: isToggling ? [1, 1.1, 1] : 1
      }}
      transition={{ 
        rotate: { duration: 0.3, ease: "easeInOut" },
        scale: { duration: 0.3 }
      }}
      title={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
    >
      <motion.div
        animate={{ 
          opacity: 1, 
          scale: isToggling ? [1, 0.8, 1] : 1 
        }}
        transition={{ duration: 0.2 }}
        className="flex items-center justify-center"
      >
        {isDark ? (
          <Sun size={18} className="drop-shadow-sm" />
        ) : (
          <Moon size={18} className="drop-shadow-sm" />
        )}
      </motion.div>
    </motion.button>
  );
};

export default ThemeToggle;
