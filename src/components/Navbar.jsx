import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { Menu, X, ArrowUpRight, Sparkles, Bug } from 'lucide-react';

const NAV_LINKS = [
  { id: 'home', label: 'Home', href: '#home' },
  { id: 'about', label: 'About', href: '#about' },
  { id: 'experience', label: 'Experience', href: '#experience' },
  { id: 'skills', label: 'Skills', href: '#skills' },
  { id: 'projects', label: 'Projects', href: '#projects' },
];

const ROTATING_TITLES = [
  'QA Engineer',
  'Functional & Regression QA',
  'Web App & API Testing',
  'Open to Opportunities',
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('home');
  const [hoveredNav, setHoveredNav] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [titleIndex, setTitleIndex] = useState(0);
  const navRef = useRef(null);
  const prefersReducedMotion = useReducedMotion();

  // Dynamic rotating subtitle timer (smooth cycle every 3 seconds)
  useEffect(() => {
    if (prefersReducedMotion) return;
    const interval = setInterval(() => {
      setTitleIndex((prev) => (prev + 1) % ROTATING_TITLES.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [prefersReducedMotion]);

  const isClickScrollingRef = useRef(false);
  const clickScrollTimerRef = useRef(null);

  // Deterministic, flicker-free scroll position & active section tracking
  useEffect(() => {
    const handleScroll = () => {
      // Adjust navbar backdrop opacity and shadow
      setIsScrolled(window.scrollY > 20);

      // Do NOT overwrite active section during a user-initiated click smooth-scroll
      if (isClickScrollingRef.current) return;

      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;

      // 1. Bottom of page reached -> highlight last section
      if (windowHeight + scrollY >= docHeight - 80) {
        setActiveSection('projects');
        return;
      }

      // 2. Very top of viewport -> always 'home'
      if (scrollY < 100) {
        setActiveSection('home');
        return;
      }

      // 3. Section order from bottom to top for exact deterministic detection
      const sections = ['projects', 'skills', 'experience', 'about', 'home'];
      const navOffset = 160;

      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= navOffset) {
            setActiveSection(id);
            return;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (clickScrollTimerRef.current) clearTimeout(clickScrollTimerRef.current);
    };
  }, []);

  // Close mobile menu on Escape key press or click outside
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setIsMobileMenuOpen(false);
    };

    const handleClickOutside = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.addEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  // Guaranteed rock-solid smooth scroll handler without flicker
  const handleNavClick = (e, href, id) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    setActiveSection(id);

    // Suppress scrollspy during smooth scroll animation so intermediate sections don't cause flickering
    isClickScrollingRef.current = true;
    if (clickScrollTimerRef.current) clearTimeout(clickScrollTimerRef.current);
    clickScrollTimerRef.current = setTimeout(() => {
      isClickScrollingRef.current = false;
    }, 900);

    if (id === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      window.history.pushState(null, '', href);
      return;
    }

    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      const navOffset = 90; // offset so header floats comfortably above section
      const elementTop = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: Math.max(0, elementTop - navOffset),
        behavior: 'smooth',
      });
      window.history.pushState(null, '', href);
    }
  };

  return (
    <div
      ref={navRef}
      className="fixed top-3.5 sm:top-5 left-0 right-0 z-50 flex justify-center px-3 sm:px-6 lg:px-8 pointer-events-none"
    >
      {/* Floating Pill Navbar Container - Full content-width matching viewport */}
      <motion.header
        initial={prefersReducedMotion ? false : { y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`pointer-events-auto relative w-full max-w-7xl h-16 sm:h-[68px] rounded-full flex items-center justify-between px-3.5 sm:px-6 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#080d1a]/55 backdrop-blur-[24px] backdrop-saturate-[180%] border border-white/[0.12] shadow-[0_18px_45px_-8px_rgba(0,0,0,0.5),inset_0_1px_1px_rgba(255,255,255,0.14)]'
            : 'bg-[#0d1424]/35 backdrop-blur-[18px] backdrop-saturate-[160%] border border-white/[0.10] shadow-[0_12px_36px_-6px_rgba(0,0,0,0.35),inset_0_1px_1px_rgba(255,255,255,0.12)]'
        }`}
      >
        {/* Left: QA Bug Logo & Full Branding */}
        <motion.a
          href="#home"
          onClick={(e) => handleNavClick(e, '#home', 'home')}
          aria-label="Mithun Kumar N - Back to top"
          className="group flex items-center gap-3 shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 rounded-full"
          initial="idle"
          whileHover="hover"
        >
          {/* Bug Icon Logo Avatar with Idle Movement + Hover Reaction */}
          <div className="relative flex items-center justify-center w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-gradient-to-tr from-sky-500/20 via-purple-500/20 to-indigo-500/10 border border-white/15 group-hover:border-sky-400/50 transition-all duration-300 shadow-[inset_0_1px_1px_rgba(255,255,255,0.2)]">
            <motion.div
              variants={{
                idle: {
                  rotate: [0, -6, 6, -3, 3, 0],
                  y: [0, -1.5, 1, -0.5, 0],
                  scale: [1, 1.04, 1],
                  transition: {
                    duration: 3.2,
                    repeat: Infinity,
                    repeatDelay: 1.2,
                    ease: 'easeInOut',
                  },
                },
                hover: {
                  rotate: [0, -18, 18, -10, 10, 0],
                  y: [0, -6, 0],
                  scale: [1, 1.22, 1.12],
                  transition: {
                    duration: 0.5,
                    ease: 'easeOut',
                  },
                },
              }}
              className="flex items-center justify-center"
            >
              <Bug className="w-5 h-5 text-sky-400 group-hover:text-sky-300 transition-colors duration-200" />
            </motion.div>
            <span className="absolute inset-0 rounded-full bg-sky-400/20 blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>

          <div className="flex flex-col text-left min-w-[160px] sm:min-w-[190px]">
            <span className="text-sm sm:text-base md:text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-sky-300 to-purple-400 tracking-tight whitespace-nowrap leading-none group-hover:opacity-90 transition-opacity">
              Mithun Kumar N
            </span>
            <div className="relative h-3.5 sm:h-4 overflow-hidden mt-1 flex items-center">
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={titleIndex}
                  initial={{ y: 9, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -9, opacity: 0 }}
                  transition={{ duration: 0.28, ease: 'easeOut' }}
                  className="text-[10px] sm:text-[11px] font-medium text-gray-400 flex items-center gap-1.5 leading-none whitespace-nowrap"
                >
                  <span
                    className={`w-1.5 h-1.5 rounded-full transition-colors duration-300 ${
                      titleIndex === 3
                        ? 'bg-emerald-400 animate-pulse'
                        : 'bg-sky-400'
                    }`}
                  />
                  {ROTATING_TITLES[titleIndex]}
                </motion.span>
              </AnimatePresence>
            </div>
          </div>
        </motion.a>

        {/* Center: Desktop Navigation Links (Pinned to exact horizontal center, immune to branding width changes) */}
        <nav
          className="hidden lg:flex absolute left-1/2 -translate-x-1/2 items-center gap-1 bg-white/[0.03] p-1.5 rounded-full border border-white/[0.06]"
          aria-label="Main Navigation"
        >
          <ul className="flex items-center gap-0.5 m-0 p-0 list-none">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.id;
              const isHovered = hoveredNav === link.id;

              return (
                <li key={link.id} className="relative">
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href, link.id)}
                    onMouseEnter={() => setHoveredNav(link.id)}
                    onMouseLeave={() => setHoveredNav(null)}
                    aria-current={isActive ? 'page' : undefined}
                    className={`relative z-10 block px-4 py-2 text-xs sm:text-sm font-medium tracking-wide rounded-full transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 select-none ${
                      isActive
                        ? 'text-white font-semibold'
                        : 'text-[#A1A1AA] hover:text-[#F5F5F7]'
                    }`}
                  >
                    {link.label}
                  </a>

                  {/* Active Capsule Indicator (Smooth gliding spring indicator) */}
                  {isActive && (
                    <motion.div
                      layoutId="activeCapsule"
                      className="absolute inset-0 rounded-full bg-white/[0.12] border border-white/[0.16] shadow-[inset_0_1px_1px_rgba(255,255,255,0.2),0_4px_16px_rgba(0,0,0,0.3)] z-0"
                      transition={{ type: 'spring', stiffness: 380, damping: 32, mass: 0.8 }}
                    />
                  )}

                  {/* Subtle Hover Capsule (Non-colliding, immediate fade) */}
                  {isHovered && !isActive && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.15 }}
                      className="absolute inset-0 rounded-full bg-white/[0.05] z-0 pointer-events-none"
                    />
                  )}
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Right: Enlarged Social Icons + "Let's Talk" CTA + Mobile Toggle */}
        <div className="flex items-center gap-3 sm:gap-4 shrink-0">
          {/* LinkedIn Icon Pill (Enlarged) */}
          <a
            href="https://www.linkedin.com/in/mithun-kumar-n/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="hidden sm:flex items-center justify-center w-11 h-11 rounded-full bg-blue-600/15 border border-blue-500/30 text-blue-400 hover:text-white hover:bg-blue-600 hover:border-blue-500 hover:shadow-[0_0_16px_rgba(59,130,246,0.45)] hover:scale-105 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
          </a>

          {/* Salesforce Trailblazer Icon Pill (Enlarged) */}
          <a
            href="https://www.salesforce.com/trailblazer/mkumarn2"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Trailblazer Profile"
            className="hidden sm:flex items-center justify-center w-11 h-11 rounded-full bg-sky-500/15 border border-sky-400/30 text-sky-400 hover:text-white hover:bg-sky-600 hover:border-sky-400 hover:shadow-[0_0_16px_rgba(14,165,233,0.45)] hover:scale-105 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
          >
            <svg className="w-5 h-5" viewBox="0 0 640 512" fill="currentColor">
              <path d="M248.89 245.64h-26.35c.69-5.16 3.32-14.12 13.64-14.12 6.75 0 11.97 3.82 12.71 14.12zm136.66-13.88c-.47 0-14.11-1.77-14.11 20s13.63 20 14.11 20c13 0 14.11-13.54 14.11-20 0-21.76-13.66-20-14.11-20zm-243.22 23.76a8.63 8.63 0 0 0-3.29 7.29c0 4.78 2.08 6.05 3.29 7.05 4.7 3.7 15.07 2.12 20.93.95v-16.94c-5.32-1.07-16.73-1.96-20.93 1.65zM640 232c0 87.58-80 154.39-165.36 136.43-18.37 33-70.73 70.75-132.2 41.63-41.16 96.05-177.89 92.18-213.81-5.17C8.91 428.78-50.19 266.52 53.36 205.61 18.61 126.18 76 32 167.67 32a124.24 124.24 0 0 1 98.56 48.7c20.7-21.4 49.4-34.81 81.15-34.81 42.34 0 79 23.52 98.8 58.57C539 63.78 640 132.69 640 232zm-519.55 31.8c0-11.76-11.69-15.17-17.87-17.17-5.27-2.11-13.41-3.51-13.41-8.94 0-9.46 17-6.66 25.17-2.12 0 0 1.17.71 1.64-.47.24-.7 2.36-6.58 2.59-7.29a1.13 1.13 0 0 0-.7-1.41c-12.33-7.63-40.7-8.51-40.7 12.7 0 12.46 11.49 15.44 17.88 17.17 4.72 1.58 13.17 3 13.17 8.7 0 4-3.53 7.06-9.17 7.06a31.76 31.76 0 0 1-19-6.35c-.47-.23-1.42-.71-1.65.71l-2.4 7.47c-.47.94.23 1.18.23 1.41 1.75 1.4 10.3 6.59 22.82 6.59 13.17 0 21.4-7.06 21.4-18.11zm32-42.58c-10.13 0-18.66 3.17-21.4 5.18a1 1 0 0 0-.24 1.41l2.59 7.06a1 1 0 0 0 1.18.7c.65 0 6.8-4 16.93-4 4 0 7.06.71 9.18 2.36 3.6 2.8 3.06 8.29 3.06 10.58-4.79-.3-19.11-3.44-29.41 3.76a16.92 16.92 0 0 0-7.34 14.54c0 5.9 1.51 10.4 6.59 14.35 12.24 8.16 36.28 2 38.1 1.41 1.58-.32 3.53-.66 3.53-1.88v-33.88c.04-4.61.32-21.64-22.78-21.64zM199 200.24a1.11 1.11 0 0 0-1.18-1.18H188a1.11 1.11 0 0 0-1.17 1.18v79a1.11 1.11 0 0 0 1.17 1.18h9.88a1.11 1.11 0 0 0 1.18-1.18zm55.75 28.93c-2.1-2.31-6.79-7.53-17.65-7.53-3.51 0-14.16.23-20.7 8.94-6.35 7.63-6.58 18.11-6.58 21.41 0 3.12.15 14.26 7.06 21.17 2.64 2.91 9.06 8.23 22.81 8.23 10.82 0 16.47-2.35 18.58-3.76.47-.24.71-.71.24-1.88l-2.35-6.83a1.26 1.26 0 0 0-1.41-.7c-2.59.94-6.35 2.82-15.29 2.82-17.42 0-16.85-14.74-16.94-16.7h37.17a1.23 1.23 0 0 0 1.17-.94c-.29 0 2.07-14.7-6.09-24.23zm36.69 52.69c13.17 0 21.41-7.06 21.41-18.11 0-11.76-11.7-15.17-17.88-17.17-4.14-1.66-13.41-3.38-13.41-8.94 0-3.76 3.29-6.35 8.47-6.35a38.11 38.11 0 0 1 16.7 4.23s1.18.71 1.65-.47c.23-.7 2.35-6.58 2.58-7.29a1.13 1.13 0 0 0-.7-1.41c-7.91-4.9-16.74-4.94-20.23-4.94-12 0-20.46 7.29-20.46 17.64 0 12.46 11.48 15.44 17.87 17.17 6.11 2 13.17 3.26 13.17 8.7 0 4-3.52 7.06-9.17 7.06a31.8 31.8 0 0 1-19-6.35 1 1 0 0 0-1.65.71l-2.35 7.52c-.47.94.23 1.18.23 1.41 1.72 1.4 10.33 6.59 22.79 6.59zM357.09 224c0-.71-.24-1.18-1.18-1.18h-11.76c0-.14.94-8.94 4.47-12.47 4.16-4.15 11.76-1.64 12-1.64 1.17.47 1.41 0 1.64-.47l2.83-7.77c.7-.94 0-1.17-.24-1.41-5.09-2-17.35-2.87-24.46 4.24-5.48 5.48-7 13.92-8 19.52h-8.47a1.28 1.28 0 0 0-1.17 1.18l-1.42 7.76c0 .7.24 1.17 1.18 1.17h8.23c-8.51 47.9-8.75 50.21-10.35 55.52-1.08 3.62-3.29 6.9-5.88 7.76-.09 0-3.88 1.68-9.64-.24 0 0-.94-.47-1.41.71-.24.71-2.59 6.82-2.83 7.53s0 1.41.47 1.41c5.11 2 13 1.77 17.88 0 6.28-2.28 9.72-7.89 11.53-12.94 2.75-7.71 2.81-9.79 11.76-59.74h12.23a1.29 1.29 0 0 0 1.18-1.18zm53.39 16c-.56-1.68-5.1-18.11-25.17-18.11-15.25 0-23 10-25.16 18.11-1 3-3.18 14 0 23.52.09.3 4.41 18.12 25.16 18.12 14.95 0 22.9-9.61 25.17-18.12 3.21-9.61 1.01-20.52 0-23.52zm45.4-16.7c-5-1.65-16.62-1.9-22.11 5.41v-4.47a1.11 1.11 0 0 0-1.18-1.17h-9.4a1.11 1.11 0 0 0-1.18 1.17v55.28a1.12 1.12 0 0 0 1.18 1.18h9.64a1.12 1.12 0 0 0 1.18-1.18v-27.77c0-2.91.05-11.37 4.46-15.05 4.9-4.9 12-3.36 13.41-3.06a1.57 1.57 0 0 0 1.41-.94 74 74 0 0 0 3.06-8 1.16 1.16 0 0 0-.47-1.41zm46.81 54.1l-2.12-7.29c-.47-1.18-1.41-.71-1.41-.71-4.23 1.82-10.15 1.89-11.29 1.89-4.64 0-17.17-1.13-17.17-19.76 0-6.23 1.85-19.76 16.47-19.76a34.85 34.85 0 0 1 11.52 1.65s.94.47 1.18-.71c.94-2.59 1.64-4.47 2.59-7.53.23-.94-.47-1.17-.71-1.17-11.59-3.87-22.34-2.53-27.76 0-1.59.74-16.23 6.49-16.23 27.52 0 2.9-.58 30.11 28.94 30.11a44.45 44.45 0 0 0 15.52-2.83 1.3 1.3 0 0 0 .47-1.42zm53.87-39.52c-.8-3-5.37-16.23-22.35-16.23-16 0-23.52 10.11-25.64 18.59a38.58 38.58 0 0 0-1.65 11.76c0 25.87 18.84 29.4 29.88 29.4 10.82 0 16.46-2.35 18.58-3.76.47-.24.71-.71.24-1.88l-2.36-6.83a1.26 1.26 0 0 0-1.41-.7c-2.59.94-6.35 2.82-15.29 2.82-17.42 0-16.85-14.74-16.93-16.7h37.16a1.25 1.25 0 0 0 1.18-.94c-.24-.01.94-7.07-1.41-15.54zm-23.29-6.35c-10.33 0-13 9-13.64 14.12H546c-.88-11.92-7.62-14.13-12.73-14.13z" />
            </svg>
          </a>

          {/* "Let's Connect" CTA Button (Desktop & Tablet; on small mobile screens it lives inside the hamburger menu for a spacious, clean bar) */}
          <motion.a
            href="#contact"
            onClick={(e) => handleNavClick(e, '#contact', 'contact')}
            whileHover={prefersReducedMotion ? {} : { scale: 1.03 }}
            whileTap={prefersReducedMotion ? {} : { scale: 0.97 }}
            className="hidden sm:inline-flex group relative items-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 rounded-full text-xs sm:text-sm font-semibold text-white overflow-hidden shadow-[0_0_20px_rgba(56,189,248,0.3)] hover:shadow-[0_0_28px_rgba(56,189,248,0.5)] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-sky-500 via-blue-600 to-violet-600 transition-all duration-300 group-hover:brightness-110" />
            <span className="absolute inset-0 bg-[linear-gradient(110deg,transparent,rgba(255,255,255,0.2),transparent)] -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out" />
            <span className="absolute inset-0 rounded-full border border-white/25 shadow-[inset_0_1px_1px_rgba(255,255,255,0.35)]" />
            <span className="relative z-10 flex items-center gap-1.5">
              <span>Let's Connect</span>
              <Sparkles className="w-3.5 h-3.5 text-sky-200 group-hover:rotate-12 transition-transform duration-300" />
            </span>
          </motion.a>

          {/* Mobile Menu Hamburger Toggle */}
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            aria-expanded={isMobileMenuOpen}
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            className="lg:hidden flex items-center justify-center w-10 h-10 rounded-full bg-white/[0.06] border border-white/[0.12] text-zinc-300 hover:text-white hover:bg-white/[0.1] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
          >
            <AnimatePresence mode="wait" initial={false}>
              {isMobileMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.18 }}
                >
                  <X className="w-5 h-5" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.18 }}
                >
                  <Menu className="w-5 h-5" />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>
      </motion.header>

      {/* Mobile Animated Glass Dropdown Panel */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.96 }}
            transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
            className="pointer-events-auto lg:hidden absolute top-[74px] sm:top-[80px] left-3 right-3 sm:left-6 sm:right-6 max-w-7xl mx-auto rounded-3xl bg-[#080d1a]/85 backdrop-blur-[24px] backdrop-saturate-[180%] border border-white/[0.12] shadow-[0_24px_50px_rgba(0,0,0,0.7),inset_0_1px_1px_rgba(255,255,255,0.18)] p-4 sm:p-5 overflow-hidden z-40"
          >
            <nav aria-label="Mobile Navigation" className="flex flex-col gap-1.5">
              {NAV_LINKS.map((link, idx) => {
                const isActive = activeSection === link.id;

                return (
                  <motion.a
                    key={link.id}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href, link.id)}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.03, duration: 0.18 }}
                    className={`flex items-center justify-between px-4 py-3 rounded-2xl text-sm font-semibold transition-all duration-200 ${
                      isActive
                        ? 'bg-gradient-to-r from-sky-500/20 to-purple-500/10 text-white border border-sky-400/30 shadow-[0_0_15px_rgba(56,189,248,0.15)]'
                        : 'text-[#A1A1AA] hover:text-[#F5F5F7] hover:bg-white/[0.05]'
                    }`}
                  >
                    <span>{link.label}</span>
                    <ArrowUpRight
                      className={`w-4 h-4 transition-transform duration-200 ${
                        isActive ? 'text-sky-400 translate-x-0.5 -translate-y-0.5' : 'text-zinc-600'
                      }`}
                    />
                  </motion.a>
                );
              })}

              {/* Mobile Social Links & CTA inside dropdown */}
              <div className="pt-3 mt-1.5 border-t border-white/[0.08] flex flex-col gap-2.5">
                <div className="flex items-center gap-2">
                  <a
                    href="https://www.linkedin.com/in/mithun-kumar-n/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-blue-600/15 border border-blue-500/25 text-blue-400 hover:text-white hover:bg-blue-600 text-xs font-semibold transition-all"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                    <span>LinkedIn</span>
                  </a>

                  <a
                    href="https://www.salesforce.com/trailblazer/mkumarn2"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-sky-500/15 border border-sky-400/25 text-sky-400 hover:text-white hover:bg-sky-600 text-xs font-semibold transition-all"
                  >
                    <svg className="w-4 h-4" viewBox="0 0 640 512" fill="currentColor">
                      <path d="M248.89 245.64h-26.35c.69-5.16 3.32-14.12 13.64-14.12 6.75 0 11.97 3.82 12.71 14.12zm136.66-13.88c-.47 0-14.11-1.77-14.11 20s13.63 20 14.11 20c13 0 14.11-13.54 14.11-20 0-21.76-13.66-20-14.11-20zm-243.22 23.76a8.63 8.63 0 0 0-3.29 7.29c0 4.78 2.08 6.05 3.29 7.05 4.7 3.7 15.07 2.12 20.93.95v-16.94c-5.32-1.07-16.73-1.96-20.93 1.65zM640 232c0 87.58-80 154.39-165.36 136.43-18.37 33-70.73 70.75-132.2 41.63-41.16 96.05-177.89 92.18-213.81-5.17C8.91 428.78-50.19 266.52 53.36 205.61 18.61 126.18 76 32 167.67 32a124.24 124.24 0 0 1 98.56 48.7c20.7-21.4 49.4-34.81 81.15-34.81 42.34 0 79 23.52 98.8 58.57C539 63.78 640 132.69 640 232zm-519.55 31.8c0-11.76-11.69-15.17-17.87-17.17-5.27-2.11-13.41-3.51-13.41-8.94 0-9.46 17-6.66 25.17-2.12 0 0 1.17.71 1.64-.47.24-.7 2.36-6.58 2.59-7.29a1.13 1.13 0 0 0-.7-1.41c-12.33-7.63-40.7-8.51-40.7 12.7 0 12.46 11.49 15.44 17.88 17.17 4.72 1.58 13.17 3 13.17 8.7 0 4-3.53 7.06-9.17 7.06a31.76 31.76 0 0 1-19-6.35c-.47-.23-1.42-.71-1.65.71l-2.4 7.47c-.47.94.23 1.18.23 1.41 1.75 1.4 10.3 6.59 22.82 6.59 13.17 0 21.4-7.06 21.4-18.11zm32-42.58c-10.13 0-18.66 3.17-21.4 5.18a1 1 0 0 0-.24 1.41l2.59 7.06a1 1 0 0 0 1.18.7c.65 0 6.8-4 16.93-4 4 0 7.06.71 9.18 2.36 3.6 2.8 3.06 8.29 3.06 10.58-4.79-.3-19.11-3.44-29.41 3.76a16.92 16.92 0 0 0-7.34 14.54c0 5.9 1.51 10.4 6.59 14.35 12.24 8.16 36.28 2 38.1 1.41 1.58-.32 3.53-.66 3.53-1.88v-33.88c.04-4.61.32-21.64-22.78-21.64z" />
                    </svg>
                    <span>Trailblazer</span>
                  </a>
                </div>

                <a
                  href="#contact"
                  onClick={(e) => handleNavClick(e, '#contact', 'contact')}
                  className="flex items-center justify-center gap-2 w-full py-3 rounded-2xl bg-gradient-to-r from-sky-500 via-blue-600 to-violet-600 text-white font-semibold text-sm shadow-[0_4px_20px_rgba(56,189,248,0.35)] hover:brightness-110 active:scale-[0.98] transition-all"
                >
                  <span>Let's Connect</span>
                  <Sparkles className="w-4 h-4 text-sky-200" />
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
