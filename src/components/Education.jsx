import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { education } from '../data/portfolio'
import { FaGraduationCap, FaCheckCircle } from 'react-icons/fa'

const colors = ['var(--cyan)', 'var(--purple)', 'var(--pink)']

export default function Education() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="education" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-[#030609]" />
      <div className="absolute inset-0 grid-bg opacity-10" />

      <div className="absolute left-1/2 top-0 -translate-x-1/2 w-px h-full opacity-5"
        style={{ background: 'linear-gradient(180deg, var(--cyan), var(--purple))' }} />

      <div className="relative z-10 max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="font-mono text-xs text-[var(--cyan)] tracking-[0.4em] mb-4 opacity-60">// SECTION_06</p>
          <h2 className="section-title cyber-underline gradient-text-cp">EDUCATION</h2>
        </motion.div>

        <div ref={ref} className="relative space-y-8">
          {/* Center timeline */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 timeline-line" />

          {education.map((edu, i) => {
            const color = colors[i]
            const isLeft = i % 2 === 0

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: i * 0.2, duration: 0.8 }}
                className={`relative grid md:grid-cols-2 gap-8 items-center`}
              >
                {/* Timeline dot */}
                <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-10 h-10 items-center justify-center"
                  style={{
                    background: 'var(--bg2)',
                    border: `2px solid ${color}`,
                    clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)',
                    boxShadow: `0 0 20px ${color}80`,
                  }}>
                  <FaGraduationCap size={12} style={{ color }} />
                </div>

                {/* Left slot */}
                <div className={isLeft ? '' : 'md:order-last'}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="glass p-7 relative overflow-hidden group h-full"
                    style={{
                      border: `1px solid ${color}20`,
                      clipPath: 'polygon(0 0, calc(100% - 16px) 0, 100% 16px, 100% 100%, 16px 100%, 0 calc(100% - 16px))',
                      background: `${color}04`,
                    }}
                  >
                    {/* Top border */}
                    <div className="absolute top-0 left-0 right-0 h-px"
                      style={{ background: `linear-gradient(90deg, ${color}, transparent)` }} />

                    {/* Status badge */}
                    <div className="flex justify-between items-start mb-4">
                      <span
                        className="px-3 py-1 font-mono text-[0.6rem] tracking-widest"
                        style={{
                          border: `1px solid ${color}40`,
                          color,
                          background: `${color}10`,
                          clipPath: 'polygon(4px 0%, 100% 0%, calc(100% - 4px) 100%, 0% 100%)',
                        }}
                      >
                        {edu.status}
                      </span>
                      <span className="font-mono text-xs text-white/30">{edu.period}</span>
                    </div>

                    <h3 className="font-orbitron text-base font-bold text-white mb-2">{edu.degree}</h3>
                    <p className="font-mono text-xs mb-4" style={{ color }}>{edu.institution}</p>

                    <div className="space-y-2">
                      {edu.highlights.map((h, j) => (
                        <div key={j} className="flex items-start gap-2">
                          <FaCheckCircle size={10} className="mt-1 flex-shrink-0" style={{ color: `${color}80` }} />
                          <span className="text-white/50 font-rajdhani text-sm">{h}</span>
                        </div>
                      ))}
                    </div>

                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
                      style={{ background: `radial-gradient(circle at 50% 0%, ${color}05, transparent)` }} />
                  </motion.div>
                </div>

                {/* Right slot (empty for alignment) */}
                <div className={isLeft ? '' : 'md:order-first'} />
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
