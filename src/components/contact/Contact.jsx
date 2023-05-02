import React from 'react'
import './Contact.css'
import {AiOutlineMail} from 'react-icons/ai'
import {AiFillFacebook} from 'react-icons/ai'
import {FaWhatsappSquare} from 'react-icons/fa'
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_gf02dxy', 'template_1ddvv3u', form.current, '4OhxEVVlFsPLow_pR')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    e.target.reset();
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container" >
        <div className="contact__options">
          <article className='contact__option'>
            <AiOutlineMail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>kumaravinash48836@gmail.com</h5>
            <a href="mailto: kumaravinash48836@gmail.com" rel="noreferrer" target="_blank">Send a message</a>
          </article>
          <article className='contact__option'>
            <AiFillFacebook className='contact__option-icon'/>
            <h4>Facebook</h4>
            <h5>Avinash Kumar</h5>
            <a href="https://www.facebook.com/profile.php?id=100076855456959" rel="noreferrer" target="_blank">Send a message</a>
          </article>
          <article className='contact__option'>
            <FaWhatsappSquare className='contact__option-icon'/>
            <h4>WhatsApp</h4>
            <h5>+91 1234567890</h5>
            <a href="https://api.whatsapp.com/send?phone=9721432645" rel="noreferrer" target="_blank">Send a message</a>
          </article>
        </div>
        
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Name' required/>
          <input type="email" name = 'email' placeholder='Your Email' required />
          <textarea name="message" id="" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
  


    </section>
  )
}

export default Contact