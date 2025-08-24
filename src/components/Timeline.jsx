import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Award, TrendingUp, Code, Users } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const Timeline = () => {
  const { isDark } = useTheme();
  const [selectedYear, setSelectedYear] = useState(null);

  const timelineData = [
    {
      year: 2024,
      title: "Senior Software Engineer & Tech Lead",
      company: "Current Role",
      type: "role",
      skills: ["System Architecture", "Team Leadership", "Machine Learning"],
      achievements: [
        "Led migration to microservices architecture",
        "Reduced system latency by 60%",
        "Mentored 8+ junior developers"
      ],
      technologies: ["Go", "Kubernetes", "AWS", "React"]
    },
    {
      year: 2023,
      title: "Machine Learning Journey Begins",
      type: "milestone",
      description: "Started comprehensive ML learning path",
      skills: ["TensorFlow", "PyTorch", "Data Science"],
      projects: ["Recommendation Engine", "Computer Vision"]
    },
    {
      year: 2022,
      title: "Cloud Architecture Mastery",
      type: "skill",
      skills: ["AWS Solutions Architect", "DevOps", "Terraform"],
      certifications: ["AWS Solutions Architect", "Kubernetes CKA"]
    },
    {
      year: 2021,
      title: "Full-Stack Development",
      company: "Previous Company",
      type: "role",
      skills: ["React", "Node.js", "PostgreSQL"],
      achievements: [
        "Built real-time collaboration platform",
        "Implemented microservices architecture"
      ]
    }
  ];

  return (
    <div className={`min-h-screen p-6 transition-colors duration-300 ${
      isDark 
        ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900' 
        : 'bg-gradient-to-br from-gray-50 to-gray-100'
    }`}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className={`text-4xl font-bold mb-4 transition-colors duration-300 ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}>Career Journey</h1>
          <p className={`text-lg transition-colors duration-300 ${
            isDark ? 'text-gray-300' : 'text-gray-600'
          }`}>My evolution as a software engineer and technical leader</p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-500"></div>

          {timelineData.map((item, index) => (
            <motion.div
              key={item.year}
              className="relative mb-12 ml-16"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              {/* Timeline dot */}
              <div className={`absolute -left-10 top-0 w-4 h-4 bg-blue-500 rounded-full border-4 shadow-lg transition-colors duration-300 ${
                isDark ? 'border-gray-800' : 'border-white'
              }`}></div>
              
              {/* Content card */}
              <div className={`rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 ${
                isDark 
                  ? 'bg-gray-800 border border-gray-700 hover:border-gray-600' 
                  : 'bg-white hover:shadow-xl'
              }`}>
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl font-bold text-blue-600">{item.year}</span>
                  {item.type === 'role' && <Users className="w-5 h-5 text-green-500" />}
                  {item.type === 'milestone' && <Award className="w-5 h-5 text-yellow-500" />}
                  {item.type === 'skill' && <Code className="w-5 h-5 text-purple-500" />}
                </div>
                
                <h3 className={`text-xl font-semibold mb-2 transition-colors duration-300 ${
                  isDark ? 'text-gray-100' : 'text-gray-900'
                }`}>{item.title}</h3>
                {item.company && (
                  <p className={`mb-3 flex items-center gap-2 transition-colors duration-300 ${
                    isDark ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                    <MapPin className="w-4 h-4" />
                    {item.company}
                  </p>
                )}
                
                {item.description && (
                  <p className={`mb-4 transition-colors duration-300 ${
                    isDark ? 'text-gray-300' : 'text-gray-700'
                  }`}>{item.description}</p>
                )}
                
                {item.achievements && (
                  <div className="mb-4">
                    <h4 className={`font-medium mb-2 transition-colors duration-300 ${
                      isDark ? 'text-gray-200' : 'text-gray-900'
                    }`}>Key Achievements:</h4>
                    <ul className="space-y-1">
                      {item.achievements.map((achievement, i) => (
                        <li key={i} className={`text-sm flex items-start gap-2 transition-colors duration-300 ${
                          isDark ? 'text-gray-300' : 'text-gray-700'
                        }`}>
                          <TrendingUp className="w-3 h-3 mt-1 text-green-500 flex-shrink-0" />
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                
                <div className="flex flex-wrap gap-2">
                  {item.skills.map((skill, i) => (
                    <span key={i} className={`px-3 py-1 text-sm rounded-full transition-colors duration-300 ${
                      isDark 
                        ? 'bg-blue-900/30 text-blue-300' 
                        : 'bg-blue-100 text-blue-700'
                    }`}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Timeline;
