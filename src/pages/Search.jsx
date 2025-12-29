import { useSearchParams, Link } from "react-router-dom";
import Movies from "../data/Movies";

function Search() {
  const [searchParams, setSearchParams] = useSearchParams();
  const genre = searchParams.get("genre");

  const filteredMovies = genre
    ? Movies.filter(movie => movie.genre === genre)
    : Movies;

  return (
    <div className="container">
      <h1>Search Movies</h1>

      <button onClick={() => setSearchParams({ genre: "comedy" })}>
        Filter By Comedy
      </button>

      <button
        style={{ marginLeft: "10px" }}
        onClick={() => setSearchParams({})}
      >
        Clear
      </button>

      <div className="movie-grid" style={{ marginTop: "20px" }}>
        {filteredMovies.map(movie => (
          <div className="movie-card" key={movie.id}>
            <Link to={`/movie/${movie.id}`}>
              <img src={movie.poster} alt={movie.title} />
            </Link>
            <h3>{movie.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Search;
