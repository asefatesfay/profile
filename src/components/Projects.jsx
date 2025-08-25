import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ExternalLink, 
  Github, 
  Calendar, 
  Code, 
  CheckCircle, 
  Circle, 
  Filter,
  Target,
  Star,
  Layout,
  Database,
  Briefcase
} from 'lucide-react';
import { skillsData } from '../data/skillsData';
import { useTheme } from '../contexts/ThemeContext';

// Professional Architecture Diagram Component (No Flying Dots)
const ArchitectureDiagram = ({ architecture, isDark }) => {
  if (!architecture || !architecture.components) return null;

  // Parse architecture into sophisticated layers
  const parseArchitecture = (components) => {
    const layers = {
      frontend: [],
      cdn: [],
      gateway: [],
      services: [],
      messaging: [],
      data: [],
      external: [],
      monitoring: []
    };

    // Enhanced categorization
    components.forEach(component => {
      const name = component.name.toLowerCase();
      const tech = component.tech.toLowerCase();
      
      if (name.includes('frontend') || name.includes('client') || name.includes('spa') || name.includes('admin') ||
          tech.includes('react') || tech.includes('vue') || tech.includes('nextjs')) {
        layers.frontend.push(component);
      } else if (name.includes('cdn') || name.includes('cloudflare') || tech.includes('cdn')) {
        layers.cdn.push(component);
      } else if (name.includes('gateway') || name.includes('load balancer') || name.includes('proxy') ||
                 tech.includes('nginx') || tech.includes('kong') || tech.includes('api gateway')) {
        layers.gateway.push(component);
      } else if (name.includes('message') || name.includes('event') || name.includes('queue') || name.includes('kafka') ||
                 tech.includes('rabbitmq') || tech.includes('kafka') || tech.includes('redis pub/sub')) {
        layers.messaging.push(component);
      } else if (name.includes('database') || name.includes('storage') || name.includes('cache') ||
                 tech.includes('postgresql') || tech.includes('mongodb') || tech.includes('redis') ||
                 tech.includes('elasticsearch') || tech.includes('clickhouse')) {
        layers.data.push(component);
      } else if (name.includes('monitoring') || name.includes('logging') || name.includes('observability') ||
                 tech.includes('prometheus') || tech.includes('jaeger') || tech.includes('elk')) {
        layers.monitoring.push(component);
      } else if (name.includes('service') || name.includes('api') || name.includes('engine') ||
                 tech.includes('go') || tech.includes('node.js') || tech.includes('python')) {
        layers.services.push(component);
      } else {
        layers.external.push(component);
      }
    });

    // Create realistic data flow connections (no animations)
    const createConnections = () => {
      const cons = [];
      
      // Frontend to Gateway
      layers.frontend.forEach(frontend => {
        layers.gateway.forEach(gateway => {
          cons.push({
            from: frontend,
            to: gateway,
            type: 'https',
            protocol: 'HTTPS/REST',
            data: 'User Requests'
          });
        });
      });

      // Gateway to Services
      layers.gateway.forEach(gateway => {
        layers.services.forEach(service => {
          cons.push({
            from: gateway,
            to: service,
            type: 'internal',
            protocol: 'HTTP/gRPC',
            data: 'API Calls'
          });
        });
      });

      // Services to Data
      layers.services.forEach(service => {
        layers.data.forEach(dataStore => {
          if (service.name.toLowerCase().includes('user') && dataStore.tech.toLowerCase().includes('postgresql')) {
            cons.push({
              from: service,
              to: dataStore,
              type: 'database',
              protocol: 'SQL',
              data: 'User Data'
            });
          } else if (service.name.toLowerCase().includes('product') && dataStore.tech.toLowerCase().includes('elasticsearch')) {
            cons.push({
              from: service,
              to: dataStore,
              type: 'search',
              protocol: 'HTTP/JSON',
              data: 'Search Queries'
            });
          } else if (service.name.toLowerCase().includes('cart') && dataStore.tech.toLowerCase().includes('redis')) {
            cons.push({
              from: service,
              to: dataStore,
              type: 'cache',
              protocol: 'Redis Protocol',
              data: 'Session Data'
            });
          }
        });
      });

      // Services to Messaging
      layers.services.forEach(service => {
        layers.messaging.forEach(messaging => {
          cons.push({
            from: service,
            to: messaging,
            type: 'event',
            protocol: 'Event Streaming',
            data: 'Business Events'
          });
        });
      });

      // Messaging back to Services (event consumption)
      layers.messaging.forEach(messaging => {
        layers.services.filter(s => 
          s.name.toLowerCase().includes('notification') || 
          s.name.toLowerCase().includes('inventory') ||
          s.name.toLowerCase().includes('analytics')
        ).forEach(service => {
          cons.push({
            from: messaging,
            to: service,
            type: 'event_consume',
            protocol: 'Event Streaming',
            data: 'Event Processing'
          });
        });
      });

      // Services to External
      layers.services.forEach(service => {
        layers.external.forEach(external => {
          if (service.name.toLowerCase().includes('payment') && external.name.toLowerCase().includes('stripe')) {
            cons.push({
              from: service,
              to: external,
              type: 'external',
              protocol: 'HTTPS/REST',
              data: 'Payment Data'
            });
          } else if (service.name.toLowerCase().includes('shipping') && external.name.toLowerCase().includes('fedex')) {
            cons.push({
              from: service,
              to: external,
              type: 'external',
              protocol: 'HTTPS/REST',
              data: 'Shipping Info'
            });
          }
        });
      });

      return cons;
    };

    return { layers, connections: createConnections() };
  };

  const { layers, connections } = parseArchitecture(architecture.components);
  
  // Create sophisticated layout
  const generateLayout = () => {
    const layout = [];
    let currentY = 60;
    const svgWidth = 1200;
    const layerOrder = ['cdn', 'frontend', 'gateway', 'services', 'messaging', 'data', 'monitoring', 'external'];
    const layerBounds = [];

    layerOrder.forEach(layerType => {
      const layerComponents = layers[layerType];
      if (layerComponents.length === 0) return;

      const layerHeight = 100;
      const componentWidth = Math.min(200, (svgWidth - 100) / Math.max(1, layerComponents.length));
      const componentHeight = 80;
      const spacing = 20;
      
      const totalWidth = layerComponents.length * componentWidth + (layerComponents.length - 1) * spacing;
      const startX = (svgWidth - totalWidth) / 2;

      // Store layer boundaries for background styling
      layerBounds.push({
        type: layerType,
        x: startX - 20,
        y: currentY - 10,
        width: totalWidth + 40,
        height: layerHeight + 20,
        label: layerType.charAt(0).toUpperCase() + layerType.slice(1).replace(/([A-Z])/g, ' $1')
      });

      layerComponents.forEach((component, idx) => {
        const x = startX + idx * (componentWidth + spacing);
        const y = currentY + (layerHeight - componentHeight) / 2;
        
        layout.push({
          ...component,
          x,
          y,
          width: componentWidth,
          height: componentHeight,
          layer: layerType
        });
      });

      currentY += layerHeight + 40;
    });

    return { layout, layerBounds, svgHeight: currentY + 20 };
  };

  const { layout, layerBounds, svgHeight } = generateLayout();

  // Enhanced styling for different layer types
  const getLayerStyle = (type) => {
    const styles = {
      frontend: { 
        gradient: 'presentationGradient', 
        color: '#3b82f6', 
        icon: '🖥️',
        borderColor: '#1d4ed8'
      },
      cdn: {
        gradient: 'cdnGradient',
        color: '#14b8a6',
        icon: '🌐',
        borderColor: '#0f766e'
      },
      gateway: { 
        gradient: 'gatewayGradient', 
        color: '#f59e0b', 
        icon: '🚪',
        borderColor: '#d97706'
      },
      services: { 
        gradient: 'businessGradient', 
        color: '#10b981', 
        icon: '⚙️',
        borderColor: '#047857'
      },
      messaging: {
        gradient: 'messagingGradient',
        color: '#f97316',
        icon: '📡',
        borderColor: '#ea580c'
      },
      data: { 
        gradient: 'dataGradient', 
        color: '#8b5cf6', 
        icon: '💾',
        borderColor: '#6d28d9'
      },
      monitoring: { 
        gradient: 'infraGradient', 
        color: '#ef4444', 
        icon: '📊',
        borderColor: '#dc2626'
      },
      external: { 
        gradient: 'externalGradient', 
        color: '#6b7280', 
        icon: '🔗',
        borderColor: '#4b5563'
      }
    };
    return styles[type] || styles.external;
  };

  // Connection styles for different data flow types (static, no animations)
  const connectionStyles = {
    https: { color: '#10b981', width: 3, dashArray: 'none', opacity: 0.8 },
    internal: { color: '#3b82f6', width: 2, dashArray: '5,5', opacity: 0.7 },
    database: { color: '#8b5cf6', width: 2.5, dashArray: 'none', opacity: 0.8 },
    cache: { color: '#f59e0b', width: 2, dashArray: '3,3', opacity: 0.7 },
    search: { color: '#06b6d4', width: 2, dashArray: '7,3', opacity: 0.7 },
    event: { color: '#f97316', width: 2.5, dashArray: '10,5', opacity: 0.8 },
    event_consume: { color: '#ef4444', width: 2, dashArray: '2,8', opacity: 0.7 },
    external: { color: '#6b7280', width: 2, dashArray: '15,5,5,5', opacity: 0.6 }
  };

  return (
    <div className={`rounded-lg border shadow-inner transition-colors duration-300 ${
      isDark ? 'bg-gray-900 border-gray-700' : 'bg-gray-50 border-gray-200'
    }`}>
      <svg 
        viewBox={`0 0 1200 ${svgHeight}`}
        className="w-full h-auto"
        style={{ maxHeight: '800px' }}
      >
        {/* Enhanced definitions */}
        <defs>
          {/* Enhanced gradients */}
          <linearGradient id="presentationGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.95" />
            <stop offset="30%" stopColor="#1d4ed8" stopOpacity="0.85" />
            <stop offset="70%" stopColor="#1e40af" stopOpacity="0.75" />
            <stop offset="100%" stopColor="#1e3a8a" stopOpacity="0.65" />
          </linearGradient>
          <linearGradient id="gatewayGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.95" />
            <stop offset="50%" stopColor="#d97706" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#b45309" stopOpacity="0.75" />
          </linearGradient>
          <linearGradient id="businessGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#10b981" stopOpacity="0.95" />
            <stop offset="50%" stopColor="#047857" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#064e3b" stopOpacity="0.75" />
          </linearGradient>
          <linearGradient id="dataGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.95" />
            <stop offset="50%" stopColor="#6d28d9" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#581c87" stopOpacity="0.75" />
          </linearGradient>
          <linearGradient id="infraGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ef4444" stopOpacity="0.95" />
            <stop offset="50%" stopColor="#dc2626" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#b91c1c" stopOpacity="0.75" />
          </linearGradient>
          <linearGradient id="externalGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#6b7280" stopOpacity="0.95" />
            <stop offset="50%" stopColor="#4b5563" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#374151" stopOpacity="0.75" />
          </linearGradient>
          <linearGradient id="cdnGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#14b8a6" stopOpacity="0.95" />
            <stop offset="50%" stopColor="#0f766e" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#134e4a" stopOpacity="0.75" />
          </linearGradient>
          <linearGradient id="messagingGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f97316" stopOpacity="0.95" />
            <stop offset="50%" stopColor="#ea580c" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#c2410c" stopOpacity="0.75" />
          </linearGradient>

          {/* Enhanced filters */}
          <filter id="cardShadow" x="-50%" y="-50%" width="200%" height="200%">
            <feDropShadow dx="2" dy="4" stdDeviation="3" floodOpacity="0.3"/>
          </filter>
        </defs>

        {/* Background */}
        <rect 
          width="100%" 
          height="100%" 
          fill={isDark ? '#1f2937' : '#f9fafb'}
          className="transition-colors duration-300"
        />

        {/* Enhanced layer backgrounds */}
        {layerBounds.map((layer, idx) => {
          const layerStyle = getLayerStyle(layer.type);
          return (
            <g key={`layer-bg-${idx}`}>
              {/* Layer background */}
              <rect
                x={layer.x - 25}
                y={layer.y - 15}
                width={layer.width + 50}
                height={layer.height + 30}
                fill={`url(#${layerStyle.gradient})`}
                rx="12"
                opacity="0.1"
                filter="url(#cardShadow)"
                className="transition-all duration-300"
              />
              
              {/* Layer border */}
              <rect
                x={layer.x - 25}
                y={layer.y - 15}
                width={layer.width + 50}
                height={layer.height + 30}
                fill="none"
                stroke={layerStyle.borderColor}
                strokeWidth="2"
                strokeDasharray="5,5"
                rx="12"
                opacity="0.4"
                className="transition-all duration-300"
              />
            </g>
          );
        })}

        {/* Enhanced layer labels */}
        {layerBounds.map((layer, idx) => {
          const layerStyle = getLayerStyle(layer.type);
          return (
            <g key={`layer-label-${idx}`}>
              {/* Label background */}
              <rect
                x={layer.x - 20}
                y={layer.y - 35}
                width={Math.max(layer.label.length * 8 + 40, 120)}
                height="25"
                fill={layerStyle.color}
                rx="12"
                opacity="0.9"
                filter="url(#cardShadow)"
              />
              
              {/* Layer icon */}
              <text
                x={layer.x - 10}
                y={layer.y - 18}
                fontSize="14"
                textAnchor="start"
                fill="white"
                className="font-bold"
              >
                {layerStyle.icon}
              </text>
              
              {/* Label text */}
              <text
                x={layer.x + 10}
                y={layer.y - 18}
                fontSize="12"
                fontWeight="600"
                textAnchor="start"
                fill="white"
                className="font-semibold"
              >
                {layer.label}
              </text>
            </g>
          );
        })}

        {/* Static connection lines (no flying dots or animations) */}
        {connections.map((connection, idx) => {
          const style = connectionStyles[connection.type] || connectionStyles.internal;
          
          return (
            <g key={`connection-${idx}`}>
              {/* Clean connection path */}
              <path
                d={`M ${connection.from.x + connection.from.width/2} ${connection.from.y + connection.from.height} 
                   Q ${connection.from.x + connection.from.width/2} ${connection.from.y + connection.from.height + 30}
                   ${connection.to.x + connection.to.width/2} ${connection.to.y - 30}
                   T ${connection.to.x + connection.to.width/2} ${connection.to.y}`}
                fill="none"
                stroke={style.color}
                strokeWidth={style.width}
                strokeDasharray={style.dashArray}
                opacity={style.opacity}
                className="transition-all duration-300"
              />
              
              {/* Professional arrowhead */}
              <polygon
                points={`${connection.to.x + connection.to.width/2},${connection.to.y} 
                         ${connection.to.x + connection.to.width/2 - 6},${connection.to.y - 12} 
                         ${connection.to.x + connection.to.width/2 + 6},${connection.to.y - 12}`}
                fill={style.color}
                opacity={style.opacity * 0.9}
              />

              {/* Connection protocol label */}
              <g>
                <rect
                  x={connection.from.x + connection.from.width/2 - connection.protocol.length * 3}
                  y={connection.from.y + connection.from.height + 15}
                  width={connection.protocol.length * 6 + 10}
                  height="18"
                  fill={isDark ? '#374151' : '#f3f4f6'}
                  rx="8"
                  opacity="0.9"
                />
                <text
                  x={connection.from.x + connection.from.width/2}
                  y={connection.from.y + connection.from.height + 27}
                  fontSize="9"
                  fontWeight="500"
                  textAnchor="middle"
                  fill={isDark ? '#d1d5db' : '#374151'}
                  className="font-medium"
                >
                  {connection.protocol}
                </text>
              </g>

              {/* Data type indicator */}
              <g>
                <rect
                  x={connection.to.x + connection.to.width/2 - connection.data.length * 2.5}
                  y={connection.to.y - 25}
                  width={connection.data.length * 5 + 8}
                  height="15"
                  fill={style.color}
                  rx="7"
                  opacity="0.8"
                />
                <text
                  x={connection.to.x + connection.to.width/2}
                  y={connection.to.y - 16}
                  fontSize="8"
                  fontWeight="600"
                  textAnchor="middle"
                  fill="white"
                  className="font-semibold"
                >
                  {connection.data}
                </text>
              </g>
            </g>
          );
        })}

        {/* Professional components */}
        {layout.map((component, idx) => {
          const layerStyle = getLayerStyle(component.layer);
          
          return (
            <g key={`component-${idx}`}>
              {/* Component shadow */}
              <rect
                x={component.x + 2}
                y={component.y + 2}
                width={component.width}
                height={component.height}
                fill="rgba(0,0,0,0.1)"
                rx="8"
              />
              
              {/* Component background */}
              <rect
                x={component.x}
                y={component.y}
                width={component.width}
                height={component.height}
                fill={`url(#${layerStyle.gradient})`}
                stroke={layerStyle.borderColor}
                strokeWidth="2"
                rx="8"
                filter="url(#cardShadow)"
                className="transition-all duration-300"
              />

              {/* Tech badge */}
              <rect
                x={component.x + 8}
                y={component.y + 8}
                width={component.tech.length * 5 + 10}
                height="16"
                fill={isDark ? '#1f2937' : 'white'}
                rx="8"
                opacity="0.9"
              />
              <text
                x={component.x + 13}
                y={component.y + 18}
                fontSize="9"
                fontWeight="600"
                fill={layerStyle.color}
                className="font-semibold"
              >
                {component.tech}
              </text>

              {/* Component icon */}
              <text
                x={component.x + component.width - 25}
                y={component.y + 25}
                fontSize="16"
                textAnchor="middle"
                fill={layerStyle.color}
                opacity="0.7"
              >
                {layerStyle.icon}
              </text>

              {/* Component name */}
              <text
                x={component.x + component.width/2}
                y={component.y + component.height/2 - 5}
                fontSize="11"
                fontWeight="700"
                textAnchor="middle"
                fill={isDark ? '#f9fafb' : '#1f2937'}
                className="font-bold"
              >
                {component.name}
              </text>

              {/* System health indicators */}
              <g>
                {/* Health status */}
                <circle
                  cx={component.x + 12}
                  cy={component.y + component.height - 12}
                  r="4"
                  fill={component.health === 'healthy' ? '#10b981' : component.health === 'warning' ? '#f59e0b' : '#ef4444'}
                />
                
                {/* Load indicator */}
                <rect
                  x={component.x + 25}
                  y={component.y + component.height - 16}
                  width="30"
                  height="8"
                  fill={isDark ? '#374151' : '#e5e7eb'}
                  rx="4"
                />
                <rect
                  x={component.x + 25}
                  y={component.y + component.height - 16}
                  width={30 * (component.load || 0.5)}
                  height="8"
                  fill={component.load > 0.8 ? '#ef4444' : component.load > 0.6 ? '#f59e0b' : '#10b981'}
                  rx="4"
                />
              </g>

              {/* Instance count */}
              {component.instances && (
                <g>
                  <rect
                    x={component.x + component.width - 35}
                    y={component.y + component.height - 18}
                    width="25"
                    height="12"
                    fill={layerStyle.color}
                    rx="6"
                    opacity="0.8"
                  />
                  <text
                    x={component.x + component.width - 22.5}
                    y={component.y + component.height - 9}
                    fontSize="8"
                    fontWeight="600"
                    textAnchor="middle"
                    fill="white"
                    className="font-semibold"
                  >
                    ×{component.instances}
                  </text>
                </g>
              )}
            </g>
          );
        })}

        {/* Professional legend */}
        <g transform="translate(20, 20)">
          <rect
            width="180"
            height={Object.keys(connectionStyles).length * 25 + 40}
            fill={isDark ? '#374151' : '#f9fafb'}
            stroke={isDark ? '#4b5563' : '#d1d5db'}
            strokeWidth="1"
            rx="8"
            opacity="0.95"
            filter="url(#cardShadow)"
          />
          
          <text
            x="15"
            y="20"
            fontSize="12"
            fontWeight="700"
            fill={isDark ? '#f9fafb' : '#1f2937'}
            className="font-bold"
          >
            Connection Types
          </text>
          
          {Object.entries(connectionStyles).map(([type, style], idx) => (
            <g key={type} transform={`translate(15, ${35 + idx * 20})`}>
              <line
                x1="0"
                y1="0"
                x2="25"
                y2="0"
                stroke={style.color}
                strokeWidth={style.width}
                strokeDasharray={style.dashArray}
                opacity={style.opacity}
              />
              <text
                x="35"
                y="4"
                fontSize="10"
                fill={isDark ? '#d1d5db' : '#374151'}
                className="capitalize font-medium"
              >
                {type.replace('_', ' ')}
              </text>
            </g>
          ))}
        </g>
      </svg>
    </div>
  );
};

