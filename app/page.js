import Nav from '@/components/Nav'
import Hero from '@/components/sections/Hero'
import Recognition from '@/components/sections/Recognition'
import Approach from '@/components/sections/Approach'
import About from '@/components/sections/About'
import Services from '@/components/sections/Services'
import Testimonials from '@/components/sections/Testimonials'
import CTA from '@/components/sections/CTA'
import Footer from '@/components/sections/Footer'

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <Recognition />
      <Approach />
      <About />
      <Services />
      <Testimonials />
      <CTA />
      <Footer />
    </>
  )
}
