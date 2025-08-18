import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, MapPin, Calendar } from 'lucide-react';

const Header = ({ personalInfo }) => {
  return (
    <motion.header 
      className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-12 px-6"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Profile Image Placeholder */}
          <motion.div 
            className="w-32 h-32 bg-white/20 rounded-full flex items-center justify-center text-4xl font-bold"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            {personalInfo.name.split(' ').map(n => n[0]).join('')}
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
              className="text-xl md:text-2xl text-primary-100 mb-4"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              {personalInfo.title}
            </motion.h2>
            
            <motion.div 
              className="flex flex-wrap justify-center md:justify-start gap-4 text-primary-100 mb-4"
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
              className="text-lg text-primary-50 mb-6 max-w-2xl"
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
                className="p-2 bg-white/20 rounded-full hover:bg-white/30 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Github size={20} />
              </motion.a>
              <motion.a 
                href="#" 
                className="p-2 bg-white/20 rounded-full hover:bg-white/30 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Linkedin size={20} />
              </motion.a>
              <motion.a 
                href="#" 
                className="p-2 bg-white/20 rounded-full hover:bg-white/30 transition-colors"
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
              className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <p className="text-sm text-primary-50">{highlight}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.header>
  );
};

export default Header;
