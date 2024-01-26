import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faLinkedin, faGithub, faWhatsapp, faSkype, faSlack} from '@fortawesome/free-brands-svg-icons';

const Contact = () => {
  return (
    <div><h1>Contact</h1>
    <div className='icon-list'>
        <div className='icon1'>
        <FontAwesomeIcon icon={faLinkedin} />
    </div>
    <div className='icon2'>
    <FontAwesomeIcon icon={faGithub} />
    </div>
    <div className='icon3'>
    <FontAwesomeIcon icon={faWhatsapp} />
    </div>
    <div className='icon4'>
    <FontAwesomeIcon icon={faSkype} />
    </div>
    <div className='icon5'>
    <FontAwesomeIcon icon={faSlack} />
    </div>
    </div>
    </div>
    
  )
}

export default Contact