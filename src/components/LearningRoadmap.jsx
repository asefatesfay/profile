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
  Check
} from 'lucide-react';

const LearningRoadmap = ({ skill }) => {
  const [expandedPhases, setExpandedPhases] = useState(new Set(['introduction']));
  const [completedTopics, setCompletedTopics] = useState(() => {
    // Load progress from localStorage
    const saved = localStorage.getItem('ml-roadmap-progress');
    return saved ? new Set(JSON.parse(saved)) : new Set();
  });

  const roadmap = skill.learningRoadmap;

  // Safety check for roadmap structure
  if (!roadmap || !roadmap.phases || !Array.isArray(roadmap.phases)) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="text-center">
          <BookOpen className="w-12 h-12 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">Learning Roadmap Not Available</h3>
          <p className="text-gray-500">This skill doesn't have a detailed learning roadmap yet.</p>
        </div>
      </div>
    );
  }

  // Save progress to localStorage whenever completedTopics changes
  useEffect(() => {
    localStorage.setItem('ml-roadmap-progress', JSON.stringify([...completedTopics]));
  }, [completedTopics]);

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
    switch (status) {
      case 'completed': return 'text-green-600 bg-green-100';
      case 'in-progress': return 'text-blue-600 bg-blue-100';
      case 'planned': return 'text-gray-600 bg-gray-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-xl shadow-lg">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <Target className="w-8 h-8 text-blue-600" />
          <h1 className="text-3xl font-bold text-gray-900">Machine Learning Roadmap</h1>
        </div>

        {/* Motivation Message */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-4 rounded-lg mb-6 border border-blue-100">
          <div className="text-sm text-gray-700">
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
          <div className="bg-blue-50 p-4 rounded-lg">
            <div className="text-2xl font-bold text-blue-600">{getOverallProgress()}%</div>
            <div className="text-sm text-gray-600">Overall Progress</div>
          </div>
          <div className="bg-green-50 p-4 rounded-lg">
            <div className="text-2xl font-bold text-green-600">{completedTopics.size}</div>
            <div className="text-sm text-gray-600">Topics Completed</div>
          </div>
          <div className="bg-purple-50 p-4 rounded-lg">
            <div className="text-2xl font-bold text-purple-600">{roadmap.phases.length}</div>
            <div className="text-sm text-gray-600">Total Phases</div>
          </div>
          <div className="bg-orange-50 p-4 rounded-lg">
            <div className="text-2xl font-bold text-orange-600">
              {roadmap.weeklyGoal?.hoursPerWeek || 10}h
            </div>
            <div className="text-sm text-gray-600">Weekly Goal</div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="w-full bg-gray-200 rounded-full h-3 mb-4">
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
                localStorage.removeItem('ml-roadmap-progress');
              }
            }}
            className="px-4 py-2 bg-red-100 text-red-700 rounded-lg hover:bg-red-200 transition-colors text-sm"
          >
            Reset Progress
          </button>
          <button
            onClick={() => {
              const data = {
                completedTopics: [...completedTopics],
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
            className="px-4 py-2 bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200 transition-colors text-sm"
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
              className="border border-gray-200 rounded-xl overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: phaseIndex * 0.1 }}
            >
              {/* Phase Header */}
              <button
                onClick={() => togglePhase(phase.id)}
                className="w-full p-6 text-left hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    {isExpanded ? (
                      <ChevronDown className="w-5 h-5 text-gray-500" />
                    ) : (
                      <ChevronRight className="w-5 h-5 text-gray-500" />
                    )}
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">
                        {phaseIndex + 1}. {phase.title}
                      </h3>
                      <div className="flex items-center gap-4 mt-2">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(phase.status || 'planned')}`}>
                          {(phase.status || 'planned').replace('-', ' ')}
                        </span>
                        <span className="text-sm text-gray-600">
                          {phase.estimatedWeeks} weeks
                        </span>
                        <span className="text-sm text-gray-600">
                          {progress.completed}/{progress.total} topics completed
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-gray-900">{progressPercentage}%</div>
                    <div className="w-20 bg-gray-200 rounded-full h-2 mt-1">
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
                    className="border-t border-gray-200"
                  >
                    <div className="p-6 space-y-4">
                      {phase.topics.map((topic, topicIndex) => {
                        const isCompleted = completedTopics.has(topic.id);
                        
                        return (
                          <motion.div
                            key={topic.id}
                            className={`p-4 rounded-lg border-2 transition-all cursor-pointer ${
                              isCompleted 
                                ? 'border-green-300 bg-green-50' 
                                : 'border-gray-200 bg-white hover:border-blue-300'
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
                                <h4 className={`font-semibold ${isCompleted ? 'text-green-900' : 'text-gray-900'}`}>
                                  {topic.title}
                                </h4>
                                
                                {topic.subtopics && (
                                  <ul className="mt-2 space-y-1">
                                    {topic.subtopics.map((subtopic, subIndex) => (
                                      <li key={subIndex} className="text-sm text-gray-600 flex items-center gap-2">
                                        <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
                                        {subtopic}
                                      </li>
                                    ))}
                                  </ul>
                                )}
                                
                                <div className="mt-3 flex items-center gap-4 text-xs text-gray-500">
                                  <div className="flex items-center gap-1">
                                    <Clock className="w-3 h-3" />
                                    {topic.estimatedHours}h
                                  </div>
                                  <div className="flex items-center gap-1">
                                    <BookOpen className="w-3 h-3" />
                                    {topic.resources.length} resources
                                  </div>
                                </div>
                                
                                {topic.resources && (
                                  <div className="mt-2">
                                    <div className="text-xs text-gray-500 mb-1">Resources:</div>
                                    <div className="flex flex-wrap gap-2">
                                      {topic.resources.map((resource, resIndex) => (
                                        <span 
                                          key={resIndex}
                                          className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded"
                                        >
                                          {resource}
                                        </span>
                                      ))}
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
        <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
          <Award className="w-5 h-5 text-yellow-500" />
          Key Milestones
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {(roadmap.milestones || []).map((milestone, index) => (
            <div 
              key={milestone.id}
              className={`p-4 rounded-lg border-2 ${
                milestone.completed 
                  ? 'border-green-300 bg-green-50' 
                  : 'border-gray-200 bg-white'
              }`}
            >
              <div className="flex items-center gap-2 mb-2">
                {milestone.completed ? (
                  <Check className="w-5 h-5 text-green-600" />
                ) : (
                  <Target className="w-5 h-5 text-gray-400" />
                )}
                <h4 className="font-semibold text-gray-900">{milestone.title}</h4>
              </div>
              <p className="text-sm text-gray-600">{milestone.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Study Schedule */}
      <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl">
        <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
          <Calendar className="w-5 h-5 text-blue-600" />
          Study Schedule
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <div className="text-2xl font-bold text-blue-600">
              {roadmap.weeklyGoal?.hoursPerWeek || 10} hours
            </div>
            <div className="text-sm text-gray-600">per week commitment</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-purple-600">
              {roadmap.weeklyGoal?.currentWeekHours || 0}/{roadmap.weeklyGoal?.hoursPerWeek || 10}
            </div>
            <div className="text-sm text-gray-600">this week progress</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-green-600">
              {roadmap.weeklyGoal?.targetDate || 'TBD'}
            </div>
            <div className="text-sm text-gray-600">target completion</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearningRoadmap;
