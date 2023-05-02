import React from 'react'
import './Footer.css'
import {FaFacebookSquare} from 'react-icons/fa'
import {TfiLinkedin} from 'react-icons/tfi'
import {GrInstagram} from 'react-icons/gr'

function Footer() {
  return (
    <footer id='footer'>
    <a href="#" className='footer__logo'>Avinash</a>
    <ul className='permalinks'>
      <li><a href="#">Home</a></li>
      <li><a href="#">About</a></li>
      <li><a href="#">Contact</a></li>
    </ul>
    <div className="footer__socials">
      <a href="https://www.facebook.com/profile.php?id=100076855456959" rel="noreferrer" target="_blank"><FaFacebookSquare/></a>
      <a href="https://www.instagram.com/aviii__18_/" rel="noreferrer" target="_blank"><GrInstagram/></a>
      <a href="https://www.linkedin.com/in/avinash-kumar20214259/" rel="noreferrer" target="_blank"><TfiLinkedin/></a>
    </div>
    <div className="footer__copyright">
      <small>&copy; Avinash. All rights reserved</small>
    </div>

    </footer>
  )
}

export default Footer