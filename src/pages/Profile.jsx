import { useEffect, useState } from 'react'
import { Navbar, Footer, Button, Card, Section, Badge, ProgressBar } from '../components/ui'
import { API_BASE } from '../lib/a11y'

export default function Profile() {
  const email = 'demo@signifylearn.app'
  const [profile, setProfile] = useState(null)

  useEffect(() => {
    fetch(`${API_BASE}/api/profile?email=${encodeURIComponent(email)}`).then(r=>r.json()).then(setProfile)
  }, [])

  if (!profile) return (<div className="min-h-screen bg-white dark:bg-slate-950"><Navbar /><div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">Memuat...</div><Footer /></div>)

  return (
    <div className="bg-white text-slate-900 dark:bg-slate-950 dark:text-white">
      <Navbar />
      <Section title="Profil Pengguna" subtitle={profile.email} actions={<Badge>Level {profile.level}</Badge>}>
        <div className="grid md:grid-cols-3 gap-6 items-start">
          <Card>
            <div className="w-24 h-24 rounded-full bg-slate-200 dark:bg-slate-800" />
            <h3 className="font-semibold mt-3">{profile.name}</h3>
            <p className="text-sm text-slate-500">{profile.points} poin • Streak {profile.streak} hari</p>
            <Button variant="secondary" className="mt-4" onClick={()=> (window.location.href = '/accessibility')}>Pengaturan</Button>
          </Card>
          <Card className="md:col-span-2">
            <h3 className="font-semibold mb-3">Koleksi Badge</h3>
            <div className="flex flex-wrap gap-2">
              {profile.badges?.map((b,i)=> <Badge key={i}>{b}</Badge>)}
            </div>
            <h3 className="font-semibold mt-6 mb-2">Favorit</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {[1,2,3].map(i => <div key={i} className="aspect-video rounded-xl bg-slate-100 dark:bg-slate-800" />)}
            </div>
          </Card>
        </div>
      </Section>
      <Footer />
    </div>
  )
}
