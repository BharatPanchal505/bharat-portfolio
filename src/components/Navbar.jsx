import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const links = [
  { href: '#hero', label: 'HOME' },
  { href: '#about', label: 'ABOUT' },
  { href: '#skills', label: 'SKILLS' },
  { href: '#experience', label: 'EXP' },
  { href: '#projects', label: 'PROJECTS' },
  { href: '#education', label: 'EDUCATION' },
  { href: '#achievements', label: 'AWARDS' },
  { href: '#contact', label: 'CONTACT' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('#hero')
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (href) => {
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
    setActive(href)
    setMenuOpen(false)
  }

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className={`fixed top-0 left-0 right-0 z-[1000] transition-all duration-300 ${
          scrolled ? 'py-3' : 'py-5'
        }`}
        style={{
          background: scrolled
            ? 'rgba(2, 4, 8, 0.9)'
            : 'transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(0,245,255,0.1)' : 'none',
        }}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <button onClick={() => scrollTo('#hero')} className="group relative" data-hover>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 border border-[var(--cyan)] rotate-45 flex items-center justify-center relative"
                style={{ boxShadow: '0 0 10px rgba(0,245,255,0.4)' }}>
                <span className="font-orbitron text-xs font-bold neon-cyan -rotate-45">BP</span>
              </div>
              <span className="font-orbitron font-bold text-sm tracking-widest hidden sm:block gradient-text-cp">
                BHARAT.DEV
              </span>
            </div>
          </button>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-1">
            {links.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                data-hover
                className={`relative px-3 py-2 font-orbitron text-[0.65rem] font-bold tracking-widest transition-all duration-300 ${
                  active === link.href ? 'text-[var(--cyan)]' : 'text-white/40 hover:text-white/80'
                }`}
              >
                {active === link.href && (
                  <motion.div
                    layoutId="nav-indicator"
                    className="absolute inset-0"
                    style={{
                      background: 'rgba(0,245,255,0.05)',
                      border: '1px solid rgba(0,245,255,0.3)',
                      clipPath: 'polygon(4px 0%, 100% 0%, calc(100% - 4px) 100%, 0% 100%)',
                    }}
                  />
                )}
                <span className="relative z-10">{link.label}</span>
              </button>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="mailto:bpanchal2002@gmail.com"
              className="btn-cyber text-xs py-2 px-5"
              data-hover
            >
              <span>HIRE ME</span>
            </a>
          </div>

          {/* Hamburger */}
          <button
            className="lg:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            data-hover
          >
            {[0, 1, 2].map(i => (
              <motion.span
                key={i}
                animate={{
                  rotate: menuOpen && i === 0 ? 45 : menuOpen && i === 2 ? -45 : 0,
                  y: menuOpen && i === 0 ? 8 : menuOpen && i === 2 ? -8 : 0,
                  opacity: menuOpen && i === 1 ? 0 : 1,
                }}
                className="block w-6 h-0.5 bg-[var(--cyan)]"
                style={{ boxShadow: '0 0 6px var(--cyan)' }}
              />
            ))}
          </button>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-16 left-0 right-0 z-[999] lg:hidden"
            style={{
              background: 'rgba(2, 4, 8, 0.98)',
              backdropFilter: 'blur(20px)',
              borderBottom: '1px solid rgba(0,245,255,0.2)',
            }}
          >
            <div className="flex flex-col p-6 gap-4">
              {links.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollTo(link.href)}
                  className={`text-left font-orbitron text-sm font-bold tracking-widest py-2 border-b border-white/5 ${
                    active === link.href ? 'neon-cyan' : 'text-white/40'
                  }`}
                >
                  {link.label}
                </button>
              ))}
              <a href="mailto:bpanchal2002@gmail.com" className="btn-cyber text-center mt-2">
                <span>HIRE ME</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
