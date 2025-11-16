import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Industries from './components/Industries'
import WhyUs from './components/WhyUs'
import Jobs from './components/Jobs'
import SuccessStories from './components/SuccessStories'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  const handleHire = () => {
    const el = document.getElementById('contact')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }
  const handleFindJob = () => {
    const el = document.getElementById('jobs')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Hero onHire={handleHire} onFindJob={handleFindJob} />
      <About />
      <Services />
      <Industries />
      <WhyUs />
      <div id="jobs"><Jobs /></div>
      <SuccessStories />
      <div id="contact"><Contact /></div>
      <Footer />
    </div>
  )
}

export default App
