import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="home" className="relative pt-20">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-emerald-900/60 via-emerald-900/50 to-white" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="min-h-[88vh] grid lg:grid-cols-2 items-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-white py-20">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-sm backdrop-blur ring-1 ring-white/20">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              Beringin • Forum Tanggap Bencana
            </span>
            <h1 className="mt-5 text-4xl sm:text-6xl font-extrabold leading-tight">
              Diskusi, Peringatan, dan Komunitas Peduli
              <span className="block text-emerald-300">untuk lingkungan yang lebih aman</span>
            </h1>
            <p className="mt-6 text-lg text-emerald-50/90 max-w-xl">
              Laporkan banjir, gempa, dan kejadian darurat lain. Bangun jejaring warga untuk saling memberi kabar dan bantuan.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#auth" className="inline-flex items-center rounded-md bg-emerald-500 px-5 py-3 text-white font-semibold shadow hover:bg-emerald-600 transition">Mulai Sekarang</a>
              <a href="#forum" className="inline-flex items-center rounded-md bg-white/10 px-5 py-3 text-white font-semibold ring-1 ring-white/20 hover:bg-white/20 transition">Lihat Forum</a>
            </div>
          </motion.div>
          <div className="hidden lg:block" />
        </div>
      </div>
    </section>
  );
}
