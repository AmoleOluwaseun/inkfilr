import { PhoneCall } from 'lucide-react'
import { useEffect, useMemo, useState } from 'react'

const sections = [
  { id: 'section_1', label: 'Home' },
  { id: 'section_2', label: 'About' },
  { id: 'section_3', label: 'Services' },
  { id: 'section_4', label: 'Projects' },
  { id: 'section_5', label: 'Contact' },
]

function App() {
  const [activeSection, setActiveSection] = useState('section_1')
  const [isSticky, setIsSticky] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsSticky(window.scrollY > 24)
    window.addEventListener('scroll', handleScroll)
    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)

        if (visible[0]?.target?.id) {
          setActiveSection(visible[0].target.id)
        }
      },
      { threshold: [0.35, 0.55, 0.8] },
    )

    sections.forEach(({ id }) => {
      const target = document.getElementById(id)
      if (target) {
        observer.observe(target)
      }
    })

    return () => observer.disconnect()
  }, [])

  const navClass = useMemo(
    () =>
      `fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        isSticky
          ? 'bg-white/90 shadow-[0_10px_30px_rgba(12,24,44,0.12)] backdrop-blur'
          : 'bg-transparent'
      }`,
    [isSticky],
  )

  return (
    <div className="min-h-screen bg-[var(--inkfilr-bg)] text-[var(--inkfilr-text)]">
      <header className={navClass}>
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <a href="#section_1" className="text-3xl font-bold text-[var(--inkfilr-text)]">
            inkfilr
          </a>

          <nav className="hidden items-center gap-8 md:flex">
            {sections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className={`text-sm font-semibold uppercase tracking-[0.08em] transition-colors duration-200 ${
                  activeSection === section.id
                    ? 'text-[var(--inkfilr-secondary)]'
                    : 'text-[var(--inkfilr-text)]/75 hover:text-[var(--inkfilr-secondary)]'
                }`}
              >
                {section.label}
              </a>
            ))}
          </nav>

          <a
            href="#section_5"
            className="hidden items-center gap-2 rounded-full border-2 border-[var(--inkfilr-secondary)] px-4 py-2 font-bold text-[var(--inkfilr-secondary)] transition-colors duration-200 hover:bg-[var(--inkfilr-secondary)] hover:text-white sm:inline-flex"
          >
            <PhoneCall className="h-4 w-4" />
            120-240-9600
          </a>
        </div>
      </header>

      <main className="space-y-12 pb-24 pt-28">
        {sections.map((section, index) => (
          <section
            key={section.id}
            id={section.id}
            className="mx-auto min-h-[72vh] w-full max-w-6xl rounded-3xl border border-slate-200 bg-white px-4 py-12 shadow-sm sm:px-6 lg:px-8"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--inkfilr-secondary)]">
              {section.label}
            </p>
            <h2 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl">
              {index === 0 ? 'Landing structure in place' : `${section.label} section placeholder`}
            </h2>
          </section>
        ))}
      </main>
    </div>
  )
}

export default App
