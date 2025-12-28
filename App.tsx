
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useState, useEffect } from 'react';
import { HeroScene } from './components/QuantumScene';
import { ProjectCard, TimelineItem, StatCard, SlidingSkills, BlogCard } from './components/Diagrams';
import { 
  Menu, X, Github, Linkedin, Mail, ArrowUpRight,
  Database, Brain, Globe, Layers, Zap, Cpu, Code
} from 'lucide-react';
import { motion } from 'framer-motion';

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 100,
        behavior: "smooth"
      });
    }
  };

  return (
    <div className="min-h-screen font-sans text-zinc-100 selection:bg-white/30 selection:text-white">
      
      {/* --- NAVBAR --- */}
      <nav className={`fixed top-0 left-0 right-0 z-50 flex justify-center transition-all duration-500 ${scrolled ? 'pt-4' : 'pt-0'}`}>
        <div className={`flex justify-between items-center transition-all duration-700 ease-[cubic-bezier(0.25,0.1,0.25,1)] ${
            scrolled 
            ? 'w-[92%] md:w-[80%] lg:w-[65%] bg-zinc-900/60 backdrop-blur-xl border border-white/10 rounded-full py-3 px-6 shadow-[0_8px_32px_rgba(0,0,0,0.3)]' 
            : 'w-full container px-6 md:px-12 py-10 bg-transparent'
        }`}>
            
            {/* Left Nav */}
            <div className="hidden md:flex items-center gap-8 lg:gap-12">
                {['About', 'Experience', 'Blog'].map((item) => (
                    <button 
                        key={item}
                        onClick={() => scrollToSection(item.toLowerCase())} 
                        className="text-sm uppercase tracking-widest text-zinc-300 hover:text-white transition-colors font-medium relative group"
                    >
                        {item}
                        <span className="absolute -bottom-1 left-0 w-0 h-px bg-white transition-all duration-300 group-hover:w-full"></span>
                    </button>
                ))}
            </div>

            {/* Center Logo */}
            <div 
                className="text-center cursor-pointer group flex-shrink-0"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
                <div className="text-xl md:text-2xl font-bold tracking-tighter text-white group-hover:text-zinc-200 transition-colors drop-shadow-lg">
                    ROSHAN<span className="font-light text-zinc-400">.SUVEDI</span>
                </div>
            </div>

            {/* Right Nav */}
            <div className="hidden md:flex items-center gap-8 lg:gap-12">
                 <button onClick={() => scrollToSection('projects')} className="text-sm uppercase tracking-widest text-zinc-300 hover:text-white transition-colors font-medium relative group">
                    Projects
                    <span className="absolute -bottom-1 left-0 w-0 h-px bg-white transition-all duration-300 group-hover:w-full"></span>
                 </button>
                 <a href="mailto:roshansuvedi@gmail.com" className={`px-6 py-2.5 rounded-full border text-sm uppercase tracking-widest transition-all backdrop-blur-md ${
                    scrolled 
                    ? 'bg-white text-black border-white hover:bg-zinc-200'
                    : 'bg-white/10 text-white border-white/20 hover:bg-white hover:text-black hover:border-white shadow-[0_0_20px_rgba(0,0,0,0.3)]'
                 }`}>
                    Contact
                 </a>
            </div>

            {/* Mobile Toggle */}
            <button className="md:hidden text-white p-1" onClick={() => setMenuOpen(!menuOpen)}>
                {menuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-black/95 backdrop-blur-xl flex flex-col items-center justify-center gap-12 text-center">
           {['About', 'Experience', 'Projects', 'Blog'].map((item) => (
              <button 
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())} 
                className="text-5xl font-extralight text-zinc-300 hover:text-white transition-transform hover:scale-105"
              >
                {item}
              </button>
            ))}
        </div>
      )}

      {/* --- HERO SECTION --- */}
      <header className="relative min-h-screen flex flex-col items-center justify-center pt-32 pb-20 overflow-hidden">
        
        <HeroScene />

        {/* Hero Text */}
        <div className="container mx-auto px-6 relative z-10 text-center flex flex-col justify-center items-center">
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
                <div className="inline-block mb-10 px-6 py-2.5 rounded-full border border-white/15 bg-white/5 backdrop-blur-lg shadow-2xl">
                    <span className="text-sm uppercase tracking-[0.25em] text-zinc-100 font-semibold">Portfolio 2025</span>
                </div>

                <h1 className="text-7xl md:text-9xl lg:text-[10rem] font-medium text-white mb-10 leading-[0.9] tracking-tight drop-shadow-2xl">
                    Roshan <br />
                    <span className="font-light text-zinc-400">Suvedi</span>
                </h1>
                
                <p className="max-w-3xl mx-auto text-zinc-200 text-2xl md:text-3xl font-light leading-relaxed mb-16 drop-shadow-lg">
                   AI & Software Engineer specialized in machine learning, backend development, and practical AI solutions.
                </p>

                <div className="flex flex-col md:flex-row justify-center gap-6">
                     <div className="px-12 py-5 rounded-full bg-white text-black text-sm font-bold uppercase tracking-widest hover:bg-zinc-200 transition-colors cursor-pointer shadow-[0_0_30px_rgba(255,255,255,0.4)] transform hover:scale-105" onClick={() => scrollToSection('projects')}>
                        View Projects
                    </div>
                     <a href="https://linkedin.com/in/roshansuvedi" target="_blank" rel="noreferrer" className="px-12 py-5 rounded-full bg-transparent border border-white/30 text-white text-sm font-bold uppercase tracking-widest hover:bg-white/10 transition-colors cursor-pointer backdrop-blur-sm">
                        LinkedIn Profile
                    </a>
                </div>
            </motion.div>
        </div>
      </header>

      {/* --- CONTENT --- */}
      <main className="relative z-10">
        
        {/* SLIDING SKILLS MARQUEE */}
        <section className="py-24 border-y border-white/5 bg-black/20 backdrop-blur-sm overflow-hidden">
             <div className="mb-12 text-center px-6">
                 <h3 className="text-xl text-zinc-400 uppercase tracking-[0.3em] mb-4">Core Technologies</h3>
             </div>
             <div className="space-y-10">
                <SlidingSkills 
                    items={['Python', 'Machine Learning', 'Deep Learning', 'TensorFlow', 'PyTorch', 'Data Analytics', 'Java', 'JavaScript', 'SQL', 'C++']} 
                    direction="left" 
                    speed={40}
                />
                <SlidingSkills 
                    items={['React.js', 'Django', 'Flask', 'MySQL', 'PostgreSQL', 'Docker', 'Git', 'Tableau', 'Power BI', 'Excel']} 
                    direction="right" 
                    speed={45}
                />
                <SlidingSkills 
                    items={['Stable Diffusion', 'StyleGAN', 'OpenCV', 'RAG', 'Gemini', 'Claude', 'LangChain', 'Zapier', 'Make.com', 'N8N']} 
                    direction="left" 
                    speed={50}
                />
             </div>
        </section>

        {/* ABOUT & STATS */}
        <section id="about" className="py-40">
            <div className="container mx-auto px-6 max-w-[1400px]">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                    <div>
                        <h2 className="text-6xl md:text-7xl font-light text-white mb-12 tracking-tight drop-shadow-xl">Engineering <br/><span className="font-semibold text-zinc-300">Intelligence</span></h2>
                        <div className="space-y-8 text-zinc-200 text-2xl font-light leading-relaxed drop-shadow-md">
                            <p>
                                I am an AI & Software Engineer with 8 months of intensive experience in building robust ML models and backend systems. 
                            </p>
                            <p>
                                My expertise lies in Python, deep learning, and modern web technologies. I am strong at debugging complex systems, optimizing machine learning models for performance, and contributing to end-to-end development lifecycles.
                            </p>
                            <p className="text-zinc-400 text-xl">
                                Currently based in Bangalore, India. Immediate Joiner.
                            </p>
                        </div>
                        
                        <div className="mt-16 flex flex-wrap gap-4">
                             <div className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/5 border border-white/10 text-zinc-300">
                                <Cpu size={20} />
                                <span>Generative AI</span>
                             </div>
                             <div className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/5 border border-white/10 text-zinc-300">
                                <Brain size={20} />
                                <span>Model Tuning</span>
                             </div>
                             <div className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/5 border border-white/10 text-zinc-300">
                                <Code size={20} />
                                <span>Full Stack</span>
                             </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-6">
                        <StatCard icon={<Zap size={32} />} value="92%" label="Accuracy" sub="Cervical Cancer Model" delay={0.1} />
                        <StatCard icon={<Layers size={32} />} value="3" label="Key Projects" sub="End-to-End ML Systems" delay={0.2} />
                        <StatCard icon={<Database size={32} />} value="8mo" label="Experience" sub="Professional AI Roles" delay={0.3} />
                        <StatCard icon={<Globe size={32} />} value="1st" label="Award" sub="Technophilia Coding" delay={0.4} />
                    </div>
                </div>
            </div>
        </section>

        {/* PROJECTS LIST */}
        <section id="projects" className="py-40 relative">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/[0.02] to-transparent pointer-events-none"></div>
            <div className="container mx-auto px-6 max-w-[1400px]">
                 <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8 border-b border-white/10 pb-10">
                    <div>
                        <h2 className="text-5xl md:text-7xl font-light text-white mb-6 tracking-tight drop-shadow-lg">Key Projects</h2>
                        <p className="text-zinc-300 font-light text-2xl">Research implementations and practical applications.</p>
                    </div>
                    <a href="https://github.com/0roshan1234" target="_blank" rel="noreferrer" className="text-lg font-semibold uppercase tracking-widest text-white border-b-2 border-white/30 pb-2 hover:border-white transition-colors">
                        View GitHub
                    </a>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <ProjectCard 
                        title="Cervical Cancer Detection"
                        tech="MobileNet & Python"
                        description="Achieved 92% screening accuracy using fine-tuned MobileNet architecture. Optimized model for efficient inference in resource-constrained environments."
                        link="#"
                        featured
                    />
                    <ProjectCard 
                        title="Facial Expression Recognition"
                        tech="CNN & OpenCV"
                        description="Real-time emotion classification system with 89% accuracy. Research findings published at ISCAS Dubai."
                        link="#"
                    />
                    <ProjectCard 
                        title="Timetable Generator"
                        tech="Django, React & Genetic Algo"
                        description="Automated scheduling system for educational institutions solving complex constraint satisfaction problems."
                        link="#"
                    />
                    <ProjectCard 
                        title="Spam Detection Engine"
                        tech="NLP & Naive Bayes"
                        description="High-performance text classification system achieving 94% accuracy in filtering unwanted messages."
                        link="#"
                    />
                </div>
            </div>
        </section>

        {/* EXPERIENCE */}
        <section id="experience" className="py-40 bg-black/20">
            <div className="container mx-auto px-6 max-w-5xl">
                <div className="mb-24 text-center">
                    <h2 className="text-5xl md:text-6xl font-light text-white mb-8 tracking-tight drop-shadow-lg">Experience Timeline</h2>
                </div>

                <div className="space-y-4">
                    <TimelineItem 
                        date="June 2025 - Present"
                        role="AI Engineer"
                        company="Arolabs"
                        description="Assisted in optimizing AI models and resolving system issues. Helped improve overall system performance and stability."
                        tags={['System Optimization', 'AI Models', 'Performance Tuning']}
                    />
                    <TimelineItem 
                        date="Feb 2025 - June 2025"
                        role="AI Backend Developer"
                        company="Edubricz Technologies"
                        description="Contributed to an AI-based route optimization system. Worked on integrating machine learning models for real-time backend processing."
                        tags={['Route Optimization', 'Backend', 'Real-time ML']}
                    />
                    <TimelineItem 
                        date="Apr 2025 - Dec 2025"
                        role="Generative AI Intern"
                        company="Stable Diffusion Project (Remote)"
                        description="Fine-tuned diffusion models for image generation. Conducted extensive experiments to improve output quality and consistency."
                        tags={['Stable Diffusion', 'Fine-tuning', 'GenAI']}
                    />
                </div>
            </div>
        </section>

        {/* EDUCATION & CERTS */}
        <section className="py-40">
             <div className="container mx-auto px-6 max-w-[1400px]">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
                    
                    {/* Education */}
                    <div>
                        <h3 className="text-4xl font-light text-white mb-12 border-b border-white/10 pb-6">Education</h3>
                        <div className="space-y-12">
                             <div className="group">
                                <div className="text-2xl font-medium text-white">Master of Computer Applications (MCA)</div>
                                <div className="text-xl text-zinc-400 mt-2">Presidency University, Bangalore</div>
                                <div className="text-lg text-zinc-500 mt-1">2023 – 2025 | CGPA: 8.77</div>
                             </div>
                             <div className="group">
                                <div className="text-2xl font-medium text-white">Bachelor of Computer Applications (BCA)</div>
                                <div className="text-xl text-zinc-400 mt-2">St. Joseph’s College, Darjeeling</div>
                                <div className="text-lg text-zinc-500 mt-1">2020 – 2023 | CGPA: 8.31</div>
                             </div>
                        </div>
                    </div>

                    {/* Certifications */}
                    <div>
                        <h3 className="text-4xl font-light text-white mb-12 border-b border-white/10 pb-6">Certifications</h3>
                        <div className="grid grid-cols-1 gap-6">
                            {['Data Analytics – HP Life', 'AI & ML – Corizo', 'Tech Saksham – Microsoft Partnership', 'Full Stack Development – Industry Program'].map((cert, i) => (
                                <div key={i} className="p-6 rounded-2xl glass-card flex items-center gap-4 hover:bg-white/5 transition-colors">
                                    <div className="w-2 h-2 rounded-full bg-white"></div>
                                    <span className="text-xl text-zinc-200">{cert}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
             </div>
        </section>

        {/* BLOG SECTION */}
        <section id="blog" className="py-40 relative border-t border-white/5">
            <div className="container mx-auto px-6 max-w-[1400px]">
                <div className="mb-20">
                    <h2 className="text-5xl md:text-7xl font-light text-white mb-6 tracking-tight">Latest Insights</h2>
                    <p className="text-zinc-300 font-light text-2xl">Thoughts on AI, Engineering, and the Future.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogPosts.map((post, i) => (
                        <BlogCard key={i} {...post} />
                    ))}
                </div>
            </div>
        </section>

        {/* FOOTER */}
        <footer className="py-24 border-t border-white/10 text-center relative z-10 bg-black/40 backdrop-blur-xl">
            <div className="container mx-auto px-6">
                <h3 className="text-4xl font-light text-white mb-12 drop-shadow-md">Connect & Collaborate</h3>
                <div className="flex justify-center gap-16 mb-16">
                   {socialLinks.map((link, i) => (
                      <a key={i} href={link.href} target="_blank" rel="noreferrer" className="text-zinc-400 hover:text-white transition-colors transform hover:scale-125 duration-300" aria-label={link.label}>
                         {link.icon}
                      </a>
                   ))}
                </div>
                <div className="text-zinc-500 text-sm uppercase tracking-widest mb-4">
                   Bangalore, India
                </div>
                <p className="text-zinc-600 text-xs">
                   &copy; 2025 Roshan Suvedi. All rights reserved.
                </p>
            </div>
        </footer>

      </main>
    </div>
  );
};

