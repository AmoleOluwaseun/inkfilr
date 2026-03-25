import {
  AtSign,
  Camera,
  Globe,
  Lightbulb,
  Mail,
  MapPin,
  Menu,
  Phone,
  PhoneCall,
  Play,
  Search,
  Smartphone,
  X,
} from 'lucide-react'
import { useEffect, useMemo, useState } from 'react'

import aboutImage from '../images/couple-working-from-home-together-sofa.jpg'
import avatarImage from '../images/happy-bearded-young-man.jpg'
import contactHeaderImage from '../images/aerial-view-man-using-computer-laptop-wooden-table.jpg'
import clientCachet from '../images/clients/cachet.svg'
import clientGuitarCenter from '../images/clients/guitar-center.svg'
import clientProfilRejser from '../images/clients/profil-rejser.svg'
import clientShopify from '../images/clients/shopify.svg'
import clientTokico from '../images/clients/tokico.svg'
import heroImage from '../images/portrait-happy-excited-man-holding-laptop-computer.png'
import projectsHeaderImage from '../images/white-desk-work-study-aesthetics.jpg'
import projectOneImage from '../images/projects/nikhil-KO4io-eCAXA-unsplash.jpg'
import projectTwoImage from '../images/projects/the-5th-IQYR7N67dhM-unsplash.jpg'
import projectThreeImage from '../images/projects/true-agency-9Bjog5FZ-oc-unsplash.jpg'
import serviceHeaderImage from '../images/handshake-man-woman-after-signing-business-contract-closeup.jpg'

const sections = [
  { id: 'section_1', label: 'Home' },
  { id: 'section_2', label: 'About' },
  { id: 'section_3', label: 'Services' },
  { id: 'section_4', label: 'Projects' },
  { id: 'section_5', label: 'Contact' },
]

const serviceCards = [
  {
    title: 'Websites',
    price: '$2,400',
    description: 'You may want to explore Too CSS for great collection of free HTML CSS templates.',
    icon: Globe,
  },
  {
    title: 'Branding',
    price: '$1,200',
    description:
      'You can explore more CSS templates on TemplateMo website by browsing through different tags.',
    icon: Lightbulb,
  },
  {
    title: 'Ecommerce',
    price: '$3,600',
    description: 'If you need a customized ecommerce website for your business, feel free to discuss with me.',
    icon: Smartphone,
  },
  {
    title: 'SEO',
    price: '$1,450',
    description:
      'To list your website first on any search engine, we will work together. First Portfolio is one-page CSS template for free download.',
    icon: Search,
  },
]

const projects = [
  { tag: 'Branding', title: 'Zoik agency', image: projectOneImage },
  { tag: 'Photography', title: 'The Watch', image: projectTwoImage },
  { tag: 'Website', title: 'Polo', image: projectThreeImage },
]

const clientLogos = [
  clientCachet,
  clientGuitarCenter,
  clientTokico,
  clientShopify,
  clientProfilRejser,
]

