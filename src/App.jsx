import React, { useEffect, useState, useCallback } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import TerminalIntro from './components/TerminalIntro'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {
  const [showIntro, setShowIntro] = useState(() => {
    try {
      const seen = localStorage.getItem('nicholas_intro_seen')
      return seen !== 'true'
    } catch {
      return true
    }
  })

  const onProjectsClick = useCallback(() => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
  }, [])
  const onContactClick = useCallback(() => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }, [])

  useEffect(() => {
    if (!showIntro) return
    const timer = setTimeout(() => {
      setShowIntro(false)
      try { localStorage.setItem('nicholas_intro_seen', 'true') } catch {}
    }, 3200)
    return () => clearTimeout(timer)
  }, [showIntro])

  const finishIntro = () => {
    setShowIntro(false)
    try { localStorage.setItem('nicholas_intro_seen', 'true') } catch {}
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <AnimatePresence>{showIntro && <TerminalIntro onFinish={finishIntro} />}</AnimatePresence>

      {!showIntro && (
        <>
          <Navbar />
          <main>
            <Hero onProjectsClick={onProjectsClick} onContactClick={onContactClick} />
            <About />
            <Skills />
            <Projects />
            <Contact />
          </main>
          <footer className="border-t border-white/10 py-8 text-center text-white/50 text-sm">© {new Date().getFullYear()} Nicholas • All rights reserved.</footer>
        </>
      )}
    </div>
  )
}

export default App
