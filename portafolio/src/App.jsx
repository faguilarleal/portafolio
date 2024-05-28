import './App.css'
import Nadvar from './components/Nadvar/Nadvar'
import Info from './components/Info/Info'
import Proyects from './components/Proyects/Proyects'

function App() {

  return (
    <>
      <div className='container-all'>
        <Nadvar />
        <div className='content'>
          <Info />
          <div></div>
          <div className='tech'></div>
          <div className='contact'></div>

        </div>
        <div>

        </div>
      </div>
    </>
  )
}

export default App
