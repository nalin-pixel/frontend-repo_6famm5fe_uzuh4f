import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import ForumPreview from './components/ForumPreview';
import AuthSection from './components/AuthSection';

function Footer() {
  return (
    <footer id="kontak" className="border-t border-emerald-100 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-emerald-800/70">© {new Date().getFullYear()} Beringin • Platform Forum Tanggap Bencana</p>
        <div className="flex items-center gap-4 text-sm">
          <a href="#tentang" className="text-emerald-800/80 hover:text-emerald-900">Tentang</a>
          <a href="#forum" className="text-emerald-800/80 hover:text-emerald-900">Forum</a>
          <a href="#auth" className="text-emerald-800/80 hover:text-emerald-900">Masuk/Daftar</a>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-white text-emerald-950">
      <Navbar />
      <Hero />
      <Features />
      <ForumPreview />
      <AuthSection />
      <Footer />
    </div>
  );
}
