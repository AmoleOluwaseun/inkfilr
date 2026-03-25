function App() {
  return (
    <div className="min-h-screen bg-[var(--inkfilr-bg)] text-[var(--inkfilr-text)]">
      <main className="mx-auto max-w-6xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-slate-200 bg-white p-10 shadow-sm sm:p-14">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--inkfilr-secondary)]">
            inkfilr
          </p>
          <h1 className="mt-4 text-4xl font-bold leading-tight text-[var(--inkfilr-text)] sm:text-5xl">
            React revamp foundation is ready.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-[var(--inkfilr-muted)]">
            Next steps will migrate the original landing page sections into reusable React
            components with Tailwind styling, Lucide icons, smooth navigation, and the
            same image-driven visual identity.
          </p>
        </div>
      </main>
    </div>
  )
}

export default App
