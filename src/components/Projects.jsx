import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform, useInView } from 'framer-motion';
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
  Briefcase,
  X,
  Maximize2,
  ZoomIn,
  Search,
  TrendingUp,
  Users,
  Clock,
  Tag,
  ChevronDown,
  ChevronUp,
  Settings,
  TestTube,
  Rocket,
  GitBranch,
  Cpu,
  Shield,
  Activity,
  Zap,
  Globe,
  Lock,
  AlertTriangle,
  Info,
  BarChart3,
  Network,
  DollarSign
} from 'lucide-react';
import { skillsData } from '../data/skillsData';
import { useTheme } from '../contexts/ThemeContext';

// Add this as a style tag at the top of the component or in your CSS file
const floatingAnimation = `
  @keyframes subtle-float {
    0%, 100% { transform: translateY(0px) rotate(0deg); }
    25% { transform: translateY(-10px) rotate(1deg); }
    50% { transform: translateY(-5px) rotate(0deg); }
    75% { transform: translateY(-15px) rotate(-1deg); }
  }
  
  @keyframes float {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-3px); }
  }
  
  @keyframes pulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.8; }
  }
  
  .cost-float {
    animation: float 3s ease-in-out infinite;
  }
  
  .cost-pulse {
    animation: pulse 2s ease-in-out infinite;
  }
`;

