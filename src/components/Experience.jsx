import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { experience } from '../data/portfolio'
import { FaBriefcase, FaCheckCircle } from 'react-icons/fa'

export default function Experience() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="experience" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-[#030609]" />
      <div className="absolute inset-0 grid-bg opacity-10" />

      {/* Glow accent */}
      <div className="absolute right-0 top-1/2 w-64 h-64 rounded-full blur-[120px] opacity-8"
        style={{ background: 'var(--cyan)' }} />

      <div className="relative z-10 max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="font-mono text-xs text-[var(--cyan)] tracking-[0.4em] mb-4 opacity-60">// SECTION_04</p>
          <h2 className="section-title cyber-underline gradient-text-cp">EXPERIENCE</h2>
        </motion.div>

        <div ref={ref} className="relative">
          {/* Timeline vertical line */}
          <div className="absolute left-8 top-0 bottom-0 w-px timeline-line hidden md:block" />

          {experience.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -60 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: i * 0.2, duration: 0.8 }}
              className="relative pl-0 md:pl-24 mb-12"
            >
              {/* Timeline node */}
              <div className="hidden md:flex absolute left-4 top-8 w-8 h-8 items-center justify-center"
                style={{
                  background: 'var(--bg)',
                  border: '2px solid var(--cyan)',
                  clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)',
                  boxShadow: '0 0 15px var(--cyan), 0 0 30px rgba(0,245,255,0.3)',
                }}>
                <FaBriefcase size={10} style={{ color: 'var(--cyan)' }} />
              </div>

              {/* Card */}
              <motion.div
                whileHover={{ x: 4, boxShadow: '0 0 40px rgba(0,245,255,0.15)' }}
                className="glass-purple p-8 relative overflow-hidden group"
                style={{
                  clipPath: 'polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 20px 100%, 0 calc(100% - 20px))',
                  border: '1px solid rgba(0,245,255,0.1)',
                }}
              >
                {/* Top accent */}
                <div className="absolute top-0 left-0 right-0 h-px"
                  style={{ background: 'linear-gradient(90deg, var(--cyan), var(--purple), transparent)' }} />

                {/* Corner */}
                <div className="absolute top-0 right-0 w-20 h-20 border-t border-r border-[var(--cyan)] opacity-20" />
                <div className="absolute bottom-0 left-0 w-16 h-16 border-b border-l border-[var(--purple)] opacity-20" />

                <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                  <div>
                    <h3 className="font-orbitron text-xl font-bold text-white mb-1">{exp.role}</h3>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="neon-cyan font-rajdhani font-semibold">{exp.company}</span>
                      <span className="text-white/30">•</span>
                      <span className="text-white/40 font-mono text-xs">{exp.location}</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 font-mono text-xs tracking-wider"
                      style={{
                        border: '1px solid rgba(0,245,255,0.3)',
                        color: 'var(--cyan)',
                        background: 'rgba(0,245,255,0.05)',
                        clipPath: 'polygon(6px 0%, 100% 0%, calc(100% - 6px) 100%, 0% 100%)',
                      }}>
                      <motion.span
                        className="w-1.5 h-1.5 rounded-full bg-green-400"
                        animate={{ opacity: [1, 0.3, 1] }}
                        transition={{ repeat: Infinity, duration: 1.5 }}
                      />
                      {exp.period}
                    </div>
                    <div className="mt-2">
                      <span className="font-mono text-xs text-white/30 tracking-widest">{exp.type}</span>
                    </div>
                  </div>
                </div>

                <ul className="space-y-3">
                  {exp.description.map((point, j) => (
                    <motion.li
                      key={j}
                      initial={{ opacity: 0, x: -10 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.4 + j * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <FaCheckCircle size={12} className="mt-1 flex-shrink-0" style={{ color: 'var(--cyan)' }} />
                      <span className="font-rajdhani text-white/60 text-base">{point}</span>
                    </motion.li>
                  ))}
                </ul>

                {/* Hover glow */}
                <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: 'radial-gradient(circle at 50% 0%, rgba(0,245,255,0.04), transparent 70%)' }} />
              </motion.div>
            </motion.div>
          ))}

          {/* Currently working badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.6, type: 'spring' }}
            className="md:pl-24 flex items-center gap-4"
          >
            <div className="flex items-center gap-3 px-6 py-3 glass border border-green-500/30"
              style={{ clipPath: 'polygon(8px 0%, 100% 0%, calc(100% - 8px) 100%, 0% 100%)' }}>
              <motion.div
                className="w-2 h-2 rounded-full bg-green-400"
                animate={{ scale: [1, 1.5, 1] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
              />
              <span className="font-mono text-xs text-green-400 tracking-widest">CURRENTLY ACTIVE</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
