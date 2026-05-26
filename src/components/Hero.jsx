import { useEffect, useRef, Suspense } from 'react'
import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import { Canvas, useFrame } from '@react-three/fiber'
import { Sphere, MeshDistortMaterial, Ring, Torus } from '@react-three/drei'
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload } from 'react-icons/fa'
import MatrixRain from './MatrixRain'
import * as THREE from 'three'

function HolographicOrb() {
  const meshRef = useRef()
  const ring1Ref = useRef()
  const ring2Ref = useRef()
  const ring3Ref = useRef()

  useFrame((state) => {
    const t = state.clock.elapsedTime
    if (meshRef.current) {
      meshRef.current.rotation.y = t * 0.3
      meshRef.current.rotation.z = Math.sin(t * 0.4) * 0.1
    }
    if (ring1Ref.current) {
      ring1Ref.current.rotation.x = t * 0.8
      ring1Ref.current.rotation.z = t * 0.3
    }
    if (ring2Ref.current) {
      ring2Ref.current.rotation.y = t * 0.6
      ring2Ref.current.rotation.x = t * 0.4
    }
    if (ring3Ref.current) {
      ring3Ref.current.rotation.z = -t * 0.5
      ring3Ref.current.rotation.y = t * 0.2
    }
  })

  return (
    <group>
      {/* Core sphere */}
      <Sphere ref={meshRef} args={[1, 64, 64]}>
        <MeshDistortMaterial
          color="#00f5ff"
          attach="material"
          distort={0.4}
          speed={2}
          transparent
          opacity={0.15}
          wireframe={false}
        />
      </Sphere>

      {/* Wireframe overlay */}
      <Sphere args={[1.01, 20, 20]}>
        <meshBasicMaterial color="#00f5ff" wireframe transparent opacity={0.12} />
      </Sphere>

      {/* Orbit rings */}
      <Torus ref={ring1Ref} args={[1.8, 0.01, 8, 100]}>
        <meshBasicMaterial color="#00f5ff" transparent opacity={0.6} />
      </Torus>
      <Torus ref={ring2Ref} args={[2.2, 0.008, 8, 100]}>
        <meshBasicMaterial color="#bf00ff" transparent opacity={0.5} />
      </Torus>
      <Torus ref={ring3Ref} args={[1.5, 0.006, 8, 100]}>
        <meshBasicMaterial color="#ff007f" transparent opacity={0.4} />
      </Torus>

      {/* Point lights for glow */}
      <pointLight color="#00f5ff" intensity={2} distance={5} />
      <pointLight color="#bf00ff" intensity={1} distance={8} position={[2, 0, 0]} />
    </group>
  )
}

function Particles() {
  const points = useRef()
  const count = 200

  const positions = new Float32Array(count * 3)
  for (let i = 0; i < count; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 10
    positions[i * 3 + 1] = (Math.random() - 0.5) * 10
    positions[i * 3 + 2] = (Math.random() - 0.5) * 10
  }

  useFrame((state) => {
    if (points.current) {
      points.current.rotation.y = state.clock.elapsedTime * 0.05
    }
  })

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={count} array={positions} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial color="#00f5ff" size={0.04} transparent opacity={0.6} />
    </points>
  )
}

