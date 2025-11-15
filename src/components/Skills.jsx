import React from 'react'

const categories = [
  { title: 'Languages', skills: ['JavaScript', 'TypeScript', 'Python', 'PHP'] },
  { title: 'Web', skills: ['React', 'Next.js', 'Tailwind CSS', 'Laravel'] },
  { title: 'DevOps / Tools', skills: ['Git', 'Docker', 'Linux'] },
  { title: 'Cybersecurity', skills: ['Red Teaming (basic)', 'Web Security'] },
]

export default function Skills(){
  return (
    <section id="skills" className="py-24 bg-black">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-3xl font-bold text-white">Skills</h2>
        <div className="mt-8 grid md:grid-cols-2 gap-8">
          {categories.map((cat) => (
            <div key={cat.title} className="rounded-lg border border-white/10 bg-white/5 p-5">
              <h3 className="text-white/90 font-semibold">{cat.title}</h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {cat.skills.map((s) => (
                  <span key={s} className="px-3 py-1.5 rounded-full bg-emerald-500/10 text-emerald-300 text-sm border border-emerald-500/30 hover:-translate-y-0.5 hover:bg-emerald-500/20 transition transform">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
