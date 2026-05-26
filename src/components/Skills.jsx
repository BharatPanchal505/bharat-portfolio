import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { skills, techStack } from '../data/portfolio'

function SkillBar({ name, level, delay, color = 'var(--cyan)' }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -20 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ delay, duration: 0.6 }}
      className="group"
    >
      <div className="flex justify-between mb-2">
        <span className="font-mono text-xs text-white/70 tracking-wider">{name}</span>
        <motion.span
          className="font-orbitron text-xs font-bold"
          style={{ color }}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: delay + 0.5 }}
        >
          {level}%
        </motion.span>
      </div>
      <div className="h-1.5 bg-white/5 overflow-hidden relative"
        style={{ clipPath: 'polygon(4px 0%, 100% 0%, calc(100% - 4px) 100%, 0% 100%)' }}>
        <motion.div
          className="skill-bar-fill"
          style={{ background: `linear-gradient(90deg, ${color}, ${color}aa)`, boxShadow: `0 0 8px ${color}` }}
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : {}}
          transition={{ delay: delay + 0.2, duration: 1, ease: 'easeOut' }}
        />
      </div>
    </motion.div>
  )
}

function TechBadge({ name, icon, color, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0, y: 20 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, type: 'spring', stiffness: 200 }}
      whileHover={{ y: -8, scale: 1.1 }}
      className="flex flex-col items-center gap-2 cursor-default group"
      data-hover
    >
      <div
        className="w-14 h-14 flex items-center justify-center text-xl glass relative overflow-hidden"
        style={{
          border: `1px solid ${color}40`,
          clipPath: 'polygon(8px 0%, 100% 0%, calc(100% - 8px) 100%, 0% 100%)',
          boxShadow: `0 0 15px ${color}20`,
        }}
      >
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
          style={{ background: `${color}15` }} />
        <span className="relative z-10 font-orbitron text-sm font-bold" style={{ color }}>
          {icon}
        </span>
      </div>
      <span className="font-mono text-[0.6rem] text-white/40 tracking-wider group-hover:text-white/70 transition-colors">
        {name}
      </span>
    </motion.div>
  )
}

export default function Skills() {
  return (
    <section id="skills" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-[#020408]" />
      <div className="absolute inset-0 grid-bg opacity-15" />

      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-5 blur-[150px]"
        style={{ background: 'var(--purple)' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="font-mono text-xs text-[var(--cyan)] tracking-[0.4em] mb-4 opacity-60">// SECTION_03</p>
          <h2 className="section-title cyber-underline gradient-text-cp">SKILLS & TECH</h2>
        </motion.div>

        {/* Tech stack icons */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <p className="font-mono text-xs text-white/30 tracking-widest text-center mb-8">TECH STACK</p>
          <div className="flex flex-wrap justify-center gap-6 md:gap-8">
            {techStack.map((tech, i) => (
              <TechBadge key={tech.name} {...tech} delay={i * 0.05} />
            ))}
          </div>
        </motion.div>

        {/* Skill bars grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Programming */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-purple p-8 relative"
            style={{ clipPath: 'polygon(0 0, calc(100% - 16px) 0, 100% 16px, 100% 100%, 16px 100%, 0 calc(100% - 16px))' }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-1 h-6 bg-[var(--cyan)]" style={{ boxShadow: '0 0 8px var(--cyan)' }} />
              <h3 className="font-orbitron text-sm font-bold text-[var(--cyan)] tracking-widest">PROGRAMMING</h3>
            </div>
            <div className="space-y-4">
              {skills.programming.map((s, i) => (
                <SkillBar key={s.name} {...s} delay={i * 0.1} color="var(--cyan)" />
              ))}
            </div>
          </motion.div>

          {/* Web */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="glass-purple p-8 relative"
            style={{ clipPath: 'polygon(0 0, calc(100% - 16px) 0, 100% 16px, 100% 100%, 16px 100%, 0 calc(100% - 16px))' }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-1 h-6 bg-[var(--purple)]" style={{ boxShadow: '0 0 8px var(--purple)' }} />
              <h3 className="font-orbitron text-sm font-bold text-[var(--purple)] tracking-widest">WEB DEV</h3>
            </div>
            <div className="space-y-4">
              {skills.web.map((s, i) => (
                <SkillBar key={s.name} {...s} delay={i * 0.1} color="var(--purple)" />
              ))}
            </div>
          </motion.div>

          {/* DB + Tools */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="glass-purple p-8 relative"
            style={{ clipPath: 'polygon(0 0, calc(100% - 16px) 0, 100% 16px, 100% 100%, 16px 100%, 0 calc(100% - 16px))' }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-1 h-6 bg-[var(--pink)]" style={{ boxShadow: '0 0 8px var(--pink)' }} />
              <h3 className="font-orbitron text-sm font-bold text-[var(--pink)] tracking-widest">DATABASE & TOOLS</h3>
            </div>
            <div className="space-y-4">
              {[...skills.database, ...skills.tools].map((s, i) => (
                <SkillBar key={s.name} {...s} delay={i * 0.1} color="var(--pink)" />
              ))}
            </div>
          </motion.div>
        </div>

        {/* Technology + Professional tags */}
        <div className="mt-16 grid md:grid-cols-2 gap-8">
          {[
            { title: 'TECHNOLOGIES', items: skills.technologies, color: 'var(--cyan)' },
            { title: 'PROFESSIONAL SKILLS', items: skills.professional, color: 'var(--purple)' },
          ].map(({ title, items, color }) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass p-6"
              style={{ border: `1px solid ${color}20` }}
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-1 h-5" style={{ background: color, boxShadow: `0 0 6px ${color}` }} />
                <span className="font-orbitron text-xs font-bold tracking-widest" style={{ color }}>{title}</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {items.map(item => (
                  <span
                    key={item}
                    className="px-3 py-1.5 font-mono text-xs tracking-wider transition-all duration-300 cursor-default hover:scale-105"
                    style={{
                      border: `1px solid ${color}30`,
                      color: `${color}`,
                      background: `${color}08`,
                      clipPath: 'polygon(4px 0%, 100% 0%, calc(100% - 4px) 100%, 0% 100%)',
                    }}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
