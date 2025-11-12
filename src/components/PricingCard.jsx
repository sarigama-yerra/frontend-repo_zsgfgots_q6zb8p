import { motion } from 'framer-motion'
import { ArrowRight, Check, ShoppingCart } from 'lucide-react'

export default function PricingCard({ title, subtitle, specs, price, featured }) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      className={`relative rounded-2xl border backdrop-blur-xl p-6 transition shadow-sm ${
        featured ? 'bg-white/80 border-indigo-200 ring-2 ring-indigo-300' : 'bg-white/60 border-gray-200'
      }`}
    >
      {featured && (
        <div className="absolute -top-3 right-4 inline-flex items-center gap-2 rounded-full bg-indigo-600 text-white px-3 py-1 text-xs font-semibold shadow">
          Best Value
        </div>
      )}
      <div className="mb-4">
        <h3 className="text-xl font-bold text-gray-900">{title}</h3>
        {subtitle && <p className="text-sm text-gray-500 mt-1">{subtitle}</p>}
      </div>
      <ul className="space-y-2 text-sm">
        {specs.map((s, i) => (
          <li key={i} className="flex items-center gap-2 text-gray-700">
            <Check className="h-4 w-4 text-emerald-500" />
            <span>{s}</span>
          </li>
        ))}
      </ul>
      <div className="mt-6 flex items-end justify-between">
        <div>
          <div className="text-3xl font-extrabold text-gray-900">{price}</div>
          <div className="text-xs text-gray-500">per month</div>
        </div>
        <a href="https://t.me/epinprdw" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-4 py-2 text-white font-semibold hover:bg-indigo-700 active:scale-95">
          <ShoppingCart className="h-4 w-4" />
          Beli Sekarang
          <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </motion.div>
  )
}
