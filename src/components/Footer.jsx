export default function Footer() {
  const links = [
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Features', href: '#features' },
    { label: 'Use Cases', href: '#use-cases' },
  ]

  return (
    <footer className="border-t border-[var(--ink-border)] bg-white">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-5 py-12 sm:flex-row sm:justify-between lg:px-8">
        <a href="#hero" className="text-xl font-bold tracking-tight text-[var(--ink-text)]">
          inkfilr<span className="text-[var(--ink-coral)]">.</span>
        </a>

        <nav className="flex flex-wrap items-center gap-6">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-[var(--ink-text-secondary)] transition-colors hover:text-[var(--ink-text)]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <p className="text-sm text-[var(--ink-text-muted)]">
          &copy; {new Date().getFullYear()} inkfilr
        </p>
      </div>
    </footer>
  )
}
