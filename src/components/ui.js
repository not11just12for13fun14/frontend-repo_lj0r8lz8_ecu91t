import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Camera, BookOpen, Hand, Stars, Search, Settings, User, Menu, Play, Sun, Moon, Contrast, Type } from 'lucide-react'
import { useA11y } from '../lib/a11y'

export function Logo() {
  return (
    <Link to="/" className="inline-flex items-center gap-2 font-bold text-xl text-sky-500">
      <Hand className="w-6 h-6" />
      <span>SignifyLearn</span>
    </Link>
  )
}

export function Button({ variant = 'primary', className = '', children, ...props }) {
  const base = 'rounded-xl px-4 py-2 font-semibold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2 focus-visible:ring-offset-background'
  const styles = {
    primary: 'bg-sky-400 hover:bg-sky-500 text-slate-900',
    secondary: 'bg-slate-900 text-white hover:bg-slate-800 dark:bg-slate-700',
    ghost: 'bg-transparent hover:bg-slate-100 dark:hover:bg-slate-800',
  }
  return (
    <button className={`${base} ${styles[variant]} ${className}`} {...props}>
      {children}
    </button>
  )
}

export function Badge({ children }) {
  return <span className="px-2 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-medium dark:bg-slate-700 dark:text-slate-100">{children}</span>
}

export function Card({ children, className = '' }) {
  return <div className={`rounded-2xl bg-white/80 backdrop-blur shadow-sm border border-slate-100 p-5 dark:bg-slate-900/60 dark:border-slate-800 ${className}`}>{children}</div>
}

export function Navbar() {
  const { settings, setSettings } = useA11y()
  return (
    <div className="sticky top-0 z-40 w-full backdrop-blur border-b border-slate-100/80 bg-white/70 dark:bg-slate-950/60 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <Logo />
          <nav className="hidden md:flex items-center gap-4 text-sm text-slate-600 dark:text-slate-300">
            <Link to="/catalog" className="hover:text-slate-900 dark:hover:text-white">Katalog Gestur</Link>
            <Link to="/modules" className="hover:text-slate-900 dark:hover:text-white">Materi</Link>
            <Link to="/quiz" className="hover:text-slate-900 dark:hover:text-white">Quiz</Link>
            <Link to="/recognition" className="hover:text-slate-900 dark:hover:text-white">Pengenalan Gestur</Link>
            <Link to="/accessibility" className="hover:text-slate-900 dark:hover:text-white">Aksesibilitas</Link>
          </nav>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="ghost" aria-label="Toggle theme" onClick={() => setSettings(s => ({ ...s, dark: !s.dark }))}>
            {settings.dark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </Button>
          <Link to="/profile" className="inline-flex items-center gap-2 text-slate-700 dark:text-slate-200 hover:text-sky-500">
            <User className="w-5 h-5" />
            <span className="hidden sm:inline">Profil</span>
          </Link>
          <Button variant="secondary" className="ml-2 hidden sm:inline-flex" as="a">
            Masuk
          </Button>
          <Button variant="ghost" className="md:hidden">
            <Menu className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </div>
  )
}

export function Footer() {
  return (
    <footer className="mt-20 border-t border-slate-100 dark:border-slate-800 py-10 text-sm text-slate-600 dark:text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <Logo />
        <div className="flex gap-6">
          <Link to="/">Beranda</Link>
          <Link to="/catalog">Katalog</Link>
          <Link to="/modules">Materi</Link>
          <Link to="/quiz">Quiz</Link>
          <Link to="/recognition">Pengenalan</Link>
        </div>
        <p className="text-xs">© {new Date().getFullYear()} SignifyLearn</p>
      </div>
    </footer>
  )
}

export function Section({ title, subtitle, children, actions }) {
  return (
    <section className="py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-6">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">{title}</h2>
            {subtitle && <p className="text-slate-600 dark:text-slate-300 mt-1">{subtitle}</p>}
          </div>
          {actions}
        </div>
        {children}
      </div>
    </section>
  )
}

export function ProgressBar({ value }) {
  return (
    <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden dark:bg-slate-800">
      <div className="h-full bg-sky-400" style={{ width: `${value}%`, transition: 'width 200ms ease' }} />
    </div>
  )
}
