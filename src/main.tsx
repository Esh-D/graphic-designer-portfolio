import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter, Routes, Route } from "react-router";
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Projects from './components/Projects/Projects'

//TODO: Change images to use assets (rather than urls)

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/graphic-designer-portfolio" element={<App />} />
        <Route path="/graphic-designer-portfolio/about" element={<About />} />
        <Route path="/graphic-designer-portfolio/portfolio" element={<Projects />} />
        <Route path="/graphic-designer-portfolio/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
