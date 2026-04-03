import React, { useState, useEffect } from 'react';
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
  Bug,
  Layout,
  Layers,
  Cpu
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Link as ScrollLink } from 'react-scroll';
import { cn } from './lib/utils';

// --- Constants & Data ---

const SERVICES = [
  {
    title: "Hourly Development",
    price: "€35/hr",
    description: "Flexible development support for your existing projects or new features.",
    icon: <Code2 className="w-6 h-6" />,
    features: ["App development from scratch", "Feature implementation", "Bug fixing & optimization"]
  },
  {
    title: "Consultation",
    price: "€20/hr",
    description: "Expert advice on mobile architecture, tech stack, and project planning.",
    icon: <MessageSquare className="w-6 h-6" />,
    features: ["Technical feasibility analysis", "Architecture review", "Performance optimization strategy"]
  },
  {
    title: "Startup MVP Package",
    price: "Custom Quote",
    description: "End-to-end development with my remote team of expert developers.",
    icon: <Rocket className="w-6 h-6" />,
    features: ["Full-cycle development", "Remote expert team", "Scalable architecture"]
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
    description: "AI-powered cooking assistant that generates recipes from food photos using Gemini API.",
    tags: ["Kotlin", "Jetpack Compose", "Gemini API"],
    link: "https://github.com/shahsamir97",
    type: "AI / Mobile"
  },
  {
    title: "E-Shop",
    description: "Full-featured e-commerce Android app with merchant and customer portals.",
    tags: ["Kotlin", "ConstraintLayout", "FCM", "Glide"],
    link: "https://github.com/shahsamir97",
    type: "E-Commerce"
  },
  {
    title: "IELTS 360",
    description: "Band score calculator with Firebase integration for progress tracking.",
    tags: ["Kotlin", "Java", "Firebase"],
    link: "https://play.google.com/store/apps/details?id=com.shahsamir.ielts360",
    type: "Education"
  },
  {
    title: "Mood Today",
    description: "Mood-check quiz app using Gemini API for analysis and BLoC for state management.",
    tags: ["Flutter", "Dart", "BLoC", "Gemini API"],
    link: "https://github.com/shahsamir97",
    type: "AI / Flutter"
  }
];

const SKILLS = {
  "Mobile": ["Kotlin", "Jetpack Compose", "Flutter", "Dart", "Android SDK", "Android TV"],
  "Architecture": ["MVVM", "MVI", "Clean Architecture", "Modularization", "Hilt"],
  "Tools": ["Git", "CI/CD", "Fastlane", "GitHub Actions", "Jira", "Figma"],
  "AI": ["Gemini API", "Prompt Engineering", "Claude", "GitHub Copilot"]
};

// --- Components ---

