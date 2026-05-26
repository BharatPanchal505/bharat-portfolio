import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { projects } from '../data/portfolio'
import { FaGithub, FaExternalLinkAlt, FaTrophy, FaCode } from 'react-icons/fa'

function ProjectCard({ project, index }) {
  const ref = useRef(null)
  const [tilt, setTilt] = useState({ x: 0, y: 0 })
  const [hovered, setHovered] = useState(false)

  const onMouseMove = (e) => {
    const rect = ref.current.getBoundingClientRect()
    const x = ((e.clientY - rect.top) / rect.height - 0.5) * 20
    const y = -((e.clientX - rect.left) / rect.width - 0.5) * 20
    setTilt({ x, y })
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ delay: index * 0.1, duration: 0.7 }}
      ref={ref}
      className="relative tilt-card group cursor-default"
      style={{ perspective: 1000 }}
      onMouseMove={onMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => { setTilt({ x: 0, y: 0 }); setHovered(false) }}
      data-hover
    >
      <motion.div
        animate={{ rotateX: tilt.x, rotateY: tilt.y }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        className="relative overflow-hidden h-full"
        style={{
          background: 'rgba(4, 10, 16, 0.9)',
          border: `1px solid ${project.color}25`,
          clipPath: 'polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 20px 100%, 0 calc(100% - 20px))',
          transformStyle: 'preserve-3d',
          boxShadow: hovered ? `0 0 40px ${project.color}30, 0 20px 60px rgba(0,0,0,0.5)` : '0 4px 20px rgba(0,0,0,0.3)',
          transition: 'box-shadow 0.3s ease',
        }}
      >
        {/* Header */}
        <div className="relative p-6 pb-0">
          <div className="flex items-start justify-between mb-4">
            {/* Icon + number */}
            <div className="flex items-center gap-4">
              <div
                className="w-14 h-14 flex items-center justify-center text-2xl relative"
                style={{
                  border: `1px solid ${project.color}40`,
                  background: `${project.color}10`,
                  clipPath: 'polygon(8px 0%, 100% 0%, calc(100% - 8px) 100%, 0% 100%)',
                }}
              >
                {project.icon}
                {/* Glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{ background: `${project.color}20` }} />
              </div>
              <div>
                <span className="font-mono text-xs opacity-40" style={{ color: project.color }}>
                  PROJECT_{String(project.id).padStart(2, '0')}
                </span>
                {project.achievement && (
                  <div className="flex items-center gap-1 mt-1">
                    <FaTrophy size={10} style={{ color: '#ffd700' }} />
                    <span className="font-mono text-[0.6rem] text-yellow-400">1ST RANK</span>
                  </div>
                )}
              </div>
            </div>

            {/* Links */}
            <div className="flex gap-2">
              <a href={project.github} className="w-8 h-8 glass flex items-center justify-center hover:scale-110 transition-transform"
                style={{ border: `1px solid ${project.color}30` }} data-hover>
                <FaGithub size={13} style={{ color: project.color }} />
              </a>
              <a href={project.demo} className="w-8 h-8 glass flex items-center justify-center hover:scale-110 transition-transform"
                style={{ border: `1px solid ${project.color}30` }} data-hover>
                <FaExternalLinkAlt size={11} style={{ color: project.color }} />
              </a>
            </div>
          </div>

          <h3 className="font-orbitron text-lg font-bold text-white mb-1">{project.title}</h3>
          <p className="font-mono text-xs mb-4" style={{ color: project.color }}>{project.subtitle}</p>

          {/* Divider */}
          <div className="w-full h-px mb-4 opacity-20"
            style={{ background: `linear-gradient(90deg, ${project.color}, transparent)` }} />
        </div>

        {/* Body */}
        <div className="px-6 pb-6">
          <p className="text-white/50 font-rajdhani text-sm leading-relaxed mb-5">
            {project.description}
          </p>

          {/* Highlights */}
          <div className="space-y-2 mb-6">
            {project.highlights.map((h, i) => (
              <div key={i} className="flex items-center gap-2">
                <div className="w-1 h-1 rounded-full flex-shrink-0" style={{ background: project.color }} />
                <span className="font-mono text-xs text-white/40">{h}</span>
              </div>
            ))}
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-1.5">
            {project.tags.map(tag => (
              <span
                key={tag}
                className="px-2 py-0.5 font-mono text-[0.6rem] tracking-wider"
                style={{
                  border: `1px solid ${project.color}25`,
                  color: `${project.color}aa`,
                  background: `${project.color}08`,
                  clipPath: 'polygon(3px 0%, 100% 0%, calc(100% - 3px) 100%, 0% 100%)',
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Achievement banner */}
        {project.achievement && (
          <div className="mx-6 mb-6 flex items-center gap-2 px-4 py-2"
            style={{
              border: '1px solid rgba(255,215,0,0.3)',
              background: 'rgba(255,215,0,0.05)',
              clipPath: 'polygon(6px 0%, 100% 0%, calc(100% - 6px) 100%, 0% 100%)',
            }}>
            <FaTrophy size={12} style={{ color: '#ffd700' }} />
            <span className="font-mono text-[0.6rem] text-yellow-400 tracking-wider">{project.achievement}</span>
          </div>
        )}

        {/* Hover glow overlay */}
        <div
          className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{ background: `radial-gradient(circle at 50% 0%, ${project.color}08, transparent 70%)` }}
        />

        {/* Top border glow */}
        <div
          className="absolute top-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{ background: `linear-gradient(90deg, transparent, ${project.color}, transparent)` }}
        />

        {/* Scan effect */}
        <motion.div
          className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100"
          style={{ background: `linear-gradient(0deg, transparent, ${project.color}08, transparent)` }}
          animate={hovered ? { y: ['-100%', '100%'] } : {}}
          transition={{ repeat: Infinity, duration: 2, ease: 'linear' }}
        />
      </motion.div>
    </motion.div>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-[#020408]" />
      <div className="absolute inset-0 grid-bg opacity-15" />

      {/* Decorative glows */}
      <div className="absolute top-1/4 left-0 w-96 h-96 rounded-full blur-[150px] opacity-5"
        style={{ background: 'var(--cyan)' }} />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 rounded-full blur-[150px] opacity-5"
        style={{ background: 'var(--purple)' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="font-mono text-xs text-[var(--cyan)] tracking-[0.4em] mb-4 opacity-60">// SECTION_05</p>
          <h2 className="section-title cyber-underline gradient-text-cp">PROJECTS</h2>
          <p className="font-rajdhani text-white/40 mt-6 max-w-xl mx-auto">
            Innovative solutions built with IoT, AI, and modern web technologies
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>

        {/* View more button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <a
            href="#"
            className="inline-flex items-center gap-3 btn-cyber text-sm py-3 px-8"
            data-hover
          >
            <FaCode size={14} />
            <span>VIEW ALL ON GITHUB</span>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
