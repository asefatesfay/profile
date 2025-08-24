import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  CheckCircle, 
  Circle, 
  Clock, 
  BookOpen, 
  Target, 
  TrendingUp,
  Calendar,
  Award,
  ChevronDown,
  ChevronRight,
  Play,
  Check,
  ExternalLink
} from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const LearningRoadmap = ({ skill }) => {
  const { isDark } = useTheme();
  const [expandedPhases, setExpandedPhases] = useState(new Set(['introduction']));
  const [completedTopics, setCompletedTopics] = useState(() => {
    // Load progress from localStorage
    const saved = localStorage.getItem('ml-roadmap-progress');
    return saved ? new Set(JSON.parse(saved)) : new Set();
  });
  const [completedResources, setCompletedResources] = useState(() => {
    // Load resource completion from localStorage
    const saved = localStorage.getItem('ml-roadmap-resources');
    return saved ? new Set(JSON.parse(saved)) : new Set();
  });

  const roadmap = skill.learningRoadmap;

  // Safety check for roadmap structure
  if (!roadmap || !roadmap.phases || !Array.isArray(roadmap.phases)) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="text-center">
          <BookOpen className={`w-12 h-12 mx-auto mb-4 transition-colors duration-300 ${
            isDark ? 'text-gray-500' : 'text-gray-400'
          }`} />
          <h3 className={`text-lg font-medium mb-2 transition-colors duration-300 ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}>Learning Roadmap Not Available</h3>
          <p className={`transition-colors duration-300 ${
            isDark ? 'text-gray-400' : 'text-gray-500'
          }`}>This skill doesn't have a detailed learning roadmap yet.</p>
        </div>
      </div>
    );
  }

  // Save progress to localStorage whenever completedTopics changes
  useEffect(() => {
    localStorage.setItem('ml-roadmap-progress', JSON.stringify([...completedTopics]));
  }, [completedTopics]);

  // Save resource completion to localStorage whenever completedResources changes
  useEffect(() => {
    localStorage.setItem('ml-roadmap-resources', JSON.stringify([...completedResources]));
  }, [completedResources]);

  const togglePhase = (phaseId) => {
    const newExpanded = new Set(expandedPhases);
    if (newExpanded.has(phaseId)) {
      newExpanded.delete(phaseId);
    } else {
      newExpanded.add(phaseId);
    }
    setExpandedPhases(newExpanded);
  };

  const toggleTopic = (topicId) => {
    const newCompleted = new Set(completedTopics);
    if (newCompleted.has(topicId)) {
      newCompleted.delete(topicId);
    } else {
      newCompleted.add(topicId);
    }
    setCompletedTopics(newCompleted);
  };

  const toggleResource = (resourceId) => {
    const newCompleted = new Set(completedResources);
    if (newCompleted.has(resourceId)) {
      newCompleted.delete(resourceId);
    } else {
      newCompleted.add(resourceId);
    }
    setCompletedResources(newCompleted);
  };

  const parseResource = (resourceString, topicId, index) => {
    const colonIndex = resourceString.indexOf(':');
    if (colonIndex !== -1 && resourceString.includes('http')) {
      const name = resourceString.substring(0, colonIndex).trim();
      const url = resourceString.substring(colonIndex + 1).trim();
      return {
        id: `${topicId}-resource-${index}`,
        name,
        url,
        original: resourceString
      };
    }
    return {
      id: `${topicId}-resource-${index}`,
      name: resourceString,
      url: null,
      original: resourceString
    };
  };

  const getPhaseProgress = (phase) => {
    if (!phase || !phase.topics || !Array.isArray(phase.topics)) {
      return { completed: 0, total: 0 };
    }
    const totalTopics = phase.topics.length;
    const completedCount = phase.topics.filter(topic => 
      completedTopics.has(topic.id)
    ).length;
    return { completed: completedCount, total: totalTopics };
  };

  const getOverallProgress = () => {
    if (!roadmap || !roadmap.phases || !Array.isArray(roadmap.phases)) {
      return 0;
    }
    const totalTopics = roadmap.phases.reduce((sum, phase) => 
      sum + (phase.topics ? phase.topics.length : 0), 0
    );
    const completedCount = roadmap.phases.reduce((sum, phase) => 
      sum + (phase.topics ? phase.topics.filter(topic => completedTopics.has(topic.id)).length : 0), 0
    );
    return totalTopics > 0 ? Math.round((completedCount / totalTopics) * 100) : 0;
  };

  const getStatusColor = (status) => {
    if (isDark) {
      switch (status) {
        case 'completed': return 'text-green-400 bg-green-900/30 border border-green-600/30';
        case 'in-progress': return 'text-blue-400 bg-blue-900/30 border border-blue-600/30';
        case 'planned': return 'text-gray-300 bg-gray-700/50 border border-gray-600/30';
        default: return 'text-gray-300 bg-gray-700/50 border border-gray-600/30';
      }
    } else {
      switch (status) {
        case 'completed': return 'text-green-600 bg-green-100';
        case 'in-progress': return 'text-blue-600 bg-blue-100';
        case 'planned': return 'text-gray-600 bg-gray-100';
        default: return 'text-gray-600 bg-gray-100';
      }
    }
  };

  return (
    <div className={`max-w-4xl mx-auto p-6 rounded-xl shadow-lg transition-colors duration-300 ${
      isDark ? 'bg-gray-800' : 'bg-white'
    }`}>
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <Target className="w-8 h-8 text-blue-600" />
          <h1 className={`text-3xl font-bold transition-colors duration-300 ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}>Machine Learning Roadmap</h1>
        </div>

        {/* Motivation Message */}
        <div className={`p-4 rounded-lg mb-6 border transition-colors duration-300 ${
          isDark 
            ? 'bg-gradient-to-r from-blue-900/30 to-purple-900/30 border-blue-600/30' 
            : 'bg-gradient-to-r from-blue-50 to-purple-50 border-blue-100'
        }`}>
          <div className={`text-sm transition-colors duration-300 ${
            isDark ? 'text-gray-300' : 'text-gray-700'
          }`}>
            {getOverallProgress() === 0 && (
              <span>🚀 Welcome to your ML journey! Every expert was once a beginner. Start with the Introduction phase to build your foundation.</span>
            )}
            {getOverallProgress() > 0 && getOverallProgress() < 25 && (
              <span>🎯 Great start! You're building momentum. Focus on completing one topic at a time - consistency is key!</span>
            )}
            {getOverallProgress() >= 25 && getOverallProgress() < 50 && (
              <span>💪 You're making solid progress! Quarter way through. The mathematical foundations will serve you well.</span>
            )}
            {getOverallProgress() >= 50 && getOverallProgress() < 75 && (
              <span>🔥 Halfway there! You're in the exciting phase where theory meets practice. Keep pushing forward!</span>
            )}
            {getOverallProgress() >= 75 && getOverallProgress() < 100 && (
              <span>⭐ Almost there! You're in the final stretch. The advanced topics will set you apart as an ML engineer.</span>
            )}
            {getOverallProgress() === 100 && (
              <span>🎉 Congratulations! You've completed the roadmap! Now it's time to apply your knowledge and keep learning.</span>
            )}
          </div>
        </div>
        
        {/* Progress Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <div className={`p-4 rounded-lg transition-colors duration-300 ${
            isDark ? 'bg-blue-900/30' : 'bg-blue-50'
          }`}>
            <div className="text-2xl font-bold text-blue-600">{getOverallProgress()}%</div>
            <div className={`text-sm transition-colors duration-300 ${
              isDark ? 'text-gray-300' : 'text-gray-600'
            }`}>Overall Progress</div>
          </div>
          <div className={`p-4 rounded-lg transition-colors duration-300 ${
            isDark ? 'bg-green-900/30' : 'bg-green-50'
          }`}>
            <div className="text-2xl font-bold text-green-600">{completedTopics.size}</div>
            <div className={`text-sm transition-colors duration-300 ${
              isDark ? 'text-gray-300' : 'text-gray-600'
            }`}>Topics Completed</div>
          </div>
          <div className={`p-4 rounded-lg transition-colors duration-300 ${
            isDark ? 'bg-purple-900/30' : 'bg-purple-50'
          }`}>
            <div className="text-2xl font-bold text-purple-600">{roadmap.phases.length}</div>
            <div className={`text-sm transition-colors duration-300 ${
              isDark ? 'text-gray-300' : 'text-gray-600'
            }`}>Total Phases</div>
          </div>
          <div className={`p-4 rounded-lg transition-colors duration-300 ${
            isDark ? 'bg-orange-900/30' : 'bg-orange-50'
          }`}>
            <div className="text-2xl font-bold text-orange-600">
              {roadmap.weeklyGoal?.hoursPerWeek || 10}h
            </div>
            <div className={`text-sm transition-colors duration-300 ${
              isDark ? 'text-gray-300' : 'text-gray-600'
            }`}>Weekly Goal</div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className={`w-full rounded-full h-3 mb-4 transition-colors duration-300 ${
          isDark ? 'bg-gray-700' : 'bg-gray-200'
        }`}>
          <motion.div 
            className="bg-blue-600 h-3 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${getOverallProgress()}%` }}
            transition={{ duration: 1, ease: "easeOut" }}
          />
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3 mb-4">
          <button
            onClick={() => {
              if (window.confirm('Are you sure you want to reset all progress? This cannot be undone.')) {
                setCompletedTopics(new Set());
                setCompletedResources(new Set());
                localStorage.removeItem('ml-roadmap-progress');
                localStorage.removeItem('ml-roadmap-resources');
              }
            }}
            className={`px-4 py-2 rounded-lg transition-colors text-sm ${
              isDark 
                ? 'bg-red-900/30 text-red-400 hover:bg-red-900/50' 
                : 'bg-red-100 text-red-700 hover:bg-red-200'
            }`}
          >
            Reset Progress
          </button>
          <button
            onClick={() => {
              const data = {
                completedTopics: [...completedTopics],
                completedResources: [...completedResources],
                progress: getOverallProgress(),
                exportDate: new Date().toISOString()
              };
              const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
              const url = URL.createObjectURL(blob);
              const a = document.createElement('a');
              a.href = url;
              a.download = 'ml-roadmap-progress.json';
              a.click();
              URL.revokeObjectURL(url);
            }}
            className={`px-4 py-2 rounded-lg transition-colors text-sm ${
              isDark 
                ? 'bg-blue-900/30 text-blue-400 hover:bg-blue-900/50' 
                : 'bg-blue-100 text-blue-700 hover:bg-blue-200'
            }`}
          >
            Export Progress
          </button>
        </div>
      </div>

      {/* Learning Phases */}
      <div className="space-y-4">
        {roadmap.phases.map((phase, phaseIndex) => {
          const isExpanded = expandedPhases.has(phase.id);
          const progress = getPhaseProgress(phase);
          const progressPercentage = Math.round((progress.completed / progress.total) * 100);

          return (
            <motion.div
              key={phase.id}
              className={`border rounded-xl overflow-hidden transition-colors duration-300 ${
                isDark ? 'border-gray-700' : 'border-gray-200'
              }`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: phaseIndex * 0.1 }}
            >
              {/* Phase Header */}
              <button
                onClick={() => togglePhase(phase.id)}
                className={`w-full p-6 text-left transition-colors ${
                  isDark ? 'hover:bg-gray-700' : 'hover:bg-gray-50'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    {isExpanded ? (
                      <ChevronDown className={`w-5 h-5 transition-colors duration-300 ${
                        isDark ? 'text-gray-400' : 'text-gray-500'
                      }`} />
                    ) : (
                      <ChevronRight className={`w-5 h-5 transition-colors duration-300 ${
                        isDark ? 'text-gray-400' : 'text-gray-500'
                      }`} />
                    )}
                    <div>
                      <h3 className={`text-xl font-semibold transition-colors duration-300 ${
                        isDark ? 'text-white' : 'text-gray-900'
                      }`}>
                        {phaseIndex + 1}. {phase.title}
                      </h3>
                      <div className="flex items-center gap-4 mt-2">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(phase.status || 'planned')}`}>
                          {(phase.status || 'planned').replace('-', ' ')}
                        </span>
                        <span className={`text-sm transition-colors duration-300 ${
                          isDark ? 'text-gray-300' : 'text-gray-600'
                        }`}>
                          {phase.estimatedWeeks} weeks
                        </span>
                        <span className={`text-sm transition-colors duration-300 ${
                          isDark ? 'text-gray-300' : 'text-gray-600'
                        }`}>
                          {progress.completed}/{progress.total} topics completed
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className={`text-2xl font-bold transition-colors duration-300 ${
                      isDark ? 'text-white' : 'text-gray-900'
                    }`}>{progressPercentage}%</div>
                    <div className={`w-20 rounded-full h-2 mt-1 transition-colors duration-300 ${
                      isDark ? 'bg-gray-700' : 'bg-gray-200'
                    }`}>
                      <div 
                        className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                        style={{ width: `${progressPercentage}%` }}
                      />
                    </div>
                  </div>
                </div>
              </button>

              {/* Phase Content */}
              <AnimatePresence>
                {isExpanded && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className={`border-t transition-colors duration-300 ${
                      isDark ? 'border-gray-700' : 'border-gray-200'
                    }`}
                  >
                    <div className="p-6 space-y-4">
                      {phase.topics.map((topic, topicIndex) => {
                        const isCompleted = completedTopics.has(topic.id);
                        
                        return (
                          <motion.div
                            key={topic.id}
                            className={`p-4 rounded-lg border-2 transition-all cursor-pointer ${
                              isCompleted 
                                ? (isDark 
                                  ? 'border-green-600 bg-green-900/20' 
                                  : 'border-green-300 bg-green-50')
                                : (isDark 
                                  ? 'border-gray-600 bg-gray-800 hover:border-blue-500' 
                                  : 'border-gray-200 bg-white hover:border-blue-300')
                            }`}
                            onClick={() => toggleTopic(topic.id)}
                            whileHover={{ scale: 1.01 }}
                            whileTap={{ scale: 0.99 }}
                          >
                            <div className="flex items-start gap-3">
                              <button className="mt-1">
                                {isCompleted ? (
                                  <CheckCircle className="w-5 h-5 text-green-600" />
                                ) : (
                                  <Circle className="w-5 h-5 text-gray-400" />
                                )}
                              </button>
                              
                              <div className="flex-1">
                                <h4 className={`font-semibold transition-colors duration-300 ${
                                  isCompleted 
                                    ? (isDark ? 'text-green-400' : 'text-green-900')
                                    : (isDark ? 'text-white' : 'text-gray-900')
                                }`}>
                                  {topic.title}
                                </h4>
                                
                                {topic.subtopics && (
                                  <ul className="mt-2 space-y-1">
                                    {topic.subtopics.map((subtopic, subIndex) => (
                                      <li key={subIndex} className={`text-sm flex items-center gap-2 transition-colors duration-300 ${
                                        isDark ? 'text-gray-300' : 'text-gray-600'
                                      }`}>
                                        <span className={`w-1 h-1 rounded-full transition-colors duration-300 ${
                                          isDark ? 'bg-gray-500' : 'bg-gray-400'
                                        }`}></span>
                                        {subtopic}
                                      </li>
                                    ))}
                                  </ul>
                                )}
                                
                                <div className={`mt-3 flex items-center gap-4 text-xs transition-colors duration-300 ${
                                  isDark ? 'text-gray-400' : 'text-gray-500'
                                }`}>
                                  <div className="flex items-center gap-1">
                                    <Clock className="w-3 h-3" />
                                    {topic.estimatedHours}h
                                  </div>
                                  <div className="flex items-center gap-1">
                                    <BookOpen className="w-3 h-3" />
                                    {topic.resources.length} resources
                                  </div>
                                  {topic.resources && topic.resources.length > 0 && (
                                    <div className="flex items-center gap-1">
                                      <Check className="w-3 h-3" />
                                      {topic.resources.filter((_, index) => 
                                        completedResources.has(`${topic.id}-resource-${index}`)
                                      ).length}/{topic.resources.length} completed
                                    </div>
                                  )}
                                </div>
                                
                                {topic.resources && (
                                  <div className="mt-4">
                                    <div className={`text-sm font-medium mb-2 transition-colors duration-300 ${
                                      isDark ? 'text-gray-300' : 'text-gray-700'
                                    }`}>Learning Resources:</div>
                                    <div className="space-y-2">
                                      {topic.resources.map((resource, resIndex) => {
                                        const parsedResource = parseResource(resource, topic.id, resIndex);
                                        const isResourceCompleted = completedResources.has(parsedResource.id);
                                        
                                        return (
                                          <div 
                                            key={parsedResource.id}
                                            className={`flex items-start gap-2 p-2 rounded-lg transition-colors ${
                                              isDark 
                                                ? 'bg-gray-700 hover:bg-gray-600' 
                                                : 'bg-gray-50 hover:bg-gray-100'
                                            }`}
                                          >
                                            <button
                                              onClick={(e) => {
                                                e.stopPropagation();
                                                toggleResource(parsedResource.id);
                                              }}
                                              className="mt-0.5 flex-shrink-0"
                                            >
                                              {isResourceCompleted ? (
                                                <CheckCircle className="w-4 h-4 text-green-600" />
                                              ) : (
                                                <Circle className="w-4 h-4 text-gray-400" />
                                              )}
                                            </button>
                                            
                                            <div className="flex-1 min-w-0">
                                              {parsedResource.url ? (
                                                <a
                                                  href={parsedResource.url}
                                                  target="_blank"
                                                  rel="noopener noreferrer"
                                                  onClick={(e) => e.stopPropagation()}
                                                  className={`text-sm font-medium hover:underline flex items-center gap-1 transition-colors duration-300 ${
                                                    isResourceCompleted 
                                                      ? (isDark ? 'text-green-400 line-through' : 'text-green-700 line-through')
                                                      : (isDark ? 'text-blue-400' : 'text-blue-600')
                                                  }`}
                                                >
                                                  {parsedResource.name}
                                                  <ExternalLink className="w-3 h-3 flex-shrink-0" />
                                                </a>
                                              ) : (
                                                <span className={`text-sm transition-colors duration-300 ${
                                                  isResourceCompleted 
                                                    ? (isDark ? 'text-green-400 line-through' : 'text-green-700 line-through')
                                                    : (isDark ? 'text-gray-300' : 'text-gray-700')
                                                }`}>
                                                  {parsedResource.name}
                                                </span>
                                              )}
                                            </div>
                                          </div>
                                        );
                                      })}
                                    </div>
                                    
                                    {/* Resource completion summary */}
                                    <div className="mt-3 flex items-center gap-2">
                                      <span className={`text-xs transition-colors duration-300 ${
                                        isDark ? 'text-gray-400' : 'text-gray-500'
                                      }`}>
                                        {topic.resources.filter((_, index) => 
                                          completedResources.has(`${topic.id}-resource-${index}`)
                                        ).length} of {topic.resources.length} resources completed
                                      </span>
                                      <div className={`flex-1 rounded-full h-1.5 transition-colors duration-300 ${
                                        isDark ? 'bg-gray-700' : 'bg-gray-200'
                                      }`}>
                                        <div 
                                          className="bg-blue-600 h-1.5 rounded-full transition-all duration-300"
                                          style={{ 
                                            width: `${Math.round((topic.resources.filter((_, index) => 
                                              completedResources.has(`${topic.id}-resource-${index}`)
                                            ).length / topic.resources.length) * 100)}%` 
                                          }}
                                        />
                                      </div>
                                    </div>
                                  </div>
                                )}
                              </div>
                            </div>
                          </motion.div>
                        );
                      })}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>

      {/* Milestones */}
      <div className="mt-8">
        <h3 className={`text-xl font-bold mb-4 flex items-center gap-2 transition-colors duration-300 ${
          isDark ? 'text-white' : 'text-gray-900'
        }`}>
          <Award className="w-5 h-5 text-yellow-500" />
          Key Milestones
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {(roadmap.milestones || []).map((milestone, index) => (
            <div 
              key={milestone.id}
              className={`p-4 rounded-lg border-2 transition-colors duration-300 ${
                milestone.completed 
                  ? (isDark 
                    ? 'border-green-600 bg-green-900/20' 
                    : 'border-green-300 bg-green-50')
                  : (isDark 
                    ? 'border-gray-600 bg-gray-800' 
                    : 'border-gray-200 bg-white')
              }`}
            >
              <div className="flex items-center gap-2 mb-2">
                {milestone.completed ? (
                  <Check className="w-5 h-5 text-green-600" />
                ) : (
                  <Target className={`w-5 h-5 transition-colors duration-300 ${
                    isDark ? 'text-gray-500' : 'text-gray-400'
                  }`} />
                )}
                <h4 className={`font-semibold transition-colors duration-300 ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`}>{milestone.title}</h4>
              </div>
              <p className={`text-sm transition-colors duration-300 ${
                isDark ? 'text-gray-300' : 'text-gray-600'
              }`}>{milestone.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Study Schedule */}
      <div className={`mt-8 p-6 rounded-xl transition-colors duration-300 ${
        isDark 
          ? 'bg-gradient-to-r from-blue-900/30 to-purple-900/30' 
          : 'bg-gradient-to-r from-blue-50 to-purple-50'
      }`}>
        <h3 className={`text-xl font-bold mb-4 flex items-center gap-2 transition-colors duration-300 ${
          isDark ? 'text-white' : 'text-gray-900'
        }`}>
          <Calendar className="w-5 h-5 text-blue-600" />
          Study Schedule
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <div className="text-2xl font-bold text-blue-600">
              {roadmap.weeklyGoal?.hoursPerWeek || 10} hours
            </div>
            <div className={`text-sm transition-colors duration-300 ${
              isDark ? 'text-gray-300' : 'text-gray-600'
            }`}>per week commitment</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-purple-600">
              {roadmap.weeklyGoal?.currentWeekHours || 0}/{roadmap.weeklyGoal?.hoursPerWeek || 10}
            </div>
            <div className={`text-sm transition-colors duration-300 ${
              isDark ? 'text-gray-300' : 'text-gray-600'
            }`}>this week progress</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-green-600">
              {roadmap.weeklyGoal?.targetDate || 'TBD'}
            </div>
            <div className={`text-sm transition-colors duration-300 ${
              isDark ? 'text-gray-300' : 'text-gray-600'
            }`}>target completion</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearningRoadmap;
