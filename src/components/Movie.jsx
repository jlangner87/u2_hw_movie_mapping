import React from 'react'


const Movie = (props) => {
  return (
    <div className='movieList'>
      {props.children}
    </div>
    )
}

export default Movie