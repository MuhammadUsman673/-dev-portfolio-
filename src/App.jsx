import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail, ArrowRight, Code2, Palette, Database, Layout, Server, Smartphone, ExternalLink, Download, MapPin, Phone, GraduationCap, ChevronLeft, ChevronRight } from 'lucide-react';
import usmanImage from './assets/usman.jpg';
import p1 from './assets/pp1.png';
import p2 from './assets/p2.png';
import p3 from './assets/p3.png';
import p4 from './assets/p4.png';
import p5 from './assets/p5.png';
import p6 from './assets/p6.png';
import p7 from './assets/p7.png';
import p12 from './assets/p12.png';
import p122 from './assets/p122.png';
import p1222 from './assets/p1222.png';
import p1223 from './assets/p1223.png';
import p8 from './assets/p8.jpeg';
import p9 from './assets/p9.png';
import p10 from './assets/p10.png';
import p11 from './assets/p11.png';
import p13 from './assets/p13.png';
import p14 from './assets/p14.png';
import s1 from './assets/s1.png';
import s2 from './assets/s2.png';
import s3 from './assets/s3.png';
import s4 from './assets/s4.png';
import s5 from './assets/s5.png';
import s6 from './assets/s6.png';
import s7 from './assets/s7.png';
import s8 from './assets/s8.png';
import ss1 from './assets/ss1.png';
import ss2 from './assets/ss2.png';
import ss3 from './assets/ss3.png';
import ss4 from './assets/ss4.png';
import ss5 from './assets/ss5.png';
import ss6 from './assets/ss6.png';
import p15 from './assets/p15.png';
import p16 from './assets/p16.png';
import p17 from './assets/p17.png';
import p18 from './assets/p18.png';
import p19 from './assets/p19.png';
import p20 from './assets/p20.png';
import p21 from './assets/p21.png';
import z1 from './assets/z1.png';
import z2 from './assets/z2.png';
import z3 from './assets/z3.png';
import z4 from './assets/z4.png';
import z5 from './assets/z5.png';
import z6 from './assets/z6.png';
import z7 from './assets/z7.png';
import z8 from './assets/z8.png';
import z9 from './assets/z9.png';
import p22 from './assets/p22.png';
import p23 from './assets/p23.png';
import p24 from './assets/p24.png';
import p25 from './assets/p25.png';
import p26 from './assets/p26.png';
import p28 from './assets/p28.png';
import p29 from './assets/p29.png';

