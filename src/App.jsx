import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ThemeProvider, useTheme } from './contexts/ThemeContext';
import ThemeToggle from './components/ThemeToggle';
import Header from './components/Header';
import Footer from './components/Footer';
import Roadmap from './components/Roadmap';
import LearningRoadmap from './components/LearningRoadmap';
import Projects from './components/Projects';
import Timeline from './components/Timeline';
import SkillsAssessment from './components/SkillsAssessment';
import ResourceHub from './components/ResourceHub';
import Achievements from './components/Achievements';
import Goals from './components/Goals';
import PortfolioExport from './components/PortfolioExport';
import TechStackVisualization from './components/TechStackVisualization';
import { skillsData, personalInfo } from './data/skillsData';
import { BarChart3, Map, User, Eye, EyeOff, BookOpen, Code, Clock, Target, Trophy, Bookmark, Crosshair, FileText, Layers } from 'lucide-react';

function AppContent() {
  const { isDark } = useTheme();
  const [currentView, setCurrentView] = useState('roadmap');
  const [showStats, setShowStats] = useState(true);
  const [selectedSkillForRoadmap, setSelectedSkillForRoadmap] = useState(null);

  // Find the Machine Learning skill
  const mlSkill = skillsData.skills.find(skill => skill.id === 'machine-learning');

  const getSkillStats = () => {
    const total = skillsData.skills.length;
    const completed = skillsData.skills.filter(skill => skill.status === 'completed').length;
    const inProgress = skillsData.skills.filter(skill => skill.status === 'in-progress').length;
    const planned = skillsData.skills.filter(skill => skill.status === 'planned').length;
    
    return { total, completed, inProgress, planned };
  };

  const stats = getSkillStats();

  const StatCard = ({ title, value, color, delay }) => (
    <motion.div
      className={`bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm border-l-4 transition-colors duration-300`}
      style={{ borderLeftColor: color }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.5 }}
      whileHover={{ scale: 1.02, boxShadow: "0 8px 25px rgba(0,0,0,0.1)" }}
    >
      <div className="text-2xl font-bold text-gray-800 dark:text-gray-100">{value}</div>
      <div className="text-sm text-gray-600 dark:text-gray-300">{title}</div>
    </motion.div>
  );

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <Header personalInfo={personalInfo} />
      
      {/* Navigation */}
      <motion.nav 
        className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 px-4 lg:px-6 py-4 transition-colors duration-300"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
      >
        <div className="max-w-7xl mx-auto">
          {/* Top row - Always visible controls */}
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-xl font-bold text-gray-800 dark:text-white">Portfolio Dashboard</h1>
            <div className="flex items-center gap-3">
              <motion.button
                onClick={() => setCurrentView('export')}
                className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-all duration-200 font-medium shadow-sm ${
                  currentView === 'export' 
                    ? 'bg-blue-600 text-white shadow-md border-2 border-blue-500' 
                    : 'text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white border-2 border-gray-300 dark:border-gray-600 hover:border-gray-400 dark:hover:border-gray-500 bg-white dark:bg-gray-800'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FileText size={16} />
                <span className="hidden sm:inline">Export</span>
              </motion.button>
              
              <ThemeToggle />
              
              <motion.button
                onClick={() => setShowStats(!showStats)}
                className="flex items-center gap-2 px-3 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-all duration-200 font-medium shadow-sm border-2 border-gray-300 dark:border-gray-600 hover:border-gray-400 dark:hover:border-gray-500 bg-white dark:bg-gray-800"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {showStats ? <EyeOff size={16} /> : <Eye size={16} />}
                <span className="hidden sm:inline">{showStats ? 'Hide Stats' : 'Show Stats'}</span>
              </motion.button>
            </div>
          </div>

          {/* Main navigation - scrollable on mobile */}
          <div className="overflow-x-auto">
            <div className="flex gap-2 md:gap-3 min-w-max md:min-w-0 md:flex-wrap">
              <motion.button
                onClick={() => setCurrentView('roadmap')}
                className={`flex items-center gap-2 px-3 md:px-4 py-2 rounded-lg transition-all duration-200 font-medium whitespace-nowrap ${
                  currentView === 'roadmap' 
                    ? 'bg-blue-600 text-white shadow-md' 
                    : 'text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Map size={16} />
                <span>Skills</span>
              </motion.button>
              
              <motion.button
                onClick={() => setCurrentView('profile')}
                className={`flex items-center gap-2 px-3 md:px-4 py-2 rounded-lg transition-all duration-200 font-medium whitespace-nowrap ${
                  currentView === 'profile' 
                    ? 'bg-blue-600 text-white shadow-md' 
                    : 'text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <User size={16} />
                <span>Profile</span>
              </motion.button>

              <motion.button
                onClick={() => setCurrentView('ml-roadmap')}
                className={`flex items-center gap-2 px-3 md:px-4 py-2 rounded-lg transition-all duration-200 font-medium whitespace-nowrap ${
                  currentView === 'ml-roadmap' 
                    ? 'bg-blue-600 text-white shadow-md' 
                    : 'text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <BookOpen size={16} />
                <span>ML Roadmap</span>
              </motion.button>

              <motion.button
                onClick={() => setCurrentView('projects')}
                className={`flex items-center gap-2 px-3 md:px-4 py-2 rounded-lg transition-all duration-200 font-medium whitespace-nowrap ${
                  currentView === 'projects' 
                    ? 'bg-blue-600 text-white shadow-md' 
                    : 'text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Code size={16} />
                <span>Projects</span>
              </motion.button>

              <motion.button
                onClick={() => setCurrentView('tech-stack')}
                className={`flex items-center gap-2 px-3 md:px-4 py-2 rounded-lg transition-all duration-200 font-medium whitespace-nowrap ${
                  currentView === 'tech-stack' 
                    ? 'bg-blue-600 text-white shadow-md' 
                    : 'text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Layers size={16} />
                <span>Tech Stack</span>
              </motion.button>

              <motion.button
                onClick={() => setCurrentView('timeline')}
                className={`flex items-center gap-2 px-3 md:px-4 py-2 rounded-lg transition-all duration-200 font-medium whitespace-nowrap ${
                  currentView === 'timeline' 
                    ? 'bg-blue-600 text-white shadow-md' 
                    : 'text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Clock size={16} />
                <span>Timeline</span>
              </motion.button>

              <motion.button
                onClick={() => setCurrentView('assessment')}
                className={`flex items-center gap-2 px-3 md:px-4 py-2 rounded-lg transition-all duration-200 font-medium whitespace-nowrap ${
                  currentView === 'assessment' 
                    ? 'bg-blue-600 text-white shadow-md' 
                    : 'text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Target size={16} />
                <span>Assessment</span>
              </motion.button>

              <motion.button
                onClick={() => setCurrentView('resources')}
                className={`flex items-center gap-2 px-3 md:px-4 py-2 rounded-lg transition-all duration-200 font-medium whitespace-nowrap ${
                  currentView === 'resources' 
                    ? 'bg-blue-600 text-white shadow-md' 
                    : 'text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Bookmark size={16} />
                <span>Resources</span>
              </motion.button>

              <motion.button
                onClick={() => setCurrentView('achievements')}
                className={`flex items-center gap-2 px-3 md:px-4 py-2 rounded-lg transition-all duration-200 font-medium whitespace-nowrap ${
                  currentView === 'achievements' 
                    ? 'bg-blue-600 text-white shadow-md' 
                    : 'text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Trophy size={16} />
                <span>Achievements</span>
              </motion.button>

              <motion.button
                onClick={() => setCurrentView('goals')}
                className={`flex items-center gap-2 px-3 md:px-4 py-2 rounded-lg transition-all duration-200 font-medium whitespace-nowrap ${
                  currentView === 'goals' 
                    ? 'bg-blue-600 text-white shadow-md' 
                    : 'text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Crosshair size={16} />
                <span>Goals</span>
              </motion.button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Stats Bar */}
      <AnimatePresence>
        {showStats && (
          <motion.div
            className="bg-gray-100 dark:bg-gray-800 px-6 py-4 border-b border-gray-200 dark:border-gray-700 transition-colors duration-300"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
              <StatCard 
                title="Total Skills" 
                value={stats.total} 
                color="#6B7280" 
                delay={0} 
              />
              <StatCard 
                title="Completed" 
                value={stats.completed} 
                color="#10B981" 
                delay={0.1} 
              />
              <StatCard 
                title="In Progress" 
                value={stats.inProgress} 
                color="#3B82F6" 
                delay={0.2} 
              />
              <StatCard 
                title="Planned" 
                value={stats.planned} 
                color="#F59E0B" 
                delay={0.3} 
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <main className="relative overflow-visible">
        <AnimatePresence mode="wait">
          {currentView === 'roadmap' && (
            <motion.div
              key="roadmap"
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 100 }}
              transition={{ duration: 0.5 }}
              className="h-[calc(100vh-280px)] overflow-visible"
            >
              <Roadmap />
            </motion.div>
          )}
          
          {currentView === 'profile' && (
            <motion.div
              key="profile"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="p-6"
            >
              <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  {/* Skills by Category */}
                  <div className="lg:col-span-2">
                    <motion.h2 
                      className={`text-2xl font-bold mb-6 transition-colors duration-300 ${
                        isDark ? 'text-white' : 'text-gray-800'
                      }`}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      Skills by Category
                    </motion.h2>
                    
                    <div className="space-y-6">
                      {Object.values(skillsData.categories).map((category, categoryIndex) => {
                        const categorySkills = skillsData.skills.filter(
                          skill => skill.category === category.id
                        );
                        
                        return (
                          <motion.div
                            key={category.id}
                            className={`rounded-lg p-6 shadow-sm border transition-colors duration-300 ${
                              isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
                            }`}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 + categoryIndex * 0.1 }}
                          >
                            <h3 
                              className={`text-lg font-semibold mb-4 pb-2 border-b-2 transition-colors duration-300 ${
                                isDark ? 'text-white' : 'text-gray-900'
                              }`}
                              style={{ borderBottomColor: category.color }}
                            >
                              {category.title}
                            </h3>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              {categorySkills.map((skill, skillIndex) => (
                                <motion.div
                                  key={skill.id}
                                  className={`flex items-center justify-between p-3 rounded-lg transition-colors duration-300 ${
                                    isDark ? 'bg-gray-700' : 'bg-gray-50'
                                  }`}
                                  initial={{ opacity: 0, x: -20 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: 0.5 + skillIndex * 0.05 }}
                                >
                                  <div>
                                    <div className={`font-medium transition-colors duration-300 ${
                                      isDark ? 'text-white' : 'text-gray-800'
                                    }`}>{skill.title}</div>
                                    <div className={`text-sm transition-colors duration-300 ${
                                      isDark ? 'text-gray-300' : 'text-gray-600'
                                    }`}>{skill.level}</div>
                                  </div>
                                  <div className="text-right">
                                    <div 
                                      className={`text-xs px-2 py-1 rounded-full ${
                                        skill.status === 'completed' ? 'bg-green-100 text-green-800' :
                                        skill.status === 'in-progress' ? 'bg-blue-100 text-blue-800' :
                                        'bg-gray-100 text-gray-800'
                                      }`}
                                    >
                                      {skill.status.replace('-', ' ')}
                                    </div>
                                    {skill.yearsOfExperience > 0 && (
                                      <div className={`text-xs mt-1 transition-colors duration-300 ${
                                        isDark ? 'text-gray-400' : 'text-gray-500'
                                      }`}>
                                        {skill.yearsOfExperience}y exp
                                      </div>
                                    )}
                                  </div>
                                </motion.div>
                              ))}
                            </div>
                          </motion.div>
                        );
                      })}
                    </div>
                  </div>
                  
                  {/* Progress Overview */}
                  <div>
                    <motion.h2 
                      className={`text-2xl font-bold mb-6 transition-colors duration-300 ${
                        isDark ? 'text-white' : 'text-gray-800'
                      }`}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                    >
                      Progress Overview
                    </motion.h2>
                    
                    <div className="space-y-4">
                      <motion.div
                        className={`rounded-lg p-6 shadow-sm border transition-colors duration-300 ${
                          isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
                        }`}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.5 }}
                      >
                        <div className="flex items-center gap-3 mb-4">
                          <BarChart3 className="text-primary-500" size={24} />
                          <h3 className={`text-lg font-semibold transition-colors duration-300 ${
                            isDark ? 'text-white' : 'text-gray-900'
                          }`}>Skill Distribution</h3>
                        </div>
                        
                        {['completed', 'in-progress', 'planned'].map((status, index) => {
                          const count = stats[status === 'in-progress' ? 'inProgress' : status];
                          const percentage = (count / stats.total) * 100;
                          const colors = {
                            completed: 'bg-green-500',
                            'in-progress': 'bg-blue-500',
                            planned: 'bg-yellow-500'
                          };
                          
                          return (
                            <div key={status} className="mb-3">
                              <div className={`flex justify-between text-sm mb-1 transition-colors duration-300 ${
                                isDark ? 'text-gray-300' : 'text-gray-700'
                              }`}>
                                <span className="capitalize">{status.replace('-', ' ')}</span>
                                <span>{count} ({percentage.toFixed(0)}%)</span>
                              </div>
                              <div className={`w-full rounded-full h-2 transition-colors duration-300 ${
                                isDark ? 'bg-gray-700' : 'bg-gray-200'
                              }`}>
                                <motion.div
                                  className={`h-2 rounded-full ${colors[status]}`}
                                  initial={{ width: 0 }}
                                  animate={{ width: `${percentage}%` }}
                                  transition={{ delay: 0.7 + index * 0.1, duration: 0.8 }}
                                />
                              </div>
                            </div>
                          );
                        })}
                      </motion.div>
                      
                      {/* Experience Summary */}
                      <motion.div
                        className={`rounded-lg p-6 shadow-sm border transition-colors duration-300 ${
                          isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
                        }`}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.6 }}
                      >
                        <h3 className={`text-lg font-semibold mb-4 transition-colors duration-300 ${
                          isDark ? 'text-white' : 'text-gray-900'
                        }`}>Experience Highlights</h3>
                        <div className="space-y-3">
                          {personalInfo.highlights.map((highlight, index) => (
                            <motion.div
                              key={index}
                              className={`text-sm p-3 rounded-lg transition-colors duration-300 ${
                                isDark 
                                  ? 'text-gray-300 bg-gray-700' 
                                  : 'text-gray-600 bg-gray-50'
                              }`}
                              initial={{ opacity: 0, x: 20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.8 + index * 0.1 }}
                            >
                              {highlight}
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {currentView === 'ml-roadmap' && mlSkill && (
            <motion.div
              key="ml-roadmap"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.5 }}
              className="p-6"
            >
              <LearningRoadmap skill={mlSkill} />
            </motion.div>
          )}

          {currentView === 'projects' && (
            <motion.div
              key="projects"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
              transition={{ duration: 0.5 }}
            >
              <Projects />
            </motion.div>
          )}

          {currentView === 'tech-stack' && (
            <motion.div
              key="tech-stack"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
              transition={{ duration: 0.5 }}
              className="p-6"
            >
              <TechStackVisualization />
            </motion.div>
          )}

          {currentView === 'timeline' && (
            <motion.div
              key="timeline"
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 100 }}
              transition={{ duration: 0.5 }}
            >
              <Timeline />
            </motion.div>
          )}

          {currentView === 'assessment' && (
            <motion.div
              key="assessment"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.5 }}
            >
              <SkillsAssessment />
            </motion.div>
          )}

          {currentView === 'resources' && (
            <motion.div
              key="resources"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
              transition={{ duration: 0.5 }}
            >
              <ResourceHub />
            </motion.div>
          )}

          {currentView === 'achievements' && (
            <motion.div
              key="achievements"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.5 }}
            >
              <Achievements />
            </motion.div>
          )}

          {currentView === 'goals' && (
            <motion.div
              key="goals"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
            >
              <Goals />
            </motion.div>
          )}

          {currentView === 'export' && (
            <motion.div
              key="export"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.5 }}
            >
              <PortfolioExport />
            </motion.div>
          )}
        </AnimatePresence>
      </main>
      
      {/* Footer */}
      <Footer personalInfo={personalInfo} setCurrentView={setCurrentView} />
    </div>
  );
}

// Main App component with ThemeProvider wrapper
function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;
