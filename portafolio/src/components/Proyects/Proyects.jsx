import './Proyects.css';
import AOS from 'aos'; // Import AOS
import { useEffect } from 'react'; // Import useEffect
import Cards from './Cards.jsx';


function Proyects(){
    useEffect(() => {
        AOS.init();
    }, []); // Add this useEffect call
    

    const proyects = [
        {
            name: 'Only CSS',
            description: 'Recreación de una imagen de My Melody con solamente CSS',
            img: './src/assets/myMelody.png',
            link: 'https://css-my-melody.web.app/',
            img2: './src/assets/2.png'
        },
        {
            name: 'Calculadora',
            description: <>Calculadora creada con Next.js <br/>Test integradas para el mejoramiento de su funcionalidad</>,
            img: './src/assets/calculadora.png',
            link: 'https://calculadora-francis.web.app/',
            img2: './src/assets/3.png'
        },
        {
            name: 'Blog Taylor Swift',
            description: <>Blog creado con React y Vite<br/> 
            Desarrollo de una api para el manejo de los posts </>,
            img: './src/assets/blog.png',
            link: 'http://uwu-guate.site:3711/home',
            img2: './src/assets/1.png'
        },
        {
            name: 'Chat',
            description: <>Chat creado con js y node.js para el manejo de los mensajes<br/>
            Creación de una api grupal, donde todos los miembros pueden interactuar</>,
            img: './src/assets/chat.png',
            link: 'http://uwu-guate.site:3511',
            img2: './src/assets/4.png'
        }
    ]

    console.log(proyects);

    return(
        <div className='proyects' id='projects'>
            <div className='title-pr'>
                <h2 id='name' data-aos='fade-up' data-aos-duration='100000'>Mis Proyectos</h2>
            </div>
            <div className='content-proyects'>
                {proyects.map((proyect, index) => {
                    return(
                        <Cards 
                            key={index}
                            name={proyect.name}
                            description={proyect.description}
                            img={proyect.img}
                            link={proyect.link}
                            img2={proyect.img2}
                        />
                    );
                })}
            </div>
        </div>
    );
}

export default Proyects;