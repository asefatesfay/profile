import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  User, 
  Award, 
  TrendingUp, 
  Target, 
  Calendar, 
  BookOpen,
  Star,
  Activity,
  BarChart3,
  Clock,
  CheckCircle,
  AlertCircle,
  Zap
} from 'lucide-react';
import { skillsData, personalInfo } from '../data/skillsData';

const ProfileOverview = () => {
  const [activeMetric, setActiveMetric] = useState('skills');

  // Calculate overview statistics
  const totalSkills = skillsData.skills.length;
  const expertSkills = skillsData.skills.filter(s => s.level === 'expert').length;
  const advancedSkills = skillsData.skills.filter(s => s.level === 'advanced').length;
  const completedProjects = skillsData.projects.filter(p => p.status === 'completed').length;
  const categories = [...new Set(skillsData.skills.map(s => s.category))];
  
  // Calculate skill distribution
  const skillDistribution = {
    expert: expertSkills,
    advanced: advancedSkills,
    intermediate: skillsData.skills.filter(s => s.level === 'intermediate').length,
    beginner: skillsData.skills.filter(s => s.level === 'beginner').length
  };

  // Calculate category strengths
  const categoryStrengths = categories.map(category => {
    const categorySkills = skillsData.skills.filter(s => s.category === category);
    const avgExperience = categorySkills.reduce((sum, skill) => sum + (skill.yearsOfExperience || 0), 0) / categorySkills.length;
    const expertCount = categorySkills.filter(s => s.level === 'expert').length;
    
    return {
      name: skillsData.categories[category]?.title || category,
      skillCount: categorySkills.length,
      avgExperience: Math.round(avgExperience * 10) / 10,
      expertCount,
      strength: expertCount / categorySkills.length
    };
  }).sort((a, b) => b.strength - a.strength);

  // Recent activity simulation
  const recentActivity = [
    { type: 'skill', action: 'Completed Spring WebFlux certification', date: '2 days ago', icon: Award },
    { type: 'project', action: 'Deployed Reactive Microservices Platform', date: '1 week ago', icon: Zap },
    { type: 'learning', action: 'Finished Advanced Kubernetes course', date: '2 weeks ago', icon: BookOpen },
    { type: 'achievement', action: 'Reached 95% test coverage on main project', date: '3 weeks ago', icon: Target }
  ];

  const metrics = [
    { 
      id: 'skills', 
      label: 'Skills', 
      value: totalSkills, 
      growth: '+12%', 
      color: 'blue',
      icon: Star,
      description: 'Total technical skills mastered'
    },
    { 
      id: 'experience', 
      label: 'Avg Experience', 
      value: `${Math.round(skillsData.skills.reduce((sum, skill) => sum + (skill.yearsOfExperience || 0), 0) / totalSkills)}y`, 
      growth: '+2y', 
      color: 'green',
      icon: Calendar,
      description: 'Average years of experience across all skills'
    },
    { 
      id: 'projects', 
      label: 'Projects', 
      value: completedProjects, 
      growth: '+8', 
      color: 'purple',
      icon: CheckCircle,
      description: 'Successfully completed projects'
    },
    { 
      id: 'categories', 
      label: 'Categories', 
      value: categories.length, 
      growth: '+3', 
      color: 'orange',
      icon: BarChart3,
      description: 'Technical skill categories covered'
    }
  ];

  const getColorClasses = (color) => {
    const colors = {
      blue: 'bg-blue-500 text-white',
      green: 'bg-green-500 text-white',
      purple: 'bg-purple-500 text-white',
      orange: 'bg-orange-500 text-white'
    };
    return colors[color] || colors.blue;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Profile{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Overview
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Comprehensive view of skills, experience, and professional growth
          </p>
        </motion.div>

        {/* Quick Stats */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.id}
              className={`bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all cursor-pointer ${
                activeMetric === metric.id ? 'ring-2 ring-blue-500' : ''
              }`}
              onClick={() => setActiveMetric(metric.id)}
              whileHover={{ scale: 1.02 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
            >
              <div className="flex items-center gap-4">
                <div className={`p-3 rounded-lg ${getColorClasses(metric.color)}`}>
                  <metric.icon className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <div className="text-2xl font-bold text-gray-900">{metric.value}</div>
                  <div className="text-sm text-gray-600">{metric.label}</div>
                  <div className="text-xs text-green-600 font-medium">{metric.growth}</div>
                </div>
              </div>
              <p className="text-xs text-gray-500 mt-3">{metric.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Skill Distribution */}
          <motion.div
            className="lg:col-span-2 bg-white rounded-xl shadow-lg p-6"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <Activity className="w-5 h-5 text-blue-500" />
              Skill Level Distribution
            </h3>
            
            <div className="space-y-4">
              {Object.entries(skillDistribution).map(([level, count]) => {
                const percentage = (count / totalSkills) * 100;
                const colors = {
                  expert: 'bg-blue-500',
                  advanced: 'bg-green-500',
                  intermediate: 'bg-yellow-500',
                  beginner: 'bg-red-500'
                };
                
                return (
                  <div key={level} className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="font-medium text-gray-700 capitalize">{level}</span>
                      <span className="text-gray-600">{count} skills ({Math.round(percentage)}%)</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <motion.div
                        className={`h-3 rounded-full ${colors[level]}`}
                        initial={{ width: 0 }}
                        animate={{ width: `${percentage}%` }}
                        transition={{ delay: 0.6, duration: 0.8 }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Category Strengths */}
            <div className="mt-8">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Category Strengths</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {categoryStrengths.slice(0, 6).map((category, index) => (
                  <motion.div
                    key={category.name}
                    className="p-4 bg-gray-50 rounded-lg"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 + index * 0.1 }}
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h5 className="font-medium text-gray-800">{category.name}</h5>
                      <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">
                        {category.skillCount} skills
                      </span>
                    </div>
                    <div className="text-sm text-gray-600">
                      {category.avgExperience}y avg experience • {category.expertCount} expert level
                    </div>
                    <div className="mt-2 flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-3 h-3 ${
                            i < category.strength * 5 ? 'text-yellow-400 fill-current' : 'text-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Recent Activity */}
          <motion.div
            className="bg-white rounded-xl shadow-lg p-6"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
          >
            <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <Clock className="w-5 h-5 text-purple-500" />
              Recent Activity
            </h3>
            
            <div className="space-y-4">
              {recentActivity.map((activity, index) => (
                <motion.div
                  key={index}
                  className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                >
                  <div className="p-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg">
                    <activity.icon className="w-4 h-4 text-white" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-800">{activity.action}</p>
                    <p className="text-xs text-gray-500">{activity.date}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Learning Goals Progress */}
            <div className="mt-8">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Learning Goals</h4>
              <div className="space-y-3">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-700">Advanced TypeScript</span>
                  <span className="text-blue-600 font-medium">85%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <motion.div
                    className="bg-blue-500 h-2 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: '85%' }}
                    transition={{ delay: 1.2, duration: 0.8 }}
                  />
                </div>
                
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-700">Kubernetes Expert</span>
                  <span className="text-green-600 font-medium">60%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <motion.div
                    className="bg-green-500 h-2 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: '60%' }}
                    transition={{ delay: 1.4, duration: 0.8 }}
                  />
                </div>
                
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-700">ML Engineering</span>
                  <span className="text-purple-600 font-medium">40%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <motion.div
                    className="bg-purple-500 h-2 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: '40%' }}
                    transition={{ delay: 1.6, duration: 0.8 }}
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ProfileOverview;
