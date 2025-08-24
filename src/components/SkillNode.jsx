import React, { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { Handle, Position } from 'reactflow';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, Clock, Circle, Award, TrendingUp, Users, Code, BookOpen, ExternalLink } from 'lucide-react';
import { skillsData } from '../data/skillsData';
import { useTheme } from '../contexts/ThemeContext';

const SkillNode = ({ data }) => {
  const { isDark } = useTheme();
  const { skill, activeTooltip, setActiveTooltip } = data;
  const tooltipRef = useRef(null);
  const showDetailedTooltip = activeTooltip === skill.id;
  
  // Get related projects for this skill
  const getRelatedProjects = () => {
    if (!skillsData.projects) return [];
    return skillsData.projects.filter(project => 
      project.skillsUsed.includes(skill.id)
    ).slice(0, 3); // Show max 3 related projects
  };
  
  const relatedProjects = getRelatedProjects();
  
  // Debug logging
  React.useEffect(() => {
    console.log('SkillNode rendered:', {
      skillTitle: skill.title,
      hasDetailedAccomplishments: !!skill.detailedAccomplishments,
      activeTooltip,
      showDetailedTooltip,
      setActiveTooltipExists: !!setActiveTooltip
    });
    
    // Test portal creation
    if (showDetailedTooltip && skill.detailedAccomplishments) {
      console.log('Portal should be created for:', skill.title);
      const container = getPortalContainer();
      console.log('Portal container:', container);
    }
  }, [skill.title, skill.detailedAccomplishments, activeTooltip, showDetailedTooltip, setActiveTooltip]);
  
  // Create or get portal container
  const getPortalContainer = () => {
    let container = document.getElementById('tooltip-portal');
    if (!container) {
      container = document.createElement('div');
      container.id = 'tooltip-portal';
      container.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 999999;
        pointer-events: none;
      `;
      document.body.appendChild(container);
      console.log('Created tooltip portal container');
    }
    return container;
  };
  
  // Handle click outside to close tooltip
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (tooltipRef.current && !tooltipRef.current.contains(event.target)) {
        setActiveTooltip(null);
      }
    };

    if (showDetailedTooltip) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [showDetailedTooltip, setActiveTooltip]);
  
  // Smart positioning logic
  const getTooltipPosition = () => {
    const position = skill.position;
    const screenWidth = typeof window !== 'undefined' ? window.innerWidth : 1200;
    const screenHeight = typeof window !== 'undefined' ? window.innerHeight : 800;
    
    // Determine horizontal position
    let horizontalClass = 'left-1/2 transform -translate-x-1/2';
    let horizontalOffset = '';
    let arrowHorizontal = 'left-1/2 transform -translate-x-1/2';
    
    if (position.x > 800) { // Right side of roadmap
      horizontalClass = 'right-0';
      horizontalOffset = 'mr-4';
      arrowHorizontal = 'right-6';
    } else if (position.x < 300) { // Left side of roadmap
      horizontalClass = 'left-0';
      horizontalOffset = 'ml-4';
      arrowHorizontal = 'left-6';
    }
    
    // Determine vertical position
    let verticalClass = 'bottom-full mb-4';
    let arrowClass = 'top-full border-t-gray-900 border-b-transparent';
    
    if (position.y < 250) { // Top of roadmap
      verticalClass = 'top-full mt-4';
      arrowClass = 'bottom-full border-b-gray-900 border-t-transparent';
    }
    
    return {
      tooltipClass: `${verticalClass} ${horizontalClass} ${horizontalOffset}`,
      arrowClass: `absolute ${arrowClass} ${arrowHorizontal} border-8 border-transparent border-l-transparent border-r-transparent`
    };
  };
  
  const tooltipPositions = getTooltipPosition();
  
  const getStatusIcon = (status) => {
    const iconClasses = isDark ? "w-4 h-4" : "w-4 h-4";
    switch (status) {
      case 'completed':
        return <CheckCircle className={`${iconClasses} ${isDark ? 'text-green-400' : 'text-green-600'}`} />;
      case 'in-progress':
        return <Clock className={`${iconClasses} ${isDark ? 'text-blue-400' : 'text-blue-600'}`} />;
      case 'planned':
        return <Circle className={`${iconClasses} ${isDark ? 'text-gray-500' : 'text-gray-400'}`} />;
      default:
        return <Circle className={`${iconClasses} ${isDark ? 'text-gray-500' : 'text-gray-400'}`} />;
    }
  };
  
  const getLevelColor = (level) => {
    if (isDark) {
      switch (level) {
        case 'expert':
          return 'text-purple-400';
        case 'advanced':
          return 'text-blue-400';
        case 'intermediate':
          return 'text-green-400';
        case 'beginner':
          return 'text-yellow-400';
        default:
          return 'text-gray-400';
      }
    } else {
      switch (level) {
        case 'expert':
          return 'text-purple-600';
        case 'advanced':
          return 'text-blue-600';
        case 'intermediate':
          return 'text-green-600';
        case 'beginner':
          return 'text-yellow-600';
        default:
          return 'text-gray-600';
      }
    }
  };
  
  const getStatusBorderColor = (status) => {
    if (isDark) {
      switch (status) {
        case 'completed':
          return 'border-green-400/80 bg-gradient-to-br from-green-900/50 to-green-800/40 shadow-green-400/25';
        case 'in-progress':
          return 'border-blue-400/80 bg-gradient-to-br from-blue-900/50 to-blue-800/40 shadow-blue-400/25';
        case 'planned':
          return 'border-gray-400/60 bg-gradient-to-br from-gray-800/70 to-gray-700/50 shadow-gray-400/25';
        default:
          return 'border-gray-500/70 bg-gradient-to-br from-gray-800/80 to-gray-700/60 shadow-gray-300/20';
      }
    } else {
      switch (status) {
        case 'completed':
          return 'border-green-300 bg-green-50';
        case 'in-progress':
          return 'border-blue-300 bg-blue-50';
        case 'planned':
          return 'border-gray-300 bg-gray-50';
        default:
          return 'border-gray-300 bg-white';
      }
    }
  };

  return (
    <>
      <Handle type="target" position={Position.Top} />
      <Handle type="target" position={Position.Left} />
      
      <motion.div
        className={`
          px-3 py-2 rounded-lg border-2 cursor-pointer transition-all duration-300
          min-w-[160px] max-w-[180px] relative overflow-hidden
          ${getStatusBorderColor(skill.status)}
          ${isDark 
            ? 'text-white shadow-lg backdrop-blur-sm' 
            : 'text-gray-800 shadow-sm shadow-gray-200/50'
          }
        `}
        whileHover={{ 
          scale: 1.03, 
          boxShadow: isDark 
            ? "0 12px 25px rgba(0,0,0,0.6), 0 0 15px rgba(59, 130, 246, 0.4), inset 0 1px 0 rgba(255,255,255,0.1)" 
            : "0 10px 25px rgba(0,0,0,0.1)",
          zIndex: 5,
          borderColor: isDark ? "rgba(59, 130, 246, 0.8)" : undefined,
          y: -2
        }}
        whileTap={{ scale: 0.98 }}
        initial={{ opacity: 0, scale: 0.8, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ 
          type: "spring", 
          stiffness: 300, 
          damping: 25,
          delay: Math.random() * 0.3 
        }}
        onClick={(e) => {
          e.stopPropagation();
          console.log('Skill clicked:', skill.title, 'Current tooltip:', activeTooltip);
          console.log('Has detailed accomplishments:', !!skill.detailedAccomplishments);
          console.log('Will show tooltip:', !showDetailedTooltip);
          // Toggle this tooltip, or close if another is open
          setActiveTooltip(showDetailedTooltip ? null : skill.id);
        }}
      >
        {/* Subtle shine effect for dark mode */}
        {isDark && (
          <>
            <div className="absolute inset-0 bg-gradient-to-br from-white/8 to-transparent rounded-lg pointer-events-none" />
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent rounded-t-lg" />
          </>
        )}
        
        {/* Header with status and level - simplified */}
        <div className="flex items-center justify-between mb-1">
          <div className="flex items-center gap-1">
            {getStatusIcon(skill.status)}
            <span className={`text-xs font-medium ${getLevelColor(skill.level)}`}>
              {skill.level.charAt(0).toUpperCase() + skill.level.slice(1)}
            </span>
          </div>
          {skill.yearsOfExperience > 0 && (
            <span className={`text-xs font-medium px-1.5 py-0.5 rounded transition-colors duration-300 ${
              isDark 
                ? 'text-amber-400 bg-amber-900/30 border border-amber-600/30' 
                : 'text-amber-700 bg-amber-100'
            }`}>{skill.yearsOfExperience}y</span>
          )}
        </div>
        
        {/* Skill Title with optional indicator */}
        <div className={`font-semibold text-sm mb-1 transition-colors duration-300 ${
          isDark ? 'text-gray-100' : 'text-gray-800'
        }`}>
          <div className="flex items-center gap-1">
            <span>{skill.title}</span>
            {skill.learningRoadmap && (
              <BookOpen className={`w-3 h-3 flex-shrink-0 ${
                isDark ? 'text-blue-400' : 'text-blue-500'
              }`} title="Learning Roadmap Available" />
            )}
          </div>
        </div>
        
        {/* Description (truncated) */}
        <div className={`text-xs line-clamp-2 leading-relaxed transition-colors duration-300 ${
          isDark ? 'text-gray-200' : 'text-gray-600'
        }`}>
          {skill.description}
        </div>
        
        {/* Enhanced tooltip using Portal */}
        {showDetailedTooltip && skill.detailedAccomplishments && createPortal(
          <div 
            className="fixed inset-0 flex items-center justify-center p-4"
            style={{ 
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              zIndex: 999999,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: isDark ? 'rgba(0,0,0,0.5)' : 'rgba(0,0,0,0.3)',
              backdropFilter: 'blur(4px)',
              pointerEvents: 'all'
            }}
          >
            {/* Backdrop */}
            <div 
              className="absolute inset-0"
              onClick={() => setActiveTooltip(null)}
            />
            
            {/* Tooltip Content */}
            <div
              ref={tooltipRef}
              className={`relative z-10 rounded-lg p-5 shadow-xl w-96 sm:w-[400px] md:w-[450px] max-h-[90vh] overflow-hidden border transition-colors duration-300 ${
                isDark 
                  ? 'bg-gray-900 text-white border-gray-700' 
                  : 'bg-white text-gray-900 border-gray-200'
              }`}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className={`flex items-center gap-2 mb-4 border-b pb-3 transition-colors duration-300 ${
                isDark ? 'border-gray-700' : 'border-gray-200'
              }`}>
                <Award className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                <div className="min-w-0">
                  <div className={`font-bold text-lg truncate transition-colors duration-300 ${
                    isDark ? 'text-white' : 'text-gray-900'
                  }`}>{skill.title}</div>
                  <div className={`text-sm transition-colors duration-300 ${
                    isDark ? 'text-gray-300' : 'text-gray-600'
                  }`}>{skill.yearsOfExperience} years • {skill.level}</div>
                </div>
              </div>

              {/* Scrollable content */}
              <div className="overflow-y-auto max-h-[70vh] custom-scrollbar pr-2 relative"
                   style={{
                     scrollbarWidth: 'thin',
                     scrollbarColor: isDark ? '#4B5563 #1F2937' : '#9CA3AF #F3F4F6'
                   }}
              >
                {/* Scroll indicator */}
                <div className={`absolute top-1 right-1 text-xs opacity-50 z-10 px-2 py-1 rounded pointer-events-none transition-colors duration-300 ${
                  isDark ? 'text-gray-400 bg-gray-800/80' : 'text-gray-600 bg-gray-100/80'
                }`}>
                  ↕ Scroll
                </div>
                {/* Key Accomplishments */}
                <div className="mb-5">
                  <div className="flex items-center gap-2 mb-3">
                    <TrendingUp className="w-4 h-4 text-green-400 flex-shrink-0" />
                    <span className={`font-semibold text-sm transition-colors duration-300 ${
                      isDark ? 'text-white' : 'text-gray-900'
                    }`}>Key Accomplishments</span>
                  </div>
                  <ul className="text-sm space-y-3">
                    {skill.detailedAccomplishments.map((accomplishment, index) => (
                      <li key={index} className={`flex items-start gap-3 transition-colors duration-300 ${
                        isDark ? 'text-gray-300' : 'text-gray-700'
                      }`}>
                        <span className="text-green-400 mt-1 flex-shrink-0">•</span>
                        <span className="leading-relaxed">{accomplishment}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                {skill.technologies && (
                  <div className="mb-5">
                    <div className="flex items-center gap-2 mb-3">
                      <Code className="w-4 h-4 text-blue-400 flex-shrink-0" />
                      <span className={`font-semibold text-sm transition-colors duration-300 ${
                        isDark ? 'text-white' : 'text-gray-900'
                      }`}>Technologies</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {skill.technologies.map((tech, index) => (
                        <span key={index} className={`px-3 py-1.5 rounded-md text-xs whitespace-nowrap border transition-colors duration-300 ${
                          isDark 
                            ? 'bg-blue-600/20 text-blue-300 border-blue-600/30' 
                            : 'bg-blue-100 text-blue-700 border-blue-300'
                        }`}>
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Key Metrics */}
                {skill.keyMetrics && (
                  <div className="mb-5">
                    <div className="flex items-center gap-2 mb-3">
                      <Users className="w-4 h-4 text-purple-400 flex-shrink-0" />
                      <span className={`font-semibold text-sm transition-colors duration-300 ${
                        isDark ? 'text-white' : 'text-gray-900'
                      }`}>Impact & Metrics</span>
                    </div>
                    <ul className="text-sm space-y-3">
                      {skill.keyMetrics.map((metric, index) => (
                        <li key={index} className={`flex items-start gap-3 transition-colors duration-300 ${
                          isDark ? 'text-purple-300' : 'text-purple-700'
                        }`}>
                          <span className="text-purple-400 mt-1 flex-shrink-0">▸</span>
                          <span className="leading-relaxed">{metric}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Related Projects */}
                {relatedProjects.length > 0 && (
                  <div className="mb-5">
                    <div className="flex items-center gap-2 mb-3">
                      <BookOpen className="w-4 h-4 text-orange-400 flex-shrink-0" />
                      <span className={`font-semibold text-sm transition-colors duration-300 ${
                        isDark ? 'text-white' : 'text-gray-900'
                      }`}>Related Projects</span>
                    </div>
                    <div className="space-y-2">
                      {relatedProjects.map((project, index) => (
                        <div key={index} className={`rounded-lg p-3 border transition-colors duration-300 ${
                          isDark 
                            ? 'bg-gray-800/50 border-gray-700/50' 
                            : 'bg-gray-50 border-gray-200'
                        }`}>
                          <div className="flex items-start justify-between gap-2 mb-2">
                            <h4 className={`text-sm font-medium transition-colors duration-300 ${
                              isDark ? 'text-orange-300' : 'text-orange-600'
                            }`}>{project.title}</h4>
                            <div className="flex gap-1">
                              {project.githubUrl && (
                                <a
                                  href={project.githubUrl}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className={`transition-colors ${
                                    isDark ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'
                                  }`}
                                  onClick={(e) => e.stopPropagation()}
                                >
                                  <ExternalLink className="w-3 h-3" />
                                </a>
                              )}
                            </div>
                          </div>
                          <p className={`text-xs mb-2 line-clamp-2 transition-colors duration-300 ${
                            isDark ? 'text-gray-400' : 'text-gray-600'
                          }`}>{project.description}</p>
                          <div className={`flex items-center gap-2 text-xs transition-colors duration-300 ${
                            isDark ? 'text-gray-500' : 'text-gray-500'
                          }`}>
                            <span className={`px-2 py-0.5 rounded border transition-colors duration-300 ${
                              isDark 
                                ? 'bg-orange-600/20 text-orange-300 border-orange-600/30'
                                : 'bg-orange-100 text-orange-700 border-orange-300'
                            }`}>
                              {project.difficulty}
                            </span>
                            <span>{project.duration}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Free Learning Resources */}
                {skill.freeResources && skill.freeResources.length > 0 && (
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <BookOpen className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                      <span className={`font-semibold text-sm transition-colors duration-300 ${
                        isDark ? 'text-white' : 'text-gray-900'
                      }`}>Free Learning Resources</span>
                    </div>
                    <div className="space-y-2">
                      {skill.freeResources.map((resource, index) => (
                        <a
                          key={index}
                          href={resource.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`block rounded-lg p-3 border transition-all cursor-pointer ${
                            isDark
                              ? 'bg-gray-800/50 border-gray-700/50 hover:border-emerald-600/50 hover:bg-gray-800/70'
                              : 'bg-gray-50 border-gray-200 hover:border-emerald-300 hover:bg-gray-100'
                          }`}
                          onClick={(e) => e.stopPropagation()}
                        >
                          <div className="flex items-start justify-between gap-2 mb-2">
                            <h4 className={`text-sm font-medium transition-colors ${
                              isDark 
                                ? 'text-emerald-300 hover:text-emerald-200' 
                                : 'text-emerald-600 hover:text-emerald-700'
                            }`}>
                              {resource.title}
                            </h4>
                            <div className="flex gap-1">
                              <ExternalLink className={`w-3 h-3 flex-shrink-0 transition-colors ${
                                isDark 
                                  ? 'text-gray-400 hover:text-emerald-300' 
                                  : 'text-gray-600 hover:text-emerald-600'
                              }`} />
                            </div>
                          </div>
                          <p className={`text-xs mb-2 transition-colors duration-300 ${
                            isDark ? 'text-gray-400' : 'text-gray-600'
                          }`}>{resource.description}</p>
                          <div className="flex items-center gap-2 text-xs">
                            <span className={`px-2 py-0.5 rounded border capitalize transition-colors duration-300 ${
                              isDark
                                ? 'bg-emerald-600/20 text-emerald-300 border-emerald-600/30'
                                : 'bg-emerald-100 text-emerald-700 border-emerald-300'
                            }`}>
                              {resource.type}
                            </span>
                            <span className="text-emerald-400 font-medium">FREE</span>
                          </div>
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Close hint */}
              <div className={`text-center mt-4 pt-3 border-t transition-colors duration-300 ${
                isDark ? 'border-gray-700' : 'border-gray-200'
              }`}>
                <span className={`text-xs transition-colors duration-300 ${
                  isDark ? 'text-gray-400' : 'text-gray-600'
                }`}>Click outside or on another skill to close</span>
              </div>
            </div>
          </div>,
          getPortalContainer()
        )}

        {/* Simple hover tooltip for skills without detailed accomplishments */}
        {!skill.detailedAccomplishments && (
          <div className="absolute opacity-0 hover:opacity-100 transition-opacity duration-200 pointer-events-none" style={{ zIndex: 9999 }}>
            <div className={`${tooltipPositions.tooltipClass}`}>
              <div className={`text-xs rounded px-3 py-2 shadow-lg max-w-xs transition-colors duration-300 ${
                isDark 
                  ? 'bg-gray-900 text-white border border-gray-700' 
                  : 'bg-white text-gray-900 border border-gray-200'
              }`}>
                <div className="font-medium">{skill.title}</div>
                <div className={`mt-1 transition-colors duration-300 ${
                  isDark ? 'text-gray-300' : 'text-gray-600'
                }`}>{skill.description}</div>
                {skill.yearsOfExperience > 0 && (
                  <div className="text-yellow-400 mt-1">{skill.yearsOfExperience} years experience</div>
                )}
                {skill.freeResources && skill.freeResources.length > 0 && (
                  <div className="text-emerald-300 mt-1">
                    🎓 {skill.freeResources.length} free learning resources available
                  </div>
                )}
              </div>
              <div className={tooltipPositions.arrowClass}></div>
            </div>
          </div>
        )}
      </motion.div>
      
      <Handle type="source" position={Position.Bottom} />
      <Handle type="source" position={Position.Right} />
    </>
  );
};

export default SkillNode;
