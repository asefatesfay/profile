import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';

const CategoryNode = ({ data }) => {
  const { isDark } = useTheme();
  const { category, isActiveCategory } = data;
  
  return (
    <motion.div
      className="relative"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ 
        type: "spring", 
        stiffness: 300, 
        delay: Math.random() * 0.3 
      }}
    >
      <div 
        className={`px-6 py-4 rounded-xl font-bold text-white shadow-lg cursor-pointer text-center min-w-[200px] relative transition-all duration-300 ${
          isDark ? 'shadow-gray-900/50' : 'shadow-gray-700/50'
        }`}
        style={{ backgroundColor: category.color }}
      >
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center justify-center"
        >
          <span className="text-lg">{category.title}</span>
        </motion.div>
        
        {/* Decorative elements with theme-aware opacity */}
        <div className={`absolute inset-0 rounded-xl pointer-events-none transition-opacity duration-300 ${
          isDark 
            ? 'bg-gradient-to-r from-white/15 to-white/10' 
            : 'bg-gradient-to-r from-white/10 to-white/5'
        }`}></div>
        <div className={`absolute -inset-1 rounded-xl blur-sm -z-10 transition-opacity duration-300 ${
          isDark 
            ? 'bg-gradient-to-r from-white/25 to-transparent' 
            : 'bg-gradient-to-r from-white/20 to-transparent'
        }`}></div>
        
        {/* Visual connection indicators when this category is active */}
        {isActiveCategory && (
          <>
            {/* Longer radiating lines to indicate connections to skill groups */}
            <motion.div
              className="absolute top-1/2 -right-6 h-0.5 bg-white/90"
              style={{ backgroundColor: 'rgba(255,255,255,0.9)' }}
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: 80, opacity: 0.9 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            />
            <motion.div
              className="absolute top-1/2 -left-6 h-0.5 bg-white/90"
              style={{ backgroundColor: 'rgba(255,255,255,0.9)' }}
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: 80, opacity: 0.9 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            />
            <motion.div
              className="absolute -top-6 left-1/2 w-0.5 bg-white/90 transform -translate-x-1/2"
              style={{ backgroundColor: 'rgba(255,255,255,0.9)' }}
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 80, opacity: 0.9 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            />
            <motion.div
              className="absolute -bottom-6 left-1/2 w-0.5 bg-white/90 transform -translate-x-1/2"
              style={{ backgroundColor: 'rgba(255,255,255,0.9)' }}
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 80, opacity: 0.9 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            />
            
            {/* Additional diagonal lines for more connection feel */}
            <motion.div
              className="absolute top-0 -right-6 w-0.5 bg-white/70 transform rotate-45 origin-left"
              style={{ backgroundColor: 'rgba(255,255,255,0.7)' }}
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 60, opacity: 0.7 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            />
            <motion.div
              className="absolute bottom-0 -right-6 w-0.5 bg-white/70 transform -rotate-45 origin-left"
              style={{ backgroundColor: 'rgba(255,255,255,0.7)' }}
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 60, opacity: 0.7 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            />
            <motion.div
              className="absolute top-0 -left-6 w-0.5 bg-white/70 transform -rotate-45 origin-right"
              style={{ backgroundColor: 'rgba(255,255,255,0.7)' }}
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 60, opacity: 0.7 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            />
            <motion.div
              className="absolute bottom-0 -left-6 w-0.5 bg-white/70 transform rotate-45 origin-right"
              style={{ backgroundColor: 'rgba(255,255,255,0.7)' }}
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 60, opacity: 0.7 }}
              transition={{ duration: 0.6, delay: 0.9 }}
            />
            
            {/* Enhanced glow effect with theme awareness */}
            <div className={`absolute -inset-3 rounded-xl blur-lg animate-pulse transition-opacity duration-300 ${
              isDark 
                ? 'bg-gradient-to-r from-white/20 to-white/20' 
                : 'bg-gradient-to-r from-white/15 to-white/15'
            }`}></div>
          </>
        )}
      </div>
    </motion.div>
  );
};

export default CategoryNode;
