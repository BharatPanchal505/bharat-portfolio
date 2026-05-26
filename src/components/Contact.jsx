import { useState } from 'react'
import { motion } from 'framer-motion'
import { personal } from '../data/portfolio'
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa'

const socials = [
  { icon: FaGithub, href: 'https://github.com/BharatPanchal505', label: 'GitHub', color: 'var(--cyan)' },
  { icon: FaLinkedin, href: 'https://linkedin.com/in/bharat-panchal-3059a6233', label: 'LinkedIn', color: '#0077b5' },
  { icon: FaEnvelope, href: `mailto:${personal.email}`, label: 'Email', color: 'var(--pink)' },
  { icon: FaPhone, href: `tel:${personal.phone}`, label: 'Phone', color: 'var(--purple)' },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [sending, setSending] = useState(false)
  const [sent, setSent] = useState(false)
  const [focused, setFocused] = useState(null)

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

const handleSubmit = async (e) => {
  e.preventDefault()

  setSending(true)

  const formData = {
    access_key: 'baaf343f-0bbf-4ffc-aa09-4080a8ae5c36',
    name: form.name,
    email: form.email,
    subject: form.subject,
    message: form.message,
  }

  try {
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(formData),
    })

    const result = await response.json()

    if (result.success) {
      setSent(true)
      setForm({
        name: '',
        email: '',
        subject: '',
        message: '',
      })

      setTimeout(() => setSent(false), 4000)
    }
  } catch (error) {
    console.log(error)
  }

  setSending(false)
}
  return (
    <section id="contact" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-[#030609]" />
      <div className="absolute inset-0 grid-bg opacity-10" />

      {/* Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full blur-[150px] opacity-8"
        style={{ background: 'var(--cyan)' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="font-mono text-xs text-[var(--cyan)] tracking-[0.4em] mb-4 opacity-60">// SECTION_08</p>
          <h2 className="section-title cyber-underline gradient-text-cp">CONTACT</h2>
          <p className="font-rajdhani text-white/40 mt-6 max-w-lg mx-auto">
            Available for opportunities, collaborations, and tech discussions
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left: info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="mb-10">
              <h3 className="font-orbitron text-xl font-bold text-white mb-4">LET'S BUILD SOMETHING</h3>
              <p className="text-white/50 font-rajdhani text-base leading-relaxed">
                Whether you have a project in mind, want to collaborate on IoT or AI solutions,
                or just want to connect — I'm always open to new conversations.
              </p>
            </div>

            {/* Contact cards */}
            <div className="space-y-4 mb-10">
              {[
                { icon: FaEnvelope, label: 'Email', value: personal.email, color: 'var(--cyan)' },
                { icon: FaPhone, label: 'Phone', value: personal.phone, color: 'var(--purple)' },
                { icon: FaMapMarkerAlt, label: 'Location', value: personal.location, color: 'var(--pink)' },
              ].map(({ icon: Icon, label, value, color }) => (
                <motion.div
                  key={label}
                  whileHover={{ x: 6 }}
                  className="flex items-center gap-4 p-4 group"
                  style={{
                    border: `1px solid ${color}20`,
                    background: `${color}04`,
                    clipPath: 'polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px))',
                  }}
                >
                  <div className="w-10 h-10 flex items-center justify-center flex-shrink-0"
                    style={{ border: `1px solid ${color}40`, background: `${color}10` }}>
                    <Icon size={14} style={{ color }} />
                  </div>
                  <div>
                    <div className="font-mono text-[0.6rem] tracking-widest opacity-50 mb-0.5" style={{ color }}>{label}</div>
                    <div className="font-rajdhani text-sm text-white/70">{value}</div>
                  </div>
                  <div className="ml-auto w-4 h-px group-hover:w-8 transition-all duration-300"
                    style={{ background: color }} />
                </motion.div>
              ))}
            </div>

            {/* Socials */}
            <div>
              <p className="font-mono text-xs text-white/20 tracking-widest mb-4">FIND ME ON</p>
              <div className="flex gap-3">
                {socials.map(({ icon: Icon, href, label, color }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    data-hover
                    className="group w-12 h-12 flex items-center justify-center glass transition-all duration-300 hover:scale-110"
                    style={{
                      border: `1px solid ${color}30`,
                      clipPath: 'polygon(6px 0%, 100% 0%, calc(100% - 6px) 100%, 0% 100%)',
                    }}
                  >
                    <Icon size={16} style={{ color }} />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name + Email */}
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { name: 'name', placeholder: 'YOUR_NAME', type: 'text' },
                  { name: 'email', placeholder: 'EMAIL_ADDR', type: 'email' },
                ].map(field => (
                  <div key={field.name} className="relative">
                    <label className="block font-mono text-[0.6rem] text-white/30 tracking-widest mb-2">
                      {field.placeholder}
                    </label>
                    <input
                      type={field.type}
                      name={field.name}
                      value={form[field.name]}
                      onChange={handleChange}
                      onFocus={() => setFocused(field.name)}
                      onBlur={() => setFocused(null)}
                      placeholder={`// ${field.placeholder}`}
                      required
                      className="cyber-input"
                    />
                    {focused === field.name && (
                      <motion.div
                        layoutId="input-focus"
                        className="absolute bottom-0 left-0 right-0 h-px"
                        style={{ background: 'var(--cyan)', boxShadow: '0 0 8px var(--cyan)' }}
                      />
                    )}
                  </div>
                ))}
              </div>

              {/* Subject */}
              <div className="relative">
                <label className="block font-mono text-[0.6rem] text-white/30 tracking-widest mb-2">SUBJECT</label>
                <input
                  type="text"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  onFocus={() => setFocused('subject')}
                  onBlur={() => setFocused(null)}
                  placeholder="// RE: COLLABORATION_REQUEST"
                  required
                  className="cyber-input"
                />
                {focused === 'subject' && (
                  <motion.div layoutId="input-focus"
                    className="absolute bottom-0 left-0 right-0 h-px"
                    style={{ background: 'var(--cyan)', boxShadow: '0 0 8px var(--cyan)' }} />
                )}
              </div>

              {/* Message */}
              <div className="relative">
                <label className="block font-mono text-[0.6rem] text-white/30 tracking-widest mb-2">MESSAGE</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  onFocus={() => setFocused('message')}
                  onBlur={() => setFocused(null)}
                  placeholder="// ENTER_YOUR_MESSAGE"
                  required
                  rows={6}
                  className="cyber-input resize-none"
                />
                {focused === 'message' && (
                  <motion.div layoutId="input-focus"
                    className="absolute bottom-0 left-0 right-0 h-px"
                    style={{ background: 'var(--cyan)', boxShadow: '0 0 8px var(--cyan)' }} />
                )}
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={sending || sent}
                className="w-full btn-cyber py-4 flex items-center justify-center gap-3 text-sm"
                data-hover
              >
                {sent ? (
                  <span>✓ MESSAGE_TRANSMITTED</span>
                ) : sending ? (
                  <span className="flex items-center gap-3">
                    <motion.div
                      className="w-4 h-4 border border-current border-t-transparent rounded-full"
                      animate={{ rotate: 360 }}
                      transition={{ repeat: Infinity, duration: 0.8, ease: 'linear' }}
                    />
                    TRANSMITTING...
                  </span>
                ) : (
                  <>
                    <FaPaperPlane size={12} />
                    <span>TRANSMIT MESSAGE</span>
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