const Portfolio = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState('home');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [currentProject, setCurrentProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [activeCategory, setActiveCategory] = useState('all');
  const [filterPages, setFilterPages] = useState({ all: 0, web: 0, figma: 0 });
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Set loaded state after component mounts
    setIsLoaded(true);

    const handleScroll = () => {
      setScrollY(window.scrollY);
      
      const sections = ['home', 'about', 'skills', 'projects', 'education', 'experience', 'contact'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    // Initialize scroll animations
    const initScrollAnimations = () => {
      const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      };

      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      }, observerOptions);

      // Observe all animate-on-scroll elements
      document.querySelectorAll('.animate-on-scroll').forEach(el => {
        observer.observe(el);
      });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    
    // Initialize animations after a short delay
    setTimeout(() => {
      initScrollAnimations();
    }, 100);
    
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setMenuOpen(false);
    }
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
      setCurrentImageIndex(prev => 
        prev === currentProject.images.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevImage = () => {
    if (currentProject) {
      setCurrentImageIndex(prev => 
        prev === 0 ? currentProject.images.length - 1 : prev - 1
      );
    }
  };

  // Education Data
  const education = [
    {
      year: '2021 - 2025',
      degree: 'Bachelor of Science in Software Engineering',
      institution: 'University of Sargodha',
      description: 'Completed degree in Software Engineering with focus on web development, database systems, and software architecture. Built strong foundation in programming principles and modern development practices.',
      status: 'Completed'
    },
    {
      year: '2019 - 2021',
      degree: 'Intermediate in Computer Science',
      institution: 'Superior Group of Colleges',
      description: 'Completed intermediate studies with computer science major, gaining fundamental knowledge in programming, mathematics, and computer systems that paved way for higher education in software engineering.',
      status: 'Completed'
    },
    {
      year: '2017 - 2019',
      degree: 'Matriculation in Science',
      institution: 'A.I Model High School Bhera',
      description: 'Completed matriculation with science subjects, establishing basic understanding of mathematics and sciences that formed the foundation for further technical education.',
      status: 'Completed'
    }
  ];

  // Skills Data with CDN logos
  const skills = [
    { 
      name: "React.js", 
      level: "Advanced",
      category: "Frontend",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
    },
    { 
      name: "Node.js", 
      level: "Advanced",
      category: "Backend",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
    },
    { 
      name: "MongoDB", 
      level: "Advanced", 
      category: "Database",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
    },
    { 
      name: "Express.js", 
      level: "Advanced",
      category: "Backend",
      logo: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBmaWxsPSIjMDAwMDAwIi8+Cjx0ZXh0IHg9IjIwIiB5PSIyMCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjEwIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSI+RXhwcmVzczwvdGV4dD4KPC9zdmc+"
    },
    { 
      name: "Figma", 
      level: "Advanced",
      category: "Design",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg"
    },
    { 
      name: "JavaScript", 
      level: "Advanced",
      category: "Language",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
    },
    { 
      name: "Tailwind CSS", 
      level: "Advanced",
      category: "Styling",
      logo: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBmaWxsPSIjMzhiYmY4Ii8+Cjx0ZXh0IHg9IjIwIiB5PSIyMCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjgiIGZpbGw9IndoaXRlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkb21pbmFudC1iYXNlbGluZT0ibWlkZGxlIj5UYWlsd2luZDwvdGV4dD4KPC9zdmc+"
    },
    { 
      name: "UI/UX Design", 
      level: "Advanced",
      category: "Design",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/xd/xd-plain.svg"
    }
  ];

  // Projects Data
  const projects = [
    // Web Development Projects
    {
      title: 'Collegesathi Platform',
      description: 'University comparison platform for students to find and compare educational programs.',
      tech: ['React', 'Tailwind', 'JavaScript'],
      features: ['University comparisons', 'Program listings', 'Student reviews'],
      link: '#',
      github: '#',
      image: p1,
      images: [p1, p2, p3, p4, p5, p6, p7],
      emoji: '🎓',
      type: 'web'
    },
    {
      title: 'E-commerce - Sports Fashion Store',
      description: 'Modern sports fashion e-commerce platform featuring teamwear, athlete collections, and lifestyle apparel with secure payment integration.',
      tech: ['React', 'Node.js', 'MongoDB', 'Payment Processing', 'CSS'],
      features: [
        'Product catalog with categories',
        'Shopping cart & user authentication', 
        'Secure payment processing',
        'Responsive design',
        'Modern sports fashion UI'
      ],
      link: 'https://graypak.netlify.app',
      github: 'https://github.com/MuhammadUsman673/GrayPak',
      image: p13,
      images: [p13],
      emoji: '🛒',
      type: 'web'
    },
    {
      title: 'Admin Dashboard System',
      description: 'Comprehensive admin dashboard with user management, analytics, and multi-module administration system with role-based access control.',
      tech: ['React', 'Node.js', 'MongoDB', 'Full-Stack Development'],
      features: [
        'User management & access control',
        'Analytics dashboard with reporting',
        'Multi-module administration',
        'Secure authentication',
        'Responsive design'
      ],
      github: '#',
      image: p122,
      images: [p122],
      emoji: '📊',
      type: 'web'
    },
    {
      title: 'Sparlex - Spa & Beauty Center',
      description: 'Modern spa and beauty platform featuring skin care treatments, therapeutic services, and wellness packages with appointment booking system.',
      tech: ['React', 'Frontend Development', 'Responsive Design', 'CSS'],
      features: [
        'Service catalog with categories',
        'Appointment booking & pricing plans',
        'Specialist profiles & testimonials',
        'Responsive design',
        'Modern spa wellness UI'
      ],
      link: 'https://beauty-mauve.vercel.app',
      github: '#',
      image: p1222,
      images: [p1222],
      emoji: '💆‍♀️',
      type: 'web'
    },
    {
      title: 'Clifton Coffee - E-commerce website',
      description: 'Modern e-commerce platform built with HTML, CSS, and JavaScript featuring product catalog, shopping cart, and responsive design.',
      tech: ['HTML', 'CSS', 'JavaScript', 'Frontend Development'],
      features: [
        'Product catalog & categories',
        'Shopping cart functionality',
        'Responsive design',
        'Modern e-commerce UI',
        'User-friendly navigation'
      ],
      link: 'https://slashcart-peach.vercel.app',
      github: '#',
      image: p1223,
      images: [p1223],
      emoji: '🛍️',
      type: 'web'
    },
    {
      title: 'AI Knee MRI ACL Detection',
      description: 'AI-powered medical imaging system that detects ACL injuries in knee MRI scans with high accuracy, assisting doctors in diagnosis.',
      tech: ['React', 'Firebase', 'AI Integration', 'Medical Imaging', 'Machine Learning'],
      features: [
        'AI-powered ACL injury detection',
        'Firebase authentication & security',
        'Medical image processing',
        'Detailed analysis reports',
        'Doctor-friendly interface'
      ],
      link: 'https://acl-detection.vercel.app',
      github: 'https://github.com/MuhammadUsman673/ACL-Detection.git',
      image: p8,
      images: [p8],
      emoji: '🩺',
      type: 'web'
    },
    {
      title: 'VOXIA Social Media Platform',
      description: 'Full-featured social media platform with real-time messaging, user profiles, and post sharing functionality.',
      tech: ['React', 'Node.js', 'MongoDB', 'Express', 'Socket.io', 'JWT Auth'],
      features: [
        'User authentication & profile management',
        'Real-time messaging & notifications',
        'Post creation with media upload',
        'Friend connections system', 
        'Search functionality',
        'Responsive design'
      ],
      link: '#',
      github: 'https://github.com/abduldevCode/Voxia02',
      image: p15,
      images: [p15, p16, p17, p18, p19, p20, p21],
      emoji: '👥',
      type: 'web'
    },
    {
      title: 'Boutique E-commerce Admin Panel',
      description: 'Live admin panel for boutique e-commerce with real-time analytics, product management, and order processing with secure authentication.',
      tech: ['React', 'Node.js', 'MongoDB', 'Dashboard', 'Full-Stack Development'],
      features: [
        'Real-time analytics dashboard',
        'Product & inventory management',
        'Order processing system',
        'Payment tracking',
        'User management & authentication',
        'Responsive admin design'
      ],
      link: '#',
      github: '#',
      image: z1,
      images: [z1, z2, z3, z4, z5, z6, z7, z8, z9],
      emoji: '🛍️',
      type: 'web'
    },
    {
      title: 'AutoDrive - Electric Vehicle Platform',
      description: 'Modern electric vehicle website inspired by Tesla, featuring vehicle showcases, booking system, and immersive design with smooth animations.',
      tech: ['React', 'Tailwind CSS', 'JavaScript', 'Framer Motion', 'Responsive Design'],
      features: [
        'Vehicle showcase with interactive galleries',
        'Booking and test drive system',
        'Performance specifications comparison',
        'Smooth scroll animations and transitions',
        'Mobile-first responsive design',
        'Electric vehicle technology highlights'
      ],
      link: '#',
      github: '#',
      image: p22,
      images: [p22, p23, p24, p25, p26, p28, p29],
      emoji: '🚗',
      type: 'web'
    },

    // Figma Projects
    {
      title: 'Digital Payment Card UI',
      description: 'Modern mobile banking interface design featuring digital payment cards, transaction security, and financial management with sleek visual aesthetics.',
      tech: ['Figma', 'UI/UX Design', 'Mobile Design', 'Payment Systems', 'Fintech'],
      features: [
        'Digital Card Display',
        'Secure Payment Interface', 
        'Transaction Overview',
        'Modern Financial UI'
      ],
      link: 'https://www.figma.com/design/GPXLoit4GMXjli9Hhe30Bi/Untitled?node-id=1-2&t=g8PTgB5EAtE8c04u-1',
      github: '#',
      image: p9,
      images: [p9],
      emoji: '💳',
      type: 'figma'
    },
    {
      title: 'Scrollable E-commerce Product Page',
      description: 'Mobile e-commerce product page with scrollable interface for AirPods Pro 2, featuring dynamic content presentation, size selection, and smooth scrolling product details.',
      tech: ['Figma', 'UI/UX Design', 'Mobile Design', 'E-commerce', 'Scroll Interactions'],
      features: [
        'Scrollable Product Interface',
        'Dynamic Content Presentation', 
        'Size Selection (XS, S, M, L)',
        'Smooth Scroll Interactions',
        'Mobile-First Design'
      ],
      link: 'https://www.figma.com/design/rAOXJbI0AKNcujr9Z4Sfbw/Untitled?node-id=3-17&t=nG3rQOSN1PTRHtAW-1',
      github: '#',
      image: p10,
      images: [p10],
      emoji: '📱',
      type: 'figma'
    },
    {
      title: 'Dashboard Design',
      description: 'Modern analytics dashboard with revenue tracking, sales metrics, and recent activity overview featuring clean data visualization and user-friendly interface.',
      tech: ['Figma', 'UI Design', 'Data Visualization', 'Dashboard', 'Analytics'],
      features: [
        'Revenue & Sales Metrics',
        'Data Visualization',
        'Recent Activity Overview',
        'Clean Dashboard Layout',
        'User-Friendly Interface'
      ],
      link: '#',
      github: '#',
      image: p11,
      images: [p11],
      emoji: '📊',
      type: 'figma'
    },
    {
      title: 'NFT Marketplace Website',
      description: 'Modern NFT marketplace website design featuring rare digital art discovery, built-in analytics dashboard, user community section, and seamless minting experience with dark theme aesthetics.',
      tech: ['Figma', 'UI/UX Design', 'Website Design', 'Web3', 'Dark Theme'],
      features: [
        'Rare NFT Discovery Section',
        'Built-in Analytics Dashboard', 
        'User Community & Testimonials',
        'Seamless Minting Experience',
        'Modern Web3 Website Design'
      ],
      link: 'https://www.figma.com/design/YMnhR4sIxTfoYZPqrrBTem/Flux---Figma-Build-Tutorial--Starter---Community-?node-id=204-2&t=IrWT6V6XmYetUsF6-1',
      github: '#',
      image: p12,
      images: [p12],
      emoji: '🌐',
      type: 'figma'
    },
    {
      title: 'Fitness Coaching Mobile App',
      description: 'Comprehensive fitness and coaching mobile application featuring client management, payment processing, diet planning, workout library, and progress tracking for personal trainers and their clients.',
      tech: ['Figma', 'UI/UX Design', 'Mobile Design', 'Fitness Tech', 'Payment Integration'],
      features: [
        'Client & Coach Profiles',
        'Payment & Payout System', 
        'Diet Category Management',
        'Workout Library & Planning',
        'Progress Tracking Dashboard',
        'Onboarding Flow',
        'Multi-user Management'
      ],
      link: '#',
      github: '#',
      image: p14,
      images: [s1, s2, s3, s4, s5, s6, s7, s8],
      emoji: '💪',
      type: 'figma'
    },
    {
      title: 'Fitness Platform Admin Dashboard',
      description: 'Complete admin dashboard for fitness coaching platform featuring coach management, payment monitoring, recipe/exercise libraries, and customer support system with comprehensive analytics.',
      tech: ['Figma', 'UI/UX Design', 'Dashboard Design', 'Admin Panel', 'SaaS Platform'],
      features: [
        'Coach & Client Management',
        'Payment Monitoring & Revenue Analytics', 
        'Recipe & Exercise Library Management',
        'Customer Support Ticket System',
        'Financial Performance Dashboard',
        'Multi-user Administration'
      ],
      link: '#',
      github: '#',
      image: ss1,
      images: [ss1, ss2, ss3, ss4, ss5, ss6],
      emoji: '🏋️‍♂️',
      type: 'figma'
    },
  ];

  const experience = [
    {
      year: '2021 - Present',
      title: 'Freelance Full Stack Developer',
      company: 'Self-Employed',
      description: 'Building scalable web applications and designing user interfaces for clients worldwide'
    },
    {
      year: '2021 - Present',
      title: 'UI/UX Designer',
      company: 'Freelance',
      description: 'Creating beautiful designs for web and mobile applications in Figma'
    }
  ];

  // ✅ FIXED: Filter and Pagination Logic
  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(p => p.type === activeCategory);

  const projectsPerPage = 6;
  const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);
  
  // Get current page for active category
  const currentPage = filterPages[activeCategory];
  const hasMoreProjects = currentPage < totalPages - 1;

  // Fixed pagination calculation
  const startIndex = currentPage * projectsPerPage;
  const endIndex = Math.min(startIndex + projectsPerPage, filteredProjects.length);
  const displayedProjects = filteredProjects.slice(startIndex, endIndex);

  const handleLoadMore = () => {
    if (hasMoreProjects) {
      setFilterPages(prev => ({
        ...prev,
        [activeCategory]: prev[activeCategory] + 1
      }));
    }
  };

  const handleShowLess = () => {
    if (currentPage > 0) {
      setFilterPages(prev => ({
        ...prev,
        [activeCategory]: prev[activeCategory] - 1
      }));
    }
  };

  // ✅ FIXED: Category change function - RESETS to page 0 when switching categories
  const handleCategoryChange = (category) => {
    if (category !== activeCategory) {
      setActiveCategory(category);
      // Reset to page 0 when switching categories
      setFilterPages(prev => ({
        ...prev,
        [category]: 0
      }));
    }
  };

  // Direct page navigation
  const goToPage = (page) => {
    setFilterPages(prev => ({
      ...prev,
      [activeCategory]: page
    }));
  };

  return (
    <div className="bg-black text-white min-h-screen">
      {/* Custom Cursor */}
      <div 
        className="fixed w-4 h-4 bg-blue-500 rounded-full pointer-events-none z-50 mix-blend-difference transition-transform duration-150"
        style={{ 
          left: mousePosition.x - 8, 
          top: mousePosition.y - 8,
          transform: 'translate(0, 0)'
        }}
      />

      {/* Navigation */}
      <nav className={`fixed w-full z-40 transition-all duration-500 ${scrollY > 50 ? 'bg-black/95 backdrop-blur-md border-b border-white/10' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className={`text-xl font-bold transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
              <span className="text-blue-500">&lt;</span>
              Usman
              <span className="text-blue-500">/&gt;</span>
            </div>
            
            <div className="hidden md:flex items-center gap-8">
              {['Home', 'About', 'Skills', 'Projects', 'Education', 'Experience', 'Contact'].map((item, index) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`text-sm hover:text-blue-500 transition-all duration-500 relative ${
                    activeSection === item.toLowerCase() ? 'text-blue-500' : 'text-gray-400'
                  } ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}
                  style={{ transitionDelay: `${index * 100 + 300}ms` }}
                >
                  {item}
                  {activeSection === item.toLowerCase() && (
                    <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-blue-500 scale-x-100 transition-transform duration-300" />
                  )}
                </button>
              ))}
            </div>

            <button 
              onClick={() => setMenuOpen(!menuOpen)} 
              className="md:hidden text-white transition-transform duration-300 hover:scale-110"
            >
              {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden bg-black/95 backdrop-blur-md border-t border-white/10 animate-fade-in">
            <div className="px-6 py-4 space-y-4">
              {['Home', 'About', 'Skills', 'Projects', 'Education', 'Experience', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="block w-full text-left text-gray-400 hover:text-blue-500 transition-all duration-300 py-2 hover:pl-4 border-l-2 border-transparent hover:border-blue-500"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-4 sm:px-6 relative overflow-hidden">
        {/* Animated background grid */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: 'linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }} />
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          {/* Availability Badge */}
          <div className={`mt-14 mb-6 sm:mb-8 inline-flex items-center gap-2 px-3 py-2 sm:px-4 sm:py-2 bg-blue-500/10 border border-blue-500/20 rounded-full transition-all duration-1000 ${
            isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
          }`}>
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span className="text-xs sm:text-sm text-gray-400">Available for freelance work</span>
          </div>

          {/* Main Heading */}
          <h1 className={`text-4xl sm:text-5xl md:text-7xl font-bold mb-4 sm:mb-6 transition-all duration-1000 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            Hi, I'm <span className="text-blue-500 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">M Usman</span>
          </h1>
          
          {/* Subheading */}
          <h2 className={`text-xl sm:text-2xl md:text-4xl font-light text-gray-400 mb-6 sm:mb-8 transition-all duration-1000 delay-300 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            Full Stack Developer & Figma Designer
          </h2>
          
          {/* Description */}
          <p className={`text-base sm:text-lg text-gray-500 mb-8 sm:mb-12 max-w-2xl mx-auto leading-relaxed px-4 transition-all duration-1000 delay-500 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            I craft exceptional digital experiences using MERN stack and create stunning designs in Figma. 
            With 3+ years of experience, I turn ideas into reality.
          </p>

          {/* CTA Buttons */}
          <div className={`flex flex-col sm:flex-row gap-4 justify-center mb-8 sm:mb-12 px-4 transition-all duration-1000 delay-700 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <button
              onClick={() => scrollToSection('contact')}
              className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-blue-500 hover:bg-blue-600 rounded-lg font-medium transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 group shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40"
            >
              Get In Touch
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </button>

            <button
              onClick={() => scrollToSection('projects')}
              className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 border border-white/20 hover:border-blue-500/50 rounded-lg font-medium transition-all duration-300 hover:scale-105 group hover:bg-white/5"
            >
              View Work
            </button>
          </div>

          {/* Social Links */}
          <div className={`flex gap-4 sm:gap-6 justify-center transition-all duration-1000 delay-1000 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            {[
              { icon: Github, href: 'https://github.com/MuhammadUsman673' },
              { icon: Linkedin, href: 'https://www.linkedin.com/in/muhammad-usman-b947b5371' },
              { icon: Mail, href: 'mailto:Zainusman718@gmail.com' }
            ].map((social, index) => (
              <a 
                key={index}
                href={social.href} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-blue-500 transition-all duration-300 hover:scale-110 p-3 hover:bg-white/5 rounded-lg"
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <div className={`absolute bottom-8 left-1/2 -translate-x-1/2 transition-all duration-1000 delay-1200 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}>
          <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center p-2 animate-bounce">
            <div className="w-1 h-2 bg-blue-500 rounded-full" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-gradient-to-r from-blue-500/10 to-purple-500/10">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="animate-on-scroll">
              <h2 className="text-sm text-blue-500 font-semibold mb-4 uppercase tracking-wider">About Me</h2>
              <h3 className="text-4xl font-bold mb-6">Turning Ideas Into Reality</h3>
              <p className="text-gray-400 leading-relaxed mb-6">
                I'm a passionate Full Stack Developer and Figma Designer with over 3 years of experience 
                creating exceptional digital experiences. My journey in tech has been driven by a love for 
                both beautiful design and clean, efficient code.
              </p>
              <p className="text-gray-400 leading-relaxed mb-6">
                Specializing in MERN stack, I build scalable web applications that not only look 
                stunning but perform flawlessly. My design expertise in Figma allows me to bridge the 
                gap between vision and implementation.
              </p>
              
              <div className="grid grid-cols-3 gap-6 mb-8">
                {[
                  { number: '10+', label: 'Projects' },
                  { number: '3+', label: 'Years Exp' },
                  { number: '10+', label: 'Clients' }
                ].map((stat, index) => (
                  <div key={index} className="text-center group">
                    <div className="text-3xl font-bold text-blue-500 mb-1 group-hover:scale-110 transition-transform duration-300">{stat.number}</div>
                    <div className="text-sm text-gray-500">{stat.label}</div>
                  </div>
                ))}
              </div>

              <button className="px-6 py-3 border border-white/20 hover:border-blue-500/50 rounded-lg font-medium transition-all duration-300 hover:scale-105 flex items-center gap-2 group hover:bg-white/5">
                <Download className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                Download Resume
              </button>
            </div>

            <div className="relative animate-on-scroll">
              <div className="aspect-square rounded-2xl border border-white/10 overflow-hidden hover:scale-105 transition-all duration-500 hover:rotate-3 group">
                <img src={usmanImage} alt="Zain Usman" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              </div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
              <div className="absolute -top-4 -left-4 w-32 h-32 bg-purple-500/20 rounded-full blur-3xl animate-pulse" />
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6 bg-gradient-to-r from-blue-500/10 to-purple-500/10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-sm text-blue-500 font-semibold mb-4 uppercase tracking-wider">My Skills</h2>
            <h3 className="text-4xl font-bold">Technologies I Work With</h3>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="group p-6 bg-black border border-white/10 rounded-xl hover:border-blue-500/50 transition-all duration-500 hover:scale-105 animate-on-scroll hover:shadow-2xl hover:shadow-blue-500/10"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                  <img 
                    src={skill.logo} 
                    alt={skill.name}
                    className="w-8 h-8 object-contain group-hover:filter group-hover:brightness-110"
                  />
                </div>
                <h4 className="font-semibold mb-1 group-hover:text-blue-500 transition-colors duration-300">{skill.name}</h4>
                <p className="text-sm text-gray-500">{skill.category}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 sm:px-6 bg-gradient-to-r from-blue-500/10 to-purple-500/10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 animate-on-scroll">
            <h2 className="text-sm text-blue-500 font-semibold mb-4 uppercase tracking-wider">Portfolio</h2>
            <h3 className="text-3xl sm:text-4xl font-bold mb-4">Featured Projects</h3>
            <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base px-4">
              Here are some of my recent works. Each project represents a unique challenge and solution.
            </p>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-col items-center mb-12 animate-on-scroll">
            <div className="inline-flex bg-white/5 border border-white/10 rounded-2xl p-2 backdrop-blur-sm">
              {[
                { key: 'all', label: 'All Projects', icon: '✨', count: projects.length },
                { key: 'web', label: 'Web Development', icon: '🌐', count: projects.filter(p => p.type === 'web').length },
                { key: 'figma', label: 'UI/UX Designs', icon: '🎨', count: projects.filter(p => p.type === 'figma').length }
              ].map((category) => (
                <button
                  key={category.key}
                  onClick={() => handleCategoryChange(category.key)}
                  className={`relative px-8 py-4 rounded-xl font-medium transition-all duration-500 flex items-center gap-3 group ${
                    activeCategory === category.key
                      ? 'bg-blue-500 text-white shadow-2xl shadow-blue-500/25'
                      : 'text-gray-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <span className="text-xl">{category.icon}</span>
                  <span className="font-semibold">{category.label}</span>
                  <span className={`px-2 py-1 text-xs rounded-full transition-all duration-300 ${
                    activeCategory === category.key
                      ? 'bg-white/20 text-white'
                      : 'bg-white/10 text-gray-400'
                  }`}>
                    {category.count}
                  </span>
                  
                  {/* Active indicator */}
                  {activeCategory === category.key && (
                    <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-16 h-1 bg-blue-400 rounded-full" />
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {displayedProjects.map((project, index) => (
              <div
                key={index}
                className="group bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-blue-500/50 transition-all duration-500 hover:scale-105 animate-on-scroll hover:shadow-2xl hover:shadow-blue-500/10"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Project Type Badge */}
                <div className="absolute top-4 right-4 z-10">
                  <span className={`px-3 py-1.5 text-xs rounded-full font-medium backdrop-blur-sm ${
                    project.type === 'web' 
                      ? 'bg-blue-500/20 text-blue-300 border border-blue-500/30'
                      : 'bg-purple-500/20 text-purple-300 border border-purple-500/30'
                  }`}>
                    {project.type === 'web' ? '🌐 Web' : '🎨 Design'}
                  </span>
                </div>

                {/* Project Image */}
                <div className="relative h-56 sm:h-64 md:h-56 w-full overflow-hidden bg-gradient-to-br from-blue-500/10 to-purple-500/10">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end justify-center p-6">
                    <div className="flex gap-3 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      {project.link !== '#' ? (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105 flex items-center gap-2 backdrop-blur-sm"
                        >
                          {project.type === 'web' ? 'Live Demo' : 'View Design'}
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      ) : (
                        <button
                          onClick={() => openGallery(project)}
                          className="px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105 flex items-center gap-2 backdrop-blur-sm"
                        >
                          View Project
                          <ExternalLink className="w-4 h-4" />
                        </button>
                      )}
                      
                      {project.github !== '#' && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-4 py-2 border border-white/20 hover:border-blue-500/50 rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105 flex items-center gap-2 bg-black/50 backdrop-blur-sm"
                        >
                          Code
                          <Github className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
                
                {/* Project Content */}
                <div className="p-6">
                  <h4 className="text-lg font-bold mb-2 group-hover:text-blue-500 transition-colors duration-300 flex items-center gap-2">
                    <span className="text-xl">{project.emoji}</span>
                    {project.title}
                  </h4>
                  <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.slice(0, 3).map((tech, i) => (
                      <span 
                        key={i} 
                        className={`px-3 py-1 text-xs rounded-full transition-all duration-300 backdrop-blur-sm ${
                          project.type === 'web'
                            ? 'bg-blue-500/10 text-blue-400 group-hover:bg-blue-500/20'
                            : 'bg-purple-500/10 text-purple-400 group-hover:bg-purple-500/20'
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 3 && (
                      <span className="px-3 py-1 text-xs rounded-full bg-gray-500/10 text-gray-400 backdrop-blur-sm">
                        +{project.tech.length - 3}
                      </span>
                    )}
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <button
                      onClick={() => openGallery(project)}
                      className={`text-sm font-medium flex items-center gap-2 hover:gap-3 transition-all duration-300 group/link ${
                        project.type === 'web' ? 'text-blue-500' : 'text-purple-500'
                      }`}
                    >
                      View Details
                      <ArrowRight className="w-4 h-4 opacity-0 group-hover/link:opacity-100 transition-all duration-300 transform group-hover/link:translate-x-1" />
                    </button>
                    
                    <span className="text-xs text-gray-500 bg-white/5 px-2 py-1 rounded backdrop-blur-sm">
                      {project.features.length} features
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination Controls */}
          <div className="text-center animate-on-scroll">
            {totalPages > 1 && (
              <div className="flex items-center justify-center gap-4">
                {currentPage > 0 && (
                  <button
                    onClick={handleShowLess}
                    className="px-6 py-3 border border-white/20 hover:border-blue-500/50 rounded-xl font-medium transition-all duration-300 hover:scale-105 flex items-center gap-2 group hover:bg-white/5 backdrop-blur-sm"
                  >
                    <ChevronLeft className="w-4 h-4" />
                    Previous
                  </button>
                )}
                
                {totalPages > 1 && (
                  <div className="flex items-center gap-2 backdrop-blur-sm bg-white/5 rounded-xl p-2">
                    {Array.from({ length: totalPages }, (_, i) => (
                      <button
                        key={i}
                        onClick={() => goToPage(i)}
                        className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 font-medium ${
                          i === currentPage
                            ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/25'
                            : 'bg-white/10 text-gray-400 hover:bg-white/20'
                        }`}
                      >
                        {i + 1}
                      </button>
                    ))}
                  </div>
                )}
                
                {hasMoreProjects && (
                  <button
                    onClick={handleLoadMore}
                    className="px-6 py-3 bg-blue-500 hover:bg-blue-600 rounded-xl font-medium transition-all duration-300 hover:scale-105 flex items-center gap-2 group shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 backdrop-blur-sm"
                  >
                    Next
                    <ChevronRight className="w-4 h-4" />
                  </button>
                )}
              </div>
            )}
          </div>

          {/* Show message when no projects found */}
          {displayedProjects.length === 0 && (
            <div className="text-center py-12 animate-on-scroll">
              <p className="text-gray-400 text-lg">No projects found for this category.</p>
            </div>
          )}

          {/* Gallery Modal */}
          {galleryOpen && currentProject && (
            <div className="fixed inset-0 bg-black/95 backdrop-blur-md z-50 flex items-center justify-center p-4 animate-fade-in">
              <div className="relative max-w-6xl max-h-full w-full">
                <button
                  onClick={closeGallery}
                  className="absolute -top-12 right-0 text-white hover:text-blue-500 transition-colors z-10 hover:scale-110"
                >
                  <X className="w-8 h-8" />
                </button>

                <div className="bg-white/10 backdrop-blur-md rounded-2xl overflow-hidden border border-white/10">
                  <div className="relative">
                    <img
                      src={currentProject.images[currentImageIndex]}
                      alt={`${currentProject.title} ${currentImageIndex + 1}`}
                      className="w-full h-auto max-h-[80vh] object-contain"
                    />

                    {currentProject.images.length > 1 && (
                      <>
                        <button
                          onClick={prevImage}
                          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all backdrop-blur-sm hover:scale-110"
                        >
                          <ChevronLeft className="w-6 h-6" />
                        </button>
                        <button
                          onClick={nextImage}
                          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all backdrop-blur-sm hover:scale-110"
                        >
                          <ChevronRight className="w-6 h-6" />
                        </button>
                      </>
                    )}
                  </div>

                  <div className="p-6 text-center">
                    <h3 className="text-2xl font-bold mb-2">{currentProject.title}</h3>
                    <p className="text-gray-300 mb-4">{currentProject.description}</p>
                    <div className="flex justify-center gap-2 mb-4">
                      {currentProject.images.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentImageIndex(index)}
                          className={`w-3 h-3 rounded-full transition-all ${
                            index === currentImageIndex ? 'bg-white' : 'bg-white/50'
                          }`}
                        />
                      ))}
                    </div>
                    <div className="flex justify-center gap-4">
                      {currentProject.link !== '#' && (
                        <a
                          href={currentProject.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105 flex items-center gap-2 backdrop-blur-sm"
                        >
                          {currentProject.type === 'web' ? 'Live Demo' : 'View Design'}
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                      {currentProject.github !== '#' && (
                        <a
                          href={currentProject.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-4 py-2 border border-white/20 hover:border-blue-500/50 rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105 flex items-center gap-2 backdrop-blur-sm"
                        >
                          View Code
                          <Github className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Call to Action */}
          <div className="text-center mt-12 animate-on-scroll">
            <p className="text-gray-400 mb-4">Interested in working together?</p>
            <button
              onClick={() => scrollToSection('contact')}
              className="px-6 py-3 bg-blue-500 hover:bg-blue-600 rounded-xl font-medium transition-all duration-300 hover:scale-105 flex items-center gap-2 mx-auto group shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 backdrop-blur-sm"
            >
              <Mail className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
              Start a Project
            </button>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 px-6 bg-gradient-to-r from-blue-500/10 to-purple-500/10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-sm text-blue-500 font-semibold mb-4 uppercase tracking-wider">Education</h2>
            <h3 className="text-4xl font-bold">Academic Journey</h3>
            <p className="text-gray-400 max-w-2xl mx-auto mt-4">
              My educational path that built foundation for my career in technology and design.
            </p>
          </div>

          <div className="space-y-8">
            {education.map((edu, index) => (
              <div
                key={index}
                className="relative pl-8 pb-8 border-l-2 border-white/10 last:pb-0 animate-on-scroll group"
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="absolute left-0 top-0 w-4 h-4 -translate-x-[9px] bg-blue-500 rounded-full group-hover:scale-150 transition-transform duration-300" />
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-500/10 rounded-lg group-hover:scale-110 transition-transform duration-300 mt-1">
                    <GraduationCap className="w-6 h-6 text-blue-500" />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
                      <div>
                        <div className="text-sm text-blue-500 font-semibold mb-2 group-hover:translate-x-2 transition-transform duration-300">{edu.year}</div>
                        <h4 className="text-xl font-bold mb-1 group-hover:text-blue-500 transition-colors duration-300">{edu.degree}</h4>
                        <div className="text-gray-400 mb-3 group-hover:translate-x-2 transition-transform duration-300">{edu.institution}</div>
                      </div>
                      <div className={`px-3 py-1 rounded-full text-sm font-medium mb-3 sm:mb-0 ${
                        edu.status === 'In Progress' 
                          ? 'bg-yellow-500/10 text-yellow-400 border border-yellow-500/20'
                          : 'bg-green-500/10 text-green-400 border border-green-500/20'
                      }`}>
                        {edu.status}
                      </div>
                    </div>
                    <p className="text-gray-500 leading-relaxed group-hover:text-gray-400 transition-colors duration-300">{edu.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Certifications Section */}
          <div className="mt-16 animate-on-scroll">
            <h4 className="text-2xl font-bold text-center mb-8">Certifications & Courses</h4>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 bg-white/5 border border-white/10 rounded-xl hover:border-blue-500/50 transition-all duration-500 group hover:scale-105">
                <h5 className="font-semibold text-lg mb-2 group-hover:text-blue-500 transition-colors duration-300">
                  MERN Stack Development
                </h5>
                <p className="text-gray-400 text-sm mb-3">Complete Web Development Bootcamp</p>
                <div className="flex justify-between items-center">
                  <span className="text-xs text-blue-400 bg-blue-500/10 px-2 py-1 rounded">Completed</span>
                  <span className="text-xs text-gray-500">2023</span>
                </div>
              </div>
              <div className="p-6 bg-white/5 border border-white/10 rounded-xl hover:border-blue-500/50 transition-all duration-500 group hover:scale-105">
                <h5 className="font-semibold text-lg mb-2 group-hover:text-blue-500 transition-colors duration-300">
                  UI/UX Design in Figma
                </h5>
                <p className="text-gray-400 text-sm mb-3">Advanced Design Principles & Prototyping</p>
                <div className="flex justify-between items-center">
                  <span className="text-xs text-blue-400 bg-blue-500/10 px-2 py-1 rounded">Completed</span>
                  <span className="text-xs text-gray-500">2022</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-6 bg-gradient-to-r from-blue-500/10 to-purple-500/10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-sm text-blue-500 font-semibold mb-4 uppercase tracking-wider">Career</h2>
            <h3 className="text-4xl font-bold">Work Experience</h3>
          </div>

          <div className="space-y-8">
            {experience.map((exp, index) => (
              <div
                key={index}
                className="relative pl-8 pb-8 border-l-2 border-white/10 last:pb-0 animate-on-scroll group"
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="absolute left-0 top-0 w-4 h-4 -translate-x-[9px] bg-blue-500 rounded-full group-hover:scale-150 transition-transform duration-300" />
                <div className="text-sm text-blue-500 font-semibold mb-2 group-hover:translate-x-2 transition-transform duration-300">{exp.year}</div>
                <h4 className="text-xl font-bold mb-1 group-hover:text-blue-500 transition-colors duration-300">{exp.title}</h4>
                <div className="text-gray-400 mb-3 group-hover:translate-x-2 transition-transform duration-300">{exp.company}</div>
                <p className="text-gray-500 leading-relaxed group-hover:text-gray-400 transition-colors duration-300">{exp.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-gradient-to-r from-blue-500/10 to-purple-500/10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 animate-on-scroll">
            <h2 className="text-sm text-blue-500 font-semibold mb-4 uppercase tracking-wider">Get In Touch</h2>
            <h3 className="text-4xl font-bold mb-4">Let's Work Together</h3>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Have a project in mind? Let's create something amazing together.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="p-6 bg-white/5 border border-white/10 rounded-xl hover:border-blue-500/50 transition-all duration-500 group hover:scale-105 animate-on-scroll hover:shadow-2xl hover:shadow-blue-500/10">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-blue-500/10 rounded-lg group-hover:scale-110 transition-transform duration-300">
                  <Mail className="w-6 h-6 text-blue-500" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Email</h4>
                  <p className="text-sm text-gray-500">Primary contact method</p>
                </div>
              </div>
              <a 
                href="mailto:Zainusman718@gmail.com" 
                className="text-lg text-gray-300 hover:text-blue-500 transition-all duration-300 flex items-center gap-2 group/link font-medium"
              >
                Zainusman718@gmail.com
                <ArrowRight className="w-4 h-4 opacity-0 group-hover/link:opacity-100 transition-all duration-300 transform group-hover/link:translate-x-1" />
              </a>
              <p className="text-sm text-gray-500 mt-3 flex items-center gap-1">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                Quick response within 24 hours
              </p>
            </div>
            
            <div className="p-6 bg-white/5 border border-white/10 rounded-xl hover:border-blue-500/50 transition-all duration-500 group hover:scale-105 animate-on-scroll hover:shadow-2xl hover:shadow-blue-500/10" style={{ transitionDelay: '100ms' }}>
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-blue-500/10 rounded-lg group-hover:scale-110 transition-transform duration-300">
                  <MapPin className="w-6 h-6 text-blue-500" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Location</h4>
                  <p className="text-sm text-gray-500">Remote work available</p>
                </div>
              </div>
              <p className="text-lg text-gray-300 font-medium">Remote / Worldwide</p>
              <p className="text-sm text-gray-500 mt-3 flex items-center gap-1">
                <div className="w-2 h-2 bg-green-500 rounded-full" />
                Available for global projects
              </p>
            </div>
          </div>

          {/* Direct Email CTA */}
          <div className="text-center mb-12 p-8 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 rounded-2xl animate-on-scroll hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-500">
            <h4 className="text-xl font-bold mb-3">Prefer Direct Email?</h4>
            <p className="text-gray-400 mb-4">Click below to start a conversation right away</p>
            <a 
              href="mailto:Zainusman718@gmail.com?subject=Project%20Inquiry&body=Hello%20Zain,%20I%20would%20like%20to%20discuss%20a%20project%20with%20you." 
              className="inline-flex items-center gap-3 px-8 py-4 bg-blue-500 hover:bg-blue-600 rounded-xl font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25 group"
            >
              <Mail className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
              Send Email Now
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </a>
          </div>

          {/* Contact Form */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 animate-on-scroll hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500">
            <h4 className="text-xl font-bold mb-6 text-center">Or Send Me a Message Directly</h4>
            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-black border border-white/10 rounded-xl focus:border-blue-500 focus:outline-none transition-all duration-300 hover:border-white/20 backdrop-blur-sm"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 bg-black border border-white/10 rounded-xl focus:border-blue-500 focus:outline-none transition-all duration-300 hover:border-white/20 backdrop-blur-sm"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <textarea
                  rows={6}
                  className="w-full px-4 py-3 bg-black border border-white/10 rounded-xl focus:border-blue-500 focus:outline-none transition-all duration-300 hover:border-white/20 resize-none backdrop-blur-sm"
                  placeholder="Tell me about your project, timeline, and budget..."
                />
              </div>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  alert('Contact form submitted! In production, this would send your message.');
                }}
                className="w-full px-8 py-4 bg-blue-500 hover:bg-blue-600 rounded-xl font-medium transition-all duration-300 hover:scale-[1.02] flex items-center justify-center gap-2 group shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 backdrop-blur-sm"
              >
                Send Message
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>
          </div>

          {/* Additional Contact Options */}
          <div className="text-center mt-12 animate-on-scroll">
            <p className="text-gray-400 mb-6">You can also reach me through</p>
            <div className="flex justify-center gap-6">
              {[
                { icon: Github, href: 'https://github.com/MuhammadUsman673' },
                { icon: Linkedin, href: 'https://www.linkedin.com/in/muhammad-usman-b947b5371' },
                { icon: Mail, href: 'mailto:Zainusman718@gmail.com' }
              ].map((social, index) => (
                <a 
                  key={index}
                  href={social.href} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="p-4 bg-white/5 border border-white/10 rounded-xl hover:border-blue-500/50 transition-all duration-300 hover:scale-105 group hover:shadow-lg hover:shadow-blue-500/10 backdrop-blur-sm"
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <social.icon className="w-6 h-6 text-gray-400 group-hover:text-blue-500 transition-colors duration-300" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-white/10 animate-on-scroll">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-gray-400 text-sm">
            © 2024 Zain Usman. All rights reserved.
          </div>
          <div className="flex gap-6">
            {[
              { icon: Github, href: 'https://github.com/MuhammadUsman673' },
              { icon: Linkedin, href: 'https://www.linkedin.com/in/muhammad-usman-b947b5371' },
              { icon: Mail, href: 'mailto:Zainusman718@gmail.com' }
            ].map((social, index) => (
              <a 
                key={index}
                href={social.href} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-blue-500 transition-all duration-300 hover:scale-110"
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </footer>

      {/* Add CSS for animations */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-fade-in {
          animation: fadeIn 0.5s ease-out forwards;
        }

        .animate-scale-in {
          animation: scaleIn 0.3s ease-out forwards;
        }

        .animate-on-scroll {
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.6s ease-out;
        }

        .animate-on-scroll.animate-in {
          opacity: 1;
          transform: translateY(0);
        }

        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
};

export default Portfolio;