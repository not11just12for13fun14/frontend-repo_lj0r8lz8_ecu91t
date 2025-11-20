import { Navbar, Footer, Card, Section, Button } from '../components/ui'

export default function Auth() {
  return (
    <div className="bg-white text-slate-900 dark:bg-slate-950 dark:text-white min-h-screen">
      <Navbar />
      <Section title="Masuk ke SignifyLearn" subtitle="Akses fitur lengkap dengan akun gratis">
        <div className="grid md:grid-cols-2 gap-6 items-stretch">
          <div className="hidden md:block rounded-3xl bg-gradient-to-br from-sky-100 to-white dark:from-slate-800 dark:to-slate-900" />
          <Card>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Email</label>
                <input type="email" className="w-full rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-4 py-2" placeholder="you@example.com" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Password</label>
                <input type="password" className="w-full rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-4 py-2" placeholder="••••••••" />
              </div>
              <Button className="w-full">Masuk</Button>
              <div className="relative my-4 text-center text-xs text-slate-500">
                <span className="bg-white dark:bg-slate-950 px-2 relative z-10">atau</span>
                <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 border-t border-slate-200 dark:border-slate-800" />
              </div>
              <Button variant="secondary" className="w-full">Masuk dengan Google</Button>
              <div className="flex items-center justify-between text-sm">
                <a href="#" className="text-sky-500">Lupa Password?</a>
                <a href="#" className="text-sky-500">Daftar</a>
              </div>
            </form>
          </Card>
        </div>
      </Section>
      <Footer />
    </div>
  )
}
