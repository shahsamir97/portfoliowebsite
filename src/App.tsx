import React, { useState, useEffect, useRef } from 'react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink, 
  Code2, 
  MessageSquare, 
  Rocket, 
  CheckCircle2, 
  Calendar, 
  ArrowRight, 
  Menu, 
  X,
  Smartphone,
  Globe,
  Cpu,
  Layers,
  Zap,
  Bot,
  Terminal,
  Sparkles,
  ChevronRight
} from 'lucide-react';
import { motion, AnimatePresence, useScroll, useTransform } from 'motion/react';
import { Link as ScrollLink } from 'react-scroll';
import { cn } from './lib/utils';
import profilePic from './md_shah_samir_picture.jpg';

// --- Constants & Data ---

const SERVICES = [
  {
    title: "AI-Powered Mobile Apps",
    price: "€35/hr",
    description: "Developing intelligent mobile applications with integrated AI features like LLMs, computer vision, and predictive analytics.",
    icon: <Bot className="w-6 h-6" />,
    features: ["Android & iOS development", "Gemini/OpenAI Integration", "On-device AI models"]
  },
  {
    title: "AI-Powered Web Solutions",
    price: "€35/hr",
    description: "Building modern, responsive websites and web apps enhanced with AI-driven user experiences and automation.",
    icon: <Globe className="w-6 h-6" />,
    features: ["React/Next.js development", "AI Content Generation", "Intelligent Search & Chat"]
  },
  {
    title: "Technical Consultation",
    price: "€20/hr",
    description: "Strategic advice on AI implementation, mobile architecture, and scaling your technical infrastructure.",
    icon: <Terminal className="w-6 h-6" />,
    features: ["AI Strategy & Roadmap", "Architecture Review", "Performance Optimization"]
  },
  {
    title: "Startup MVP (Team)",
    price: "Custom",
    description: "Complete end-to-end development with my remote team of expert developers for full-scale startup products.",
    icon: <Rocket className="w-6 h-6" />,
    features: ["Full-cycle development", "Remote expert team", "Scalable MVP to Production"]
  }
];

const PROCESS_STEPS = [
  { title: "Requirement Collection", desc: "Gathering all your ideas and needs." },
  { title: "Requirement Analysis", desc: "Deep dive into technical feasibility." },
  { title: "Finalized Requirement", desc: "Clear roadmap and documentation." },
  { title: "Design Mockup", desc: "Visualizing the user experience." },
  { title: "Revising Mockup", desc: "Iterating based on your feedback." },
  { title: "Final Mockup", desc: "Polished UI ready for development." },
  { title: "Development Start", desc: "Turning designs into functional code." },
  { title: "MVP Review", desc: "First look at the working product." },
  { title: "Finalized MVP", desc: "Feature-complete initial version." },
  { title: "MVP Testing", desc: "Rigorous QA and bug fixing." },
  { title: "MVP in Production", desc: "Launching to your first users." },
  { title: "Scale & PMF", desc: "Iterative growth based on market fit." }
];

const PROJECTS = [
  {
    title: "Make My Meal",
    description: "AI-powered cooking assistant that generates recipes from food photos using Gemini API. Built for the Gemini API Developer competition.",
    tags: ["Kotlin", "Jetpack Compose", "Gemini API", "AI"],
    link: "https://github.com/shahsamir97",
    type: "AI / Mobile"
  },
  {
    title: "E-Shop",
    description: "Full-featured e-commerce Android app with merchant and customer portals, real-time tracking, and analytics.",
    tags: ["Kotlin", "ConstraintLayout", "FCM", "Glide"],
    link: "https://github.com/shahsamir97",
    type: "E-Commerce"
  },
  {
    title: "IELTS 360",
    description: "Band score calculator with Firebase integration for progress tracking. Used by thousands of students.",
    tags: ["Kotlin", "Java", "Firebase"],
    link: "https://play.google.com/store/apps/details?id=com.shahsamir.ielts360",
    type: "Education"
  },
  {
    title: "Mood Today",
    description: "Mood-check quiz app using Gemini API for analysis and BLoC for state management. Supports localization.",
    tags: ["Flutter", "Dart", "BLoC", "Gemini API"],
    link: "https://github.com/shahsamir97",
    type: "AI / Flutter"
  }
];

const SKILLS = {
  "Mobile": ["Kotlin", "Jetpack Compose", "Flutter", "Dart", "Android SDK", "Android TV"],
  "Architecture": ["MVVM", "MVI", "Clean Architecture", "Modularization", "Hilt"],
  "Tools": ["Git", "CI/CD", "Fastlane", "GitHub Actions", "Jira", "Figma"],
  "AI & Future": ["Gemini API", "LLM Integration", "Prompt Engineering", "Claude", "Cursor"]
};

