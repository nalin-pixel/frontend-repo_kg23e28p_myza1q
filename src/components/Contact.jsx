import React, { useState } from 'react'
import { Github, Linkedin, Mail } from 'lucide-react'

export default function Contact(){
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })
  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Message captured locally. Hook this form to your backend or service when ready!')
  }

  return (
    <section id="contact" className="py-24 bg-black">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-3xl font-bold text-white">Contact</h2>
        <div className="mt-8 grid md:grid-cols-2 gap-8">
          <form onSubmit={handleSubmit} className="space-y-4">
            <input name="name" value={form.name} onChange={handleChange} placeholder="Name" className="w-full bg-white/5 border border-white/10 rounded-md px-4 py-2.5 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-emerald-500" />
            <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="Email" className="w-full bg-white/5 border border-white/10 rounded-md px-4 py-2.5 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-emerald-500" />
            <textarea name="message" value={form.message} onChange={handleChange} rows="5" placeholder="Message" className="w-full bg-white/5 border border-white/10 rounded-md px-4 py-2.5 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-emerald-500" />
            <button className="px-5 py-2.5 rounded-md bg-emerald-500 text-black font-semibold hover:bg-emerald-400 transition-colors">Send</button>
          </form>

          <div className="rounded-lg border border-white/10 bg-white/5 p-6">
            <p className="text-white/80">Prefer to reach out directly?</p>
            <div className="mt-4 flex items-center gap-4">
              <a href="https://github.com/nicholas" className="text-white/80 hover:text-white" aria-label="GitHub"><Github size={22} /></a>
              <a href="https://linkedin.com/in/nicholas" className="text-white/80 hover:text-white" aria-label="LinkedIn"><Linkedin size={22} /></a>
              <a href="mailto:nicholas@example.com" className="text-white/80 hover:text-white" aria-label="Email"><Mail size={22} /></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
