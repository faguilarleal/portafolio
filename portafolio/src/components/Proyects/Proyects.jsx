import './Proyects.css';
import AOS from 'aos'; // Import AOS
import { useEffect } from 'react'; // Import useEffect


function Proyects(){
    useEffect(() => {
        AOS.init();
    }, []); // Add this useEffect call
    

    const proyects = [
        {
            name: 'My Melody',
            description: 'Only CSS',
            img: './src/assets/myMelody.jpg',
            link: 'https://css-my-melody.web.app/'
        },
        {
            name: 'Calculadora',
            description: 'Calculadora con Next.js',
            img: './src/assets/calculadora.png',
            link: 'https://calculadora-francis.web.app/'
        },
        {
            name: 'Blog TS',
            description: 'Blog creado con React y Vite',
            img: './src/assets/blog.png',
            link: 'http://uwu-guate.site:3711/home'
        },
        {
            name: 'Chat',
            description: 'Chat creado con js',
            img: './src/assets/chat.png',
            link: 'http://uwu-guate.site:3511'
        }
    ]

    console.log(proyects);

    return(
        <div className='proyects'>
            <div className='title-pr'>
                <h2 id='name' data-aos='fade-up' data-aos-duration='100000'>Mis Proyectos</h2>
            </div>
            
        </div>
    );
}

export default Proyects;