import { useEffect, useState } from 'react'
import { Navbar, Footer, Button, Card, Section, ProgressBar } from '../components/ui'
import { API_BASE } from '../lib/a11y'

export default function ModuleDetail() {
  const slug = window.location.pathname.split('/').pop()
  const [data, setData] = useState(null)

  useEffect(() => {
    fetch(`${API_BASE}/api/modules/${slug}`).then(r=>r.json()).then(setData).catch(()=>setData(null))
  }, [slug])

  if (!data) return (
    <div className="min-h-screen bg-white dark:bg-slate-950"><Navbar /><div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">Memuat...</div><Footer /></div>
  )

  return (
    <div className="bg-white text-slate-900 dark:bg-slate-950 dark:text-white">
      <Navbar />
      <Section title={data.title} subtitle={data.summary}>
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <Card>
              <div className="prose prose-slate max-w-none dark:prose-invert">
                <h3>Pembukaan</h3>
                <p>Pelajari dasar-dasar topik ini dengan contoh dan ilustrasi.</p>
                <img src={data.cover || ''} alt="" className="w-full rounded-xl bg-slate-100 dark:bg-slate-800" />
              </div>
            </Card>
            <Button onClick={()=> (window.location.href = `/quiz?module=${data.slug}`)}>Mulai Kuis</Button>
          </div>
          <div>
            <Card>
              <h3 className="font-semibold mb-3">Progres</h3>
              <ProgressBar value={40} />
              <ul className="mt-4 space-y-2 text-sm">
                {data.lessons?.map((l, i) => (
                  <li key={i} className="flex items-center gap-2"><span className="w-6 h-6 rounded-full bg-slate-200 dark:bg-slate-800 inline-flex items-center justify-center text-xs">{i+1}</span> {l}</li>
                ))}
              </ul>
            </Card>
          </div>
        </div>
      </Section>
      <Footer />
    </div>
  )
}
