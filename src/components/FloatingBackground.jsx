import { motion } from 'framer-motion'

export default function FloatingBackground() {
  const orbs = Array.from({ length: 18 })

  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      {/* layered gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(1200px_500px_at_50%_-20%,rgba(99,102,241,0.25),transparent),radial-gradient(800px_400px_at_80%_120%,rgba(56,189,248,0.18),transparent),radial-gradient(900px_600px_at_0%_100%,rgba(59,130,246,0.12),transparent)]" />

      {orbs.map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-gradient-to-br from-indigo-400/30 to-cyan-300/30 blur-2xl"
          style={{
            width: 220 + (i % 6) * 40,
            height: 220 + (i % 6) * 40,
            top: `${(i * 11) % 100}%`,
            left: `${(i * 23) % 100}%`,
          }}
          initial={{ y: 0, x: 0, opacity: 0.35, scale: 1 }}
          animate={{
            y: [0, -25, 0],
            x: [0, 15, 0],
            opacity: [0.35, 0.55, 0.35],
            scale: [1, 1.05, 1],
          }}
          transition={{ duration: 10 + (i % 6), repeat: Infinity, ease: 'easeInOut' }}
        />
      ))}

      {/* parallax sparkles */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 60 }).map((_, i) => (
          <motion.span
            key={i}
            className="absolute h-[2px] w-[2px] rounded-full bg-white/60"
            style={{ top: `${(i * 7) % 100}%`, left: `${(i * 13) % 100}%` }}
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 2 + (i % 5) * 0.6, delay: i * 0.03, repeat: Infinity }}
          />
        ))}
      </div>

      <div className="absolute inset-0 backdrop-blur-[2px]" />
      <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-transparent to-white/40" />
    </div>
  )
}
