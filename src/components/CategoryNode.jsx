import React from 'react';
import { motion } from 'framer-motion';

const CategoryNode = ({ data }) => {
  const { category } = data;
  
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
        className="px-6 py-4 rounded-xl font-bold text-white shadow-lg cursor-pointer text-center min-w-[200px]"
        style={{ backgroundColor: category.color }}
      >
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center justify-center"
        >
          <span className="text-lg">{category.title}</span>
        </motion.div>
        
        {/* Decorative elements */}
        <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-white/10 to-white/5 pointer-events-none"></div>
        <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-white/20 to-transparent blur-sm -z-10"></div>
      </div>
    </motion.div>
  );
};

export default CategoryNode;
