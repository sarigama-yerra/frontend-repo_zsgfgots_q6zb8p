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

  const kvmSingle = useMemo(
    () => [
      { title: 'KVM Satuan 2 GB', subtitle: 'Aktif 6 bulan • Bisa perpanjang', specs: ['2 GB RAM', '1 vCPU', '25 GB SSD', '1 TB Bandwidth'], price: 'IDR 215.000' },
      { title: 'KVM Satuan 4 GB', subtitle: 'Aktif 6 bulan • Bisa perpanjang', specs: ['4 GB RAM', '1 vCPU', '50 GB SSD', '2 TB Bandwidth'], price: 'IDR 350.000' },
      { title: 'KVM Satuan 8 GB', subtitle: 'Aktif 6 bulan • Bisa perpanjang', specs: ['8 GB RAM', '2 vCPU', '75 GB SSD', '4 TB Bandwidth'], price: 'IDR 650.000' },
      { title: 'KVM Satuan 16 GB', subtitle: 'Aktif 6 bulan • Bisa perpanjang', specs: ['16 GB RAM', '4 vCPU', '125 GB SSD', '6 TB Bandwidth'], price: 'IDR 1.500.000' },
    ],
    []
  )

  const linodePlans = useMemo(
    () => [
      { title: 'Linode 1 GB', specs: ['1 Public IP', 'Root Access', '1 CPU', '1 GB RAM', '25 GB SSD', '1 TB Bandwidth', '40/1 Gbps In/Out'], price: 'IDR 125.000' },
      { title: 'Linode 2 GB', specs: ['1 Public IP', 'Root Access', '1 CPU', '2 GB RAM', '50 GB SSD', '2 TB Bandwidth', '40/2 Gbps In/Out'], price: 'IDR 245.000' },
      { title: 'Linode 4 GB', specs: ['1 Public IP', 'Root Access', '2 CPU', '4 GB RAM', '80 GB SSD', '4 TB Bandwidth', '40/4 Gbps In/Out'], price: 'IDR 500.000' },
      { title: 'Linode 8 GB', specs: ['1 Public IP', 'Root Access', '4 CPU', '8 GB RAM', '160 GB SSD', '5 TB Bandwidth', '40/5 Gbps In/Out'], price: 'IDR 1.000.000' },
    ],
    []
  )

  const ovhAmdPlans = useMemo(
    () => [
      { title: 'OVH AMD 2 GB', subtitle: 'Location SG, AU, CA, UK', specs: ['Root Access', '1 Public IP', '2 CPU', '2 GB RAM', '40 GB NVMe', '500 Mbit/s'], price: 'IDR 125.000' },
      { title: 'OVH AMD 4 GB', subtitle: 'Location SG, AU, CA, UK', specs: ['Root Access', '1 Public IP', '4 CPU', '4 GB RAM', '80 GB NVMe', '1 Gbit/s'], price: 'IDR 225.000', featured: true },
      { title: 'OVH AMD 16 GB', subtitle: 'Location SG, AU, CA, UK', specs: ['Root Access', '1 Public IP', '16 CPU', '16 GB RAM', '160 GB NVMe', '1 Gbit/s'], price: 'IDR 950.000' },
    ],
    []
  )

  const ovhIntelPlans = useMemo(
    () => [
      { title: 'OVH Intel 2 GB', subtitle: 'Location SG, AU, CA, UK', specs: ['Root Access', '1 Public IP', '1 CPU', '2 GB RAM', '40 GB NVMe', '250 Mbit/s'], price: 'IDR 150.000' },
      { title: 'OVH Intel 4 GB', subtitle: 'Location SG, AU, CA, UK', specs: ['Root Access', '1 Public IP', '2 CPU', '4 GB RAM', '80 GB NVMe', '500 Mbit/s'], price: 'IDR 300.000' },
      { title: 'OVH Intel 8 GB', subtitle: 'Location SG, AU, CA, UK', specs: ['Root Access', '1 Public IP', '4 CPU', '8 GB RAM', '160 GB NVMe', '1 Gbit/s'], price: 'IDR 550.000' },
    ],
    []
  )

  const vultrPlans = useMemo(
    () => [
      { title: 'Vultr 1 GB', specs: ['1 Public IP', 'Root Access', '1 vCPU', '1 GB RAM', '25 GB NVMe', '1 TB Bandwidth'], price: 'IDR 125.000' },
      { title: 'Vultr 2 GB', specs: ['1 Public IP', 'Root Access', '1 vCPU', '2 GB RAM', '55 GB NVMe', '2 TB Bandwidth'], price: 'IDR 225.000' },
      { title: 'Vultr 4 GB', specs: ['1 Public IP', 'Root Access', '2 vCPU', '4 GB RAM', '80 GB NVMe', '3 TB Bandwidth'], price: 'IDR 425.000' },
      { title: 'Vultr 8 GB', specs: ['1 Public IP', 'Root Access', '4 vCPU', '8 GB RAM', '160 GB NVMe', '4 TB Bandwidth'], price: 'IDR 825.000' },
      { title: 'Vultr 16 GB', specs: ['1 Public IP', 'Root Access', '6 vCPU', '16 GB RAM', '320 GB NVMe', '5 TB Bandwidth'], price: 'IDR 1.900.000' },
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
        <div className="mt-6 text-sm text-gray-600">Tersedia juga periode 3 bulan, 6 bulan, dan 1 tahun.</div>
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
            <li>Paket KVM dapat dibagi sesuai kebutuhan, misal 5 VPS dibagi 10 GB RAM atau digabung.</li>
          </ul>
        </div>
      </Section>

      <Section>
        <h2 className="text-2xl sm:text-3xl font-bold mb-6">VPS KVM Satuan</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {kvmSingle.map((p, i) => (
            <PricingCard key={i} {...p} />
          ))}
        </div>
      </Section>

      <Section>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl sm:text-3xl font-bold">VPS Linode</h2>
          <div className="text-sm text-gray-600">Region pilihan banyak</div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {linodePlans.map((p, i) => (
            <PricingCard key={i} {...p} />
          ))}
        </div>
      </Section>

      <Section>
        <h2 className="text-2xl sm:text-3xl font-bold mb-6">OVH VPS AMD</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {ovhAmdPlans.map((p, i) => (
            <PricingCard key={i} {...p} />
          ))}
        </div>
      </Section>

      <Section>
        <h2 className="text-2xl sm:text-3xl font-bold mb-6">OVH VPS Intel</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {ovhIntelPlans.map((p, i) => (
            <PricingCard key={i} {...p} />
          ))}
        </div>
      </Section>

      <Section>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl sm:text-3xl font-bold">Vultr VPS</h2>
          <div className="text-sm text-gray-600">Region pilihan banyak</div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {vultrPlans.map((p, i) => (
            <PricingCard key={i} {...p} />
          ))}
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
