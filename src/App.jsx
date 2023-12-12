import { useState } from 'react'
import Sidenav from './components/Sidenav'
import Main from './components/Main'
import Projects from './components/Projects'
import Contact from './components/Contact'
import About from './components/About'
import './styles.css';

function App() {
  

  return (
    
      <div className=' background'>
     
      <Sidenav /> 
      <Main/>
      <About/>
      <Projects/>
      <Contact/>
      </div>
    
  )
}

export default App
