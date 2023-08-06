import React from 'react'
import './about.css'
import aboutpic from '../../assets/avatar1.jpg'
import { FaAward } from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'
 
const About = () => {
  return (
    <>
      <section id='about'>
        <h4>Get to Know</h4>
        <h2>ABOUT ME</h2>

        <div className="container about-container">
          <div className='about-me'>
         <div className="aboutpic">
         <img src={aboutpic} alt="aboutpic" />
        </div>
        </div>
        
        <div className="about-content">
          <div className="about-cards">
            <article className="about-card">
              <FaAward className='about-icon'/>
              <h4>Experience</h4>
              <small>3+ Years Working</small>
            </article>
            <article className="about-card">
              <FiUsers className='about-icon'/>
              <h4>Clients</h4>
              <small>200+ Worldwide</small>
            </article>
            <article className="about-card">
              <VscFolderLibrary className='about-icon'/>
              <h4>Projects</h4>
              <small>80+ Completed</small>
            </article>
          </div>

          <p>
          Lorem ipsum dolor sit amet. Qui vero enim At facere nemo et corrupti autem. At facere tempore vel velit assumenda eum sint voluptates est ullam quaerat aut ratione optio vel minus commodi est dolor tempora.
          </p>

          <a href="#contact" className='btn btn-primary'> Let's connect and bring your digital visions to life!</a>
        </div>
        </div>
        </section>

    </>
  )
}

export default About