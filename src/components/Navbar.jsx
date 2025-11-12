import { motion } from 'framer-motion'

export default function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-40 backdrop-blur bg-white/70 border-b border-black/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <motion.a href="#" className="text-xl font-extrabold tracking-tight"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          AccelVPS
        </motion.a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-gray-700">
          <a href="#providers" className="hover:text-gray-900 transition">Providers</a>
          <a href="#plans" className="hover:text-gray-900 transition">Plans</a>
          <a href="#contact" className="hover:text-gray-900 transition">Contact</a>
          <a href="/test" className="hover:text-gray-900 transition">System Test</a>
        </nav>
        <a href="https://t.me/epinprdw" target="_blank" rel="noreferrer" className="inline-flex items-center px-4 py-2 rounded-md bg-gray-900 text-white hover:bg-black transition text-sm">
          Order via Telegram
        </a>
      </div>
    </header>
  )
}
