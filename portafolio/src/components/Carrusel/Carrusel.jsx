import './Carrusel.css';

function Carrusel() {
    
    
  return (
    <div className="carrusel-container">
        <section className="carrusel">
            <div className="slider-wraper">
                <div className="slider">
                    <img src="./assets/5.png" id="slide1" alt="myMelody" className='img-c'></img>
                    <img src="./assets/6.png" id="slide2" alt="myMelody2" className='img-c'></img>
                    <img src="./assets/7.png" id="slide3" alt="myMelody3" className='img-c'></img>
                </div>
                <div className="slider-nav">
                    <a href="#slide1"></a>
                    <a href="#slide2"></a>
                    <a href="#slide3"></a>
                </div>
            </div>
        </section>

    </div>
  );
}

export default Carrusel;