const Projects = () => {
  const { isDark } = useTheme();
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedDifficulty, setSelectedDifficulty] = useState('All');
  const [selectedStatus, setSelectedStatus] = useState('All');

  const projects = skillsData.projects || [];

  // Filter projects
  const filteredProjects = projects.filter(project => {
    const categoryMatch = selectedCategory === 'All' || project.category === selectedCategory;
    const difficultyMatch = selectedDifficulty === 'All' || project.difficulty === selectedDifficulty;
    const statusMatch = selectedStatus === 'All' || project.status === selectedStatus;
    return categoryMatch && difficultyMatch && statusMatch;
  });

  // Get unique values for filter options
  const categories = ['All', ...new Set(projects.map(p => p.category))];
  const difficulties = ['All', ...new Set(projects.map(p => p.difficulty))];
  const statuses = ['All', ...new Set(projects.map(p => p.status))];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  };

  const projectVariants = {
    hidden: { 
      opacity: 0, 
      y: 30,
      scale: 0.95
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const filterVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.4 }
    }
  };

  return (
    <section id="projects" className={`py-20 transition-colors duration-300 ${
      isDark ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'
    }`}>
      <div className="container mx-auto px-6">
        {/* Modern Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.div 
            variants={projectVariants}
            className="inline-block"
          >
            <div className={`inline-flex items-center gap-3 px-6 py-3 rounded-full mb-6 ${
              isDark ? 'bg-gradient-to-r from-blue-900/30 to-purple-900/30 border border-blue-800/30' 
                     : 'bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200/50'
            }`}>
              <Briefcase className={`w-5 h-5 ${isDark ? 'text-blue-400' : 'text-blue-600'}`} />
              <span className={`text-sm font-medium ${isDark ? 'text-blue-400' : 'text-blue-700'}`}>
                Portfolio Showcase
              </span>
            </div>
          </motion.div>
          
          <motion.h2 
            variants={projectVariants}
            className={`text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r ${
              isDark 
                ? 'from-white via-blue-100 to-purple-200 bg-clip-text text-transparent' 
                : 'from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent'
            }`}
          >
            Featured Work
          </motion.h2>
          
          <motion.p 
            variants={projectVariants}
            className={`text-xl max-w-3xl mx-auto leading-relaxed ${
              isDark ? 'text-gray-300' : 'text-gray-600'
            }`}
          >
            Crafting digital experiences through code. Each project represents a journey of 
            innovation, technical mastery, and creative problem-solving.
          </motion.p>
        </motion.div>

        {/* Modern Filter Pills */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
          className="mb-16"
        >
          <div className="text-center mb-8">
            <h3 className={`text-lg font-semibold mb-6 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>
              Explore by Category
            </h3>
            
            {/* Category Pills */}
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {categories.map(category => (
                <motion.button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                    selectedCategory === category
                      ? (isDark 
                          ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/25' 
                          : 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/25')
                      : (isDark 
                          ? 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 border border-gray-700' 
                          : 'bg-gray-100/80 text-gray-700 hover:bg-gray-200/80 border border-gray-200')
                  }`}
                >
                  {category}
                </motion.button>
              ))}
            </div>

            {/* Difficulty & Status Pills */}
            <div className="flex flex-wrap justify-center gap-6">
              <div className="flex items-center gap-3">
                <span className={`text-sm font-medium ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  Difficulty:
                </span>
                <div className="flex gap-2">
                  {difficulties.map(difficulty => (
                    <motion.button
                      key={difficulty}
                      onClick={() => setSelectedDifficulty(difficulty)}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                        selectedDifficulty === difficulty
                          ? (isDark ? 'bg-amber-600 text-white' : 'bg-amber-500 text-white')
                          : (isDark ? 'bg-gray-800 text-gray-400 hover:bg-gray-700' : 'bg-gray-100 text-gray-600 hover:bg-gray-200')
                      }`}
                    >
                      {difficulty}
                    </motion.button>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-3">
                <span className={`text-sm font-medium ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  Status:
                </span>
                <div className="flex gap-2">
                  {statuses.map(status => (
                    <motion.button
                      key={status}
                      onClick={() => setSelectedStatus(status)}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                        selectedStatus === status
                          ? (isDark ? 'bg-green-600 text-white' : 'bg-green-500 text-white')
                          : (isDark ? 'bg-gray-800 text-gray-400 hover:bg-gray-700' : 'bg-gray-100 text-gray-600 hover:bg-gray-200')
                      }`}
                    >
                      {status}
                    </motion.button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Modern Portfolio Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
          className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                variants={projectVariants}
                layout
                exit={{ opacity: 0, scale: 0.8, transition: { duration: 0.3 } }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className={`group relative rounded-3xl overflow-hidden transition-all duration-500 ${
                  isDark 
                    ? 'bg-gradient-to-br from-gray-800/90 to-gray-900/90 border border-gray-700/50 hover:border-gray-600/50' 
                    : 'bg-gradient-to-br from-white to-gray-50/50 border border-gray-200/50 hover:border-gray-300/50'
                } backdrop-blur-sm shadow-xl hover:shadow-2xl`}
                style={{
                  boxShadow: isDark 
                    ? '0 20px 40px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.05)' 
                    : '0 20px 40px rgba(0, 0, 0, 0.1), 0 0 0 1px rgba(0, 0, 0, 0.05)'
                }}
              >
                {/* Gradient Overlay for Visual Appeal */}
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
                  isDark 
                    ? 'bg-gradient-to-br from-blue-600/10 via-purple-600/5 to-transparent' 
                    : 'bg-gradient-to-br from-blue-500/5 via-purple-500/3 to-transparent'
                }`} />

                {/* Project Content */}
                <div className="relative p-8">
                  {/* Header with Status Badge */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex-1">
                      {/* Icon & Status */}
                      <div className="flex items-center gap-3 mb-4">
                        <div className={`p-3 rounded-2xl group-hover:scale-110 transition-transform duration-300 ${
                          isDark 
                            ? 'bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-blue-500/30' 
                            : 'bg-gradient-to-br from-blue-100 to-purple-100 border border-blue-200'
                        }`}>
                          <Layout className={`w-6 h-6 ${
                            isDark ? 'text-blue-400' : 'text-blue-600'
                          }`} />
                        </div>
                        
                        <div className="flex flex-col gap-2">
                          <span className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider ${
                            project.status === 'completed' 
                              ? (isDark ? 'bg-emerald-900/40 text-emerald-300 border border-emerald-500/30' : 'bg-emerald-100 text-emerald-700 border border-emerald-200')
                              : project.status === 'In Progress'
                              ? (isDark ? 'bg-amber-900/40 text-amber-300 border border-amber-500/30' : 'bg-amber-100 text-amber-700 border border-amber-200')
                              : (isDark ? 'bg-gray-700/40 text-gray-300 border border-gray-600/30' : 'bg-gray-100 text-gray-600 border border-gray-200')
                          }`}>
                            {project.status}
                          </span>
                          
                          <span className={`text-xs font-medium ${
                            project.difficulty === 'expert' 
                              ? (isDark ? 'text-red-400' : 'text-red-600')
                              : project.difficulty === 'intermediate'
                              ? (isDark ? 'text-amber-400' : 'text-amber-600')
                              : (isDark ? 'text-emerald-400' : 'text-emerald-600')
                          }`}>
                            {project.difficulty} level
                          </span>
                        </div>
                      </div>
                      
                      {/* Project Title */}
                      <h3 className={`text-2xl font-bold mb-4 group-hover:text-transparent group-hover:bg-clip-text transition-all duration-300 ${
                        isDark 
                          ? 'text-white group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400' 
                          : 'text-gray-900 group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600'
                      }`}>
                        {project.title}
                      </h3>
                      
                      {/* Description */}
                      <p className={`text-base leading-relaxed mb-6 ${
                        isDark ? 'text-gray-300' : 'text-gray-600'
                      }`}>
                        {project.description}
                      </p>
                    </div>
                  </div>

                  {/* Quick Stats */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className={`p-4 rounded-2xl ${
                      isDark ? 'bg-gray-800/50 border border-gray-700/50' : 'bg-gray-50/50 border border-gray-200/50'
                    }`}>
                      <div className="flex items-center gap-2 mb-1">
                        <Calendar className={`w-4 h-4 ${isDark ? 'text-blue-400' : 'text-blue-600'}`} />
                        <span className={`text-xs font-medium ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                          Duration
                        </span>
                      </div>
                      <span className={`text-sm font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                        {project.duration}
                      </span>
                    </div>
                    
                    <div className={`p-4 rounded-2xl ${
                      isDark ? 'bg-gray-800/50 border border-gray-700/50' : 'bg-gray-50/50 border border-gray-200/50'
                    }`}>
                      <div className="flex items-center gap-2 mb-1">
                        <Target className={`w-4 h-4 ${isDark ? 'text-purple-400' : 'text-purple-600'}`} />
                        <span className={`text-xs font-medium ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                          Tech Stack
                        </span>
                      </div>
                      <span className={`text-sm font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                        {(project.technologies || []).length} techs
                      </span>
                    </div>
                  </div>
                  {/* Modern Tech Stack Pills */}
                  <div className="mb-6">
                    <h4 className={`text-sm font-bold mb-4 flex items-center gap-2 ${
                      isDark ? 'text-gray-200' : 'text-gray-800'
                    }`}>
                      <Code className="w-4 h-4" />
                      Technology Stack
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {(project.technologies || []).slice(0, 6).map((tech) => (
                        <motion.span
                          key={tech}
                          whileHover={{ scale: 1.05 }}
                          className={`px-3 py-2 rounded-xl text-xs font-semibold transition-all duration-200 ${
                            isDark 
                              ? 'bg-gradient-to-r from-blue-900/40 to-purple-900/40 text-blue-300 border border-blue-700/30 hover:border-blue-600/50' 
                              : 'bg-gradient-to-r from-blue-50 to-purple-50 text-blue-700 border border-blue-200 hover:border-blue-300'
                          }`}
                        >
                          {tech}
                        </motion.span>
                      ))}
                      {(project.technologies || []).length > 6 && (
                        <span className={`px-3 py-2 rounded-xl text-xs font-medium ${
                          isDark ? 'text-gray-400 bg-gray-800' : 'text-gray-500 bg-gray-100'
                        }`}>
                          +{(project.technologies || []).length - 6} more
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Key Highlights */}
                  <div className="mb-8">
                    <h4 className={`text-sm font-bold mb-4 flex items-center gap-2 ${
                      isDark ? 'text-gray-200' : 'text-gray-800'
                    }`}>
                      <Star className="w-4 h-4" />
                      Key Highlights
                    </h4>
                    <div className="space-y-3">
                      {(project.features || []).slice(0, 3).map((feature, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.1 }}
                          className="flex items-start gap-3"
                        >
                          <div className={`p-1 rounded-full mt-1 ${
                            isDark ? 'bg-emerald-900/40' : 'bg-emerald-100'
                          }`}>
                            <CheckCircle className={`w-3 h-3 ${
                              isDark ? 'text-emerald-400' : 'text-emerald-600'
                            }`} />
                          </div>
                          <span className={`text-sm leading-relaxed ${
                            isDark ? 'text-gray-300' : 'text-gray-600'
                          }`}>
                            {feature}
                          </span>
                        </motion.div>
                      ))}
                      {(project.features && project.features.length > 3) && (
                        <div className={`text-xs font-medium ${
                          isDark ? 'text-gray-400' : 'text-gray-500'
                        }`}>
                          +{project.features.length - 3} additional features
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Architecture Diagram */}
                  {project.architecture && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      transition={{ duration: 0.5 }}
                      className="mb-8"
                    >
                      <h4 className={`text-sm font-bold mb-4 flex items-center gap-2 ${
                        isDark ? 'text-gray-200' : 'text-gray-800'
                      }`}>
                        <Database className="w-4 h-4" />
                        System Architecture
                      </h4>
                      <div className={`relative rounded-2xl overflow-hidden border ${
                        isDark ? 'border-gray-700/50 bg-gray-900/30' : 'border-gray-200/50 bg-gray-50/30'
                      }`}>
                        <ArchitectureDiagram architecture={project.architecture} isDark={isDark} />
                      </div>
                    </motion.div>
                  )}

                  {/* Action Buttons */}
                  <div className="flex items-center gap-3 pt-6 border-t border-gray-200/50 dark:border-gray-700/50">
                    {project.liveUrl && (
                      <motion.a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-300 flex-1 justify-center ${
                          isDark 
                            ? 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg shadow-blue-500/20' 
                            : 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg shadow-blue-500/20'
                        }`}
                      >
                        <ExternalLink className="w-4 h-4" />
                        Live Demo
                      </motion.a>
                    )}
                    
                    {project.githubUrl && (
                      <motion.a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-300 border ${
                          project.liveUrl ? '' : 'flex-1 justify-center'
                        } ${
                          isDark 
                            ? 'border-gray-600/50 text-gray-300 hover:bg-gray-700/50 hover:border-gray-500/50' 
                            : 'border-gray-300/50 text-gray-700 hover:bg-gray-50/50 hover:border-gray-400/50'
                        }`}
                      >
                        <Github className="w-4 h-4" />
                        {project.liveUrl ? 'Code' : 'View Code'}
                      </motion.a>
                    )}
                  </div>
                </div> {/* End Project Content */}
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-16"
          >
            <Circle className={`w-16 h-16 mx-auto mb-4 ${
              isDark ? 'text-gray-600' : 'text-gray-400'
            }`} />
            <h3 className={`text-xl font-semibold mb-2 ${
              isDark ? 'text-gray-300' : 'text-gray-600'
            }`}>
              No Projects Found
            </h3>
            <p className={`${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
              Try adjusting your filters to see more results.
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Projects;
