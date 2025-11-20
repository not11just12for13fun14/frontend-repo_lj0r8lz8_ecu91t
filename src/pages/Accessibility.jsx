import { Navbar, Footer, Card, Section, Button } from '../components/ui'
import { useA11y } from '../lib/a11y'

export default function Accessibility() {
  const { settings, setSettings } = useA11y()
  return (
    <div className="bg-white text-slate-900 dark:bg-slate-950 dark:text-white min-h-screen">
      <Navbar />
      <Section title="Mode Aksesibilitas" subtitle="Sesuaikan tampilan agar lebih nyaman digunakan">
        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Mode Gelap</p>
                  <p className="text-sm text-slate-600 dark:text-slate-300">Mengaktifkan tema gelap</p>
                </div>
                <input type="checkbox" aria-label="Dark mode" checked={settings.dark} onChange={(e)=> setSettings(s => ({...s, dark: e.target.checked}))} />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Kontras Tinggi</p>
                  <p className="text-sm text-slate-600 dark:text-slate-300">Meningkatkan kontras warna</p>
                </div>
                <input type="checkbox" aria-label="High contrast" checked={settings.highContrast} onChange={(e)=> setSettings(s => ({...s, highContrast: e.target.checked}))} />
              </div>
              <div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Ukuran Teks</p>
                    <p className="text-sm text-slate-600 dark:text-slate-300">Sesuaikan skala font</p>
                  </div>
                  <span className="text-sm">{Math.round(settings.fontScale*100)}%</span>
                </div>
                <input type="range" min="0.8" max="1.4" step="0.05" value={settings.fontScale} onChange={(e)=> setSettings(s => ({...s, fontScale: parseFloat(e.target.value)}))} className="w-full mt-2" />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Kurangi Gerakan</p>
                  <p className="text-sm text-slate-600 dark:text-slate-300">Matikan animasi berlebih</p>
                </div>
                <input type="checkbox" aria-label="Reduce motion" checked={settings.reduceMotion} onChange={(e)=> setSettings(s => ({...s, reduceMotion: e.target.checked}))} />
              </div>
            </div>
          </Card>
          <Card>
            <p className="text-sm text-slate-600 dark:text-slate-300">Pratinjau</p>
            <div className="mt-3 p-6 rounded-2xl border border-slate-200 dark:border-slate-800" style={{ fontSize: `${settings.fontScale}rem` }}>
              <h3 className="text-2xl font-bold">SignifyLearn</h3>
              <p className="mt-2">Belajar bahasa isyarat dengan nyaman dan inklusif.</p>
              <Button className="mt-4">Tombol Aksi</Button>
            </div>
          </Card>
        </div>
      </Section>
      <Footer />
    </div>
  )
}
