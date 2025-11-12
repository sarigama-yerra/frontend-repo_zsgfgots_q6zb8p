import { motion } from 'framer-motion'
import { Send, MessageSquare, Instagram, Mail } from 'lucide-react'

export default function ContactBar() {
  const items = [
    { label: 'Telegram', href: 'https://t.me/epinprdw', icon: Send },
    { label: 'Testimoni', href: 'https://t.me/pelekah', icon: MessageSquare },
    { label: 'Instagram', href: 'https://instagram.com/accelgyz', icon: Instagram },
    { label: 'Email', href: 'mailto:ovansevfarel@gmail.com', icon: Mail },
  ]

  return (
    <motion.div
      className="flex flex-wrap items-center gap-3"
      initial="hidden"
      animate="show"
      variants={{ hidden: { opacity: 0, y: 8 }, show: { opacity: 1, y: 0, transition: { staggerChildren: 0.06 } } }}
    >
      {items.map((it) => (
        <motion.a
          key={it.label}
          href={it.href}
          target="_blank"
          rel="noreferrer"
          className="relative inline-flex items-center gap-2 px-3 py-2 rounded-xl bg-white/70 backdrop-blur border border-white/50 text-sm font-medium text-gray-700 shadow-sm transition overflow-hidden group"
          whileHover={{ y: -3, scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          variants={{ hidden: { opacity: 0, y: 8 }, show: { opacity: 1, y: 0 } }}
        >
          {/* glow ring */}
          <span className="absolute inset-0 rounded-xl pointer-events-none" style={{ boxShadow: '0 0 0 0 rgba(99,102,241,0.0)' }} />
          {/* shimmer */}
          <span className="pointer-events-none absolute -inset-px rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ background: 'linear-gradient(120deg, rgba(99,102,241,0.15), rgba(56,189,248,0.15))' }} />
          {/* shine sweep */}
          <motion.span
            className="pointer-events-none absolute -inset-8 -left-1/2 top-0 h-[200%] w-1/3 rotate-12 bg-white/40 blur-md"
            initial={{ x: '-120%' }}
            whileHover={{ x: '180%' }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          />

          <span className="relative inline-flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-500 to-cyan-500 text-white shadow-sm">
            <it.icon className="h-4 w-4" />
          </span>
          <span className="relative">{it.label}</span>
        </motion.a>
      ))}
    </motion.div>
  )
}
