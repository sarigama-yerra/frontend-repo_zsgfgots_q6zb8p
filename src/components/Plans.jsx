import { motion } from 'framer-motion'

const plans = [
  {
    group: 'OVH Intel',
    items: [
      { cpu: '1 CPU', ram: '2 GB RAM', storage: '40 GB NVMe', bandwidth: '250 Mbit/s', locations: 'SG, AU, CA, UK', price: 'IDR 150.000', cta: 'Order' },
      { cpu: '2 CPU', ram: '4 GB RAM', storage: '80 GB NVMe', bandwidth: '500 Mbit/s', locations: 'SG, AU, CA, UK', price: 'IDR 300.000', cta: 'Order' },
      { cpu: '4 CPU', ram: '8 GB RAM', storage: '160 GB NVMe', bandwidth: '1 Gbit/s', locations: 'SG, AU, CA, UK', price: 'IDR 550.000', cta: 'Order' },
    ],
  },
  {
    group: 'Vultr VPS',
    note: 'Dapat diperpanjang',
    items: [
      { cpu: '1 vCPU', ram: '1 GB RAM', storage: '25 GB NVMe', bandwidth: '1.00 TB', price: 'IDR 125.000', cta: 'Order' },
      { cpu: '1 vCPU', ram: '2 GB RAM', storage: '55 GB NVMe', bandwidth: '2.00 TB', price: 'IDR 225.000', cta: 'Order' },
      { cpu: '2 vCPU', ram: '4 GB RAM', storage: '80 GB NVMe', bandwidth: '3.00 TB', price: 'IDR 425.000', cta: 'Order' },
      { cpu: '4 vCPU', ram: '8 GB RAM', storage: '160 GB NVMe', bandwidth: '4.00 TB', price: 'IDR 825.000', cta: 'Order' },
      { cpu: '6 vCPU', ram: '16 GB RAM', storage: '320 GB NVMe', bandwidth: '5.00 TB', price: 'IDR 1.900.000', cta: 'Order' },
    ],
  },
]

export default function Plans() {
  return (
    <section id="plans" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-10">
          <div>
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">VPS Plans</h2>
            <p className="text-gray-600">Region tersedia banyak. Semua paket termasuk 1 IP Public dan akses root.</p>
          </div>
          <a href="#contact" className="hidden sm:inline-flex px-4 py-2 rounded-md bg-gray-900 text-white hover:bg-black transition">Butuh bantuan?</a>
        </div>

        <div className="space-y-12">
          {plans.map((planGroup, idx) => (
            <div key={idx}>
              <div className="flex items-center gap-3 mb-6">
                <h3 className="text-xl font-bold text-gray-900">{planGroup.group}</h3>
                {planGroup.note && <span className="text-sm text-gray-600">{planGroup.note}</span>}
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {planGroup.items.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.06 }}
                    className="rounded-2xl border border-black/5 bg-white shadow-sm p-6 hover:shadow-md transition"
                  >
                    <div className="space-y-2 text-gray-800">
                      <p className="font-semibold">{item.cpu}</p>
                      <p>{item.ram}</p>
                      <p>{item.storage}</p>
                      <p>{item.bandwidth} Bandwidth</p>
                      {item.locations && <p>Lokasi: {item.locations}</p>}
                    </div>
                    <div className="mt-6 flex items-center justify-between">
                      <p className="text-xl font-bold text-gray-900">{item.price}</p>
                      <a href="https://t.me/epinprdw" target="_blank" rel="noreferrer" className="px-4 py-2 rounded-md bg-gray-900 text-white hover:bg-black transition">{item.cta}</a>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
