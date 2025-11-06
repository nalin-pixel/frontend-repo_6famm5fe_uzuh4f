import { Shield, Bell, MapPin, Users } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'Peringatan Cepat',
    desc: 'Notifikasi real-time untuk kejadian darurat di sekitar Anda.',
  },
  {
    icon: MapPin,
    title: 'Peta Lokasi',
    desc: 'Lihat titik kejadian pada peta untuk respon lebih tepat.',
  },
  {
    icon: Users,
    title: 'Komunitas Aktif',
    desc: 'Bangun jaringan warga untuk saling membantu dan berbagi info.',
  },
  {
    icon: Bell,
    title: 'Kustomisasi Alert',
    desc: 'Atur wilayah dan jenis peringatan sesuai kebutuhan Anda.',
  },
];

export default function Features() {
  return (
    <section className="relative py-20 bg-gradient-to-b from-white to-emerald-50" id="tentang">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-emerald-900">Kenapa Beringin?</h2>
          <p className="mt-3 text-emerald-800/70 max-w-2xl mx-auto">Platform hijau untuk kolaborasi warga: berbagi info, peringatan, dan aksi cepat saat bencana.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f) => (
            <div key={f.title} className="rounded-xl border border-emerald-100 bg-white p-6 shadow-sm hover:shadow-md transition">
              <div className="h-11 w-11 rounded-lg bg-emerald-600 text-white flex items-center justify-center shadow">
                <f.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-semibold text-emerald-900">{f.title}</h3>
              <p className="mt-2 text-emerald-800/70 text-sm">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
