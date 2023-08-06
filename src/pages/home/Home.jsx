import React from 'react'
import './home.css'
import {BsPatchCheckFill} from 'react-icons/bs'

const Home = () => {
  return (
   <>
   <section className="experience">
    <h4>What Skills I have</h4>
    <h2>MY SKILLS</h2>
    <div className='container exp-container'>
      <div className='exp-frontend'>
        <h3>Frontend Development</h3>
        <div className="exp-content">
          <article className='exp-details'>
            <BsPatchCheckFill className='exp-details-icon'/>
            <h4>HTML</h4>
            <small className='text-light'>Experienced</small>
          </article>
          <article className='exp-details'>
          <BsPatchCheckFill className='exp-details-icon'/>
            <h4>CSS</h4>
            <small className='text-light'>Intermediate</small>
          </article>
          <article className='exp-details'>
          <BsPatchCheckFill className='exp-details-icon'/>
            <h4>JavaScript</h4>
            <small className='text-light'></small>
          </article>
          <article className='exp-details'>
          <BsPatchCheckFill className='exp-details-icon'/>
            <h4>Bootstrap</h4>
            <small className='text-light'>Experienced</small>
          </article>
          <article className='exp-details'>
          <BsPatchCheckFill className='exp-details-icon'/>
            <h4>React</h4>
            <small className='text-light'>Experienced</small>
          </article>
        </div>
      </div>
      <div className='exp-backend'>
        <h3>Backend Development</h3>
        <div className="exp-content">
        <article className='exp-details'>
        <BsPatchCheckFill className='exp-details-icon'/>
            <h4>Node JS</h4>
            <small className='text-light'>Experienced</small>
          </article>
          <article className='exp-details'>
          <BsPatchCheckFill className='exp-details-icon'/>
            <h4>MongoDB</h4>
            <small className='text-light'>Intermediate</small>
          </article>
          <article className='exp-details'>
          <BsPatchCheckFill className='exp-details-icon'/>
            <h4>Python</h4>
            <small className='text-light'>Intermediate</small>
          </article>
          <article className='exp-details'>
          <BsPatchCheckFill className='exp-details-icon'/>
            <h4>Php</h4>
            <small className='text-light'>Experienced</small>
          </article>
          <article className='exp-details'>
           <BsPatchCheckFill className='exp-details-icon'/>
            <h4>MySQL</h4>
            <small className='text-light'>Intermediate</small>
          </article>
        </div>
      </div> 

    </div>
   </section>
   </>
  )
}

export default Home