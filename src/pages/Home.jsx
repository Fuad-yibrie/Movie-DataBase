import { Link } from "react-router-dom";
import Movies from "../data/Movies";


function Home(){
    return (
        <div className="container">
            <h1>Movie Database</h1>
            <div className="movie-grid">
                {Movies.map(movie => (
                    <div className="movie-card" key={movie.id}>
                        <Link to={`/movie/${movie.id}`}>
                        <img src={movie.poster} alt={movie.title}/>
                        </Link> 
                        <h3>{movie.title}</h3> 
                        <p>{movie.genre.toUpperCase()}</p>  
                    </div>
                ))}
            </div>
        </div>
    );
}
export default Home;