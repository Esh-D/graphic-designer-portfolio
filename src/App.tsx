import './App.css'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import Hero from './components/Hero/Hero'
import Navbar from './components/Navbar/Navbar'
import Projects from './components/Projects/Projects'
import Home from './components/Home/Home'
import { Routes, Route } from "react-router";

function App() {
  return (
    <div className="overflow-hidden">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  )
}

//Website not responsive (mainly navbar)
//background blur, autoscroll

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
