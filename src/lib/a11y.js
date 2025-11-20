import { createContext, useContext, useEffect, useMemo, useState } from 'react'

const defaultSettings = {
  dark: false,
  highContrast: false,
  fontScale: 1,
  reduceMotion: false,
}

const A11yContext = createContext({ settings: defaultSettings, setSettings: () => {} })

export function A11yProvider({ children }) {
  const [settings, setSettings] = useState(() => {
    try {
      const saved = localStorage.getItem('a11y-settings')
      return saved ? { ...defaultSettings, ...JSON.parse(saved) } : defaultSettings
    } catch {
      return defaultSettings
    }
  })

  useEffect(() => {
    try { localStorage.setItem('a11y-settings', JSON.stringify(settings)) } catch {}
  }, [settings])

  useEffect(() => {
    const root = document.documentElement
    root.classList.toggle('dark', settings.dark)
    root.classList.toggle('hc', settings.highContrast)
    root.style.setProperty('--font-scale', String(settings.fontScale))
    if (settings.reduceMotion) {
      root.style.setProperty('--motion', '0')
    } else {
      root.style.setProperty('--motion', '1')
    }
  }, [settings])

  const value = useMemo(() => ({ settings, setSettings }), [settings])
  return <A11yContext.Provider value={value}>{children}</A11yContext.Provider>
}

export function useA11y() {
  return useContext(A11yContext)
}

export const API_BASE = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
