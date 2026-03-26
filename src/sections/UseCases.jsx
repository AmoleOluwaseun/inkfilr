import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import SectionReveal from '../components/SectionReveal'

const useCases = [
  {
    title: 'Event Badges',
    tagline: 'Conference-ready name badges for every attendee.',
    color: 'var(--ink-coral)',
    colorSoft: 'var(--ink-coral-soft)',
  },
  {
    title: 'Employee ID Cards',
    tagline: 'Professional photo IDs with department, role, and access codes.',
    color: 'var(--ink-teal)',
    colorSoft: 'var(--ink-teal-soft)',
  },
  {
    title: 'Social Media Graphics',
    tagline: 'Personalized promo images for launches and campaigns.',
    color: 'var(--ink-blue)',
    colorSoft: 'var(--ink-blue-soft)',
  },
  {
    title: 'Promotional Flyers',
    tagline: 'Localized flyers with names, dates, and venue details.',
    color: 'var(--ink-yellow)',
    colorSoft: 'var(--ink-yellow-soft)',
  },
  {
    title: 'Certificates',
    tagline: 'Personalized completion certificates with dynamic fields.',
    color: 'var(--ink-purple)',
    colorSoft: 'var(--ink-purple-soft)',
  },
]

function UseCaseCard({ useCase, index }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-40px' })

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="group w-72 flex-shrink-0 cursor-default snap-start rounded-2xl border border-[var(--ink-border)] bg-white p-6 transition-all duration-300 hover:shadow-lg sm:w-80"
      style={{ '--card-color': useCase.color, '--card-bg': useCase.colorSoft }}
    >
      <div
        className="mb-5 flex h-32 items-center justify-center rounded-xl sm:h-40"
        style={{ backgroundColor: useCase.colorSoft }}
      >
        <span
          className="text-5xl font-bold opacity-30 sm:text-6xl"
          style={{ color: useCase.color }}
        >
          {useCase.title.charAt(0)}
        </span>
      </div>
      <h3 className="text-lg font-bold text-[var(--ink-text)]">{useCase.title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-[var(--ink-text-secondary)]">
        {useCase.tagline}
      </p>
    </motion.article>
  )
}

export default function UseCases() {
  return (
    <section id="use-cases" className="relative overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <SectionReveal>
          <p className="text-sm font-semibold uppercase tracking-widest text-[var(--ink-blue)]">
            Use Cases
          </p>
          <h2 className="mt-3 max-w-lg text-3xl font-bold leading-tight tracking-tight text-[var(--ink-text)] sm:text-4xl md:text-5xl">
            Built for every visual you can imagine
          </h2>
        </SectionReveal>
      </div>

      <div className="mt-12 overflow-x-auto px-5 pb-4 lg:px-8">
        <div className="mx-auto flex max-w-6xl snap-x snap-mandatory gap-5">
          {useCases.map((uc, i) => (
            <UseCaseCard key={uc.title} useCase={uc} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
