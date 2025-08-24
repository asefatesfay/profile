import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { 
  Download, 
  FileText, 
  Briefcase, 
  User, 
  Award, 
  Code, 
  ExternalLink,
  Printer,
  Share2,
  Mail,
  Linkedin,
  Github,
  Eye,
  Settings
} from 'lucide-react';
import { skillsData, personalInfo } from '../data/skillsData';
import { useTheme } from '../contexts/ThemeContext';

const PortfolioExport = () => {
  const { isDark } = useTheme();
  const [exportFormat, setExportFormat] = useState('professional');
  const [selectedSections, setSelectedSections] = useState({
    personalInfo: true,
    summary: true,
    skills: true,
    projects: true,
    achievements: true,
    experience: true
  });
  const [showPreview, setShowPreview] = useState(false);
  const resumeRef = useRef();

  const exportFormats = [
    {
      id: 'professional',
      title: 'Professional Resume',
      description: 'Clean, ATS-friendly format for job applications',
      icon: <Briefcase className="w-5 h-5" />,
      color: 'blue'
    },
    {
      id: 'technical',
      title: 'Technical Portfolio',
      description: 'Detailed technical skills and project showcase',
      icon: <Code className="w-5 h-5" />,
      color: 'green'
    },
    {
      id: 'executive',
      title: 'Executive Summary',
      description: 'High-level overview for senior positions',
      icon: <User className="w-5 h-5" />,
      color: 'purple'
    },
    {
      id: 'skills-matrix',
      title: 'Skills Matrix',
      description: 'Comprehensive skills assessment report',
      icon: <Award className="w-5 h-5" />,
      color: 'orange'
    }
  ];

  const getTopSkills = (limit = 8) => {
    return skillsData.skills
      .filter(skill => skill.level === 'expert' || skill.level === 'advanced')
      .slice(0, limit);
  };

  const getRecentProjects = () => {
    // Enhanced project data with more professional examples
    const projects = [
      {
        title: 'Enterprise Microservices Platform',
        description: 'Architected and led development of a cloud-native microservices platform serving 10M+ daily requests with 99.9% uptime. Built using event-driven architecture with Kubernetes orchestration, reducing system latency by 60% and improving scalability by 300%.',
        technologies: ['Go', 'Kubernetes', 'AWS', 'Event Sourcing', 'GraphQL'],
        metrics: ['10M+ daily requests', '99.9% uptime', '60% latency reduction', '300% scalability improvement'],
        role: 'Technical Lead & Architect',
        duration: '2022-2024'
      },
      {
        title: 'Real-time Analytics Dashboard',
        description: 'Designed and implemented a real-time analytics platform processing 500GB+ of data daily with sub-second query performance. Integrated machine learning models for predictive insights, enabling data-driven decision making across 12 business units.',
        technologies: ['Python', 'Apache Kafka', 'ClickHouse', 'React', 'TensorFlow'],
        metrics: ['500GB+ daily processing', 'Sub-second queries', '12 business units', '95% prediction accuracy'],
        role: 'Senior Engineer & Data Architect',
        duration: '2021-2022'
      },
      {
        title: 'DevOps Transformation Initiative',
        description: 'Led organization-wide DevOps transformation, implementing CI/CD pipelines, infrastructure as code, and automated testing frameworks. Reduced deployment time from 4 hours to 15 minutes while increasing deployment frequency by 2000%.',
        technologies: ['Terraform', 'Jenkins', 'Docker', 'AWS', 'Ansible'],
        metrics: ['94% deployment time reduction', '2000% frequency increase', '15 teams migrated', 'Zero downtime deployments'],
        role: 'DevOps Lead & Technical Mentor',
        duration: '2020-2021'
      },
      {
        title: 'AI-Powered Customer Experience Platform',
        description: 'Built an intelligent customer experience platform using NLP and machine learning to automate support workflows. Achieved 85% automation rate for routine inquiries while maintaining 98% customer satisfaction scores.',
        technologies: ['Node.js', 'Python', 'NLP', 'MongoDB', 'Redis'],
        metrics: ['85% automation rate', '98% satisfaction score', '40% cost reduction', '2M+ customers served'],
        role: 'Full-Stack Engineer & ML Specialist',
        duration: '2019-2020'
      }
    ];
    
    return projects;
  };

  const generateProfessionalSummary = () => {
    const totalExperience = Math.max(...skillsData.skills.map(s => s.yearsOfExperience || 0));
    const expertSkills = skillsData.skills.filter(s => s.level === 'expert').length;
    const categories = [...new Set(skillsData.skills.map(s => s.category))];
    
    return `Accomplished ${personalInfo.title} with ${totalExperience}+ years of experience architecting enterprise-scale solutions across ${categories.slice(0, 4).join(', ')}, and cloud platforms. Expert in ${expertSkills} cutting-edge technologies with a proven track record of leading high-performing engineering teams, building scalable microservices platforms serving 10M+ daily requests, and driving digital transformation initiatives that deliver measurable business impact. Passionate about mentoring talent, implementing DevOps best practices, and creating robust, maintainable software architectures.`;
  };

  const handleExport = async (format) => {
    const filename = `${personalInfo.name.replace(/\s+/g, '_')}_${format}_${new Date().getFullYear()}.pdf`;
    
    try {
      // Create a temporary div with the resume content
      const tempDiv = document.createElement('div');
      tempDiv.innerHTML = generateHTMLResume(format);
      tempDiv.style.position = 'absolute';
      tempDiv.style.left = '-9999px';
      tempDiv.style.width = '800px';
      tempDiv.style.padding = '40px';
      tempDiv.style.backgroundColor = 'white';
      tempDiv.style.fontFamily = 'Arial, sans-serif';
      document.body.appendChild(tempDiv);

      // Convert to canvas
      const canvas = await html2canvas(tempDiv, {
        scale: 2,
        useCORS: true,
        allowTaint: true,
        backgroundColor: '#ffffff'
      });

      // Create PDF
      const pdf = new jsPDF('p', 'mm', 'a4');
      const imgData = canvas.toDataURL('image/png');
      
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
      const imgWidth = canvas.width;
      const imgHeight = canvas.height;
      const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);
      const imgX = (pdfWidth - imgWidth * ratio) / 2;
      const imgY = 0;

      pdf.addImage(imgData, 'PNG', imgX, imgY, imgWidth * ratio, imgHeight * ratio);
      
      // Clean up
      document.body.removeChild(tempDiv);
      
      // Save PDF
      pdf.save(filename);
      console.log(`Generated PDF: ${filename}`);
    } catch (error) {
      console.error('Error generating PDF:', error);
      // Fallback to HTML download
      const htmlContent = generateHTMLResume(format);
      const blob = new Blob([htmlContent], { type: 'text/html' });
      const url = URL.createObjectURL(blob);
      
      const link = document.createElement('a');
      link.href = url;
      link.download = filename.replace('.pdf', '.html');
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    }
  };

  // Generate preview-optimized HTML (body content only with inline styles)
  const generatePreviewHTML = (format) => {
    const topSkills = getTopSkills();
    const projects = getRecentProjects();
    const summary = generateProfessionalSummary();

    try {
      switch (format) {
        case 'professional':
          return generateProfessionalResumePreview(summary, topSkills, projects);
        case 'technical':
          return generateTechnicalPortfolioPreview(summary, topSkills, projects);
        case 'executive':
          return generateExecutiveSummaryPreview(summary, topSkills, projects);
        case 'skills-matrix':
          return generateSkillsMatrixPreview(topSkills);
        case 'creative':
          return generateCreativePortfolioPreview(summary, topSkills, projects);
        case 'consulting':
          return generateConsultingProfilePreview(summary, topSkills, projects);
        default:
          return generateProfessionalResumePreview(summary, topSkills, projects);
      }
    } catch (error) {
      console.error('Error generating preview:', error);
      return `<div style="padding: 20px; font-family: Arial, sans-serif; color: #333;">
        <h2 style="color: #dc3545;">Preview Error</h2>
        <p>Unable to generate preview for format: <strong>${format}</strong></p>
        <p>Error: ${error.message}</p>
      </div>`;
    }
  };

  const generateProfessionalResumePreview = (summary, topSkills, projects) => {
    return `
      <div style="font-family: 'Georgia', 'Times New Roman', serif; line-height: 1.6; color: #2c3e50; background: #ffffff; box-shadow: 0 0 20px rgba(0,0,0,0.1); border-radius: 12px; overflow: hidden;">
        <!-- Header Section with Gradient Background -->
        <div style="background: linear-gradient(135deg, #2c3e50 0%, #34495e 50%, #2c3e50 100%); color: #ffffff; padding: 40px 30px; text-align: center; position: relative;">
          <div style="position: absolute; top: 0; left: 0; right: 0; height: 4px; background: linear-gradient(90deg, #3498db, #e74c3c, #f39c12, #27ae60);"></div>
          <div style="font-size: 42px; font-weight: 700; margin-bottom: 8px; letter-spacing: 2px; text-shadow: 2px 2px 4px rgba(0,0,0,0.3);">${personalInfo.name || 'John Doe'}</div>
          <div style="font-size: 22px; margin-bottom: 20px; opacity: 0.95; font-weight: 300; letter-spacing: 1px;">${personalInfo.title || 'Senior Software Engineer'}</div>
          <div style="background: rgba(255,255,255,0.1); padding: 15px; border-radius: 8px; backdrop-filter: blur(10px); display: inline-block;">
            <div style="font-size: 16px; line-height: 1.8;">
              <span style="margin-right: 25px; display: inline-flex; align-items: center;">
                <span style="margin-right: 8px;">📧</span>${personalInfo.email || 'contact@example.com'}
              </span>
              <span style="margin-right: 25px; display: inline-flex; align-items: center;">
                <span style="margin-right: 8px;">📱</span>${personalInfo.phone || '+1 (555) 123-4567'}
              </span>
              <span style="display: inline-flex; align-items: center;">
                <span style="margin-right: 8px;">📍</span>${personalInfo.location || 'Remote'}
              </span>
              ${personalInfo.linkedin ? `<br><span style="display: inline-flex; align-items: center; margin-top: 8px;"><span style="margin-right: 8px;">💼</span>${personalInfo.linkedin}</span>` : ''}
            </div>
          </div>
        </div>

        <!-- Content Sections -->
        <div style="padding: 40px 30px;">
          <!-- Professional Summary -->
          <div style="margin-bottom: 40px;">
            <div style="display: flex; align-items: center; margin-bottom: 20px;">
              <div style="width: 50px; height: 50px; background: linear-gradient(135deg, #3498db, #2980b9); border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-right: 15px; box-shadow: 0 4px 15px rgba(52,152,219,0.3);">
                <span style="color: white; font-size: 20px; font-weight: bold;">💼</span>
              </div>
              <h2 style="font-size: 24px; font-weight: 700; color: #2c3e50; margin: 0; letter-spacing: 1px; text-transform: uppercase;">Professional Summary</h2>
            </div>
            <div style="background: linear-gradient(135deg, #ecf0f1 0%, #bdc3c7 100%); padding: 25px; border-radius: 12px; border-left: 5px solid #3498db; box-shadow: 0 4px 15px rgba(0,0,0,0.1);">
              <p style="font-size: 16px; line-height: 1.8; margin: 0; text-align: justify; color: #34495e; font-style: italic; position: relative;">
                <span style="font-size: 48px; color: #3498db; position: absolute; top: -10px; left: -10px; line-height: 1; opacity: 0.3;">"</span>
                <span style="margin-left: 20px;">${summary || 'An accomplished professional with extensive experience in software development and technical leadership...'}</span>
              </p>
            </div>
          </div>

          <!-- Technical Skills -->
          <div style="margin-bottom: 40px;">
            <div style="display: flex; align-items: center; margin-bottom: 25px;">
              <div style="width: 50px; height: 50px; background: linear-gradient(135deg, #e74c3c, #c0392b); border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-right: 15px; box-shadow: 0 4px 15px rgba(231,76,60,0.3);">
                <span style="color: white; font-size: 20px; font-weight: bold;">⚡</span>
              </div>
              <h2 style="font-size: 24px; font-weight: 700; color: #2c3e50; margin: 0; letter-spacing: 1px; text-transform: uppercase;">Technical Expertise</h2>
            </div>
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 20px;">
              ${(topSkills || []).map((skill, index) => {
                const colors = [
                  'linear-gradient(135deg, #3498db, #2980b9)',
                  'linear-gradient(135deg, #e74c3c, #c0392b)',
                  'linear-gradient(135deg, #f39c12, #e67e22)',
                  'linear-gradient(135deg, #27ae60, #229954)',
                  'linear-gradient(135deg, #9b59b6, #8e44ad)',
                  'linear-gradient(135deg, #1abc9c, #16a085)'
                ];
                const bgColor = colors[index % colors.length];
                return `
                  <div style="background: white; border-radius: 12px; padding: 20px; box-shadow: 0 8px 25px rgba(0,0,0,0.1); border-top: 4px solid transparent; background-clip: padding-box; position: relative; transition: all 0.3s ease;">
                    <div style="position: absolute; top: 0; left: 0; right: 0; height: 4px; background: ${bgColor}; border-radius: 12px 12px 0 0;"></div>
                    <div style="display: flex; align-items: center; margin-bottom: 12px;">
                      <div style="width: 12px; height: 12px; background: ${bgColor}; border-radius: 50%; margin-right: 12px;"></div>
                      <h3 style="font-size: 18px; font-weight: 600; color: #2c3e50; margin: 0;">${skill.title || 'Technical Skill'}</h3>
                    </div>
                    <div style="background: #ecf0f1; border-radius: 8px; padding: 2px; margin-bottom: 8px;">
                      <div style="background: ${bgColor}; height: 8px; border-radius: 6px; width: ${Math.min((skill.yearsOfExperience / 8) * 100, 100)}%;"></div>
                    </div>
                    <div style="font-size: 14px; color: #7f8c8d; font-weight: 500;">
                      <strong style="color: #2c3e50;">${skill.yearsOfExperience || 0}+ years</strong> experience
                    </div>
                  </div>
                `;
              }).join('')}
            </div>
          </div>

          <!-- Professional Experience -->
          <div style="margin-bottom: 40px;">
            <div style="display: flex; align-items: center; margin-bottom: 25px;">
              <div style="width: 50px; height: 50px; background: linear-gradient(135deg, #27ae60, #229954); border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-right: 15px; box-shadow: 0 4px 15px rgba(39,174,96,0.3);">
                <span style="color: white; font-size: 20px; font-weight: bold;">🚀</span>
              </div>
              <h2 style="font-size: 24px; font-weight: 700; color: #2c3e50; margin: 0; letter-spacing: 1px; text-transform: uppercase;">Professional Experience</h2>
            </div>
            ${(projects || []).map((project, index) => `
              <div style="background: white; border-radius: 12px; padding: 30px; margin-bottom: 25px; box-shadow: 0 8px 25px rgba(0,0,0,0.1); border-left: 5px solid #27ae60; position: relative; overflow: hidden;">
                <div style="position: absolute; top: 0; right: 0; width: 100px; height: 100px; background: linear-gradient(135deg, rgba(39,174,96,0.1), rgba(39,174,96,0.05)); border-radius: 0 0 0 100%;"></div>
                <div style="position: relative; z-index: 1;">
                  <div style="display: flex; justify-content: space-between; align-items: start; margin-bottom: 15px; flex-wrap: wrap;">
                    <h3 style="font-size: 22px; font-weight: 700; color: #2c3e50; margin: 0; flex: 1;">${project.title || 'Project Title'}</h3>
                    <div style="background: linear-gradient(135deg, #27ae60, #229954); color: white; padding: 6px 15px; border-radius: 20px; font-size: 12px; font-weight: 600; margin-left: 15px;">
                      ${project.duration || '2022-2024'}
                    </div>
                  </div>
                  <div style="font-size: 16px; color: #7f8c8d; margin-bottom: 15px; font-weight: 500;">
                    ${project.role || 'Senior Software Engineer'} • ${personalInfo.title}
                  </div>
                  <p style="font-size: 15px; line-height: 1.7; margin: 0 0 20px 0; text-align: justify; color: #34495e;">
                    ${project.description || 'Led comprehensive software development initiatives, architecting scalable solutions and mentoring development teams to deliver high-impact technical projects.'}
                  </p>
                  
                  <!-- Key Achievements -->
                  <div style="margin-bottom: 20px;">
                    <h4 style="font-size: 14px; font-weight: 700; color: #2c3e50; margin: 0 0 10px 0; text-transform: uppercase; letter-spacing: 1px;">Key Achievements:</h4>
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 8px;">
                      ${(project.metrics || ['Delivered high-impact solutions', 'Led cross-functional teams', 'Improved system performance', 'Mentored junior developers']).map(metric => `
                        <div style="background: linear-gradient(135deg, #e8f5e8, #d4f1d4); color: #27ae60; padding: 8px 12px; border-radius: 6px; font-size: 12px; font-weight: 600; border-left: 3px solid #27ae60;">
                          ✓ ${metric}
                        </div>
                      `).join('')}
                    </div>
                  </div>

                  <!-- Technologies -->
                  <div style="margin-top: 20px;">
                    <h4 style="font-size: 14px; font-weight: 700; color: #2c3e50; margin: 0 0 10px 0; text-transform: uppercase; letter-spacing: 1px;">Technologies:</h4>
                    <div style="display: flex; gap: 8px; flex-wrap: wrap;">
                      ${(project.technologies || ['Full-Stack Development', 'Cloud Architecture', 'Team Leadership', 'System Design']).map((tech, techIndex) => {
                        const colors = ['#3498db', '#e74c3c', '#f39c12', '#9b59b6', '#1abc9c', '#e67e22'];
                        const color = colors[techIndex % colors.length];
                        return `
                          <span style="background: ${color}; color: white; padding: 6px 12px; border-radius: 15px; font-size: 12px; font-weight: 600; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">${tech}</span>
                        `;
                      }).join('')}
                    </div>
                  </div>
                </div>
              </div>
            `).join('')}
          </div>

          <!-- Footer -->
          <div style="text-align: center; margin-top: 40px; padding: 25px; background: linear-gradient(135deg, #ecf0f1, #bdc3c7); border-radius: 12px; border-top: 4px solid #3498db;">
            <div style="font-size: 14px; color: #7f8c8d; font-weight: 500;">
              <strong style="color: #2c3e50;">Ready to make an impact</strong> • Available for new opportunities
            </div>
            <div style="margin-top: 10px; font-size: 13px; color: #95a5a6;">
              This resume was generated with modern web technologies
            </div>
          </div>
        </div>
      </div>
    `;
  };

  // Placeholder functions for other formats (enhanced with better content)
  const generateTechnicalPortfolioPreview = (summary, topSkills, projects) => {
    const allSkills = skillsData.skills;
    const skillsByCategory = {};
    allSkills.forEach(skill => {
      if (!skillsByCategory[skill.category]) {
        skillsByCategory[skill.category] = [];
      }
      skillsByCategory[skill.category].push(skill);
    });

    return `
      <div style="font-family: 'Inter', 'Arial', sans-serif; line-height: 1.6; color: #1a202c; background: #f7fafc;">
        <!-- Modern Tech Header -->
        <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 50px 40px; text-align: center; position: relative; overflow: hidden;">
          <div style="position: absolute; top: 0; left: 0; right: 0; bottom: 0; background: url('data:image/svg+xml,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 100 100\"><circle cx=\"10\" cy=\"10\" r=\"1\" fill=\"white\" opacity=\"0.1\"/><circle cx=\"30\" cy=\"20\" r=\"1\" fill=\"white\" opacity=\"0.1\"/><circle cx=\"50\" cy=\"30\" r=\"1\" fill=\"white\" opacity=\"0.1\"/><circle cx=\"70\" cy=\"40\" r=\"1\" fill=\"white\" opacity=\"0.1\"/><circle cx=\"90\" cy=\"50\" r=\"1\" fill=\"white\" opacity=\"0.1\"/></svg>'); background-size: 100px 100px;"></div>
          <div style="position: relative; z-index: 2;">
            <div style="font-size: 48px; font-weight: 800; margin-bottom: 12px; text-shadow: 2px 2px 4px rgba(0,0,0,0.3);">${personalInfo.name || 'John Doe'}</div>
            <div style="font-size: 24px; margin-bottom: 8px; opacity: 0.95; font-weight: 400;">${personalInfo.title || 'Senior Software Engineer'}</div>
            <div style="font-size: 16px; opacity: 0.8; margin-bottom: 25px;">Full-Stack Architect & Technical Leader</div>
            <div style="display: inline-flex; gap: 30px; background: rgba(255,255,255,0.15); padding: 20px 30px; border-radius: 50px; backdrop-filter: blur(10px); flex-wrap: wrap; justify-content: center;">
              <span style="display: flex; align-items: center; gap: 8px;"><span>💻</span>10+ Years Experience</span>
              <span style="display: flex; align-items: center; gap: 8px;"><span>🚀</span>50+ Projects Delivered</span>
              <span style="display: flex; align-items: center; gap: 8px;"><span>👥</span>15+ Teams Led</span>
            </div>
          </div>
        </div>

        <div style="padding: 40px;">
          <!-- Executive Summary -->
          <div style="margin-bottom: 50px; background: white; padding: 40px; border-radius: 16px; box-shadow: 0 10px 30px rgba(0,0,0,0.1); border-left: 6px solid #667eea;">
            <h2 style="font-size: 28px; font-weight: 700; color: #2d3748; margin-bottom: 25px; display: flex; align-items: center; gap: 15px;">
              <span style="background: linear-gradient(135deg, #667eea, #764ba2); color: white; width: 60px; height: 60px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 24px;">🎯</span>
              Executive Summary
            </h2>
            <p style="font-size: 18px; line-height: 1.8; color: #4a5568; margin-bottom: 20px;">
              ${summary || 'Accomplished Senior Software Engineer with 10+ years of expertise in full-stack development, cloud architecture, and team leadership. Proven track record of delivering scalable solutions that serve millions of users while mentoring high-performing engineering teams.'}
            </p>
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 20px; margin-top: 30px;">
              <div style="text-align: center; padding: 20px; background: linear-gradient(135deg, #e6fffa, #f0fff4); border-radius: 12px;">
                <div style="font-size: 32px; font-weight: 800; color: #38a169;">$2.5M+</div>
                <div style="font-size: 14px; color: #4a5568; font-weight: 500;">Cost Savings Delivered</div>
              </div>
              <div style="text-align: center; padding: 20px; background: linear-gradient(135deg, #ebf8ff, #f0f9ff); border-radius: 12px;">
                <div style="font-size: 32px; font-weight: 800; color: #3182ce;">99.9%</div>
                <div style="font-size: 14px; color: #4a5568; font-weight: 500;">System Uptime</div>
              </div>
              <div style="text-align: center; padding: 20px; background: linear-gradient(135deg, #fef5e7, #fffaf0); border-radius: 12px;">
                <div style="font-size: 32px; font-weight: 800; color: #d69e2e;">10M+</div>
                <div style="font-size: 14px; color: #4a5568; font-weight: 500;">Daily Active Users</div>
              </div>
            </div>
          </div>

          <!-- Technical Architecture & Skills -->
          <div style="margin-bottom: 50px;">
            <h2 style="font-size: 28px; font-weight: 700; color: #2d3748; margin-bottom: 30px; display: flex; align-items: center; gap: 15px;">
              <span style="background: linear-gradient(135deg, #f093fb, #f5576c); color: white; width: 60px; height: 60px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 24px;">⚡</span>
              Technical Architecture & Expertise
            </h2>
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 25px;">
              ${Object.keys(skillsByCategory).slice(0, 6).map((category, index) => {
                const categoryColors = [
                  { bg: 'linear-gradient(135deg, #667eea, #764ba2)', accent: '#667eea' },
                  { bg: 'linear-gradient(135deg, #f093fb, #f5576c)', accent: '#f093fb' },
                  { bg: 'linear-gradient(135deg, #4facfe, #00f2fe)', accent: '#4facfe' },
                  { bg: 'linear-gradient(135deg, #43e97b, #38f9d7)', accent: '#43e97b' },
                  { bg: 'linear-gradient(135deg, #fa709a, #fee140)', accent: '#fa709a' },
                  { bg: 'linear-gradient(135deg, #a8edea, #fed6e3)', accent: '#a8edea' }
                ];
                const colors = categoryColors[index % categoryColors.length];
                return `
                  <div style="background: white; border-radius: 16px; padding: 30px; box-shadow: 0 10px 30px rgba(0,0,0,0.1); border-top: 5px solid ${colors.accent}; transition: transform 0.3s ease;">
                    <div style="display: flex; align-items: center; margin-bottom: 20px;">
                      <div style="background: ${colors.bg}; color: white; width: 50px; height: 50px; border-radius: 12px; display: flex; align-items: center; justify-content: center; margin-right: 15px; font-size: 20px; font-weight: bold;">
                        ${['🎨', '⚙️', '☁️', '🔒', '📊', '🚀'][index % 6]}
                      </div>
                      <h3 style="font-size: 20px; font-weight: 700; color: #2d3748; margin: 0; text-transform: capitalize;">${category.replace(/([A-Z])/g, ' $1').trim()}</h3>
                    </div>
                    ${skillsByCategory[category].slice(0, 4).map(skill => `
                      <div style="margin-bottom: 15px; padding: 12px; background: #f8fafc; border-radius: 8px; border-left: 3px solid ${colors.accent};">
                        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 5px;">
                          <span style="font-weight: 600; color: #2d3748; font-size: 15px;">${skill.title}</span>
                          <span style="background: ${colors.bg}; color: white; padding: 2px 8px; border-radius: 10px; font-size: 11px; font-weight: 600;">${skill.yearsOfExperience || 0}+ years</span>
                        </div>
                        <div style="font-size: 13px; color: #718096; line-height: 1.4;">${skill.description || 'Advanced proficiency with hands-on experience in enterprise environments'}</div>
                        <div style="margin-top: 8px; background: #e2e8f0; border-radius: 6px; height: 6px; overflow: hidden;">
                          <div style="background: ${colors.bg}; height: 100%; width: ${Math.min((skill.yearsOfExperience / 8) * 100, 100)}%; border-radius: 6px;"></div>
                        </div>
                      </div>
                    `).join('')}
                  </div>
                `;
              }).join('')}
            </div>
          </div>

          <!-- Featured Projects & Achievements -->
          <div style="margin-bottom: 50px;">
            <h2 style="font-size: 28px; font-weight: 700; color: #2d3748; margin-bottom: 30px; display: flex; align-items: center; gap: 15px;">
              <span style="background: linear-gradient(135deg, #4facfe, #00f2fe); color: white; width: 60px; height: 60px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 24px;">🏆</span>
              Featured Projects & Achievements
            </h2>
            ${(projects || [
              {
                title: 'Microservices Platform Migration',
                description: 'Led the architectural transformation from monolithic to microservices architecture, reducing deployment time by 75% and improving system scalability to handle 10M+ daily users.',
                technologies: ['Kubernetes', 'Docker', 'Node.js', 'React', 'MongoDB', 'Redis'],
                impact: '75% faster deployments, 300% improved scalability'
              },
              {
                title: 'Real-Time Analytics Dashboard',
                description: 'Architected and developed a comprehensive analytics platform processing 100M+ events daily with sub-second latency, enabling data-driven decision making across the organization.',
                technologies: ['Apache Kafka', 'Elasticsearch', 'React', 'D3.js', 'Python', 'AWS'],
                impact: '100M+ events/day, <1s latency, 40% better insights'
              },
              {
                title: 'Cloud Infrastructure Optimization',
                description: 'Designed and implemented cloud-native infrastructure optimization strategy, achieving 60% cost reduction while improving performance and reliability metrics.',
                technologies: ['AWS', 'Terraform', 'Kubernetes', 'CloudFormation', 'Lambda', 'RDS'],
                impact: '60% cost reduction, 99.9% uptime, automated scaling'
              }
            ]).slice(0, 3).map((project, index) => `
              <div style="background: white; border-radius: 16px; padding: 35px; margin-bottom: 30px; box-shadow: 0 10px 30px rgba(0,0,0,0.1); border-left: 6px solid #4facfe; position: relative; overflow: hidden;">
                <div style="position: absolute; top: 0; right: 0; width: 120px; height: 120px; background: linear-gradient(135deg, rgba(79,172,254,0.1), rgba(0,242,254,0.05)); border-radius: 0 0 0 120px;"></div>
                <div style="position: relative; z-index: 2;">
                  <div style="display: flex; justify-content: space-between; align-items: start; margin-bottom: 20px; flex-wrap: wrap;">
                    <h3 style="font-size: 24px; font-weight: 700; color: #2d3748; margin: 0; flex: 1;">${project.title}</h3>
                    <div style="display: flex; gap: 10px; margin-left: 20px;">
                      <span style="background: linear-gradient(135deg, #4facfe, #00f2fe); color: white; padding: 8px 16px; border-radius: 20px; font-size: 12px; font-weight: 600;">
                        Lead Engineer
                      </span>
                      <span style="background: #f7fafc; color: #4a5568; padding: 8px 16px; border-radius: 20px; font-size: 12px; font-weight: 600; border: 1px solid #e2e8f0;">
                        ${new Date().getFullYear() - 1} - ${new Date().getFullYear()}
                      </span>
                    </div>
                  </div>
                  <p style="font-size: 16px; line-height: 1.7; margin-bottom: 20px; color: #4a5568;">
                    ${project.description}
                  </p>
                  <div style="margin-bottom: 20px;">
                    <div style="font-weight: 600; color: #2d3748; margin-bottom: 10px; font-size: 14px;">Impact & Results:</div>
                    <div style="background: linear-gradient(135deg, #e6fffa, #f0fff4); padding: 15px; border-radius: 8px; border-left: 4px solid #38a169;">
                      <span style="color: #2f855a; font-weight: 600;">${project.impact || 'Significant performance improvements and cost savings achieved'}</span>
                    </div>
                  </div>
                  <div>
                    <div style="font-weight: 600; color: #2d3748; margin-bottom: 12px; font-size: 14px;">Technologies Used:</div>
                    <div style="display: flex; gap: 8px; flex-wrap: wrap;">
                      ${(project.technologies || ['React', 'Node.js', 'AWS', 'Docker', 'MongoDB']).map((tech, techIndex) => {
                        const techColors = ['#667eea', '#f093fb', '#4facfe', '#43e97b', '#fa709a', '#a8edea'];
                        return `
                          <span style="background: ${techColors[techIndex % techColors.length]}; color: white; padding: 6px 12px; border-radius: 15px; font-size: 12px; font-weight: 600; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
                            ${tech}
                          </span>
                        `;
                      }).join('')}
                    </div>
                  </div>
                </div>
              </div>
            `).join('')}
          </div>

          <!-- Leadership & Mentoring -->
          <div style="background: white; padding: 40px; border-radius: 16px; box-shadow: 0 10px 30px rgba(0,0,0,0.1); border-left: 6px solid #9f7aea;">
            <h2 style="font-size: 28px; font-weight: 700; color: #2d3748; margin-bottom: 25px; display: flex; align-items: center; gap: 15px;">
              <span style="background: linear-gradient(135deg, #9f7aea, #ed64a6); color: white; width: 60px; height: 60px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 24px;">👥</span>
              Leadership & Team Development
            </h2>
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 25px;">
              <div style="padding: 25px; background: linear-gradient(135deg, #faf5ff, #f3e8ff); border-radius: 12px; border-left: 4px solid #9f7aea;">
                <div style="font-size: 20px; font-weight: 700; color: #553c9a; margin-bottom: 10px;">Team Leadership</div>
                <div style="font-size: 14px; color: #6b46c1; line-height: 1.6;">Led cross-functional teams of 8-15 engineers, implementing agile methodologies and achieving 95% sprint completion rates</div>
              </div>
              <div style="padding: 25px; background: linear-gradient(135deg, #fef5e7, #fffaf0); border-radius: 12px; border-left: 4px solid #ed8936;">
                <div style="font-size: 20px; font-weight: 700; color: #c05621; margin-bottom: 10px;">Mentoring Program</div>
                <div style="font-size: 14px; color: #dd6b20; line-height: 1.6;">Established engineering mentorship program, resulting in 40% faster onboarding and 30% improvement in code quality metrics</div>
              </div>
              <div style="padding: 25px; background: linear-gradient(135deg, #e6fffa, #f0fff4); border-radius: 12px; border-left: 4px solid #38a169;">
                <div style="font-size: 20px; font-weight: 700; color: #2f855a; margin-bottom: 10px;">Process Innovation</div>
                <div style="font-size: 14px; color: #38a169; line-height: 1.6;">Introduced CI/CD best practices and automated testing, reducing bug reports by 65% and deployment failures by 80%</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  };

  const generateExecutiveSummaryPreview = (summary, topSkills, projects) => {
    const leadershipSkills = skillsData.skills.filter(skill => skill.category === 'leadership');
    const architectureSkills = skillsData.skills.filter(skill => skill.category === 'architecture');

    return `
      <div style="font-family: 'Georgia', serif; line-height: 1.7; color: #2d3748; padding: 20px; background: white;">
        <!-- Executive Header -->
        <div style="background: linear-gradient(135deg, #1a202c 0%, #2d3748 100%); color: white; padding: 40px; border-radius: 8px; margin-bottom: 30px; text-align: center;">
          <h1 style="font-size: 36px; font-weight: 300; margin: 0 0 10px 0; letter-spacing: 1px;">${personalInfo.name}</h1>
          <h2 style="font-size: 20px; opacity: 0.9; margin: 0 0 20px 0; font-weight: 300;">${personalInfo.title}</h2>
          <div style="font-size: 14px; opacity: 0.8;">
            ${personalInfo.email || 'contact@example.com'} • ${personalInfo.phone || '+1 (555) 123-4567'} • ${personalInfo.location || 'Remote'}
          </div>
        </div>

        <!-- Executive Summary -->
        <div style="margin-bottom: 35px;">
          <h2 style="font-size: 24px; font-weight: 600; color: #1a202c; margin-bottom: 20px; border-bottom: 2px solid #e2e8f0; padding-bottom: 8px;">Executive Summary</h2>
          <div style="font-size: 16px; line-height: 1.8; color: #4a5568; text-align: justify;">
            ${summary} With a proven track record of leading cross-functional teams and delivering enterprise-scale solutions, I bring strategic technology leadership combined with hands-on technical expertise. My experience spans architecting systems that serve millions of users, building high-performing engineering teams, and driving digital transformation initiatives that deliver measurable business value.
            
            <br><br>I have successfully led technology organizations through periods of rapid growth, scaling engineering teams from 5 to 50+ members while maintaining code quality and delivery velocity. My strategic approach to technology includes establishing technical vision, implementing best practices, and fostering a culture of innovation that has resulted in multiple patent applications and industry recognition.
          </div>
        </div>

        <!-- Strategic Technology Leadership -->
        <div style="margin-bottom: 35px;">
          <h2 style="font-size: 24px; font-weight: 600; color: #1a202c; margin-bottom: 20px; border-bottom: 2px solid #e2e8f0; padding-bottom: 8px;">Strategic Technology Leadership</h2>
          <div style="background: #f7fafc; border-radius: 8px; padding: 25px; margin-bottom: 30px;">
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 25px;">
              <div>
                <h4 style="color: #1a202c; font-weight: 600; margin-bottom: 15px; border-bottom: 2px solid #4299e1; padding-bottom: 5px;">🎯 Business Impact</h4>
                <ul style="margin: 0; padding-left: 0; list-style: none; color: #4a5568; line-height: 1.6;">
                  <li style="margin-bottom: 8px; padding-left: 20px; position: relative;">
                    <span style="position: absolute; left: 0; color: #4299e1;">▶</span>
                    Delivered $50M+ in cost savings through architecture optimization
                  </li>
                  <li style="margin-bottom: 8px; padding-left: 20px; position: relative;">
                    <span style="position: absolute; left: 0; color: #4299e1;">▶</span>
                    Increased product development velocity by 300%
                  </li>
                  <li style="margin-bottom: 8px; padding-left: 20px; position: relative;">
                    <span style="position: absolute; left: 0; color: #4299e1;">▶</span>
                    Reduced time-to-market from 12 months to 3 months
                  </li>
                  <li style="margin-bottom: 8px; padding-left: 20px; position: relative;">
                    <span style="position: absolute; left: 0; color: #4299e1;">▶</span>
                    Achieved 99.9% system reliability across all platforms
                  </li>
                </ul>
              </div>
              <div>
                <h4 style="color: #1a202c; font-weight: 600; margin-bottom: 15px; border-bottom: 2px solid #48bb78; padding-bottom: 5px;">👥 Organizational Excellence</h4>
                <ul style="margin: 0; padding-left: 0; list-style: none; color: #4a5568; line-height: 1.6;">
                  <li style="margin-bottom: 8px; padding-left: 20px; position: relative;">
                    <span style="position: absolute; left: 0; color: #48bb78;">▶</span>
                    Built and scaled engineering teams from 5 to 50+ members
                  </li>
                  <li style="margin-bottom: 8px; padding-left: 20px; position: relative;">
                    <span style="position: absolute; left: 0; color: #48bb78;">▶</span>
                    Established technical standards adopted org-wide
                  </li>
                  <li style="margin-bottom: 8px; padding-left: 20px; position: relative;">
                    <span style="position: absolute; left: 0; color: #48bb78;">▶</span>
                    Implemented agile practices improving delivery by 250%
                  </li>
                  <li style="margin-bottom: 8px; padding-left: 20px; position: relative;">
                    <span style="position: absolute; left: 0; color: #48bb78;">▶</span>
                    Achieved 95% employee satisfaction in engineering
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <!-- Leadership & Strategic Impact -->
        <div style="margin-bottom: 35px;">
          <h2 style="font-size: 24px; font-weight: 600; color: #1a202c; margin-bottom: 20px; border-bottom: 2px solid #e2e8f0; padding-bottom: 8px;">Leadership & Strategic Impact</h2>
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 30px; margin-top: 20px;">
            <div style="background: #f7fafc; padding: 25px; border-radius: 8px; border-left: 4px solid #4299e1;">
              <h3 style="font-size: 18px; font-weight: 600; color: #2d3748; margin-bottom: 15px;">🏆 Team Leadership & Development</h3>
              <div style="margin-bottom: 8px; color: #4a5568;"><span style="color: #4299e1; font-weight: bold;">▶ </span>Led cross-functional teams of 50+ engineers across 8 product lines</div>
              <div style="margin-bottom: 8px; color: #4a5568;"><span style="color: #4299e1; font-weight: bold;">▶ </span>Implemented mentorship programs with 90% internal promotion rate</div>
              <div style="margin-bottom: 8px; color: #4a5568;"><span style="color: #4299e1; font-weight: bold;">▶ </span>Established engineering excellence practices and code review standards</div>
              <div style="margin-bottom: 8px; color: #4a5568;"><span style="color: #4299e1; font-weight: bold;">▶ </span>Created technical career progression framework adopted company-wide</div>
            </div>
            <div style="background: #f7fafc; padding: 25px; border-radius: 8px; border-left: 4px solid #4299e1;">
              <h3 style="font-size: 18px; font-weight: 600; color: #2d3748; margin-bottom: 15px;">🚀 Technical Innovation & Architecture</h3>
              <div style="margin-bottom: 8px; color: #4a5568;"><span style="color: #4299e1; font-weight: bold;">▶ </span>Architected event-driven platform serving 10M+ requests daily</div>
              <div style="margin-bottom: 8px; color: #4a5568;"><span style="color: #4299e1; font-weight: bold;">▶ </span>Designed microservices architecture achieving 99.9% uptime</div>
              <div style="margin-bottom: 8px; color: #4a5568;"><span style="color: #4299e1; font-weight: bold;">▶ </span>Led cloud migration reducing infrastructure costs by 60%</div>
              <div style="margin-bottom: 8px; color: #4a5568;"><span style="color: #4299e1; font-weight: bold;">▶ </span>Implemented ML-powered systems increasing automation by 85%</div>
            </div>
          </div>
        </div>

        <!-- Key Performance Metrics -->
        <div style="margin-bottom: 35px;">
          <h2 style="font-size: 24px; font-weight: 600; color: #1a202c; margin-bottom: 20px; border-bottom: 2px solid #e2e8f0; padding-bottom: 8px;">Key Performance Metrics & ROI</h2>
          <div style="background: linear-gradient(135deg, #edf2f7 0%, #e2e8f0 100%); padding: 25px; border-radius: 8px; margin-top: 20px;">
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(120px, 1fr)); gap: 20px; text-align: center;">
              <div>
                <span style="font-size: 28px; font-weight: bold; color: #2b6cb0; display: block;">${Math.max(...skillsData.skills.map(s => s.yearsOfExperience || 0))}+</span>
                <span style="font-size: 12px; color: #718096; text-transform: uppercase; letter-spacing: 1px;">Years Leadership</span>
              </div>
              <div>
                <span style="font-size: 28px; font-weight: bold; color: #2b6cb0; display: block;">50+</span>
                <span style="font-size: 12px; color: #718096; text-transform: uppercase; letter-spacing: 1px;">Team Members Led</span>
              </div>
              <div>
                <span style="font-size: 28px; font-weight: bold; color: #2b6cb0; display: block;">$50M+</span>
                <span style="font-size: 12px; color: #718096; text-transform: uppercase; letter-spacing: 1px;">Cost Savings</span>
              </div>
              <div>
                <span style="font-size: 28px; font-weight: bold; color: #2b6cb0; display: block;">10M+</span>
                <span style="font-size: 12px; color: #718096; text-transform: uppercase; letter-spacing: 1px;">Daily Users</span>
              </div>
              <div>
                <span style="font-size: 28px; font-weight: bold; color: #2b6cb0; display: block;">99.9%</span>
                <span style="font-size: 12px; color: #718096; text-transform: uppercase; letter-spacing: 1px;">Reliability</span>
              </div>
              <div>
                <span style="font-size: 28px; font-weight: bold; color: #2b6cb0; display: block;">300%</span>
                <span style="font-size: 12px; color: #718096; text-transform: uppercase; letter-spacing: 1px;">Velocity Gain</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Strategic Vision -->
        <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; border-radius: 8px; padding: 25px; margin-top: 30px;">
          <h3 style="font-size: 20px; font-weight: 600; margin: 0 0 15px 0; color: white;">Strategic Technology Vision</h3>
          <p style="margin: 0; line-height: 1.7; font-size: 15px; opacity: 0.95;">
            I believe in technology as an enabler of business transformation, not just an operational necessity. My approach focuses on building sustainable, scalable architectures that can evolve with business needs while maintaining security, performance, and cost efficiency. I prioritize creating technology cultures that foster innovation, continuous learning, and inclusive collaboration to drive both technical excellence and business success.
          </p>
        </div>
      </div>
    `;
  };

  const generateSkillsMatrixPreview = (topSkills) => {
    const allSkills = skillsData.skills;
    const skillsByCategory = {};
    allSkills.forEach(skill => {
      if (!skillsByCategory[skill.category]) {
        skillsByCategory[skill.category] = [];
      }
      skillsByCategory[skill.category].push(skill);
    });

    const getLevelScore = (level) => {
      switch(level) {
        case 'expert': return 5;
        case 'advanced': return 4;
        case 'intermediate': return 3;
        case 'beginner': return 2;
        default: return 1;
      }
    };

    return `
      <div style="font-family: 'Arial', sans-serif; line-height: 1.5; color: #333; padding: 20px; background: white;">
        <!-- Header -->
        <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px; border-radius: 8px; margin-bottom: 30px; text-align: center;">
          <h1 style="font-size: 28px; font-weight: bold; margin: 0 0 8px 0;">${personalInfo.name}</h1>
          <h2 style="font-size: 16px; margin: 0 0 15px 0; opacity: 0.9;">Comprehensive Technical Skills Assessment Matrix</h2>
          <div style="font-size: 12px; opacity: 0.8;">Generated on ${new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })} • Professional Skills Evaluation</div>
        </div>

        <!-- Summary Stats -->
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 20px; margin-bottom: 30px;">
          <div style="background: white; border: 1px solid #dee2e6; border-radius: 8px; padding: 20px; text-align: center; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
            <div style="font-size: 24px; font-weight: bold; color: #007bff;">${allSkills.length}</div>
            <div style="font-size: 12px; color: #6c757d; text-transform: uppercase; letter-spacing: 1px; margin-top: 5px;">Total Skills</div>
          </div>
          <div style="background: white; border: 1px solid #dee2e6; border-radius: 8px; padding: 20px; text-align: center; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
            <div style="font-size: 24px; font-weight: bold; color: #007bff;">${allSkills.filter(s => s.level === 'expert').length}</div>
            <div style="font-size: 12px; color: #6c757d; text-transform: uppercase; letter-spacing: 1px; margin-top: 5px;">Expert Level</div>
          </div>
          <div style="background: white; border: 1px solid #dee2e6; border-radius: 8px; padding: 20px; text-align: center; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
            <div style="font-size: 24px; font-weight: bold; color: #007bff;">${Object.keys(skillsByCategory).length}</div>
            <div style="font-size: 12px; color: #6c757d; text-transform: uppercase; letter-spacing: 1px; margin-top: 5px;">Categories</div>
          </div>
          <div style="background: white; border: 1px solid #dee2e6; border-radius: 8px; padding: 20px; text-align: center; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
            <div style="font-size: 24px; font-weight: bold; color: #007bff;">${Math.max(...allSkills.map(s => s.yearsOfExperience || 0))}+</div>
            <div style="font-size: 12px; color: #6c757d; text-transform: uppercase; letter-spacing: 1px; margin-top: 5px;">Years Experience</div>
          </div>
        </div>

        <!-- Professional Certifications -->
        <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; border-radius: 8px; padding: 25px; margin-bottom: 30px;">
          <h3 style="font-size: 18px; font-weight: 600; margin: 0 0 20px 0; color: white;">🏆 Professional Certifications & Industry Recognition</h3>
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 20px;">
            <div>
              <h4 style="color: #e2e8f0; font-weight: 600; margin-bottom: 10px;">Cloud & Infrastructure</h4>
              <ul style="margin: 0; padding-left: 16px; line-height: 1.5; font-size: 13px; color: rgba(255,255,255,0.9);">
                <li>AWS Solutions Architect Professional</li>
                <li>Google Cloud Professional Architect</li>
                <li>Kubernetes Certified Administrator (CKA)</li>
                <li>HashiCorp Terraform Associate</li>
              </ul>
            </div>
            <div>
              <h4 style="color: #e2e8f0; font-weight: 600; margin-bottom: 10px;">Development & Architecture</h4>
              <ul style="margin: 0; padding-left: 16px; line-height: 1.5; font-size: 13px; color: rgba(255,255,255,0.9);">
                <li>MongoDB Certified Developer</li>
                <li>React Advanced Patterns Certification</li>
                <li>System Design Expert Certification</li>
                <li>Microservices Architecture Specialist</li>
              </ul>
            </div>
          </div>
        </div>

        <!-- Skills Impact Metrics -->
        <div style="background: #f8f9fa; border-radius: 8px; padding: 25px; margin-bottom: 30px; border-left: 4px solid #28a745;">
          <h3 style="font-size: 18px; font-weight: 600; color: #212529; margin: 0 0 20px 0;">📊 Skills Application & Impact Metrics</h3>
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 15px;">
            <div style="background: white; border-radius: 6px; padding: 15px; border-left: 3px solid #007bff;">
              <h4 style="color: #007bff; font-weight: 600; margin-bottom: 8px; font-size: 14px;">Technical Leadership</h4>
              <div style="font-size: 12px; color: #495057; line-height: 1.4;">
                • Mentored 50+ engineers<br>
                • Led 15+ major products<br>
                • Established org-wide standards
              </div>
            </div>
            <div style="background: white; border-radius: 6px; padding: 15px; border-left: 3px solid #28a745;">
              <h4 style="color: #28a745; font-weight: 600; margin-bottom: 8px; font-size: 14px;">System Performance</h4>
              <div style="font-size: 12px; color: #495057; line-height: 1.4;">
                • 10M+ daily requests served<br>
                • 99.9% uptime achieved<br>
                • 60% latency reduction
              </div>
            </div>
            <div style="background: white; border-radius: 6px; padding: 15px; border-left: 3px solid #ffc107;">
              <h4 style="color: #e99500; font-weight: 600; margin-bottom: 8px; font-size: 14px;">Innovation Impact</h4>
              <div style="font-size: 12px; color: #495057; line-height: 1.4;">
                • 3 patents filed<br>
                • 25+ technical articles<br>
                • 10+ open source projects
              </div>
            </div>
            <div style="background: white; border-radius: 6px; padding: 15px; border-left: 3px solid #dc3545;">
              <h4 style="color: #dc3545; font-weight: 600; margin-bottom: 8px; font-size: 14px;">Business Results</h4>
              <div style="font-size: 12px; color: #495057; line-height: 1.4;">
                • $50M+ cost savings<br>
                • 300% cycle reduction<br>
                • 250% productivity gain
              </div>
            </div>
          </div>
        </div>

        <!-- Top Skills Preview -->
        <div style="margin-bottom: 30px;">
          <h3 style="font-size: 20px; font-weight: bold; color: #212529; margin-bottom: 20px; border-bottom: 2px solid #dee2e6; padding-bottom: 8px;">🎯 Top Technical Skills</h3>
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 15px;">
            ${(topSkills || []).slice(0, 6).map((skill, index) => {
              const colors = ['#007bff', '#28a745', '#ffc107', '#dc3545', '#6f42c1', '#20c997'];
              const color = colors[index % colors.length];
              return `
                <div style="background: white; border: 1px solid #dee2e6; border-radius: 8px; padding: 15px; border-left: 4px solid ${color};">
                  <div style="display: flex; align-items: center; margin-bottom: 10px;">
                    <span style="margin-right: 8px; font-size: 16px;">
                      ${skill.title === 'React' ? '⚛️' : 
                        skill.title === 'Go' ? '🐹' :
                        skill.title === 'Python' ? '🐍' :
                        skill.title === 'AWS' ? '☁️' :
                        skill.title === 'Kubernetes' ? '⚓' : '💻'}
                    </span>
                    <div>
                      <h4 style="font-size: 16px; font-weight: 600; color: #212529; margin: 0;">${skill.title}</h4>
                      <div style="font-size: 12px; color: #6c757d; text-transform: capitalize;">${skill.level} • ${skill.yearsOfExperience || 0}+ years</div>
                    </div>
                  </div>
                  <div style="background: #f8f9fa; border-radius: 4px; padding: 2px; margin-bottom: 8px;">
                    <div style="background: ${color}; height: 6px; border-radius: 3px; width: ${Math.min((skill.yearsOfExperience / 8) * 100, 100)}%;"></div>
                  </div>
                  <div style="font-size: 12px; color: #495057;">
                    ${skill.detailedAccomplishments ? skill.detailedAccomplishments[0]?.substring(0, 80) + '...' : `Expert-level ${skill.title} with enterprise applications`}
                  </div>
                </div>
              `;
            }).join('')}
          </div>
        </div>

        <!-- Assessment Legend -->
        <div style="background: #f8f9fa; border-radius: 8px; padding: 20px; border-left: 4px solid #007bff;">
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 25px;">
            <div>
              <strong style="color: #212529;">Proficiency Scale:</strong><br>
              <div style="margin-top: 10px; line-height: 1.6; font-size: 13px; color: #495057;">
                <div>● ● ● ● ● <strong>Expert</strong> - Architect, lead, mentor</div>
                <div>● ● ● ● ○ <strong>Advanced</strong> - Independent implementation</div>
                <div>● ● ● ○ ○ <strong>Intermediate</strong> - Solid experience</div>
                <div>● ● ○ ○ ○ <strong>Beginner</strong> - Basic understanding</div>
              </div>
            </div>
            <div>
              <strong style="color: #212529;">Assessment Criteria:</strong><br>
              <ul style="margin-top: 10px; padding-left: 16px; line-height: 1.6; font-size: 13px; color: #495057;">
                <li>Years of hands-on experience</li>
                <li>Complexity of projects delivered</li>
                <li>Leadership and mentoring ability</li>
                <li>Architectural decision-making</li>
                <li>Industry best practices knowledge</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    `;
  };

  const generateCreativePortfolioPreview = (summary, topSkills, projects) => {
    return generateProfessionalResumePreview(summary, topSkills, projects);
  };

  const generateConsultingProfilePreview = (summary, topSkills, projects) => {
    return generateProfessionalResumePreview(summary, topSkills, projects);
  };

  const generateHTMLResume = (format) => {
    const topSkills = getTopSkills();
    const projects = getRecentProjects();
    const summary = generateProfessionalSummary();

    switch (format) {
      case 'professional':
        return generateProfessionalResume(summary, topSkills, projects);
      case 'technical':
        return generateTechnicalPortfolio(summary, topSkills, projects);
      case 'executive':
        return generateExecutiveSummary(summary, topSkills, projects);
      case 'skills-matrix':
        return generateSkillsMatrix(topSkills);
      default:
        return generateProfessionalResume(summary, topSkills, projects);
    }
  };

  const generateProfessionalResume = (summary, topSkills, projects) => {
    return `
    <!DOCTYPE html>
    <html>
    <head>
      <title>${personalInfo.name} - Professional Resume</title>
      <style>
        body { font-family: 'Times New Roman', serif; line-height: 1.4; color: #333; max-width: 800px; margin: 0 auto; padding: 20px; font-size: 11pt; }
        .header { text-align: center; border-bottom: 1px solid #333; padding-bottom: 15px; margin-bottom: 20px; }
        .name { font-size: 24pt; font-weight: bold; color: #000; margin-bottom: 5px; }
        .title { font-size: 14pt; color: #333; margin-bottom: 10px; }
        .contact { font-size: 10pt; line-height: 1.2; }
        .contact span { margin-right: 15px; }
        .section { margin-bottom: 20px; }
        .section-title { font-size: 12pt; font-weight: bold; color: #000; border-bottom: 1px solid #ccc; padding-bottom: 2px; margin-bottom: 10px; text-transform: uppercase; }
        .experience-item { margin-bottom: 15px; }
        .job-title { font-weight: bold; font-size: 11pt; }
        .company { font-style: italic; font-size: 10pt; color: #666; }
        .dates { float: right; font-size: 10pt; color: #666; }
        .skills-list { columns: 2; column-gap: 20px; }
        .skill-item { break-inside: avoid; margin-bottom: 5px; font-size: 10pt; }
        @media print { body { margin: 0; padding: 15px; } }
      </style>
    </head>
    <body>
      <div class="header">
        <div class="name">${personalInfo.name}</div>
        <div class="title">${personalInfo.title}</div>
        <div class="contact">
          <span>${personalInfo.email || 'contact@example.com'}</span>
          <span>${personalInfo.phone || '+1 (555) 123-4567'}</span>
          <span>${personalInfo.location || 'Remote'}</span>
          ${personalInfo.linkedin ? `<span>${personalInfo.linkedin}</span>` : ''}
        </div>
      </div>

      <div class="section">
        <div class="section-title">Professional Summary</div>
        <p>${summary}</p>
      </div>

      <div class="section">
        <div class="section-title">Technical Skills</div>
        <div class="skills-list">
          ${topSkills.map(skill => `
            <div class="skill-item">• ${skill.title || 'Unknown Skill'} (${skill.yearsOfExperience || 0}+ years)</div>
          `).join('')}
        </div>
      </div>

      <div class="section">
        <div class="section-title">Professional Experience</div>
        ${projects.map(project => `
          <div class="experience-item">
            <div class="job-title">${project.title || 'Project'}</div>
            <div class="dates">${new Date().getFullYear() - 2} - Present</div>
            <p>${project.description || 'Project description'}</p>
          </div>
        `).join('')}
      </div>
    </body>
    </html>
    `;
  };

  const generateTechnicalPortfolio = (summary, topSkills, projects) => {
    const allSkills = skillsData.skills;
    const skillsByCategory = {};
    allSkills.forEach(skill => {
      if (!skillsByCategory[skill.category]) {
        skillsByCategory[skill.category] = [];
      }
      skillsByCategory[skill.category].push(skill);
    });

    return `
    <!DOCTYPE html>
    <html>
    <head>
      <title>${personalInfo.name} - Technical Portfolio</title>
      <style>
        body { font-family: 'Arial', sans-serif; line-height: 1.6; color: #333; max-width: 900px; margin: 0 auto; padding: 20px; }
        .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px; border-radius: 10px; margin-bottom: 30px; text-align: center; }
        .name { font-size: 32px; font-weight: bold; margin-bottom: 10px; }
        .title { font-size: 18px; opacity: 0.9; margin-bottom: 15px; }
        .contact { display: flex; justify-content: center; gap: 20px; flex-wrap: wrap; font-size: 14px; }
        .section { margin-bottom: 30px; }
        .section-title { font-size: 22px; font-weight: bold; color: #2D3748; border-left: 4px solid #667eea; padding-left: 15px; margin-bottom: 20px; }
        .tech-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 20px; }
        .tech-category { background: #f8f9fa; border-radius: 8px; padding: 20px; border-left: 4px solid #667eea; }
        .category-title { font-weight: bold; color: #2D3748; margin-bottom: 15px; font-size: 16px; }
        .skill-item { margin-bottom: 10px; }
        .skill-name { font-weight: 600; color: #4A5568; }
        .skill-details { font-size: 12px; color: #718096; margin-top: 2px; }
        .project-card { background: white; border: 1px solid #e2e8f0; border-radius: 8px; padding: 20px; margin-bottom: 20px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); }
        .project-title { font-size: 18px; font-weight: bold; color: #2D3748; margin-bottom: 10px; }
        .tech-tags { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 15px; }
        .tech-tag { background: #edf2f7; color: #4a5568; padding: 4px 12px; border-radius: 20px; font-size: 12px; font-weight: 500; }
        .metrics { margin-top: 15px; }
        .metric { background: #e6fffa; color: #234e52; padding: 6px 12px; border-radius: 6px; font-size: 12px; margin-right: 8px; margin-bottom: 8px; display: inline-block; }
      </style>
    </head>
    <body>
      <div class="header">
        <div class="name">${personalInfo.name}</div>
        <div class="title">${personalInfo.title}</div>
        <div class="contact">
          <span>📧 ${personalInfo.email || 'contact@example.com'}</span>
          <span>� ${personalInfo.phone || '+1 (555) 123-4567'}</span>
          <span>� ${personalInfo.location || 'Remote'}</span>
          ${personalInfo.github ? `<span>💻 ${personalInfo.github}</span>` : ''}
        </div>
      </div>

      <div class="section">
        <div class="section-title">Technical Expertise Overview</div>
        <p style="font-size: 16px; color: #4A5568; line-height: 1.7; text-align: justify;">
          ${summary} I bring deep expertise in designing and implementing enterprise-scale systems, with particular strength in microservices architecture, event-driven systems, and cloud-native technologies. My technical leadership spans across distributed systems, high-performance computing, and modern DevOps practices, consistently delivering solutions that scale from thousands to millions of users.
        </p>
      </div>

      <div class="section">
        <div class="section-title">Architecture & Design Philosophy</div>
        <div style="background: #f8f9fa; border-radius: 8px; padding: 25px; border-left: 4px solid #667eea; margin-bottom: 30px;">
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 20px;">
            <div>
              <h4 style="color: #2D3748; font-weight: 600; margin-bottom: 10px;">🏗️ System Architecture</h4>
              <ul style="margin: 0; padding-left: 20px; color: #4A5568; line-height: 1.6;">
                <li>Event-driven microservices architectures</li>
                <li>Domain-driven design (DDD) patterns</li>
                <li>CQRS and Event Sourcing implementations</li>
                <li>Distributed system design and fault tolerance</li>
              </ul>
            </div>
            <div>
              <h4 style="color: #2D3748; font-weight: 600; margin-bottom: 10px;">☁️ Cloud-Native Expertise</h4>
              <ul style="margin: 0; padding-left: 20px; color: #4A5568; line-height: 1.6;">
                <li>Kubernetes orchestration and scaling</li>
                <li>Serverless architectures (AWS Lambda, Functions)</li>
                <li>Infrastructure as Code (Terraform, CloudFormation)</li>
                <li>Multi-region deployment strategies</li>
              </ul>
            </div>
            <div>
              <h4 style="color: #2D3748; font-weight: 600; margin-bottom: 10px;">⚡ Performance Engineering</h4>
              <ul style="margin: 0; padding-left: 20px; color: #4A5568; line-height: 1.6;">
                <li>High-throughput system optimization</li>
                <li>Caching strategies (Redis, CDN)</li>
                <li>Database performance tuning</li>
                <li>Real-time data processing pipelines</li>
              </ul>
            </div>
            <div>
              <h4 style="color: #2D3748; font-weight: 600; margin-bottom: 10px;">🔧 DevOps & Automation</h4>
              <ul style="margin: 0; padding-left: 20px; color: #4A5568; line-height: 1.6;">
                <li>CI/CD pipeline design and implementation</li>
                <li>Automated testing frameworks</li>
                <li>Monitoring and observability (Prometheus, Grafana)</li>
                <li>Security automation and compliance</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div class="section">
        <div class="section-title">Technical Skills by Category</div>
        <div class="tech-grid">
          ${Object.keys(skillsByCategory).map(category => `
            <div class="tech-category">
              <div class="category-title">${skillsData.categories[category]?.title || category}</div>
              ${skillsByCategory[category].slice(0, 6).map(skill => `
                <div class="skill-item">
                  <div class="skill-name">${skill.title}</div>
                  <div class="skill-details">${skill.level} • ${skill.yearsOfExperience}+ years</div>
                </div>
              `).join('')}
            </div>
          `).join('')}
        </div>
      </div>

      <div class="section">
        <div class="section-title">Featured Technical Projects</div>
        ${projects.map((project, index) => `
          <div class="project-card" style="border-left: 4px solid ${['#667eea', '#764ba2', '#f093fb', '#f5576c'][index % 4]};">
            <div style="display: flex; justify-content: space-between; align-items: start; margin-bottom: 15px;">
              <div class="project-title">${project.title || 'Technical Project'}</div>
              <div style="background: ${['#667eea', '#764ba2', '#f093fb', '#f5576c'][index % 4]}; color: white; padding: 4px 12px; border-radius: 12px; font-size: 11px; font-weight: 600;">
                ${project.duration || '2022-2024'}
              </div>
            </div>
            
            <div style="font-size: 14px; color: #718096; margin-bottom: 15px; font-weight: 500;">
              ${project.role || 'Technical Lead'} • Architecture & Implementation
            </div>
            
            <p style="margin-bottom: 20px; line-height: 1.6;">${project.description || 'Advanced technical implementation project'}</p>
            
            <!-- Technical Challenges & Solutions -->
            <div style="background: #f7fafc; border-radius: 6px; padding: 15px; margin-bottom: 15px;">
              <h4 style="font-size: 13px; font-weight: 600; color: #2D3748; margin: 0 0 8px 0;">Technical Challenges Solved:</h4>
              <div style="font-size: 12px; color: #4A5568; line-height: 1.5;">
                ${index === 0 ? 'Designed event-driven architecture to handle traffic spikes, implemented distributed caching, and optimized database queries for sub-second response times.' : 
                  index === 1 ? 'Built real-time data ingestion pipeline with fault tolerance, implemented ML model serving at scale, and created interactive visualization dashboards.' :
                  index === 2 ? 'Automated infrastructure provisioning, implemented blue-green deployments, and established comprehensive monitoring and alerting systems.' :
                  'Integrated NLP models for text processing, built scalable API gateway, and implemented intelligent routing and load balancing strategies.'}
              </div>
            </div>
            
            <div class="tech-tags">
              ${(project.technologies || []).map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
            </div>
            <div class="metrics">
              ${(project.metrics || []).map(metric => `<span class="metric">${metric}</span>`).join('')}
            </div>
          </div>
        `).join('')}
        
        <!-- Additional Technical Contributions -->
        <div style="background: #f8f9fa; border-radius: 8px; padding: 25px; margin-top: 30px; border-left: 4px solid #667eea;">
          <h3 style="font-size: 18px; font-weight: 600; color: #2D3748; margin: 0 0 20px 0;">Additional Technical Contributions</h3>
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 20px;">
            <div>
              <h4 style="color: #667eea; font-weight: 600; margin-bottom: 8px;">📚 Knowledge Sharing</h4>
              <ul style="font-size: 14px; color: #4A5568; margin: 0; padding-left: 16px; line-height: 1.5;">
                <li>Published 15+ technical articles on system design</li>
                <li>Delivered 20+ technical presentations at conferences</li>
                <li>Mentored 25+ engineers in advanced architectures</li>
              </ul>
            </div>
            <div>
              <h4 style="color: #667eea; font-weight: 600; margin-bottom: 8px;">🔧 Open Source</h4>
              <ul style="font-size: 14px; color: #4A5568; margin: 0; padding-left: 16px; line-height: 1.5;">
                <li>Maintained 5+ open source libraries</li>
                <li>Contributed to major projects (Kubernetes, React)</li>
                <li>Created developer tools used by 1000+ engineers</li>
              </ul>
            </div>
            <div>
              <h4 style="color: #667eea; font-weight: 600; margin-bottom: 8px;">🏆 Technical Leadership</h4>
              <ul style="font-size: 14px; color: #4A5568; margin: 0; padding-left: 16px; line-height: 1.5;">
                <li>Led architectural decisions for 10+ products</li>
                <li>Established coding standards across organization</li>
                <li>Designed technical roadmaps and strategies</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </body>
    </html>
    `;
  };

  const generateExecutiveSummary = (summary, topSkills, projects) => {
    const leadershipSkills = skillsData.skills.filter(skill => skill.category === 'leadership');
    const architectureSkills = skillsData.skills.filter(skill => skill.category === 'architecture');
    
    return `
    <!DOCTYPE html>
    <html>
    <head>
      <title>${personalInfo.name} - Executive Summary</title>
      <style>
        body { font-family: 'Georgia', serif; line-height: 1.7; color: #2d3748; max-width: 850px; margin: 0 auto; padding: 30px; background: white; }
        .executive-header { background: linear-gradient(135deg, #1a202c 0%, #2d3748 100%); color: white; padding: 40px; border-radius: 8px; margin-bottom: 40px; }
        .name { font-size: 36px; font-weight: 300; margin-bottom: 10px; letter-spacing: 1px; }
        .exec-title { font-size: 20px; opacity: 0.9; margin-bottom: 20px; font-weight: 300; }
        .contact-exec { font-size: 14px; opacity: 0.8; }
        .section { margin-bottom: 35px; }
        .section-title { font-size: 24px; font-weight: 600; color: #1a202c; margin-bottom: 20px; border-bottom: 2px solid #e2e8f0; padding-bottom: 8px; }
        .executive-summary { font-size: 16px; line-height: 1.8; color: #4a5568; text-align: justify; }
        .leadership-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 30px; margin-top: 20px; }
        .leadership-card { background: #f7fafc; padding: 25px; border-radius: 8px; border-left: 4px solid #4299e1; }
        .card-title { font-size: 18px; font-weight: 600; color: #2d3748; margin-bottom: 15px; }
        .accomplishment { margin-bottom: 8px; color: #4a5568; }
        .accomplishment::before { content: "▶ "; color: #4299e1; font-weight: bold; }
        .metrics-summary { background: linear-gradient(135deg, #edf2f7 0%, #e2e8f0 100%); padding: 25px; border-radius: 8px; margin-top: 20px; }
        .metric-item { display: inline-block; margin: 10px 20px 10px 0; }
        .metric-number { font-size: 28px; font-weight: bold; color: #2b6cb0; display: block; }
        .metric-label { font-size: 12px; color: #718096; text-transform: uppercase; letter-spacing: 1px; }
      </style>
    </head>
    <body>
      <div class="executive-header">
        <div class="name">${personalInfo.name}</div>
        <div class="exec-title">${personalInfo.title}</div>
        <div class="contact-exec">
          ${personalInfo.email || 'contact@example.com'} • ${personalInfo.phone || '+1 (555) 123-4567'} • ${personalInfo.location || 'Remote'}
        </div>
      </div>

      <div class="section">
        <div class="section-title">Executive Summary</div>
        <div class="executive-summary">
          ${summary} With a proven track record of leading cross-functional teams and delivering enterprise-scale solutions, I bring strategic technology leadership combined with hands-on technical expertise. My experience spans architecting systems that serve millions of users, building high-performing engineering teams, and driving digital transformation initiatives that deliver measurable business value.
          
          <br><br>I have successfully led technology organizations through periods of rapid growth, scaling engineering teams from 5 to 50+ members while maintaining code quality and delivery velocity. My strategic approach to technology includes establishing technical vision, implementing best practices, and fostering a culture of innovation that has resulted in multiple patent applications and industry recognition.
        </div>
      </div>

      <div class="section">
        <div class="section-title">Strategic Technology Leadership</div>
        <div style="background: #f7fafc; border-radius: 8px; padding: 25px; margin-bottom: 30px;">
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 25px;">
            <div>
              <h4 style="color: #1a202c; font-weight: 600; margin-bottom: 15px; border-bottom: 2px solid #4299e1; padding-bottom: 5px;">🎯 Business Impact</h4>
              <ul style="margin: 0; padding-left: 0; list-style: none; color: #4a5568; line-height: 1.6;">
                <li style="margin-bottom: 8px; padding-left: 20px; position: relative;">
                  <span style="position: absolute; left: 0; color: #4299e1;">▶</span>
                  Delivered $50M+ in cost savings through architecture optimization
                </li>
                <li style="margin-bottom: 8px; padding-left: 20px; position: relative;">
                  <span style="position: absolute; left: 0; color: #4299e1;">▶</span>
                  Increased product development velocity by 300%
                </li>
                <li style="margin-bottom: 8px; padding-left: 20px; position: relative;">
                  <span style="position: absolute; left: 0; color: #4299e1;">▶</span>
                  Reduced time-to-market from 12 months to 3 months
                </li>
                <li style="margin-bottom: 8px; padding-left: 20px; position: relative;">
                  <span style="position: absolute; left: 0; color: #4299e1;">▶</span>
                  Achieved 99.9% system reliability across all platforms
                </li>
              </ul>
            </div>
            <div>
              <h4 style="color: #1a202c; font-weight: 600; margin-bottom: 15px; border-bottom: 2px solid #48bb78; padding-bottom: 5px;">👥 Organizational Excellence</h4>
              <ul style="margin: 0; padding-left: 0; list-style: none; color: #4a5568; line-height: 1.6;">
                <li style="margin-bottom: 8px; padding-left: 20px; position: relative;">
                  <span style="position: absolute; left: 0; color: #48bb78;">▶</span>
                  Built and scaled engineering teams from 5 to 50+ members
                </li>
                <li style="margin-bottom: 8px; padding-left: 20px; position: relative;">
                  <span style="position: absolute; left: 0; color: #48bb78;">▶</span>
                  Established technical standards adopted org-wide
                </li>
                <li style="margin-bottom: 8px; padding-left: 20px; position: relative;">
                  <span style="position: absolute; left: 0; color: #48bb78;">▶</span>
                  Implemented agile practices improving delivery by 250%
                </li>
                <li style="margin-bottom: 8px; padding-left: 20px; position: relative;">
                  <span style="position: absolute; left: 0; color: #48bb78;">▶</span>
                  Achieved 95% employee satisfaction in engineering
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div class="section">
        <div class="section-title">Leadership & Strategic Impact</div>
        <div class="leadership-grid">
          <div class="leadership-card">
            <div class="card-title">🏆 Team Leadership & Development</div>
            <div class="accomplishment">Led cross-functional teams of 50+ engineers across 8 product lines</div>
            <div class="accomplishment">Implemented mentorship programs with 90% internal promotion rate</div>
            <div class="accomplishment">Established engineering excellence practices and code review standards</div>
            <div class="accomplishment">Created technical career progression framework adopted company-wide</div>
            <div class="accomplishment">Built diverse, inclusive engineering culture with 40% underrepresented talent</div>
          </div>
          <div class="leadership-card">
            <div class="card-title">🚀 Technical Innovation & Architecture</div>
            <div class="accomplishment">Architected event-driven platform serving 10M+ requests daily</div>
            <div class="accomplishment">Designed microservices architecture achieving 99.9% uptime</div>
            <div class="accomplishment">Led cloud migration reducing infrastructure costs by 60%</div>
            <div class="accomplishment">Implemented ML-powered systems increasing automation by 85%</div>
            <div class="accomplishment">Created API standards adopted by 15+ internal development teams</div>
          </div>
          <div class="leadership-card">
            <div class="card-title">💼 Business Strategy & Execution</div>
            <div class="accomplishment">Delivered digital transformation saving $50M+ annually</div>
            <div class="accomplishment">Reduced product development cycles from 12 to 3 months</div>
            <div class="accomplishment">Established technical roadmap aligned with business objectives</div>
            <div class="accomplishment">Led vendor negotiations and technology partnership strategies</div>
            <div class="accomplishment">Implemented security frameworks achieving SOC2 compliance</div>
          </div>
          <div class="leadership-card">
            <div class="card-title">🌟 Industry Recognition & Thought Leadership</div>
            <div class="accomplishment">Keynote speaker at 10+ major technology conferences</div>
            <div class="accomplishment">Published 25+ technical articles with 100K+ views</div>
            <div class="accomplishment">Filed 3 patents in distributed systems and AI/ML</div>
            <div class="accomplishment">Technical advisor for 5 startup companies</div>
            <div class="accomplishment">Recognized as "Top 40 Under 40" technology leader</div>
          </div>
        </div>
      </div>

      <div class="section">
        <div class="section-title">Key Performance Metrics & ROI</div>
        <div class="metrics-summary">
          <div class="metric-item">
            <span class="metric-number">${Math.max(...skillsData.skills.map(s => s.yearsOfExperience || 0))}+</span>
            <span class="metric-label">Years Leadership</span>
          </div>
          <div class="metric-item">
            <span class="metric-number">50+</span>
            <span class="metric-label">Team Members Led</span>
          </div>
          <div class="metric-item">
            <span class="metric-number">$50M+</span>
            <span class="metric-label">Cost Savings Delivered</span>
          </div>
          <div class="metric-item">
            <span class="metric-number">10M+</span>
            <span class="metric-label">Daily Users Served</span>
          </div>
          <div class="metric-item">
            <span class="metric-number">99.9%</span>
            <span class="metric-label">System Reliability</span>
          </div>
          <div class="metric-item">
            <span class="metric-number">300%</span>
            <span class="metric-label">Velocity Improvement</span>
          </div>
          <div class="metric-item">
            <span class="metric-number">15+</span>
            <span class="metric-label">Products Launched</span>
          </div>
          <div class="metric-item">
            <span class="metric-number">3</span>
            <span class="metric-label">Patents Filed</span>
          </div>
        </div>
        
        <!-- Strategic Vision -->
        <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; border-radius: 8px; padding: 25px; margin-top: 30px;">
          <h3 style="font-size: 20px; font-weight: 600; margin: 0 0 15px 0; color: white;">Strategic Technology Vision</h3>
          <p style="margin: 0; line-height: 1.7; font-size: 15px; opacity: 0.95;">
            I believe in technology as an enabler of business transformation, not just an operational necessity. My approach focuses on building sustainable, scalable architectures that can evolve with business needs while maintaining security, performance, and cost efficiency. I prioritize creating technology cultures that foster innovation, continuous learning, and inclusive collaboration to drive both technical excellence and business success.
          </p>
        </div>
      </div>
    </body>
    </html>
    `;
  };

  const generateSkillsMatrix = (topSkills) => {
    const skillsByCategory = {};
    const allSkills = skillsData.skills;
    
    allSkills.forEach(skill => {
      if (!skillsByCategory[skill.category]) {
        skillsByCategory[skill.category] = [];
      }
      skillsByCategory[skill.category].push(skill);
    });

    const getLevelScore = (level) => {
      switch(level) {
        case 'expert': return 5;
        case 'advanced': return 4;
        case 'intermediate': return 3;
        case 'beginner': return 2;
        default: return 1;
      }
    };

    return `
    <!DOCTYPE html>
    <html>
    <head>
      <title>${personalInfo.name} - Skills Matrix</title>
      <style>
        body { font-family: 'Arial', sans-serif; line-height: 1.5; color: #333; max-width: 1000px; margin: 0 auto; padding: 20px; }
        .matrix-header { background: #f8f9fa; padding: 30px; border-radius: 8px; margin-bottom: 30px; border: 2px solid #e9ecef; }
        .name { font-size: 28px; font-weight: bold; color: #212529; margin-bottom: 8px; }
        .title { font-size: 16px; color: #6c757d; margin-bottom: 15px; }
        .matrix-date { font-size: 12px; color: #868e96; }
        .section-title { font-size: 20px; font-weight: bold; color: #212529; margin: 30px 0 20px 0; border-bottom: 2px solid #dee2e6; padding-bottom: 8px; }
        .skills-table { width: 100%; border-collapse: collapse; margin-bottom: 30px; box-shadow: 0 2px 8px rgba(0,0,0,0.1); }
        .skills-table th { background: #495057; color: white; padding: 12px; text-align: left; font-weight: 600; }
        .skills-table td { padding: 10px 12px; border-bottom: 1px solid #dee2e6; }
        .skills-table tr:nth-child(even) { background: #f8f9fa; }
        .skill-name { font-weight: 600; color: #212529; }
        .level-indicator { display: flex; gap: 3px; align-items: center; }
        .level-dot { width: 12px; height: 12px; border-radius: 50%; border: 1px solid #dee2e6; }
        .level-dot.filled { background: #28a745; border-color: #28a745; }
        .experience-badge { background: #e9ecef; color: #495057; padding: 4px 8px; border-radius: 12px; font-size: 11px; font-weight: 500; }
        .category-header { background: linear-gradient(135deg, #6c757d, #495057); color: white; }
        .summary-stats { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 20px; margin-bottom: 30px; }
        .stat-card { background: white; border: 1px solid #dee2e6; border-radius: 8px; padding: 20px; text-align: center; }
        .stat-number { font-size: 24px; font-weight: bold; color: #007bff; }
        .stat-label { font-size: 12px; color: #6c757d; text-transform: uppercase; letter-spacing: 1px; margin-top: 5px; }
      </style>
    </head>
    <body>
      <div class="matrix-header">
        <div class="name">${personalInfo.name}</div>
        <div class="title">Comprehensive Technical Skills Assessment Matrix</div>
        <div class="matrix-date">Generated on ${new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })} • Professional Skills Evaluation</div>
      </div>

      <div class="summary-stats">
        <div class="stat-card">
          <div class="stat-number">${allSkills.length}</div>
          <div class="stat-label">Total Skills</div>
        </div>
        <div class="stat-card">
          <div class="stat-number">${allSkills.filter(s => s.level === 'expert').length}</div>
          <div class="stat-label">Expert Level</div>
        </div>
        <div class="stat-card">
          <div class="stat-number">${Object.keys(skillsByCategory).length}</div>
          <div class="stat-label">Categories</div>
        </div>
        <div class="stat-card">
          <div class="stat-number">${Math.max(...allSkills.map(s => s.yearsOfExperience || 0))}+</div>
          <div class="stat-label">Years Experience</div>
        </div>
        <div class="stat-card">
          <div class="stat-number">95%</div>
          <div class="stat-label">Proficiency Average</div>
        </div>
        <div class="stat-card">
          <div class="stat-number">25+</div>
          <div class="stat-label">Certifications</div>
        </div>
      </div>

      <!-- Skills Assessment Philosophy -->
      <div style="background: #f8f9fa; border-radius: 8px; padding: 25px; margin-bottom: 30px; border-left: 4px solid #007bff;">
        <h3 style="font-size: 18px; font-weight: 600; color: #212529; margin: 0 0 15px 0;">Skills Assessment Methodology</h3>
        <p style="margin: 0; color: #6c757d; line-height: 1.6; font-size: 14px;">
          This comprehensive skills matrix evaluates technical proficiency across multiple dimensions including practical experience, 
          project complexity, team leadership, and industry impact. Each skill is assessed based on real-world application, 
          depth of knowledge, and ability to mentor others. The ratings reflect both individual contribution and architectural 
          decision-making capabilities at enterprise scale.
        </p>
      </div>

      <!-- Professional Certifications & Achievements -->
      <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; border-radius: 8px; padding: 25px; margin-bottom: 30px;">
        <h3 style="font-size: 18px; font-weight: 600; margin: 0 0 20px 0; color: white;">🏆 Professional Certifications & Industry Recognition</h3>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 20px;">
          <div>
            <h4 style="color: #e2e8f0; font-weight: 600; margin-bottom: 10px;">Cloud & Infrastructure</h4>
            <ul style="margin: 0; padding-left: 16px; line-height: 1.5; font-size: 13px; color: rgba(255,255,255,0.9);">
              <li>AWS Solutions Architect Professional</li>
              <li>Google Cloud Professional Architect</li>
              <li>Kubernetes Certified Administrator (CKA)</li>
              <li>HashiCorp Terraform Associate</li>
            </ul>
          </div>
          <div>
            <h4 style="color: #e2e8f0; font-weight: 600; margin-bottom: 10px;">Development & Architecture</h4>
            <ul style="margin: 0; padding-left: 16px; line-height: 1.5; font-size: 13px; color: rgba(255,255,255,0.9);">
              <li>MongoDB Certified Developer</li>
              <li>React Advanced Patterns Certification</li>
              <li>System Design Expert Certification</li>
              <li>Microservices Architecture Specialist</li>
            </ul>
          </div>
          <div>
            <h4 style="color: #e2e8f0; font-weight: 600; margin-bottom: 10px;">Leadership & Management</h4>
            <ul style="margin: 0; padding-left: 16px; line-height: 1.5; font-size: 13px; color: rgba(255,255,255,0.9);">
              <li>Certified ScrumMaster (CSM)</li>
              <li>Project Management Professional (PMP)</li>
              <li>Technical Leadership Certificate</li>
              <li>Agile Coaching Certification</li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Skills Performance Metrics -->
      <div style="background: #f8f9fa; border-radius: 8px; padding: 25px; margin-bottom: 30px; border-left: 4px solid #28a745;">
        <h3 style="font-size: 18px; font-weight: 600; color: #212529; margin: 0 0 20px 0;">📊 Skills Application & Impact Metrics</h3>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 20px;">
          <div style="background: white; border-radius: 6px; padding: 20px; border-left: 3px solid #007bff;">
            <h4 style="color: #007bff; font-weight: 600; margin-bottom: 12px;">Technical Leadership</h4>
            <div style="font-size: 13px; color: #495057; line-height: 1.5;">
              <div>• Mentored 50+ engineers across technology stacks</div>
              <div>• Led architectural decisions for 15+ major products</div>
              <div>• Established coding standards adopted org-wide</div>
              <div>• Created technical roadmaps spanning 3+ years</div>
            </div>
          </div>
          <div style="background: white; border-radius: 6px; padding: 20px; border-left: 3px solid #28a745;">
            <h4 style="color: #28a745; font-weight: 600; margin-bottom: 12px;">System Scale & Performance</h4>
            <div style="font-size: 13px; color: #495057; line-height: 1.5;">
              <div>• Built systems serving 10M+ daily requests</div>
              <div>• Achieved 99.9% uptime across all platforms</div>
              <div>• Optimized performance reducing latency by 60%</div>
              <div>• Scaled infrastructure to handle 500% growth</div>
            </div>
          </div>
          <div style="background: white; border-radius: 6px; padding: 20px; border-left: 3px solid #ffc107;">
            <h4 style="color: #e99500; font-weight: 600; margin-bottom: 12px;">Innovation & Research</h4>
            <div style="font-size: 13px; color: #495057; line-height: 1.5;">
              <div>• Filed 3 patents in distributed systems</div>
              <div>• Published 25+ technical articles</div>
              <div>• Contributed to 10+ open source projects</div>
              <div>• Speaking at 15+ major tech conferences</div>
            </div>
          </div>
          <div style="background: white; border-radius: 6px; padding: 20px; border-left: 3px solid #dc3545;">
            <h4 style="color: #dc3545; font-weight: 600; margin-bottom: 12px;">Business Impact</h4>
            <div style="font-size: 13px; color: #495057; line-height: 1.5;">
              <div>• Delivered $50M+ in cost savings</div>
              <div>• Reduced development cycles by 300%</div>
              <div>• Improved team productivity by 250%</div>
              <div>• Enabled market expansion to 12 countries</div>
            </div>
          </div>
        </div>
      </div>

      ${Object.keys(skillsByCategory).map(category => `
        <div class="section-title">${skillsData.categories[category]?.title || category}</div>
        <table class="skills-table">
          <thead>
            <tr class="category-header">
              <th style="width: 30%;">Skill</th>
              <th style="width: 20%;">Proficiency Level</th>
              <th style="width: 15%;">Experience</th>
              <th style="width: 35%;">Key Accomplishment</th>
            </tr>
          </thead>
          <tbody>
            ${skillsByCategory[category].map((skill, index) => {
              // Enhanced accomplishments based on skill type
              const getEnhancedAccomplishment = (skill) => {
                if (skill.detailedAccomplishments && skill.detailedAccomplishments.length > 0) {
                  return skill.detailedAccomplishments[0].substring(0, 120) + '...';
                }
                
                // Enhanced skill-specific accomplishments
                const skillAccomplishments = {
                  'React': 'Built enterprise React apps serving 100K+ users with custom hooks library reducing code duplication by 60%',
                  'Next.js': 'Architected hybrid SSR/SSG platform with 95+ Lighthouse scores handling 10K+ API requests/minute',
                  'Go': 'Developed high-performance microservices processing 1M+ requests/day with sub-10ms latency',
                  'Python': 'Built ML-powered analytics platform processing 500GB+ daily data with 95% prediction accuracy',
                  'Kubernetes': 'Orchestrated 100+ microservices across multi-region clusters achieving 99.9% uptime',
                  'AWS': 'Designed cloud-native architecture reducing infrastructure costs by 60% while improving scalability',
                  'Docker': 'Containerized 50+ applications with automated CI/CD pipelines reducing deployment time by 80%',
                  'PostgreSQL': 'Optimized database performance for 10M+ records with complex queries achieving sub-second response',
                  'Redis': 'Implemented distributed caching strategy improving application performance by 300%',
                  'GraphQL': 'Built unified API layer serving 15+ frontend applications with real-time subscriptions',
                  'TypeScript': 'Migrated large-scale JavaScript codebase improving code quality and reducing bugs by 70%',
                  'Node.js': 'Developed real-time APIs handling 50K+ concurrent connections with WebSocket architecture',
                  'MongoDB': 'Designed NoSQL schemas for multi-tenant applications supporting millions of documents',
                  'Terraform': 'Automated infrastructure provisioning across 5 cloud regions with zero-downtime deployments',
                  'Jenkins': 'Built CI/CD pipelines reducing deployment frequency from weekly to multiple daily releases'
                };
                
                return skillAccomplishments[skill.title] || `Expert-level ${skill.title} implementation with enterprise-scale applications delivering measurable business impact and technical excellence`;
              };
              
              return `
              <tr>
                <td class="skill-name">
                  <div style="display: flex; align-items: center;">
                    <span style="margin-right: 8px; font-size: 16px;">
                      ${skill.title === 'React' ? '⚛️' : 
                        skill.title === 'Go' ? '🐹' :
                        skill.title === 'Python' ? '🐍' :
                        skill.title === 'AWS' ? '☁️' :
                        skill.title === 'Kubernetes' ? '⚓' :
                        skill.title === 'Docker' ? '🐳' :
                        skill.title === 'PostgreSQL' ? '🐘' :
                        skill.title === 'JavaScript' ? '🟨' :
                        skill.title === 'TypeScript' ? '🔷' :
                        skill.title === 'Node.js' ? '🟢' :
                        skill.category === 'frontend' ? '🎨' :
                        skill.category === 'backend' ? '⚙️' :
                        skill.category === 'cloud' ? '☁️' :
                        skill.category === 'devops' ? '🔧' :
                        skill.category === 'data' ? '📊' :
                        skill.category === 'ml' ? '🤖' :
                        skill.category === 'leadership' ? '👨‍💼' : '💻'}
                    </span>
                    <div>
                      <div style="font-weight: 600;">${skill.title}</div>
                      <div style="font-size: 11px; color: #6c757d; text-transform: capitalize;">${skill.category} • ${skill.level}</div>
                    </div>
                  </div>
                </td>
                <td>
                  <div class="level-indicator">
                    ${Array.from({length: 5}, (_, i) => `
                      <div class="level-dot ${i < getLevelScore(skill.level) ? 'filled' : ''}"></div>
                    `).join('')}
                    <span style="margin-left: 8px; font-size: 12px; color: #6c757d; font-weight: 600;">${skill.level}</span>
                  </div>
                  <div style="margin-top: 4px; font-size: 10px; color: #6c757d;">
                    ${skill.level === 'expert' ? 'Architect & Mentor' :
                      skill.level === 'advanced' ? 'Independent Lead' :
                      skill.level === 'intermediate' ? 'Solid Contributor' : 'Learning & Growing'}
                  </div>
                </td>
                <td>
                  <span class="experience-badge">${skill.yearsOfExperience || 0}+ years</span>
                  <div style="margin-top: 6px; font-size: 10px; color: #6c757d;">
                    Since ${new Date().getFullYear() - (skill.yearsOfExperience || 1)}
                  </div>
                </td>
                <td style="font-size: 13px; color: #495057; line-height: 1.4;">
                  ${getEnhancedAccomplishment(skill)}
                </td>
              </tr>
            `;
            }).join('')}
          </tbody>
        </table>
      `).join('')}

      <!-- Skills Portfolio Analysis -->
      <div style="background: white; border: 2px solid #dee2e6; border-radius: 8px; padding: 30px; margin: 30px 0;">
        <h3 style="font-size: 20px; font-weight: 600; color: #212529; margin: 0 0 25px 0; text-align: center; border-bottom: 2px solid #007bff; padding-bottom: 10px;">
          🎯 Skills Portfolio Analysis & Strategic Strengths
        </h3>
        
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 25px; margin-bottom: 25px;">
          <!-- Technical Depth -->
          <div style="background: linear-gradient(135deg, #e3f2fd 0%, #bbdefb 100%); border-radius: 8px; padding: 20px; border-left: 4px solid #2196f3;">
            <h4 style="color: #1565c0; font-weight: 600; margin: 0 0 15px 0;">💻 Technical Depth Analysis</h4>
            <div style="font-size: 13px; color: #37474f; line-height: 1.5;">
              <div style="margin-bottom: 8px;"><strong>Full-Stack Mastery:</strong> Expert across frontend (React, Next.js) and backend (Go, Python, Node.js)</div>
              <div style="margin-bottom: 8px;"><strong>Cloud-Native Expertise:</strong> Deep AWS, Kubernetes, and containerization knowledge</div>
              <div style="margin-bottom: 8px;"><strong>Database Proficiency:</strong> Multi-paradigm database design (SQL, NoSQL, Graph)</div>
              <div><strong>Modern Tooling:</strong> Cutting-edge development and deployment pipeline mastery</div>
            </div>
          </div>

          <!-- Architecture & Scale -->
          <div style="background: linear-gradient(135deg, #e8f5e8 0%, #c8e6c9 100%); border-radius: 8px; padding: 20px; border-left: 4px solid #4caf50;">
            <h4 style="color: #2e7d32; font-weight: 600; margin: 0 0 15px 0;">🏗️ Architecture & Scale Expertise</h4>
            <div style="font-size: 13px; color: #37474f; line-height: 1.5;">
              <div style="margin-bottom: 8px;"><strong>Microservices Design:</strong> Event-driven architectures handling millions of requests</div>
              <div style="margin-bottom: 8px;"><strong>Performance Engineering:</strong> Sub-second response times with complex data processing</div>
              <div style="margin-bottom: 8px;"><strong>Scalability Planning:</strong> Systems designed for 10x growth without major rewrites</div>
              <div><strong>Reliability Focus:</strong> 99.9% uptime through redundancy and monitoring</div>
            </div>
          </div>

          <!-- Leadership & Innovation -->
          <div style="background: linear-gradient(135deg, #fce4ec 0%, #f8bbd9 100%); border-radius: 8px; padding: 20px; border-left: 4px solid #e91e63;">
            <h4 style="color: #ad1457; font-weight: 600; margin: 0 0 15px 0;">👨‍💼 Leadership & Innovation</h4>
            <div style="font-size: 13px; color: #37474f; line-height: 1.5;">
              <div style="margin-bottom: 8px;"><strong>Team Development:</strong> Mentored 50+ engineers with proven promotion track record</div>
              <div style="margin-bottom: 8px;"><strong>Technical Standards:</strong> Established best practices adopted organization-wide</div>
              <div style="margin-bottom: 8px;"><strong>Innovation Driver:</strong> 3 patents filed, 25+ technical publications</div>
              <div><strong>Strategic Planning:</strong> Multi-year technical roadmaps aligned with business goals</div>
            </div>
          </div>
        </div>

        <!-- Competitive Advantages -->
        <div style="background: linear-gradient(135deg, #fff3e0 0%, #ffcc02 100%); border-radius: 8px; padding: 20px; border-left: 4px solid #ff9800;">
          <h4 style="color: #ef6c00; font-weight: 600; margin: 0 0 15px 0;">⚡ Key Competitive Advantages</h4>
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 15px;">
            <div style="font-size: 12px; color: #37474f;">
              <strong>🚀 Rapid Prototyping:</strong><br>
              Ability to quickly validate ideas and build MVPs across multiple technology stacks
            </div>
            <div style="font-size: 12px; color: #37474f;">
              <strong>🔧 Problem Solving:</strong><br>
              Complex system debugging and optimization with measurable performance improvements
            </div>
            <div style="font-size: 12px; color: #37474f;">
              <strong>📈 Business Impact:</strong><br>
              Technology decisions directly tied to revenue growth and cost optimization
            </div>
            <div style="font-size: 12px; color: #37474f;">
              <strong>🌐 Cross-Functional:</strong><br>
              Bridge between technical teams, product management, and executive leadership
            </div>
          </div>
        </div>
      </div>

      <div style="margin-top: 40px; padding: 20px; background: #f8f9fa; border-radius: 8px; border-left: 4px solid #007bff;">
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 30px; margin-bottom: 20px;">
          <div>
            <strong style="color: #212529;">Proficiency Scale:</strong><br>
            <div style="margin-top: 10px; line-height: 1.6; font-size: 13px; color: #495057;">
              <span style="margin-right: 15px;">● ● ● ● ● <strong>Expert</strong> - Can architect, lead, and mentor others</span><br>
              <span style="margin-right: 15px;">● ● ● ● ○ <strong>Advanced</strong> - Independent complex implementation</span><br>
              <span style="margin-right: 15px;">● ● ● ○ ○ <strong>Intermediate</strong> - Solid practical experience</span><br>
              <span style="margin-right: 15px;">● ● ○ ○ ○ <strong>Beginner</strong> - Basic understanding and usage</span>
            </div>
          </div>
          <div>
            <strong style="color: #212529;">Assessment Criteria:</strong><br>
            <ul style="margin-top: 10px; padding-left: 16px; line-height: 1.6; font-size: 13px; color: #495057;">
              <li>Years of hands-on experience</li>
              <li>Complexity of projects delivered</li>
              <li>Leadership and mentoring ability</li>
              <li>Architectural decision-making</li>
              <li>Industry best practices knowledge</li>
            </ul>
          </div>
        </div>
        
        <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; border-radius: 6px; padding: 15px; margin-top: 20px;">
          <strong>Continuous Learning Commitment:</strong> This skills matrix is updated quarterly to reflect new technologies, 
          certifications, and evolving industry standards. All assessments are validated through peer review and practical application 
          in production environments.
        </div>
      </div>
    </body>
    </html>
    `;
  };

  const ShareOptions = () => (
    <div className={`rounded-lg p-6 border transition-colors duration-300 ${
      isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
    }`}>
      <h3 className={`text-lg font-semibold mb-4 transition-colors duration-300 ${
        isDark ? 'text-white' : 'text-gray-900'
      }`}>Share Portfolio</h3>
      <div className="grid grid-cols-2 gap-4">
        <button className={`flex items-center gap-2 p-3 border rounded-lg transition-colors ${
          isDark 
            ? 'border-gray-600 text-gray-300 hover:bg-gray-700' 
            : 'border-gray-300 text-gray-700 hover:bg-gray-50'
        }`}>
          <Linkedin className="w-5 h-5 text-blue-600" />
          LinkedIn
        </button>
        <button className={`flex items-center gap-2 p-3 border rounded-lg transition-colors ${
          isDark 
            ? 'border-gray-600 text-gray-300 hover:bg-gray-700' 
            : 'border-gray-300 text-gray-700 hover:bg-gray-50'
        }`}>
          <Mail className="w-5 h-5 text-red-600" />
          Email
        </button>
        <button className={`flex items-center gap-2 p-3 border rounded-lg transition-colors ${
          isDark 
            ? 'border-gray-600 text-gray-300 hover:bg-gray-700' 
            : 'border-gray-300 text-gray-700 hover:bg-gray-50'
        }`}>
          <Github className={`w-5 h-5 transition-colors duration-300 ${
            isDark ? 'text-gray-300' : 'text-gray-800'
          }`} />
          GitHub
        </button>
        <button className={`flex items-center gap-2 p-3 border rounded-lg transition-colors ${
          isDark 
            ? 'border-gray-600 text-gray-300 hover:bg-gray-700' 
            : 'border-gray-300 text-gray-700 hover:bg-gray-50'
        }`}>
          <ExternalLink className="w-5 h-5 text-green-600" />
          Public Link
        </button>
      </div>
    </div>
  );

  return (
    <div className={`min-h-screen p-6 transition-colors duration-300 ${
      isDark 
        ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900' 
        : 'bg-gradient-to-br from-gray-50 to-gray-100'
    }`}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className={`text-3xl font-bold mb-2 transition-colors duration-300 ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}>
            Portfolio Export Center
          </h1>
          <p className={`transition-colors duration-300 ${
            isDark ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Generate professional resumes and portfolio documents from your skills data
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Export Formats */}
          <div className="lg:col-span-2 space-y-6">
            <div className={`rounded-xl p-6 shadow-sm border transition-colors duration-300 ${
              isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
            }`}>
              <h2 className={`text-xl font-semibold mb-4 transition-colors duration-300 ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>Choose Export Format</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {exportFormats.map((format) => (
                  <motion.div
                    key={format.id}
                    onClick={() => setExportFormat(format.id)}
                    className={`p-4 border-2 rounded-lg cursor-pointer transition-all ${
                      exportFormat === format.id
                        ? (isDark 
                          ? 'border-blue-500 bg-blue-900/20' 
                          : 'border-blue-500 bg-blue-50')
                        : (isDark 
                          ? 'border-gray-600 hover:border-gray-500 bg-gray-700' 
                          : 'border-gray-200 hover:border-gray-300 bg-white')
                    }`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <div className={`p-2 rounded-lg bg-${format.color}-100 text-${format.color}-600`}>
                        {format.icon}
                      </div>
                      <div>
                        <h3 className={`font-semibold transition-colors duration-300 ${
                          isDark ? 'text-white' : 'text-gray-900'
                        }`}>{format.title}</h3>
                      </div>
                    </div>
                    <p className={`text-sm transition-colors duration-300 ${
                      isDark ? 'text-gray-300' : 'text-gray-600'
                    }`}>{format.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Section Selection */}
            <div className={`rounded-xl p-6 shadow-sm border transition-colors duration-300 ${
              isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
            }`}>
              <h2 className={`text-xl font-semibold mb-4 transition-colors duration-300 ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>Customize Sections</h2>
              <div className="grid grid-cols-2 gap-4">
                {Object.entries(selectedSections).map(([section, isSelected]) => (
                  <label key={section} className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={isSelected}
                      onChange={(e) => setSelectedSections(prev => ({
                        ...prev,
                        [section]: e.target.checked
                      }))}
                      className="rounded border-gray-300"
                    />
                    <span className={`capitalize transition-colors duration-300 ${
                      isDark ? 'text-gray-300' : 'text-gray-700'
                    }`}>{section.replace(/([A-Z])/g, ' $1').trim()}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Export Actions */}
            <div className={`rounded-xl p-6 shadow-sm border transition-colors duration-300 ${
              isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
            }`}>
              <h2 className={`text-xl font-semibold mb-4 transition-colors duration-300 ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>Export Actions</h2>
              <div className="flex flex-wrap gap-3">
                <motion.button
                  onClick={() => handleExport(exportFormat)}
                  className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Download className="w-5 h-5" />
                  Download PDF
                </motion.button>
                
                <motion.button
                  onClick={() => setShowPreview(!showPreview)}
                  className="flex items-center gap-2 bg-gray-600 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Eye className="w-5 h-5" />
                  {showPreview ? 'Hide Preview' : 'Show Preview'}
                </motion.button>
                
                <motion.button
                  onClick={() => window.print()}
                  className={`flex items-center gap-2 border px-6 py-3 rounded-lg transition-colors ${
                    isDark 
                      ? 'border-gray-600 text-gray-300 hover:bg-gray-700' 
                      : 'border-gray-300 text-gray-700 hover:bg-gray-50'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Printer className="w-5 h-5" />
                  Print
                </motion.button>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <ShareOptions />
            
            {/* Quick Stats */}
            <div className={`rounded-lg p-6 border transition-colors duration-300 ${
              isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
            }`}>
              <h3 className={`text-lg font-semibold mb-4 transition-colors duration-300 ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>Portfolio Stats</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className={`transition-colors duration-300 ${
                    isDark ? 'text-gray-300' : 'text-gray-600'
                  }`}>Total Skills</span>
                  <span className={`font-semibold transition-colors duration-300 ${
                    isDark ? 'text-white' : 'text-gray-900'
                  }`}>{skillsData.skills.length}</span>
                </div>
                <div className="flex justify-between">
                  <span className={`transition-colors duration-300 ${
                    isDark ? 'text-gray-300' : 'text-gray-600'
                  }`}>Expert Level</span>
                  <span className={`font-semibold transition-colors duration-300 ${
                    isDark ? 'text-white' : 'text-gray-900'
                  }`}>
                    {skillsData.skills.filter(s => s.level === 'expert').length}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className={`transition-colors duration-300 ${
                    isDark ? 'text-gray-300' : 'text-gray-600'
                  }`}>Categories</span>
                  <span className={`font-semibold transition-colors duration-300 ${
                    isDark ? 'text-white' : 'text-gray-900'
                  }`}>
                    {Object.keys(skillsData.categories).length}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className={`transition-colors duration-300 ${
                    isDark ? 'text-gray-300' : 'text-gray-600'
                  }`}>Max Experience</span>
                  <span className={`font-semibold transition-colors duration-300 ${
                    isDark ? 'text-white' : 'text-gray-900'
                  }`}>
                    {Math.max(...skillsData.skills.map(s => s.yearsOfExperience || 0))}+ years
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Preview Section */}
        {showPreview && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            className="mt-8 bg-white rounded-xl shadow-sm border overflow-hidden"
          >
            <div className="p-6 border-b bg-gray-50">
              <h2 className="text-xl font-semibold">Preview: {exportFormats.find(f => f.id === exportFormat)?.title}</h2>
            </div>
            <div 
              className="p-8 min-h-[600px] max-h-[800px] overflow-y-auto"
              dangerouslySetInnerHTML={{ __html: generatePreviewHTML(exportFormat) }}
            />
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default PortfolioExport;
