import React from 'react'
import './styles/App.css'
import movies from './data/movies.json'



const Genre = () => {
  return (
  <div className='genreList'>
    {props.children}

  </div>
  )
}

export default Genre