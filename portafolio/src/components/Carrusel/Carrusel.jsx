import './Carrusel.css';

function Carrusel() {
    
    
  return (
    <div className="carrusel-container">
        <section className="carrusel">
            <div className="slider-wraper">
                <div className="slider">
                    <img src="./src/assets/1.png" id="slide1" alt="myMelody" className='img-c'></img>
                    <img src="./src/assets/2.png" id="slide2" alt="myMelody2" className='img-c'></img>
                    <img src="./src/assets/3.png" id="slide3" alt="myMelody3" className='img-c'></img>
                    <img src="./src/assets/4.png" id="slide4" alt="myMelody4" className='img-c'></img>
                </div>
                <div className="slider-nav">
                    <a href="#slide1"></a>
                    <a href="#slide2"></a>
                    <a href="#slide3"></a>
                    <a href="#slide4"></a>
                </div>
            </div>
        </section>

    </div>
  );
}

export default Carrusel;