export default function Hero() {
  const heroRef = useRef(null)

  // Parallax on mouse move
  useEffect(() => {
    const el = heroRef.current
    if (!el) return
    const onMove = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 20
      const y = (e.clientY / window.innerHeight - 0.5) * 20
      const canvas = el.querySelector('canvas')
      if (canvas) canvas.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`
    }
    window.addEventListener('mousemove', onMove)
    return () => window.removeEventListener('mousemove', onMove)
  }, [])

  return (
    <section id="hero" ref={heroRef} className="relative min-h-screen flex items-center overflow-hidden">
      {/* Backgrounds */}
      <div className="absolute inset-0 bg-[#020408]" />
      <div className="absolute inset-0 grid-bg opacity-20" />
      <MatrixRain opacity={0.06} />

      {/* Ambient glow blobs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-[120px] opacity-10"
        style={{ background: 'var(--cyan)' }} />
      <div className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full blur-[120px] opacity-8"
        style={{ background: 'var(--purple)' }} />
      <div className="absolute top-1/2 left-1/2 w-64 h-64 rounded-full blur-[100px] opacity-5"
        style={{ background: 'var(--pink)', transform: 'translate(-50%,-50%)' }} />

      {/* Scan line */}
      <motion.div
        className="absolute w-full h-px pointer-events-none"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(0,245,255,0.4), transparent)' }}
        animate={{ y: ['-100vh', '100vh'] }}
        transition={{ repeat: Infinity, duration: 4, ease: 'linear' }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-24 pb-16 grid lg:grid-cols-2 gap-12 items-center w-full">
        {/* Left content */}
        <div>
          {/* Status badge */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-3 mb-8"
          >
            <div className="flex items-center gap-2 px-4 py-2 glass border-neon-cyan rounded-full">
              <motion.span
                className="w-2 h-2 rounded-full bg-green-400"
                animate={{ opacity: [1, 0.3, 1] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
              />
              <span className="font-mono text-xs text-green-400 tracking-widest">AVAILABLE FOR HIRE</span>
            </div>
          </motion.div>

          {/* Name */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <p className="font-mono text-sm text-[var(--cyan)] tracking-[0.3em] mb-3 opacity-70">
              &lt; HELLO, I AM &gt;
            </p>
            <h1 className="font-orbitron text-4xl sm:text-5xl lg:text-6xl font-black mb-2 leading-tight">
              <span className="gradient-text">BHARAT</span>
              <br />
              <span className="text-white/90">PANCHAL</span>
            </h1>
            <div className="w-32 h-0.5 mt-3 mb-6"
              style={{ background: 'linear-gradient(90deg, var(--cyan), transparent)' }} />
          </motion.div>

          {/* Typing animation */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mb-8"
          >
            <div className="font-orbitron text-lg sm:text-xl font-semibold flex items-center gap-3">
              <span className="text-white/50">&gt;</span>
              <TypeAnimation
                sequence={[
                  'IoT Developer', 2000,
                  'AI Enthusiast', 2000,
                  'Teaching Assistant', 2000,
                  'Problem Solver', 2000,
                  'Tech Innovator', 2000,
                ]}
                repeat={Infinity}
                style={{ color: 'var(--cyan)', textShadow: '0 0 20px var(--cyan)' }}
              />
              <motion.span
                className="text-[var(--cyan)] text-2xl"
                animate={{ opacity: [1, 0] }}
                transition={{ repeat: Infinity, duration: 0.8 }}
              >_</motion.span>
            </div>
          </motion.div>

          {/* Summary */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="font-rajdhani text-base text-white/50 leading-relaxed mb-10 max-w-lg"
          >
            MCA student at Silver Oak University. Passionate about building innovative IoT & AI solutions.
            Teaching Assistant with experience mentoring students in Python, C, and web technologies.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            className="flex flex-wrap gap-4 mb-10"
          >
            <button
              onClick={() => document.querySelector('#projects').scrollIntoView({ behavior: 'smooth' })}
              className="btn-cyber"
              data-hover
            >
              <span>VIEW PROJECTS</span>
            </button>
            <a
              href="mailto:bpanchal2002@gmail.com"
              className="btn-cyber-outline flex items-center gap-2"
              data-hover
            >
              <FaDownload size={12} />
              <span>CONTACT ME</span>
            </a>
          </motion.div>

          {/* Social icons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4 }}
            className="flex items-center gap-4"
          >
            <span className="font-mono text-xs text-white/20 tracking-widest">CONNECT</span>
            <div className="w-8 h-px bg-white/10" />
            {[
              { icon: FaGithub, href: 'https://github.com/BharatPanchal505', label: 'GitHub' },
              { icon: FaLinkedin, href: 'https://linkedin.com/in/bharat-panchal-3059a6233', label: 'LinkedIn', color: '#0077b5' },
              { icon: FaEnvelope, href: 'mailto:bpanchal2002@gmail.com', label: 'Email' },
            ].map(({ icon: Icon, href, label, color }) => (
              <a
                key={label}
                href={href}
                data-hover
                aria-label={label}
                className="group w-10 h-10 flex items-center justify-center glass border-neon-cyan transition-all duration-300 hover:scale-110"
                style={{ clipPath: 'polygon(4px 0%, 100% 0%, calc(100% - 4px) 100%, 0% 100%)' }}
              >
                <Icon size={16} style={{ color: 'var(--cyan)' }} />
              </a>
            ))}
          </motion.div>
        </div>

        {/* Right: 3D Canvas */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
          className="relative h-[400px] lg:h-[550px] flex items-center justify-center"
        >
          {/* Outer decorative rings */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-72 h-72 rounded-full border border-[var(--cyan)] opacity-10 animate-pulse" />
            <div className="absolute w-96 h-96 rounded-full border border-[var(--purple)] opacity-5 animate-spin-slow" />
          </div>

          <Canvas camera={{ position: [0, 0, 5], fov: 45 }} style={{ width: '100%', height: '100%' }}>
            <ambientLight intensity={0.2} />
            <Suspense fallback={null}>
              <HolographicOrb />
              <Particles />
            </Suspense>
          </Canvas>

          {/* Floating data cards */}
          {[
            { label: 'AWARDS WON', value: '2', pos: 'top-8 left-0 lg:-left-4', color: 'var(--cyan)' },
            { label: 'PROJECTS', value: '6+', pos: 'bottom-16 left-0 lg:-left-4', color: 'var(--purple)' },
            { label: 'MCA STUDENT', value: '2026', pos: 'top-8 right-0 lg:-right-4', color: 'var(--pink)' },
          ].map(({ label, value, pos, color }) => (
            <motion.div
              key={label}
              className="absolute glass px-4 py-3 float-anim"
              style={{ ...Object.fromEntries(pos.split(' ').map(c => [c.split('-')[0], c.replace(/[a-z]+-/, '')])), border: `1px solid ${color}30` }}
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 3 + Math.random() * 2, ease: 'easeInOut' }}
            >
              <div className="font-mono text-xs opacity-50 mb-1" style={{ color }}>{label}</div>
              <div className="font-orbitron text-lg font-bold" style={{ color, textShadow: `0 0 10px ${color}` }}>{value}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="font-mono text-xs text-white/20 tracking-widest">SCROLL</span>
        <div className="w-px h-12 relative overflow-hidden">
          <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, var(--cyan), transparent)' }} />
          <motion.div
            className="w-full h-4 absolute"
            style={{ background: 'white' }}
            animate={{ y: ['0%', '100%'] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
          />
        </div>
      </motion.div>
    </section>
  )
}
