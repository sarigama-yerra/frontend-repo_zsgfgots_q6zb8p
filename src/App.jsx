import { useMemo } from 'react'
import { motion } from 'framer-motion'
import FloatingBackground from './components/FloatingBackground'
import AnimatedLogos from './components/AnimatedLogos'
import PricingCard from './components/PricingCard'
import ContactBar from './components/ContactBar'

function Section({ children, className = '' }) {
  return (
    <section className={`relative py-14 sm:py-20 ${className}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">{children}</div>
    </section>
  )
}

export default function App() {
  const chrPlans = useMemo(
    () => [
      {
        title: 'VPS CHR Singapore Unmetered',
        subtitle: 'Equinix SG1',
        specs: ['2 GB RAM', '15 GB SSD', '2 Cores', '1 Dedicated IPv4', 'Shared 200 Mbps Unmetered'],
        price: 'Rp 550.000',
        featured: true,
      },
      {
        title: 'VPS CHR Indonesia Unmetered',
        subtitle: 'Gedung Tifa, Jakarta',
        specs: ['2 GB RAM', '15 GB SSD', '2 Cores', '1 Dedicated IPv4', 'Dedicated 300 Mbps Unmetered'],
        price: 'Rp 550.000',
      },
    ],
    []
  )

  const sellingVps = useMemo(
    () => [
      { title: 'Starter', specs: ['1 CPU Core', '1 GB RAM', '15 GB SSD'], price: 'Rp 25.000' },
      { title: 'Basic', specs: ['1 CPU Core', '2 GB RAM', '20 GB SSD'], price: 'Rp 35.000' },
      { title: 'Standard', specs: ['2 CPU Cores', '4 GB RAM', '50 GB SSD'], price: 'Rp 60.000' },
      { title: 'Pro', specs: ['4 CPU Cores', '8 GB RAM', '100 GB SSD'], price: 'Rp 120.000' },
      { title: 'Ultra', specs: ['8 CPU Cores', '16 GB RAM', '200 GB SSD'], price: 'Rp 225.000' },
      { title: 'Extreme', specs: ['16 CPU Cores', '32 GB RAM', '400 GB SSD'], price: 'Rp 450.000' },
    ],
    []
  )

  const kvmBundles = useMemo(
    () => [
      { title: '5 VPS KVM', subtitle: 'Bisa perpanjang', specs: ['10 GB RAM', '5 vCPU', '125 GB SSD', '5 TB Bandwidth', 'Dedicated IPv6', 'NVMe Storage'], price: 'IDR 215.000' },
      { title: '10 VPS KVM', subtitle: 'Bisa perpanjang', specs: ['20 GB RAM', '10 vCPU', '250 GB SSD', '10 TB Bandwidth', 'Dedicated IPv6', 'NVMe Storage'], price: 'IDR 350.000', featured: true },
      { title: '15 VPS KVM', subtitle: 'Bisa perpanjang', specs: ['30 GB RAM', '15 vCPU', '375 GB SSD', '15 TB Bandwidth', 'Dedicated IPv6', 'NVMe Storage'], price: 'IDR 500.000' },
    ],
    []
  )

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 via-white to-blue-50 text-gray-900">
      <FloatingBackground />

      <Section className="pt-24">
        <div className="flex flex-col items-center text-center gap-6">
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/60 px-3 py-1 text-sm font-medium backdrop-blur">
            <span>Dedicated Server • Anti DDoS • Bisa Perpanjang</span>
          </motion.div>

          <motion.h1 initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.05, duration: 0.7 }} className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Solusi VPS Premium untuk Bisnis dan Developer
          </motion.h1>

          <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.7 }} className="max-w-3xl text-base sm:text-lg text-gray-600">
            Region pilihan banyak. Performa tinggi, network cepat, dan dukungan penuh.
          </motion.p>

          <AnimatedLogos />

          <ContactBar />
        </div>
      </Section>

      <Section>
        <h2 className="text-2xl sm:text-3xl font-bold mb-6">Paket VPS CHR Unmetered</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {chrPlans.map((p, i) => (
            <PricingCard key={i} {...p} />
          ))}
        </div>
      </Section>

      <Section>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl sm:text-3xl font-bold">Selling VPS Bulanan</h2>
          <a href="https://t.me/epinprdw" target="_blank" rel="noreferrer" className="text-indigo-600 hover:text-indigo-700 font-semibold">Hubungi Penjualan</a>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {sellingVps.map((p, i) => (
            <PricingCard key={i} {...p} />
          ))}
        </div>
      </Section>

      <Section>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl sm:text-3xl font-bold">Paket KVM Server</h2>
          <div className="text-sm text-gray-600">Bisa perpanjang • CPU AMD Ryzen 7</div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {kvmBundles.map((p, i) => (
            <PricingCard key={i} {...p} />
          ))}
        </div>
        <div className="mt-6 text-sm text-gray-600 max-w-4xl">
          <p className="mb-2 font-semibold">Catatan:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Garansi 30 hari selama VPS aktif dan tidak abuse.</li>
            <li>Harga dapat berubah sewaktu-waktu.</li>
            <li>Paket KVM dapat dibagi sesuai kebutuhan misal 5 VPS dibagi 10 GB RAM atau digabung.</li>
          </ul>
        </div>
      </Section>

      <footer className="relative py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 items-start">
            <div>
              <div className="text-lg font-bold">Accelgyz Hosting</div>
              <p className="text-sm text-gray-600 mt-2">Penyedia VPS cepat dan andal. Jaringan luas, performa tinggi, support ramah.</p>
            </div>
            <div>
              <div className="text-sm font-semibold mb-2">Kontak</div>
              <ContactBar />
            </div>
            <div>
              <div className="text-sm font-semibold mb-2">Legal</div>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>T.O.S bisa menghubungi kontak di atas</li>
                <li>Semua server dedicated</li>
                <li>Anti DDoS IP</li>
              </ul>
            </div>
          </div>
          <div className="mt-8 text-xs text-gray-500">© {new Date().getFullYear()} Accelgyz Hosting. All rights reserved.</div>
        </div>
      </footer>
    </div>
  )
}
