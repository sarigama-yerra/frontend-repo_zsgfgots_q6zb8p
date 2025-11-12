import { motion } from 'framer-motion'
import { Server, Cloud, SquareStack, Network, Boxes } from 'lucide-react'

const providers = [
  { name: 'Vultr', icon: Cloud, color: 'from-sky-400 to-blue-500' },
  { name: 'Linode', icon: Boxes, color: 'from-emerald-400 to-teal-500' },
  { name: 'CHR', icon: Network, color: 'from-violet-400 to-fuchsia-500' },
  { name: 'OVH', icon: Server, color: 'from-indigo-400 to-purple-500' },
  { name: 'KVM', icon: SquareStack, color: 'from-amber-400 to-orange-500' },
]

export default function AnimatedLogos() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
      {providers.map((p, i) => (
        <motion.div
          key={p.name}
          className="group"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: [0, -6, 0] }}
          transition={{ delay: i * 0.05, duration: 3 + (i % 3), repeat: Infinity, ease: 'easeInOut' }}
          whileHover={{ scale: 1.04 }}
        >
          <div className="flex items-center gap-3 p-3 rounded-xl bg-white/70 backdrop-blur border border-white/40 shadow-sm">
            <div className={`inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br ${p.color}`}>
              <p.icon className="h-6 w-6 text-white" />
            </div>
            <div>
              <div className="font-semibold text-gray-800">{p.name}</div>
              <div className="text-xs text-gray-500">Virtual Servers</div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  )
}
