import { useEffect, useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { id: 'hero', label: 'Home' },
  { id: 'how-it-works', label: 'How It Works' },
  { id: 'features', label: 'Features' },
  { id: 'use-cases', label: 'Use Cases' },
  { id: 'cta', label: 'Get Access' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navStyle = useMemo(
    () =>
      scrolled
        ? 'bg-white/90 backdrop-blur-xl shadow-[0_1px_0_var(--ink-border)] border-b border-[var(--ink-border)]'
        : 'bg-transparent',
    [scrolled],
  )

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${navStyle}`}>
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 lg:px-8">
        <a href="#hero" className="text-2xl font-bold tracking-tight text-[var(--ink-text)]">
          inkfilr<span className="text-[var(--ink-coral)]">.</span>
        </a>

        <nav className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className="rounded-lg px-3 py-2 text-sm font-medium text-[var(--ink-text-secondary)] transition-colors duration-150 hover:bg-[var(--ink-surface-raised)] hover:text-[var(--ink-text)]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#cta"
          className="hidden rounded-full bg-[var(--ink-text)] px-5 py-2.5 text-sm font-semibold text-white transition-all duration-200 hover:opacity-90 sm:inline-flex"
        >
          Get Early Access
        </a>

        <button
          type="button"
          aria-label="Toggle navigation"
          onClick={() => setMobileOpen((prev) => !prev)}
          className="inline-flex items-center justify-center rounded-lg border border-[var(--ink-border)] p-2 text-[var(--ink-text)] md:hidden"
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-t border-[var(--ink-border)] bg-white md:hidden"
          >
            <div className="flex flex-col gap-1 px-5 py-4">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={() => setMobileOpen(false)}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="rounded-lg px-3 py-2.5 text-base font-medium text-[var(--ink-text-secondary)] transition-colors hover:bg-[var(--ink-surface-raised)] hover:text-[var(--ink-text)]"
                >
                  {link.label}
                </motion.a>
              ))}
              <a
                href="#cta"
                onClick={() => setMobileOpen(false)}
                className="mt-2 rounded-full bg-[var(--ink-text)] px-5 py-2.5 text-center text-sm font-semibold text-white"
              >
                Get Early Access
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}
