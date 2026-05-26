import { useEffect, useRef } from 'react'

export default function MatrixRain({ opacity = 0.07 }) {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let animId

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    const chars = '01アイウエオカキクケコIoT>_{}[]</>def class import export const let var'
    const fontSize = 13
    const cols = Math.floor(canvas.width / fontSize)
    const drops = Array(cols).fill(1)

    const draw = () => {
      ctx.fillStyle = 'rgba(2, 4, 8, 0.06)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)
      ctx.font = `${fontSize}px 'Share Tech Mono', monospace`

      drops.forEach((y, i) => {
        const char = chars[Math.floor(Math.random() * chars.length)]
        const x = i * fontSize

        // Gradient coloring
        if (Math.random() > 0.97) {
          ctx.fillStyle = '#ffffff'
        } else if (Math.random() > 0.7) {
          ctx.fillStyle = '#00f5ff'
        } else {
          ctx.fillStyle = 'rgba(0, 245, 255, 0.4)'
        }

        ctx.fillText(char, x, y * fontSize)

        if (y * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0
        }
        drops[i]++
      })

      animId = requestAnimationFrame(draw)
    }

    draw()
    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      style={{ opacity, position: 'absolute', inset: 0, pointerEvents: 'none' }}
    />
  )
}