const blogPosts = [
  {
    title: "The Future of Generative AI in Edge Computing",
    date: "Dec 28, 2025",
    readTime: "4 min read",
    excerpt: "Exploring how small-scale diffusion models can run efficiently on local hardware without cloud dependencies.",
    tags: ["GenAI", "Edge Computing"]
  },
  {
    title: "Optimizing React Re-renders for Data-Heavy Dashboards",
    date: "Dec 22, 2025",
    readTime: "6 min read",
    excerpt: "Techniques for maintaining 60fps when visualizing thousands of data points in real-time applications.",
    tags: ["React", "Performance"]
  },
  {
    title: "My Journey with Stable Diffusion Fine-tuning",
    date: "Dec 15, 2025",
    readTime: "5 min read",
    excerpt: "A deep dive into the challenges and breakthroughs I encountered while training custom models for specific art styles.",
    tags: ["Machine Learning", "Stable Diffusion"]
  }
];

const socialLinks = [
    { icon: <Linkedin size={32} />, href: "https://linkedin.com/in/roshansuvedi", label: "LinkedIn" },
    { icon: <Github size={32} />, href: "https://github.com/0roshan1234", label: "GitHub" },
    { icon: <Mail size={32} />, href: "mailto:roshansuvedi@gmail.com", label: "Email" },
];

export default App;
