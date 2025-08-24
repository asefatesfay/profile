import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Award, 
  Medal, 
  Star, 
  Trophy,
  Calendar,
  ExternalLink,
  Upload,
  Plus,
  Edit,
  Trash2,
  Download,
  Share2,
  Eye,
  CheckCircle,
  Clock,
  Target
} from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const Achievements = () => {
  const { isDark } = useTheme();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [showAddForm, setShowAddForm] = useState(false);
  const [selectedAchievement, setSelectedAchievement] = useState(null);
  
  // Achievement data (in a real app, this would come from a backend)
  const [achievements, setAchievements] = useState([
    {
      id: 'aws-solutions-architect',
      title: 'AWS Solutions Architect Associate',
      type: 'certification',
      issuer: 'Amazon Web Services',
      dateEarned: '2024-01-15',
      expiryDate: '2027-01-15',
      credentialId: 'AWS-SA-2024-001',
      verificationUrl: 'https://aws.amazon.com/certification/verify',
      description: 'Validates expertise in designing distributed systems on AWS',
      category: 'cloud',
      skills: ['AWS', 'Cloud Architecture', 'System Design'],
      level: 'advanced',
      points: 100,
      badge: '🏆'
    },
    {
      id: 'react-specialist',
      title: 'React Development Specialist',
      type: 'certification',
      issuer: 'Meta',
      dateEarned: '2023-11-20',
      credentialId: 'META-REACT-2023-456',
      description: 'Advanced proficiency in React development and ecosystem',
      category: 'frontend',
      skills: ['React', 'JavaScript', 'Frontend Development'],
      level: 'advanced',
      points: 85,
      badge: '⚛️'
    },
    {
      id: 'ml-project-completion',
      title: 'Machine Learning Roadmap Complete',
      type: 'milestone',
      dateEarned: '2024-02-10',
      description: 'Completed comprehensive ML learning path with practical projects',
      category: 'ai-ml',
      skills: ['Machine Learning', 'Python', 'TensorFlow'],
      level: 'intermediate',
      points: 150,
      badge: '🤖'
    },
    {
      id: 'kubernetes-cka',
      title: 'Certified Kubernetes Administrator',
      type: 'certification',
      issuer: 'Cloud Native Computing Foundation',
      dateEarned: '2023-09-15',
      expiryDate: '2026-09-15',
      credentialId: 'CKA-2023-789',
      verificationUrl: 'https://training.linuxfoundation.org/certification/verify',
      description: 'Demonstrates skills in Kubernetes administration',
      category: 'devops',
      skills: ['Kubernetes', 'Container Orchestration', 'DevOps'],
      level: 'advanced',
      points: 120,
      badge: '☸️'
    },
    {
      id: '100-days-coding',
      title: '100 Days of Code Challenge',
      type: 'achievement',
      dateEarned: '2023-12-31',
      description: 'Completed 100 consecutive days of coding practice',
      category: 'general',
      skills: ['Consistency', 'Programming', 'Self-discipline'],
      level: 'intermediate',
      points: 75,
      badge: '💻'
    },
    {
      id: 'open-source-contributor',
      title: 'Open Source Contributor',
      type: 'achievement',
      dateEarned: '2024-01-30',
      description: 'Made significant contributions to 5+ open source projects',
      category: 'community',
      skills: ['Git', 'Collaboration', 'Open Source'],
      level: 'intermediate',
      points: 90,
      badge: '🌟'
    }
  ]);

  const categories = [
    { id: 'all', name: 'All Categories', count: achievements.length },
    { id: 'cloud', name: 'Cloud & Infrastructure', count: achievements.filter(a => a.category === 'cloud').length },
    { id: 'frontend', name: 'Frontend Development', count: achievements.filter(a => a.category === 'frontend').length },
    { id: 'ai-ml', name: 'AI & Machine Learning', count: achievements.filter(a => a.category === 'ai-ml').length },
    { id: 'devops', name: 'DevOps & Operations', count: achievements.filter(a => a.category === 'devops').length },
    { id: 'general', name: 'General Development', count: achievements.filter(a => a.category === 'general').length },
    { id: 'community', name: 'Community & Leadership', count: achievements.filter(a => a.category === 'community').length }
  ];

  const filteredAchievements = selectedCategory === 'all' 
    ? achievements 
    : achievements.filter(a => a.category === selectedCategory);

  const getTypeIcon = (type) => {
    switch (type) {
      case 'certification': return <Award className="w-5 h-5" />;
      case 'milestone': return <Trophy className="w-5 h-5" />;
      case 'achievement': return <Medal className="w-5 h-5" />;
      default: return <Star className="w-5 h-5" />;
    }
  };

  const getTypeColor = (type) => {
    switch (type) {
      case 'certification': return 'bg-blue-100 text-blue-700';
      case 'milestone': return 'bg-purple-100 text-purple-700';
      case 'achievement': return 'bg-green-100 text-green-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  const getLevelColor = (level) => {
    switch (level) {
      case 'beginner': return 'bg-green-50 text-green-700 border-green-200';
      case 'intermediate': return 'bg-yellow-50 text-yellow-700 border-yellow-200';
      case 'advanced': return 'bg-red-50 text-red-700 border-red-200';
      default: return 'bg-gray-50 text-gray-700 border-gray-200';
    }
  };

  const getTotalPoints = () => {
    return achievements.reduce((sum, achievement) => sum + achievement.points, 0);
  };

  const isExpiringSoon = (expiryDate) => {
    if (!expiryDate) return false;
    const expiry = new Date(expiryDate);
    const now = new Date();
    const sixMonthsFromNow = new Date(now.getTime() + (6 * 30 * 24 * 60 * 60 * 1000));
    return expiry <= sixMonthsFromNow;
  };

  return (
    <div className={`min-h-screen p-6 transition-colors duration-300 ${
      isDark 
        ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900' 
        : 'bg-gradient-to-br from-gray-50 to-gray-100'
    }`}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className={`text-4xl font-bold mb-4 flex items-center justify-center gap-3 transition-colors duration-300 ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}>
            <Trophy className="w-10 h-10 text-yellow-600" />
            Achievements & Certifications
          </h1>
          <p className={`text-lg max-w-3xl mx-auto transition-colors duration-300 ${
            isDark ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Track your professional achievements, certifications, and milestones in your learning journey.
          </p>
        </motion.div>

        {/* Stats Overview */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <div className="bg-gradient-to-r from-yellow-400 to-yellow-600 p-6 rounded-xl text-white">
            <div className="flex items-center gap-3 mb-2">
              <Trophy className="w-8 h-8" />
              <span className="text-sm font-medium opacity-90">Total Points</span>
            </div>
            <div className="text-3xl font-bold">{getTotalPoints()}</div>
          </div>
          
          <div className="bg-gradient-to-r from-blue-400 to-blue-600 p-6 rounded-xl text-white">
            <div className="flex items-center gap-3 mb-2">
              <Award className="w-8 h-8" />
              <span className="text-sm font-medium opacity-90">Certifications</span>
            </div>
            <div className="text-3xl font-bold">
              {achievements.filter(a => a.type === 'certification').length}
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-green-400 to-green-600 p-6 rounded-xl text-white">
            <div className="flex items-center gap-3 mb-2">
              <Medal className="w-8 h-8" />
              <span className="text-sm font-medium opacity-90">Achievements</span>
            </div>
            <div className="text-3xl font-bold">
              {achievements.filter(a => a.type === 'achievement').length}
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-purple-400 to-purple-600 p-6 rounded-xl text-white">
            <div className="flex items-center gap-3 mb-2">
              <Star className="w-8 h-8" />
              <span className="text-sm font-medium opacity-90">Milestones</span>
            </div>
            <div className="text-3xl font-bold">
              {achievements.filter(a => a.type === 'milestone').length}
            </div>
          </div>
        </motion.div>

        {/* Categories Filter */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  selectedCategory === category.id
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200'
                }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>
        </motion.div>

        {/* Achievements Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          {filteredAchievements.map((achievement, index) => (
            <motion.div
              key={achievement.id}
              className="bg-white rounded-xl shadow-sm border hover:shadow-lg transition-all duration-300 cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
              whileHover={{ scale: 1.02 }}
              onClick={() => setSelectedAchievement(achievement)}
            >
              <div className="p-6">
                {/* Badge and Type */}
                <div className="flex items-start justify-between mb-4">
                  <div className="text-4xl">{achievement.badge}</div>
                  <div className="flex flex-col gap-2 items-end">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium flex items-center gap-1 ${getTypeColor(achievement.type)}`}>
                      {getTypeIcon(achievement.type)}
                      {achievement.type}
                    </span>
                    {achievement.expiryDate && isExpiringSoon(achievement.expiryDate) && (
                      <span className="px-2 py-1 bg-orange-100 text-orange-700 rounded-full text-xs font-medium flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        Expires Soon
                      </span>
                    )}
                  </div>
                </div>

                {/* Title and Issuer */}
                <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
                  {achievement.title}
                </h3>
                {achievement.issuer && (
                  <p className="text-sm text-gray-600 mb-3">{achievement.issuer}</p>
                )}

                {/* Description */}
                <p className="text-sm text-gray-700 mb-4 line-clamp-3">
                  {achievement.description}
                </p>

                {/* Level and Points */}
                <div className="flex items-center justify-between mb-4">
                  <span className={`px-2 py-1 rounded border text-xs font-medium ${getLevelColor(achievement.level)}`}>
                    {achievement.level}
                  </span>
                  <div className="flex items-center gap-1 text-sm font-medium text-yellow-600">
                    <Star className="w-4 h-4" />
                    {achievement.points} pts
                  </div>
                </div>

                {/* Skills */}
                <div className="flex flex-wrap gap-1 mb-4">
                  {achievement.skills.slice(0, 3).map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded"
                    >
                      {skill}
                    </span>
                  ))}
                  {achievement.skills.length > 3 && (
                    <span className="px-2 py-1 bg-gray-100 text-gray-500 text-xs rounded">
                      +{achievement.skills.length - 3} more
                    </span>
                  )}
                </div>

                {/* Date */}
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <Calendar className="w-4 h-4" />
                  Earned: {new Date(achievement.dateEarned).toLocaleDateString()}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Achievement Detail Modal */}
        <AnimatePresence>
          {selectedAchievement && (
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedAchievement(null)}
            >
              <motion.div
                className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
              >
                <div className="p-6">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-start gap-4">
                      <div className="text-6xl">{selectedAchievement.badge}</div>
                      <div>
                        <h2 className="text-2xl font-bold text-gray-900 mb-2">
                          {selectedAchievement.title}
                        </h2>
                        {selectedAchievement.issuer && (
                          <p className="text-gray-600 mb-2">{selectedAchievement.issuer}</p>
                        )}
                        <div className="flex items-center gap-3">
                          <span className={`px-3 py-1 rounded-full text-sm font-medium flex items-center gap-2 ${getTypeColor(selectedAchievement.type)}`}>
                            {getTypeIcon(selectedAchievement.type)}
                            {selectedAchievement.type}
                          </span>
                          <span className={`px-3 py-1 rounded border text-sm font-medium ${getLevelColor(selectedAchievement.level)}`}>
                            {selectedAchievement.level}
                          </span>
                        </div>
                      </div>
                    </div>
                    <button
                      onClick={() => setSelectedAchievement(null)}
                      className="text-gray-500 hover:text-gray-700 text-xl"
                    >
                      ×
                    </button>
                  </div>

                  {/* Description */}
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Description</h3>
                    <p className="text-gray-700">{selectedAchievement.description}</p>
                  </div>

                  {/* Details Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">Details</h3>
                      <div className="space-y-3 text-sm">
                        <div className="flex justify-between">
                          <span className="text-gray-600">Date Earned:</span>
                          <span className="font-medium">
                            {new Date(selectedAchievement.dateEarned).toLocaleDateString()}
                          </span>
                        </div>
                        {selectedAchievement.expiryDate && (
                          <div className="flex justify-between">
                            <span className="text-gray-600">Expires:</span>
                            <span className={`font-medium ${
                              isExpiringSoon(selectedAchievement.expiryDate) ? 'text-orange-600' : 'text-gray-900'
                            }`}>
                              {new Date(selectedAchievement.expiryDate).toLocaleDateString()}
                            </span>
                          </div>
                        )}
                        {selectedAchievement.credentialId && (
                          <div className="flex justify-between">
                            <span className="text-gray-600">Credential ID:</span>
                            <span className="font-medium font-mono text-xs">
                              {selectedAchievement.credentialId}
                            </span>
                          </div>
                        )}
                        <div className="flex justify-between">
                          <span className="text-gray-600">Points:</span>
                          <span className="font-medium text-yellow-600">
                            {selectedAchievement.points} pts
                          </span>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">Skills Demonstrated</h3>
                      <div className="flex flex-wrap gap-2">
                        {selectedAchievement.skills.map((skill, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-full"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex gap-3 pt-6 border-t border-gray-200">
                    {selectedAchievement.verificationUrl && (
                      <a
                        href={selectedAchievement.verificationUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Verify Credential
                      </a>
                    )}
                    <button className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors">
                      <Share2 className="w-4 h-4" />
                      Share
                    </button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* No Results */}
        {filteredAchievements.length === 0 && (
          <div className="text-center py-12">
            <Trophy className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No achievements found</h3>
            <p className="text-gray-500">No achievements in this category yet.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Achievements;
