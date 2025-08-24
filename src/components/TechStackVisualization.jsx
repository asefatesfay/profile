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
      technologies: [
        { name: 'React', level: 'expert', description: 'Advanced component architecture and hooks', url: 'https://react.dev' },
        { name: 'Next.js', level: 'expert', description: 'Full-stack React framework with SSR/SSG', url: 'https://nextjs.org' },
        { name: 'Vue.js', level: 'proficient', description: 'Progressive JavaScript framework', url: 'https://vuejs.org' },
        { name: 'Tailwind CSS', level: 'expert', description: 'Utility-first CSS framework', url: 'https://tailwindcss.com' },
        { name: 'TypeScript', level: 'expert', description: 'Type-safe JavaScript development', url: 'https://typescriptlang.org' },
        { name: 'Vite', level: 'proficient', description: 'Lightning-fast build tool', url: 'https://vitejs.dev' }
      ],
      color: '#3b82f6',
      y: 40
    },
    {
      id: 'edge',
      title: '⚡ Global Edge & Performance',
      description: 'Lightning-fast content delivery worldwide',
      technologies: [
        { name: 'Cloudflare', level: 'proficient', description: 'Global CDN and security services', url: 'https://cloudflare.com' },
        { name: 'Vercel Edge', level: 'expert', description: 'Edge computing platform', url: 'https://vercel.com' },
        { name: 'AWS CloudFront', level: 'proficient', description: 'Amazon\'s global CDN service', url: 'https://aws.amazon.com/cloudfront' },
        { name: 'Fastly', level: 'familiar', description: 'Real-time content delivery network', url: 'https://fastly.com' },
        { name: 'Netlify Edge', level: 'proficient', description: 'Edge functions and CDN', url: 'https://netlify.com' }
      ],
      color: '#06b6d4',
      y: 120
    },
    {
      id: 'integration',
      title: '🔗 API Orchestration & Integration',
      description: 'Seamless communication between services and systems',
      technologies: [
        { name: 'REST APIs', level: 'expert', description: 'RESTful web service design', url: 'https://restfulapi.net' },
        { name: 'GraphQL', level: 'proficient', description: 'Query language for APIs', url: 'https://graphql.org' },
        { name: 'gRPC', level: 'familiar', description: 'High-performance RPC framework', url: 'https://grpc.io' },
        { name: 'WebSocket', level: 'proficient', description: 'Real-time bidirectional communication', url: 'https://websockets.spec.whatwg.org' },
        { name: 'tRPC', level: 'proficient', description: 'End-to-end typesafe APIs', url: 'https://trpc.io' },
        { name: 'API Gateway', level: 'proficient', description: 'API management and routing', url: 'https://aws.amazon.com/api-gateway' }
      ],
      color: '#8b5cf6',
      y: 200
    },
    {
      id: 'security',
      title: '🛡️ Security & Authentication',
      description: 'Protecting applications and user data with enterprise-grade security',
      technologies: [
        { name: 'Auth0', level: 'proficient', description: 'Identity and access management platform', url: 'https://auth0.com' },
        { name: 'JWT', level: 'expert', description: 'JSON Web Tokens for secure authentication', url: 'https://jwt.io' },
        { name: 'OAuth 2.0', level: 'proficient', description: 'Authorization framework', url: 'https://oauth.net/2' },
        { name: 'SAML', level: 'familiar', description: 'Security Assertion Markup Language', url: 'https://saml.xml.org' },
        { name: 'Firebase Auth', level: 'proficient', description: 'Google\'s authentication service', url: 'https://firebase.google.com/docs/auth' },
        { name: 'AWS Cognito', level: 'proficient', description: 'Amazon\'s user identity service', url: 'https://aws.amazon.com/cognito' }
      ],
      color: '#dc2626',
      y: 280
    },
    {
      id: 'caching',
      title: '🚀 High-Performance Caching',
      description: 'Blazing-fast data access and session management',
      technologies: [
        { name: 'Redis', level: 'expert', description: 'In-memory data structure store', url: 'https://redis.io' },
        { name: 'Memcached', level: 'proficient', description: 'Distributed memory caching system', url: 'https://memcached.org' },
        { name: 'CDN Cache', level: 'proficient', description: 'Content delivery network caching', url: '#' },
        { name: 'Browser Cache', level: 'expert', description: 'Client-side caching strategies', url: '#' },
        { name: 'Service Worker', level: 'proficient', description: 'Background script for caching', url: 'https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API' }
      ],
      color: '#f97316',
      y: 360
    },
    {
      id: 'messaging',
      title: '📡 Event-Driven Architecture',
      description: 'Scalable async communication and real-time updates',
      technologies: [
        { name: 'Apache Kafka', level: 'proficient', description: 'Distributed event streaming platform', url: 'https://kafka.apache.org' },
        { name: 'RabbitMQ', level: 'proficient', description: 'Reliable message broker', url: 'https://rabbitmq.com' },
        { name: 'AWS SQS', level: 'proficient', description: 'Amazon Simple Queue Service', url: 'https://aws.amazon.com/sqs' },
        { name: 'WebSockets', level: 'expert', description: 'Real-time bidirectional communication', url: 'https://websockets.spec.whatwg.org' },
        { name: 'Server-Sent Events', level: 'proficient', description: 'Server-push technology for real-time updates', url: 'https://developer.mozilla.org/en-US/docs/Web/API/Server-sent_events' }
      ],
      color: '#f59e0b',
      y: 440
    },
    {
      id: 'business',
      title: '⚙️ Core Business Logic',
      description: 'Robust, scalable backend services powering applications',
      technologies: [
        { name: 'Node.js', level: 'expert', description: 'JavaScript runtime for scalable backend services', url: 'https://nodejs.org' },
        { name: 'Python', level: 'expert', description: 'Versatile language for web development and data science', url: 'https://python.org' },
        { name: 'Go', level: 'proficient', description: 'Fast, compiled language for microservices', url: 'https://golang.org' },
        { name: 'Java Spring', level: 'proficient', description: 'Enterprise Java application framework', url: 'https://spring.io' },
        { name: 'C# .NET', level: 'familiar', description: 'Microsoft\'s cross-platform development framework', url: 'https://dotnet.microsoft.com' },
        { name: 'Rust', level: 'familiar', description: 'Systems programming language focused on safety', url: 'https://rust-lang.org' }
      ],
      color: '#10b981',
      y: 520
    },
    {
      id: 'dataaccess',
      title: '🎯 Smart Data Access',
      description: 'Efficient, type-safe database interactions and query optimization',
      technologies: [
        { name: 'Prisma', level: 'expert', description: 'Next-generation ORM for TypeScript and Node.js', url: 'https://prisma.io' },
        { name: 'TypeORM', level: 'proficient', description: 'ORM for TypeScript and JavaScript', url: 'https://typeorm.io' },
        { name: 'SQLAlchemy', level: 'proficient', description: 'Python SQL toolkit and ORM', url: 'https://sqlalchemy.org' },
        { name: 'Hibernate', level: 'familiar', description: 'Object-relational mapping for Java', url: 'https://hibernate.org' },
        { name: 'GORM', level: 'familiar', description: 'ORM library for Golang', url: 'https://gorm.io' },
        { name: 'Mongoose', level: 'expert', description: 'MongoDB object modeling for Node.js', url: 'https://mongoosejs.com' }
      ],
      color: '#ef4444',
      y: 600
    },
    {
      id: 'search',
      title: '🔍 Search & Real-time Analytics',
      description: 'Intelligent search and lightning-fast data processing',
      technologies: [
        { name: 'Elasticsearch', level: 'proficient', description: 'Distributed search and analytics engine', url: 'https://elastic.co' },
        { name: 'Apache Solr', level: 'familiar', description: 'Open-source enterprise search platform', url: 'https://solr.apache.org' },
        { name: 'Algolia', level: 'proficient', description: 'Hosted search API delivering instant results', url: 'https://algolia.com' },
        { name: 'Apache Flink', level: 'familiar', description: 'Stream processing framework', url: 'https://flink.apache.org' },
        { name: 'Kafka Streams', level: 'proficient', description: 'Stream processing library for Apache Kafka', url: 'https://kafka.apache.org/documentation/streams' }
      ],
      color: '#8b5cf6',
      y: 680
    },
    {
      id: 'storage',
      title: '💾 Data Storage & Persistence',
      description: 'Reliable, scalable data storage for any workload',
      technologies: [
        { name: 'PostgreSQL', level: 'expert', description: 'Advanced open-source relational database', url: 'https://postgresql.org' },
        { name: 'MongoDB', level: 'expert', description: 'Document-oriented NoSQL database', url: 'https://mongodb.com' },
        { name: 'Redis', level: 'expert', description: 'In-memory data structure store', url: 'https://redis.io' },
        { name: 'AWS S3', level: 'proficient', description: 'Scalable object storage service', url: 'https://aws.amazon.com/s3' },
        { name: 'Snowflake', level: 'familiar', description: 'Cloud data warehouse platform', url: 'https://snowflake.com' },
        { name: 'Firebase', level: 'proficient', description: 'Google\'s mobile and web development platform', url: 'https://firebase.google.com' }
      ],
      color: '#7c3aed',
      y: 760
    },
    {
      id: 'analytics',
      title: '🧠 AI & Machine Learning',
      description: 'Intelligent insights and predictive analytics',
      technologies: [
        { name: 'Python ML Stack', level: 'proficient', description: 'NumPy, Pandas, Scikit-learn ecosystem', url: 'https://python.org' },
        { name: 'TensorFlow', level: 'familiar', description: 'Open-source machine learning framework', url: 'https://tensorflow.org' },
        { name: 'PyTorch', level: 'familiar', description: 'Deep learning framework with dynamic computation', url: 'https://pytorch.org' },
        { name: 'Apache Spark', level: 'proficient', description: 'Unified analytics engine for big data', url: 'https://spark.apache.org' },
        { name: 'Jupyter', level: 'expert', description: 'Interactive computing environment', url: 'https://jupyter.org' }
      ],
      color: '#ec4899',
      y: 840
    },
    {
      id: 'cicd',
      title: '🔄 DevOps & Automation',
      description: 'Streamlined deployment pipelines and infrastructure automation',
      technologies: [
        { name: 'GitLab CI', level: 'expert', description: 'Integrated CI/CD pipeline platform', url: 'https://gitlab.com' },
        { name: 'GitHub Actions', level: 'expert', description: 'Automated workflows for GitHub repositories', url: 'https://github.com/features/actions' },
        { name: 'Jenkins', level: 'proficient', description: 'Open-source automation server', url: 'https://jenkins.io' },
        { name: 'Docker', level: 'expert', description: 'Containerization platform', url: 'https://docker.com' },
        { name: 'Terraform', level: 'proficient', description: 'Infrastructure as code tool', url: 'https://terraform.io' }
      ],
      color: '#059669',
      y: 920
    },
    {
      id: 'monitoring',
      title: '📊 Observability & Monitoring',
      description: 'Comprehensive insights into application performance and health',
      technologies: [
        { name: 'Prometheus', level: 'proficient', description: 'Open-source monitoring and alerting toolkit', url: 'https://prometheus.io' },
        { name: 'Grafana', level: 'proficient', description: 'Open-source analytics and monitoring platform', url: 'https://grafana.com' },
        { name: 'New Relic', level: 'proficient', description: 'Application performance monitoring', url: 'https://newrelic.com' },
        { name: 'DataDog', level: 'familiar', description: 'Cloud monitoring and analytics platform', url: 'https://datadoghq.com' },
        { name: 'Sentry', level: 'expert', description: 'Error tracking and performance monitoring', url: 'https://sentry.io' },
        { name: 'ELK Stack', level: 'proficient', description: 'Elasticsearch, Logstash, and Kibana', url: 'https://elastic.co/elastic-stack' }
      ],
      color: '#7c2d12',
      y: 1000
    },
    {
      id: 'infrastructure',
      title: '☁️ Cloud Infrastructure',
      description: 'Scalable, resilient cloud-native architecture',
      technologies: [
        { name: 'AWS', level: 'expert', description: 'Amazon Web Services cloud platform', url: 'https://aws.amazon.com' },
        { name: 'Azure', level: 'proficient', description: 'Microsoft\'s cloud computing platform', url: 'https://azure.microsoft.com' },
        { name: 'GCP', level: 'familiar', description: 'Google Cloud Platform', url: 'https://cloud.google.com' },
        { name: 'Kubernetes', level: 'proficient', description: 'Container orchestration platform', url: 'https://kubernetes.io' },
        { name: 'Docker Swarm', level: 'proficient', description: 'Docker\'s native clustering solution', url: 'https://docs.docker.com/engine/swarm' },
        { name: 'Serverless', level: 'expert', description: 'Function-as-a-Service computing model', url: 'https://serverless.com' }
      ],
      color: '#6b7280',
      y: 1080
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
                  x="60"
                  y={layer.y}
                  width="680"
                  height="60"
                  rx="12"
                  fill={selectedLayer === layer.id ? `url(#gradient-${layer.id})` : (isDark ? '#374151' : '#f9fafb')}
                  stroke={layer.color}
                  filter="url(#dropshadow)"
                  className="cursor-pointer transition-all duration-300"
                  onClick={() => setSelectedLayer(selectedLayer === layer.id ? null : layer.id)}
                  animate={{
                    strokeOpacity: animationStep === index ? 1 : (selectedLayer === layer.id ? 0.9 : 0.6),
                    fillOpacity: animationStep === index ? 0.9 : (selectedLayer === layer.id ? 0.8 : 0.7),
                    strokeWidth: animationStep === index ? 3 : (selectedLayer === layer.id ? 2 : 1)
                  }}
                  whileHover={{ 
                    strokeOpacity: 0.8,
                    fillOpacity: 0.85,
                    transition: { duration: 0.2 }
                  }}
                  transition={{ duration: 0.3 }}
                />

                {/* Layer icon circle */}
                <motion.circle
                  cx="95"
                  cy={layer.y + 30}
                  r="16"
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
                  x="130"
                  y={layer.y + 22}
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
                  x="130"
                  y={layer.y + 38}
                  fill={isDark ? '#9ca3af' : '#6b7280'}
                  fontSize="12"
                  className="cursor-pointer select-none"
                  onClick={() => setSelectedLayer(selectedLayer === layer.id ? null : layer.id)}
                >
                  {layer.description}
                </text>

                {/* Technology count */}
                <text
                  x="130"
                  y={layer.y + 52}
                  fill={isDark ? '#9ca3af' : '#6b7280'}
                  fontSize="11"
                  className="cursor-pointer select-none"
                  onClick={() => setSelectedLayer(selectedLayer === layer.id ? null : layer.id)}
                >
                  {Array.isArray(layer.technologies) ? layer.technologies.length : layer.technologies.length} technologies
                </text>

                {/* Expand indicator */}
                <motion.text
                  x="710"
                  y={layer.y + 35}
                  fill={isDark ? '#9ca3af' : '#6b7280'}
                  fontSize="14"
                  className="cursor-pointer select-none"
                  onClick={() => setSelectedLayer(selectedLayer === layer.id ? null : layer.id)}
                  animate={{
                    rotate: selectedLayer === layer.id ? 180 : 0
                  }}
                  style={{ transformOrigin: '710px ' + (layer.y + 30) + 'px' }}
                >
                  ▼
                </motion.text>

                {/* Pulse effect for current animation step */}
                {animationStep === index && (
                  <motion.rect
                    x="58"
                    y={layer.y - 2}
                    width="684"
                    height="64"
                    rx="14"
                    fill="none"
                    stroke={layer.color}
                    strokeWidth="1"
                    initial={{ strokeOpacity: 0 }}
                    animate={{ 
                      strokeOpacity: [0, 0.8, 0]
                    }}
                    transition={{ 
                      duration: 1.2,
                      ease: "easeInOut"
                    }}
                    style={{
                      pointerEvents: 'none'
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
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {techStack.find(l => l.id === selectedLayer)?.technologies.map((tech, techIndex) => {
                  const isObject = typeof tech === 'object';
                  const techName = isObject ? tech.name : tech;
                  const techLevel = isObject ? tech.level : 'proficient';
                  const techDescription = isObject ? tech.description : '';
                  const techUrl = isObject ? tech.url : '#';
                  
                  const levelColors = {
                    expert: { bg: 'bg-green-100 dark:bg-green-900/30', text: 'text-green-700 dark:text-green-300', border: 'border-green-300 dark:border-green-600', dot: 'bg-green-500' },
                    proficient: { bg: 'bg-blue-100 dark:bg-blue-900/30', text: 'text-blue-700 dark:text-blue-300', border: 'border-blue-300 dark:border-blue-600', dot: 'bg-blue-500' },
                    familiar: { bg: 'bg-yellow-100 dark:bg-yellow-900/30', text: 'text-yellow-700 dark:text-yellow-300', border: 'border-yellow-300 dark:border-yellow-600', dot: 'bg-yellow-500' }
                  };
                  
                  const colors = levelColors[techLevel] || levelColors.proficient;
                  
                  return (
                    <motion.div
                      key={techName}
                      initial={{ opacity: 0, scale: 0.8, y: 20 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      transition={{ delay: techIndex * 0.05 }}
                      className={`group relative p-3 rounded-lg border transition-all duration-200 hover:scale-105 hover:shadow-md ${colors.bg} ${colors.border}`}
                    >
                      {/* Skill level indicator */}
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <div className={`w-2 h-2 rounded-full ${colors.dot}`}></div>
                          <span className={`text-xs font-medium uppercase tracking-wider ${colors.text}`}>
                            {techLevel}
                          </span>
                        </div>
                        {techUrl !== '#' && (
                          <motion.a
                            href={techUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`opacity-0 group-hover:opacity-100 transition-opacity text-xs ${colors.text} hover:underline`}
                            whileHover={{ scale: 1.1 }}
                          >
                            🔗
                          </motion.a>
                        )}
                      </div>
                      
                      {/* Technology name */}
                      <h5 className={`font-semibold text-sm mb-1 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                        {techName}
                      </h5>
                      
                      {/* Description */}
                      {techDescription && (
                        <p className={`text-xs ${isDark ? 'text-gray-400' : 'text-gray-600'} line-clamp-2`}>
                          {techDescription}
                        </p>
                      )}
                      
                      {/* Skill level visual indicator */}
                      <div className="flex items-center gap-1 mt-2">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <div
                            key={star}
                            className={`w-2 h-2 rounded-full ${
                              (techLevel === 'expert' && star <= 5) ||
                              (techLevel === 'proficient' && star <= 3) ||
                              (techLevel === 'familiar' && star <= 2)
                                ? colors.dot
                                : 'bg-gray-300 dark:bg-gray-600'
                            }`}
                          />
                        ))}
                      </div>
                      
                      {/* Hover overlay for additional info */}
                      {techDescription && (
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 0 }}
                          whileHover={{ opacity: 1 }}
                          className="absolute inset-0 bg-black/75 rounded-lg p-2 flex items-center justify-center opacity-0 transition-opacity"
                        >
                          <p className="text-white text-xs text-center leading-relaxed">
                            {techDescription}
                          </p>
                        </motion.div>
                      )}
                    </motion.div>
                  );
                })}
              </div>
              
              {/* Legend */}
              <div className="mt-4 pt-3 border-t border-gray-200 dark:border-gray-600">
                <div className="flex items-center justify-center gap-6 text-xs">
                  <div className="flex items-center gap-1">
                    <div className="w-2 h-2 rounded-full bg-green-500"></div>
                    <span className={isDark ? 'text-gray-400' : 'text-gray-600'}>Expert (5/5)</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                    <span className={isDark ? 'text-gray-400' : 'text-gray-600'}>Proficient (3/5)</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                    <span className={isDark ? 'text-gray-400' : 'text-gray-600'}>Familiar (2/5)</span>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default TechStackVisualization;
