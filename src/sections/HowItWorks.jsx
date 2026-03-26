import { Upload, Database, Zap } from 'lucide-react'
import SectionReveal from '../components/SectionReveal'

const steps = [
  {
    number: '01',
    title: 'Upload your template',
    description:
      'Drag and drop any flyer, badge, or card design. Supports PNG, JPG, PDF, and SVG. Mark the regions where dynamic content should go.',
    icon: Upload,
    color: 'var(--ink-coral)',
    colorSoft: 'var(--ink-coral-soft)',
  },
  {
    number: '02',
    title: 'Connect your data',
    description:
      'Import a CSV, link a Google Sheet, or plug in an API. Map each column to a template slot -- names, titles, photos, QR codes.',
    icon: Database,
    color: 'var(--ink-teal)',
    colorSoft: 'var(--ink-teal-soft)',
  },
  {
    number: '03',
    title: 'Generate and export',
    description:
      'Hit generate and watch hundreds of personalized visuals render in seconds. Export as a ZIP of PNGs or a print-ready PDF.',
    icon: Zap,
    color: 'var(--ink-blue)',
    colorSoft: 'var(--ink-blue-soft)',
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="relative overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <SectionReveal>
          <p className="text-sm font-semibold uppercase tracking-widest text-[var(--ink-coral)]">
            How it works
          </p>
          <h2 className="mt-3 max-w-lg text-3xl font-bold leading-tight tracking-tight text-[var(--ink-text)] sm:text-4xl md:text-5xl">
            Three steps to hundreds of visuals
          </h2>
        </SectionReveal>

        <div className="mt-16 grid gap-8 md:grid-cols-3 md:gap-6">
          {steps.map((step, i) => {
            const StepIcon = step.icon
            return (
              <SectionReveal key={step.number} delay={i * 0.15}>
                <article className="group relative rounded-2xl border border-[var(--ink-border)] bg-[var(--ink-bg)] p-8 transition-all duration-300 hover:border-transparent hover:shadow-lg">
                  <div
                    className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl"
                    style={{ backgroundColor: step.colorSoft }}
                  >
                    <StepIcon className="h-5 w-5" style={{ color: step.color }} />
                  </div>

                  <p
                    className="text-sm font-bold tracking-wider"
                    style={{ color: step.color }}
                  >
                    {step.number}
                  </p>

                  <h3 className="mt-2 text-xl font-bold text-[var(--ink-text)]">
                    {step.title}
                  </h3>

                  <p className="mt-3 text-base leading-relaxed text-[var(--ink-text-secondary)]">
                    {step.description}
                  </p>
                </article>
              </SectionReveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
