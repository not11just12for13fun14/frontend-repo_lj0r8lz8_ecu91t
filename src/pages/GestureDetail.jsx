import { useEffect, useState } from 'react'
import { Navbar, Footer, Button, Card, Section, Badge, ProgressBar } from '../components/ui'
import { API_BASE } from '../lib/a11y'

export default function GestureDetail() {
  const slug = window.location.pathname.split('/').pop()
  const [data, setData] = useState(null)

  useEffect(() => {
    fetch(`${API_BASE}/api/gestures/${slug}`).then(r=>r.json()).then(setData).catch(()=>setData(null))
  }, [slug])

  if (!data) return (
    <div className="min-h-screen bg-white dark:bg-slate-950"><Navbar /><div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">Memuat...</div><Footer /></div>
  )

  return (
    <div className="bg-white text-slate-900 dark:bg-slate-950 dark:text-white">
      <Navbar />
      <Section title={data.name} subtitle={data.category} actions={<Badge>{data.difficulty}</Badge>}>
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="aspect-video rounded-3xl bg-slate-100 dark:bg-slate-800" />
            <div className="mt-6 grid sm:grid-cols-2 gap-4">
              <Button onClick={() => (window.location.href = `/recognition?target=${data.slug}`)}>Latih Gestur (Webcam)</Button>
              <Button variant="secondary">Tambahkan ke Favorit</Button>
            </div>
          </div>
          <div>
            <Card>
              <h3 className="font-semibold mb-2">Langkah-langkah</h3>
              <ol className="list-decimal pl-5 space-y-1 text-sm text-slate-600 dark:text-slate-300">
                {data.steps?.map((s, i) => (<li key={i}>{s}</li>))}
              </ol>
            </Card>
            <Card className="mt-4">
              <h3 className="font-semibold mb-2">Contoh Penggunaan</h3>
              <ul className="list-disc pl-5 space-y-1 text-sm text-slate-600 dark:text-slate-300">
                {data.examples?.map((s, i) => (<li key={i}>{s}</li>))}
              </ul>
            </Card>
          </div>
        </div>
      </Section>
      <Section title="Terkait">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {[1,2,3,4].map(i => (
            <Card key={i}>
              <div className="aspect-video rounded-xl bg-slate-100 dark:bg-slate-800" />
              <div className="mt-3 flex items-center justify-between">
                <div>
                  <p className="font-medium">Gesture {i}</p>
                  <span className="text-xs text-slate-500">Pemula</span>
                </div>
                <Button variant="ghost">Lihat</Button>
              </div>
            </Card>
          ))}
        </div>
      </Section>
      <Footer />
    </div>
  )
}