// Professional Architecture Diagram Component with Enterprise Features
const ArchitectureDiagram = ({ architecture, isDark, isModal = false }) => {
  if (!architecture || !architecture.components) return null;

  // Performance metrics for professional display
  const getPerformanceMetrics = (component) => {
    const baseMetrics = {
      latency: Math.floor(Math.random() * 100) + 10,
      throughput: Math.floor(Math.random() * 1000) + 100,
      availability: 99.5 + Math.random() * 0.49,
      errorRate: Math.random() * 0.5
    };
    
    // Adjust metrics based on component type
    if (component.tech.toLowerCase().includes('redis') || component.tech.toLowerCase().includes('cache')) {
      baseMetrics.latency = Math.floor(Math.random() * 5) + 1;
      baseMetrics.throughput *= 5;
    }
    if (component.tech.toLowerCase().includes('cdn')) {
      baseMetrics.latency = Math.floor(Math.random() * 20) + 5;
      baseMetrics.availability = 99.9 + Math.random() * 0.09;
    }
    
    return baseMetrics;
  };

  // Security and compliance indicators
  const getSecurityLevel = (component) => {
    const securityLevels = ['high', 'medium', 'critical'];
    if (component.name.toLowerCase().includes('auth') || component.name.toLowerCase().includes('security')) {
      return 'critical';
    }
    if (component.name.toLowerCase().includes('database') || component.name.toLowerCase().includes('payment')) {
      return 'high';
    }
    return securityLevels[Math.floor(Math.random() * securityLevels.length)];
  };

  // Scalability indicators
  const getScalabilityType = (component) => {
    if (component.name.toLowerCase().includes('cluster') || component.tech.toLowerCase().includes('kubernetes')) {
      return 'horizontal';
    }
    if (component.name.toLowerCase().includes('load balancer') || component.name.toLowerCase().includes('gateway')) {
      return 'load-balanced';
    }
    if (component.name.toLowerCase().includes('database') || component.name.toLowerCase().includes('storage')) {
      return 'vertical';
    }
    return 'auto';
  };

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

    // Enhanced categorization with proper component structure
    components.forEach((component, index) => {
      const name = component.name.toLowerCase();
      const tech = component.tech.toLowerCase();
      
      // Add positioning and professional properties
      const enhancedComponent = {
        ...component,
        id: `comp-${index}`,
        health: ['healthy', 'warning', 'healthy', 'healthy'][Math.floor(Math.random() * 4)],
        load: Math.random() * 0.7 + 0.2,
        instances: name.includes('cluster') || name.includes('server') ? Math.floor(Math.random() * 3) + 2 : 1,
        metrics: getPerformanceMetrics(component),
        security: getSecurityLevel(component),
        scalability: getScalabilityType(component),
        cost: Math.floor(Math.random() * 500) + 50, // Monthly cost estimate
        region: ['us-east-1', 'us-west-2', 'eu-west-1'][Math.floor(Math.random() * 3)]
      };
      
      if (name.includes('frontend') || name.includes('client') || name.includes('spa') || name.includes('admin') ||
          tech.includes('react') || tech.includes('vue') || tech.includes('nextjs') || tech.includes('typescript')) {
        layers.frontend.push(enhancedComponent);
      } else if (name.includes('cdn') || name.includes('cloudflare') || tech.includes('cdn') || tech.includes('s3')) {
        layers.cdn.push(enhancedComponent);
      } else if (name.includes('gateway') || name.includes('load balancer') || name.includes('proxy') || name.includes('nginx') ||
                 tech.includes('nginx') || tech.includes('kong') || tech.includes('api gateway')) {
        layers.gateway.push(enhancedComponent);
      } else if (name.includes('message') || name.includes('event') || name.includes('queue') || name.includes('kafka') ||
                 name.includes('redis') || name.includes('pub/sub') ||
                 tech.includes('rabbitmq') || tech.includes('kafka') || tech.includes('redis') || tech.includes('pub/sub')) {
        layers.messaging.push(enhancedComponent);
      } else if (name.includes('database') || name.includes('storage') || name.includes('cache') ||
                 tech.includes('postgresql') || tech.includes('mongodb') || tech.includes('redis') ||
                 tech.includes('elasticsearch') || tech.includes('clickhouse') || tech.includes('mysql')) {
        layers.data.push(enhancedComponent);
      } else if (name.includes('monitoring') || name.includes('logging') || name.includes('observability') ||
                 tech.includes('prometheus') || tech.includes('jaeger') || tech.includes('elk')) {
        layers.monitoring.push(enhancedComponent);
      } else if (name.includes('service') || name.includes('api') || name.includes('engine') || name.includes('auth') ||
                 tech.includes('go') || tech.includes('node.js') || tech.includes('python') || tech.includes('jwt')) {
        layers.services.push(enhancedComponent);
      } else {
        layers.external.push(enhancedComponent);
      }
    });

    // Create realistic data flow connections
    const createConnections = () => {
      const cons = [];
      
      // Frontend to Gateway/Services
      layers.frontend.forEach(frontend => {
        if (layers.gateway.length > 0) {
          layers.gateway.forEach(gateway => {
            cons.push({
              from: frontend,
              to: gateway,
              type: 'https',
              protocol: 'HTTPS/REST',
              data: 'User Requests'
            });
          });
        } else if (layers.services.length > 0) {
          layers.services.slice(0, 1).forEach(service => {
            cons.push({
              from: frontend,
              to: service,
              type: 'https',
              protocol: 'WebSocket/HTTP',
              data: 'API Calls'
            });
          });
        }
      });

      // Gateway to Services
      layers.gateway.forEach(gateway => {
        layers.services.forEach(service => {
          cons.push({
            from: gateway,
            to: service,
            type: 'internal',
            protocol: 'HTTP/gRPC',
            data: 'API Routes'
          });
        });
      });

      // Services to Data
      layers.services.forEach(service => {
        layers.data.forEach(dataStore => {
          if (service.name.toLowerCase().includes('auth') && dataStore.tech.toLowerCase().includes('postgresql')) {
            cons.push({
              from: service,
              to: dataStore,
              type: 'database',
              protocol: 'SQL',
              data: 'User Data'
            });
          } else if (dataStore.tech.toLowerCase().includes('redis')) {
            cons.push({
              from: service,
              to: dataStore,
              type: 'cache',
              protocol: 'Redis',
              data: 'Session/Cache'
            });
          } else if (dataStore.tech.toLowerCase().includes('postgresql')) {
            cons.push({
              from: service,
              to: dataStore,
              type: 'database',
              protocol: 'SQL',
              data: 'App Data'
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
            protocol: 'Pub/Sub',
            data: 'Events'
          });
        });
      });

      // Services to External/CDN
      layers.services.forEach(service => {
        layers.external.forEach(external => {
          cons.push({
            from: service,
            to: external,
            type: 'external',
            protocol: 'HTTPS/API',
            data: 'External Calls'
          });
        });
        layers.cdn.forEach(cdn => {
          cons.push({
            from: service,
            to: cdn,
            type: 'external',
            protocol: 'HTTPS',
            data: 'File Upload'
          });
        });
      });

      return cons;
    };

    return { layers, connections: createConnections() };
  };

  const { layers, connections } = parseArchitecture(architecture.components);
  
  // Define SVG dimensions at component level
  const svgWidth = isModal ? 1600 : 1200; // Larger width for modal
  
  // Create sophisticated layout
  const generateLayout = () => {
    const layout = [];
    let currentY = 60;
    const layerOrder = ['cdn', 'frontend', 'gateway', 'services', 'messaging', 'data', 'monitoring', 'external'];
    const layerBounds = [];

    layerOrder.forEach(layerType => {
      const layerComponents = layers[layerType];
      if (layerComponents.length === 0) return;

      const layerHeight = isModal ? 120 : 100; // Taller layers for modal
      const componentWidth = Math.min(isModal ? 250 : 200, (svgWidth - 100) / Math.max(1, layerComponents.length));
      const componentHeight = isModal ? 100 : 80; // Taller components for modal
      const spacing = isModal ? 30 : 20; // More spacing for modal
      
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

  // Connection styles for different data flow types (enhanced visibility)
  const connectionStyles = {
    https: { color: '#10b981', width: 3, dashArray: 'none', opacity: 0.9 },
    internal: { color: '#3b82f6', width: 2.5, dashArray: '6,4', opacity: 0.8 },
    database: { color: '#8b5cf6', width: 3, dashArray: 'none', opacity: 0.9 },
    cache: { color: '#f59e0b', width: 2.5, dashArray: '4,3', opacity: 0.8 },
    search: { color: '#06b6d4', width: 2.5, dashArray: '8,3', opacity: 0.8 },
    event: { color: '#f97316', width: 3, dashArray: '12,4', opacity: 0.9 },
    event_consume: { color: '#ef4444', width: 2.5, dashArray: '3,6', opacity: 0.8 },
    external: { color: '#6b7280', width: 2.5, dashArray: '16,6,4,6', opacity: 0.7 }
  };

  return (
    <div className={`rounded-lg border shadow-inner transition-colors duration-300 ${
      isDark ? 'bg-gray-900 border-gray-700' : 'bg-gray-50 border-gray-200'
    }`}>
      <svg 
        viewBox={`0 0 ${svgWidth} ${svgHeight}`}
        className="w-full h-auto"
        style={{ maxHeight: isModal ? '1200px' : '800px' }}
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
              {/* Layer background with better gradient */}
              <rect
                x={layer.x - 25}
                y={layer.y - 15}
                width={layer.width + 50}
                height={layer.height + 30}
                fill={`url(#${layerStyle.gradient})`}
                rx="15"
                opacity="0.15"
                filter="url(#cardShadow)"
                className="transition-all duration-300"
              />
              
              {/* Layer border with glow */}
              <rect
                x={layer.x - 25}
                y={layer.y - 15}
                width={layer.width + 50}
                height={layer.height + 30}
                fill="none"
                stroke={layerStyle.borderColor}
                strokeWidth="1.5"
                strokeDasharray="8,4"
                rx="15"
                opacity="0.6"
                className="transition-all duration-300"
                filter="url(#cardShadow)"
              />
              
              {/* Subtle inner glow */}
              <rect
                x={layer.x - 20}
                y={layer.y - 10}
                width={layer.width + 40}
                height={layer.height + 20}
                fill="none"
                stroke={layerStyle.color}
                strokeWidth="0.5"
                rx="12"
                opacity="0.3"
              />
            </g>
          );
        })}

        {/* Enhanced layer labels */}
        {layerBounds.map((layer, idx) => {
          const layerStyle = getLayerStyle(layer.type);
          const labelWidth = Math.max(layer.label.length * 8 + 50, 140);
          return (
            <g key={`layer-label-${idx}`}>
              {/* Label background with gradient */}
              <rect
                x={layer.x - 20}
                y={layer.y - 40}
                width={labelWidth}
                height="28"
                fill={`url(#${layerStyle.gradient})`}
                rx="14"
                opacity="0.95"
                filter="url(#cardShadow)"
              />
              
              {/* Label border */}
              <rect
                x={layer.x - 20}
                y={layer.y - 40}
                width={labelWidth}
                height="28"
                fill="none"
                stroke={layerStyle.borderColor}
                strokeWidth="1"
                rx="14"
                opacity="0.8"
              />
              
              {/* Layer icon */}
              <text
                x={layer.x - 5}
                y={layer.y - 20}
                fontSize={isModal ? "16" : "12"}
                textAnchor="start"
                fill="white"
                className="font-bold"
                style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.7)' }}
              >
                {layerStyle.icon}
              </text>
              
              {/* Label text */}
              <text
                x={layer.x + 15}
                y={layer.y - 20}
                fontSize={isModal ? "14" : "11"}
                fontWeight="700"
                textAnchor="start"
                fill="white"
                className="font-bold"
                style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.7)' }}
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
                  fontSize={isModal ? "12" : "9"}
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
                width={Math.min(component.tech.length * 6 + 16, component.width - 16)}
                height="18"
                fill={isDark ? '#1f2937' : 'white'}
                stroke={layerStyle.borderColor}
                strokeWidth="1"
                rx="9"
                opacity="0.95"
                filter="url(#cardShadow)"
              />
              <text
                x={component.x + 16}
                y={component.y + 19}
                fontSize={isModal ? "11" : "9"}
                fontWeight="600"
                fill={layerStyle.color}
                className="font-semibold"
              >
                {component.tech.length > 20 ? component.tech.substring(0, 17) + '...' : component.tech}
              </text>

              {/* Component icon */}
              <text
                x={component.x + component.width - 20}
                y={component.y + 22}
                fontSize={isModal ? "18" : "14"}
                textAnchor="middle"
                fill="white"
                opacity="0.9"
                style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.5)' }}
              >
                {layerStyle.icon}
              </text>

              {/* Component name */}
              <text
                x={component.x + component.width/2}
                y={component.y + component.height/2 + 5}
                fontSize={isModal ? "13" : "11"}
                fontWeight="700"
                textAnchor="middle"
                fill="white"
                className="font-bold"
                style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.7)' }}
              >
                {component.name.length > 18 ? component.name.substring(0, 15) + '...' : component.name}
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

              {/* Professional Security Indicator */}
              {isModal && component.security && (
                <g>
                  <circle
                    cx={component.x + component.width - 15}
                    cy={component.y + 15}
                    r="6"
                    fill={component.security === 'critical' ? '#ef4444' : component.security === 'high' ? '#f59e0b' : '#10b981'}
                    opacity="0.9"
                  />
                  <text
                    x={component.x + component.width - 15}
                    y={component.y + 18}
                    fontSize="8"
                    fontWeight="700"
                    textAnchor="middle"
                    fill="white"
                  >
                    {component.security === 'critical' ? '🔒' : component.security === 'high' ? '🛡️' : '✅'}
                  </text>
                </g>
              )}

              {/* Performance Metrics (Modal Only) */}
              {isModal && component.metrics && (
                <g>
                  {/* Latency indicator */}
                  <rect
                    x={component.x + 5}
                    y={component.y + component.height - 35}
                    width="60"
                    height="12"
                    fill={isDark ? '#374151' : '#f3f4f6'}
                    rx="6"
                    opacity="0.9"
                  />
                  <text
                    x={component.x + 8}
                    y={component.y + component.height - 27}
                    fontSize="7"
                    fontWeight="600"
                    fill={isDark ? '#d1d5db' : '#374151'}
                  >
                    {component.metrics.latency}ms
                  </text>

                  {/* Availability indicator */}
                  <rect
                    x={component.x + component.width - 65}
                    y={component.y + component.height - 35}
                    width="55"
                    height="12"
                    fill={component.metrics.availability > 99.9 ? '#10b981' : component.metrics.availability > 99.5 ? '#f59e0b' : '#ef4444'}
                    rx="6"
                    opacity="0.9"
                  />
                  <text
                    x={component.x + component.width - 62}
                    y={component.y + component.height - 27}
                    fontSize="7"
                    fontWeight="600"
                    fill="white"
                  >
                    {component.metrics.availability.toFixed(1)}%
                  </text>
                </g>
              )}

              {/* Scalability Indicator */}
              {isModal && component.scalability && (
                <g>
                  <rect
                    x={component.x + component.width - 25}
                    y={component.y + 30}
                    width="20"
                    height="12"
                    fill={layerStyle.color}
                    rx="6"
                    opacity="0.8"
                  />
                  <text
                    x={component.x + component.width - 15}
                    y={component.y + 38}
                    fontSize="8"
                    fontWeight="600"
                    textAnchor="middle"
                    fill="white"
                  >
                    {component.scalability === 'horizontal' ? '↔️' : 
                     component.scalability === 'vertical' ? '↕️' : 
                     component.scalability === 'load-balanced' ? '⚖️' : '🔄'}
                  </text>
                </g>
              )}
            </g>
          );
        })}

        {/* Enhanced Professional Legend */}
        <g transform="translate(20, 20)">
          <rect
            width="200"
            height={isModal ? "280" : "180"}
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
            Architecture Legend
          </text>
          
          {/* Connection Types */}
          <text
            x="15"
            y="40"
            fontSize="10"
            fontWeight="600"
            fill={isDark ? '#d1d5db' : '#4b5563'}
            className="font-semibold"
          >
            Connection Types:
          </text>
          
          {Object.entries(connectionStyles).slice(0, 4).map(([type, style], idx) => (
            <g key={type} transform={`translate(15, ${50 + idx * 18})`}>
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
                fontSize="9"
                fill={isDark ? '#d1d5db' : '#374151'}
                className="capitalize font-medium"
              >
                {type.replace('_', ' ')}
              </text>
            </g>
          ))}

          {/* Professional Indicators (Modal Only) */}
          {isModal && (
            <g>
              <text
                x="15"
                y="140"
                fontSize="10"
                fontWeight="600"
                fill={isDark ? '#d1d5db' : '#4b5563'}
                className="font-semibold"
              >
                Professional Indicators:
              </text>
              
              {/* Security Levels */}
              <g transform="translate(15, 155)">
                <circle cx="6" cy="0" r="4" fill="#ef4444" opacity="0.9" />
                <text x="15" y="3" fontSize="8" fill={isDark ? '#d1d5db' : '#374151'}>Critical Security</text>
              </g>
              <g transform="translate(15, 170)">
                <circle cx="6" cy="0" r="4" fill="#f59e0b" opacity="0.9" />
                <text x="15" y="3" fontSize="8" fill={isDark ? '#d1d5db' : '#374151'}>High Security</text>
              </g>
              <g transform="translate(15, 185)">
                <circle cx="6" cy="0" r="4" fill="#10b981" opacity="0.9" />
                <text x="15" y="3" fontSize="8" fill={isDark ? '#d1d5db' : '#374151'}>Standard Security</text>
              </g>

              {/* Scalability Types */}
              <text
                x="15"
                y="215"
                fontSize="10"
                fontWeight="600"
                fill={isDark ? '#d1d5db' : '#4b5563'}
                className="font-semibold"
              >
                Scalability:
              </text>
              <g transform="translate(15, 230)">
                <text x="0" y="3" fontSize="12">↔️</text>
                <text x="20" y="3" fontSize="8" fill={isDark ? '#d1d5db' : '#374151'}>Horizontal</text>
              </g>
              <g transform="translate(15, 245)">
                <text x="0" y="3" fontSize="12">↕️</text>
                <text x="20" y="3" fontSize="8" fill={isDark ? '#d1d5db' : '#374151'}>Vertical</text>
              </g>
              <g transform="translate(15, 260)">
                <text x="0" y="3" fontSize="12">⚖️</text>
                <text x="20" y="3" fontSize="8" fill={isDark ? '#d1d5db' : '#374151'}>Load Balanced</text>
              </g>
            </g>
          )}
        </g>

        {/* Architecture Metrics Panel (Modal Only) */}
        {isModal && (
          <g transform={`translate(${svgWidth - 220}, 20)`}>
            <rect
              width="200"
              height="160"
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
              System Overview
            </text>
            
            {/* Total Components */}
            <g transform="translate(15, 40)">
              <rect width="50" height="20" fill="#3b82f6" rx="4" opacity="0.8" />
              <text x="5" y="13" fontSize="9" fontWeight="600" fill="white">
                {layout.length} Components
              </text>
            </g>
            
            {/* Active Connections */}
            <g transform="translate(75, 40)">
              <rect width="50" height="20" fill="#10b981" rx="4" opacity="0.8" />
              <text x="5" y="13" fontSize="9" fontWeight="600" fill="white">
                {connections.length} Connections
              </text>
            </g>
            
            {/* Architecture Health */}
            <g transform="translate(135, 40)">
              <rect width="50" height="20" fill="#f59e0b" rx="4" opacity="0.8" />
              <text x="8" y="13" fontSize="9" fontWeight="600" fill="white">
                98.5% Health
              </text>
            </g>

            {/* Technology Stack Summary */}
            <text
              x="15"
              y="80"
              fontSize="10"
              fontWeight="600"
              fill={isDark ? '#d1d5db' : '#4b5563'}
              className="font-semibold"
            >
              Technology Stack:
            </text>
            
            {architecture.components.slice(0, 4).map((comp, idx) => (
              <g key={idx} transform={`translate(15, ${95 + idx * 15})`}>
                <circle cx="4" cy="0" r="2" fill="#6b7280" />
                <text x="12" y="3" fontSize="8" fill={isDark ? '#d1d5db' : '#374151'}>
                  {comp.tech.length > 25 ? comp.tech.substring(0, 22) + '...' : comp.tech}
                </text>
              </g>
            ))}
          </g>
        )}
      </svg>
    </div>
  );
};

