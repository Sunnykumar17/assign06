import React from 'react'
import "./Comp3.css";
const Comp3 = () => {
  return (
    <div className='card-container'>
      <div className='card '>
        <h2>Koding Made Simple</h2>
        <ul className='ul'>
          <li style={{backgroundColor:"red"}}>Bootstrap</li>
          <li>Theme</li>
          <li>Blog</li>
        </ul>
      </div>
      <div className='card-bottom'>
        <h1 style={{ paddingTop: "70px" }}>Customize Bootstrap Navbar</h1>
        <p>easy way to change navbar background,textand hover link color in bootstrap...</p>
      </div>
   </div>
  )
}

export default Comp3