import { useEffect, useMemo, useState } from 'react'
import { Navbar, Footer, Button, Card, Section, ProgressBar } from '../components/ui'
import { API_BASE } from '../lib/a11y'

export default function Quiz() {
  const prm = new URLSearchParams(location.search)
  const moduleSlug = prm.get('module') || 'dasar-dasar'
  const [q, setQ] = useState([])
  const [idx, setIdx] = useState(0)
  const [score, setScore] = useState(0)
  const [done, setDone] = useState(false)

  useEffect(() => {
    fetch(`${API_BASE}/api/quizzes/${moduleSlug}`).then(r=>r.json()).then(setQ).catch(()=>setQ([]))
  }, [moduleSlug])

  const progress = useMemo(() => q.length ? Math.round((idx / q.length) * 100) : 0, [idx, q])

  if (done) {
    return (
      <div className="bg-white text-slate-900 dark:bg-slate-950 dark:text-white min-h-screen">
        <Navbar />
        <Section title="Hasil Kuis" subtitle={`Skor Anda: ${score} / ${q.length}`}>
          <Card>
            <p className="text-lg">Bagus! Coba lagi untuk nilai yang lebih tinggi.</p>
            <div className="mt-4 flex gap-3">
              <Button onClick={() => { setIdx(0); setScore(0); setDone(false) }}>Coba Lagi</Button>
              <Button variant="secondary" onClick={() => (window.location.href = '/modules')}>Kembali ke Materi</Button>
            </div>
          </Card>
        </Section>
        <Footer />
      </div>
    )
  }

  const current = q[idx]
  if (!current) return (<div className="min-h-screen bg-white dark:bg-slate-950"><Navbar /><div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">Memuat...</div><Footer /></div>)

  const choose = (i) => {
    if (i === current.answer_index) setScore(s => s + 1)
    if (idx + 1 >= q.length) setDone(true)
    else setIdx(idx + 1)
  }

  return (
    <div className="bg-white text-slate-900 dark:bg-slate-950 dark:text-white min-h-screen">
      <Navbar />
      <Section title="Quiz Interaktif" subtitle={`Topik: ${moduleSlug.toUpperCase()}`}>
        <ProgressBar value={progress} />
        <div className="mt-6 grid md:grid-cols-3 gap-6 items-start">
          <Card className="md:col-span-2">
            <div className="aspect-video w-full rounded-2xl bg-slate-100 dark:bg-slate-800 mb-4" />
            <h3 className="font-semibold text-lg">{current.prompt}</h3>
            <div className="mt-4 grid sm:grid-cols-2 gap-3">
              {current.options.map((o, i) => (
                <Button key={i} variant="secondary" onClick={() => choose(i)}>{o}</Button>
              ))}
            </div>
          </Card>
          <Card>
            <p className="text-sm text-slate-600 dark:text-slate-300">Pertanyaan {idx + 1} dari {q.length}</p>
            <div className="mt-2"><ProgressBar value={progress} /></div>
            <div className="mt-4 flex gap-3">
              <Button variant="ghost" onClick={() => setIdx(Math.min(q.length - 1, idx + 1))}>Lewati</Button>
            </div>
          </Card>
        </div>
      </Section>
      <Footer />
    </div>
  )
}
