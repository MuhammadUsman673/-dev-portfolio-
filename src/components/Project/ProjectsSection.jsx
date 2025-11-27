import React, { useState, useEffect } from 'react';
import { ExternalLink, Github, ChevronLeft, ChevronRight, Mail, Globe, Paintbrush, Sparkles } from 'lucide-react';

// === ALL YOUR IMAGES ===
import p1 from "../../assets/pp1.png";
import p2 from "../../assets/p2.png";
import p3 from "../../assets/p3.png";
import p4 from "../../assets/p4.png";
import p5 from "../../assets/p5.png";
import p6 from "../../assets/p6.png";
import p7 from "../../assets/p7.png";
import p12 from "../../assets/p12.png";
import p122 from "../../assets/p122.png";
import p1222 from "../../assets/p1222.png";
import p1223 from "../../assets/p1223.png";
import p8 from "../../assets/p8.png";
import p9 from "../../assets/p9.png";
import p10 from "../../assets/p10.png";
import p11 from "../../assets/p11.png";
import p13 from "../../assets/p13.png";
import p14 from "../../assets/p14.png";
import s1 from "../../assets/s1.png";
import s2 from "../../assets/s2.png";
import s3 from "../../assets/s3.png";
import s4 from "../../assets/s4.png";
import s5 from "../../assets/s5.png";
import s6 from "../../assets/s6.png";
import s7 from "../../assets/s7.png";
import s8 from "../../assets/s8.png";
import ss1 from "../../assets/ss1.png";
import ss2 from "../../assets/ss2.png";
import ss3 from "../../assets/ss3.png";
import ss4 from "../../assets/ss4.png";
import ss5 from "../../assets/ss5.png";
import ss6 from "../../assets/ss6.png";
import p15 from "../../assets/p15.png";
import p16 from "../../assets/p16.png";
import p17 from "../../assets/p17.png";
import p18 from "../../assets/p18.png";
import p19 from "../../assets/p19.png";
import p20 from "../../assets/p20.png";
import p21 from "../../assets/p21.png";
import z1 from "../../assets/z1.png";
import z2 from "../../assets/z2.png";
import z3 from "../../assets/z3.png";
import z4 from "../../assets/z4.png";
import z5 from "../../assets/z5.png";
import z6 from "../../assets/z6.png";
import z7 from "../../assets/z7.png";
import z8 from "../../assets/z8.png";
import z9 from "../../assets/z9.png";
import p22 from "../../assets/p22.png";
import p23 from "../../assets/p23.png";
import p24 from "../../assets/p24.png";
import p25 from "../../assets/p25.png";
import p26 from "../../assets/p26.png";
import p28 from "../../assets/p28.png";
import p29 from "../../assets/p29.png";

// Admin Dashboard Images
import u1 from "../../assets/u1.png";
import u2 from "../../assets/u2.png";
import u3 from "../../assets/u3.png";
import u4 from "../../assets/u4.png";
import u5 from "../../assets/u5.png";
import u6 from "../../assets/u6.png";
import u7 from "../../assets/u7.png";

