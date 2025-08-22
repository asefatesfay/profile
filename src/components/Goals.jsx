import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Target, 
  Plus, 
  Edit, 
  Trash2, 
  CheckCircle, 
  Circle, 
  Calendar, 
  TrendingUp,
  Clock,
  BookOpen,
  Code,
  Trophy,
  Users,
  Star,
  AlertTriangle,
  ChevronDown,
  ChevronRight
} from 'lucide-react';

const Goals = () => {
  const [goals, setGoals] = useState(() => {
    const saved = localStorage.getItem('career-goals');
    return saved ? JSON.parse(saved) : [
      {
        id: 'ml-mastery',
        title: 'Master Machine Learning & AI',
        description: 'Become proficient in ML algorithms, deep learning, and AI application development',
        category: 'skill',
        priority: 'high',
        status: 'in-progress',
        progress: 65,
        targetDate: '2024-12-31',
        createdDate: '2024-01-01',
        milestones: [
          { id: 1, title: 'Complete ML fundamentals', completed: true, date: '2024-02-15' },
          { id: 2, title: 'Build first ML project', completed: true, date: '2024-03-01' },
          { id: 3, title: 'Learn deep learning', completed: false, date: '2024-06-01' },
          { id: 4, title: 'Deploy ML model to production', completed: false, date: '2024-09-01' },
          { id: 5, title: 'Complete advanced ML course', completed: false, date: '2024-11-01' }
        ],
        relatedSkills: ['Machine Learning', 'Python', 'TensorFlow', 'PyTorch'],
        timeInvestment: '10 hours/week'
      },
      {
        id: 'cloud-architect',
        title: 'Become AWS Solutions Architect Expert',
        description: 'Achieve AWS Solutions Architect Professional certification and lead cloud initiatives',
        category: 'certification',
        priority: 'high',
        status: 'in-progress',
        progress: 40,
        targetDate: '2024-08-31',
        createdDate: '2024-01-15',
        milestones: [
          { id: 1, title: 'Pass Solutions Architect Associate', completed: true, date: '2024-01-15' },
          { id: 2, title: 'Complete advanced AWS courses', completed: false, date: '2024-05-01' },
          { id: 3, title: 'Build complex multi-tier architecture', completed: false, date: '2024-06-15' },
          { id: 4, title: 'Pass Professional certification exam', completed: false, date: '2024-08-31' }
        ],
        relatedSkills: ['AWS', 'Cloud Architecture', 'System Design', 'DevOps'],
        timeInvestment: '8 hours/week'
      },
      {
        id: 'team-leadership',
        title: 'Develop Team Leadership Skills',
        description: 'Transition to senior technical leadership role with team management responsibilities',
        category: 'career',
        priority: 'medium',
        status: 'planned',
        progress: 20,
        targetDate: '2025-06-30',
        createdDate: '2024-02-01',
        milestones: [
          { id: 1, title: 'Complete leadership training program', completed: false, date: '2024-06-01' },
          { id: 2, title: 'Mentor 3+ junior developers', completed: true, date: '2024-04-01' },
          { id: 3, title: 'Lead cross-functional project', completed: false, date: '2024-09-01' },
          { id: 4, title: 'Get promoted to senior lead role', completed: false, date: '2025-06-30' }
        ],
        relatedSkills: ['Leadership', 'Communication', 'Project Management', 'Mentoring'],
        timeInvestment: '5 hours/week'
      },
      {
        id: 'open-source',
        title: 'Contribute to Major Open Source Projects',
        description: 'Become an active contributor to popular open source projects and build community presence',
        category: 'community',
        priority: 'medium',
        status: 'in-progress',
        progress: 30,
        targetDate: '2024-12-31',
        createdDate: '2024-01-01',
        milestones: [
          { id: 1, title: 'Make first contribution to React ecosystem', completed: true, date: '2024-02-01' },
          { id: 2, title: 'Contribute to 5 different projects', completed: false, date: '2024-06-01' },
          { id: 3, title: 'Become maintainer of a project', completed: false, date: '2024-10-01' },
          { id: 4, title: 'Speak at tech conference about OSS', completed: false, date: '2024-12-01' }
        ],
        relatedSkills: ['Git', 'Collaboration', 'Documentation', 'Community Building'],
        timeInvestment: '4 hours/week'
      }
    ];
  });

  const [selectedCategory, setSelectedCategory] = useState('all');
  const [showAddForm, setShowAddForm] = useState(false);
  const [expandedGoal, setExpandedGoal] = useState(null);

  // Save goals to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('career-goals', JSON.stringify(goals));
  }, [goals]);

  const categories = [
    { id: 'all', name: 'All Goals', icon: Target },
    { id: 'skill', name: 'Skill Development', icon: BookOpen },
    { id: 'certification', name: 'Certifications', icon: Trophy },
    { id: 'career', name: 'Career Growth', icon: TrendingUp },
    { id: 'community', name: 'Community & Impact', icon: Users }
  ];

  const priorities = [
    { id: 'high', name: 'High', color: 'bg-red-100 text-red-700 border-red-200' },
    { id: 'medium', name: 'Medium', color: 'bg-yellow-100 text-yellow-700 border-yellow-200' },
    { id: 'low', name: 'Low', color: 'bg-green-100 text-green-700 border-green-200' }
  ];

  const statuses = [
    { id: 'planned', name: 'Planned', color: 'bg-gray-100 text-gray-700' },
    { id: 'in-progress', name: 'In Progress', color: 'bg-blue-100 text-blue-700' },
    { id: 'completed', name: 'Completed', color: 'bg-green-100 text-green-700' },
    { id: 'on-hold', name: 'On Hold', color: 'bg-orange-100 text-orange-700' }
  ];

  const filteredGoals = selectedCategory === 'all' 
    ? goals 
    : goals.filter(goal => goal.category === selectedCategory);

  const getProgressColor = (progress) => {
    if (progress >= 80) return 'bg-green-500';
    if (progress >= 50) return 'bg-blue-500';
    if (progress >= 25) return 'bg-yellow-500';
    return 'bg-red-500';
  };

  const getPriorityColor = (priority) => {
    const priorityObj = priorities.find(p => p.id === priority);
    return priorityObj ? priorityObj.color : 'bg-gray-100 text-gray-700 border-gray-200';
  };

  const getStatusColor = (status) => {
    const statusObj = statuses.find(s => s.id === status);
    return statusObj ? statusObj.color : 'bg-gray-100 text-gray-700';
  };

  const getDaysUntilTarget = (targetDate) => {
    const target = new Date(targetDate);
    const today = new Date();
    const diffTime = target - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  const updateGoalProgress = (goalId, newProgress) => {
    setGoals(goals.map(goal => 
      goal.id === goalId 
        ? { ...goal, progress: newProgress, status: newProgress === 100 ? 'completed' : goal.status }
        : goal
    ));
  };

  const toggleMilestone = (goalId, milestoneId) => {
    setGoals(goals.map(goal => {
      if (goal.id === goalId) {
        const updatedMilestones = goal.milestones.map(milestone => 
          milestone.id === milestoneId 
            ? { ...milestone, completed: !milestone.completed }
            : milestone
        );
        
        // Calculate new progress based on completed milestones
        const completedCount = updatedMilestones.filter(m => m.completed).length;
        const newProgress = Math.round((completedCount / updatedMilestones.length) * 100);
        
        return {
          ...goal,
          milestones: updatedMilestones,
          progress: newProgress,
          status: newProgress === 100 ? 'completed' : goal.status
        };
      }
      return goal;
    }));
  };

  const getOverallStats = () => {
    const totalGoals = goals.length;
    const completedGoals = goals.filter(g => g.status === 'completed').length;
    const inProgressGoals = goals.filter(g => g.status === 'in-progress').length;
    const averageProgress = totalGoals > 0 
      ? Math.round(goals.reduce((sum, goal) => sum + goal.progress, 0) / totalGoals)
      : 0;
    
    return { totalGoals, completedGoals, inProgressGoals, averageProgress };
  };

  const stats = getOverallStats();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4 flex items-center justify-center gap-3">
            <Target className="w-10 h-10 text-blue-600" />
            Goals & Progress Tracking
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Set, track, and achieve your career goals with milestone-based progress tracking and actionable insights.
          </p>
        </motion.div>

        {/* Stats Overview */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-6 rounded-xl text-white">
            <div className="flex items-center gap-3 mb-2">
              <Target className="w-8 h-8" />
              <span className="text-sm font-medium opacity-90">Total Goals</span>
            </div>
            <div className="text-3xl font-bold">{stats.totalGoals}</div>
          </div>
          
          <div className="bg-gradient-to-r from-green-500 to-green-600 p-6 rounded-xl text-white">
            <div className="flex items-center gap-3 mb-2">
              <CheckCircle className="w-8 h-8" />
              <span className="text-sm font-medium opacity-90">Completed</span>
            </div>
            <div className="text-3xl font-bold">{stats.completedGoals}</div>
          </div>
          
          <div className="bg-gradient-to-r from-purple-500 to-purple-600 p-6 rounded-xl text-white">
            <div className="flex items-center gap-3 mb-2">
              <TrendingUp className="w-8 h-8" />
              <span className="text-sm font-medium opacity-90">In Progress</span>
            </div>
            <div className="text-3xl font-bold">{stats.inProgressGoals}</div>
          </div>
          
          <div className="bg-gradient-to-r from-orange-500 to-orange-600 p-6 rounded-xl text-white">
            <div className="flex items-center gap-3 mb-2">
              <Star className="w-8 h-8" />
              <span className="text-sm font-medium opacity-90">Avg Progress</span>
            </div>
            <div className="text-3xl font-bold">{stats.averageProgress}%</div>
          </div>
        </motion.div>

        {/* Category Filters */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => {
              const Icon = category.icon;
              const count = category.id === 'all' 
                ? goals.length 
                : goals.filter(g => g.category === category.id).length;
              
              return (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    selectedCategory === category.id
                      ? 'bg-blue-600 text-white shadow-md'
                      : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {category.name} ({count})
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* Goals List */}
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          {filteredGoals.map((goal, index) => {
            const isExpanded = expandedGoal === goal.id;
            const daysUntilTarget = getDaysUntilTarget(goal.targetDate);
            const isOverdue = daysUntilTarget < 0;
            const isUrgent = daysUntilTarget <= 30 && daysUntilTarget >= 0;

            return (
              <motion.div
                key={goal.id}
                className="bg-white rounded-xl shadow-sm border hover:shadow-md transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
              >
                {/* Goal Header */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-xl font-semibold text-gray-900">{goal.title}</h3>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getPriorityColor(goal.priority)}`}>
                          {goal.priority} priority
                        </span>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(goal.status)}`}>
                          {goal.status.replace('-', ' ')}
                        </span>
                      </div>
                      <p className="text-gray-600 mb-3">{goal.description}</p>
                      
                      <div className="flex items-center gap-4 text-sm text-gray-500">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          Target: {new Date(goal.targetDate).toLocaleDateString()}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {goal.timeInvestment}
                        </div>
                        {(isOverdue || isUrgent) && (
                          <div className={`flex items-center gap-1 ${isOverdue ? 'text-red-600' : 'text-orange-600'}`}>
                            <AlertTriangle className="w-4 h-4" />
                            {isOverdue ? `${Math.abs(daysUntilTarget)} days overdue` : `${daysUntilTarget} days left`}
                          </div>
                        )}
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3 ml-4">
                      <div className="text-right">
                        <div className="text-2xl font-bold text-gray-900">{goal.progress}%</div>
                        <div className="text-sm text-gray-500">progress</div>
                      </div>
                      <button
                        onClick={() => setExpandedGoal(isExpanded ? null : goal.id)}
                        className="p-2 text-gray-400 hover:text-gray-600 transition-colors"
                      >
                        {isExpanded ? (
                          <ChevronDown className="w-5 h-5" />
                        ) : (
                          <ChevronRight className="w-5 h-5" />
                        )}
                      </button>
                    </div>
                  </div>

                  {/* Progress Bar */}
                  <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
                    <motion.div 
                      className={`h-2 rounded-full ${getProgressColor(goal.progress)}`}
                      initial={{ width: 0 }}
                      animate={{ width: `${goal.progress}%` }}
                      transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                    />
                  </div>

                  {/* Related Skills */}
                  <div className="flex flex-wrap gap-2">
                    {goal.relatedSkills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-2 py-1 bg-blue-50 text-blue-700 text-xs rounded"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Expanded Content */}
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="border-t border-gray-200"
                    >
                      <div className="p-6">
                        <h4 className="text-lg font-semibold text-gray-900 mb-4">Milestones</h4>
                        <div className="space-y-3">
                          {goal.milestones.map((milestone) => (
                            <div
                              key={milestone.id}
                              className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg"
                            >
                              <button
                                onClick={() => toggleMilestone(goal.id, milestone.id)}
                                className="flex-shrink-0"
                              >
                                {milestone.completed ? (
                                  <CheckCircle className="w-5 h-5 text-green-600" />
                                ) : (
                                  <Circle className="w-5 h-5 text-gray-400" />
                                )}
                              </button>
                              <div className="flex-1">
                                <div className={`font-medium ${milestone.completed ? 'text-green-900 line-through' : 'text-gray-900'}`}>
                                  {milestone.title}
                                </div>
                                <div className="text-sm text-gray-500">
                                  Target: {new Date(milestone.date).toLocaleDateString()}
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </motion.div>

        {/* No Goals Message */}
        {filteredGoals.length === 0 && (
          <div className="text-center py-12">
            <Target className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No goals found</h3>
            <p className="text-gray-500">No goals in this category yet.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Goals;
