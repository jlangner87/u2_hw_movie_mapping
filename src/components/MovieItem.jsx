import Genre from "./Genre"

const MovieItem = (props) => {
  return (
    <ul className="movie-item">
    <h2>Title: {props.title}</h2>
    <h5>Release Date: {props.release_date}</h5>
    {props.genres.map((genre) => (
      <Genre 
      name = {genre.name}
      />
    ))}

    <img src={props.poster_path}/>
    <h5>Overview: {props.overview}</h5>
    </ul>
  )
}
export default MovieItem