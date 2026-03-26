import { motion } from 'framer-motion'
import WavyBackground from '../components/WavyBackground'
import SectionReveal from '../components/SectionReveal'
import productMockup from '../../images/product-mockup.png'

export default function Hero() {
  const wordVariants = {
    hidden: { opacity: 0, y: 24, filter: 'blur(4px)' },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: { delay: 0.3 + i * 0.08, duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] },
    }),
  }

  const headline = 'Bulk-generate branded visuals from any data source'
  const words = headline.split(' ')

  return (
    <section id="hero" className="relative min-h-screen overflow-hidden bg-[var(--ink-bg)]">
      <WavyBackground />

      <div className="absolute left-1/2 top-1/3 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--ink-coral)] opacity-[0.04] blur-[100px]" />
      <div className="absolute right-0 top-0 h-[300px] w-[300px] rounded-full bg-[var(--ink-teal)] opacity-[0.05] blur-[80px]" />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-6xl flex-col items-center justify-center px-5 py-32 text-center lg:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-[var(--ink-border)] bg-white px-4 py-2 text-sm font-medium text-[var(--ink-text-secondary)] shadow-sm"
        >
          <span className="h-2 w-2 rounded-full bg-[var(--ink-teal)]" />
          Now in early access
        </motion.div>

        <h1 className="max-w-3xl text-4xl font-bold leading-[1.1] tracking-tight text-[var(--ink-text)] sm:text-5xl md:text-6xl lg:text-7xl">
          {words.map((word, i) => (
            <motion.span
              key={i}
              custom={i}
              variants={wordVariants}
              initial="hidden"
              animate="visible"
              className="mr-[0.3em] inline-block"
            >
              {word}
            </motion.span>
          ))}
        </h1>

        <SectionReveal delay={1}>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-[var(--ink-text-secondary)] sm:text-xl">
            Upload a template, connect your spreadsheet or API, and generate
            hundreds of personalized ID cards, flyers, and badges in seconds.
          </p>
        </SectionReveal>

        <SectionReveal delay={1.2}>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
            <a
              href="#cta"
              className="rounded-full bg-[var(--ink-text)] px-7 py-3.5 text-base font-semibold text-white transition-all duration-200 hover:opacity-90"
            >
              Get Early Access
            </a>
            <a
              href="#how-it-works"
              className="rounded-full border border-[var(--ink-border)] px-7 py-3.5 text-base font-semibold text-[var(--ink-text)] transition-all duration-200 hover:bg-[var(--ink-surface-raised)]"
            >
              See How It Works
            </a>
          </div>
        </SectionReveal>

        <SectionReveal delay={1.4}>
          <div className="mt-16 w-full max-w-4xl sm:mt-20">
            <div className="float-animation rounded-2xl border border-[var(--ink-border)] bg-white p-2 shadow-[0_24px_80px_-12px_rgba(0,0,0,0.08)] sm:rounded-3xl sm:p-3">
              <img
                src={productMockup}
                alt="inkfilr template editor showing a conference badge being generated from a data source"
                className="w-full rounded-xl object-cover sm:rounded-2xl"
                loading="eager"
              />
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  )
}
