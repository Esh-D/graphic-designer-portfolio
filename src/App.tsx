import './App.css'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import Hero from './components/Hero/Hero'
import Navbar from './components/Navbar/Navbar'
import Projects from './components/Projects/Projects'

function App() {
  return (
    <>
      <Navbar />
      <div id="page-content">
        <Hero />
        <About />
        <Projects />
        <Contact />
      </div>
      <Footer />
    </>
  )
}

export default App

//Projects, Contact Form
//Cards

//Hero Section
//About Section
//Projects Section
//Contact Form Section
//Navbar / Header with autoscrolling - Name or url of website in left area of header

//Blog page?

//Social links
//Resume download?

//showcasing GitHub calendar?
//

/*
<ul>
          <li><a>Home</a></li>
          <li><a>About</a></li>
          <li><a>Projects</a></li>
          <li><a>Contact</a></li>
        </ul>
*/
