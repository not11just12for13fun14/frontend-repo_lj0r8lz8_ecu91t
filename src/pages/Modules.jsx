import { useEffect, useState } from 'react'
import { Navbar, Footer, Button, Card, Section, ProgressBar } from '../components/ui'
import { API_BASE } from '../lib/a11y'

export default function Modules() {
  const [items, setItems] = useState([])
  useEffect(() => {
    fetch(`${API_BASE}/api/modules`).then(r=>r.json()).then(setItems).catch(()=>setItems([]))
  }, [])
  return (
    <div className="bg-white text-slate-900 dark:bg-slate-950 dark:text-white">
      <Navbar />
      <Section title="Materi Edukasi" subtitle="Pelajaran terstruktur dengan progres belajar">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {items.map(m => (
            <Card key={m.slug}>
              <div className="aspect-video rounded-xl bg-slate-100 dark:bg-slate-800" />
              <h3 className="font-semibold mt-3">{m.title}</h3>
              <p className="text-sm text-slate-600 dark:text-slate-300">{m.summary}</p>
              <div className="mt-3 flex items-center justify-between">
                <ProgressBar value={40} />
                <Button variant="ghost" onClick={()=> (window.location.href = `/modules/${m.slug}`)}>Mulai Belajar</Button>
              </div>
            </Card>
          ))}
        </div>
      </Section>
      <Footer />
    </div>
  )
}
