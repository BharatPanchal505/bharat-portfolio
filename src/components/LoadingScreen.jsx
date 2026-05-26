import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function LoadingScreen({ onComplete }) {
  const [progress, setProgress] = useState(0)
  const [phase, setPhase] = useState('boot') // boot, loading, done

  useEffect(() => {
    const timer = setTimeout(() => setPhase('loading'), 500)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    if (phase !== 'loading') return
    const interval = setInterval(() => {
      setProgress(p => {
        if (p >= 100) {
          clearInterval(interval)
          setTimeout(() => {
            setPhase('done')
            setTimeout(onComplete, 600)
          }, 300)
          return 100
        }
        return p + Math.random() * 4 + 1
      })
    }, 40)
    return () => clearInterval(interval)
  }, [phase, onComplete])

  const lines = [
    '> INITIALIZING NEURAL INTERFACE...',
    '> LOADING QUANTUM MODULES...',
    '> ESTABLISHING SECURE CONNECTION...',
    '> MOUNTING HOLOGRAPHIC DISPLAY...',
    '> SYSTEM READY.',
  ]

  return (
    <AnimatePresence>
      {phase !== 'done' && (
        <motion.div
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
          className="fixed inset-0 z-[9999] bg-[#020408] flex items-center justify-center overflow-hidden"
        >
          {/* Grid bg */}
          <div className="absolute inset-0 grid-bg opacity-30" />

          {/* Animated corner brackets */}
          {[
            'top-8 left-8 border-t border-l',
            'top-8 right-8 border-t border-r',
            'bottom-8 left-8 border-b border-l',
            'bottom-8 right-8 border-b border-r',
          ].map((pos, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              className={`absolute w-16 h-16 ${pos} border-[var(--cyan)] opacity-60`}
            />
          ))}

          <div className="relative z-10 text-center max-w-lg mx-auto px-8">
            {/* Logo */}
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, type: 'spring', stiffness: 100 }}
              className="mb-8 mx-auto w-24 h-24 relative"
            >
              <div className="w-full h-full border-2 border-[var(--cyan)] rotate-45 relative flex items-center justify-center"
                style={{ boxShadow: '0 0 30px var(--cyan), inset 0 0 30px rgba(0,245,255,0.1)' }}>
                <div className="w-14 h-14 border border-[var(--purple)] rotate-0 absolute"
                  style={{ boxShadow: '0 0 15px var(--purple)' }} />
                <span className="font-orbitron text-2xl font-bold neon-cyan -rotate-45 relative z-10">BP</span>
              </div>
              {/* Rotating ring */}
              <div className="absolute inset-[-10px] border border-[var(--cyan)] rounded-full opacity-30 animate-spin-slow" />
            </motion.div>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="font-orbitron text-2xl font-bold mb-2 gradient-text"
            >
              BHARAT PANCHAL
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="font-mono text-xs text-[var(--cyan)] tracking-widest mb-10"
            >
              IoT & AI DEVELOPER
            </motion.p>

            {/* Terminal lines */}
            <div className="text-left mb-8 space-y-1">
              {lines.map((line, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: progress > i * 20 ? 1 : 0, x: 0 }}
                  className="font-mono text-xs text-[var(--cyan)] opacity-70"
                >
                  {line}
                </motion.p>
              ))}
            </div>

            {/* Progress bar */}
            <div className="relative mb-3">
              <div className="w-full h-1 bg-white/5 overflow-hidden"
                style={{ clipPath: 'polygon(4px 0%, 100% 0%, calc(100% - 4px) 100%, 0% 100%)' }}>
                <motion.div
                  className="h-full"
                  style={{
                    width: `${progress}%`,
                    background: 'linear-gradient(90deg, var(--cyan), var(--purple))',
                    boxShadow: '0 0 10px var(--cyan)',
                  }}
                />
              </div>
              {/* Scan line */}
              <div className="absolute top-0 h-full w-4 bg-white/20 blur-sm"
                style={{ left: `${progress}%`, transform: 'translateX(-50%)' }} />
            </div>

            <div className="flex justify-between">
              <span className="font-mono text-xs text-white/30">SYS_BOOT_v2.0</span>
              <motion.span
                className="font-mono text-xs neon-cyan font-bold"
                animate={{ opacity: [1, 0.3, 1] }}
                transition={{ repeat: Infinity, duration: 0.8 }}
              >
                {Math.min(Math.round(progress), 100)}%
              </motion.span>
            </div>
          </div>

          {/* Scan line effect */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <motion.div
              className="absolute w-full h-px bg-gradient-to-r from-transparent via-[var(--cyan)] to-transparent opacity-30"
              animate={{ y: ['0vh', '100vh'] }}
              transition={{ repeat: Infinity, duration: 3, ease: 'linear' }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
