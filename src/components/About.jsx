import React from 'react'

export default function About(){
  return (
    <section id="about" className="relative py-24 bg-black">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-3xl font-bold text-white">About</h2>
        <div className="mt-8 grid md:grid-cols-2 gap-8 items-start">
          <p className="text-white/80 leading-relaxed">
            I'm Nicholas, a computer science student and full-stack web developer with a deep interest in cybersecurity. I enjoy building clean, performant interfaces and reliable backends, and I love exploring red team tactics to better understand how to defend systems. My work blends engineering craftsmanship with a security-first mindset.
          </p>
          <p className="text-white/70 leading-relaxed">
            I focus on modern JavaScript/TypeScript, React/Next.js, Node, and PHP/Laravel. I also work with Linux, Docker, and cloud platforms. Outside of building, I study offensive security techniques and apply them ethically to help teams ship safer software.
          </p>
        </div>
      </div>
    </section>
  )
}