const SectionHeading = ({ children, subtitle }: { children: React.ReactNode, subtitle?: string }) => (
  <div className="mb-12 text-center">
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-3xl md:text-4xl font-bold text-slate-900 mb-4"
    >
      {children}
    </motion.h2>
    {subtitle && (
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="text-slate-600 max-w-2xl mx-auto"
      >
        {subtitle}
      </motion.p>
    )}
    <div className="w-20 h-1.5 bg-blue-600 mx-auto mt-6 rounded-full" />
  </div>
);

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-blue-100 selection:text-blue-900">
      {/* Navigation */}
      <nav className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300 px-6 py-4",
        scrolled ? "bg-white/80 backdrop-blur-md shadow-sm" : "bg-transparent"
      )}>
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <ScrollLink to="hero" smooth={true} className="text-xl font-bold cursor-pointer tracking-tighter text-blue-600">
            SAMIR<span className="text-slate-900">.DEV</span>
          </ScrollLink>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {['Services', 'Process', 'Portfolio', 'Skills'].map((item) => (
              <ScrollLink
                key={item}
                to={item.toLowerCase()}
                smooth={true}
                offset={-80}
                className="text-sm font-medium text-slate-600 hover:text-blue-600 cursor-pointer transition-colors"
              >
                {item}
              </ScrollLink>
            ))}
            <a 
              href="https://calendar.app.google/pqruhwe5fFHMFWR9A" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-blue-600 text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-blue-700 transition-all shadow-lg shadow-blue-200"
            >
              Book a Meeting
            </a>
          </div>

          {/* Mobile Toggle */}
          <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-white pt-24 px-6 md:hidden"
          >
            <div className="flex flex-col gap-6 text-center">
              {['Services', 'Process', 'Portfolio', 'Skills'].map((item) => (
                <ScrollLink
                  key={item}
                  to={item.toLowerCase()}
                  smooth={true}
                  offset={-80}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-2xl font-bold text-slate-900"
                >
                  {item}
                </ScrollLink>
              ))}
              <a 
                href="https://calendar.app.google/pqruhwe5fFHMFWR9A" 
                className="bg-blue-600 text-white py-4 rounded-xl text-lg font-bold"
              >
                Book a Meeting
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section id="hero" className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 opacity-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-400 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-400 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>

        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 bg-blue-50 text-blue-600 rounded-full text-sm font-bold mb-6">
              Available for new projects
            </span>
            <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 leading-[1.1] mb-6">
              Building Scalable <br />
              <span className="text-blue-600">Mobile Experiences</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 mb-8 max-w-xl leading-relaxed">
              Hi, I'm <span className="font-bold text-slate-900">Mohammad Shah Samir</span>. 
              A results-driven Android & Full-stack Engineer with 4+ years of experience delivering production-ready features for 1M+ users.
            </p>
            <div className="flex flex-wrap gap-4">
              <ScrollLink 
                to="services" 
                smooth={true} 
                className="bg-slate-900 text-white px-8 py-4 rounded-full font-bold hover:bg-slate-800 transition-all cursor-pointer flex items-center gap-2"
              >
                View Services <ArrowRight className="w-5 h-5" />
              </ScrollLink>
              <div className="flex items-center gap-3">
                <a href="https://github.com/shahsamir97" target="_blank" className="p-3 bg-white border border-slate-200 rounded-full hover:border-blue-600 hover:text-blue-600 transition-all">
                  <Github className="w-6 h-6" />
                </a>
                <a href="https://www.linkedin.com/in/md-shah-samir-83639b54/" target="_blank" className="p-3 bg-white border border-slate-200 rounded-full hover:border-blue-600 hover:text-blue-600 transition-all">
                  <Linkedin className="w-6 h-6" />
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl relative z-10 border-8 border-white">
              <img 
                src="https://picsum.photos/seed/samir/800/800" // Placeholder - user should replace with his photo
                alt="Mohammad Shah Samir" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-blue-100 rounded-full -z-10" />
            <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-indigo-50 rounded-3xl -z-10 rotate-12" />
            
            {/* Floating Stats */}
            <div className="absolute top-10 -left-10 bg-white p-4 rounded-2xl shadow-xl z-20 hidden lg:block">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">Experience</p>
                  <p className="text-lg font-bold">4+ Years</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading subtitle="Flexible engagement models tailored to your business needs.">
            Services & Pricing
          </SectionHeading>

          <div className="grid md:grid-cols-3 gap-8">
            {SERVICES.map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-8 rounded-3xl border border-slate-100 bg-slate-50 hover:bg-white hover:shadow-xl hover:border-blue-100 transition-all group"
              >
                <div className="w-14 h-14 bg-blue-600 text-white rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                <div className="text-3xl font-black text-blue-600 mb-4">{service.price}</div>
                <p className="text-slate-600 mb-6 leading-relaxed">{service.description}</p>
                <ul className="space-y-3">
                  {service.features.map((f, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-slate-700">
                      <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" />
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
      <section id="process" className="py-24 bg-slate-900 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">The Startup Development Process</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              A battle-tested workflow to take your idea from concept to a production-ready MVP.
            </p>
          </div>

          <div className="relative">
            {/* Connection Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-slate-800 hidden md:block" />

            <div className="grid gap-12 relative">
              {PROCESS_STEPS.map((step, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                  className="flex items-start gap-6 md:gap-12 group"
                >
                  <div className="relative z-10">
                    <div className="w-16 h-16 bg-slate-800 rounded-2xl flex items-center justify-center text-xl font-bold border border-slate-700 group-hover:border-blue-500 group-hover:text-blue-500 transition-all">
                      {idx + 1}
                    </div>
                  </div>
                  <div className="pt-2">
                    <h3 className="text-xl font-bold mb-1 group-hover:text-blue-400 transition-colors">{step.title}</h3>
                    <p className="text-slate-400">{step.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading subtitle="A selection of my recent work in mobile and AI.">
            Featured Projects
          </SectionHeading>

          <div className="grid md:grid-cols-2 gap-8">
            {PROJECTS.map((project, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="group relative bg-slate-50 rounded-3xl overflow-hidden border border-slate-100 hover:shadow-2xl transition-all"
              >
                <div className="p-8">
                  <div className="flex justify-between items-start mb-4">
                    <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-xs font-bold uppercase tracking-wider">
                      {project.type}
                    </span>
                    <a href={project.link} target="_blank" className="text-slate-400 hover:text-blue-600">
                      <ExternalLink className="w-6 h-6" />
                    </a>
                  </div>
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-blue-600 transition-colors">{project.title}</h3>
                  <p className="text-slate-600 mb-6 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="px-3 py-1 bg-white border border-slate-200 rounded-lg text-xs font-medium text-slate-500">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="h-2 bg-blue-600 w-0 group-hover:w-full transition-all duration-500" />
              </motion.div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <a 
              href="https://github.com/shahsamir97" 
              target="_blank"
              className="inline-flex items-center gap-2 text-slate-900 font-bold hover:text-blue-600 transition-colors"
            >
              View more on GitHub <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading subtitle="The technologies and methodologies I use to build high-quality software.">
            Technical Expertise
          </SectionHeading>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {Object.entries(SKILLS).map(([category, items], idx) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100"
              >
                <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
                  {category === "Mobile" && <Smartphone className="w-5 h-5 text-blue-600" />}
                  {category === "Architecture" && <Layers className="w-5 h-5 text-blue-600" />}
                  {category === "Tools" && <Cpu className="w-5 h-5 text-blue-600" />}
                  {category === "AI" && <Rocket className="w-5 h-5 text-blue-600" />}
                  {category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((item) => (
                    <span key={item} className="px-3 py-1.5 bg-slate-50 text-slate-600 rounded-xl text-sm font-medium border border-slate-100">
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-blue-600 text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border-[40px] border-white rounded-full" />
        </div>
        
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">Ready to bring your project to life?</h2>
          <p className="text-xl text-blue-100 mb-12 leading-relaxed">
            Whether you need a quick bug fix, a new feature, or a complete MVP for your startup, I'm here to help you build something amazing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://calendar.app.google/pqruhwe5fFHMFWR9A" 
              target="_blank"
              className="bg-white text-blue-600 px-10 py-5 rounded-full font-bold text-lg hover:bg-blue-50 transition-all flex items-center justify-center gap-2 shadow-xl"
            >
              <Calendar className="w-6 h-6" /> Book a Free Consultation
            </a>
            <a 
              href="mailto:mdshahsamir@gmail.com" 
              className="bg-blue-700 text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-blue-800 transition-all flex items-center justify-center gap-2"
            >
              <Mail className="w-6 h-6" /> Send an Email
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <div>
            <p className="text-xl font-bold text-blue-600">SAMIR<span className="text-slate-900">.DEV</span></p>
            <p className="text-slate-500 text-sm mt-2">© 2026 Mohammad Shah Samir. All rights reserved.</p>
          </div>
          
          <div className="flex items-center gap-6">
            <a href="https://github.com/shahsamir97" target="_blank" className="text-slate-400 hover:text-slate-900 transition-colors">
              <Github className="w-6 h-6" />
            </a>
            <a href="https://www.linkedin.com/in/md-shah-samir-83639b54/" target="_blank" className="text-slate-400 hover:text-slate-900 transition-colors">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="mailto:mdshahsamir@gmail.com" className="text-slate-400 hover:text-slate-900 transition-colors">
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
