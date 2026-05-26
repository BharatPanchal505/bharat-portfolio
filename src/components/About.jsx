import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { personal, stats } from '../data/portfolio'
import { FaMapMarkerAlt, FaEnvelope, FaPhone, FaUniversity } from 'react-icons/fa'

function StatCard({ value, label, delay }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ delay, type: 'spring', stiffness: 100 }}
      className="glass border-neon-cyan p-6 text-center relative overflow-hidden group"
      style={{ clipPath: 'polygon(12px 0%, 100% 0%, calc(100% - 12px) 100%, 0% 100%)' }}
    >
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ background: 'linear-gradient(135deg, rgba(0,245,255,0.05), rgba(191,0,255,0.05))' }} />
      <div className="font-orbitron text-3xl font-black neon-cyan mb-1">{value}</div>
      <div className="font-mono text-xs text-white/40 tracking-widest">{label}</div>
    </motion.div>
  )
}

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-[#030609]" />
      <div className="absolute inset-0 grid-bg opacity-10" />

      {/* Decorative line */}
      <div className="absolute left-0 top-1/2 w-64 h-px opacity-20"
        style={{ background: 'linear-gradient(90deg, var(--cyan), transparent)' }} />
      <div className="absolute right-0 top-1/3 w-48 h-px opacity-20"
        style={{ background: 'linear-gradient(270deg, var(--purple), transparent)' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="font-mono text-xs text-[var(--cyan)] tracking-[0.4em] mb-4 opacity-60">// SECTION_02</p>
          <h2 className="section-title cyber-underline gradient-text-cp">ABOUT ME</h2>
        </motion.div>

        <div ref={ref} className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Info card */}
          <div>
            {/* Profile card */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="glass-purple rounded-none p-8 mb-8 relative overflow-hidden"
              style={{
                clipPath: 'polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 20px 100%, 0 calc(100% - 20px))',
                boxShadow: '0 0 40px rgba(191,0,255,0.1)',
              }}
            >
              {/* Corner accents */}
              <div className="absolute top-0 right-0 w-20 h-20 border-t-2 border-r-2 border-[var(--purple)] opacity-50" />
              <div className="absolute bottom-0 left-0 w-16 h-16 border-b-2 border-l-2 border-[var(--cyan)] opacity-50" />

              {/* Avatar placeholder */}
              <div className="flex items-start gap-6 mb-8">
                <div className="w-20 h-20 flex-shrink-0 relative">
                  <div className="w-full h-full border-2 border-[var(--cyan)] flex items-center justify-center"
                    style={{
                      clipPath: 'polygon(10% 0%, 90% 0%, 100% 10%, 100% 90%, 90% 100%, 10% 100%, 0% 90%, 0% 10%)',
                      background: 'linear-gradient(135deg, rgba(0,245,255,0.1), rgba(191,0,255,0.1))',
                      boxShadow: '0 0 20px rgba(0,245,255,0.3)',
                    }}>
                    <span className="font-orbitron text-2xl font-black gradient-text">BP</span>
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-[#020408]" />
                </div>

                <div>
                  <h3 className="font-orbitron text-xl font-bold text-white mb-1">{personal.shortName}</h3>
                  <p className="font-mono text-xs neon-cyan tracking-widest mb-2">{personal.title}</p>
                  <p className="text-white/40 text-sm font-rajdhani">{personal.subtitle}</p>
                </div>
              </div>

              <p className="text-white/60 font-rajdhani text-base leading-relaxed mb-8">
                {personal.summary}
              </p>

              {/* Contact info */}
              <div className="grid grid-cols-1 gap-3">
                {[
                  { icon: FaMapMarkerAlt, text: personal.location, color: 'var(--cyan)' },
                  { icon: FaEnvelope, text: personal.email, color: 'var(--purple)' },
                  { icon: FaPhone, text: personal.phone, color: 'var(--pink)' },
                  { icon: FaUniversity, text: 'Silver Oak University', color: 'var(--blue)' },
                ].map(({ icon: Icon, text, color }) => (
                  <div key={text} className="flex items-center gap-3 group">
                    <div className="w-8 h-8 flex items-center justify-center flex-shrink-0"
                      style={{ border: `1px solid ${color}40`, background: `${color}10` }}>
                      <Icon size={12} style={{ color }} />
                    </div>
                    <span className="font-mono text-xs text-white/50 group-hover:text-white/80 transition-colors">{text}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right: Stats + code snippet */}
          <div>
            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-4 mb-10">
              {stats.map((stat, i) => (
                <StatCard key={stat.label} {...stat} delay={i * 0.1} />
              ))}
            </div>

            {/* Code-style bio */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="glass border border-[rgba(0,245,255,0.1)] p-6 font-mono text-sm"
              style={{ clipPath: 'polygon(0 0, 100% 0, 100% calc(100% - 16px), calc(100% - 16px) 100%, 0 100%)' }}
            >
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
                <span className="text-white/20 text-xs ml-2">bharat.config.js</span>
              </div>
              <div className="text-white/60 space-y-1 text-xs leading-relaxed">
                <p><span className="text-[var(--purple)]">const</span> <span className="text-[var(--cyan)]">developer</span> = {'{'}</p>
                <p className="pl-4"><span className="text-[var(--pink)]">name</span>: <span className="text-green-400">"Bharat Panchal"</span>,</p>
                <p className="pl-4"><span className="text-[var(--pink)]">role</span>: <span className="text-green-400">"IoT + AI Developer"</span>,</p>
                <p className="pl-4"><span className="text-[var(--pink)]">university</span>: <span className="text-green-400">"Silver Oak"</span>,</p>
                <p className="pl-4"><span className="text-[var(--pink)]">degree</span>: <span className="text-green-400">"MCA"</span>,</p>
                <p className="pl-4"><span className="text-[var(--pink)]">awards</span>: [<span className="text-yellow-400">"AVISHKAR 2.0"</span>, <span className="text-yellow-400">"AVISHKAR 2025"</span>],</p>
                <p className="pl-4"><span className="text-[var(--pink)]">passions</span>: [<span className="text-yellow-400">"IoT"</span>, <span className="text-yellow-400">"AI"</span>, <span className="text-yellow-400">"Teaching"</span>],</p>
                <p className="pl-4"><span className="text-[var(--pink)]">available</span>: <span className="text-orange-400">true</span>,</p>
                <p>{'}'}</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
