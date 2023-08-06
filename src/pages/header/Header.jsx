import React from 'react'
import './header.css'
import CVsection from './CVsection'
import Headericons from './Headericons'

const Header = () => {
  return (
    <>
    <header>
    <div className="container header-container">
<div className='headcolor'>
<h1>Khizra Tehreem</h1>
<h4 className='text-light'><span>MERN STACK DEVELOPER</span></h4>
</div>
<CVsection/>
<Headericons/>

     <div className='head-para'>
      <ul>
        <li>
      <h3>🚀 With a strong foundation in MongoDB, Express, React, and Node.js, I thrive in both front-end and back-end development. My journey began with a fascination for transforming ideas into functional code, and I've honed my skills to create dynamic and user-centric applications.</h3>
        </li>
    </ul>
    </div>
    <div className='head-para2'>
      <ul>
    <li>
      <h3>💡 Whether I'm architecting databases, crafting responsive UIs, or optimizing server performance, I'm committed to delivering high-quality solutions that marry functionality with aesthetics.</h3>
        </li>
        </ul>
      </div>  
    
      <a href="#contact" className='scrolldown'>Scroll Down</a>

</div>  
  </header>
  </>
  )
}

export default Header