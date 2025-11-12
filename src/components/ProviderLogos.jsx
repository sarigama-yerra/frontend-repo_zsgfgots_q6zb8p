import { motion } from 'framer-motion'

const providers = [
  { name: 'Vultr' },
  { name: 'Linode' },
  { name: 'OVH' },
  { name: 'CHR' },
  { name: 'KVM' },
]

export default function ProviderLogos() {
  return (
    <section id="providers" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">Supported Providers</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {providers.map((p, idx) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.06 }}
              className="h-20 rounded-xl border border-black/5 bg-gradient-to-br from-gray-50 to-white shadow-sm flex items-center justify-center text-gray-800 font-semibold"
            >
              {p.name}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
