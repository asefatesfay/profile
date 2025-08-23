import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  BookOpen, 
  Video, 
  FileText, 
  Globe, 
  Code,
  Search,
  Filter,
  Star,
  Clock,
  CheckCircle,
  ExternalLink,
  Play,
  Download,
  Heart,
  Share2,
  Bookmark,
  TrendingUp
} from 'lucide-react';
import { skillsData } from '../data/skillsData';

const ResourceHub = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedType, setSelectedType] = useState('all');
  const [selectedSkill, setSelectedSkill] = useState('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState('all');
  const [favorites, setFavorites] = useState(() => {
    const saved = localStorage.getItem('resource-favorites');
    return saved ? new Set(JSON.parse(saved)) : new Set();
  });
  const [completedResources, setCompletedResources] = useState(() => {
    const saved = localStorage.getItem('completed-resources');
    return saved ? new Set(JSON.parse(saved)) : new Set();
  });

  // Get all learning resources from skills
  const getAllResources = () => {
    const resources = [];
    
    // Get resources from skillsData.learningResources (existing format)
    if (skillsData.learningResources) {
      Object.entries(skillsData.learningResources).forEach(([skillId, skillResources]) => {
        const skill = skillsData.skills.find(s => s.id === skillId);
        skillResources.forEach((resource, index) => {
          resources.push({
            id: `${skillId}-${index}`,
            skillId,
            skillName: skill?.title || skillId,
            skillCategory: skill?.category || 'general',
            ...resource
          });
        });
      });
    }

    // Get resources from individual skill.freeResources (new format)
    skillsData.skills.forEach(skill => {
      if (skill.freeResources && skill.freeResources.length > 0) {
        skill.freeResources.forEach((resource, index) => {
          resources.push({
            id: `${skill.id}-free-${index}`,
            skillId: skill.id,
            skillName: skill.title,
            skillCategory: skill.category,
            difficulty: 'beginner', // Default difficulty for free resources
            tags: skill.technologies ? skill.technologies.slice(0, 3) : [],
            ...resource
          });
        });
      }
    });

    return resources;
  };

  const allResources = getAllResources();

  // Filter resources based on current filters
  const filteredResources = allResources.filter(resource => {
    const matchesSearch = searchQuery === '' || 
      resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      resource.description?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      resource.skillName.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesType = selectedType === 'all' || resource.type === selectedType;
    const matchesSkill = selectedSkill === 'all' || resource.skillId === selectedSkill;
    const matchesDifficulty = selectedDifficulty === 'all' || resource.difficulty === selectedDifficulty;

    return matchesSearch && matchesType && matchesSkill && matchesDifficulty;
  });

  // Get unique values for filters
  const resourceTypes = ['all', ...new Set(allResources.map(r => r.type))];
  const skills = ['all', ...new Set(allResources.map(r => ({ id: r.skillId, name: r.skillName })))];
  const difficulties = ['all', 'beginner', 'intermediate', 'advanced'];

  // Save favorites and completed to localStorage
  useEffect(() => {
    localStorage.setItem('resource-favorites', JSON.stringify([...favorites]));
  }, [favorites]);

  useEffect(() => {
    localStorage.setItem('completed-resources', JSON.stringify([...completedResources]));
  }, [completedResources]);

  const toggleFavorite = (resourceId) => {
    const newFavorites = new Set(favorites);
    if (newFavorites.has(resourceId)) {
      newFavorites.delete(resourceId);
    } else {
      newFavorites.add(resourceId);
    }
    setFavorites(newFavorites);
  };

  const toggleCompleted = (resourceId) => {
    const newCompleted = new Set(completedResources);
    if (newCompleted.has(resourceId)) {
      newCompleted.delete(resourceId);
    } else {
      newCompleted.add(resourceId);
    }
    setCompletedResources(newCompleted);
  };

  const getTypeIcon = (type) => {
    switch (type) {
      case 'video': return <Video className="w-4 h-4" />;
      case 'article': return <FileText className="w-4 h-4" />;
      case 'course': return <BookOpen className="w-4 h-4" />;
      case 'tutorial': return <Code className="w-4 h-4" />;
      case 'documentation': return <Globe className="w-4 h-4" />;
      default: return <BookOpen className="w-4 h-4" />;
    }
  };

  const getTypeColor = (type) => {
    switch (type) {
      case 'video': return 'bg-red-100 text-red-700';
      case 'article': return 'bg-blue-100 text-blue-700';
      case 'course': return 'bg-green-100 text-green-700';
      case 'tutorial': return 'bg-purple-100 text-purple-700';
      case 'documentation': return 'bg-gray-100 text-gray-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'beginner': return 'bg-green-100 text-green-700';
      case 'intermediate': return 'bg-yellow-100 text-yellow-700';
      case 'advanced': return 'bg-red-100 text-red-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  const getProgress = () => {
    return {
      total: allResources.length,
      completed: completedResources.size,
      favorites: favorites.size,
      percentage: allResources.length > 0 ? Math.round((completedResources.size / allResources.length) * 100) : 0
    };
  };

  const progress = getProgress();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 pt-20 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4 flex items-center justify-center gap-3">
            <BookOpen className="w-10 h-10 text-blue-600" />
            Learning Resource Hub
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Curated learning resources across all skills with progress tracking, favorites, and personalized recommendations.
          </p>
        </motion.div>

        {/* Progress Overview */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <div className="bg-white p-6 rounded-xl shadow-sm border">
            <div className="flex items-center gap-3 mb-2">
              <BookOpen className="w-6 h-6 text-blue-600" />
              <span className="text-sm font-medium text-gray-600">Total Resources</span>
            </div>
            <div className="text-2xl font-bold text-gray-900">{progress.total}</div>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm border">
            <div className="flex items-center gap-3 mb-2">
              <CheckCircle className="w-6 h-6 text-green-600" />
              <span className="text-sm font-medium text-gray-600">Completed</span>
            </div>
            <div className="text-2xl font-bold text-gray-900">{progress.completed}</div>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm border">
            <div className="flex items-center gap-3 mb-2">
              <Heart className="w-6 h-6 text-red-600" />
              <span className="text-sm font-medium text-gray-600">Favorites</span>
            </div>
            <div className="text-2xl font-bold text-gray-900">{progress.favorites}</div>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm border">
            <div className="flex items-center gap-3 mb-2">
              <TrendingUp className="w-6 h-6 text-purple-600" />
              <span className="text-sm font-medium text-gray-600">Progress</span>
            </div>
            <div className="text-2xl font-bold text-gray-900">{progress.percentage}%</div>
            <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
              <div 
                className="bg-purple-600 h-2 rounded-full transition-all duration-300"
                style={{ width: `${progress.percentage}%` }}
              />
            </div>
          </div>
        </motion.div>

        {/* Filters */}
        <motion.div
          className="bg-white p-6 rounded-xl shadow-sm border mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {/* Search */}
            <div className="lg:col-span-2">
              <div className="relative">
                <Search className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search resources..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* Type Filter */}
            <select
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              {resourceTypes.map(type => (
                <option key={type} value={type}>
                  {type === 'all' ? 'All Types' : type.charAt(0).toUpperCase() + type.slice(1)}
                </option>
              ))}
            </select>

            {/* Skill Filter */}
            <select
              value={selectedSkill}
              onChange={(e) => setSelectedSkill(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="all">All Skills</option>
              {Array.from(new Set(skills.slice(1).map(s => s.id))).map(skillId => {
                const skillName = skills.find(s => s.id === skillId)?.name;
                return (
                  <option key={skillId} value={skillId}>
                    {skillName}
                  </option>
                );
              })}
            </select>

            {/* Difficulty Filter */}
            <select
              value={selectedDifficulty}
              onChange={(e) => setSelectedDifficulty(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              {difficulties.map(difficulty => (
                <option key={difficulty} value={difficulty}>
                  {difficulty === 'all' ? 'All Levels' : difficulty.charAt(0).toUpperCase() + difficulty.slice(1)}
                </option>
              ))}
            </select>
          </div>
        </motion.div>

        {/* Resources Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          {filteredResources.map((resource, index) => {
            const isCompleted = completedResources.has(resource.id);
            const isFavorite = favorites.has(resource.id);

            return (
              <motion.div
                key={resource.id}
                className="bg-white rounded-xl shadow-sm border hover:shadow-lg transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="p-6">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
                        {resource.title}
                      </h3>
                      <div className="flex items-center gap-2 mb-2">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium flex items-center gap-1 ${getTypeColor(resource.type)}`}>
                          {getTypeIcon(resource.type)}
                          {resource.type}
                        </span>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(resource.difficulty)}`}>
                          {resource.difficulty}
                        </span>
                      </div>
                    </div>
                    
                    <div className="flex gap-2 ml-2">
                      <button
                        onClick={() => toggleFavorite(resource.id)}
                        className={`p-2 rounded-lg transition-colors ${
                          isFavorite 
                            ? 'bg-red-100 text-red-600' 
                            : 'bg-gray-100 text-gray-400 hover:text-red-600'
                        }`}
                      >
                        <Heart className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => toggleCompleted(resource.id)}
                        className={`p-2 rounded-lg transition-colors ${
                          isCompleted 
                            ? 'bg-green-100 text-green-600' 
                            : 'bg-gray-100 text-gray-400 hover:text-green-600'
                        }`}
                      >
                        <CheckCircle className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  {/* Description */}
                  {resource.description && (
                    <p className="text-sm text-gray-600 mb-4 line-clamp-3">
                      {resource.description}
                    </p>
                  )}

                  {/* Skill Tag */}
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-xs text-gray-500">Skill:</span>
                    <span className="px-2 py-1 bg-blue-50 text-blue-700 text-xs rounded">
                      {resource.skillName}
                    </span>
                  </div>

                  {/* Meta Info */}
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    {resource.duration && (
                      <div className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {resource.duration}
                      </div>
                    )}
                    {resource.rating && (
                      <div className="flex items-center gap-1">
                        <Star className="w-3 h-3 text-yellow-500" />
                        {resource.rating}
                      </div>
                    )}
                  </div>

                  {/* Action */}
                  <div className="flex gap-2">
                    {resource.url && (
                      <a
                        href={resource.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm"
                      >
                        <ExternalLink className="w-3 h-3" />
                        {resource.type === 'video' ? 'Watch' : 'View'}
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* No Results */}
        {filteredResources.length === 0 && (
          <div className="text-center py-12">
            <BookOpen className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No resources found</h3>
            <p className="text-gray-500">Try adjusting your filters to see more resources.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ResourceHub;
