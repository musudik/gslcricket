import { createContext, useContext, useEffect, useState, type ReactNode } from 'react'

export type Theme = 'german' | 'classic'

interface ThemeContextValue {
  theme: Theme
  setTheme: (theme: Theme) => void
}

const ThemeContext = createContext<ThemeContextValue>({
  theme: 'german',
  setTheme: () => {},
})

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<Theme>(() => {
    try {
      const stored = localStorage.getItem('gslc-theme')
      return (stored === 'classic' || stored === 'german') ? stored : 'german'
    } catch {
      return 'german'
    }
  })

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    try {
      localStorage.setItem('gslc-theme', theme)
    } catch {
      // ignore storage errors
    }
  }, [theme])

  // Apply default theme on mount before any render
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
  }, [])

  const setTheme = (next: Theme) => setThemeState(next)

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  return useContext(ThemeContext)
}