// Professional Cost Breakdown Component
const CostBreakdownComponent = ({ architecture, timeline, isDark }) => {
  // Generate realistic cost estimates based on architecture components
  const generateCostBreakdown = () => {
    if (!architecture?.components) return null;

    const costCategories = {
      infrastructure: {
        name: 'Infrastructure & Hosting',
        icon: '🏗️',
        color: isDark ? '#3b82f6' : '#2563eb',
        items: []
      },
      development: {
        name: 'Development & Engineering',
        icon: '💻',
        color: isDark ? '#10b981' : '#059669',
        items: []
      },
      thirdParty: {
        name: 'Third-Party Services',
        icon: '🔌',
        color: isDark ? '#f59e0b' : '#d97706',
        items: []
      },
      operational: {
        name: 'Operations & Maintenance',
        icon: '⚙️',
        color: isDark ? '#8b5cf6' : '#7c3aed',
        items: []
      }
    };

    // Map components to cost categories with realistic pricing
    architecture.components.forEach(component => {
      const name = component.name.toLowerCase();
      const tech = component.tech.toLowerCase();

      // Infrastructure costs
      if (tech.includes('aws') || tech.includes('azure') || tech.includes('gcp') || 
          tech.includes('docker') || tech.includes('kubernetes')) {
        costCategories.infrastructure.items.push({
          name: `${component.name} Hosting`,
          description: `Cloud hosting for ${component.tech}`,
          monthlyCost: Math.floor(Math.random() * 800) + 200,
          category: 'hosting'
        });
      }

      if (tech.includes('postgresql') || tech.includes('mongodb')) {
        costCategories.infrastructure.items.push({
          name: `${component.name} Database`,
          description: `Managed database instance - ${component.tech}`,
          monthlyCost: Math.floor(Math.random() * 400) + 150,
          category: 'database'
        });
      }

      if (tech.includes('redis')) {
        costCategories.infrastructure.items.push({
          name: `${component.name} Cache`,
          description: `In-memory caching - ${component.tech}`,
          monthlyCost: Math.floor(Math.random() * 200) + 50,
          category: 'cache'
        });
      }

      if (tech.includes('cdn') || tech.includes('cloudflare') || tech.includes('s3')) {
        costCategories.thirdParty.items.push({
          name: `${component.name} CDN`,
          description: `Content delivery and storage - ${component.tech}`,
          monthlyCost: Math.floor(Math.random() * 150) + 25,
          category: 'cdn'
        });
      }

      // Development costs (estimated based on complexity)
      if (tech.includes('react') || tech.includes('node.js') || tech.includes('typescript')) {
        costCategories.development.items.push({
          name: `${component.name} Development`,
          description: `Frontend/Backend development - ${component.tech}`,
          monthlyCost: Math.floor(Math.random() * 5000) + 3000,
          category: 'development'
        });
      }

      // Third-party services
      if (name.includes('auth') || tech.includes('oauth') || tech.includes('jwt')) {
        costCategories.thirdParty.items.push({
          name: 'Authentication Service',
          description: 'User authentication and authorization',
          monthlyCost: Math.floor(Math.random() * 100) + 50,
          category: 'auth'
        });
      }

      if (name.includes('monitoring') || tech.includes('prometheus')) {
        costCategories.operational.items.push({
          name: 'Monitoring & Analytics',
          description: 'System monitoring and observability',
          monthlyCost: Math.floor(Math.random() * 200) + 100,
          category: 'monitoring'
        });
      }
    });

    // Add timeline-based development costs
    if (timeline?.phases) {
      const totalDevelopmentCost = timeline.phases.length * Math.floor(Math.random() * 8000) + 5000;
      costCategories.development.items.push({
        name: 'Project Development',
        description: `${timeline.phases.length} development phases over ${timeline.totalDuration}`,
        monthlyCost: totalDevelopmentCost,
        category: 'project'
      });
    }

    return costCategories;
  };

  const costData = generateCostBreakdown();
  if (!costData) return null;

  // Calculate totals
  const categoryTotals = Object.entries(costData).map(([key, category]) => ({
    ...category,
    total: category.items.reduce((sum, item) => sum + item.monthlyCost, 0)
  }));

  const grandTotal = categoryTotals.reduce((sum, category) => sum + category.total, 0);

  return (
    <div className={`mt-8 p-8 rounded-3xl border-2 ${
      isDark 
        ? 'bg-gradient-to-br from-gray-800/60 to-gray-900/80 border-gray-700/60' 
        : 'bg-gradient-to-br from-white/80 to-gray-50/90 border-gray-200/60'
    } backdrop-blur-xl shadow-2xl relative overflow-hidden group`}>
      
      {/* Enhanced background pattern with subtle animation */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className={`w-full h-full ${
          isDark ? 'bg-gradient-to-br from-emerald-400 via-blue-400 to-purple-400' : 'bg-gradient-to-br from-emerald-500 via-blue-500 to-purple-500'
        }`} style={{
          backgroundImage: `radial-gradient(circle at 20% 20%, currentColor 3px, transparent 3px),
                           radial-gradient(circle at 80% 80%, currentColor 2px, transparent 2px),
                           radial-gradient(circle at 40% 60%, currentColor 1px, transparent 1px)`,
          backgroundSize: '60px 60px, 40px 40px, 20px 20px',
          animation: 'subtle-float 20s ease-in-out infinite'
        }} />
      </div>

      {/* Floating orbs for visual interest */}
      <div className="absolute top-4 right-4 w-32 h-32 bg-gradient-to-br from-emerald-400/10 to-blue-400/10 rounded-full blur-2xl animate-pulse" />
      <div className="absolute bottom-4 left-4 w-24 h-24 bg-gradient-to-br from-purple-400/10 to-pink-400/10 rounded-full blur-xl animate-pulse delay-1000" />
      
      <div className="relative z-10">
        {/* Enhanced Header with better spacing and typography */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <div className="flex items-center gap-4">
            <div className={`p-3 rounded-2xl ${
              isDark 
                ? 'bg-gradient-to-br from-emerald-900/40 to-emerald-800/40 border border-emerald-700/30' 
                : 'bg-gradient-to-br from-emerald-100/80 to-emerald-50/80 border border-emerald-200/50'
            } shadow-lg backdrop-blur-sm`}>
              <BarChart3 className={`w-7 h-7 ${isDark ? 'text-emerald-400' : 'text-emerald-600'}`} />
            </div>
            <div>
              <h4 className={`text-2xl font-bold tracking-tight ${isDark ? 'text-white' : 'text-gray-900'}`}>
                Project Cost Analysis
              </h4>
              <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'} mt-1`}>
                Comprehensive financial breakdown and ROI analysis
              </p>
            </div>
          </div>
          <div className={`px-6 py-3 rounded-2xl text-base font-bold shadow-lg ${
            isDark 
              ? 'bg-gradient-to-r from-emerald-900/50 to-emerald-800/50 text-emerald-300 border border-emerald-700/30' 
              : 'bg-gradient-to-r from-emerald-100/90 to-emerald-50/90 text-emerald-700 border border-emerald-200/50'
          } backdrop-blur-sm`}>
            <span className="text-sm opacity-75">Total Budget</span>
            <div className="text-xl">${grandTotal.toLocaleString()}<span className="text-sm opacity-75">/mo</span></div>
          </div>
        </div>

        {/* Enhanced Cost Summary Cards with improved animations and styling */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {categoryTotals.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ 
                delay: index * 0.15,
                type: "spring",
                stiffness: 100,
                damping: 15
              }}
              whileHover={{ 
                scale: 1.05, 
                y: -8,
                transition: { duration: 0.2 }
              }}
              className={`relative p-6 rounded-2xl border overflow-hidden group cursor-pointer ${
                isDark 
                  ? 'bg-gradient-to-br from-gray-700/60 to-gray-800/60 border-gray-600/40 hover:border-gray-500/60' 
                  : 'bg-gradient-to-br from-white/90 to-gray-50/90 border-gray-200/40 hover:border-gray-300/60'
              } backdrop-blur-sm shadow-lg hover:shadow-2xl transition-all duration-300`}
            >
              {/* Animated background gradient on hover */}
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300"
                style={{
                  background: `linear-gradient(135deg, ${category.color}20, ${category.color}05)`
                }}
              />
              
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 rounded-xl shadow-md ${
                    isDark ? 'bg-gray-600/40' : 'bg-white/80'
                  }`}>
                    <span className="text-3xl filter drop-shadow-sm">{category.icon}</span>
                  </div>
                  <div className={`px-3 py-1 rounded-full text-xs font-bold ${
                    isDark ? 'bg-gray-600/50 text-gray-300' : 'bg-gray-100/80 text-gray-600'
                  }`}>
                    {((category.total / grandTotal) * 100).toFixed(1)}%
                  </div>
                </div>
                
                <div className="space-y-2">
                  <div className={`text-3xl font-black tracking-tight`} style={{ color: category.color }}>
                    ${category.total.toLocaleString()}
                  </div>
                  <div className={`text-sm font-semibold leading-tight ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                    {category.name}
                  </div>
                  <div className={`text-xs ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>
                    per month
                  </div>
                </div>

                {/* Enhanced progress bar with animation */}
                <div className="mt-4">
                  <div className={`w-full h-2 rounded-full overflow-hidden ${
                    isDark ? 'bg-gray-600/40' : 'bg-gray-200/60'
                  }`}>
                    <motion.div 
                      className="h-full rounded-full shadow-sm"
                      style={{ backgroundColor: category.color }}
                      initial={{ width: 0 }}
                      animate={{ width: `${(category.total / grandTotal) * 100}%` }}
                      transition={{ 
                        delay: index * 0.15 + 0.5,
                        duration: 0.8,
                        ease: "easeOut"
                      }}
                    />
                  </div>
                </div>
              </div>
              
              {/* Subtle corner accent */}
              <div 
                className="absolute top-0 right-0 w-20 h-20 rounded-bl-full opacity-5"
                style={{ backgroundColor: category.color }}
              />
            </motion.div>
          ))}
        </div>

        {/* Enhanced Detailed Breakdown with improved layout */}
        <div className="space-y-8">
          {categoryTotals.filter(cat => cat.items.length > 0).map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: categoryIndex * 0.15 }}
              className={`p-8 rounded-3xl border ${
                isDark 
                  ? 'bg-gradient-to-br from-gray-800/40 to-gray-900/40 border-gray-700/40' 
                  : 'bg-gradient-to-br from-white/80 to-gray-50/80 border-gray-200/40'
              } backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 group`}
            >
              {/* Enhanced category header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                <div className="flex items-center gap-4">
                  <div className={`p-4 rounded-2xl shadow-md ${
                    isDark ? 'bg-gray-700/50' : 'bg-white/90'
                  } group-hover:scale-110 transition-transform duration-300`}>
                    <span className="text-2xl filter drop-shadow-sm">{category.icon}</span>
                  </div>
                  <div>
                    <h5 className={`text-xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                      {category.name}
                    </h5>
                    <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'} mt-1`}>
                      {category.items.length} items • Monthly cost breakdown
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div 
                    className="px-5 py-3 rounded-2xl text-lg font-bold text-white shadow-lg"
                    style={{ backgroundColor: category.color }}
                  >
                    ${category.total.toLocaleString()}
                    <span className="text-sm opacity-80 ml-1">/mo</span>
                  </div>
                </div>
              </div>

              {/* Enhanced item grid */}
              <div className="grid gap-4">
                {category.items.map((item, itemIndex) => (
                  <motion.div
                    key={itemIndex}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: (categoryIndex * 0.15) + (itemIndex * 0.08) }}
                    className={`flex items-center justify-between p-5 rounded-2xl border ${
                      isDark 
                        ? 'bg-gradient-to-r from-gray-700/30 to-gray-800/30 border-gray-600/30 hover:border-gray-500/50' 
                        : 'bg-gradient-to-r from-gray-50/80 to-white/80 border-gray-200/30 hover:border-gray-300/50'
                    } hover:shadow-md transition-all duration-300 group/item`}
                  >
                    <div className="flex-1 min-w-0">
                      <div className={`font-semibold text-base ${isDark ? 'text-white' : 'text-gray-900'} group-hover/item:text-blue-600 transition-colors duration-200`}>
                        {item.name}
                      </div>
                      <div className={`text-sm mt-1 ${isDark ? 'text-gray-400' : 'text-gray-600'} leading-relaxed`}>
                        {item.description}
                      </div>
                      <div className={`inline-block px-3 py-1 rounded-full text-xs font-medium mt-2 ${
                        isDark ? 'bg-gray-600/50 text-gray-300' : 'bg-gray-100/80 text-gray-600'
                      }`}>
                        {item.category}
                      </div>
                    </div>
                    <div className="text-right ml-6">
                      <div className={`text-2xl font-black ${isDark ? 'text-emerald-400' : 'text-emerald-600'} group-hover/item:scale-110 transition-transform duration-200`}>
                        ${item.monthlyCost.toLocaleString()}
                      </div>
                      <div className={`text-sm ${isDark ? 'text-gray-500' : 'text-gray-500'} font-medium`}>
                        per month
                      </div>
                      <div className={`text-xs mt-1 ${isDark ? 'text-gray-600' : 'text-gray-400'}`}>
                        {((item.monthlyCost / category.total) * 100).toFixed(1)}% of category
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Enhanced ROI and Business Value with modern card design */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className={`mt-10 p-8 rounded-3xl border-2 ${
            isDark 
              ? 'bg-gradient-to-br from-blue-900/30 via-purple-900/20 to-emerald-900/30 border-blue-700/40' 
              : 'bg-gradient-to-br from-blue-50/90 via-purple-50/70 to-emerald-50/90 border-blue-200/50'
          } backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-500 group relative overflow-hidden`}
        >
          {/* Animated background elements */}
          <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-br from-emerald-400/10 to-blue-400/10 rounded-full blur-2xl animate-pulse delay-1000" />
          
          <div className="relative z-10">
            <div className="flex items-center gap-4 mb-8">
              <div className={`p-4 rounded-2xl ${
                isDark 
                  ? 'bg-gradient-to-br from-blue-900/50 to-purple-900/50 border border-blue-700/30' 
                  : 'bg-gradient-to-br from-blue-100/80 to-purple-100/80 border border-blue-200/50'
              } shadow-lg backdrop-blur-sm group-hover:scale-110 transition-transform duration-300`}>
                <span className="text-3xl">💡</span>
              </div>
              <div>
                <h5 className={`font-black text-2xl ${isDark ? 'text-blue-400' : 'text-blue-600'} tracking-tight`}>
                  Investment Analysis
                </h5>
                <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'} mt-1`}>
                  ROI projections and business value assessment
                </p>
              </div>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <motion.div 
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ duration: 0.2 }}
                className={`p-6 rounded-2xl ${
                  isDark ? 'bg-gradient-to-br from-emerald-900/40 to-emerald-800/40' : 'bg-gradient-to-br from-emerald-100/80 to-emerald-50/80'
                } backdrop-blur-sm shadow-lg border border-emerald-500/20 hover:border-emerald-500/40 transition-all duration-300`}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className={`p-2 rounded-lg ${isDark ? 'bg-emerald-800/50' : 'bg-emerald-200/50'}`}>
                    <TrendingUp className={`w-5 h-5 ${isDark ? 'text-emerald-400' : 'text-emerald-600'}`} />
                  </div>
                  <div className={`text-sm font-semibold ${isDark ? 'text-emerald-300' : 'text-emerald-700'}`}>
                    Development ROI
                  </div>
                </div>
                <div className={`text-4xl font-black ${isDark ? 'text-emerald-400' : 'text-emerald-600'} mb-2`}>
                  {Math.floor(Math.random() * 200) + 150}%
                </div>
                <div className={`text-xs ${isDark ? 'text-emerald-500' : 'text-emerald-600'} font-medium`}>
                  Expected return on investment
                </div>
              </motion.div>
              
              <motion.div 
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ duration: 0.2 }}
                className={`p-6 rounded-2xl ${
                  isDark ? 'bg-gradient-to-br from-blue-900/40 to-blue-800/40' : 'bg-gradient-to-br from-blue-100/80 to-blue-50/80'
                } backdrop-blur-sm shadow-lg border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300`}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className={`p-2 rounded-lg ${isDark ? 'bg-blue-800/50' : 'bg-blue-200/50'}`}>
                    <Clock className={`w-5 h-5 ${isDark ? 'text-blue-400' : 'text-blue-600'}`} />
                  </div>
                  <div className={`text-sm font-semibold ${isDark ? 'text-blue-300' : 'text-blue-700'}`}>
                    Break-even Period
                  </div>
                </div>
                <div className={`text-4xl font-black ${isDark ? 'text-blue-400' : 'text-blue-600'} mb-2`}>
                  {Math.floor(Math.random() * 8) + 6}
                </div>
                <div className={`text-xs ${isDark ? 'text-blue-500' : 'text-blue-600'} font-medium`}>
                  months to profitability
                </div>
              </motion.div>
              
              <motion.div 
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ duration: 0.2 }}
                className={`p-6 rounded-2xl ${
                  isDark ? 'bg-gradient-to-br from-purple-900/40 to-purple-800/40' : 'bg-gradient-to-br from-purple-100/80 to-purple-50/80'
                } backdrop-blur-sm shadow-lg border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 sm:col-span-2 lg:col-span-1`}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className={`p-2 rounded-lg ${isDark ? 'bg-purple-800/50' : 'bg-purple-200/50'}`}>
                    <DollarSign className={`w-5 h-5 ${isDark ? 'text-purple-400' : 'text-purple-600'}`} />
                  </div>
                  <div className={`text-sm font-semibold ${isDark ? 'text-purple-300' : 'text-purple-700'}`}>
                    Operational Savings
                  </div>
                </div>
                <div className={`text-4xl font-black ${isDark ? 'text-purple-400' : 'text-purple-600'} mb-2`}>
                  ${Math.floor(Math.random() * 50000) + 25000}
                </div>
                <div className={`text-xs ${isDark ? 'text-purple-500' : 'text-purple-600'} font-medium`}>
                  monthly cost reduction
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

