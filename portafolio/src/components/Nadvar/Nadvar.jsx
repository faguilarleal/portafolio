import './Nadvar.css';

function Nadvar() {
    const opciones = ['Sobre mi', 'Proyectos', 'Tecnologías', 'Contacto'];

    return (
        <div className="nadvar-container">
            <div className='nadvar'>
                {opciones.map((opcion, index) => {
                        return(
                            <div className="opcion" key={index}>
                                    <p id='opi'>{opcion}</p>
                            </div>
                        );
                    })}
            </div>
        </div>
    );
}

export default Nadvar;