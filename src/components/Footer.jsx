import { motion } from 'framer-motion'
import { personal } from '../data/portfolio'

export default function Footer() {
  return (
    <footer className="relative py-12 overflow-hidden">
      <div className="absolute inset-0 bg-[#010306]" />
      <div className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, var(--cyan), var(--purple), transparent)' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 border border-[var(--cyan)] rotate-45 flex items-center justify-center"
              style={{ boxShadow: '0 0 10px rgba(0,245,255,0.3)' }}>
              <span className="font-orbitron text-xs font-bold neon-cyan -rotate-45">BP</span>
            </div>
            <span className="font-orbitron text-sm font-bold gradient-text-cp">BHARAT PANCHAL</span>
          </div>

          {/* Copyright */}
          <div className="text-center">
            <p className="font-mono text-xs text-white/20 tracking-widest">
              © {new Date().getFullYear()} BHARAT PANCHAL · BUILT WITH REACT + VITE
            </p>
            <p className="font-mono text-[0.6rem] text-white/10 tracking-widest mt-1">
              IoT & AI DEVELOPER · SILVER OAK UNIVERSITY
            </p>
          </div>

          {/* Status */}
          <div className="flex items-center gap-2">
            <motion.div
              className="w-2 h-2 rounded-full bg-green-400"
              animate={{ opacity: [1, 0.3, 1] }}
              transition={{ repeat: Infinity, duration: 2 }}
            />
            <span className="font-mono text-xs text-green-400 tracking-widest">SYSTEM ONLINE</span>
          </div>
        </div>

        {/* Bottom scan line */}
        <div className="mt-8 flex items-center justify-center gap-4">
          {['IoT', 'AI', 'Python', 'Web Dev', 'Mentoring'].map((tag, i) => (
            <span key={tag} className="font-mono text-[0.6rem] text-white/15 tracking-widest hidden sm:block">
              {tag}{i < 4 ? ' ·' : ''}
            </span>
          ))}
        </div>
      </div>
    </footer>
  )
}
