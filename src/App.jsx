import Header from './components/Header'
import Hero from './components/Hero'
import Experience from './components/Experience'
import Skills from './components/Skills'
import React from 'react'
import Projects from './components/Projects'
import Education from './components/Education'
import Footer from './components/Footer'
import ThreeBackground from './components/ThreeBackground'
import ScrollReveal from './components/ScrollReveal'

function App() {
  return (
    <div className="min-h-screen bg-[var(--color-dark-bg)] text-[var(--color-text-primary)] selection:bg-brand-primary selection:text-white relative overflow-hidden">
      <ThreeBackground />
      
      {/* Background ambient light effects */}
      <div className="fixed top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-brand-primary/10 blur-[100px] pointer-events-none z-0" />
      <div className="fixed bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-brand-secondary/10 blur-[100px] pointer-events-none z-0" />
      
      <Header />
      
      <main className="relative z-10 flex flex-col items-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 md:pt-24 pb-12 gap-12 md:gap-20 w-full">
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
