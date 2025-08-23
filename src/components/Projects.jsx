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
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-6">
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
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-6">
                {/* Modal Header */}
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">{selectedProject.title}</h2>
                    <p className="text-gray-600">{selectedProject.description}</p>
                  </div>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="text-gray-500 hover:text-gray-700 text-xl"
                  >
                    ×
                  </button>
                </div>

                {/* Project Details Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {/* Left Column */}
                  <div className="space-y-6">
                    {/* Technologies */}
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
                        <Code className="w-5 h-5" />
                        Technologies Used
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.technologies.map((tech, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Features */}
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
                        <CheckCircle className="w-5 h-5" />
                        Key Features
                      </h3>
                      <ul className="space-y-2">
                        {selectedProject.features.map((feature, index) => (
                          <li key={index} className="flex items-start gap-2 text-sm text-gray-700">
                            <Circle className="w-3 h-3 mt-1 text-gray-400 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Actions */}
                    <div className="flex gap-3">
                      {selectedProject.githubUrl && (
                        <a
                          href={selectedProject.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
                        >
                          <Github className="w-4 h-4" />
                          View Code
                        </a>
                      )}
                      {selectedProject.liveUrl && (
                        <a
                          href={selectedProject.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                        >
                          <ExternalLink className="w-4 h-4" />
                          Live Demo
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Right Column */}
                  <div className="space-y-6">
                    {/* Learning Outcomes */}
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
                        <Lightbulb className="w-5 h-5" />
                        Learning Outcomes
                      </h3>
                      <ul className="space-y-2">
                        {selectedProject.learningOutcomes.map((outcome, index) => (
                          <li key={index} className="flex items-start gap-2 text-sm text-gray-700">
                            <Star className="w-3 h-3 mt-1 text-yellow-500 flex-shrink-0" />
                            {outcome}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Architecture Section */}
                    {selectedProject.architecture && (
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
                          <Layout className="w-5 h-5" />
                          System Architecture
                        </h3>
                        
                        {/* Architecture Overview */}
                        <div className="mb-4">
                          <h4 className="text-sm font-medium text-gray-800 mb-2">Overview</h4>
                          <p className="text-sm text-gray-600">{selectedProject.architecture.overview}</p>
                        </div>

                        {/* Architecture Diagram */}
                        <div className="mb-4">
                          <h4 className="text-sm font-medium text-gray-800 mb-2 flex items-center gap-1">
                            <Layers className="w-4 h-4" />
                            Architecture Diagram
                          </h4>
                          <div className="bg-gray-900 text-gray-100 p-4 rounded-lg text-xs font-mono overflow-x-auto">
                            <pre className="whitespace-pre">{selectedProject.architecture.diagram}</pre>
                          </div>
                        </div>

                        {/* Components */}
                        <div className="mb-4">
                          <h4 className="text-sm font-medium text-gray-800 mb-2 flex items-center gap-1">
                            <Database className="w-4 h-4" />
                            Key Components
                          </h4>
                          <div className="space-y-3">
                            {selectedProject.architecture.components.map((component, index) => (
                              <div key={index} className="border-l-2 border-blue-200 pl-3">
                                <div className="flex items-center gap-2 mb-1">
                                  <span className="font-medium text-gray-800 text-sm">{component.name}</span>
                                  <span className="text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded">
                                    {component.tech}
                                  </span>
                                </div>
                                <p className="text-xs text-gray-600">{component.responsibility}</p>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Reactive Patterns (if available) */}
                        {selectedProject.architecture.reactivePatterns && (
                          <div className="mb-4">
                            <h4 className="text-sm font-medium text-gray-800 mb-2">Reactive Patterns</h4>
                            <ul className="space-y-1">
                              {selectedProject.architecture.reactivePatterns.map((pattern, index) => (
                                <li key={index} className="flex items-start gap-2 text-xs text-gray-600">
                                  <Circle className="w-2 h-2 mt-1 text-green-500 flex-shrink-0" />
                                  {pattern}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {/* Data Flow (if available) */}
                        {selectedProject.architecture.dataFlow && (
                          <div className="mb-4">
                            <h4 className="text-sm font-medium text-gray-800 mb-2">Data Flow</h4>
                            <ul className="space-y-1">
                              {selectedProject.architecture.dataFlow.map((flow, index) => (
                                <li key={index} className="flex items-start gap-2 text-xs text-gray-600">
                                  <Circle className="w-2 h-2 mt-1 text-purple-500 flex-shrink-0" />
                                  {flow}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {/* Performance Optimizations (if available) */}
                        {selectedProject.architecture.performanceOptimizations && (
                          <div>
                            <h4 className="text-sm font-medium text-gray-800 mb-2">Performance Optimizations</h4>
                            <ul className="space-y-1">
                              {selectedProject.architecture.performanceOptimizations.map((optimization, index) => (
                                <li key={index} className="flex items-start gap-2 text-xs text-gray-600">
                                  <Circle className="w-2 h-2 mt-1 text-orange-500 flex-shrink-0" />
                                  {optimization}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {/* Design Decisions (ADRs) - Moved to full-width section below */}
                      </div>
                    )}

                    {/* Project Info */}
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">Project Information</h3>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-gray-600">Category:</span>
                          <span className="font-medium">{selectedProject.category}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Duration:</span>
                          <span className="font-medium">{selectedProject.duration}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Estimated Hours:</span>
                          <span className="font-medium">{selectedProject.estimatedHours}h</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Difficulty:</span>
                          <span className={`px-2 py-1 rounded text-xs ${getDifficultyColor(selectedProject.difficulty)}`}>
                            {selectedProject.difficulty}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Status:</span>
                          <span className={`px-2 py-1 rounded text-xs ${getStatusColor(selectedProject.status)}`}>
                            {selectedProject.status}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Performance Metrics (if available) */}
                    {selectedProject.performanceMetrics && (
                      <div className="bg-green-50 p-4 rounded-lg">
                        <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
                          <Target className="w-5 h-5" />
                          Performance Metrics
                        </h3>
                        <ul className="space-y-2">
                          {selectedProject.performanceMetrics.map((metric, index) => (
                            <li key={index} className="flex items-start gap-2 text-sm text-gray-700">
                              <CheckCircle className="w-3 h-3 mt-1 text-green-600 flex-shrink-0" />
                              {metric}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>

                {/* Full-width Design Decisions Section */}
                {selectedProject.architecture && selectedProject.architecture.designDecisions && (
                  <div className="mt-8 border-t border-gray-200 pt-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                      <Lightbulb className="w-5 h-5 text-yellow-500" />
                      Architecture Decision Records (ADRs)
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {selectedProject.architecture.designDecisions.map((decision, index) => (
                        <div key={index} className="border border-gray-200 rounded-lg p-4 bg-white hover:shadow-md transition-shadow">
                          <div className="flex items-start justify-between mb-3">
                            <h4 className="text-sm font-semibold text-gray-900 pr-2">{decision.id}: {decision.title}</h4>
                            <span className={`px-2 py-1 rounded text-xs font-medium flex-shrink-0 ${
                              decision.status === 'Accepted' ? 'bg-green-100 text-green-700' :
                              decision.status === 'Superseded' ? 'bg-yellow-100 text-yellow-700' :
                              'bg-gray-100 text-gray-700'
                            }`}>
                              {decision.status}
                            </span>
                          </div>
                          
                          <div className="space-y-3">
                            <div>
                              <h5 className="text-xs font-medium text-gray-700 mb-1">Context</h5>
                              <p className="text-xs text-gray-600">{decision.context}</p>
                            </div>
                            
                            <div>
                              <h5 className="text-xs font-medium text-gray-700 mb-1">Decision</h5>
                              <p className="text-xs text-gray-600">{decision.decision}</p>
                            </div>
                            
                            <div>
                              <h5 className="text-xs font-medium text-gray-700 mb-1">Rationale</h5>
                              <p className="text-xs text-gray-600">{decision.rationale}</p>
                            </div>
                            
                            <div>
                              <h5 className="text-xs font-medium text-gray-700 mb-1">Trade-offs</h5>
                              <p className="text-xs text-gray-600">{decision.tradeoffs}</p>
                            </div>
                            
                            {decision.alternatives && decision.alternatives.length > 0 && (
                              <div>
                                <h5 className="text-xs font-medium text-gray-700 mb-1">Alternatives Considered</h5>
                                <div className="flex flex-wrap gap-1">
                                  {decision.alternatives.map((alt, altIndex) => (
                                    <span key={altIndex} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded">
                                      {alt}
                                    </span>
                                  ))}
                                </div>
                              </div>
                            )}
                            
                            <div className="pt-2 border-t border-gray-100">
                              <span className="text-xs text-gray-500">Decision made: {decision.date}</span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Projects;
