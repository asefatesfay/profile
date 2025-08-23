import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navigation from './components/Navigation';
import About from './components/About';
import ProfileOverview from './components/ProfileOverview';
import Roadmap from './components/Roadmap';
import Projects from './components/Projects';
import Timeline from './components/Timeline';
import Contact from './components/Contact';
import Achievements from './components/Achievements';
import Goals from './components/Goals';
import LearningRoadmap from './components/LearningRoadmap';
import SkillsAssessment from './components/SkillsAssessment';
import ResourceHub from './components/ResourceHub';
import PortfolioExport from './components/PortfolioExport';
import { skillsData, personalInfo } from './data/skillsData';

function App() {
  const [currentView, setCurrentView] = useState('about');
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    // Apply dark mode to document
    if (darkMode) {
      document.documentElement.classList.remove('dark');
    } else {
      document.documentElement.classList.add('dark');
    }
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'dark bg-gray-900' : 'bg-gray-50'}`}>
      <Navigation 
        currentView={currentView} 
        setCurrentView={setCurrentView}
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
      />
      
      {/* Main Content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentView}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          {currentView === 'about' && <About setCurrentView={setCurrentView} />}
          {currentView === 'profile-overview' && <ProfileOverview />}
          {currentView === 'roadmap' && <Roadmap />}
          {currentView === 'projects' && <Projects />}
          {currentView === 'timeline' && <Timeline />}
          {currentView === 'assessment' && <SkillsAssessment />}
          {currentView === 'resources' && <ResourceHub />}
          {currentView === 'achievements' && <Achievements />}
          {currentView === 'goals' && <Goals />}
          {currentView === 'ml-roadmap' && <LearningRoadmap skill={skillsData.skills.find(s => s.id === 'machine-learning')} />}
          {currentView === 'contact' && <Contact />}
          {currentView === 'export' && <PortfolioExport />}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export default App;
