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
    <div className="flex flex-wrap items-center gap-3">
      {items.map((it, i) => (
        <motion.a
          key={it.label}
          href={it.href}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-white/70 backdrop-blur border border-white/50 text-sm font-medium text-gray-700 hover:bg-white"
          whileHover={{ y: -3 }}
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.05 }}
        >
          <it.icon className="h-4 w-4 text-indigo-600" />
          {it.label}
        </motion.a>
      ))}
    </div>
  )
}
