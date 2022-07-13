import React from 'react'




const Genre = (props) => {
  let colorCoding 
switch(props.name) {
  case 'Action':
    colorCoding = '#0433ff'
  break
  case 'Adventure':
    colorCoding = '#00fdff'
    break
  case 'Fantasy':
    colorCoding = '#00f900'
    break
    case 'Crime':
      colorCoding = '#ff40ff'
  break
  case 'Thriller':
    colorCoding = '#ff9300'
    break
  case 'Science Fiction':
    colorCoding = '#942192'
    break
    case 'Horror':
      colorCoding = '#ff2600'
  break
  case 'Animation':
    colorCoding = '#fffb00'
    break
  case 'Comedy':
    colorCoding = '#73fcd6'
    break
    case 'Drama':
      colorCoding = '#73fcd6'
  break
  case 'Family':
    colorCoding = '#ff2f92'
    break
  case 'Music':
    colorCoding = '#009193'
    break
  case 'Mystery':
    colorCoding = '#a9a9a9'
    break
  case 'Horror':
    colorCoding = '#d4fb79'
    break
  case 'Romance':
    colorCoding = '#531b93'
    break
  }
  return (
    <div>
      <div className='color-code' style={{backgroundColor: colorCoding, color: '#000000' }}>{props.name}</div>
    </div>
  )
}

export default Genre