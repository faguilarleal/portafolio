import { useEffect } from 'react'; // Import useEffect
import './Info.css';
import 'animate.css'
import AOS from 'aos'; // Import AOS

function Info() {
    useEffect(() => {
        AOS.init();
    }, []); // Add this useEffect call
    
    return (
        <div className='aboutme'>
            <div id='title-content'>
                <h1 id='name' className='animate__animated animate__fadeInUp'>Francis Aguilar</h1>
                <div id='second-title-container'>
                    <div className='desc'>Portafolio personal</div>
                    <div className='desc' id='title2'>conoce mis trabajos</div>
                </div>
            </div>
            <div id='personal-info' >
                <div id='card-personal'data-aos='fade-up' data-aos-duration='100000' >
                        <div id='container-flip'>
                            <div id='card-flip' >
                                {/* front */}
                                <div id='image-container1' className='flip'> 
                                </div>
                                {/* back */}
                                <div id='image-container2' className='flip'>    
                                </div>
                            </div>
                        </div>
                        <div className='info-content' data-aos='fade-up' data-aos-duration='100000'>
                            <h2 id='name-p2'>About me</h2>
                            <p id='hola'>Hola ! Mi nombre es Francis Aguilar y soy estudiante de tercer año en la carrera 
                                de Ciencias de la Computación y tecnologías de la Información en la UVG. 
                                Este es mi portafolio personal, aqui puedes ver algunos de los proyectos que he desarrollado
                                a lo largo de mi carrera estudiantil. Me gusta mucho aprender ! Espero lo disfrutes. </p>
                        </div>
                </div>
                
            </div>
        </div>
    )
}

export default Info;