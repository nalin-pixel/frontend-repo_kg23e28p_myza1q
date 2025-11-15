import React from 'react'
import { Link } from 'react-router-dom'

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
]

export default function Navbar() {
  const handleClick = (e, id) => {
    e.preventDefault()
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="fixed top-0 inset-x-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-black/40 bg-black/60 border-b border-white/10">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex h-14 items-center justify-between">
          <a href="#home" onClick={(e) => handleClick(e, 'home')} className="text-sm font-semibold text-white/90 hover:text-white">Nicholas.dev</a>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            {navItems.map((item) => (
              <a key={item.id} href={`#${item.id}`} onClick={(e) => handleClick(e, item.id)} className="text-white/70 hover:text-white transition-colors">
                {item.label}
              </a>
            ))}
          </nav>
          <div className="md:hidden">
            <select onChange={(e)=>handleClick(e, e.target.value)} className="bg-white/5 text-white text-sm px-3 py-1.5 rounded border border-white/10">
              {navItems.map((n)=> (
                <option key={n.id} value={n.id}>{n.label}</option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </div>
  )
}
