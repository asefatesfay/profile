import React from 'react';
import { motion } from 'framer-motion';
import { 
  Github, 
  Linkedin, 
  Mail, 
  Heart, 
  Home, 
  Code, 
  MapPin, 
  Calendar,
  Award,
  Users,
  TrendingUp,
  ArrowUp
} from 'lucide-react';

const Footer = ({ personalInfo, setCurrentView }) => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: 'GitHub',
      url: personalInfo.github,
      icon: Github,
      color: 'hover:text-gray-300',
      description: 'View my code repositories'
    },
    {
      name: 'LinkedIn',
      url: personalInfo.linkedin,
      icon: Linkedin,
      color: 'hover:text-blue-400',
      description: 'Connect professionally'
    },
    {
      name: 'Email',
      url: `mailto:${personalInfo.email}`,
      icon: Mail,
      color: 'hover:text-green-400',
      description: 'Get in touch'
    },
    {
      name: 'Portfolio Home',
      url: '#home',
      icon: Home,
      color: 'hover:text-purple-400',
      description: 'Back to portfolio home',
      isInternal: true,
      action: () => {
        if (setCurrentView) {
          setCurrentView('roadmap');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }
    }
  ];

  const navigationSections = [
    {
      title: 'Portfolio',
      links: [
        { name: 'Skills Overview', id: 'roadmap' },
        { name: 'Projects', id: 'projects' },
        { name: 'Career Timeline', id: 'timeline' },
        { name: 'Profile Overview', id: 'profile' }
      ]
    },
    {
      title: 'Professional',
      links: [
        { name: 'Achievements', id: 'achievements' },
        { name: 'Goals & Planning', id: 'goals' },
        { name: 'Skills Assessment', id: 'assessment' },
        { name: 'Learning Path', id: 'learning' }
      ]
    },
    {
      title: 'Resources',
      links: [
        { name: 'Resource Hub', id: 'resources' },
        { name: 'Tech Stack', id: 'roadmap' },
        { name: 'Certifications', id: 'achievements' },
        { name: 'Contact', id: 'contact' }
      ]
    }
  ];

  const stats = [
    { icon: Calendar, label: 'Experience', value: personalInfo.experience },
    { icon: MapPin, label: 'Location', value: personalInfo.location },
    { icon: Award, label: 'Projects', value: '15+' },
    { icon: Users, label: 'Teams Led', value: '5+' }
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, #3B82F6 0%, transparent 70%), 
                           radial-gradient(circle at 75% 75%, #8B5CF6 0%, transparent 70%)`
        }} />
      </div>

      {/* Main Footer Content */}
      <div className="relative max-w-7xl mx-auto px-6 py-16">
        
        {/* Top Section - Professional Summary */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            {personalInfo.name}
          </h2>
          <p className="text-xl text-gray-300 mb-6 max-w-2xl mx-auto">
            {personalInfo.title}
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full mb-2">
                    <IconComponent size={20} className="text-blue-400" />
                  </div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                  <div className="font-semibold text-white">{stat.value}</div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Navigation Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          
          {/* Professional Summary */}
          <motion.div 
            className="lg:col-span-1"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-bold mb-4 text-blue-400 flex items-center gap-2">
              <TrendingUp size={20} />
              About
            </h3>
            <p className="text-gray-300 mb-4 leading-relaxed text-sm">
              Building scalable systems and leading engineering teams to deliver 
              enterprise-grade solutions. Passionate about mentoring developers 
              and creating innovative technical architectures.
            </p>
            <div className="flex items-center gap-2 text-gray-400">
              <Code size={16} />
              <span className="text-xs">React • Vite • Tailwind • Framer Motion</span>
            </div>
          </motion.div>

          {/* Navigation Sections */}
          {navigationSections.map((section, sectionIndex) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: (sectionIndex + 1) * 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold mb-4 text-blue-400">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link, index) => (
                  <motion.li 
                    key={link.id}
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <button
                      onClick={() => {
                        if (setCurrentView) {
                          setCurrentView(link.id);
                          window.scrollTo({ top: 0, behavior: 'smooth' });
                        }
                      }}
                      className="text-gray-300 hover:text-blue-400 transition-all duration-200 text-sm group flex items-center gap-2"
                    >
                      <span className="w-1 h-1 bg-gray-600 rounded-full group-hover:bg-blue-400 transition-colors" />
                      {link.name}
                    </button>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Social Links Section */}
        <motion.div 
          className="border-t border-gray-700 pt-8 mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h4 className="text-lg font-semibold mb-6 text-center text-blue-400">Let's Connect</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {socialLinks.map((social, index) => {
              const IconComponent = social.icon;
              
              if (social.isInternal) {
                return (
                  <motion.button
                    key={social.name}
                    onClick={social.action}
                    className="group flex items-center gap-4 p-4 bg-gray-800/50 rounded-lg border border-gray-700 hover:border-blue-500/50 transition-all duration-300 w-full text-left"
                    whileHover={{ y: -2, scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className={`flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center group-hover:from-blue-500/30 group-hover:to-purple-500/30 transition-all duration-300`}>
                      <IconComponent size={18} className={`text-gray-300 ${social.color} transition-colors duration-300`} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-medium text-white group-hover:text-blue-400 transition-colors duration-300">{social.name}</div>
                      <div className="text-xs text-gray-400 truncate">{social.description}</div>
                    </div>
                  </motion.button>
                );
              }
              
              return (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 p-4 bg-gray-800/50 rounded-lg border border-gray-700 hover:border-blue-500/50 transition-all duration-300"
                  whileHover={{ y: -2, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className={`flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center group-hover:from-blue-500/30 group-hover:to-purple-500/30 transition-all duration-300`}>
                    <IconComponent size={18} className={`text-gray-300 ${social.color} transition-colors duration-300`} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-medium text-white group-hover:text-blue-400 transition-colors duration-300">{social.name}</div>
                    <div className="text-xs text-gray-400 truncate">{social.description}</div>
                  </div>
                </motion.a>
              );
            })}
          </div>
        </motion.div>
      </div>

      {/* Bottom Bar */}
      <motion.div 
        className="relative border-t border-gray-700 bg-gray-900/80 backdrop-blur-sm"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            
            {/* Copyright */}
            <div className="flex items-center gap-4 text-gray-400 text-sm">
              <span>&copy; {currentYear} {personalInfo.name}. All rights reserved.</span>
              <span className="hidden md:inline text-gray-600">|</span>
              <span className="hidden md:inline">Senior Software Engineer & Technical Architect</span>
            </div>

            {/* Made with love */}
            <motion.div 
              className="flex items-center gap-2 text-gray-400 text-sm"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <span>Crafted with</span>
              <motion.div
                animate={{ 
                  scale: [1, 1.2, 1],
                  rotate: [0, 10, -10, 0]
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  repeatDelay: 4
                }}
              >
                <Heart size={16} className="text-red-500 fill-current" />
              </motion.div>
              <span>passion & ☕</span>
            </motion.div>

            {/* Back to top */}
            <motion.button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="flex items-center gap-2 text-gray-400 hover:text-blue-400 transition-all duration-300 bg-gray-800/50 hover:bg-gray-700/50 px-4 py-2 rounded-full border border-gray-700 hover:border-blue-500/50"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <ArrowUp size={16} />
              <span>Back to top</span>
            </motion.button>
          </div>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
