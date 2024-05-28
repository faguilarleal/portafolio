import './Cards.css'
import PropTypes from 'prop-types'


function Cards({name, description, img, link}){
    return(
        <a href={link} target="_blank" rel="noopener noreferrer">
        <div className='wrapper' >
            <figure>
                <img className='img-card' src={img}></img>
                <div className='overlay'>
                    <p>{name}</p>
                    <p>{description}</p>
                </div>
            </figure>

        </div>
        </a>
        
    )
}

export default Cards;

Cards.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired
}


