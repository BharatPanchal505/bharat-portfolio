import { motion } from 'framer-motion'
import { achievements, certifications } from '../data/portfolio'
import { FaMedal, FaCertificate } from 'react-icons/fa'

function AchievCard({ item, i }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ delay: i * 0.1, duration: 0.6 }}
      whileHover={{ y: -6, scale: 1.02 }}
      className="glass relative overflow-hidden group p-6 cursor-default h-full"
      style={{
        border: `1px solid ${item.color}20`,
        clipPath: 'polygon(0 0, calc(100% - 14px) 0, 100% 14px, 100% 100%, 14px 100%, 0 calc(100% - 14px))',
        background: `${item.color}04`,
      }}
      data-hover
    >
      {/* Top accent */}
      <div className="absolute top-0 left-0 right-0 h-px opacity-60"
        style={{ background: `linear-gradient(90deg, ${item.color}, transparent)` }} />

      {/* Icon */}
      <div className="text-3xl mb-4 float-anim" style={{ animationDelay: `${i * 0.3}s` }}>
        {item.icon}
      </div>

      <h3 className="font-orbitron text-sm font-bold text-white mb-2 leading-tight">{item.title}</h3>
      <p className="font-mono text-xs mb-3" style={{ color: item.color }}>{item.org}</p>
      <p className="text-white/40 font-rajdhani text-sm leading-relaxed">{item.description}</p>

      {/* Hover overlay */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ background: `radial-gradient(circle at 50% 100%, ${item.color}08, transparent)` }} />

      {/* Bottom border on hover */}
      <div className="absolute bottom-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity"
        style={{ background: `linear-gradient(90deg, transparent, ${item.color}, transparent)` }} />
    </motion.div>
  )
}

function CertCard({ cert, i }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: i * 0.15, duration: 0.7 }}
      whileHover={{ scale: 1.02, x: 4 }}
      className="group relative overflow-hidden p-6"
      style={{
        border: `1px solid ${cert.color}25`,
        background: `${cert.color}04`,
        clipPath: 'polygon(0 0, calc(100% - 16px) 0, 100% 16px, 100% 100%, 0 100%)',
      }}
      data-hover
    >
      {/* Left accent bar */}
      <div className="absolute left-0 top-0 bottom-0 w-0.5"
        style={{ background: cert.color, boxShadow: `0 0 8px ${cert.color}` }} />

      <div className="flex items-start gap-4">
        <div className="text-2xl">{cert.icon}</div>
        <div className="flex-1">
          <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
            <h3 className="font-orbitron text-sm font-bold text-white">{cert.title}</h3>
            <span className="font-mono text-xs text-white/30">{cert.period}</span>
          </div>
          <p className="font-rajdhani text-sm text-white/50 mb-1">{cert.subtitle}</p>
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs" style={{ color: cert.color }}>{cert.issuer}</span>
            <span className="text-white/20">•</span>
            <span className="font-mono text-xs text-white/30">{cert.details}</span>
          </div>
        </div>
      </div>

      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
        style={{ background: `${cert.color}04` }} />
    </motion.div>
  )
}

export default function Achievements() {
  return (
    <section id="achievements" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-[#020408]" />
      <div className="absolute inset-0 grid-bg opacity-12" />

      {/* Gold glow for achievements */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[300px] rounded-full blur-[150px] opacity-5"
        style={{ background: '#ffd700' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="font-mono text-xs text-[var(--cyan)] tracking-[0.4em] mb-4 opacity-60">// SECTION_07</p>
          <h2 className="section-title cyber-underline gradient-text-cp">ACHIEVEMENTS</h2>
        </motion.div>

        {/* Achievements grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {achievements.map((item, i) => (
            <AchievCard key={i} item={item} i={i} />
          ))}
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10"
        >
          <div className="flex items-center gap-4 mb-8">
            <FaCertificate size={18} style={{ color: 'var(--cyan)' }} />
            <h3 className="font-orbitron text-lg font-bold gradient-text-cp tracking-widest">CERTIFICATIONS</h3>
            <div className="flex-1 h-px opacity-20"
              style={{ background: 'linear-gradient(90deg, var(--cyan), transparent)' }} />
          </div>
          <div className="grid md:grid-cols-2 gap-5">
            {certifications.map((cert, i) => (
              <CertCard key={i} cert={cert} i={i} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
