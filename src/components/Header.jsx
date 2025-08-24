import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, MapPin, Calendar } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const Header = ({ personalInfo }) => {
  const { isDark } = useTheme();
  
  return (
    <motion.header 
      className={`py-12 px-6 transition-all duration-300 ${
        isDark 
          ? 'bg-gradient-to-r from-gray-800 to-gray-900 text-gray-100' 
          : 'bg-gradient-to-r from-primary-600 to-primary-800 text-white'
      }`}
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Profile Image */}
          <motion.div 
            className="relative"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            {personalInfo.profilePicture ? (
              <img 
                src={personalInfo.profilePicture}
                alt={personalInfo.name}
                className="w-32 h-32 rounded-full object-cover border-4 border-white/30 shadow-lg"
                onError={(e) => {
                  // Fallback to initials if image fails to load
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
            ) : null}
            <div 
              className={`w-32 h-32 bg-white/20 rounded-full flex items-center justify-center text-4xl font-bold border-4 border-white/30 shadow-lg ${personalInfo.profilePicture ? 'hidden' : 'flex'}`}
            >
              {personalInfo.name.split(' ').map(n => n[0]).join('')}
            </div>
          </motion.div>
          
          {/* Profile Info */}
          <div className="flex-1 text-center md:text-left">
            <motion.h1 
              className="text-4xl md:text-5xl font-bold mb-2"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              {personalInfo.name}
            </motion.h1>
            
            <motion.h2 
              className={`text-xl md:text-2xl mb-4 transition-colors duration-300 ${
                isDark ? 'text-gray-300' : 'text-primary-100'
              }`}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              {personalInfo.title}
            </motion.h2>
            
            <motion.div 
              className={`flex flex-wrap justify-center md:justify-start gap-4 mb-4 transition-colors duration-300 ${
                isDark ? 'text-gray-300' : 'text-primary-100'
              }`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <div className="flex items-center gap-2">
                <Calendar size={16} />
                <span>{personalInfo.experience}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={16} />
                <span>{personalInfo.location}</span>
              </div>
            </motion.div>
            
            <motion.p 
              className={`text-lg mb-6 max-w-2xl transition-colors duration-300 ${
                isDark ? 'text-gray-200' : 'text-primary-50'
              }`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              {personalInfo.bio}
            </motion.p>
            
            {/* Social Links */}
            <motion.div 
              className="flex justify-center md:justify-start gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              <motion.a 
                href="#" 
                className={`p-2 rounded-full transition-all duration-300 ${
                  isDark 
                    ? 'bg-gray-700 hover:bg-gray-600 text-gray-200' 
                    : 'bg-white/20 hover:bg-white/30 text-white'
                }`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Github size={20} />
              </motion.a>
              <motion.a 
                href="#" 
                className={`p-2 rounded-full transition-all duration-300 ${
                  isDark 
                    ? 'bg-gray-700 hover:bg-gray-600 text-gray-200' 
                    : 'bg-white/20 hover:bg-white/30 text-white'
                }`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Linkedin size={20} />
              </motion.a>
              <motion.a 
                href="#" 
                className={`p-2 rounded-full transition-all duration-300 ${
                  isDark 
                    ? 'bg-gray-700 hover:bg-gray-600 text-gray-200' 
                    : 'bg-white/20 hover:bg-white/30 text-white'
                }`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Mail size={20} />
              </motion.a>
            </motion.div>
          </div>
        </div>
        
        {/* Highlights */}
        <motion.div 
          className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
        >
          {personalInfo.highlights.map((highlight, index) => (
            <motion.div 
              key={index}
              className={`backdrop-blur-sm rounded-lg p-4 text-center transition-all duration-300 ${
                isDark 
                  ? 'bg-gray-700/50 hover:bg-gray-600/50' 
                  : 'bg-white/10 hover:bg-white/20'
              }`}
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <p className={`text-sm transition-colors duration-300 ${
                isDark ? 'text-gray-200' : 'text-primary-50'
              }`}>{highlight}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.header>
  );
};

export default Header;
