import React from 'react'
import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero({ onProjectsClick, onContactClick }) {
  return (
    <section id="home" className="relative min-h-[88vh] pt-24 overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/70 to-black pointer-events-none" />
      </div>
      <div className="relative z-10 mx-auto max-w-6xl px-4 py-20">
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-4xl md:text-6xl font-bold text-white tracking-tight">
          Hi, I'm Nicholas.
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.6 }} className="mt-3 text-lg md:text-xl text-white/80">
          Engineer • Web Developer • Ethical Hacker
        </motion.p>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.6 }} className="mt-6 max-w-2xl text-white/70">
          I build fast, secure, and delightful web experiences. Passionate about modern frontend, scalable backends, and cybersecurity with a focus on red teaming and web security.
        </motion.p>
        <div className="mt-8 flex flex-wrap gap-4">
          <button onClick={onProjectsClick} className="px-5 py-2.5 rounded-md bg-emerald-500 text-black font-semibold hover:bg-emerald-400 transition-colors">
            View Projects
          </button>
          <button onClick={onContactClick} className="px-5 py-2.5 rounded-md bg-white/10 border border-white/20 text-white hover:bg-white/15 transition-colors">
            Contact Me
          </button>
        </div>
        <div className="mt-10 max-w-lg rounded-lg border border-white/10 bg-black/40 p-4">
          <div className="text-xs text-emerald-400 font-mono">$ security-scan --target portfolio</div>
          <div className="mt-2 font-mono text-[13px] text-white/80">
            ▶ scanning routes ... ok
            <br/>▶ checking headers ... ok
            <br/>▶ audit dependencies ... 0 vulnerabilities
            <br/>▶ result: hardened
          </div>
        </div>
      </div>
    </section>
  )
}
