import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Github, Linkedin, Mail, Download, Sun, Moon } from 'lucide-react';

const Navigation = ({ currentView, setCurrentView, darkMode, toggleDarkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationItems = [
    { id: 'about', label: 'About', icon: '👨‍💻' },
    { id: 'profile-overview', label: 'Profile Overview', icon: '📊' },
    { id: 'roadmap', label: 'Skills', icon: '🗺️' },
    { id: 'projects', label: 'Projects', icon: '🚀' },
    { id: 'timeline', label: 'Timeline', icon: '📈' },
    { id: 'assessment', label: 'Assessment', icon: '🎯' },
    { id: 'resources', label: 'Resources', icon: '�' },
    { id: 'achievements', label: 'Achievements', icon: '🏆' },
    { id: 'goals', label: 'Goals', icon: '🎯' },
    { id: 'ml-roadmap', label: 'ML Roadmap', icon: '🤖' },
    { id: 'contact', label: 'Contact', icon: '💬' }
  ];

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200' 
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo/Brand */}
          <motion.div 
            className="flex items-center gap-3 cursor-pointer"
            onClick={() => setCurrentView('about')}
            whileHover={{ scale: 1.05 }}
          >
            <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center text-white font-bold text-lg">
              AT
            </div>
            <span className="hidden sm:block font-bold text-xl text-gray-900">
              Assefa Tesfay
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navigationItems.map((item) => (
              <motion.button
                key={item.id}
                onClick={() => setCurrentView(item.id)}
                className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                  currentView === item.id
                    ? 'bg-blue-100 text-blue-700'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="text-lg">{item.icon}</span>
                {item.label}
              </motion.button>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <motion.button
              onClick={toggleDarkMode}
              className="p-2 rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-100"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </motion.button>

            <motion.a
              href="mailto:assefa.tesfay@example.com"
              className="p-2 rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-100"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Mail className="w-5 h-5" />
            </motion.a>

            <motion.a
              href="https://github.com/assefatesfay"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-100"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Github className="w-5 h-5" />
            </motion.a>

            <motion.button
              onClick={() => setCurrentView('export')}
              className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Download className="w-4 h-4" />
              Resume
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-100"
            whileTap={{ scale: 0.9 }}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            className="md:hidden bg-white border-t border-gray-200 py-4"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
          >
            <div className="flex flex-col gap-2">
              {navigationItems.map((item) => (
                <motion.button
                  key={item.id}
                  onClick={() => {
                    setCurrentView(item.id);
                    setIsMenuOpen(false);
                  }}
                  className={`flex items-center gap-3 px-4 py-3 text-left rounded-lg transition-all ${
                    currentView === item.id
                      ? 'bg-blue-100 text-blue-700'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                  }`}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="text-xl">{item.icon}</span>
                  {item.label}
                </motion.button>
              ))}
              
              <div className="flex items-center justify-between px-4 py-2 border-t border-gray-200 mt-2 pt-4">
                <span className="text-sm text-gray-500">Quick Actions</span>
                <div className="flex gap-2">
                  <button
                    onClick={toggleDarkMode}
                    className="p-2 rounded-lg text-gray-600 hover:bg-gray-100"
                  >
                    {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
                  </button>
                  <a
                    href="mailto:assefa.tesfay@example.com"
                    className="p-2 rounded-lg text-gray-600 hover:bg-gray-100"
                  >
                    <Mail className="w-4 h-4" />
                  </a>
                  <a
                    href="https://github.com/assefatesfay"
                    className="p-2 rounded-lg text-gray-600 hover:bg-gray-100"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navigation;
