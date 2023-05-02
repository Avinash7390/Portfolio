import React from 'react'
import './About.css'

import ME from '../../assets/AboutSectionImg.png'
import {TbAward} from 'react-icons/tb'
import {AiFillFolderOpen} from 'react-icons/ai'
import {FaHouseDamage} from 'react-icons/fa'


const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-image'>
            <img src={ME} alt="About-Img" />
          </div>
        </div>
        <div className='about__content'>
           <p>
            Hello there! I'm Avinash from MNNIT Allahabad Prayagraj, A FullStack Developer and Data Structure Enthusiast
          </p>
          <div className='about__cards'>
            <article className='about__card'>
              <TbAward className='about__icon'/>
              <h5>Experience</h5>
              <small>Working as a student</small>
            </article>
            <article className='about__card'>
              <AiFillFolderOpen className='about__icon'/>
              <h5>Projects</h5>
              <small>Working on a Major project</small>
            </article>
            <article className='about__card'>
              <FaHouseDamage className='about__icon'/>
              <h5>Address</h5>
              <small>Prayagraj, Uttar Pradesh, India</small>
            </article>
          </div>
          
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>

        </div>
      </div>
    </section>
  )
}

export default About