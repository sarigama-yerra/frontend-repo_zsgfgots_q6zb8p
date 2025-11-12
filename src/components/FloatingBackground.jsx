import { motion } from 'framer-motion'

export default function FloatingBackground() {
  const orbs = Array.from({ length: 14 })

  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(1200px_500px_at_50%_-20%,rgba(99,102,241,0.25),transparent),radial-gradient(800px_400px_at_80%_120%,rgba(56,189,248,0.2),transparent)]" />
      {orbs.map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-gradient-to-br from-indigo-400/30 to-cyan-300/30 blur-2xl"
          style={{
            width: 240 + (i % 5) * 30,
            height: 240 + (i % 5) * 30,
            top: `${(i * 13) % 100}%`,
            left: `${(i * 29) % 100}%`,
          }}
          initial={{ y: 0, x: 0, opacity: 0.4 }}
          animate={{ y: [0, -20, 0], x: [0, 10, 0], opacity: [0.4, 0.6, 0.4] }}
          transition={{ duration: 8 + (i % 5), repeat: Infinity, ease: 'easeInOut' }}
        />
      ))}
      <div className="absolute inset-0 backdrop-blur-[2px]" />
      <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-transparent to-white/40" />
    </div>
  )
}
