/* eslint-disable react/react-in-jsx-scope */
import LogoSection from "./components/LogoSection"
import NavBar from "./components/Navbar"
import FeatureCards from "./sections/FeatureCards"
import Hero from "./sections/Hero"
import Showcase from "./sections/Showcase"

const App = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <Showcase />
      <LogoSection/>
      <FeatureCards/>
    </>
  )
}

export default App