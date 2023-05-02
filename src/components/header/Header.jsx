import React from 'react'
import './Header.css'
import CTA from './CTA'
import HeaderSocials from './header_socials'
import me from '../../assets/Avinash_header_img1.png'

const Header = () => {
  return (
   <header>
    <div className="container header__container">
      <h5>Hello I'm</h5>
      <h1>Avinash</h1>
      <h5 className="text-light">FullStack Developer</h5>
      <CTA/>
      <HeaderSocials/>
      <div className="me">
        <img src={me} alt="error400"/>
      </div>
      <a href="#testimonials" className='scroll__down'>Scroll Down</a>

    </div>
   </header>
  )
}

export default Header