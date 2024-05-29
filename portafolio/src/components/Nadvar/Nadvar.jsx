import './Nadvar.css';

function Nadvar() {
    const opciones = [
        {opi:'Sobre mi', ref:"#personal-info"}, {opi:'Proyectos', ref:"#projects"}, {opi:'Tecnologías', ref:"#tech"}, {opi:'Contacto', ref:"#contact"}];
    return (
        <div className="nadvar-container">
            <div className='nadvar'>
                {opciones.map((opcion, index) => {
                        return(
                            <div className="opcion" key={index}>
                                    <a href={opcion.ref} className='opi'>{opcion.opi}</a>
                            </div>
                        );
                    })}
            </div>
        </div>
    );
}

export default Nadvar;