import { useState } from 'react';
import { MessageSquare, MapPin, AlertTriangle, ThumbsUp, User } from 'lucide-react';

const initialThreads = [
  {
    id: 1,
    title: 'Peringatan: Banjir di Kelurahan Sukamaju',
    tag: 'Banjir',
    location: 'Sukamaju, Kec. Barat',
    content: 'Ketinggian air mencapai 30cm di beberapa titik, harap hindari jalan utama dan siapkan evakuasi bila perlu.',
    likes: 24,
    author: 'Riko',
  },
  {
    id: 2,
    title: 'Info: Gempa ringan terasa jam 14:32',
    tag: 'Gempa',
    location: 'Kota Tua',
    content: 'Getaran ringan terasa selama 5 detik. Mohon tetap waspada dan cek kondisi bangunan sekitar.',
    likes: 18,
    author: 'Maya',
  },
  {
    id: 3,
    title: 'Pohon tumbang menutup akses jalan',
    tag: 'Peringatan',
    location: 'Jl. Melati',
    content: 'Mohon hindari jalur ini sementara, tim sedang menuju lokasi untuk penanganan.',
    likes: 12,
    author: 'Dedi',
  },
];

export default function ForumPreview() {
  const [threads, setThreads] = useState(initialThreads);
  const [filter, setFilter] = useState('Semua');

  const filtered = threads.filter((t) => (filter === 'Semua' ? true : t.tag === filter));

  return (
    <section id="forum" className="py-20 bg-emerald-50/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-4 mb-6">
          <div>
            <h2 className="text-3xl font-bold text-emerald-900">Forum Komunitas</h2>
            <p className="text-emerald-800/70">Diskusi terbaru dari warga sekitar Anda</p>
          </div>
          <div className="flex gap-2">
            {['Semua','Banjir','Gempa','Peringatan'].map((t) => (
              <button key={t} onClick={() => setFilter(t)} className={`px-3 py-1.5 rounded-md text-sm border ${filter===t ? 'bg-emerald-600 text-white border-emerald-600' : 'border-emerald-200 text-emerald-800 hover:bg-white'} transition`}>
                {t}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((post) => (
            <article key={post.id} className="rounded-xl border border-emerald-100 bg-white p-5 shadow-sm hover:shadow-md transition">
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-2 text-xs font-medium text-emerald-700 bg-emerald-50 border border-emerald-100 px-2.5 py-1 rounded-full">
                  <AlertTriangle className="h-4 w-4" />{post.tag}
                </span>
                <span className="inline-flex items-center gap-1 text-xs text-emerald-700"><MapPin className="h-4 w-4"/>{post.location}</span>
              </div>
              <h3 className="mt-3 font-semibold text-emerald-950">{post.title}</h3>
              <p className="mt-2 text-sm text-emerald-800/80">{post.content}</p>
              <div className="mt-4 flex items-center justify-between">
                <button onClick={() => setThreads((prev)=>prev.map(p=>p.id===post.id?{...p,likes:p.likes+1}:p))} className="inline-flex items-center gap-1 text-emerald-700 hover:text-emerald-900">
                  <ThumbsUp className="h-4 w-4"/>
                  <span className="text-sm">{post.likes}</span>
                </button>
                <span className="inline-flex items-center gap-2 text-sm text-emerald-800/80">
                  <User className="h-4 w-4" /> {post.author}
                </span>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a href="#auth" className="inline-flex items-center gap-2 rounded-md bg-emerald-600 px-5 py-2.5 text-white font-semibold hover:bg-emerald-700 transition">
            <MessageSquare className="h-5 w-5"/> Buat Akun untuk Mulai Diskusi
          </a>
        </div>
      </div>
    </section>
  );
}
