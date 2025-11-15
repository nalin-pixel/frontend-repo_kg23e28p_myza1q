import React from 'react'

const projects = [
  {
    title: 'Secure Portfolio',
    desc: 'Personal site with hardened headers and privacy-friendly analytics.',
    tech: ['React', 'Tailwind', 'Framer Motion'],
    live: '#',
    code: 'https://github.com/username/secure-portfolio'
  },
  {
    title: 'CTF Toolkit',
    desc: 'Utilities for web pentesting, payload helpers, and recon scripts.',
    tech: ['Python', 'Node'],
    live: '#',
    code: 'https://github.com/username/ctf-toolkit'
  },
  {
    title: 'Realtime Chat',
    desc: 'Socket-powered chat with JWT auth and user presence.',
    tech: ['React', 'Node', 'Socket.io'],
    live: '#',
    code: 'https://github.com/username/realtime-chat'
  },
  {
    title: 'Bug Bounty Notes',
    desc: 'Static site with curated write-ups and methodology.',
    tech: ['Next.js', 'MDX'],
    live: '#',
    code: 'https://github.com/username/bug-bounty-notes'
  }
]

export default function Projects(){
  return (
    <section id="projects" className="py-24 bg-black">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-3xl font-bold text-white">Projects</h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <div key={p.title} className="group rounded-xl border border-white/10 bg-white/5 p-6 hover:shadow-2xl hover:shadow-emerald-500/10 hover:-translate-y-1 transition transform">
              <div className="flex items-start justify-between">
                <h3 className="text-white font-semibold text-lg">{p.title}</h3>
                <div className="flex gap-2">
                  {p.tech.slice(0,3).map((t)=> (
                    <span key={t} className="text-[11px] px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-300 border border-emerald-500/30">{t}</span>
                  ))}
                </div>
              </div>
              <p className="mt-3 text-white/70 text-sm">{p.desc}</p>
              <div className="mt-5 flex gap-3">
                <a href={p.live} className="px-3 py-1.5 rounded-md bg-emerald-500 text-black text-sm font-medium hover:bg-emerald-400 transition">Live Demo</a>
                <a href={p.code} className="px-3 py-1.5 rounded-md bg-white/10 border border-white/20 text-white text-sm hover:bg-white/15 transition">GitHub</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
