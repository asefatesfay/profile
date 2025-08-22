import React, { useCallback, useMemo, useState } from 'react';
import ReactFlow, {
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
} from 'reactflow';
import { motion, AnimatePresence } from 'framer-motion';

import SkillNode from './SkillNode';
import CategoryNode from './CategoryNode';
import { skillsData } from '../data/skillsData';

import 'reactflow/dist/style.css';

const nodeTypes = {
  skillNode: SkillNode,
  categoryNode: CategoryNode,
};

const Roadmap = () => {
  const [activeTooltip, setActiveTooltip] = useState(null);
  const [activeTab, setActiveTab] = useState('all');
  
  // Get available categories for tabs
  const categories = useMemo(() => {
    return Object.values(skillsData.categories);
  }, []);

  // Create base nodes from data (only once)
  const baseNodes = useMemo(() => {
    const categoryNodes = Object.values(skillsData.categories).map(category => ({
      id: category.id,
      type: 'categoryNode',
      position: category.position,
      data: { category },
      draggable: true,
    }));

    const skillNodes = skillsData.skills.map(skill => ({
      id: skill.id,
      type: 'skillNode',
      position: skill.position,
      data: { skill },
      draggable: true,
    }));

    return [...categoryNodes, ...skillNodes];
  }, []);

  // Filter nodes based on active tab and include tooltip state
  const filteredNodes = useMemo(() => {
    let nodes;
    if (activeTab === 'all') {
      nodes = baseNodes;
    } else {
      // Include category node and skills from selected category
      const categoryNode = baseNodes.filter(node => 
        node.type === 'categoryNode' && node.id === activeTab
      );
      
      const skillNodes = baseNodes.filter(node => 
        node.type === 'skillNode' && node.data.skill.category === activeTab
      );
      
      nodes = [...categoryNode, ...skillNodes];
    }
    
    // Add tooltip state to skill nodes
    return nodes.map(node => {
      if (node.type === 'skillNode') {
        return {
          ...node,
          data: {
            ...node.data,
            activeTooltip,
            setActiveTooltip
          }
        };
      }
      return node;
    });
  }, [baseNodes, activeTab, activeTooltip, setActiveTooltip]);

  // Create edges from connections, filtered by active tab
  const filteredEdges = useMemo(() => {
    const allEdges = skillsData.connections.map((connection, index) => ({
      id: `edge-${index}`,
      source: connection.source,
      target: connection.target,
      type: 'smoothstep',
      animated: connection.type === 'prerequisite',
      style: {
        stroke: connection.type === 'prerequisite' ? '#10B981' : 
               connection.type === 'enables' ? '#3B82F6' : 
               connection.type === 'requires' ? '#EF4444' : '#6B7280',
        strokeWidth: 2,
      },
      label: connection.type,
      labelStyle: { 
        fontSize: 10, 
        fontWeight: 500,
        fill: '#374151'
      },
      labelBgStyle: { 
        fill: '#F9FAFB', 
        fillOpacity: 0.8 
      },
    }));

    if (activeTab === 'all') {
      return allEdges;
    }

    // Filter edges to only show connections between visible nodes
    const visibleNodeIds = new Set(filteredNodes.map(node => node.id));
    return allEdges.filter(edge => 
      visibleNodeIds.has(edge.source) && visibleNodeIds.has(edge.target)
    );
  }, [filteredNodes, activeTab]);

  const [nodes, setNodes, onNodesChange] = useNodesState(filteredNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(filteredEdges);

  // Update nodes when tab changes
  React.useEffect(() => {
    setNodes(filteredNodes);
    setEdges(filteredEdges);
  }, [filteredNodes, filteredEdges, setNodes, setEdges]);

  const onConnect = useCallback((params) => {
    setEdges((eds) => [...eds, params]);
  }, [setEdges]);

  // Handle background click to close tooltip
  const handleBackgroundClick = useCallback(() => {
    setActiveTooltip(null);
  }, [setActiveTooltip]);

  // Custom styles for different node states
  const getNodeStyle = useCallback((node) => {
    if (node.type === 'categoryNode') {
      return {
        border: 'none',
        borderRadius: '12px',
        backgroundColor: 'transparent',
      };
    }
    return {};
  }, []);

  return (
    <motion.div 
      className="h-screen w-full bg-gradient-to-br from-gray-50 to-gray-100 relative overflow-visible"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Tab Navigation */}
      <div className="absolute top-4 left-1/2 transform -translate-x-1/2 z-30 max-w-7xl">
        <motion.div 
          className="bg-white/90 backdrop-blur-sm rounded-xl p-2 shadow-lg border border-gray-200"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <div className="flex gap-1 flex-wrap justify-center">
            {/* All Skills Tab */}
            <button
              onClick={() => setActiveTab('all')}
              className={`px-3 py-2 rounded-lg text-xs sm:text-sm font-medium transition-all duration-200 ${
                activeTab === 'all'
                  ? 'bg-gray-900 text-white shadow-md'
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
              }`}
            >
              All Skills
            </button>
            
            {/* Category Tabs */}
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveTab(category.id)}
                className={`px-3 py-2 rounded-lg text-xs sm:text-sm font-medium transition-all duration-200 flex items-center gap-2 ${
                  activeTab === category.id
                    ? 'text-white shadow-md'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                }`}
                style={activeTab === category.id ? { backgroundColor: category.color } : {}}
              >
                <div 
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: activeTab === category.id ? 'rgba(255,255,255,0.8)' : category.color }}
                />
                <span className="hidden sm:inline">{category.title}</span>
                <span className="sm:hidden">{category.title.split(' ')[0]}</span>
              </button>
            ))}
          </div>
        </motion.div>
      </div>
      {/* Tooltip Activity Indicator */}
      <AnimatePresence>
        {activeTooltip && (
          <motion.div 
            className="absolute top-4 left-4 z-20 bg-blue-500 text-white px-3 py-1 rounded-full text-xs font-medium shadow-lg"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
          >
            Viewing: {nodes.find(n => n.id === activeTooltip)?.data?.skill?.name || activeTooltip}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="absolute top-20 left-4 z-10">
        <motion.div 
          className="bg-white/90 backdrop-blur-sm rounded-lg p-4 shadow-lg"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            {activeTab === 'all' ? 'All Skills' : categories.find(c => c.id === activeTab)?.title || 'Skills'} Roadmap
          </h3>
          <p className="text-sm text-gray-600 mb-3">
            {activeTab === 'all' 
              ? `Showing all ${filteredNodes.filter(n => n.type === 'skillNode').length} skills across categories`
              : `${filteredNodes.filter(n => n.type === 'skillNode').length} skills in this category`
            }
          </p>
          <div className="space-y-2 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span>Completed</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
              <span>In Progress</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
              <span>Planned</span>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="absolute top-20 right-4 z-10">
        <motion.div 
          className="bg-white/90 backdrop-blur-sm rounded-lg p-4 shadow-lg"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.6 }}
        >
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Connection Types</h3>
          <div className="space-y-2 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-8 h-0.5 bg-green-500"></div>
              <span>Prerequisite</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-0.5 bg-blue-500"></div>
              <span>Enables</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-0.5 bg-red-500"></div>
              <span>Requires</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-0.5 bg-gray-500"></div>
              <span>Related</span>
            </div>
          </div>
        </motion.div>
      </div>

      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        onPaneClick={handleBackgroundClick}
        nodeTypes={nodeTypes}
        fitView
        fitViewOptions={{
          padding: 0.2,
          minZoom: 0.3,
          maxZoom: 1.2,
          includeHiddenNodes: false,
        }}
        minZoom={0.2}
        maxZoom={1.5}
        defaultViewport={{ x: 0, y: 0, zoom: 0.6 }}
        className="bg-transparent"
        proOptions={{ hideAttribution: true }}
        key={activeTab} // Force re-render and fit view on tab change
      >
        <Background 
          color="#E5E7EB" 
          gap={20} 
          size={1}
          variant="dots"
        />
        <Controls 
          className="bg-white/90 backdrop-blur-sm border border-gray-200"
          showInteractive={false}
        />
        <MiniMap 
          className="bg-white/90 backdrop-blur-sm border border-gray-200 rounded-lg"
          nodeColor={(node) => {
            if (node.type === 'categoryNode') {
              return node.data.category.color;
            }
            switch (node.data.skill?.status) {
              case 'completed': return '#10B981';
              case 'in-progress': return '#3B82F6';
              case 'planned': return '#6B7280';
              default: return '#9CA3AF';
            }
          }}
          maskColor="rgba(255, 255, 255, 0.2)"
        />
      </ReactFlow>
    </motion.div>
  );
};

export default Roadmap;
