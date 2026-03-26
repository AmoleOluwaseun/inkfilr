import { useRef, useEffect, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import SectionReveal from '../components/SectionReveal'

import clientCachet from '../../images/clients/cachet.svg'
import clientGuitarCenter from '../../images/clients/guitar-center.svg'
import clientProfilRejser from '../../images/clients/profil-rejser.svg'
import clientShopify from '../../images/clients/shopify.svg'
import clientTokico from '../../images/clients/tokico.svg'

const stats = [
  { label: 'Templates created', value: 12400, suffix: '+' },
  { label: 'Visuals generated', value: 580000, suffix: '+' },
  { label: 'Teams using inkfilr', value: 340, suffix: '' },
]

const logos = [clientCachet, clientGuitarCenter, clientTokico, clientShopify, clientProfilRejser]

function AnimatedCounter({ value, suffix }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    if (!isInView) return
    let frame
    const duration = 1500
    const start = performance.now()

    function tick(now) {
      const elapsed = now - start
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setDisplay(Math.floor(eased * value))
      if (progress < 1) frame = requestAnimationFrame(tick)
    }

    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [isInView, value])

  const formatted = display >= 1000 ? `${(display / 1000).toFixed(display >= 10000 ? 0 : 1)}k` : display

  return (
    <span ref={ref} className="text-4xl font-bold tabular-nums text-[var(--ink-text)] sm:text-5xl">
      {formatted}{suffix}
    </span>
  )
}

export default function SocialProof() {
  return (
    <section className="relative bg-[var(--ink-bg)] py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <SectionReveal>
          <div className="grid gap-10 rounded-2xl border border-[var(--ink-border)] bg-white p-8 sm:grid-cols-3 sm:p-12">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                <p className="mt-2 text-sm font-medium text-[var(--ink-text-secondary)]">{stat.label}</p>
              </div>
            ))}
          </div>
        </SectionReveal>

        <SectionReveal delay={0.2}>
          <div className="mt-16">
            <p className="text-center text-sm font-medium uppercase tracking-widest text-[var(--ink-text-muted)]">
              Trusted by teams at
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-8 sm:gap-12">
              {logos.map((logo, i) => (
                <motion.img
                  key={i}
                  src={logo}
                  alt="Client logo"
                  className="h-8 w-auto opacity-40 transition-opacity duration-300 hover:opacity-70 sm:h-10"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 0.4 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                />
              ))}
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  )
}
