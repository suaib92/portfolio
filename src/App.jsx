import { useState } from 'react'
import Sidenav from './components/Sidenav'
import Main from './components/Main'
import Projects from './components/Projects'
import Contact from './components/Contact'
import About from './components/About'

function App() {
  

  return (
    
      <div className=' bg-gray-100'>
      <Sidenav /> 
      <Main/>
      <About/>
      <Projects/>
      <Contact/>
      </div>
    
  )
}

export default App
