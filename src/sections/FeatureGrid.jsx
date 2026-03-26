import { Layers, Repeat, FileOutput, Palette, Sparkles, Shield } from 'lucide-react'
import SectionReveal from '../components/SectionReveal'

const features = [
  {
    title: 'Template Editor',
    description: 'Place text, image, and QR code zones directly on your design.',
    icon: Layers,
    color: 'var(--ink-coral)',
    colorSoft: 'var(--ink-coral-soft)',
    span: 'md:col-span-2',
  },
  {
    title: 'Batch Processing',
    description: 'Generate thousands of visuals from a single data file, fast.',
    icon: Repeat,
    color: 'var(--ink-teal)',
    colorSoft: 'var(--ink-teal-soft)',
    span: '',
  },
  {
    title: 'Multi-format Export',
    description: 'Download as PNG, JPG, PDF, or print-ready CMYK files.',
    icon: FileOutput,
    color: 'var(--ink-blue)',
    colorSoft: 'var(--ink-blue-soft)',
    span: '',
  },
  {
    title: 'Brand Kit',
    description: 'Lock in your fonts, colors, and logos across every template.',
    icon: Palette,
    color: 'var(--ink-yellow)',
    colorSoft: 'var(--ink-yellow-soft)',
    span: '',
  },
  {
    title: 'AI Template Generation',
    description: 'Describe what you need and let AI draft a starting template.',
    icon: Sparkles,
    color: 'var(--ink-purple)',
    colorSoft: 'var(--ink-purple-soft)',
    span: '',
  },
  {
    title: 'Data Mapping',
    description: 'Smart field detection auto-maps spreadsheet columns to template slots.',
    icon: Shield,
    color: 'var(--ink-coral)',
    colorSoft: 'var(--ink-coral-soft)',
    span: 'md:col-span-2',
  },
]

export default function FeatureGrid() {
  return (
    <section id="features" className="relative bg-[var(--ink-bg)] py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <SectionReveal>
          <p className="text-sm font-semibold uppercase tracking-widest text-[var(--ink-teal)]">
            Features
          </p>
          <h2 className="mt-3 max-w-lg text-3xl font-bold leading-tight tracking-tight text-[var(--ink-text)] sm:text-4xl md:text-5xl">
            Everything you need to automate visual production
          </h2>
        </SectionReveal>

        <div className="mt-16 grid gap-4 md:grid-cols-4">
          {features.map((feature, i) => {
            const FeatureIcon = feature.icon
            return (
              <SectionReveal
                key={feature.title}
                delay={i * 0.08}
                className={feature.span}
              >
                <article className="group flex h-full flex-col rounded-2xl border border-[var(--ink-border)] bg-white p-7 transition-all duration-300 hover:border-transparent hover:shadow-lg">
                  <div
                    className="mb-5 inline-flex h-10 w-10 items-center justify-center rounded-lg transition-transform duration-300 group-hover:scale-110"
                    style={{ backgroundColor: feature.colorSoft }}
                  >
                    <FeatureIcon className="h-5 w-5" style={{ color: feature.color }} />
                  </div>
                  <h3 className="text-lg font-bold text-[var(--ink-text)]">{feature.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--ink-text-secondary)]">
                    {feature.description}
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
