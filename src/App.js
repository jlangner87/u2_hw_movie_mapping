import React from 'react'
import './styles/App.css'
import movies from './data/movies.json'
import Movie from './components/Movie'
import Genre from './components/Genre'

const App = () => {
  return (
    <div className="App">
      <h1>Movie List</h1>
      <Movie>
        <h1>
          <Genre>
          {movies.genres.map((flick) => (
            key={ flick.adult }
            <p></p>
          ))}
        </h1>
      </Movie>
    </div>
  )
}

export default App
