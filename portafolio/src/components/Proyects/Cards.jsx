import './Cards.css'
import PropTypes from 'prop-types'
import AOS from 'aos'
import { useEffect } from 'react'


function Cards({name, description, img, link, id}){
    useEffect(() => {
        AOS.init();
    }, []); // Add this useEffect call
    
    return(
        <div className='container-card-p' id={id}>
            <a href={link} target="_blank" rel="noopener noreferrer" className='a-p'>
                    <div className='wrapper' data-aos='fade-right' data-aos-duration='100000' >
                        <figure>
                            <img className='img-card' src={img}></img>
                            <div className='overlay'>
                                <p>{name}</p>
                                <p>{description}</p>
                            </div>
                        </figure>

                    </div>
                    </a>
                    
        </div>
        
    )
}

export default Cards;

Cards.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired
}


