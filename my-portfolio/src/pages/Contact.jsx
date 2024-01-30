import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faLinkedin, faGithub, faWhatsapp, faSkype, faSlack} from '@fortawesome/free-brands-svg-icons';
import './Contact.css';

const Contact = () => {
  const refForm = useRef();
  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
    .sendForm(
      "gmail",
      "template_0calzah",
      refForm.current,
      "user_GWqENTqPmUmtpZKUX"
    )
    .then(
      () => {
        alert("Message successfully sent!")
        window.location.reload(false)
      },
      () => {
        alert("Failed to send message! Please try again.")
      }
    )
  }
  return (
    <div><br></br><h1>Contact</h1>
    <div className='contact-page'>
    <div className="text">
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate corporis, ullam facere perspiciatis, est nam minima earum pariatur eaque repellendus incidunt quia fugit porro illo sequi possimus, laborum et? Eius perferendis aliquid officia at dolor consequatur beatae eum maxime consequuntur omnis laborum, eligendi labore ullam sapiente eaque, minus impedit tenetur maiores, neque culpa sequi distinctio? Error porro culpa pariatur, delectus expedita reiciendis nisi facilis eum placeat fugiat dolores debitis quasi ratione eaque itaque nihil! Adipisci officia deserunt sit veritatis ratione! Dignissimos ipsam expedita, delectus officia eius sapiente, voluptate eos laborum officiis exercitationem modi, voluptas est voluptatem porro hic eveniet. Laboriosam.

      </p>
      <div className="contact-form">
        <form ref={refForm} onSubmit={sendEmail}>
          <ul>
            <li className='half'>
              <input type="text" name="name" id="name" placeholder="Name" required/>
            </li>
            <li className='half'>
              <input type="email" name="email" id="email" placeholder="Email" required/>
            </li>
            <li>
              <input placeholder="Subject" type="text" name="subject" id="subject" required/>
            </li>
            <li>
              <textarea placeholder="Message" name="message" id="message" required></textarea>
            </li>
            <li>
              <input type="submit" className="btn" value="Send" />
            </li>
          </ul>
        </form>
      </div>
    </div>

    </div>


    <div className='icon-list'>
        <div className='icon1'>
        <a
            href="https://www.linkedin.com/feed/?trk=guest_homepage-basic_google-one-tap-submit"
            target="_blank" rel="noreferrer"
          >
        <FontAwesomeIcon icon={faLinkedin} /> </a>
    </div>
    <div className='icon2'>
    <a href="https://github.com/Marcel0906" target="_blank" rel="noreferrer">
    <FontAwesomeIcon icon={faGithub} /> </a>
    </div>
    <div className='phone'>
    <div className='icon3'>
      <span>015141277858</span>
    <FontAwesomeIcon icon={faWhatsapp}/>
    </div>
    </div>
    <div className='icon4'>
    <a href="https://join.skype.com/invite/KK4DdcF44fq4" target="_blank" rel="noreferrer">
    <FontAwesomeIcon icon={faSkype} /></a>
    </div>
    <div className='icon5'>
    <a href="https://join.slack.com/t/webdevcel/shared_invite/zt-2b2k4pyee-1eUzqwoDGS8sfwTCgSAh1g" target="_blank" rel="noreferrer">
    <FontAwesomeIcon icon={faSlack} /></a>
    </div>
    </div>
    </div>
    
  )
}

export default Contact