// === ALL PROJECTS DATA ===
const projects = [
  // Web Development
 
  {
    title: 'E-commerce - Sports Fashion Store',
    description: 'Modern sports fashion e-commerce platform featuring teamwear, athlete collections, and lifestyle apparel with secure payment integration.',
    tech: ['React', 'Node.js', 'MongoDB', 'Payment Processing', 'CSS'],
    features: ['Product catalog', 'Shopping cart', 'Secure payments', 'Responsive design'],
    link: 'https://graypak.netlify.app',
    github: 'https://github.com/MuhammadUsman673/GrayPak',
    image: p13,
    images: [p13],
    emoji: '🛒',
    type: 'web'
  },
   {
    title: 'VOXIA Social Media Platform',
    description: 'Full-featured social network with real-time chat and media sharing.',
    tech: ['React', 'Node.js', 'MongoDB', 'Socket.io', 'JWT'],
    features: ['Real-time messaging', 'Posts & media', 'Friends system'],
    link: '#',
    github: 'https://github.com/abduldevCode/Voxia02',
    image: p15,
    images: [p15, p16, p17, p18, p19, p20, p21],
    emoji: '💬',
    type: 'web'
  },
   {
    title: 'Collegesathi Platform',
    description: 'University comparison platform for students to find and compare educational programs.',
    tech: ['React', 'Tailwind', 'JavaScript'],
    features: ['University comparisons', 'Program listings', 'Student reviews'],
    link: 'https://uniproject-lyart.vercel.app',
    github: 'https://github.com/HiSkyTech/uniproject',
    image: p2,
    images: [p1, p2, p3, p4, p5, p6, p7],
    emoji: '🎓',
    type: 'web'
  },
  {
    title: 'Admin Dashboard System',
    description: 'Comprehensive admin dashboard with user management, analytics, and role-based access control.',
    tech: ['React', 'Node.js', 'MongoDB', 'Full-Stack'],
    features: ['User management', 'Analytics', 'RBAC', 'Secure auth'],
    link: '#',
    github: 'https://github.com/HiSkyTech/adminpanel',
    image: u1,
    images: [u1, u2, u3, u4, u5, u6, u7],
    emoji: '📊',
    type: 'web'
  },
  {
    title: 'AutoDrive - Electric Vehicle Platform',
    description: 'Tesla-inspired electric vehicle showcase with booking system.',
    tech: ['React', 'Tailwind', 'Framer Motion'],
    features: ['Interactive gallery', 'Test drive booking', 'Smooth animations'],
    link: '#',
    github: '#',
    image: p22,
    images: [p22, p23, p24, p25, p26, p28, p29],
    emoji: '🚗',
    type: 'web'
  },
  {
    title: 'Clifton Coffee - E-commerce',
    description: 'Coffee shop e-commerce built with vanilla HTML, CSS, and JavaScript.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    features: ['Shopping cart', 'Responsive design', 'Smooth UI'],
    link: 'https://slashcart-peach.vercel.app',
    github: '#',
    image: p1223,
    images: [p1223],
    emoji: '🛍️',
    type: 'web'
  },
  {
    title: 'AI Knee MRI ACL Detection',
    description: 'AI-powered system detecting ACL tears in knee MRI scans with high accuracy.',
    tech: ['React', 'Firebase', 'AI/ML', 'Medical Imaging'],
    features: ['AI detection', 'Image upload', 'Detailed reports'],
    link: 'https://acl-detection.vercel.app',
    github: 'https://github.com/MuhammadUsman673/ACL-Detection.git',
    image: p8,
    images: [p8],
    emoji: '🩺',
    type: 'web'
  },
 
  {
    title: 'Boutique E-commerce Admin Panel',
    description: 'Live admin panel with analytics, inventory, and order management.',
    tech: ['React', 'Node.js', 'MongoDB'],
    features: ['Real-time analytics', 'Inventory', 'Order processing'],
    link: '#',
    github: '#',
    image: z1,
    images: [z1, z2, z3, z4, z5, z6, z7, z8, z9],
    emoji: '🛍️',
    type: 'web'
  },
  {
    title: 'Sparlex - Spa & Beauty Center',
    description: 'Modern spa and beauty platform with appointment booking and wellness packages.',
    tech: ['React', 'Frontend', 'Responsive Design'],
    features: ['Booking system', 'Service catalog', 'Testimonials'],
    link: 'https://beauty-mauve.vercel.app',
    github: '#',
    image: p1222,
    images: [p1222],
    emoji: '💆‍♀️',
    type: 'web'
  },

  // Figma / UI-UX Designs
  {
    title: 'Digital Payment Card UI',
    description: 'Modern mobile banking interface with digital cards and transaction security.',
    tech: ['Figma', 'UI/UX', 'Fintech'],
    features: ['Digital cards', 'Secure UI', 'Transaction overview'],
    link: 'https://www.figma.com/design/GPXLoit4GMXjli9Hhe30Bi/Untitled?node-id=1-2&t=g8PTgB5EAtE8c04u-1',
    github: '#',
    image: p9,
    images: [p9],
    emoji: '💳',
    type: 'figma'
  },
  {
    title: 'Scrollable E-commerce Product Page',
    description: 'Scrollable AirPods Pro product page with dynamic size selection.',
    tech: ['Figma', 'Mobile Design', 'E-commerce'],
    features: ['Scrollable UI', 'Size selection', 'Smooth interactions'],
    link: 'https://www.figma.com/design/rAOXJbI0AKNcujr9Z4Sfbw/Untitled?node-id=3-17&t=nG3rQOSN1PTRHtAW-1',
    github: '#',
    image: p10,
    images: [p10],
    emoji: '📱',
    type: 'figma'
  },
  {
    title: 'Dashboard Design',
    description: 'Clean analytics dashboard with revenue and sales metrics.',
    tech: ['Figma', 'Data Visualization'],
    features: ['Revenue tracking', 'Sales metrics', 'Clean layout'],
    link: '#',
    github: '#',
    image: p11,
    images: [p11],
    emoji: '📊',
    type: 'figma'
  },
  {
    title: 'NFT Marketplace Website',
    description: 'Dark-themed NFT marketplace with analytics and minting flow.',
    tech: ['Figma', 'Web3', 'Dark Theme'],
    features: ['NFT discovery', 'Analytics', 'Minting flow'],
    link: 'https://www.figma.com/design/YMnhR4sIxTfoYZPqrrBTem/Flux---Figma-Build-Tutorial--Starter---Community-?node-id=204-2&t=IrWT6V6XmYetUsF6-1',
    github: '#',
    image: p12,
    images: [p12],
    emoji: '💎',
    type: 'figma'
  },
  {
    title: 'Fitness Coaching Mobile App',
    description: 'Complete fitness app for coaches and clients with payments and progress tracking.',
    tech: ['Figma', 'Mobile', 'Fitness Tech'],
    features: ['Client management', 'Payments', 'Workout library'],
    link: '#',
    github: '#',
    image: p14,
    images: [s1, s2, s3, s4, s5, s6, s7, s8],
    emoji: '💪',
    type: 'figma'
  },
  {
    title: 'Fitness Platform Admin Dashboard',
    description: 'Admin panel for fitness platform with coach management and revenue analytics.',
    tech: ['Figma', 'Dashboard', 'SaaS'],
    features: ['Coach management', 'Revenue analytics', 'Support tickets'],
    link: '#',
    github: '#',
    image: ss1,
    images: [ss1, ss2, ss3, ss4, ss5, ss6],
    emoji: '🏋️‍♂️',
    type: 'figma'
  },
];

