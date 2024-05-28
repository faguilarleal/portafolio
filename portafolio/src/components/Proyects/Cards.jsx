import './Cards.css';


function Card(){
    return(
        <div className='card'>
            <div className='image-box-card'>
                <img src='./src/assets/myMelody.jpg'></img>
            </div>
            <div className='content-card'>
                <h2>Proyecto 1</h2>
                <p>Descripción del proyecto 1</p>
            </div>
        </div>
    )
}

export default Card;