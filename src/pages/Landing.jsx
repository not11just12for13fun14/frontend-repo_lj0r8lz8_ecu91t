import { motion } from 'framer-motion'
import { Navbar, Footer, Button, Card, Section } from '../components/ui'
import { Camera, Hand, BookOpen, CheckCircle2, Quote } from 'lucide-react'
import hero from '../assets/hero-illustration.svg'

export default function Landing() {
  return (
    <div className="bg-white text-slate-900 dark:bg-slate-950 dark:text-white">
      <Navbar />
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-sky-50 to-white dark:from-slate-900 dark:to-slate-950" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight tracking-tight">
              Belajar Bahasa Isyarat dengan Cara yang Mudah & Interaktif
            </h1>
            <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">
              Akses materi lengkap, katalog gestur, latihan kuis, hingga pengenalan gestur real-time menggunakan kamera.
            </p>
            <div className="mt-8 flex gap-3">
              <Button onClick={() => (window.location.href = '/modules')}>Mulai Belajar</Button>
              <Button variant="secondary" onClick={() => (window.location.href = '/catalog')}>Lihat Katalog Gesture</Button>
            </div>
            <div className="mt-8 grid grid-cols-2 gap-4 text-sm">
              <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-sky-400" /> Aksesibel</div>
              <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-sky-400" /> Gratis</div>
              <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-sky-400" /> Materi Terstruktur</div>
              <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-sky-400" /> Interaktif</div>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] rounded-3xl bg-gradient-to-br from-sky-100 to-white dark:from-slate-800 dark:to-slate-900 border border-slate-100 dark:border-slate-800 shadow-inner" />
          </div>
        </div>
      </header>

      <Section title="Fitur Utama" subtitle="Semua yang Anda butuhkan untuk belajar bahasa isyarat">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: Hand, title: 'Katalog Gestur', desc: 'Koleksi gestur lengkap disertai video dan penjelasan langkah.' },
            { icon: BookOpen, title: 'Modul Edukasi', desc: 'Pelajaran terstruktur dari dasar hingga mahir.' },
            { icon: Quote, title: 'Quiz Interaktif', desc: 'Uji pemahaman Anda dengan kuis bergambar.' },
            { icon: Camera, title: 'Pengenalan Gestur', desc: 'Latihan real-time menggunakan kamera perangkat.' },
          ].map(({ icon: Icon, title, desc }) => (
            <Card key={title}>
              <div className="flex items-start gap-3">
                <div className="p-3 rounded-xl bg-sky-50 text-sky-600 dark:bg-slate-800 dark:text-sky-400">
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">{title}</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300">{desc}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      <Section title="Mulai dari Dasar" subtitle="Beberapa gestur yang sering digunakan">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {["A", "B", "C", "Terima Kasih", "Maaf", "Halo", "Sampai Jumpa", "Tolong"].map((g) => (
            <Card key={g} className="flex flex-col">
              <div className="aspect-video rounded-xl bg-slate-100 dark:bg-slate-800" />
              <div className="mt-3 flex items-center justify-between">
                <div>
                  <p className="font-medium">{g}</p>
                  <span className="text-xs text-slate-500">Pemula</span>
                </div>
                <Button variant="ghost">Lihat</Button>
              </div>
            </Card>
          ))}
        </div>
        <div className="mt-6 text-center">
          <Button variant="secondary" onClick={() => (window.location.href = '/catalog')}>Lihat Semua Gesture</Button>
        </div>
      </Section>

      <Section title="Cara Kerja" subtitle="Langkah-langkah belajar di SignifyLearn">
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { t: 'Pelajari Gestur', d: 'Baca penjelasan dan tonton video', n: 1 },
            { t: 'Latihan via Video', d: 'Ikuti contoh dan berlatih berulang', n: 2 },
            { t: 'Uji dengan Webcam', d: 'Dapatkan umpan balik real-time', n: 3 },
          ].map(({ t, d, n }) => (
            <Card key={t}>
              <div className="w-10 h-10 rounded-full bg-sky-100 text-sky-600 flex items-center justify-center font-bold mb-3 dark:bg-slate-800">{n}</div>
              <h3 className="font-semibold text-lg">{t}</h3>
              <p className="text-sm text-slate-600 dark:text-slate-300">{d}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section title="Testimoni">
        <div className="grid md:grid-cols-3 gap-6">
          {[1,2,3].map((i) => (
            <Card key={i}>
              <p className="text-slate-700 dark:text-slate-200">“Platform ini membuat saya belajar lebih cepat dan menyenangkan.”</p>
              <div className="mt-4 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-slate-200" />
                <div>
                  <p className="font-semibold">Pengguna {i}</p>
                  <p className="text-xs text-slate-500">Mahasiswa</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      <Footer />
    </div>
  )
}
