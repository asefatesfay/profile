import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';

const TechStackVisualization = () => {
  const { isDark } = useTheme();
  const [selectedLayer, setSelectedLayer] = useState(null);
  const [animationStep, setAnimationStep] = useState(0);

  const techStack = [
    {
      id: 'presentation',
      title: '🎨 User Experience & Interface',
      description: 'Crafting beautiful, responsive experiences that users love',
      technologies: ['React', 'Next.js', 'Vue.js', 'Tailwind CSS', 'TypeScript', 'Vite'],
      color: '#3b82f6',
      y: 50
    },
    {
      id: 'edge',
      title: '⚡ Global Edge & Performance',
      description: 'Lightning-fast content delivery worldwide',
      technologies: ['Cloudflare', 'Vercel Edge', 'AWS CloudFront', 'Fastly', 'Netlify Edge'],
      color: '#06b6d4',
      y: 130
    },
    {
      id: 'integration',
      title: '🔗 API Orchestration & Integration',
      description: 'Seamless communication between services and systems',
      technologies: ['REST APIs', 'GraphQL', 'gRPC', 'WebSocket', 'tRPC', 'API Gateway'],
      color: '#8b5cf6',
      y: 210
    },
    {
      id: 'security',
      title: '🛡️ Security & Authentication',
      description: 'Protecting applications and user data with enterprise-grade security',
      technologies: ['Auth0', 'JWT', 'OAuth 2.0', 'SAML', 'Firebase Auth', 'AWS Cognito'],
      color: '#dc2626',
      y: 290
    },
    {
      id: 'caching',
      title: '🚀 High-Performance Caching',
      description: 'Blazing-fast data access and session management',
      technologies: ['Redis', 'Memcached', 'CDN Cache', 'Browser Cache', 'Service Worker'],
      color: '#f97316',
      y: 370
    },
    {
      id: 'messaging',
      title: '📡 Event-Driven Architecture',
      description: 'Scalable async communication and real-time updates',
      technologies: ['Apache Kafka', 'RabbitMQ', 'AWS SQS', 'WebSockets', 'Server-Sent Events'],
      color: '#f59e0b',
      y: 450
    },
    {
      id: 'business',
      title: '⚙️ Core Business Logic',
      description: 'Robust, scalable backend services powering applications',
      technologies: ['Node.js', 'Python', 'Go', 'Java Spring', 'C# .NET', 'Rust'],
      color: '#10b981',
      y: 530
    },
    {
      id: 'dataaccess',
      title: '🎯 Smart Data Access',
      description: 'Efficient, type-safe database interactions and query optimization',
      technologies: ['Prisma', 'TypeORM', 'SQLAlchemy', 'Hibernate', 'GORM', 'Mongoose'],
      color: '#ef4444',
      y: 610
    },
    {
      id: 'search',
      title: '🔍 Search & Real-time Analytics',
      description: 'Intelligent search and lightning-fast data processing',
      technologies: ['Elasticsearch', 'Apache Solr', 'Algolia', 'Apache Flink', 'Kafka Streams'],
      color: '#8b5cf6',
      y: 690
    },
    {
      id: 'storage',
      title: '💾 Data Storage & Persistence',
      description: 'Reliable, scalable data storage for any workload',
      technologies: ['PostgreSQL', 'MongoDB', 'Redis', 'AWS S3', 'Snowflake', 'Firebase'],
      color: '#7c3aed',
      y: 770
    },
    {
      id: 'analytics',
      title: '🧠 AI & Machine Learning',
      description: 'Intelligent insights and predictive analytics',
      technologies: ['Python ML Stack', 'TensorFlow', 'PyTorch', 'Apache Spark', 'Jupyter'],
      color: '#ec4899',
      y: 850
    },
    {
      id: 'cicd',
      title: '🔄 DevOps & Automation',
      description: 'Streamlined deployment pipelines and infrastructure automation',
      technologies: ['GitLab CI', 'GitHub Actions', 'Jenkins', 'Docker', 'Terraform'],
      color: '#059669',
      y: 930
    },
    {
      id: 'monitoring',
      title: '📊 Observability & Monitoring',
      description: 'Comprehensive insights into application performance and health',
      technologies: ['Prometheus', 'Grafana', 'New Relic', 'DataDog', 'Sentry', 'ELK Stack'],
      color: '#7c2d12',
      y: 1010
    },
    {
      id: 'infrastructure',
      title: '☁️ Cloud Infrastructure',
      description: 'Scalable, resilient cloud-native architecture',
      technologies: ['AWS', 'Azure', 'GCP', 'Kubernetes', 'Docker Swarm', 'Serverless'],
      color: '#6b7280',
      y: 1090
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationStep((prev) => (prev + 1) % techStack.length);
    }, 1200);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`rounded-xl ${isDark ? 'bg-gray-800/50' : 'bg-white/50'} backdrop-blur-sm border ${isDark ? 'border-gray-700' : 'border-gray-200'} overflow-hidden`}>
      {/* Compact Header */}
      <div className="text-center py-4 px-6 border-b border-gray-200 dark:border-gray-700">
        <h2 className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-gray-900'} mb-1`}>
          Modern Software Stack
        </h2>
        <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
          Source: ByteByteGo • Click layers to explore technologies
        </p>
      </div>

      {/* SVG Visualization */}
      <div className="p-6">
        <div className="relative">
          <svg 
            viewBox="0 0 800 1200" 
            className="w-full h-auto"
            style={{ maxHeight: '1200px' }}
          >
            {/* Definitions for gradients and effects */}
            <defs>
              {techStack.map((layer, index) => (
                <linearGradient key={layer.id} id={`gradient-${layer.id}`} x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor={layer.color} stopOpacity="0.8" />
                  <stop offset="100%" stopColor={layer.color} stopOpacity="0.6" />
                </linearGradient>
              ))}
              
              {/* Glow filter */}
              <filter id="glow">
                <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                <feMerge> 
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
              
              {/* Drop shadow filter */}
              <filter id="dropshadow" x="-20%" y="-20%" width="140%" height="140%">
                <feDropShadow dx="0" dy="2" stdDeviation="3" floodOpacity="0.3"/>
              </filter>
            </defs>

            {/* Animated flow lines */}
            {techStack.slice(0, -1).map((layer, index) => (
              <motion.line
                key={`flow-${index}`}
                x1="400"
                y1={layer.y + 40}
                x2="400"
                y2={techStack[index + 1].y - 10}
                stroke={isDark ? '#4b5563' : '#d1d5db'}
                strokeWidth="2"
                strokeDasharray="8,4"
                initial={{ strokeDashoffset: 0 }}
                animate={{ 
                  strokeDashoffset: -12,
                  opacity: animationStep > index ? 0.8 : 0.3
                }}
                transition={{ 
                  strokeDashoffset: { duration: 2, repeat: Infinity, ease: "linear" },
                  opacity: { duration: 0.5 }
                }}
              />
            ))}

            {/* Data flow arrows */}
            {techStack.slice(0, -1).map((layer, index) => (
              <motion.polygon
                key={`arrow-${index}`}
                points="395,{techStack[index + 1].y - 15} 400,{techStack[index + 1].y - 5} 405,{techStack[index + 1].y - 15}"
                fill={animationStep > index ? (isDark ? '#60a5fa' : '#3b82f6') : (isDark ? '#4b5563' : '#d1d5db')}
                initial={{ y: 0 }}
                animate={{ 
                  y: [0, -3, 0],
                  opacity: animationStep > index ? 1 : 0.3
                }}
                transition={{ 
                  y: { duration: 1, repeat: Infinity, ease: "easeInOut" },
                  opacity: { duration: 0.5 }
                }}
                transform={`translate(0, ${techStack[index + 1].y - 15})`}
              />
            ))}

            {/* Layer boxes */}
            {techStack.map((layer, index) => (
              <g key={layer.id}>
                {/* Main layer rectangle */}
                <motion.rect
                  x="50"
                  y={layer.y}
                  width="700"
                  height="50"
                  rx="8"
                  fill={selectedLayer === layer.id ? `url(#gradient-${layer.id})` : (isDark ? '#374151' : '#f9fafb')}
                  stroke={layer.color}
                  strokeWidth={animationStep === index ? "3" : "1"}
                  filter={animationStep === index ? "url(#glow)" : "url(#dropshadow)"}
                  className="cursor-pointer transition-all duration-300"
                  onClick={() => setSelectedLayer(selectedLayer === layer.id ? null : layer.id)}
                  animate={{
                    strokeOpacity: animationStep === index ? 1 : 0.5,
                    fillOpacity: animationStep === index ? 0.9 : (selectedLayer === layer.id ? 0.8 : 0.7)
                  }}
                  whileHover={{ scale: 1.02, y: -2 }}
                  transition={{ duration: 0.2 }}
                />

                {/* Layer icon circle */}
                <motion.circle
                  cx="80"
                  cy={layer.y + 25}
                  r="15"
                  fill={layer.color}
                  className="cursor-pointer"
                  onClick={() => setSelectedLayer(selectedLayer === layer.id ? null : layer.id)}
                  animate={{
                    scale: animationStep === index ? 1.2 : 1,
                    opacity: animationStep === index ? 1 : 0.8
                  }}
                  transition={{ duration: 0.3 }}
                />

                {/* Layer title */}
                <motion.text
                  x="110"
                  y={layer.y + 20}
                  fill={isDark ? '#f3f4f6' : '#1f2937'}
                  fontSize="16"
                  fontWeight="600"
                  className="cursor-pointer select-none"
                  onClick={() => setSelectedLayer(selectedLayer === layer.id ? null : layer.id)}
                  animate={{
                    fontSize: animationStep === index ? 17 : 16
                  }}
                >
                  {layer.title}
                </motion.text>

                {/* Description */}
                <text
                  x="110"
                  y={layer.y + 35}
                  fill={isDark ? '#9ca3af' : '#6b7280'}
                  fontSize="11"
                  className="cursor-pointer select-none"
                  onClick={() => setSelectedLayer(selectedLayer === layer.id ? null : layer.id)}
                >
                  {layer.description}
                </text>

                {/* Technology count */}
                <text
                  x="110"
                  y={layer.y + 50}
                  fill={isDark ? '#9ca3af' : '#6b7280'}
                  fontSize="12"
                  className="cursor-pointer select-none"
                  onClick={() => setSelectedLayer(selectedLayer === layer.id ? null : layer.id)}
                >
                  {layer.technologies.length} technologies
                </text>

                {/* Expand indicator */}
                <motion.text
                  x="720"
                  y={layer.y + 40}
                  fill={isDark ? '#9ca3af' : '#6b7280'}
                  fontSize="14"
                  className="cursor-pointer select-none"
                  onClick={() => setSelectedLayer(selectedLayer === layer.id ? null : layer.id)}
                  animate={{
                    rotate: selectedLayer === layer.id ? 180 : 0
                  }}
                  style={{ transformOrigin: '720px ' + (layer.y + 35) + 'px' }}
                >
                  ▼
                </motion.text>

                {/* Pulse effect for current animation step */}
                {animationStep === index && (
                  <motion.rect
                    x="50"
                    y={layer.y}
                    width="700"
                    height="50"
                    rx="8"
                    fill="none"
                    stroke={layer.color}
                    strokeWidth="2"
                    strokeOpacity="0.6"
                    initial={{ scale: 1, strokeOpacity: 0.6 }}
                    animate={{ 
                      scale: [1, 1.05, 1],
                      strokeOpacity: [0.6, 1, 0.6]
                    }}
                    transition={{ 
                      duration: 1.2,
                      ease: "easeInOut"
                    }}
                  />
                )}
              </g>
            ))}
          </svg>
        </div>

        {/* Technology badges overlay - positioned outside SVG container */}
        <AnimatePresence>
          {selectedLayer && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              className="mt-4 bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm border border-gray-200 dark:border-gray-600 rounded-lg p-4 shadow-lg"
            >
              <div className="flex justify-between items-center mb-3">
                <div>
                  <h4 className={`font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    {techStack.find(l => l.id === selectedLayer)?.title}
                  </h4>
                  <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'} mt-1`}>
                    {techStack.find(l => l.id === selectedLayer)?.description}
                  </p>
                </div>
                <button
                  onClick={() => setSelectedLayer(null)}
                  className={`text-sm px-2 py-1 rounded transition-colors ${isDark ? 'text-gray-400 hover:text-white hover:bg-gray-700' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'}`}
                >
                  ✕
                </button>
              </div>
              <div className="flex flex-wrap gap-2">
                {techStack.find(l => l.id === selectedLayer)?.technologies.map((tech, techIndex) => (
                  <motion.span
                    key={tech}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: techIndex * 0.05 }}
                    className={`px-3 py-1 text-sm rounded-full ${
                      isDark 
                        ? 'bg-gray-700 text-gray-300 border border-gray-600' 
                        : 'bg-gray-100 text-gray-700 border border-gray-300'
                    } hover:scale-105 transition-transform cursor-pointer`}
                    style={{
                      borderLeftColor: techStack.find(l => l.id === selectedLayer)?.color,
                      borderLeftWidth: '3px'
                    }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default TechStackVisualization;
