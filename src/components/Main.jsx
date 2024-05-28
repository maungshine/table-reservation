import About from "./About"
import Featured from "./Featured"
import Hero from "./Hero"
import Testimonials from "./Testimonials"
import '../styles/main.css'

function Main() {
  return (
    <main className="main-content">
        <Hero />
        <Featured />
        <Testimonials />
        <About />
    </main>
  )
}

export default Main