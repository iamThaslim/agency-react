import Contact from "./components/Contact"
import Courses from "./components/Courses"
import Hero from "./components/Hero"
import LogoClouds from "./components/LogoClouds"
import NavBar from "./components/NavBar"
import Team from "./components/Team"
import Testimonial from "./components/Testimonial"


function App() {

  return (
    <div className="p-2 md:px-10">
    <NavBar />
    <Hero />
    <LogoClouds />
    <Courses />
    <Testimonial />
    <Team />
    <Contact />
    </div>
  )
}

export default App
