import { useState } from 'react';
import { Leaf, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur bg-white/60 border-b border-emerald-100">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-9 w-9 flex items-center justify-center rounded-lg bg-emerald-600 text-white shadow-sm">
            <Leaf className="h-5 w-5" />
          </div>
          <span className="font-extrabold tracking-tight text-xl text-emerald-800">Beringin</span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          <a href="#home" className="text-emerald-900/80 hover:text-emerald-900 transition">Beranda</a>
          <a href="#forum" className="text-emerald-900/80 hover:text-emerald-900 transition">Forum</a>
          <a href="#tentang" className="text-emerald-900/80 hover:text-emerald-900 transition">Tentang</a>
          <a href="#kontak" className="text-emerald-900/80 hover:text-emerald-900 transition">Kontak</a>
          <a href="#auth" className="inline-flex items-center rounded-md bg-emerald-600 px-4 py-2 text-white font-medium shadow hover:bg-emerald-700 transition">Masuk</a>
        </div>

        <button className="md:hidden p-2 rounded-md text-emerald-900" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t border-emerald-100 bg-white/80 backdrop-blur">
          <div className="px-4 py-4 space-y-3">
            <a href="#home" className="block text-emerald-900/90">Beranda</a>
            <a href="#forum" className="block text-emerald-900/90">Forum</a>
            <a href="#tentang" className="block text-emerald-900/90">Tentang</a>
            <a href="#kontak" className="block text-emerald-900/90">Kontak</a>
            <a href="#auth" className="inline-flex items-center rounded-md bg-emerald-600 px-4 py-2 text-white font-medium shadow hover:bg-emerald-700 transition">Masuk</a>
          </div>
        </div>
      )}
    </header>
  );
}
