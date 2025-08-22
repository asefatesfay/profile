import React, { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { Handle, Position } from 'reactflow';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, Clock, Circle, Award, TrendingUp, Users, Code, BookOpen } from 'lucide-react';

const SkillNode = ({ data }) => {
  const { skill, activeTooltip, setActiveTooltip } = data;
  const tooltipRef = useRef(null);
  const showDetailedTooltip = activeTooltip === skill.id;
  
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
    switch (status) {
      case 'completed':
        return <CheckCircle className="w-4 h-4 text-green-600" />;
      case 'in-progress':
        return <Clock className="w-4 h-4 text-blue-600" />;
      case 'planned':
        return <Circle className="w-4 h-4 text-gray-400" />;
      default:
        return <Circle className="w-4 h-4 text-gray-400" />;
    }
  };
  
  const getLevelColor = (level) => {
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
  };
  
  const getStatusBorderColor = (status) => {
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
  };

  return (
    <>
      <Handle type="target" position={Position.Top} />
      <Handle type="target" position={Position.Left} />
      
      <motion.div
        className={`
          px-4 py-3 rounded-lg border-2 shadow-sm cursor-pointer
          min-w-[180px] max-w-[200px]
          ${getStatusBorderColor(skill.status)}
        `}
        whileHover={{ 
          scale: 1.05, 
          boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
          zIndex: 5
        }}
        whileTap={{ scale: 0.98 }}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ 
          type: "spring", 
          stiffness: 300, 
          damping: 20,
          delay: Math.random() * 0.5 
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
        {/* Header with status and level */}
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-1">
            {getStatusIcon(skill.status)}
            <span className={`text-xs font-medium ${getLevelColor(skill.level)}`}>
              {skill.level}
            </span>
          </div>
          {skill.yearsOfExperience > 0 && (
            <div className="flex items-center gap-1">
              <span className="text-xs text-gray-600">{skill.yearsOfExperience}y exp</span>
            </div>
          )}
        </div>
        
        {/* Skill Title */}
        <div className="font-semibold text-gray-800 text-sm mb-2">
          {skill.title}
          {skill.learningRoadmap && (
            <div className="flex items-center gap-1 mt-1">
              <BookOpen className="w-3 h-3 text-blue-500" />
              <span className="text-xs text-blue-500 font-medium">Learning Roadmap Available</span>
            </div>
          )}
        </div>
        
        {/* Description (truncated) */}
        <div className="text-xs text-gray-600 line-clamp-2">
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
              backgroundColor: 'rgba(0,0,0,0.3)',
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
              className="relative z-10 bg-gray-900 text-white rounded-lg p-5 shadow-xl w-96 sm:w-[400px] md:w-[450px] max-h-[90vh] overflow-hidden border border-gray-700"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex items-center gap-2 mb-4 border-b border-gray-700 pb-3">
                <Award className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                <div className="min-w-0">
                  <div className="font-bold text-lg truncate">{skill.title}</div>
                  <div className="text-sm text-gray-300">{skill.yearsOfExperience} years • {skill.level}</div>
                </div>
              </div>

              {/* Scrollable content */}
              <div className="overflow-y-auto max-h-[70vh] custom-scrollbar pr-2 relative"
                   style={{
                     scrollbarWidth: 'thin',
                     scrollbarColor: '#4B5563 #1F2937'
                   }}
              >
                {/* Scroll indicator */}
                <div className="absolute top-1 right-1 text-gray-500 text-xs opacity-50 z-10 bg-gray-800/80 px-2 py-1 rounded pointer-events-none">
                  ↕ Scroll
                </div>
                {/* Key Accomplishments */}
                <div className="mb-5">
                  <div className="flex items-center gap-2 mb-3">
                    <TrendingUp className="w-4 h-4 text-green-400 flex-shrink-0" />
                    <span className="font-semibold text-sm">Key Accomplishments</span>
                  </div>
                  <ul className="text-sm space-y-3">
                    {skill.detailedAccomplishments.map((accomplishment, index) => (
                      <li key={index} className="text-gray-300 flex items-start gap-3">
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
                      <span className="font-semibold text-sm">Technologies</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {skill.technologies.map((tech, index) => (
                        <span key={index} className="bg-blue-600/20 text-blue-300 px-3 py-1.5 rounded-md text-xs whitespace-nowrap border border-blue-600/30">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Key Metrics */}
                {skill.keyMetrics && (
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <Users className="w-4 h-4 text-purple-400 flex-shrink-0" />
                      <span className="font-semibold text-sm">Impact & Metrics</span>
                    </div>
                    <ul className="text-sm space-y-3">
                      {skill.keyMetrics.map((metric, index) => (
                        <li key={index} className="text-purple-300 flex items-start gap-3">
                          <span className="text-purple-400 mt-1 flex-shrink-0">▸</span>
                          <span className="leading-relaxed">{metric}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* Close hint */}
              <div className="text-center mt-4 pt-3 border-t border-gray-700">
                <span className="text-xs text-gray-400">Click outside or on another skill to close</span>
              </div>
            </div>
          </div>,
          getPortalContainer()
        )}

        {/* Simple hover tooltip for skills without detailed accomplishments */}
        {!skill.detailedAccomplishments && (
          <div className="absolute opacity-0 hover:opacity-100 transition-opacity duration-200 pointer-events-none" style={{ zIndex: 9999 }}>
            <div className={`${tooltipPositions.tooltipClass}`}>
              <div className="bg-gray-900 text-white text-xs rounded px-3 py-2 shadow-lg max-w-xs">
                <div className="font-medium">{skill.title}</div>
                <div className="text-gray-300 mt-1">{skill.description}</div>
                {skill.yearsOfExperience > 0 && (
                  <div className="text-yellow-300 mt-1">{skill.yearsOfExperience} years experience</div>
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
