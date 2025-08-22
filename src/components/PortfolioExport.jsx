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

    return `
    <!DOCTYPE html>
    <html>
    <head>
      <title>${personalInfo.name} - ${format}</title>
      <style>
        body { font-family: 'Arial', sans-serif; line-height: 1.6; color: #333; max-width: 800px; margin: 0 auto; padding: 20px; }
        .header { text-align: center; border-bottom: 2px solid #3B82F6; padding-bottom: 20px; margin-bottom: 30px; }
        .name { font-size: 28px; font-weight: bold; color: #1F2937; margin-bottom: 10px; }
        .title { font-size: 18px; color: #6B7280; margin-bottom: 15px; }
        .contact { display: flex; justify-content: center; gap: 20px; flex-wrap: wrap; }
        .section { margin-bottom: 30px; }
        .section-title { font-size: 20px; font-weight: bold; color: #1F2937; border-bottom: 1px solid #E5E7EB; padding-bottom: 5px; margin-bottom: 15px; }
        .skills-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 15px; }
        .skill-item { background: #F3F4F6; padding: 10px; border-radius: 6px; }
        .skill-name { font-weight: bold; color: #1F2937; }
        .skill-level { color: #6B7280; font-size: 14px; }
        .project { margin-bottom: 20px; padding-bottom: 15px; border-bottom: 1px solid #E5E7EB; }
        .project-title { font-weight: bold; color: #1F2937; margin-bottom: 5px; }
        .metrics { margin-top: 10px; }
        .metric { background: #EFF6FF; color: #1D4ED8; padding: 2px 8px; border-radius: 4px; font-size: 12px; margin-right: 5px; }
        @media print { body { margin: 0; padding: 15px; } }
      </style>
    </head>
    <body>
      <div class="header">
        <div class="name">${personalInfo.name}</div>
        <div class="title">${personalInfo.title}</div>
        <div class="contact">
          <span>📧 ${personalInfo.email || 'contact@example.com'}</span>
          <span>📍 ${personalInfo.location || 'Remote'}</span>
          ${personalInfo.linkedin ? `<span>🔗 ${personalInfo.linkedin}</span>` : ''}
          ${personalInfo.github ? `<span>💻 ${personalInfo.github}</span>` : ''}
        </div>
      </div>

      <div class="section">
        <div class="section-title">Professional Summary</div>
        <p>${summary}</p>
      </div>

      <div class="section">
        <div class="section-title">Core Technical Skills</div>
        <div class="skills-grid">
          ${topSkills.map(skill => `
            <div class="skill-item">
              <div class="skill-name">${skill.title || 'Unknown Skill'}</div>
              <div class="skill-level">${skill.level || 'intermediate'} • ${skill.yearsOfExperience || 0}+ years</div>
            </div>
          `).join('')}
        </div>
      </div>

      <div class="section">
        <div class="section-title">Key Projects & Achievements</div>
        ${projects.map(project => `
          <div class="project">
            <div class="project-title">${project.title || 'Project'}</div>
            <p>${project.description || 'Project description'}</p>
            <div class="metrics">
              ${(project.metrics || []).slice(0, 3).map(metric => `<span class="metric">${metric}</span>`).join('')}
            </div>
          </div>
        `).join('')}
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
