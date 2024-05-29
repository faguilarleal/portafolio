import './Cards.css'
import PropTypes from 'prop-types'
import AOS from 'aos'
import { useEffect } from 'react'


function Cards({name, description, img, link, img2}){
    useEffect(() => {
        AOS.init();
    }, []); // Add this useEffect call
    
    return(
        <div className='container-card-p' >
            <a href={link} target="_blank" rel="noopener noreferrer" className='a-p'>
                    <div className='wrapper' data-aos='fade-right' data-aos-duration='100000' >
                        <figure>
                            <div className='front-card' style={{ 
                            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.5)), url(${img2})`, backgroundSize: `cover`  }}>
                                <p id='name-p'>{name}</p>
                                <p>{description}</p>
                            </div>
                            <div className='overlay'style={{ 
                            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${img})`, backgroundSize: `cover` }}>
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
  description: PropTypes.div,
  img: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
    img2: PropTypes.string.isRequired
}


