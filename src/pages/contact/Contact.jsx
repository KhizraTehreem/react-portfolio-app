import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {BsWhatsapp} from 'react-icons/bs'


const Contact = () => {
  

  return (
    <section id='contact'>
      <h4>Get in Touch</h4>
      <h2>Contact ME</h2>


    <div className="container-contact-container">
      <div className="contact-options">
       <article className="contact-option">
        <MdOutlineEmail className='contact-option-icon'/>
        <h4>EMAIL</h4>
        <a href="mailto:khizrathrm@gmail.com" target='_blank'>let's Connect</a>
       </article>
       <article className="contact-option">
        <BsWhatsapp className='contact-option-icon'/>
        <h4>WHATSAPP</h4>
        <a href="https://api.whatsapp.com/send?phone+3312089297" target='_blank'>let's Connect</a>
       </article>
      </div>

      <form actiom="">
        <input type='text' name='name' placeholder='Full Name' required/>
        <input type='email' name='email' placeholder='Email Address' required/>
        <textarea name="message"  rows="7" placeholder='Message' required></textarea>
        <button type='submit' className='btn btn-primary'>Send Message</button>
       
      </form>
    </div>


    </section>
  )
}

export default Contact