function App() {
  const [activeSection, setActiveSection] = useState('section_1')
  const [isSticky, setIsSticky] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [selectedProject, setSelectedProject] = useState(null)

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

  const handleNavClick = () => setIsMobileMenuOpen(false)

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
                onClick={handleNavClick}
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

          <button
            type="button"
            aria-label="Toggle navigation"
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            className="inline-flex rounded-full border border-slate-300 p-2 text-[var(--inkfilr-text)] md:hidden"
          >
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <nav className="mx-4 mb-4 rounded-2xl bg-white p-4 shadow-lg md:hidden">
            <div className="flex flex-col gap-3">
              {sections.map((section) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  onClick={handleNavClick}
                  className={`rounded-xl px-3 py-2 text-sm font-semibold uppercase tracking-[0.08em] transition-colors ${
                    activeSection === section.id
                      ? 'bg-[var(--inkfilr-secondary)]/10 text-[var(--inkfilr-secondary)]'
                      : 'text-[var(--inkfilr-text)]/75'
                  }`}
                >
                  {section.label}
                </a>
              ))}
            </div>
          </nav>
        )}
      </header>

      <main className="pb-24 pt-24">
        <section id="section_1" className="bg-[var(--inkfilr-primary)]">
          <div className="mx-auto grid min-h-[88vh] w-full max-w-6xl items-center gap-10 px-4 py-20 sm:px-6 lg:grid-cols-12 lg:px-8">
            <div className="relative z-10 lg:col-span-7">
              <div className="inline-flex items-center gap-4 rounded-full bg-white px-3 py-3 shadow-lg">
                <img
                  src={avatarImage}
                  alt="Profile avatar"
                  className="h-16 w-16 rounded-full object-cover"
                />
                <h1 className="text-3xl font-bold leading-tight text-[var(--inkfilr-text)] sm:text-5xl">
                  Hello friend!
                </h1>
              </div>

              <h2 className="mt-6 inline-block rounded-full bg-white px-6 py-4 text-3xl font-bold leading-tight text-[var(--inkfilr-secondary)] sm:text-5xl">
                I&apos;m available for freelance work.
              </h2>

              <a
                href="#section_2"
                className="mt-10 inline-flex rounded-full bg-[var(--inkfilr-primary)] px-8 py-4 text-lg font-bold text-white ring-2 ring-white/90 transition-transform duration-300 hover:-translate-y-1"
              >
                Let&apos;s begin
              </a>
            </div>

            <div className="relative lg:col-span-5">
              <div className="absolute inset-6 rounded-full bg-white/20" />
              <img src={heroImage} alt="Hero" className="relative z-10 w-full object-contain" />
            </div>
          </div>
        </section>

        <section id="section_2" className="mx-auto w-full max-w-6xl px-4 py-18 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2">
            <img
              src={aboutImage}
              alt="Team working together"
              className="h-full w-full rounded-3xl object-cover"
            />

            <div className="space-y-8">
              <div className="rounded-3xl bg-white p-8 shadow-sm">
                <div className="mb-6 flex items-center justify-between rounded-2xl bg-[var(--inkfilr-secondary)] px-4 py-3">
                  <h3 className="text-3xl font-bold text-white">My Story</h3>
                  <img src={avatarImage} alt="Avatar" className="h-14 w-14 rounded-full object-cover" />
                </div>
                <h4 className="text-2xl font-bold">A little bit about Joshua</h4>
                <p className="mt-4 text-lg text-[var(--inkfilr-muted)]">
                  This one-page portfolio is rebuilt in React for inkfilr while keeping the same visual
                  identity, section flow, and image-driven style.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 rounded-3xl bg-white p-8 shadow-sm">
                <div>
                  <p className="text-4xl font-bold text-[var(--inkfilr-secondary)]">20+</p>
                  <p className="text-[var(--inkfilr-muted)]">Years of Experiences</p>
                </div>
                <div>
                  <p className="text-4xl font-bold text-[var(--inkfilr-secondary)]">245</p>
                  <p className="text-[var(--inkfilr-muted)]">Happy Customers</p>
                </div>
                <div>
                  <p className="text-4xl font-bold text-[var(--inkfilr-secondary)]">640</p>
                  <p className="text-[var(--inkfilr-muted)]">Projects Finished</p>
                </div>
                <div>
                  <p className="text-4xl font-bold text-[var(--inkfilr-secondary)]">72+</p>
                  <p className="text-[var(--inkfilr-muted)]">Digital Awards</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10 rounded-3xl bg-white p-6 shadow-sm">
            <h3 className="text-center text-2xl font-bold">Companies I&apos;ve had worked</h3>
            <div className="mt-6 grid grid-cols-2 items-center gap-6 md:grid-cols-5">
              {clientLogos.map((logo) => (
                <img key={logo} src={logo} alt="Client logo" className="mx-auto h-14 w-auto opacity-80" />
              ))}
            </div>
          </div>
        </section>

        <section id="section_3" className="mx-auto w-full max-w-6xl px-4 py-18 sm:px-6 lg:px-8">
          <div className="mb-8 flex items-center justify-center gap-4 rounded-2xl bg-[var(--inkfilr-secondary)] px-6 py-4">
            <img src={serviceHeaderImage} alt="Services header" className="h-16 w-16 rounded-full object-cover" />
            <h3 className="text-4xl font-bold text-white">Services</h3>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {serviceCards.map((service) => {
              const ServiceIcon = service.icon

              return (
                <article
                  key={service.title}
                  className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="mb-4 flex items-center justify-between border-b border-slate-200 pb-4">
                    <h4 className="text-3xl font-bold sm:text-4xl">{service.title}</h4>
                    <span className="rounded-full bg-[var(--inkfilr-primary)] px-4 py-2 text-sm font-bold text-white">
                      {service.price}
                    </span>
                  </div>

                  <p className="text-lg leading-relaxed text-[var(--inkfilr-muted)]">{service.description}</p>

                  <button
                    type="button"
                    className="mt-6 rounded-full border border-slate-300 px-6 py-3 font-bold text-[var(--inkfilr-muted)] transition-colors duration-200 hover:border-[var(--inkfilr-secondary)] hover:text-[var(--inkfilr-secondary)]"
                  >
                    Discover More
                  </button>

                  <div className="absolute -bottom-8 -right-8 rounded-[28px] border border-slate-200 p-8 text-slate-800/90 transition-colors duration-200 group-hover:text-[var(--inkfilr-secondary)]">
                    <ServiceIcon className="h-12 w-12" />
                  </div>
                </article>
              )
            })}
          </div>
        </section>

        <section id="section_4" className="mx-auto w-full max-w-6xl px-4 py-18 sm:px-6 lg:px-8">
          <div className="mb-8 flex items-center justify-center gap-4 rounded-2xl bg-[var(--inkfilr-secondary)] px-6 py-4">
            <img
              src={projectsHeaderImage}
              alt="Projects header"
              className="h-16 w-16 rounded-full object-cover"
            />
            <h3 className="text-4xl font-bold text-white">Projects</h3>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <article
                key={project.title}
                className="overflow-hidden rounded-3xl border border-transparent bg-white p-6 shadow-sm transition-all duration-300 hover:border-[var(--inkfilr-secondary)] hover:shadow-lg"
              >
                <p className="text-sm font-bold uppercase tracking-wider text-[var(--inkfilr-secondary)]">
                  {project.tag}
                </p>
                <h4 className="mt-2 text-4xl font-bold sm:text-5xl">{project.title}</h4>
                <button
                  type="button"
                  onClick={() => setSelectedProject(project)}
                  className="mt-6 w-full overflow-hidden rounded-3xl"
                  aria-label={`Open ${project.title} preview`}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-[320px] w-full rounded-3xl object-cover transition-transform duration-300 hover:scale-[1.02]"
                  />
                </button>
              </article>
            ))}
          </div>
        </section>

        <section id="section_5" className="mx-auto w-full max-w-6xl px-4 py-18 sm:px-6 lg:px-8">
          <div className="mb-8 flex items-center justify-center gap-4 rounded-2xl bg-[var(--inkfilr-secondary)] px-6 py-4">
            <img
              src={contactHeaderImage}
              alt="Contact header"
              className="h-16 w-16 rounded-full object-cover"
            />
            <h3 className="text-4xl font-bold text-white">Say Hi</h3>
          </div>

          <div className="grid gap-6 lg:grid-cols-12">
            <div className="rounded-3xl bg-white p-8 shadow-sm lg:col-span-6">
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <p className="text-sm font-bold uppercase tracking-wider">Services</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {serviceCards.map((service) => (
                      <span
                        key={service.title}
                        className="rounded-full border border-slate-300 px-4 py-2 text-lg font-medium text-[var(--inkfilr-muted)]"
                      >
                        {service.title}
                      </span>
                    ))}
                  </div>

                  <p className="mt-8 text-sm font-bold uppercase tracking-wider">Stay connected</p>
                  <div className="mt-4 flex gap-3">
                    <a href="https://twitter.com" className="rounded-full border border-slate-300 p-3" aria-label="Twitter">
                      <AtSign className="h-4 w-4" />
                    </a>
                    <a href="https://instagram.com" className="rounded-full border border-slate-300 p-3" aria-label="Instagram">
                      <Camera className="h-4 w-4" />
                    </a>
                    <a href="https://pinterest.com" className="rounded-full border border-slate-300 p-3" aria-label="Pinterest">
                      <MapPin className="h-4 w-4" />
                    </a>
                    <a href="https://youtube.com" className="rounded-full border border-slate-300 p-3" aria-label="YouTube">
                      <Play className="h-4 w-4" />
                    </a>
                  </div>
                </div>

                <div>
                  <p className="text-sm font-bold uppercase tracking-wider">About</p>
                  <p className="mt-4 text-3xl font-medium text-[var(--inkfilr-muted)]">
                    Joshua is a professional web developer. Feel free to get in touch with me.
                  </p>

                  <p className="mt-8 text-sm font-bold uppercase tracking-wider">Email</p>
                  <a href="mailto:hello@josh.design" className="mt-3 inline-flex items-center gap-2 text-3xl text-[var(--inkfilr-muted)]">
                    <Mail className="h-5 w-5" />
                    hello@josh.design
                  </a>

                  <p className="mt-8 text-sm font-bold uppercase tracking-wider">Call</p>
                  <a href="tel:120-240-9600" className="mt-3 inline-flex items-center gap-2 text-4xl text-[var(--inkfilr-muted)]">
                    <Phone className="h-5 w-5" />
                    120-240-9600
                  </a>
                </div>
              </div>
            </div>

            <form
              className="space-y-4 rounded-3xl bg-white p-8 shadow-sm lg:col-span-6"
              onSubmit={(event) => event.preventDefault()}
            >
              <div className="grid gap-4 md:grid-cols-2">
                <input
                  type="text"
                  placeholder="Name"
                  className="rounded-xl border border-slate-300 px-4 py-4 text-lg outline-none transition-colors focus:border-[var(--inkfilr-secondary)]"
                />
                <input
                  type="email"
                  placeholder="Email address"
                  className="rounded-xl border border-slate-300 px-4 py-4 text-lg outline-none transition-colors focus:border-[var(--inkfilr-secondary)]"
                />
              </div>

              <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
                {serviceCards.map((service) => {
                  const ServiceIcon = service.icon

                  return (
                    <label
                      key={service.title}
                      className="flex cursor-pointer flex-col items-center gap-3 rounded-xl border border-slate-300 px-3 py-4 text-lg text-[var(--inkfilr-muted)]"
                    >
                      <input type="checkbox" className="accent-[var(--inkfilr-secondary)]" />
                      <ServiceIcon className="h-5 w-5 text-[var(--inkfilr-secondary)]" />
                      <span>{service.title}</span>
                    </label>
                  )
                })}
              </div>

              <textarea
                placeholder="Tell me about the project"
                rows={6}
                className="w-full rounded-xl border border-slate-300 px-4 py-4 text-lg outline-none transition-colors focus:border-[var(--inkfilr-secondary)]"
              />

              <div className="flex justify-end">
                <button
                  type="submit"
                  className="rounded-full bg-[var(--inkfilr-secondary)] px-12 py-4 text-2xl font-bold text-white transition-colors duration-200 hover:bg-[#10a67a]"
                >
                  Send
                </button>
              </div>
            </form>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200 py-10 text-center text-[var(--inkfilr-muted)]">
        <p>
          Copyright © 2036 <span className="font-bold">inkfilr</span>. All rights reserved.
        </p>
      </footer>

      {selectedProject && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/70 p-4"
          role="dialog"
          aria-modal="true"
          aria-label={`${selectedProject.title} preview`}
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="relative w-full max-w-4xl overflow-hidden rounded-3xl bg-white p-3 shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelectedProject(null)}
              className="absolute right-4 top-4 rounded-full bg-white/90 p-2 text-[var(--inkfilr-text)]"
              aria-label="Close preview"
            >
              <X className="h-5 w-5" />
            </button>
            <img
              src={selectedProject.image}
              alt={selectedProject.title}
              className="max-h-[80vh] w-full rounded-2xl object-cover"
            />
          </div>
        </div>
      )}
    </div>
  )
}

export default App
