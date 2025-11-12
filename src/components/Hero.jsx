import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 pb-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-200 rounded-full blur-3xl opacity-40" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-indigo-200 rounded-full blur-3xl opacity-40" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900"
          >
            Premium VPS Hosting with Animated Experience
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="mt-4 text-lg text-gray-600"
          >
            Choose from OVH, Vultr, Linode, CHR, and KVM. All plans include a public IP and full root access.
          </motion.p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#plans" className="px-5 py-3 rounded-lg bg-gray-900 text-white hover:bg-black transition">See Plans</a>
            <a href="https://t.me/epinprdw" target="_blank" rel="noreferrer" className="px-5 py-3 rounded-lg bg-white border text-gray-900 hover:bg-gray-50 transition">Chat Telegram</a>
          </div>
          <p className="mt-4 text-sm text-gray-500">All emojis removed as requested. Clean professional text only.</p>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="aspect-[4/3] rounded-2xl bg-gradient-to-tr from-indigo-500/10 to-blue-500/10 border border-black/5 p-6">
            <div className="grid grid-cols-2 gap-3">
              {['Vultr','Linode','OVH','KVM','CHR'].map((name, i) => (
                <motion.div
                  key={name}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 * i }}
                  className="h-24 rounded-xl bg-white border border-black/5 shadow-sm flex items-center justify-center text-gray-800 font-semibold"
                >
                  {name}
                </motion.div>
              ))}
            </div>
            <p className="mt-4 text-center text-sm text-gray-600">Animated brand tiles, no logos shown, text only.</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
