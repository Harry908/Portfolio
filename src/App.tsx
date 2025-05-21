/* eslint-disable react/react-in-jsx-scope */
import LogoSection from "./components/LogoSection"
import NavBar from "./components/NavBar"
import ExperienceSection from "./sections/ExperienceSection"
import FeatureCards from "./sections/FeatureCards"
import Hero from "./sections/Hero"
import Showcase from "./sections/Showcase"

const App = () => {
  return (
    <body>
      <NavBar />
      <Hero />
      <Showcase />
      <LogoSection/>
      <FeatureCards/>
      <ExperienceSection/>
      <div className="my-20"/>
    </body>
  )
}

export default App