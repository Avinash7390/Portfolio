import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {ImGithub} from 'react-icons/im'
import {SiLeetcode} from 'react-icons/si'

const header_socials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/avinash-kumar20214259/" rel="noreferrer" target="_blank"><BsLinkedin/></a>
        <a href="https://leetcode.com/iffthen/" rel="noreferrer" target="_blank"><SiLeetcode/></a>
        <a href="https://github.com/Avinash7390" rel="noreferrer" target="_blank"><ImGithub/></a>
    </div>
  )
}
export default header_socials