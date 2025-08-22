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

const PortfolioExport = () => {
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
    // Get projects from skills data or create sample data
    const projects = skillsData.skills
      .filter(skill => skill.detailedAccomplishments && skill.detailedAccomplishments.length > 0)
      .slice(0, 4)
      .map(skill => ({
        title: `${skill.title} Implementation`,
        description: skill.detailedAccomplishments[0] || `Advanced ${skill.title} development project`,
        technologies: skill.technologies || [skill.title],
        metrics: skill.keyMetrics || [`${skill.yearsOfExperience}+ years experience`, `${skill.level} level proficiency`]
      }));
    
    return projects;
  };

  const generateProfessionalSummary = () => {
    const totalExperience = Math.max(...skillsData.skills.map(s => s.yearsOfExperience || 0));
    const expertSkills = skillsData.skills.filter(s => s.level === 'expert').length;
    const categories = [...new Set(skillsData.skills.map(s => s.category))];
    
    return `Senior Software Engineer with ${totalExperience}+ years of experience specializing in ${categories.slice(0, 3).join(', ')}. Expert in ${expertSkills} core technologies with proven track record of building scalable applications and leading technical initiatives.`;
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
        <p style="font-size: 16px; color: #4A5568;">${summary}</p>
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
        ${projects.map(project => `
          <div class="project-card">
            <div class="project-title">${project.title || 'Technical Project'}</div>
            <p>${project.description || 'Advanced technical implementation project'}</p>
            <div class="tech-tags">
              ${(project.technologies || []).map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
            </div>
            <div class="metrics">
              ${(project.metrics || []).map(metric => `<span class="metric">${metric}</span>`).join('')}
            </div>
          </div>
        `).join('')}
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
        </div>
      </div>

      <div class="section">
        <div class="section-title">Leadership & Strategic Impact</div>
        <div class="leadership-grid">
          <div class="leadership-card">
            <div class="card-title">Team Leadership</div>
            ${leadershipSkills.length > 0 ? leadershipSkills[0].detailedAccomplishments.slice(0, 4).map(acc => `
              <div class="accomplishment">${acc}</div>
            `).join('') : `
              <div class="accomplishment">Led engineering teams of 15+ developers</div>
              <div class="accomplishment">Implemented agile methodologies improving delivery by 50%</div>
              <div class="accomplishment">Mentored 20+ engineers with 80% promotion rate</div>
              <div class="accomplishment">Established technical standards organization-wide</div>
            `}
          </div>
          <div class="leadership-card">
            <div class="card-title">Technical Architecture</div>
            ${architectureSkills.length > 0 ? architectureSkills[0].detailedAccomplishments.slice(0, 4).map(acc => `
              <div class="accomplishment">${acc}</div>
            `).join('') : `
              <div class="accomplishment">Architected systems handling 10M+ daily requests</div>
              <div class="accomplishment">Designed microservices for 99.9% availability</div>
              <div class="accomplishment">Led digital transformation initiatives</div>
              <div class="accomplishment">Implemented cloud-native architectures</div>
            `}
          </div>
        </div>
      </div>

      <div class="section">
        <div class="section-title">Key Performance Metrics</div>
        <div class="metrics-summary">
          <div class="metric-item">
            <span class="metric-number">${Math.max(...skillsData.skills.map(s => s.yearsOfExperience || 0))}+</span>
            <span class="metric-label">Years Experience</span>
          </div>
          <div class="metric-item">
            <span class="metric-number">${skillsData.skills.filter(s => s.level === 'expert').length}</span>
            <span class="metric-label">Expert Technologies</span>
          </div>
          <div class="metric-item">
            <span class="metric-number">15+</span>
            <span class="metric-label">Teams Led</span>
          </div>
          <div class="metric-item">
            <span class="metric-number">10M+</span>
            <span class="metric-label">Daily Users Served</span>
          </div>
          <div class="metric-item">
            <span class="metric-number">99.9%</span>
            <span class="metric-label">System Uptime</span>
          </div>
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
        <div class="title">Technical Skills Assessment Matrix</div>
        <div class="matrix-date">Generated on ${new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</div>
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
          <div class="stat-number">${Math.max(...allSkills.map(s => s.yearsOfExperience || 0))}</div>
          <div class="stat-label">Max Experience</div>
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
            ${skillsByCategory[category].map(skill => `
              <tr>
                <td class="skill-name">${skill.title}</td>
                <td>
                  <div class="level-indicator">
                    ${Array.from({length: 5}, (_, i) => `
                      <div class="level-dot ${i < getLevelScore(skill.level) ? 'filled' : ''}"></div>
                    `).join('')}
                    <span style="margin-left: 8px; font-size: 12px; color: #6c757d;">${skill.level}</span>
                  </div>
                </td>
                <td>
                  <span class="experience-badge">${skill.yearsOfExperience || 0}+ years</span>
                </td>
                <td style="font-size: 13px; color: #495057;">
                  ${skill.detailedAccomplishments ? skill.detailedAccomplishments[0]?.substring(0, 80) + '...' : 'Professional experience in ' + skill.title}
                </td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      `).join('')}

      <div style="margin-top: 40px; padding: 20px; background: #f8f9fa; border-radius: 8px; border-left: 4px solid #007bff;">
        <strong>Legend:</strong> 
        <span style="margin-left: 20px;">● ● ● ● ● Expert</span>
        <span style="margin-left: 20px;">● ● ● ● ○ Advanced</span>
        <span style="margin-left: 20px;">● ● ● ○ ○ Intermediate</span>
        <span style="margin-left: 20px;">● ● ○ ○ ○ Beginner</span>
      </div>
    </body>
    </html>
    `;
  };

  const ShareOptions = () => (
    <div className="bg-white rounded-lg p-6 border">
      <h3 className="text-lg font-semibold mb-4">Share Portfolio</h3>
      <div className="grid grid-cols-2 gap-4">
        <button className="flex items-center gap-2 p-3 border rounded-lg hover:bg-gray-50">
          <Linkedin className="w-5 h-5 text-blue-600" />
          LinkedIn
        </button>
        <button className="flex items-center gap-2 p-3 border rounded-lg hover:bg-gray-50">
          <Mail className="w-5 h-5 text-red-600" />
          Email
        </button>
        <button className="flex items-center gap-2 p-3 border rounded-lg hover:bg-gray-50">
          <Github className="w-5 h-5 text-gray-800" />
          GitHub
        </button>
        <button className="flex items-center gap-2 p-3 border rounded-lg hover:bg-gray-50">
          <ExternalLink className="w-5 h-5 text-green-600" />
          Public Link
        </button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Portfolio Export Center
          </h1>
          <p className="text-gray-600">
            Generate professional resumes and portfolio documents from your skills data
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Export Formats */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white rounded-xl p-6 shadow-sm border">
              <h2 className="text-xl font-semibold mb-4">Choose Export Format</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {exportFormats.map((format) => (
                  <motion.div
                    key={format.id}
                    onClick={() => setExportFormat(format.id)}
                    className={`p-4 border-2 rounded-lg cursor-pointer transition-all ${
                      exportFormat === format.id
                        ? 'border-blue-500 bg-blue-50'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <div className={`p-2 rounded-lg bg-${format.color}-100 text-${format.color}-600`}>
                        {format.icon}
                      </div>
                      <div>
                        <h3 className="font-semibold">{format.title}</h3>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600">{format.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Section Selection */}
            <div className="bg-white rounded-xl p-6 shadow-sm border">
              <h2 className="text-xl font-semibold mb-4">Customize Sections</h2>
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
                    <span className="capitalize">{section.replace(/([A-Z])/g, ' $1').trim()}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Export Actions */}
            <div className="bg-white rounded-xl p-6 shadow-sm border">
              <h2 className="text-xl font-semibold mb-4">Export Actions</h2>
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
                  className="flex items-center gap-2 border border-gray-300 px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors"
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
            <div className="bg-white rounded-lg p-6 border">
              <h3 className="text-lg font-semibold mb-4">Portfolio Stats</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Total Skills</span>
                  <span className="font-semibold">{skillsData.skills.length}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Expert Level</span>
                  <span className="font-semibold">
                    {skillsData.skills.filter(s => s.level === 'expert').length}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Categories</span>
                  <span className="font-semibold">
                    {Object.keys(skillsData.categories).length}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Max Experience</span>
                  <span className="font-semibold">
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
              className="p-6"
              dangerouslySetInnerHTML={{ __html: generateHTMLResume(exportFormat) }}
            />
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default PortfolioExport;
