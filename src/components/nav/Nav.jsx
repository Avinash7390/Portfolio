import React from 'react'
import './Nav.css'
import {HiOutlineHome} from 'react-icons/hi'
import {AiOutlineUser} from 'react-icons/ai'
import {BsArrowDownCircleFill} from 'react-icons/bs'
import {MdOutlineContactMail} from 'react-icons/md'
import { useState } from 'react'

const Nav = ()=> {
  const[activeNav,setActiveNav] = useState('#')
  return (
    <nav>
      <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#'? 'active':''}><HiOutlineHome/></a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about'? 'active':''} ><AiOutlineUser/></a>
      <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact'? 'active':''}><MdOutlineContactMail/></a>
      <a href="#footer" onClick={() => setActiveNav('#footer')} className={activeNav === '#footer'? 'active':''} ><BsArrowDownCircleFill/></a>
    </nav>
  )
}
export default Nav