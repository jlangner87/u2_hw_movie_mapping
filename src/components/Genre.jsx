import React from 'react'




const Genre = (props) => {
  let colorCoding 
switch(props.name) {
  case 'Action':
  break
  case 'Adventure':
    break
  case 'Fantasy':
    break
    case 'Crime':
  break
  case 'Thriller':
    break
  case 'Science Fiction':
    break
    case 'Horror':
  break
  case 'Animation':
    break
  case 'Comedy':
    break
    case 'Drama':
  break
  case 'Family':
    break
  case 'Music':
    break
  case 'Mystery':
    break
  case 'Horror':
    break
  case 'Romance':
    break
  }
  return (
    <div className='color-code'>
      <p>{props.name}</p>
    </div>
  )
}

export default Genre