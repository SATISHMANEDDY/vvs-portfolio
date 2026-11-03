import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Projects } from './components/Projects'
import { Achievements } from './components/Achievements'
import { Experience } from './components/Experience'
import { Certifications } from './components/Certifications'
import { TechStack } from './components/TechStack'
import { Journal } from './components/Journal'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

function App() {
  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <Navbar />
      <main id="main">
        <Hero />
        <About />
        <Projects />
        <Achievements />
        <Experience />
        <Certifications />
        <TechStack />
        <Journal />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
