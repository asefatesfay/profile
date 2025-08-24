import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';
import { 
  Monitor, 
  Cloud, 
  Zap, 
  MessageSquare, 
  Cpu, 
  Database, 
  HardDrive, 
  Brain, 
  Server 
} from 'lucide-react';

const TechStackVisualization = () => {
  const { isDark } = useTheme();
  const [selectedLayer, setSelectedLayer] = useState(null);
  const [animationStep, setAnimationStep] = useState(0);

  const techStack = [
    {
      id: 'presentation',
      title: 'Presentation Layer (UI/UX)',
      icon: <Monitor className="w-6 h-6" />,
      technologies: ['React', 'Angular', 'Vue.js', 'Flutter', 'Tailwind CSS', 'Swift', 'Kotlin'],
      color: '#3b82f6', // Blue
      gradient: 'from-blue-500 to-blue-600',
      description: 'User interfaces and client-side applications'
    },
    {
      id: 'edge',
      title: 'Edge and Delivery',
      icon: <Cloud className="w-6 h-6" />,
      technologies: ['Cloudflare', 'Akamai', 'Fastly', 'CloudFront'],
      color: '#06b6d4', // Cyan
      gradient: 'from-cyan-500 to-cyan-600',
      description: 'Content delivery networks and edge computing'
    },
    {
      id: 'integration',
      title: 'Integration Layer',
      icon: <Zap className="w-6 h-6" />,
      technologies: ['gRPC', 'GraphQL', 'WebSocket', 'API Gateway'],
      color: '#8b5cf6', // Purple
      gradient: 'from-purple-500 to-purple-600',
      description: 'API management and service integration'
    },
    {
      id: 'messaging',
      title: 'Messaging & Async Processing',
      icon: <MessageSquare className="w-6 h-6" />,
      technologies: ['Kafka', 'RabbitMQ', 'SQS', 'Celery', 'Sidekiq'],
      color: '#f59e0b', // Amber
      gradient: 'from-amber-500 to-amber-600',
      description: 'Message queues and asynchronous processing'
    },
    {
      id: 'business',
      title: 'Business Logic',
      icon: <Cpu className="w-6 h-6" />,
      technologies: ['Spring', 'go-chi', 'Gorilla', 'Express', 'Django', 'FastAPI'],
      color: '#10b981', // Emerald
      gradient: 'from-emerald-500 to-emerald-600',
      description: 'Application servers and business logic'
    },
    {
      id: 'dataaccess',
      title: 'Data Access Layer',
      icon: <Database className="w-6 h-6" />,
      technologies: ['Redis', 'Elasticsearch', 'Hibernate', 'Sequelize', 'SQLAlchemy', 'GORM'],
      color: '#ef4444', // Red
      gradient: 'from-red-500 to-red-600',
      description: 'ORM, caching, and data access patterns'
    },
    {
      id: 'storage',
      title: 'Data Storage Layer',
      icon: <HardDrive className="w-6 h-6" />,
      technologies: ['PostgreSQL', 'MySQL', 'MongoDB', 'BigQuery', 'Snowflake', 'DynamoDB'],
      color: '#7c3aed', // Violet
      gradient: 'from-violet-500 to-violet-600',
      description: 'Databases and data warehouses'
    },
    {
      id: 'analytics',
      title: 'Analytics and ML',
      icon: <Brain className="w-6 h-6" />,
      technologies: ['Spark', 'PyTorch', 'Databricks', 'Looker', 'TensorFlow'],
      color: '#ec4899', // Pink
      gradient: 'from-pink-500 to-pink-600',
      description: 'Machine learning and data analytics'
    },
    {
      id: 'infrastructure',
      title: 'Infrastructure Layer',
      icon: <Server className="w-6 h-6" />,
      technologies: ['AWS', 'Azure', 'GCP', 'Docker', 'Kubernetes'],
      color: '#6b7280', // Gray
      gradient: 'from-gray-500 to-gray-600',
      description: 'Cloud platforms and containerization'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationStep((prev) => (prev + 1) % techStack.length);
    }, 800);

    return () => clearInterval(interval);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const layerVariants = {
    hidden: { 
      opacity: 0, 
      y: 20,
      scale: 0.9
    },
    visible: (index) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        delay: index * 0.1,
        duration: 0.5,
        ease: "easeOut"
      }
    }),
    hover: {
      scale: 1.02,
      y: -5,
      transition: {
        duration: 0.2
      }
    },
    tap: {
      scale: 0.98
    }
  };

  const techBadgeVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20
      }
    }
  };

  const flowLineVariants = {
    hidden: { pathLength: 0 },
    visible: {
      pathLength: 1,
      transition: {
        duration: 2,
        ease: "easeInOut"
      }
    }
  };

  return (
    <div className={`p-8 rounded-xl ${isDark ? 'bg-gray-800/50' : 'bg-white/50'} backdrop-blur-sm border ${isDark ? 'border-gray-700' : 'border-gray-200'}`}>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="space-y-6"
      >
        {/* Header */}
        <div className="text-center mb-8">
          <motion.h2 
            className={`text-3xl font-bold ${isDark ? 'text-white' : 'text-gray-900'} mb-4`}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Modern Software Stack
          </motion.h2>
          <motion.p 
            className={`text-lg ${isDark ? 'text-gray-300' : 'text-gray-600'} max-w-2xl mx-auto`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            A comprehensive view of the modern technology ecosystem from presentation to infrastructure
          </motion.p>
          <motion.div 
            className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'} mt-2`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            Source: ByteByteGo
          </motion.div>
        </div>

        {/* Tech Stack Layers */}
        <div className="space-y-4 relative">
          {/* Animated Flow Lines */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 0 }}>
            {techStack.slice(0, -1).map((_, index) => (
              <motion.line
                key={index}
                x1="50%"
                y1={`${((index + 1) / techStack.length) * 100 - 5}%`}
                x2="50%"
                y2={`${((index + 2) / techStack.length) * 100 - 15}%`}
                stroke={isDark ? '#4b5563' : '#d1d5db'}
                strokeWidth="2"
                strokeDasharray="5,5"
                variants={flowLineVariants}
                initial="hidden"
                animate="visible"
                style={{ 
                  opacity: animationStep > index ? 0.6 : 0.2,
                  transition: 'opacity 0.5s ease'
                }}
              />
            ))}
          </svg>

          {techStack.map((layer, index) => (
            <motion.div
              key={layer.id}
              custom={index}
              variants={layerVariants}
              initial="hidden"
              animate="visible"
              whileHover="hover"
              whileTap="tap"
              onClick={() => setSelectedLayer(selectedLayer === layer.id ? null : layer.id)}
              className={`relative p-6 rounded-lg cursor-pointer transition-all duration-300 ${
                isDark ? 'bg-gray-800/80' : 'bg-white/80'
              } backdrop-blur-sm border-2 ${
                selectedLayer === layer.id 
                  ? `border-${layer.color.replace('#', '')}` 
                  : isDark ? 'border-gray-700' : 'border-gray-200'
              } ${animationStep === index ? 'ring-2 ring-blue-400 ring-opacity-50' : ''}`}
              style={{ 
                boxShadow: animationStep === index 
                  ? `0 0 20px ${layer.color}40` 
                  : selectedLayer === layer.id 
                    ? `0 10px 30px ${layer.color}30` 
                    : 'none'
              }}
            >
              {/* Layer Header */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div 
                    className={`p-3 rounded-lg bg-gradient-to-r ${layer.gradient} text-white`}
                    style={{ backgroundColor: layer.color }}
                  >
                    {layer.icon}
                  </div>
                  <div>
                    <h3 className={`text-lg font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                      {layer.title}
                    </h3>
                    <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                      {layer.description}
                    </p>
                  </div>
                </div>
                <motion.div
                  animate={{ 
                    rotate: selectedLayer === layer.id ? 180 : 0,
                    scale: animationStep === index ? 1.2 : 1
                  }}
                  transition={{ duration: 0.3 }}
                  className={`w-6 h-6 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}
                >
                  ▼
                </motion.div>
              </div>

              {/* Technologies */}
              <AnimatePresence>
                {(selectedLayer === layer.id || animationStep === index) && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="mt-4"
                  >
                    <div className="flex flex-wrap gap-2">
                      {layer.technologies.map((tech, techIndex) => (
                        <motion.span
                          key={tech}
                          custom={techIndex}
                          variants={techBadgeVariants}
                          initial="hidden"
                          animate="visible"
                          transition={{ delay: techIndex * 0.05 }}
                          className={`px-3 py-1 text-sm rounded-full ${
                            isDark 
                              ? 'bg-gray-700 text-gray-300' 
                              : 'bg-gray-100 text-gray-700'
                          } hover:scale-105 transition-transform cursor-pointer`}
                          whileHover={{ scale: 1.05 }}
                          style={{
                            borderLeft: `3px solid ${layer.color}`
                          }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Animation Pulse Effect */}
              {animationStep === index && (
                <motion.div
                  className="absolute inset-0 rounded-lg pointer-events-none"
                  style={{ 
                    background: `linear-gradient(45deg, ${layer.color}10, transparent)`,
                    border: `1px solid ${layer.color}30`
                  }}
                  initial={{ opacity: 0, scale: 1 }}
                  animate={{ 
                    opacity: [0, 0.5, 0], 
                    scale: [1, 1.02, 1] 
                  }}
                  transition={{ 
                    duration: 0.8,
                    ease: "easeInOut"
                  }}
                />
              )}
            </motion.div>
          ))}
        </div>

        {/* Interactive Instructions */}
        <motion.div
          className={`text-center p-4 rounded-lg ${isDark ? 'bg-gray-700/50' : 'bg-gray-50/50'}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
        >
          <p className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
            💡 Click on any layer to explore technologies • Watch the animation flow from top to bottom
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default TechStackVisualization;