// --- Components ---

const SectionHeading = ({ children, subtitle, icon: Icon }: { children: React.ReactNode, subtitle?: string, icon?: any }) => (
  <div className="mb-16 text-center relative">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 text-cyan-400 text-xs font-bold uppercase tracking-widest mb-4 border border-cyan-500/20"
    >
      {Icon && <Icon className="w-4 h-4" />}
      {children}
    </motion.div>
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.1 }}
      className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight"
    >
      {children}
    </motion.h2>
    {subtitle && (
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed"
      >
        {subtitle}
      </motion.p>
    )}
  </div>
);

const GlowingOrb = ({ className }: { className?: string }) => (
  <div className={cn("absolute rounded-full blur-[100px] opacity-20 glow-pulse", className)} />
);

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#030712] text-slate-300 font-sans selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* Background Elements */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-grid opacity-20" />
        <div className="absolute inset-0 bg-mesh" />
        <GlowingOrb className="top-[-10%] left-[-10%] w-[500px] h-[500px] bg-cyan-500" />
        <GlowingOrb className="bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-purple-500" />
      </div>

      {/* Navigation */}
      <nav className={cn(
        "fixed top-0 w-full z-50 transition-all duration-500 px-6 py-4",
        scrolled ? "bg-[#030712]/80 backdrop-blur-xl border-b border-white/5 py-3" : "bg-transparent"
      )}>
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <ScrollLink to="hero" smooth={true} className="text-2xl font-bold cursor-pointer tracking-tighter flex items-center gap-2 group">
            <div className="w-10 h-10 bg-cyan-500 rounded-lg flex items-center justify-center text-white group-hover:rotate-12 transition-transform">
              <Zap className="w-6 h-6" />
            </div>
            <span className="text-white">SAMIR<span className="text-cyan-500">.AI</span></span>
          </ScrollLink>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-10">
            {['Services', 'Process', 'Portfolio', 'Skills'].map((item) => (
              <ScrollLink
                key={item}
                to={item.toLowerCase()}
                smooth={true}
                offset={-80}
                className="text-sm font-bold text-slate-400 hover:text-cyan-400 cursor-pointer transition-all uppercase tracking-widest"
              >
                {item}
              </ScrollLink>
            ))}
            <a 
              href="https://calendar.app.google/pqruhwe5fFHMFWR9A" 
              target="_blank" 
              rel="noopener noreferrer"
              className="relative group overflow-hidden bg-cyan-500 text-white px-6 py-3 rounded-lg text-sm font-bold hover:bg-cyan-400 transition-all shadow-[0_0_20px_rgba(6,182,212,0.3)]"
            >
              <span className="relative z-10">BOOK CONSULTATION</span>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </a>
          </div>

          {/* Mobile Toggle */}
          <button className="md:hidden p-2 text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            className="fixed inset-0 z-40 bg-[#030712] pt-24 px-6 md:hidden"
          >
            <div className="flex flex-col gap-8 text-left">
              {['Services', 'Process', 'Portfolio', 'Skills'].map((item) => (
                <ScrollLink
                  key={item}
                  to={item.toLowerCase()}
                  smooth={true}
                  offset={-80}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-4xl font-bold text-white tracking-tighter hover:text-cyan-400 transition-colors"
                >
                  {item}
                </ScrollLink>
              ))}
              <a 
                href="https://calendar.app.google/pqruhwe5fFHMFWR9A" 
                className="bg-cyan-500 text-white py-5 rounded-2xl text-xl font-bold text-center"
              >
                BOOK CONSULTATION
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section id="hero" className="relative pt-40 pb-24 md:pt-56 md:pb-40 overflow-hidden z-10">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 text-cyan-400 text-xs font-bold uppercase tracking-widest mb-8 border border-cyan-500/20"
            >
              <Sparkles className="w-4 h-4" />
              AI-Powered Mobile & Web Engineer
            </motion.div>
            <h1 className="text-6xl md:text-8xl font-bold text-white leading-[0.9] mb-8 tracking-tighter">
              CRAFTING <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">
                INTELLIGENT
              </span> <br />
              SYSTEMS.
            </h1>
            <p className="text-xl text-slate-400 mb-10 max-w-xl leading-relaxed font-light">
              I specialize in building <span className="text-white font-medium">AI-powered mobile apps and websites</span> that scale. From requirement analysis to production-ready MVPs, I bring your vision to life with precision.
            </p>
            <div className="flex flex-wrap gap-6">
              <ScrollLink 
                to="services" 
                smooth={true} 
                className="group relative bg-white text-black px-10 py-5 rounded-xl font-bold hover:bg-cyan-400 hover:text-white transition-all cursor-pointer flex items-center gap-3 shadow-[0_0_30px_rgba(255,255,255,0.1)]"
              >
                EXPLORE SERVICES <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </ScrollLink>
              <div className="flex items-center gap-4">
                <a href="https://github.com/shahsamir97" target="_blank" className="p-4 glass rounded-xl hover:text-cyan-400 hover:border-cyan-500/50 transition-all">
                  <Github className="w-6 h-6" />
                </a>
                <a href="https://www.linkedin.com/in/md-shah-samir-83639b54/" target="_blank" className="p-4 glass rounded-xl hover:text-cyan-400 hover:border-cyan-500/50 transition-all">
                  <Linkedin className="w-6 h-6" />
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
            className="relative group max-w-[420px] mx-auto lg:ml-auto lg:mr-0 w-full"
          >
            <div className="relative z-10 aspect-[4/5] rounded-[2rem] overflow-hidden glass border-2 border-white/10 p-2">
              <div className="w-full h-full rounded-[1.5rem] overflow-hidden relative">
                <img 
                  src={profilePic}
                  alt="Mohammad Shah Samir" 
                  className="w-full h-full object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-700 scale-110 group-hover:scale-100"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-transparent to-transparent opacity-60" />
              </div>
            </div>
            
            {/* Floating Elements */}
            <motion.div 
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-10 -right-10 glass p-6 rounded-2xl z-20 border-cyan-500/30"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-cyan-500/20 rounded-xl flex items-center justify-center text-cyan-400">
                  <Cpu className="w-7 h-7" />
                </div>
                <div>
                  <p className="text-[10px] text-cyan-400 font-black uppercase tracking-[0.2em]">Tech Stack</p>
                  <p className="text-lg font-bold text-white">AI & Mobile</p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-10 -left-10 glass p-6 rounded-2xl z-20 border-purple-500/30"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center text-purple-400">
                  <Rocket className="w-7 h-7" />
                </div>
                <div>
                  <p className="text-[10px] text-purple-400 font-black uppercase tracking-[0.2em]">Success</p>
                  <p className="text-lg font-bold text-white">1M+ Users</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-32 relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading subtitle="Specialized engineering for the next generation of digital products." icon={Zap}>
            Expert Solutions
          </SectionHeading>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES.map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group p-8 rounded-3xl glass glass-hover transition-all relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-cyan-500/5 rounded-full -mr-12 -mt-12 group-hover:bg-cyan-500/10 transition-colors" />
                <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-cyan-500 group-hover:text-white transition-all duration-500">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                <div className="text-2xl font-black text-cyan-400 mb-4">{service.price}</div>
                <p className="text-slate-400 text-sm mb-8 leading-relaxed">{service.description}</p>
                <ul className="space-y-4">
                  {service.features.map((f, i) => (
                    <li key={i} className="flex items-center gap-3 text-xs font-medium text-slate-300">
                      <ChevronRight className="w-4 h-4 text-cyan-500" />
                      {f}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-32 bg-white/[0.02] relative z-10 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading subtitle="A systematic, transparent approach to building complex software." icon={Terminal}>
            The Development Lifecycle
          </SectionHeading>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16 relative">
            {/* Connection Lines (Desktop) */}
            <div className="absolute inset-0 hidden lg:block pointer-events-none">
              <svg className="w-full h-full opacity-10" viewBox="0 0 1000 800">
                <path d="M150,100 L850,100 L850,400 L150,400 L150,700 L850,700" fill="none" stroke="white" strokeWidth="2" strokeDasharray="10,10" />
              </svg>
            </div>

            {PROCESS_STEPS.map((step, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="relative group"
              >
                <div className="flex items-center gap-6 mb-4">
                  <div className="w-12 h-12 rounded-xl glass flex items-center justify-center text-lg font-black text-cyan-400 group-hover:bg-cyan-500 group-hover:text-white transition-all duration-500">
                    {String(idx + 1).padStart(2, '0')}
                  </div>
                  <div className="h-px flex-1 bg-gradient-to-r from-white/10 to-transparent" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">{step.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-32 relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading subtitle="Showcasing innovation in AI integration and mobile architecture." icon={Layers}>
            Featured Projects
          </SectionHeading>

          <div className="grid md:grid-cols-2 gap-8">
            {PROJECTS.map((project, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="group relative glass rounded-[2.5rem] overflow-hidden border border-white/5 hover:border-cyan-500/30 transition-all duration-500"
              >
                <div className="p-10">
                  <div className="flex justify-between items-start mb-8">
                    <div className="flex gap-2">
                      <span className="px-4 py-1.5 bg-cyan-500/10 text-cyan-400 rounded-full text-[10px] font-black uppercase tracking-widest border border-cyan-500/20">
                        {project.type}
                      </span>
                    </div>
                    <a href={project.link} target="_blank" className="p-3 glass rounded-full text-slate-400 hover:text-cyan-400 hover:scale-110 transition-all">
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors tracking-tight">{project.title}</h3>
                  <p className="text-slate-400 mb-8 leading-relaxed text-lg font-light">{project.description}</p>
                  <div className="flex flex-wrap gap-3">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="px-4 py-2 bg-white/5 rounded-xl text-xs font-bold text-slate-400 border border-white/5">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="h-1.5 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 w-0 group-hover:w-full transition-all duration-700" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-32 relative z-10 bg-white/[0.01]">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading subtitle="A comprehensive toolkit for building high-performance digital solutions." icon={Cpu}>
            Technical Arsenal
          </SectionHeading>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {Object.entries(SKILLS).map(([category, items], idx) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="glass p-10 rounded-[2rem] border border-white/5 hover:border-cyan-500/20 transition-all"
              >
                <div className="w-12 h-12 bg-cyan-500/10 rounded-xl flex items-center justify-center text-cyan-400 mb-8">
                  {category === "Mobile" && <Smartphone className="w-6 h-6" />}
                  {category === "Architecture" && <Layers className="w-6 h-6" />}
                  {category === "Tools" && <Code2 className="w-6 h-6" />}
                  {category === "AI & Future" && <Sparkles className="w-6 h-6" />}
                </div>
                <h3 className="text-xl font-bold text-white mb-6 tracking-tight">{category}</h3>
                <div className="flex flex-col gap-3">
                  {items.map((item) => (
                    <div key={item} className="flex items-center gap-3 group">
                      <div className="w-1.5 h-1.5 rounded-full bg-cyan-500 group-hover:scale-150 transition-transform" />
                      <span className="text-slate-400 group-hover:text-white transition-colors text-sm font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-40 relative z-10 overflow-hidden">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative glass p-16 md:p-24 rounded-[3rem] text-center border border-white/10 overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-cyan-500/10 via-transparent to-purple-500/10 opacity-50" />
            <div className="relative z-10">
              <h2 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tighter leading-tight">
                LET'S BUILD THE <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">FUTURE</span> TOGETHER.
              </h2>
              <p className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
                Whether you're a startup looking for an MVP or an enterprise needing AI integration, I'm ready to engineer your success.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <a 
                  href="https://calendar.app.google/pqruhwe5fFHMFWR9A" 
                  target="_blank"
                  className="bg-cyan-500 text-white px-12 py-6 rounded-2xl font-black text-lg hover:bg-cyan-400 transition-all flex items-center justify-center gap-3 shadow-[0_0_40px_rgba(6,182,212,0.3)]"
                >
                  <Calendar className="w-6 h-6" /> BOOK A MEETING
                </a>
                <a 
                  href="mailto:mdshahsamir@gmail.com" 
                  className="glass text-white px-12 py-6 rounded-2xl font-black text-lg hover:bg-white/10 transition-all flex items-center justify-center gap-3"
                >
                  <Mail className="w-6 h-6" /> SEND EMAIL
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 relative z-10 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="text-center md:text-left">
            <ScrollLink to="hero" smooth={true} className="text-3xl font-bold cursor-pointer tracking-tighter text-white">
              SAMIR<span className="text-cyan-500">.AI</span>
            </ScrollLink>
            <p className="text-slate-500 text-sm mt-4 font-medium tracking-widest uppercase">
              Engineering Excellence © 2026
            </p>
          </div>
          
          <div className="flex items-center gap-8">
            {[
              { icon: Github, link: "https://github.com/shahsamir97" },
              { icon: Linkedin, link: "https://www.linkedin.com/in/md-shah-samir-83639b54/" },
              { icon: Mail, link: "mailto:mdshahsamir@gmail.com" }
            ].map((social, i) => (
              <a 
                key={i} 
                href={social.link} 
                target="_blank" 
                className="text-slate-500 hover:text-cyan-400 transition-all hover:scale-125"
              >
                <social.icon className="w-7 h-7" />
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
