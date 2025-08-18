import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import Roadmap from './components/Roadmap';
import { skillsData, personalInfo } from './data/skillsData';
import { BarChart3, Map, User, Eye, EyeOff } from 'lucide-react';

function App() {
  const [currentView, setCurrentView] = useState('roadmap');
  const [showStats, setShowStats] = useState(true);

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
      className={`bg-white rounded-lg p-4 shadow-sm border-l-4`}
      style={{ borderLeftColor: color }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.5 }}
      whileHover={{ scale: 1.02, boxShadow: "0 8px 25px rgba(0,0,0,0.1)" }}
    >
      <div className="text-2xl font-bold text-gray-800">{value}</div>
      <div className="text-sm text-gray-600">{title}</div>
    </motion.div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <Header personalInfo={personalInfo} />
      
      {/* Navigation */}
      <motion.nav 
        className="bg-white border-b border-gray-200 px-6 py-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
      >
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex gap-4">
            <motion.button
              onClick={() => setCurrentView('roadmap')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                currentView === 'roadmap' 
                  ? 'bg-primary-500 text-white' 
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Map size={18} />
              Skills Roadmap
            </motion.button>
            
            <motion.button
              onClick={() => setCurrentView('profile')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                currentView === 'profile' 
                  ? 'bg-primary-500 text-white' 
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <User size={18} />
              Profile Overview
            </motion.button>
          </div>
          
          <motion.button
            onClick={() => setShowStats(!showStats)}
            className="flex items-center gap-2 px-3 py-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {showStats ? <EyeOff size={18} /> : <Eye size={18} />}
            {showStats ? 'Hide Stats' : 'Show Stats'}
          </motion.button>
        </div>
      </motion.nav>

      {/* Stats Bar */}
      <AnimatePresence>
        {showStats && (
          <motion.div
            className="bg-gray-100 px-6 py-4 border-b border-gray-200"
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
                      className="text-2xl font-bold text-gray-800 mb-6"
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
                            className="bg-white rounded-lg p-6 shadow-sm border"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 + categoryIndex * 0.1 }}
                          >
                            <h3 
                              className="text-lg font-semibold mb-4 pb-2 border-b-2"
                              style={{ borderBottomColor: category.color }}
                            >
                              {category.title}
                            </h3>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              {categorySkills.map((skill, skillIndex) => (
                                <motion.div
                                  key={skill.id}
                                  className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                                  initial={{ opacity: 0, x: -20 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: 0.5 + skillIndex * 0.05 }}
                                >
                                  <div>
                                    <div className="font-medium text-gray-800">{skill.title}</div>
                                    <div className="text-sm text-gray-600">{skill.level}</div>
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
                                      <div className="text-xs text-gray-500 mt-1">
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
                      className="text-2xl font-bold text-gray-800 mb-6"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                    >
                      Progress Overview
                    </motion.h2>
                    
                    <div className="space-y-4">
                      <motion.div
                        className="bg-white rounded-lg p-6 shadow-sm border"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.5 }}
                      >
                        <div className="flex items-center gap-3 mb-4">
                          <BarChart3 className="text-primary-500" size={24} />
                          <h3 className="text-lg font-semibold">Skill Distribution</h3>
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
                              <div className="flex justify-between text-sm mb-1">
                                <span className="capitalize">{status.replace('-', ' ')}</span>
                                <span>{count} ({percentage.toFixed(0)}%)</span>
                              </div>
                              <div className="w-full bg-gray-200 rounded-full h-2">
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
                        className="bg-white rounded-lg p-6 shadow-sm border"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.6 }}
                      >
                        <h3 className="text-lg font-semibold mb-4">Experience Highlights</h3>
                        <div className="space-y-3">
                          {personalInfo.highlights.map((highlight, index) => (
                            <motion.div
                              key={index}
                              className="text-sm text-gray-600 p-3 bg-gray-50 rounded-lg"
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
        </AnimatePresence>
      </main>
    </div>
  );
}

export default App;
