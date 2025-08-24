import React from 'react';
import { motion } from 'framer-motion';

const TechStackSVG = ({ className = "", isDark = false }) => {
  return (
    <motion.svg
      viewBox="0 0 800 600"
      className={className}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Definitions for gradients and animations */}
      <defs>
        {/* Layer gradients */}
        <linearGradient id="presentation-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#1d4ed8" stopOpacity="0.6" />
        </linearGradient>
        <linearGradient id="edge-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#0891b2" stopOpacity="0.6" />
        </linearGradient>
        <linearGradient id="integration-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#7c3aed" stopOpacity="0.6" />
        </linearGradient>
        <linearGradient id="messaging-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#d97706" stopOpacity="0.6" />
        </linearGradient>
        <linearGradient id="business-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#10b981" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#059669" stopOpacity="0.6" />
        </linearGradient>
        <linearGradient id="dataaccess-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#ef4444" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#dc2626" stopOpacity="0.6" />
        </linearGradient>
        <linearGradient id="storage-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#7c3aed" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#6d28d9" stopOpacity="0.6" />
        </linearGradient>
        <linearGradient id="analytics-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#ec4899" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#db2777" stopOpacity="0.6" />
        </linearGradient>
        <linearGradient id="infrastructure-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#6b7280" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#4b5563" stopOpacity="0.6" />
        </linearGradient>

        {/* Glow filter */}
        <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
          <feMerge> 
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>

        {/* Drop shadow */}
        <filter id="dropshadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="2" stdDeviation="3" floodOpacity="0.2"/>
        </filter>
      </defs>

      {/* Background */}
      <rect width="800" height="600" fill={isDark ? 'rgba(17, 24, 39, 0.3)' : 'rgba(249, 250, 251, 0.3)'} rx="12"/>

      {/* Title */}
      <text x="400" y="30" textAnchor="middle" fontSize="20" fontWeight="600" 
            fill={isDark ? '#f3f4f6' : '#1f2937'}>
        Modern Software Stack
      </text>
      <text x="400" y="50" textAnchor="middle" fontSize="12" 
            fill={isDark ? '#9ca3af' : '#6b7280'}>
        From Presentation to Infrastructure
      </text>

      {/* Animated flow lines */}
      <g>
        {[80, 120, 160, 200, 240, 280, 320, 360].map((y, index) => (
          <motion.line
            key={`flow-${index}`}
            x1="400" y1={y + 30} x2="400" y2={y + 50}
            stroke={isDark ? '#4b5563' : '#d1d5db'}
            strokeWidth="2"
            strokeDasharray="8,4"
            initial={{ strokeDashoffset: 0 }}
            animate={{ strokeDashoffset: -24 }}
            transition={{ 
              duration: 2, 
              repeat: Infinity, 
              ease: "linear",
              delay: index * 0.2
            }}
          />
        ))}
      </g>

      {/* Data flow arrows */}
      <g>
        {[105, 145, 185, 225, 265, 305, 345, 385].map((y, index) => (
          <motion.polygon
            key={`arrow-${index}`}
            points="395,0 400,10 405,0"
            fill={isDark ? '#60a5fa' : '#3b82f6'}
            transform={`translate(0, ${y})`}
            initial={{ opacity: 0.3 }}
            animate={{ 
              y: [0, -8, 0],
              opacity: [0.3, 1, 0.3]
            }}
            transition={{ 
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: index * 0.2
            }}
          />
        ))}
      </g>

      {/* Layer boxes with technologies */}
      <g>
        {/* Presentation Layer */}
        <motion.g
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
        >
          <rect x="50" y="70" width="700" height="30" rx="6" 
                fill="url(#presentation-gradient)" filter="url(#dropshadow)"/>
          <text x="70" y="88" fontSize="14" fontWeight="600" fill="white">
            Presentation Layer
          </text>
          <text x="220" y="88" fontSize="11" fill="white" opacity="0.9">
            React • Angular • Vue.js • Flutter • Tailwind CSS • Swift • Kotlin
          </text>
        </motion.g>

        {/* Edge and Delivery */}
        <motion.g
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <rect x="50" y="110" width="700" height="30" rx="6" 
                fill="url(#edge-gradient)" filter="url(#dropshadow)"/>
          <text x="70" y="128" fontSize="14" fontWeight="600" fill="white">
            Edge and Delivery
          </text>
          <text x="220" y="128" fontSize="11" fill="white" opacity="0.9">
            Cloudflare • Akamai • Fastly • CloudFront
          </text>
        </motion.g>

        {/* Integration Layer */}
        <motion.g
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <rect x="50" y="150" width="700" height="30" rx="6" 
                fill="url(#integration-gradient)" filter="url(#dropshadow)"/>
          <text x="70" y="168" fontSize="14" fontWeight="600" fill="white">
            Integration Layer
          </text>
          <text x="220" y="168" fontSize="11" fill="white" opacity="0.9">
            gRPC • GraphQL • WebSocket • API Gateway
          </text>
        </motion.g>

        {/* Messaging & Async Processing */}
        <motion.g
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <rect x="50" y="190" width="700" height="30" rx="6" 
                fill="url(#messaging-gradient)" filter="url(#dropshadow)"/>
          <text x="70" y="208" fontSize="14" fontWeight="600" fill="white">
            Messaging & Async Processing
          </text>
          <text x="320" y="208" fontSize="11" fill="white" opacity="0.9">
            Kafka • RabbitMQ • SQS • Celery • Sidekiq
          </text>
        </motion.g>

        {/* Business Logic */}
        <motion.g
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <rect x="50" y="230" width="700" height="30" rx="6" 
                fill="url(#business-gradient)" filter="url(#dropshadow)"/>
          <text x="70" y="248" fontSize="14" fontWeight="600" fill="white">
            Business Logic
          </text>
          <text x="220" y="248" fontSize="11" fill="white" opacity="0.9">
            Spring • go-chi • Gorilla • Express • Django • FastAPI
          </text>
        </motion.g>

        {/* Data Access Layer */}
        <motion.g
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <rect x="50" y="270" width="700" height="30" rx="6" 
                fill="url(#dataaccess-gradient)" filter="url(#dropshadow)"/>
          <text x="70" y="288" fontSize="14" fontWeight="600" fill="white">
            Data Access Layer
          </text>
          <text x="220" y="288" fontSize="11" fill="white" opacity="0.9">
            Redis • Elasticsearch • Hibernate • Sequelize • SQLAlchemy • GORM
          </text>
        </motion.g>

        {/* Data Storage Layer */}
        <motion.g
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
        >
          <rect x="50" y="310" width="700" height="30" rx="6" 
                fill="url(#storage-gradient)" filter="url(#dropshadow)"/>
          <text x="70" y="328" fontSize="14" fontWeight="600" fill="white">
            Data Storage Layer
          </text>
          <text x="220" y="328" fontSize="11" fill="white" opacity="0.9">
            PostgreSQL • MySQL • MongoDB • BigQuery • Snowflake • DynamoDB
          </text>
        </motion.g>

        {/* Analytics and ML */}
        <motion.g
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <rect x="50" y="350" width="700" height="30" rx="6" 
                fill="url(#analytics-gradient)" filter="url(#dropshadow)"/>
          <text x="70" y="368" fontSize="14" fontWeight="600" fill="white">
            Analytics and ML
          </text>
          <text x="220" y="368" fontSize="11" fill="white" opacity="0.9">
            Spark • PyTorch • Databricks • Looker • TensorFlow
          </text>
        </motion.g>

        {/* Infrastructure Layer */}
        <motion.g
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
        >
          <rect x="50" y="390" width="700" height="30" rx="6" 
                fill="url(#infrastructure-gradient)" filter="url(#dropshadow)"/>
          <text x="70" y="408" fontSize="14" fontWeight="600" fill="white">
            Infrastructure Layer
          </text>
          <text x="220" y="408" fontSize="11" fill="white" opacity="0.9">
            AWS • Azure • GCP • Docker • Kubernetes
          </text>
        </motion.g>
      </g>

      {/* Continuous animation pulse effect */}
      <g>
        {[70, 110, 150, 190, 230, 270, 310, 350, 390].map((y, index) => (
          <motion.rect
            key={`pulse-${index}`}
            x="50" y={y} width="700" height="30" rx="6"
            fill="none"
            stroke="#60a5fa"
            strokeWidth="1"
            strokeOpacity="0.3"
            initial={{ scale: 1, strokeOpacity: 0 }}
            animate={{ 
              scale: [1, 1.01, 1],
              strokeOpacity: [0, 0.6, 0]
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: index * 0.3
            }}
          />
        ))}
      </g>

      {/* ByteByteGo attribution */}
      <text x="400" y="580" textAnchor="middle" fontSize="10" 
            fill={isDark ? '#6b7280' : '#9ca3af'}>
        Source: ByteByteGo
      </text>
    </motion.svg>
  );
};

export default TechStackSVG;
