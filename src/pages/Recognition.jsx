import { useEffect, useRef, useState } from 'react'
import { Navbar, Footer, Button, Card, Section, Badge, ProgressBar } from '../components/ui'

export default function Recognition() {
  const videoRef = useRef(null)
  const [running, setRunning] = useState(false)
  const [attempt, setAttempt] = useState(0)
  const [accuracy, setAccuracy] = useState(0)
  const target = new URLSearchParams(location.search).get('target') || 'a'

  useEffect(() => {
    if (!running) return
    let raf
    const tick = () => {
      // Simulasi akurasi (tanpa ML model) agar UI interaktif
      setAccuracy((a) => Math.min(100, Math.max(0, a + (Math.random()*20 - 10))))
      raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [running])

  const start = async () => {
    setRunning(true)
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true })
      if (videoRef.current) {
        videoRef.current.srcObject = stream
        await videoRef.current.play()
      }
    } catch (e) {
      alert('Tidak dapat mengakses kamera. Periksa izin perangkat.')
      setRunning(false)
    }
  }

  const stop = () => {
    setRunning(false)
    if (videoRef.current?.srcObject) {
      for (const track of videoRef.current.srcObject.getTracks()) track.stop()
      videoRef.current.srcObject = null
    }
  }

  return (
    <div className="bg-white text-slate-900 dark:bg-slate-950 dark:text-white min-h-screen">
      <Navbar />
      <Section title="Pengenalan Gestur (Webcam)" subtitle={`Target: ${target.toUpperCase()}`} actions={<Badge>{accuracy.toFixed(0)}% akurasi</Badge>}>
        <div className="grid lg:grid-cols-3 gap-6 items-start">
          <Card className="lg:col-span-2">
            <div className="aspect-video rounded-3xl overflow-hidden bg-slate-100 dark:bg-slate-800">
              <video ref={videoRef} className="w-full h-full object-cover" muted playsInline />
            </div>
            <div className="mt-4 flex gap-3">
              {!running ? <Button onClick={start}>Mulai</Button> : <Button variant="secondary" onClick={stop}>Berhenti</Button>}
              <Button variant="ghost" onClick={()=> setAttempt(a=>a+1)}>Mulai Tes Ulang</Button>
            </div>
          </Card>
          <Card>
            <h3 className="font-semibold">Contoh Gestur</h3>
            <div className="aspect-video rounded-xl bg-slate-100 dark:bg-slate-800 mt-2" />
            <div className="mt-4">
              <p className="text-sm text-slate-600 dark:text-slate-300">Akurasi real-time</p>
              <div className="mt-2"><ProgressBar value={accuracy} /></div>
              <p className="text-xs text-slate-500 mt-2">Percobaan: {attempt}</p>
            </div>
          </Card>
        </div>
      </Section>
      <Footer />
    </div>
  )
}
