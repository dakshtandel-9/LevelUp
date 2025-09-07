import Header from '../components/Header'
import Hero from '../components/Hero'
import About from '../components/About'
import WhatIsInsideWorkshop from '../components/WhatIsInsideWorkshop'
import FAQ from '../components/FAQ'
import Footer from '../components/Footer'
import Hero2 from '../components/Hero2'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero2/>
        <About />
        <WhatIsInsideWorkshop />
        <FAQ />
      </main>
      <Footer />
    </>
  )
}