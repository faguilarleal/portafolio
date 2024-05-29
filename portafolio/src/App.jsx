import './App.css'
import Nadvar from './components/Nadvar/Nadvar'
import Info from './components/Info/Info'
import Proyects from './components/Proyects/Proyects'
import AOS from 'aos'
import { useEffect } from 'react'
import Tech from './Tech/Tech'

function App() {

  useEffect(() => {
    AOS.init();
}, []); // Add this useEffect call



  return (
    <>
      <div className='container-all'>
        <Nadvar />
        <div className='content'>
          <Info />
          <Proyects />
          <Tech />
          <div className='contact' id='contact'></div>

        </div>
        <div>

        </div>
      </div>
    </>
  )
}

export default App
