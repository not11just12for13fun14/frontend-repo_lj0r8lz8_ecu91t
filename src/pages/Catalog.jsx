import { useEffect, useState } from 'react'
import { Navbar, Footer, Button, Card, Section, Badge } from '../components/ui'
import { Search } from 'lucide-react'
import { API_BASE } from '../lib/a11y'

export default function Catalog() {
  const [items, setItems] = useState([])
  const [q, setQ] = useState('')
  const [category, setCategory] = useState('')

  useEffect(() => {
    fetch(`${API_BASE}/api/gestures`)
      .then(r => r.json())
      .then(setItems)
      .catch(() => setItems([]))
  }, [])

  const search = async (e) => {
    e?.preventDefault()
    const params = new URLSearchParams()
    if (q) params.set('q', q)
    if (category) params.set('category', category)
    const res = await fetch(`${API_BASE}/api/gestures?${params.toString()}`)
    setItems(await res.json())
  }

  return (
    <div className="bg-white text-slate-900 dark:bg-slate-950 dark:text-white">
      <Navbar />
      <Section title="Katalog Bahasa Isyarat" subtitle="Cari gestur berdasarkan kategori atau kata kunci">
        <form onSubmit={search} className="flex flex-col sm:flex-row gap-3">
          <div className="flex-1 flex items-center gap-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl px-4 py-2">
            <Search className="w-5 h-5 text-slate-400" />
            <input value={q} onChange={(e)=>setQ(e.target.value)} placeholder="Cari gestur..." className="w-full bg-transparent outline-none" />
          </div>
          <select value={category} onChange={(e)=>setCategory(e.target.value)} className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-4 py-2">
            <option value="">Semua Kategori</option>
            <option>A-Z</option>
            <option>Numbers</option>
            <option>Kata Dasar</option>
            <option>Emosi</option>
            <option>Aktivitas</option>
          </select>
          <Button type="submit">Cari</Button>
        </form>
        <div className="mt-8 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {items.map((g) => (
            <Card key={g.slug}>
              <div className="aspect-video rounded-xl bg-slate-100 dark:bg-slate-800" />
              <div className="mt-3 flex items-center justify-between">
                <div>
                  <p className="font-medium">{g.name}</p>
                  <div className="flex items-center gap-2 mt-1">
                    <Badge>{g.difficulty}</Badge>
                    <span className="text-xs text-slate-500">{g.category}</span>
                  </div>
                </div>
                <Button variant="ghost" onClick={() => (window.location.href = `/gesture/${g.slug}`)}>Detail</Button>
              </div>
            </Card>
          ))}
        </div>
      </Section>
      <Footer />
    </div>
  )
}
