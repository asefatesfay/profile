import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Target, TrendingUp, AlertTriangle, CheckCircle, Star } from 'lucide-react';
import { skillsData } from '../data/skillsData';

const SkillsAssessment = () => {
  const [assessments, setAssessments] = useState({});
  
  const skillLevels = [
    { value: 1, label: 'Beginner', color: 'bg-red-100 text-red-700' },
    { value: 2, label: 'Intermediate', color: 'bg-yellow-100 text-yellow-700' },
    { value: 3, label: 'Advanced', color: 'bg-green-100 text-green-700' },
    { value: 4, label: 'Expert', color: 'bg-blue-100 text-blue-700' }
  ];

  const targetLevels = {
    'react': 4,
    'typescript': 4,
    'nodejs': 4,
    'golang': 3,
    'machine-learning': 3,
    'kubernetes': 3,
    'aws': 4,
    'python': 3
  };

  const updateAssessment = (skillId, level) => {
    setAssessments(prev => ({ ...prev, [skillId]: level }));
  };

  const getGapAnalysis = () => {
    return Object.entries(targetLevels).map(([skillId, target]) => {
      const current = assessments[skillId] || 1;
      const gap = target - current;
      const skill = skillsData.skills.find(s => s.id === skillId);
      
      return {
        skill,
        current,
        target,
        gap,
        priority: gap > 0 ? 'high' : 'maintenance'
      };
    }).sort((a, b) => b.gap - a.gap);
  };

  const analysis = getGapAnalysis();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Skills Assessment</h1>
          <p className="text-lg text-gray-600">Evaluate your current skills and identify learning priorities</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Assessment Form */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <Target className="w-6 h-6 text-blue-500" />
              Rate Your Skills
            </h2>
            
            <div className="space-y-6">
              {Object.keys(targetLevels).map(skillId => {
                const skill = skillsData.skills.find(s => s.id === skillId);
                const currentLevel = assessments[skillId] || 1;
                
                return (
                  <div key={skillId} className="border-b border-gray-200 pb-4">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="font-medium text-gray-900">{skill?.title}</h3>
                      <span className="text-sm text-gray-500">Target: Level {targetLevels[skillId]}</span>
                    </div>
                    
                    <div className="flex gap-2">
                      {skillLevels.map(level => (
                        <button
                          key={level.value}
                          onClick={() => updateAssessment(skillId, level.value)}
                          className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                            currentLevel === level.value
                              ? level.color
                              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                          }`}
                        >
                          {level.label}
                        </button>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Gap Analysis */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <TrendingUp className="w-6 h-6 text-green-500" />
              Learning Priorities
            </h2>
            
            <div className="space-y-4">
              {analysis.map((item, index) => (
                <motion.div
                  key={item.skill?.id}
                  className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="flex-shrink-0">
                    {item.gap > 0 ? (
                      <AlertTriangle className="w-5 h-5 text-orange-500" />
                    ) : (
                      <CheckCircle className="w-5 h-5 text-green-500" />
                    )}
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="font-medium text-gray-900">{item.skill?.title}</h3>
                    <div className="flex items-center gap-4 mt-1">
                      <span className="text-sm text-gray-600">
                        Current: {item.current}/4
                      </span>
                      <span className="text-sm text-gray-600">
                        Target: {item.target}/4
                      </span>
                      {item.gap > 0 && (
                        <span className="text-sm font-medium text-orange-600">
                          Gap: {item.gap} levels
                        </span>
                      )}
                    </div>
                  </div>
                  
                  <div className="flex-shrink-0">
                    <div className="flex">
                      {[...Array(4)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < item.current ? 'text-yellow-400 fill-current' : 'text-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            
            {analysis.some(item => item.gap > 0) && (
              <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                <h3 className="font-medium text-blue-900 mb-2">Recommended Learning Path:</h3>
                <ol className="list-decimal list-inside space-y-1 text-sm text-blue-800">
                  {analysis
                    .filter(item => item.gap > 0)
                    .slice(0, 3)
                    .map((item, index) => (
                      <li key={index}>
                        Focus on {item.skill?.title} - {item.gap} level{item.gap > 1 ? 's' : ''} to improve
                      </li>
                    ))}
                </ol>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsAssessment;
