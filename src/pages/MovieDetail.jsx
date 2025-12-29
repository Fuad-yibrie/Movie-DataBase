import { useParams, Link } from "react-router-dom";
import Movies from "../data/Movies";

function MovieDetail() {
  const { id } = useParams();
  const movie = Movies.find(m => m.id === Number(id));

  if (!movie) {
    return <h2>Movie Not Found</h2>;
  }

  return (
    <div className="container">
      <Link to="/" className="back-btn">Back</Link>
      <h1>{movie.title}</h1>
      <img
        src={movie.poster}
        alt={movie.title}
        style={{ width: "300px" }}
      />
      <p>Genre: {movie.genre}</p>
      <p>{movie.description}</p>
    </div>
  );
}

export default MovieDetail;
