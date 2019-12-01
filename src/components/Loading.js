import React from 'react'
import loading from '../assets/loading.gif'


const Loading = () => {
  return (
    <div className="loading">
      <p>Loading...</p>
      <img src={loading} alt="loading animation"/>
    </div>
  )
}

export default Loading
