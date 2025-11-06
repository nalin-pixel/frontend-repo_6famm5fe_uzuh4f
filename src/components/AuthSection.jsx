import { useState } from 'react';
import { motion } from 'framer-motion';
import { UserPlus, LogIn } from 'lucide-react';

export default function AuthSection() {
  const [mode, setMode] = useState('login');

  return (
    <section id="auth" className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <h2 className="text-3xl font-bold text-emerald-900 mb-3">Gabung ke Beringin</h2>
            <p className="text-emerald-800/70 max-w-prose">Buat akun untuk mulai berdiskusi, membuat peringatan, dan mengikuti komunitas sekitar Anda. Jika sudah punya akun, silakan masuk.</p>
            <div className="mt-6 inline-flex rounded-lg p-1 bg-emerald-50 border border-emerald-100">
              <button onClick={() => setMode('login')} className={`px-4 py-2 rounded-md text-sm font-medium ${mode==='login' ? 'bg-white text-emerald-900 shadow' : 'text-emerald-700'}`}>
                <span className="inline-flex items-center gap-2"><LogIn className="h-4 w-4"/>Masuk</span>
              </button>
              <button onClick={() => setMode('register')} className={`px-4 py-2 rounded-md text-sm font-medium ${mode==='register' ? 'bg-white text-emerald-900 shadow' : 'text-emerald-700'}`}>
                <span className="inline-flex items-center gap-2"><UserPlus className="h-4 w-4"/>Daftar</span>
              </button>
            </div>
          </motion.div>

          <motion.form initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} onSubmit={(e) => e.preventDefault()} className="rounded-xl border border-emerald-100 bg-white p-6 shadow-sm">
            <div className="grid gap-4">
              {mode === 'register' && (
                <div>
                  <label className="block text-sm font-medium text-emerald-900">Nama Lengkap</label>
                  <input type="text" className="mt-1 w-full rounded-md border border-emerald-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500" placeholder="Nama Anda" required />
                </div>
              )}
              <div>
                <label className="block text-sm font-medium text-emerald-900">Email</label>
                <input type="email" className="mt-1 w-full rounded-md border border-emerald-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500" placeholder="you@mail.com" required />
              </div>
              <div>
                <label className="block text-sm font-medium text-emerald-900">Kata Sandi</label>
                <input type="password" className="mt-1 w-full rounded-md border border-emerald-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500" placeholder="••••••••" required />
              </div>
              <button className="mt-2 inline-flex justify-center items-center rounded-md bg-emerald-600 px-4 py-2 text-white font-semibold hover:bg-emerald-700 transition">
                {mode === 'login' ? 'Masuk' : 'Daftar'}
              </button>
              <p className="text-xs text-emerald-800/70">Dengan melanjutkan, Anda menyetujui ketentuan layanan & kebijakan privasi.</p>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
