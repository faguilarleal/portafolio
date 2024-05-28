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
                <div id='card-personal' data-aos='fade-up' data-aos-duration='100000'>
                    <div id='image-container1'>
                        <img id='img-me' src='./src/assets/FrancisPerfil.jpg' alt='Francis Aguilar' />
                    </div>
                    <div id='image-container2'>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Info;