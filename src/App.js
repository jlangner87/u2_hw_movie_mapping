import React from 'react'
import './styles/App.css'
import movies from './data/movies.json'
import Genre from './components/Genre'
import MovieItem from './components/MovieItem'
;<style>
  @import url('https://fonts.googleapis.com/css2?family=Play&display=swap');
</style>

const App = () => {
  return (
    <div className="App">
      <h1 className="heading">Movie List</h1>
      <ul className="Movies">
        {movies.map((film) => (
          <MovieItem
            key={film.adult}
            title={film.title}
            release_date={film.release_date}
            overview={film.overview}
            poster_path={film.poster_path}
            genres={film.genres}
          />
        ))}
      </ul>
    </div>
  )
}

export default App
