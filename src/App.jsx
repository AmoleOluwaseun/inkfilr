import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Hero from './sections/Hero'
import HowItWorks from './sections/HowItWorks'
import FeatureGrid from './sections/FeatureGrid'
import UseCases from './sections/UseCases'
import SocialProof from './sections/SocialProof'
import CallToAction from './sections/CallToAction'

function App() {
  return (
    <div className="min-h-screen bg-[var(--ink-bg)] text-[var(--ink-text)]">
      <Navbar />
      <main>
        <Hero />
        <HowItWorks />
        <FeatureGrid />
        <UseCases />
        <SocialProof />
        <CallToAction />
      </main>
      <Footer />
    </div>
  )
}

export default App
