import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const lines = [
  { prompt: 'C:> ', text: 'whoami' },
  { output: 'Nicholas - Software Engineer & Ethical Hacker' },
  { prompt: 'C:> ', text: 'launch portfolio' },
]

function useTypewriter(sequence, onComplete) {
  const [typed, setTyped] = useState([])
  const [cursorVisible, setCursorVisible] = useState(true)

  useEffect(() => {
    let i = 0
    let timers = []

    const typeLine = () => {
      if (i >= sequence.length) {
        // Simulate loading dots then complete
        const t1 = setTimeout(() => {
          onComplete?.()
        }, 1200)
        timers.push(t1)
        return
      }
      const entry = sequence[i]

      if (entry.text) {
        let j = 0
        const current = { prompt: entry.prompt || '', text: '' }
        setTyped((prev) => [...prev, current])
        const typeChar = () => {
          if (j < entry.text.length) {
            current.text += entry.text[j]
            // Trigger state update
            setTyped((prev) => prev.map((l, idx) => (idx === prev.length - 1 ? { ...current } : l)))
            j++
            timers.push(setTimeout(typeChar, 40))
          } else {
            // move to next line after pause
            i++
            timers.push(setTimeout(typeLine, 300))
          }
        }
        timers.push(setTimeout(typeChar, 400))
      } else if (entry.output) {
        setTyped((prev) => [...prev, { output: entry.output }])
        i++
        timers.push(setTimeout(typeLine, 500))
      }
    }

    typeLine()

    const blink = setInterval(() => setCursorVisible((v) => !v), 500)
    return () => {
      timers.forEach(clearTimeout)
      clearInterval(blink)
    }
  }, [sequence, onComplete])

  return { typed, cursorVisible }
}

export default function TerminalIntro({ onFinish }) {
  const [loadingDots, setLoadingDots] = useState(0)
  const { typed, cursorVisible } = useTypewriter(lines, () => {
    // start loading dots until parent fades out
    const interval = setInterval(() => setLoadingDots((d) => (d + 1) % 4), 300)
    // Give a bit before telling parent
    setTimeout(() => {
      clearInterval(interval)
      onFinish?.()
    }, 1200)
  })

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.6 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black"
      >
        <div className="w-[92vw] max-w-3xl rounded-lg border border-[#0aff9d]/30 bg-black/60 shadow-[0_0_80px_rgba(10,255,157,0.2)] p-6">
          <div className="font-mono text-[#00ff7f] text-[15px] leading-7">
            {typed.map((line, idx) => (
              <div key={idx}>
                {line.prompt !== undefined ? (
                  <span>
                    <span className="opacity-80">C:\\Users\\Nicholas&gt; </span>
                    <span>{line.text}</span>
                    {idx === typed.length - 1 && cursorVisible && <span className="ml-0.5">▍</span>}
                  </span>
                ) : (
                  <span className="block opacity-90">{line.output}</span>
                )}
              </div>
            ))}
            {typed.length >= 3 && (
              <div className="mt-2 opacity-80">loading{'.'.repeat(loadingDots)}</div>
            )}
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}
