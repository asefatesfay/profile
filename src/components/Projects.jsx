import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ExternalLink, 
  Github, 
  Calendar, 
  Clock, 
  Code, 
  CheckCircle, 
  Circle, 
  Filter,
  Lightbulb,
  Target,
  Star,
  Layout,
  Database,
  Layers
} from 'lucide-react';
import { skillsData } from '../data/skillsData';

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = skillsData.projects;
  
  // Get unique categories for filtering
  const categories = ['all', ...new Set(projects.map(p => p.category))];
  const difficulties = ['all', 'beginner', 'intermediate', 'advanced'];

  // Filter projects based on selected filters
  const filteredProjects = projects.filter(project => {
    const categoryMatch = selectedCategory === 'all' || project.category === selectedCategory;
    const difficultyMatch = selectedDifficulty === 'all' || project.difficulty === selectedDifficulty;
    return categoryMatch && difficultyMatch;
  });

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'beginner': return 'text-green-600 bg-green-100';
      case 'intermediate': return 'text-blue-600 bg-blue-100';
      case 'advanced': return 'text-purple-600 bg-purple-100';
      default: return 'text-gray-600 bg-gray-100';
    }
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
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-6 pt-20">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Projects Portfolio</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Practical projects that demonstrate expertise across different technologies and domains. 
            Each project includes detailed implementation guides and learning outcomes.
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          className="flex flex-wrap gap-4 mb-8 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <div className="flex items-center gap-2">
            <Filter className="w-4 h-4 text-gray-600" />
            <span className="text-sm font-medium text-gray-700">Category:</span>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-3 py-1 rounded-lg border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {categories.map(category => (
                <option key={category} value={category}>
                  {category === 'all' ? 'All Categories' : category}
                </option>
              ))}
            </select>
          </div>

          <div className="flex items-center gap-2">
            <Target className="w-4 h-4 text-gray-600" />
            <span className="text-sm font-medium text-gray-700">Difficulty:</span>
            <select
              value={selectedDifficulty}
              onChange={(e) => setSelectedDifficulty(e.target.value)}
              className="px-3 py-1 rounded-lg border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {difficulties.map(difficulty => (
                <option key={difficulty} value={difficulty}>
                  {difficulty === 'all' ? 'All Levels' : difficulty.charAt(0).toUpperCase() + difficulty.slice(1)}
                </option>
              ))}
            </select>
          </div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              onClick={() => setSelectedProject(project)}
            >
              <div className="p-6">
                {/* Project Header */}
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-bold text-gray-900 line-clamp-2">{project.title}</h3>
                  <div className="flex gap-2">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(project.status)}`}>
                      {project.status}
                    </span>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(project.difficulty)}`}>
                      {project.difficulty}
                    </span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">{project.description}</p>

                {/* Meta Info */}
                <div className="flex items-center gap-4 text-xs text-gray-500 mb-4">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {project.duration}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {project.estimatedHours}h
                  </div>
                  <div className="flex items-center gap-1">
                    <Code className="w-3 h-3" />
                    {project.technologies.length} techs
                  </div>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-1 mb-4">
                  {project.technologies.slice(0, 4).map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="px-2 py-1 bg-gray-100 text-gray-500 text-xs rounded">
                      +{project.technologies.length - 4} more
                    </span>
                  )}
                </div>

                {/* Actions */}
                <div className="flex gap-2">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="flex items-center gap-1 px-3 py-1 bg-gray-900 text-white text-xs rounded hover:bg-gray-800 transition-colors"
                    >
                      <Github className="w-3 h-3" />
                      Code
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="flex items-center gap-1 px-3 py-1 bg-blue-600 text-white text-xs rounded hover:bg-blue-700 transition-colors"
                    >
                      <ExternalLink className="w-3 h-3" />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* No results message */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <Code className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No projects found</h3>
            <p className="text-gray-500">Try adjusting your filters to see more projects.</p>
          </div>
        )}
      </div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 bg-gradient-to-br from-black/60 via-black/50 to-black/60 backdrop-blur-sm flex items-center justify-center p-4 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              className="bg-white rounded-2xl max-w-6xl w-full max-h-[95vh] overflow-hidden shadow-2xl"
              initial={{ scale: 0.8, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 50 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header with Gradient */}
              <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 p-6 text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-black/10"></div>
                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <h2 className="text-3xl font-bold">{selectedProject.title}</h2>
                        <div className="flex gap-2">
                          <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                            selectedProject.status === 'completed' ? 'bg-green-500 text-white' :
                            selectedProject.status === 'in-progress' ? 'bg-yellow-500 text-white' :
                            'bg-gray-500 text-white'
                          }`}>
                            {selectedProject.status}
                          </span>
                          <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                            selectedProject.difficulty === 'beginner' ? 'bg-green-500 text-white' :
                            selectedProject.difficulty === 'intermediate' ? 'bg-blue-500 text-white' :
                            'bg-purple-500 text-white'
                          }`}>
                            {selectedProject.difficulty}
                          </span>
                        </div>
                      </div>
                      <p className="text-blue-100 text-lg leading-relaxed">{selectedProject.description}</p>
                      
                      {/* Quick Stats */}
                      <div className="flex items-center gap-6 mt-4 text-blue-100">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          <span className="text-sm font-medium">{selectedProject.duration}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4" />
                          <span className="text-sm font-medium">{selectedProject.estimatedHours} hours</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Code className="w-4 h-4" />
                          <span className="text-sm font-medium">{selectedProject.technologies.length} technologies</span>
                        </div>
                      </div>
                    </div>
                    <button
                      onClick={() => setSelectedProject(null)}
                      className="text-white/80 hover:text-white hover:bg-white/20 rounded-full p-2 transition-all duration-200 ml-4"
                    >
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>

              {/* Modal Content */}
              <div className="overflow-y-auto max-h-[calc(95vh-200px)]">
                <div className="p-8">
                  {/* Project Details Grid */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Left Column */}
                    <div className="space-y-8">
                      {/* Technologies */}
                      <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-100">
                        <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                          <div className="p-2 bg-blue-600 rounded-lg">
                            <Code className="w-5 h-5 text-white" />
                          </div>
                          Technologies Used
                        </h3>
                        <div className="flex flex-wrap gap-3">
                          {selectedProject.technologies.map((tech, index) => (
                            <span
                              key={index}
                              className="px-4 py-2 bg-white text-blue-700 text-sm font-medium rounded-xl shadow-sm border border-blue-200 hover:shadow-md transition-shadow"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Features */}
                      <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border border-green-100">
                        <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                          <div className="p-2 bg-green-600 rounded-lg">
                            <CheckCircle className="w-5 h-5 text-white" />
                          </div>
                          Key Features
                        </h3>
                        <ul className="space-y-3">
                          {selectedProject.features.map((feature, index) => (
                            <li key={index} className="flex items-start gap-3 text-gray-700">
                              <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                              <span className="text-sm leading-relaxed">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Actions */}
                      <div className="flex gap-4">
                        {selectedProject.githubUrl && (
                          <a
                            href={selectedProject.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-3 px-6 py-3 bg-gray-900 text-white rounded-xl hover:bg-gray-800 transition-all duration-200 shadow-lg hover:shadow-xl font-medium"
                          >
                            <Github className="w-5 h-5" />
                            View Source Code
                          </a>
                        )}
                        {selectedProject.liveUrl && (
                          <a
                            href={selectedProject.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl font-medium"
                          >
                            <ExternalLink className="w-5 h-5" />
                            Live Demo
                          </a>
                        )}
                      </div>
                    </div>

                    {/* Right Column */}
                    <div className="space-y-8">
                      {/* Learning Outcomes */}
                      <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 border border-purple-100">
                        <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                          <div className="p-2 bg-purple-600 rounded-lg">
                            <Lightbulb className="w-5 h-5 text-white" />
                          </div>
                          Learning Outcomes
                        </h3>
                        <ul className="space-y-3">
                          {selectedProject.learningOutcomes.map((outcome, index) => (
                            <li key={index} className="flex items-start gap-3 text-gray-700">
                              <Star className="w-4 h-4 text-yellow-500 mt-1 flex-shrink-0" />
                              <span className="text-sm leading-relaxed">{outcome}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Project Information */}
                      <div className="bg-gradient-to-br from-gray-50 to-slate-50 rounded-xl p-6 border border-gray-200">
                        <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                          <div className="p-2 bg-gray-600 rounded-lg">
                            <Target className="w-5 h-5 text-white" />
                          </div>
                          Project Information
                        </h3>
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div className="bg-white p-3 rounded-lg shadow-sm">
                            <span className="text-gray-600 font-medium">Category</span>
                            <div className="font-semibold text-gray-900 mt-1">{selectedProject.category}</div>
                          </div>
                          <div className="bg-white p-3 rounded-lg shadow-sm">
                            <span className="text-gray-600 font-medium">Duration</span>
                            <div className="font-semibold text-gray-900 mt-1">{selectedProject.duration}</div>
                          </div>
                          <div className="bg-white p-3 rounded-lg shadow-sm">
                            <span className="text-gray-600 font-medium">Estimated Hours</span>
                            <div className="font-semibold text-gray-900 mt-1">{selectedProject.estimatedHours}h</div>
                          </div>
                          <div className="bg-white p-3 rounded-lg shadow-sm">
                            <span className="text-gray-600 font-medium">Difficulty</span>
                            <div className="mt-1">
                              <span className={`px-3 py-1 rounded-full text-xs font-medium ${getDifficultyColor(selectedProject.difficulty)}`}>
                                {selectedProject.difficulty}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Right Column */}
                    <div className="space-y-8">

                    {/* Right Column */}
                    <div className="space-y-8">
                      {/* Architecture Section */}
                      {selectedProject.architecture && (
                        <div className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-xl p-6 border border-indigo-100">
                          <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                            <div className="p-2 bg-indigo-600 rounded-lg">
                              <Layout className="w-5 h-5 text-white" />
                            </div>
                            System Architecture
                          </h3>
                          
                          {/* Architecture Overview */}
                          <div className="mb-6">
                            <h4 className="text-sm font-semibold text-indigo-700 mb-2">Overview</h4>
                            <p className="text-sm text-gray-700 leading-relaxed bg-white p-3 rounded-lg shadow-sm">{selectedProject.architecture.overview}</p>
                          </div>

                          {/* Architecture Diagram */}
                          <div className="mb-6">
                            <h4 className="text-sm font-semibold text-indigo-700 mb-2 flex items-center gap-2">
                              <Layers className="w-4 h-4" />
                              Architecture Diagram
                            </h4>
                            <div className="bg-gradient-to-br from-gray-900 to-gray-800 text-gray-100 p-4 rounded-lg text-xs font-mono overflow-x-auto shadow-inner border">
                              <pre className="whitespace-pre">{selectedProject.architecture.diagram}</pre>
                            </div>
                          </div>

                          {/* Components */}
                          <div className="mb-6">
                            <h4 className="text-sm font-semibold text-indigo-700 mb-3 flex items-center gap-2">
                              <Database className="w-4 h-4" />
                              Key Components
                            </h4>
                            <div className="space-y-3">
                              {selectedProject.architecture.components.map((component, index) => (
                                <div key={index} className="bg-white border-l-4 border-indigo-400 pl-4 p-3 rounded-r-lg shadow-sm">
                                  <div className="flex items-center gap-2 mb-1">
                                    <span className="font-semibold text-gray-800 text-sm">{component.name}</span>
                                    <span className="text-xs bg-indigo-100 text-indigo-700 px-2 py-1 rounded-full font-medium">
                                      {component.tech}
                                    </span>
                                  </div>
                                  <p className="text-xs text-gray-600 leading-relaxed">{component.responsibility}</p>
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* Reactive Patterns (if available) */}
                          {selectedProject.architecture.reactivePatterns && (
                            <div className="mb-6">
                              <h4 className="text-sm font-semibold text-indigo-700 mb-2">Reactive Patterns</h4>
                              <div className="bg-white p-3 rounded-lg shadow-sm">
                                <ul className="space-y-2">
                                  {selectedProject.architecture.reactivePatterns.map((pattern, index) => (
                                    <li key={index} className="flex items-start gap-2 text-xs text-gray-700">
                                      <div className="w-2 h-2 bg-green-500 rounded-full mt-1.5 flex-shrink-0"></div>
                                      <span className="leading-relaxed">{pattern}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </div>
                          )}

                          {/* Data Flow (if available) */}
                          {selectedProject.architecture.dataFlow && (
                            <div className="mb-6">
                              <h4 className="text-sm font-semibold text-indigo-700 mb-2">Data Flow</h4>
                              <div className="bg-white p-3 rounded-lg shadow-sm">
                                <ul className="space-y-2">
                                  {selectedProject.architecture.dataFlow.map((flow, index) => (
                                    <li key={index} className="flex items-start gap-2 text-xs text-gray-700">
                                      <div className="w-2 h-2 bg-purple-500 rounded-full mt-1.5 flex-shrink-0"></div>
                                      <span className="leading-relaxed">{flow}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </div>
                          )}

                          {/* Performance Optimizations (if available) */}
                          {selectedProject.architecture.performanceOptimizations && (
                            <div>
                              <h4 className="text-sm font-semibold text-indigo-700 mb-2">Performance Optimizations</h4>
                              <div className="bg-white p-3 rounded-lg shadow-sm">
                                <ul className="space-y-2">
                                  {selectedProject.architecture.performanceOptimizations.map((optimization, index) => (
                                    <li key={index} className="flex items-start gap-2 text-xs text-gray-700">
                                      <div className="w-2 h-2 bg-orange-500 rounded-full mt-1.5 flex-shrink-0"></div>
                                      <span className="leading-relaxed">{optimization}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </div>
                          )}
                        </div>
                      )}

                      {/* Performance Metrics (if available) */}
                      {selectedProject.performanceMetrics && (
                        <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border border-green-100">
                          <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                            <div className="p-2 bg-green-600 rounded-lg">
                              <Target className="w-5 h-5 text-white" />
                            </div>
                            Performance Metrics
                          </h3>
                          <div className="grid grid-cols-1 gap-3">
                            {selectedProject.performanceMetrics.map((metric, index) => (
                              <div key={index} className="bg-white p-3 rounded-lg shadow-sm border-l-4 border-green-400">
                                <div className="flex items-start gap-3 text-gray-700">
                                  <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                                  <span className="text-sm leading-relaxed">{metric}</span>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                  </div>

                  {/* Full-width Design Decisions Section */}
                  {selectedProject.architecture && selectedProject.architecture.designDecisions && (
                    <div className="mt-8 border-t-2 border-gradient-to-r from-purple-200 to-blue-200 pt-8">
                      <div className="bg-gradient-to-r from-purple-50 via-blue-50 to-indigo-50 rounded-2xl p-8 border border-purple-100">
                        <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                          <div className="p-3 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-xl">
                            <Lightbulb className="w-6 h-6 text-white" />
                          </div>
                          Architecture Decision Records (ADRs)
                          <span className="text-sm bg-purple-100 text-purple-700 px-3 py-1 rounded-full font-medium">
                            {selectedProject.architecture.designDecisions.length} decisions
                          </span>
                        </h3>
                        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                          {selectedProject.architecture.designDecisions.map((decision, index) => (
                            <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-purple-200">
                              {/* Card Header */}
                              <div className="bg-gradient-to-r from-purple-600 to-indigo-600 p-4 text-white">
                                <div className="flex items-start justify-between mb-2">
                                  <div className="flex-1">
                                    <div className="text-xs font-medium text-purple-100 mb-1">Decision #{decision.id}</div>
                                    <h4 className="text-sm font-bold leading-tight">{decision.title}</h4>
                                  </div>
                                  <span className={`px-2 py-1 rounded-full text-xs font-medium flex-shrink-0 ml-2 ${
                                    decision.status === 'Accepted' ? 'bg-green-400 text-green-900' :
                                    decision.status === 'Superseded' ? 'bg-yellow-400 text-yellow-900' :
                                    'bg-gray-400 text-gray-900'
                                  }`}>
                                    {decision.status}
                                  </span>
                                </div>
                                <div className="text-xs text-purple-100">
                                  <Calendar className="w-3 h-3 inline mr-1" />
                                  {decision.date}
                                </div>
                              </div>
                              
                              {/* Card Content */}
                              <div className="p-4 space-y-4">
                                <div>
                                  <h5 className="text-xs font-semibold text-purple-700 mb-2 flex items-center gap-1">
                                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                                    Context
                                  </h5>
                                  <p className="text-xs text-gray-600 leading-relaxed bg-purple-50 p-2 rounded-lg">{decision.context}</p>
                                </div>
                                
                                <div>
                                  <h5 className="text-xs font-semibold text-indigo-700 mb-2 flex items-center gap-1">
                                    <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
                                    Decision
                                  </h5>
                                  <p className="text-xs text-gray-600 leading-relaxed bg-indigo-50 p-2 rounded-lg">{decision.decision}</p>
                                </div>
                                
                                <div>
                                  <h5 className="text-xs font-semibold text-blue-700 mb-2 flex items-center gap-1">
                                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                                    Rationale
                                  </h5>
                                  <p className="text-xs text-gray-600 leading-relaxed bg-blue-50 p-2 rounded-lg">{decision.rationale}</p>
                                </div>
                                
                                <div>
                                  <h5 className="text-xs font-semibold text-orange-700 mb-2 flex items-center gap-1">
                                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                                    Trade-offs
                                  </h5>
                                  <p className="text-xs text-gray-600 leading-relaxed bg-orange-50 p-2 rounded-lg">{decision.tradeoffs}</p>
                                </div>
                                
                                {decision.alternatives && decision.alternatives.length > 0 && (
                                  <div>
                                    <h5 className="text-xs font-semibold text-gray-700 mb-2 flex items-center gap-1">
                                      <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
                                      Alternatives Considered
                                    </h5>
                                    <div className="flex flex-wrap gap-1">
                                      {decision.alternatives.map((alt, altIndex) => (
                                        <span key={altIndex} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full font-medium hover:bg-gray-200 transition-colors">
                                          {alt}
                                        </span>
                                      ))}
                                    </div>
                                  </div>
                                )}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Projects;
