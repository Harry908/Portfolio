/* eslint-disable react/react-in-jsx-scope */
import LogoSection from "./components/LogoSection"
import NavBar from "./components/NavBar"
import Contact from "./sections/Contact"
import ExperienceSection from "./sections/ExperienceSection"
import FeatureCards from "./sections/FeatureCards"
import Footer from "./sections/Footer"
import Hero from "./sections/Hero"
import Showcase from "./sections/Showcase"
import TechStack from "./sections/TechStack"

const App = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <Showcase />
      <LogoSection/>
      <FeatureCards/>
      <ExperienceSection/>
      <TechStack/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App