const ProjectsSection = ({ scrollToSection }) => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [filterPages, setFilterPages] = useState({ all: 0, web: 0, figma: 0 });
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [currentProject, setCurrentProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const projectsPerPage = 6;

  // Filtered projects
  const filteredProjects = activeCategory === 'all'
    ? projects
    : projects.filter(p => p.type === activeCategory);

  const totalProjects = filteredProjects.length;
  const totalPages = Math.ceil(totalProjects / projectsPerPage);

  // Clamp current page to valid range
  const safePage = totalPages === 0 ? 0 : Math.min(filterPages[activeCategory] || 0, totalPages - 1);

  useEffect(() => {
    if (safePage !== (filterPages[activeCategory] || 0)) {
      setFilterPages(prev => ({ ...prev, [activeCategory]: safePage }));
    }
  }, [activeCategory, totalPages, safePage]);

  const startIndex = safePage * projectsPerPage;
  const endIndex = Math.min(startIndex + projectsPerPage, totalProjects);
  const displayedProjects = filteredProjects.slice(startIndex, endIndex);

  // Handlers
  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    setFilterPages(prev => ({ ...prev, [category]: 0 }));
  };

  const goToPage = (page) => {
    setFilterPages(prev => ({ ...prev, [activeCategory]: page }));
  };

  const openGallery = (project, index = 0) => {
    setCurrentProject(project);
    setCurrentImageIndex(index);
    setGalleryOpen(true);
  };

  const closeGallery = () => {
    setGalleryOpen(false);
    setCurrentProject(null);
    setCurrentImageIndex(0);
  };

  const nextImage = () => {
    if (currentProject) {
      setCurrentImageIndex(prev => prev === currentProject.images.length - 1 ? 0 : prev + 1);
    }
  };

  const prevImage = () => {
    if (currentProject) {
      setCurrentImageIndex(prev => prev === 0 ? currentProject.images.length - 1 : prev - 1);
    }
  };

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (galleryOpen) {
        if (e.key === 'Escape') closeGallery();
        if (e.key === 'ArrowLeft') prevImage();
        if (e.key === 'ArrowRight') nextImage();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [galleryOpen, currentProject]);

  return (
    <section id="projects" className="py-16 sm:py-20 px-4 sm:px-6 bg-gradient-to-r from-blue-500/10 to-purple-500/10">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-sm text-blue-500 font-semibold mb-4 uppercase tracking-wider">Portfolio</h2>
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">Featured Projects</h3>
          <p className="text-gray-400 max-w-2xl mx-auto text-xs sm:text-sm md:text-base px-4">
            Here are some of my recent works. Each project represents a unique challenge and solution.
          </p>
        </div>

        {/* Category Tabs - Improved mobile responsiveness */}
        <div className="flex justify-center mb-8 sm:mb-12 px-2">
          <div className="inline-flex flex-col sm:flex-row bg-white/5 border border-white/10 rounded-xl p-1 backdrop-blur-sm w-full max-w-md">
            {[
              { key: 'all', label: 'All', icon: Sparkles, count: projects.length },
              { key: 'web', label: 'Web Dev', icon: Globe, count: projects.filter(p => p.type === 'web').length },
              { key: 'figma', label: 'UI/UX', icon: Paintbrush, count: projects.filter(p => p.type === 'figma').length }
            ].map(cat => {
              const IconComponent = cat.icon;
              return (
                <button
                  key={cat.key}
                  onClick={() => handleCategoryChange(cat.key)}
                  className={`relative px-3 sm:px-4 py-2 sm:py-3 rounded-lg font-medium transition-all flex items-center justify-center gap-1 sm:gap-2 flex-1 text-xs sm:text-sm ${
                    activeCategory === cat.key
                      ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/25'
                      : 'text-gray-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <IconComponent className="w-3 h-3 sm:w-4 sm:h-4" />
                  <span className="whitespace-nowrap">{cat.label}</span>
                  <span className={`px-1.5 py-0.5 text-xs rounded-full min-w-[20px] ${
                    activeCategory === cat.key ? 'bg-white/20' : 'bg-white/10'
                  }`}>
                    {cat.count}
                  </span>
                  {activeCategory === cat.key && (
                    <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-8 sm:w-12 h-0.5 bg-blue-400 rounded-full" />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Projects Grid - Improved mobile layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8">
          {displayedProjects.map((project, i) => (
            <div
              key={i}
              className="group bg-white/5 border border-white/10 rounded-xl overflow-hidden hover:border-blue-500/50 transition-all duration-300 hover:scale-[1.02]"
            >
              {/* Project Type Badge */}
              <div className="absolute top-2 right-2 sm:top-3 sm:right-3 z-10">
                <span className={`px-2 py-1 text-xs rounded-full font-medium backdrop-blur-sm ${
                  project.type === 'web'
                    ? 'bg-blue-500/20 text-blue-300 border border-blue-500/30'
                    : 'bg-purple-500/20 text-purple-300 border border-purple-500/30'
                }`}>
                  {project.type === 'web' ? '🌐 Web' : '🎨 Figma'}
                </span>
              </div>

              {/* Project Image */}
              <div className="aspect-video relative overflow-hidden bg-black/20">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                
                {/* Mobile Action Buttons - Always visible on mobile */}
                <div className="sm:hidden absolute bottom-2 left-2 right-2 flex gap-2">
                  {project.link !== '#' && (
                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex-1 px-3 py-2 bg-blue-500 hover:bg-blue-600 rounded-lg text-xs font-medium transition-all flex items-center justify-center gap-1"
                    >
                      {project.type === 'web' ? 'Live Demo' : 'View Design'} 
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                  {project.github !== '#' && (
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex-1 px-3 py-2 border border-white/20 hover:border-blue-500/50 rounded-lg text-xs font-medium transition-all flex items-center justify-center gap-1"
                    >
                      Code 
                      <Github className="w-3 h-3" />
                    </a>
                  )}
                  {(project.link === '#' && project.github === '#') && (
                    <button 
                      onClick={() => openGallery(project)}
                      className="flex-1 px-3 py-2 bg-blue-500 hover:bg-blue-600 rounded-lg text-xs font-medium transition-all flex items-center justify-center gap-1"
                    >
                      View Project 
                      <ExternalLink className="w-3 h-3" />
                    </button>
                  )}
                </div>

                {/* Desktop Hover Overlay */}
                <div className="hidden sm:flex absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-all duration-300 items-center justify-center gap-2">
                  {project.link !== '#' ? (
                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105 flex items-center gap-1"
                    >
                      {project.type === 'web' ? 'Live Demo' : 'View Design'} 
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  ) : (
                    <button 
                      onClick={() => openGallery(project)}
                      className="px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105 flex items-center gap-1"
                    >
                      View Project 
                      <ExternalLink className="w-3 h-3" />
                    </button>
                  )}
                  {project.github !== '#' && (
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="px-4 py-2 border border-white/20 hover:border-blue-500/50 rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105 flex items-center gap-1"
                    >
                      Code 
                      <Github className="w-3 h-3" />
                    </a>
                  )}
                </div>
              </div>

              {/* Project Content */}
              <div className="p-3 sm:p-4">
                <h4 className="text-sm sm:text-base font-bold mb-2 group-hover:text-blue-500 transition-colors flex items-center gap-2">
                  <span className="text-base sm:text-lg">{project.emoji}</span> 
                  <span className="leading-tight line-clamp-1">{project.title}</span>
                </h4>
                <p className="text-gray-400 text-xs mb-3 leading-relaxed line-clamp-2 sm:line-clamp-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1 mb-3">
                  {project.tech.slice(0, 3).map((t, i) => (
                    <span 
                      key={i} 
                      className={`px-2 py-1 text-xs rounded-full backdrop-blur-sm ${
                        project.type === 'web'
                          ? 'bg-blue-500/10 text-blue-400'
                          : 'bg-purple-500/10 text-purple-400'
                      }`}
                    >
                      {t}
                    </span>
                  ))}
                  {project.tech.length > 3 && (
                    <span className="px-2 py-1 text-xs rounded-full bg-gray-500/10 text-gray-400">
                      +{project.tech.length - 3}
                    </span>
                  )}
                </div>
                
                {/* Desktop-only bottom links */}
                <div className="hidden sm:flex justify-between items-center">
                  {project.link !== '#' ? (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`text-xs font-medium flex items-center gap-1 hover:gap-2 transition-all ${
                        project.type === 'web' ? 'text-blue-500' : 'text-purple-500'
                      }`}
                    >
                      {project.type === 'web' ? 'Visit Live Site' : 'View Design'}
                      <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all" />
                    </a>
                  ) : project.github !== '#' ? (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-medium flex items-center gap-1 hover:gap-2 transition-all text-blue-500"
                    >
                      View Code
                      <Github className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all" />
                    </a>
                  ) : (
                    <button
                      onClick={() => openGallery(project)}
                      className={`text-xs font-medium flex items-center gap-1 hover:gap-2 transition-all ${
                        project.type === 'web' ? 'text-blue-500' : 'text-purple-500'
                      }`}
                    >
                      View Details
                      <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all" />
                    </button>
                  )}
                  <span className="text-xs text-gray-500 bg-white/5 px-2 py-1 rounded">
                    {project.features.length} features
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4 my-8 sm:my-12">
            {safePage > 0 && (
              <button 
                onClick={() => goToPage(safePage - 1)}
                className="px-4 sm:px-6 py-2 sm:py-3 border border-white/20 hover:border-blue-500/50 rounded-lg flex items-center gap-2 hover:bg-white/5 transition-all text-xs sm:text-sm w-full sm:w-auto justify-center"
              >
                <ChevronLeft className="w-3 h-3 sm:w-4 sm:h-4" /> Previous
              </button>
            )}
            
            <div className="flex gap-1 sm:gap-2 bg-white/5 rounded-lg p-1 backdrop-blur-sm">
              {Array.from({ length: totalPages }, (_, i) => (
                <button 
                  key={i} 
                  onClick={() => goToPage(i)}
                  className={`w-7 h-7 sm:w-8 sm:h-8 rounded-lg transition-all text-xs sm:text-sm ${
                    i === safePage 
                      ? 'bg-blue-500 text-white' 
                      : 'text-gray-400 hover:bg-white/20'
                  }`}
                >
                  {i + 1}
                </button>
              ))}
            </div>
            
            {safePage < totalPages - 1 && (
              <button 
                onClick={() => goToPage(safePage + 1)}
                className="px-4 sm:px-6 py-2 sm:py-3 bg-blue-500 hover:bg-blue-600 rounded-lg flex items-center gap-2 shadow-lg shadow-blue-500/25 transition-all text-xs sm:text-sm w-full sm:w-auto justify-center"
              >
                Next <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4" />
              </button>
            )}
          </div>
        )}

        {/* Gallery Modal - Improved mobile experience */}
        {galleryOpen && currentProject && (
          <div className="fixed inset-0 bg-black/95 backdrop-blur-md z-50 flex items-center justify-center p-2 sm:p-4" onClick={closeGallery}>
            <div className="relative w-full max-w-4xl max-h-[95vh] overflow-y-auto" onClick={e => e.stopPropagation()}>
              <button 
                onClick={closeGallery} 
                className="absolute -top-8 sm:-top-10 right-0 text-white hover:text-blue-500 text-2xl z-10 transition-colors bg-black/50 rounded-full w-8 h-8 flex items-center justify-center"
              >
                ×
              </button>
              
              <div className="bg-white/10 backdrop-blur-md rounded-xl overflow-hidden border border-white/10">
                <div className="relative">
                  <img 
                    src={currentProject.images[currentImageIndex]} 
                    alt={`${currentProject.title} - Image ${currentImageIndex + 1}`} 
                    className="w-full h-auto max-h-[50vh] sm:max-h-[60vh] object-contain"
                  />
                  {currentProject.images.length > 1 && (
                    <>
                      <button 
                        onClick={prevImage} 
                        className="absolute left-1 sm:left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 p-2 rounded-full transition-all text-white"
                      >
                        <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
                      </button>
                      <button 
                        onClick={nextImage} 
                        className="absolute right-1 sm:right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 p-2 rounded-full transition-all text-white"
                      >
                        <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
                      </button>
                    </>
                  )}
                </div>
                
                <div className="p-4 sm:p-6 text-center">
                  <h3 className="text-lg sm:text-2xl font-bold mb-2 sm:mb-3">{currentProject.title}</h3>
                  <p className="text-gray-300 mb-4 sm:mb-6 max-w-2xl mx-auto text-xs sm:text-sm">
                    {currentProject.description}
                  </p>
                  
                  <div className="flex justify-center gap-1 sm:gap-2 mb-4 sm:mb-6">
                    {currentProject.images.map((_, i) => (
                      <button 
                        key={i} 
                        onClick={() => setCurrentImageIndex(i)}
                        className={`w-2 h-2 rounded-full transition-all ${
                          i === currentImageIndex ? 'bg-white' : 'bg-white/50'
                        }`} 
                      />
                    ))}
                  </div>
                  
                  <div className="flex flex-col sm:flex-row justify-center gap-2 sm:gap-3">
                    {currentProject.link !== '#' && (
                      <a 
                        href={currentProject.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="px-4 sm:px-6 py-2 sm:py-3 bg-blue-500 hover:bg-blue-600 rounded-lg flex items-center justify-center gap-2 text-xs sm:text-sm transition-all flex-1 sm:flex-none"
                      >
                        {currentProject.type === 'web' ? 'Live Demo' : 'View Design'} 
                        <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4" />
                      </a>
                    )}
                    {currentProject.github !== '#' && (
                      <a 
                        href={currentProject.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="px-4 sm:px-6 py-2 sm:py-3 border border-white/20 hover:border-blue-500/50 rounded-lg flex items-center justify-center gap-2 text-xs sm:text-sm transition-all flex-1 sm:flex-none"
                      >
                        View Code 
                        <Github className="w-3 h-3 sm:w-4 sm:h-4" />
                      </a>
                    )}
                    {currentProject.link === '#' && currentProject.github === '#' && (
                      <button 
                        onClick={closeGallery}
                        className="px-4 sm:px-6 py-2 sm:py-3 bg-blue-500 hover:bg-blue-600 rounded-lg flex items-center justify-center gap-2 text-xs sm:text-sm transition-all flex-1 sm:flex-none"
                      >
                        Close Gallery
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* CTA */}
        <div className="text-center mt-12 sm:mt-16">
          <p className="text-gray-400 mb-4 text-sm">Interested in working together?</p>
          <button 
            onClick={() => scrollToSection('contact')}
            className="px-6 sm:px-8 py-3 sm:py-4 bg-blue-500 hover:bg-blue-600 rounded-lg font-medium flex items-center gap-2 sm:gap-3 mx-auto shadow-lg shadow-blue-500/25 transition-all hover:scale-105 text-sm"
          >
            <Mail className="w-4 h-4 sm:w-5 sm:h-5" /> Start a Project
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;