import { motion } from 'framer-motion'
import { ArrowRight, Check, ShoppingCart } from 'lucide-react'

export default function PricingCard({ title, subtitle, specs, price, featured }) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      className={`relative rounded-2xl border backdrop-blur-xl p-6 transition shadow-sm overflow-hidden ${
        featured ? 'bg-white/80 border-indigo-200 ring-2 ring-indigo-300' : 'bg-white/60 border-gray-200'
      }`}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      {/* subtle animated border gradient */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -inset-px rounded-2xl"
        style={{ background: 'linear-gradient(135deg, rgba(99,102,241,0.18), rgba(56,189,248,0.18))' }}
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
      />

      {featured && (
        <div className="absolute -top-3 right-4 inline-flex items-center gap-2 rounded-full bg-indigo-600 text-white px-3 py-1 text-xs font-semibold shadow">
          Best Value
        </div>
      )}

      <div className="relative mb-4">
        <h3 className="text-xl font-bold text-gray-900">{title}</h3>
        {subtitle && <p className="text-sm text-gray-500 mt-1">{subtitle}</p>}
      </div>
      <ul className="relative space-y-2 text-sm">
        {specs.map((s, i) => (
          <motion.li key={i} className="flex items-center gap-2 text-gray-700" animate={{ x: [0, 2, 0] }} transition={{ duration: 3, repeat: Infinity, delay: i * 0.1 }}>
            <Check className="h-4 w-4 text-emerald-500" />
            <span>{s}</span>
          </motion.li>
        ))}
      </ul>
      <div className="relative mt-6 flex items-end justify-between">
        <div>
          <div className="text-3xl font-extrabold text-gray-900">{price}</div>
          <div className="text-xs text-gray-500">per month</div>
        </div>
        <motion.a
          href="https://t.me/epinprdw"
          target="_blank"
          rel="noreferrer"
          className="relative inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-4 py-2 text-white font-semibold hover:bg-indigo-700 active:scale-95 overflow-hidden"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          {/* shine */}
          <motion.span
            className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-white/0 via-white/30 to-white/0"
            whileHover={{ translateX: '100%' }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
          />
          <ShoppingCart className="h-4 w-4" />
          Beli Sekarang
          <ArrowRight className="h-4 w-4" />
        </motion.a>
      </div>
    </motion.div>
  )
}
