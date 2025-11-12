import { motion } from 'framer-motion'

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12">
        <div>
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">Hubungi Kami</h2>
          <p className="mt-2 text-gray-600">Pesan sekarang melalui Telegram atau hubungi kanal lain yang tersedia.</p>
          <div className="mt-6 space-y-3 text-gray-800">
            <p>Telegram: <a href="https://t.me/epinprdw" className="text-blue-600 hover:underline" target="_blank" rel="noreferrer">https://t.me/epinprdw</a></p>
            <p>Testimoni: <a href="https://t.me/pelekah" className="text-blue-600 hover:underline" target="_blank" rel="noreferrer">https://t.me/pelekah</a></p>
            <p>Instagram: <a href="https://instagram.com/accelgyz" className="text-blue-600 hover:underline" target="_blank" rel="noreferrer">https://instagram.com/accelgyz</a></p>
            <p>Email: <a href="mailto:ovansevfarel@gmail.com" className="text-blue-600 hover:underline">ovansevfarel@gmail.com</a></p>
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="rounded-2xl border border-black/5 bg-gradient-to-br from-gray-50 to-white p-8 shadow-sm"
        >
          <h3 className="text-xl font-bold text-gray-900">Mengapa Memilih Kami</h3>
          <ul className="mt-4 space-y-2 text-gray-700 list-disc list-inside">
            <li>Layanan cepat dan stabil</li>
            <li>Region pilihan beragam</li>
            <li>Dukungan ramah melalui Telegram</li>
            <li>Pengalaman animasi halus seperti situs besar</li>
          </ul>
        </motion.div>
      </div>
    </section>
  )
}
