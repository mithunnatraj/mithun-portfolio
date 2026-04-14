import React, { useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Education from './components/Education'
import Footer from './components/Footer'
import ThreeBackground from './components/ThreeBackground'
import ScrollReveal from './components/ScrollReveal'

function App() {
  useEffect(() => {
    // Prevent the browser from restoring the previous scroll position
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    
    // Clear any hash tags from the URL dynamically on load
    if (window.location.hash) {
      window.history.replaceState(null, '', window.location.pathname);
    }
    
    // Explicitly force scroll to the very top
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-[100dvh] bg-[var(--color-dark-bg)] text-[var(--color-text-primary)] selection:bg-brand-primary selection:text-white relative overflow-x-hidden">
      <ThreeBackground />
      
      {/* Background ambient light effects */}
      <div className="fixed top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-brand-primary/10 blur-[100px] pointer-events-none z-0" />
      <div className="fixed bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-brand-secondary/10 blur-[100px] pointer-events-none z-0" />
      
      <Header />
      
      <main className="relative z-10 flex flex-col items-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 md:pt-20 pb-12 gap-8 md:gap-20 w-full">
        <Hero />
        
        <ScrollReveal style="fade-up">
          <Experience />
        </ScrollReveal>
        
        <ScrollReveal style="scale">
          <Skills />
        </ScrollReveal>
        
        <ScrollReveal style="fade-left">
          <Projects />
        </ScrollReveal>
        
        <ScrollReveal style="fade-right">
          <Education />
        </ScrollReveal>
      </main>

      <Footer />
    </div>
  )
}

export default App
