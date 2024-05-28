import Cards from './Cards.jsx';
import './Proyects.css';

function Proyects(){
    const proyects = [
        {
            name: 'Proyecto 1',
            description: 'Descripción del proyecto 1',
            img: 'https://via.placeholder.com/150',
            link: 'https://www.google.com'
        },
        {
            name: 'Proyecto 2',
            description: 'Descripción del proyecto 2',
            img: 'https://via.placeholder.com/150',
            link: 'https://www.google.com'
        },
        {
            name: 'Proyecto 3',
            description: 'Descripción del proyecto 3',
            img: 'https://via.placeholder.com/150',
            link: 'https://www.google.com'
        },
        {
            name: 'Proyecto 4',
            description: 'Descripción del proyecto 4',
            img: 'https://via.placeholder.com/150',
            link: 'https://www.google.com'
        },
        {
            name: 'Proyecto 5',
            description: 'Descripción del proyecto 5',
            img: 'https://via.placeholder.com/150',
            link: 'https://www.google.com'
        },
        {
            name: 'Proyecto 6',
            description: 'Descripción del proyecto 6',
            img: 'https://via.placeholder.com/150',
            link: 'https://www.google.com'
        },
        {
            name: 'Proyecto 7',
            description: 'Descripción del proyecto 7',
            img: 'https://via.placeholder.com/150',
            link: 'https://www.google.com'
        },
        {
            name: 'Proyecto 8',
            description: 'Descripción del proyecto 8',
            img: 'https://via.placeholder.com/150',
            link: 'https://www.google.com'
        },
        {
            name: 'Proyecto 9',
            description: 'Descripción del proyecto 9',
            img: 'https://via.placeholder.com/150',
            link: 'https://www.google.com'
        },
        {
            name: 'Proyecto 10',
            description: 'Descripción del proyecto 10',
            img: 'https://via.placeholder.com/150',
            link: 'https://www.google.com'
        }
    ]

    console.log(proyects);

    return(
        <div className='proyects'>
            <div className='title-pr'>
                <h2 id='name-pr'>Mis Proyectos</h2>
            </div>
            <div className='content-proyects'>
                <Cards name="my Melody" description='Proyecto css' img='./src/assets/myMelody.jpg' link='https://css-my-melody.web.app/'/>
            </div>
        </div>
    );
}

export default Proyects;