import React from 'react'

const Hero = ({children}) => {
  return (
    <div className="hero">
      <div className="banner">
        <h1>rare vintage electronics</h1>
        <p>at prices you can afford</p>
        {children}
      </div>
    </div>
  )
}

export default Hero
