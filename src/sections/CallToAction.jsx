import { useState } from 'react'
import { motion } from 'framer-motion'
import WavyBackground from '../components/WavyBackground'
import SectionReveal from '../components/SectionReveal'

export default function CallToAction() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!email.trim()) return
    setSubmitted(true)
  }

  return (
    <section id="cta" className="relative overflow-hidden bg-white py-24 sm:py-32">
      <WavyBackground colors={['var(--ink-coral)', 'var(--ink-purple)', 'var(--ink-teal)']} />

      <div className="absolute left-0 top-1/2 h-[300px] w-[300px] -translate-y-1/2 rounded-full bg-[var(--ink-coral)] opacity-[0.04] blur-[80px]" />
      <div className="absolute bottom-0 right-0 h-[250px] w-[250px] rounded-full bg-[var(--ink-teal)] opacity-[0.04] blur-[80px]" />

      <div className="relative z-10 mx-auto max-w-6xl px-5 lg:px-8">
        <SectionReveal>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold leading-tight tracking-tight text-[var(--ink-text)] sm:text-4xl md:text-5xl">
              Ready to automate your visual workflow?
            </h2>
            <p className="mt-4 text-lg text-[var(--ink-text-secondary)]">
              Join the waitlist and be among the first to create
              bulk visuals with inkfilr.
            </p>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-10 rounded-2xl border border-[var(--ink-teal)] bg-[var(--ink-teal-soft)] px-6 py-5"
              >
                <p className="text-base font-semibold text-[var(--ink-teal)]">
                  You are on the list. We will reach out soon.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-10 flex flex-col gap-3 sm:flex-row sm:justify-center">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@company.com"
                  className="w-full rounded-full border border-[var(--ink-border)] bg-[var(--ink-bg)] px-5 py-3.5 text-base text-[var(--ink-text)] outline-none transition-colors placeholder:text-[var(--ink-text-muted)] focus:border-[var(--ink-coral)] sm:w-80"
                />
                <button
                  type="submit"
                  className="rounded-full bg-[var(--ink-text)] px-7 py-3.5 text-base font-semibold text-white transition-all duration-200 hover:opacity-90"
                >
                  Get Early Access
                </button>
              </form>
            )}
          </div>
        </SectionReveal>
      </div>
    </section>
  )
}