// Advanced Timeline Component with Animation and Interactivity
const TimelineComponent = ({ timeline, isDark }) => {
  const [expandedPhases, setExpandedPhases] = useState({});
  const timelineRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start end", "end start"]
  });

  // Animate the timeline line as user scrolls
  const lineProgress = useTransform(scrollYProgress, [0, 1], [0, 100]);

  // Milestone type configurations
  const milestoneIcons = {
    development: { icon: Code, color: '#3b82f6', bgColor: '#dbeafe' },
    testing: { icon: TestTube, color: '#f59e0b', bgColor: '#fef3c7' },
    deployment: { icon: Rocket, color: '#10b981', bgColor: '#d1fae5' },
    design: { icon: Layout, color: '#8b5cf6', bgColor: '#ede9fe' },
    planning: { icon: Target, color: '#ec4899', bgColor: '#fce7f3' },
    optimization: { icon: TrendingUp, color: '#06b6d4', bgColor: '#cffafe' },
    integration: { icon: GitBranch, color: '#84cc16', bgColor: '#ecfccb' },
    infrastructure: { icon: Cpu, color: '#f97316', bgColor: '#fed7aa' },
    security: { icon: Shield, color: '#dc2626', bgColor: '#fee2e2' },
    monitoring: { icon: Settings, color: '#6b7280', bgColor: '#f3f4f6' }
  };

  const togglePhaseExpansion = (phaseIndex) => {
    setExpandedPhases(prev => ({
      ...prev,
      [phaseIndex]: !prev[phaseIndex]
    }));
  };

  const getMilestoneConfig = (type) => {
    return milestoneIcons[type] || milestoneIcons.development;
  };

  if (!timeline || !timeline.phases) return null;

  return (
    <div 
      ref={timelineRef}
      className={`mt-8 p-8 rounded-2xl border-2 ${
        isDark 
          ? 'bg-gradient-to-br from-gray-800/50 to-gray-900/50 border-gray-700/50' 
          : 'bg-gradient-to-br from-gray-50/50 to-white/50 border-gray-200/50'
      } backdrop-blur-lg shadow-xl relative overflow-hidden`}
    >
      {/* Subtle background pattern */}
      <div className={`absolute inset-0 opacity-5 ${
        isDark ? 'bg-gradient-to-br from-blue-400 to-purple-400' : 'bg-gradient-to-br from-blue-500 to-purple-500'
      }`} style={{
        backgroundImage: `radial-gradient(circle at 25% 25%, currentColor 2px, transparent 2px),
                         radial-gradient(circle at 75% 75%, currentColor 2px, transparent 2px)`,
        backgroundSize: '24px 24px'
      }} />
      
      <div className="relative z-10">
      {/* Timeline Header */}
      <div className="flex items-center gap-3 mb-6">
        <Clock className={`w-6 h-6 ${isDark ? 'text-blue-400' : 'text-blue-600'}`} />
        <h4 className={`text-xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
          Project Timeline
        </h4>
        <div className={`px-3 py-1 rounded-full text-sm font-medium ${
          isDark 
            ? 'bg-blue-900/30 text-blue-300 border border-blue-700/30' 
            : 'bg-blue-100 text-blue-700 border border-blue-200'
        }`}>
          {timeline.totalDuration}
        </div>
      </div>

      {/* Timeline Overview Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
        <div className={`flex items-center gap-2 px-4 py-2 rounded-xl ${
          isDark ? 'bg-gray-700/40 backdrop-blur-sm' : 'bg-white/80 backdrop-blur-sm'
        } border ${isDark ? 'border-gray-600/50' : 'border-gray-200/50'} shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105`}>
          <div className={`text-3xl font-bold ${isDark ? 'text-green-400' : 'text-green-600'} mb-1`}>
            {timeline.phases.length}
          </div>
          <div className={`text-sm font-medium ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
            Development Phases
          </div>
        </div>
        <div className={`flex items-center gap-2 px-4 py-2 rounded-xl ${
          isDark ? 'bg-gray-700/40 backdrop-blur-sm' : 'bg-white/80 backdrop-blur-sm'
        } border ${isDark ? 'border-gray-600/50' : 'border-gray-200/50'} shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105`}>
          <div className={`text-3xl font-bold ${isDark ? 'text-blue-400' : 'text-blue-600'} mb-1`}>
            {timeline.phases.reduce((acc, phase) => acc + (phase.milestones?.length || 0), 0)}
          </div>
          <div className={`text-sm font-medium ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
            Key Milestones
          </div>
        </div>
        <div className={`flex items-center gap-2 px-4 py-2 rounded-xl ${
          isDark ? 'bg-gray-700/40 backdrop-blur-sm' : 'bg-white/80 backdrop-blur-sm'
        } border ${isDark ? 'border-gray-600/50' : 'border-gray-200/50'} shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105`}>
          <div className={`text-3xl font-bold ${isDark ? 'text-purple-400' : 'text-purple-600'} mb-1`}>
            {timeline.teamSize || 'Solo'}
          </div>
          <div className={`text-sm font-medium ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
            Team Size
          </div>
        </div>
        <div className={`flex items-center gap-2 px-4 py-2 rounded-xl ${
          isDark ? 'bg-gray-700/40 backdrop-blur-sm' : 'bg-white/80 backdrop-blur-sm'
        } border ${isDark ? 'border-gray-600/50' : 'border-gray-200/50'} shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105`}>
          <div className={`text-3xl font-bold ${isDark ? 'text-orange-400' : 'text-orange-600'} mb-1`}>
            {timeline.methodology || 'Agile'}
          </div>
          <div className={`text-sm font-medium ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
            Methodology
          </div>
        </div>
      </div>

      {/* Animated Timeline */}
      <div className="relative">
        {/* Animated Timeline Line */}
        <div className={`absolute left-6 top-0 bottom-0 w-1 rounded-full ${
          isDark 
            ? 'bg-gradient-to-b from-gray-700/50 to-gray-800/50' 
            : 'bg-gradient-to-b from-gray-200/50 to-gray-300/50'
        }`}></div>
        <motion.div 
          className={`absolute left-6 top-0 w-1 rounded-full bg-gradient-to-b ${
            isDark 
              ? 'from-blue-400 via-purple-400 to-green-400' 
              : 'from-blue-500 via-purple-500 to-green-500'
          } shadow-lg shadow-blue-500/20`}
          style={{
            height: `${lineProgress.get()}%`,
            transition: 'height 0.3s ease-out'
          }}
          initial={{ height: '0%' }}
          animate={{ height: `${lineProgress.get()}%` }}
        />

        {/* Timeline Phases */}
        <div className="space-y-8">
          {timeline.phases.map((phase, phaseIndex) => {
            const isExpanded = expandedPhases[phaseIndex];
            
            return (
              <motion.div
                key={phaseIndex}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: phaseIndex * 0.1 }}
                className="relative pl-16"
              >
                {/* Phase Circle */}
                <div className={`absolute -left-2 top-2 w-10 h-10 rounded-full border-4 ${
                  isDark 
                    ? 'bg-gray-800 border-blue-400 shadow-lg shadow-blue-400/20' 
                    : 'bg-white border-blue-500 shadow-lg shadow-blue-500/20'
                } flex items-center justify-center z-10`}>
                  <div className={`w-4 h-4 rounded-full ${
                    isDark ? 'bg-blue-400' : 'bg-blue-500'
                  } shadow-inner`} />
                </div>

                {/* Phase Header */}
                <div 
                  className={`p-5 rounded-xl border cursor-pointer transition-all duration-300 ${
                    isDark 
                      ? 'bg-gray-700/30 border-gray-600/50 hover:bg-gray-700/60 hover:border-blue-500/30' 
                      : 'bg-white/80 border-gray-200/50 hover:bg-white/95 hover:border-blue-400/40'
                  } backdrop-blur-sm shadow-sm hover:shadow-md transform hover:scale-[1.01]`}
                  onClick={() => togglePhaseExpansion(phaseIndex)}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <h5 className={`text-lg font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                        Phase {phaseIndex + 1}: {phase.name}
                      </h5>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        isDark 
                          ? 'bg-blue-900/30 text-blue-300' 
                          : 'bg-blue-100 text-blue-700'
                      }`}>
                        {phase.duration}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      {phase.milestones && (
                        <span className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                          {phase.milestones.length} milestones
                        </span>
                      )}
                      {isExpanded ? (
                        <ChevronUp className={`w-5 h-5 ${isDark ? 'text-gray-400' : 'text-gray-600'}`} />
                      ) : (
                        <ChevronDown className={`w-5 h-5 ${isDark ? 'text-gray-400' : 'text-gray-600'}`} />
                      )}
                    </div>
                  </div>
                  
                  <p className={`mt-2 text-sm ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                    {phase.description}
                  </p>
                </div>

                {/* Expandable Milestones */}
                <AnimatePresence>
                  {isExpanded && phase.milestones && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="mt-4 ml-4 space-y-3 overflow-hidden"
                    >
                      {phase.milestones.map((milestone, milestoneIndex) => {
                        const config = getMilestoneConfig(milestone.type);
                        const IconComponent = config.icon;

                        return (
                          <motion.div
                            key={milestoneIndex}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: milestoneIndex * 0.05 }}
                            className={`flex items-start gap-4 p-4 rounded-xl ${
                              isDark 
                                ? 'bg-gray-800/50 border border-gray-700/50 hover:bg-gray-800/70' 
                                : 'bg-gray-50/80 border border-gray-200/50 hover:bg-white/90'
                            } transition-all duration-200 shadow-sm hover:shadow-md`}
                          >
                            {/* Milestone Icon */}
                            <div 
                              className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center shadow-sm border"
                              style={{ 
                                backgroundColor: isDark ? config.color + '15' : config.bgColor,
                                borderColor: isDark ? config.color + '30' : config.color + '20',
                                color: config.color 
                              }}
                            >
                              <IconComponent className="w-5 h-5" />
                            </div>

                            {/* Milestone Content */}
                            <div className="flex-1">
                              <div className="flex items-center gap-2 mb-1">
                                <h6 className={`font-medium ${isDark ? 'text-white' : 'text-gray-900'}`}>
                                  {milestone.name}
                                </h6>
                                <span 
                                  className="px-2 py-0.5 rounded text-xs font-medium"
                                  style={{ 
                                    backgroundColor: isDark ? config.color + '20' : config.bgColor,
                                    color: config.color 
                                  }}
                                >
                                  {milestone.type}
                                </span>
                              </div>
                              <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                                {milestone.description}
                              </p>
                              {milestone.deliverables && (
                                <div className="mt-2 flex flex-wrap gap-1">
                                  {milestone.deliverables.map((deliverable, idx) => (
                                    <span 
                                      key={idx}
                                      className={`px-2 py-0.5 rounded text-xs ${
                                        isDark 
                                          ? 'bg-gray-700 text-gray-300' 
                                          : 'bg-gray-100 text-gray-700'
                                      }`}
                                    >
                                      {deliverable}
                                    </span>
                                  ))}
                                </div>
                              )}
                            </div>
                          </motion.div>
                        );
                      })}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

                        {/* Timeline Completion */}
        <div className="relative pl-18 mt-8">
          <div className={`absolute -left-2 top-2 w-10 h-10 rounded-full border-4 ${
            isDark 
              ? 'bg-gray-800 border-green-400 shadow-lg shadow-green-400/20' 
              : 'bg-white border-green-500 shadow-lg shadow-green-500/20'
          } flex items-center justify-center z-10`}>
            <CheckCircle className={`w-5 h-5 ${isDark ? 'text-green-400' : 'text-green-500'}`} />
          </div>
          
          <div className={`p-5 rounded-xl border ${
            isDark 
              ? 'bg-gradient-to-r from-green-900/20 to-green-800/20 border-green-700/50 shadow-lg' 
              : 'bg-gradient-to-r from-green-50/80 to-emerald-50/80 border-green-200/50 shadow-lg'
          } backdrop-blur-sm`}>
            <h5 className={`font-bold text-lg ${isDark ? 'text-green-400' : 'text-green-600'}`}>
              🎉 Project Completed Successfully
            </h5>
            <p className={`text-sm mt-2 ${isDark ? 'text-green-300' : 'text-green-700'}`}>
              All phases delivered on time with exceptional quality standards
            </p>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const { isDark } = useTheme();
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedDifficulty, setSelectedDifficulty] = useState('All');
  const [expandedTechs, setExpandedTechs] = useState({});
  const [expandedFeatures, setExpandedFeatures] = useState({});
  const [expandedDiagram, setExpandedDiagram] = useState(null);

  // Inject the CSS animations for cost breakdown
  useEffect(() => {
    const styleId = 'cost-breakdown-animations';
    if (!document.getElementById(styleId)) {
      const style = document.createElement('style');
      style.id = styleId;
      style.textContent = floatingAnimation;
      document.head.appendChild(style);
    }
  }, []);
  const [selectedStatus, setSelectedStatus] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTechnology, setSelectedTechnology] = useState('All');
  const [sortBy, setSortBy] = useState('recent'); // recent, complexity, impact

  // Toggle technology expansion
  const toggleTechExpansion = (projectId) => {
    setExpandedTechs(prev => ({
      ...prev,
      [projectId]: !prev[projectId]
    }));
  };

  // Toggle features expansion
  const toggleFeaturesExpansion = (projectId) => {
    setExpandedFeatures(prev => ({
      ...prev,
      [projectId]: !prev[projectId]
    }));
  };

  // Toggle architecture diagram modal
  const openDiagramModal = (project) => {
    setExpandedDiagram(project);
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
  };

  const closeDiagramModal = () => {
    setExpandedDiagram(null);
    document.body.style.overflow = 'unset'; // Restore scrolling
  };

  const projects = skillsData.projects || [];

  // Enhanced filtering with search and technology
  const filteredProjects = projects.filter(project => {
    const categoryMatch = selectedCategory === 'All' || project.category === selectedCategory;
    const difficultyMatch = selectedDifficulty === 'All' || project.difficulty === selectedDifficulty;
    const statusMatch = selectedStatus === 'All' || project.status === selectedStatus;
    
    // Search in title, description, technologies, and features
    const searchMatch = searchTerm === '' || 
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (project.technologies || []).some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase())) ||
      (project.features || []).some(feature => feature.toLowerCase().includes(searchTerm.toLowerCase()));
    
    // Technology filter
    const technologyMatch = selectedTechnology === 'All' || 
      (project.technologies || []).some(tech => tech === selectedTechnology);
    
    return categoryMatch && difficultyMatch && statusMatch && searchMatch && technologyMatch;
  });

  // Sort projects
  const sortedProjects = [...filteredProjects].sort((a, b) => {
    switch (sortBy) {
      case 'complexity':
        const complexityOrder = { 'beginner': 1, 'intermediate': 2, 'advanced': 3, 'expert': 4 };
        return (complexityOrder[b.difficulty] || 0) - (complexityOrder[a.difficulty] || 0);
      case 'impact':
        // Sort by number of performance metrics (as a proxy for impact)
        return (b.performanceMetrics?.length || 0) - (a.performanceMetrics?.length || 0);
      case 'recent':
      default:
        return 0; // Keep original order (most recent first)
    }
  });

  // Get unique values for filter options
  const categories = ['All', ...new Set(projects.map(p => p.category))];
  const difficulties = ['All', ...new Set(projects.map(p => p.difficulty))];
  const statuses = ['All', ...new Set(projects.map(p => p.status))];
  const allTechnologies = ['All', ...new Set(projects.flatMap(p => p.technologies || []))].sort();

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
                     : 'bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200'
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

        {/* Enhanced Filter Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
          className="mb-16"
        >
          {/* Search Bar */}
          <div className="text-center mb-8">
            <h3 className={`text-lg font-semibold mb-6 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>
              Explore Projects
            </h3>
            
            <div className="max-w-2xl mx-auto mb-8">
              <div className="relative">
                <Search className={`absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 ${
                  isDark ? 'text-gray-400' : 'text-gray-500'
                }`} />
                <input
                  type="text"
                  placeholder="Search projects, technologies, features..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className={`w-full pl-12 pr-4 py-4 rounded-2xl text-lg border transition-all duration-300 ${
                    isDark 
                      ? 'bg-gray-800/50 border-gray-700/50 text-white placeholder-gray-400 focus:border-blue-500/50 focus:bg-gray-800/70' 
                      : 'bg-white/80 border-gray-200/50 text-gray-900 placeholder-gray-500 focus:border-blue-300 focus:bg-white'
                  } focus:outline-none focus:ring-2 focus:ring-blue-500/20`}
                />
              </div>
            </div>

            {/* Stats Summary */}
            <div className="flex flex-wrap justify-center gap-6 mb-8">
              <div className={`flex items-center gap-2 px-4 py-2 rounded-xl ${
                isDark ? 'bg-gray-800/50 text-gray-300' : 'bg-gray-100/80 text-gray-600'
              }`}>
                <Layout className="w-4 h-4" />
                <span className="text-sm font-medium">{sortedProjects.length} Projects Found</span>
              </div>
              <div className={`flex items-center gap-2 px-4 py-2 rounded-xl ${
                isDark ? 'bg-gray-800/50 text-gray-300' : 'bg-gray-100/80 text-gray-600'
              }`}>
                <Tag className="w-4 h-4" />
                <span className="text-sm font-medium">{allTechnologies.length - 1} Technologies</span>
              </div>
              <div className={`flex items-center gap-2 px-4 py-2 rounded-xl ${
                isDark ? 'bg-gray-800/50 text-gray-300' : 'bg-gray-100/80 text-gray-600'
              }`}>
                <TrendingUp className="w-4 h-4" />
                <span className="text-sm font-medium">{categories.length - 1} Categories</span>
              </div>
              <div className={`flex items-center gap-2 px-4 py-2 rounded-xl ${
                isDark ? 'bg-blue-900/30 text-blue-400' : 'bg-blue-100/80 text-blue-600'
              }`}>
                <Users className="w-4 h-4" />
                <span className="text-sm font-medium">
                  {projects.reduce((acc, p) => acc + (p.estimatedHours || 0), 0)}+ Hours
                </span>
              </div>
            </div>
            
            {/* Primary Category Pills */}
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

            {/* Secondary Filters */}
            <div className="flex flex-wrap justify-center gap-8 mb-6">
              {/* Sort Options */}
              <div className="flex items-center gap-3">
                <span className={`text-sm font-medium ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  Sort by:
                </span>
                <div className="flex gap-2">
                  {[
                    { key: 'recent', label: 'Recent', icon: Clock },
                    { key: 'complexity', label: 'Complexity', icon: TrendingUp },
                    { key: 'impact', label: 'Impact', icon: Users }
                  ].map(({ key, label, icon: Icon }) => (
                    <motion.button
                      key={key}
                      onClick={() => setSortBy(key)}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                        sortBy === key
                          ? (isDark ? 'bg-blue-600 text-white' : 'bg-blue-500 text-white')
                          : (isDark ? 'bg-gray-800 text-gray-400 hover:bg-gray-700' : 'bg-gray-100 text-gray-600 hover:bg-gray-200')
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                      {label}
                    </motion.button>
                  ))}
                </div>
              </div>

              {/* Technology Filter */}
              <div className="flex items-center gap-3">
                <span className={`text-sm font-medium ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  Technology:
                </span>
                <select
                  value={selectedTechnology}
                  onChange={(e) => setSelectedTechnology(e.target.value)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    isDark 
                      ? 'bg-gray-800 border border-gray-700 text-gray-300 focus:border-blue-500' 
                      : 'bg-white border border-gray-200 text-gray-700 focus:border-blue-400'
                  } focus:outline-none focus:ring-2 focus:ring-blue-500/20`}
                >
                  {allTechnologies.slice(0, 20).map(tech => (
                    <option key={tech} value={tech}>{tech}</option>
                  ))}
                </select>
              </div>

              {/* Difficulty & Status */}
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

            {/* Active Filters Display */}
            {(searchTerm || selectedCategory !== 'All' || selectedTechnology !== 'All' || selectedDifficulty !== 'All' || selectedStatus !== 'All' || sortBy !== 'recent') && (
              <div className="flex flex-wrap justify-center gap-2 mb-4">
                <span className={`text-xs font-medium ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                  Active filters:
                </span>
                {searchTerm && (
                  <span className={`px-3 py-1 rounded-full text-xs ${
                    isDark ? 'bg-blue-900/30 text-blue-400' : 'bg-blue-100 text-blue-700'
                  }`}>
                    Search: "{searchTerm}"
                  </span>
                )}
                {selectedCategory !== 'All' && (
                  <span className={`px-3 py-1 rounded-full text-xs ${
                    isDark ? 'bg-purple-900/30 text-purple-400' : 'bg-purple-100 text-purple-700'
                  }`}>
                    Category: {selectedCategory}
                  </span>
                )}
                {selectedTechnology !== 'All' && (
                  <span className={`px-3 py-1 rounded-full text-xs ${
                    isDark ? 'bg-green-900/30 text-green-400' : 'bg-green-100 text-green-700'
                  }`}>
                    Tech: {selectedTechnology}
                  </span>
                )}
                {sortBy !== 'recent' && (
                  <span className={`px-3 py-1 rounded-full text-xs ${
                    isDark ? 'bg-amber-900/30 text-amber-400' : 'bg-amber-100 text-amber-700'
                  }`}>
                    Sort: {sortBy}
                  </span>
                )}
              </div>
            )}
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
            {sortedProjects.map((project, index) => (
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
                    <div className={`p-4 rounded-lg ${
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
                    
                    <div className={`p-4 rounded-lg ${
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
                      {(project.technologies || [])
                        .slice(0, expandedTechs[project.id] ? undefined : 6)
                        .map((tech) => (
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
                        <motion.button
                          onClick={() => toggleTechExpansion(project.id)}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className={`px-3 py-2 rounded-xl text-xs font-medium transition-all duration-200 cursor-pointer ${
                            isDark 
                              ? 'text-blue-400 bg-gray-800/60 border border-gray-600/50 hover:border-blue-500/50 hover:bg-gray-700/60' 
                              : 'text-blue-600 bg-gray-100 border border-gray-200 hover:border-blue-300 hover:bg-blue-50'
                          }`}
                        >
                          {expandedTechs[project.id] 
                            ? '− Show Less' 
                            : `+${(project.technologies || []).length - 6} More`
                          }
                        </motion.button>
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
                      {(project.features || [])
                        .slice(0, expandedFeatures[project.id] ? undefined : 3)
                        .map((feature, idx) => (
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
                        <motion.button
                          onClick={() => toggleFeaturesExpansion(project.id)}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className={`text-xs font-medium transition-all duration-200 cursor-pointer px-3 py-2 rounded-lg border ${
                            isDark 
                              ? 'text-emerald-400 bg-gray-800/60 border-gray-600/50 hover:border-emerald-500/50 hover:bg-gray-700/60' 
                              : 'text-emerald-600 bg-emerald-50 border-emerald-200 hover:border-emerald-300 hover:bg-emerald-100'
                          }`}
                        >
                          {expandedFeatures[project.id] 
                            ? '− Show Less Features' 
                            : `+${project.features.length - 3} Additional Features`
                          }
                        </motion.button>
                      )}
                    </div>
                  </div>

                  {/* Architecture Diagram */}
                  {project.architecture && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.5 }}
                      className="mb-8"
                    >
                      <h4 className={`text-sm font-bold mb-4 flex items-center gap-2 ${
                        isDark ? 'text-gray-200' : 'text-gray-800'
                      }`}>
                        <Database className="w-4 h-4" />
                        System Architecture
                        <span className={`text-xs px-2 py-1 rounded-md ${
                          isDark ? 'bg-blue-900/30 text-blue-400' : 'bg-blue-100 text-blue-600'
                        }`}>
                          Click to expand
                        </span>
                      </h4>
                      <motion.button
                        onClick={() => openDiagramModal(project)}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className={`relative w-full rounded-2xl overflow-hidden border transition-all duration-200 cursor-pointer group ${
                          isDark 
                            ? 'border-gray-700/50 bg-gray-900/30 hover:border-gray-600/70 hover:bg-gray-800/40' 
                            : 'border-gray-200/50 bg-gray-50/30 hover:border-gray-300/70 hover:bg-gray-100/40'
                        }`}
                      >
                        {/* Zoom overlay indicator */}
                        <div className={`absolute top-4 right-4 z-10 p-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 ${
                          isDark ? 'bg-gray-800/90 text-blue-400' : 'bg-white/90 text-blue-600'
                        }`}>
                          <ZoomIn className="w-4 h-4" />
                        </div>
                        <ArchitectureDiagram architecture={project.architecture} isDark={isDark} />
                      </motion.button>
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
      </div>

        {/* Modal for expanded diagram */}
        <AnimatePresence>
          {expandedDiagram && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={() => setExpandedDiagram(null)}
            >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className={`w-full max-w-7xl max-h-[90vh] overflow-y-auto rounded-2xl shadow-2xl ${
                isDark ? 'bg-gray-900' : 'bg-white'
              }`}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className={`sticky top-0 z-10 p-6 border-b ${
                isDark 
                  ? 'bg-gray-900/95 backdrop-blur border-gray-700' 
                  : 'bg-white/95 backdrop-blur border-gray-200'
              }`}>
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                      {expandedDiagram.title}
                    </h2>
                    <p className={`text-sm mt-1 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                      {expandedDiagram.description}
                    </p>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setExpandedDiagram(null)}
                    className={`p-2 rounded-lg transition-colors ${
                      isDark 
                        ? 'hover:bg-gray-800 text-gray-400 hover:text-white' 
                        : 'hover:bg-gray-100 text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    <X className="w-6 h-6" />
                  </motion.button>
                </div>
              </div>

              {/* Modal Content */}
              <div className="p-6 space-y-8">
                {/* Architecture Diagram */}
                {expandedDiagram.architecture && (
                  <div className={`p-6 rounded-xl border ${
                    isDark ? 'border-gray-700 bg-gray-800/30' : 'border-gray-200 bg-gray-50/30'
                  }`}>
                    <ArchitectureDiagram 
                      architecture={expandedDiagram.architecture} 
                      isDark={isDark}
                      isModal={true}
                    />
                  </div>
                )}

                {/* Project Timeline */}
                {expandedDiagram.projectTimeline && (
                  <TimelineComponent 
                    timeline={expandedDiagram.projectTimeline} 
                    isDark={isDark} 
                  />
                )}

                {/* Cost Breakdown */}
                {expandedDiagram.architecture && (
                  <CostBreakdownComponent 
                    architecture={expandedDiagram.architecture}
                    timeline={expandedDiagram.projectTimeline}
                    isDark={isDark} 
                  />
                )}

                {/* Additional Project Information */}
                {expandedDiagram.businessContext && (
                  <div className={`p-6 rounded-xl border ${
                    isDark 
                      ? 'bg-blue-900/20 border-blue-700/50' 
                      : 'bg-blue-50/70 border-blue-200/50'
                  }`}>
                    <h4 className={`text-lg font-semibold mb-3 ${isDark ? 'text-blue-400' : 'text-blue-600'}`}>
                      🎯 Business Context
                    </h4>
                    <p className={`${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                      {expandedDiagram.businessContext}
                    </p>
                  </div>
                )}

                {expandedDiagram.realWorldImpact && (
                  <div className={`p-6 rounded-xl border ${
                    isDark 
                      ? 'bg-green-900/20 border-green-700/50' 
                      : 'bg-green-50/70 border-green-200/50'
                  }`}>
                    <h4 className={`text-lg font-semibold mb-3 ${isDark ? 'text-green-400' : 'text-green-600'}`}>
                      📈 Real-World Impact
                    </h4>
                    <p className={`${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                      {expandedDiagram.realWorldImpact}
                    </p>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
          )}
        </AnimatePresence>
      </section>
  );
};

export default Projects;