import Genre from "./Genre"

const MovieItem = (props) => {
  return (
    <ul className="movie-item">
    <h2 className="title-cover">Title: {props.title}</h2>
    <h5>Release Date: {props.release_date}</h5>
    <img src={props.poster_path}/>
    {props.genres.map((genre) => (
      <Genre 
      name = {genre.name}
      />
    ))}
    <h5 className="last">Overview: {props.overview}</h5>
    </ul>
  )
}
export default MovieItem