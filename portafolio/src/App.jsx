import './App.css'
import Nadvar from './components/Nadvar/Nadvar'
import Info from './components/Info/Info'
import Proyects from './components/Proyects/Proyects'
import Carrusel from './components/Carrusel/Carrusel'
import AOS from 'aos'
import { useEffect } from 'react'

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
          <div className='tech' id='tech'>
            <h2 id='name' data-aos='fade-up' data-aos-duration='100000' >Tecnologías</h2>
            <Carrusel />
          </div>
          <div className='contact' id='contact'></div>

        </div>
        <div>

        </div>
      </div>
    </>
  )
}

export default App
