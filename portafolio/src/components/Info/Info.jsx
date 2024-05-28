import './Info.css';

function Info() {
    return (
        <div className='aboutme'>
            <div id='title-content'>
                <p id='name'>Francis Aguilar</p>
                <p id='title'>Estudiante de Ciencias de la Computación</p>
            </div>
            <img className='header-img' src='./src/assets/green.jpg'></img>
            <div id='content-info'>
                <p id='info'>{'Soy estudiante de tercer año en la Universidad del Valle de Guatemala.\n\nMe gusta aprender nuevas tecnologías y aplicarlas en proyectos personales.\n\nConoce un poco de mi trabajo visitando mi portafolio '}</p>
            </div>
            <img id='profile-img' className='flip-in-ver-right ' src='./src/assets/FrancisPerfil.jpg'></img>
        </div>

    )
}

export default Info;