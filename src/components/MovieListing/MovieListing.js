import "./movielisting.scss"

import { useSelector } from 'react-redux';

import Spinner from '../../components/Spinner/Spinner'
import MovieCard from "../MovieCard/MovieCard";


const MovieListing = () => {

    const { movies, shows, isLoading } = useSelector((state) => state.movieDetails)

    let renderMovies, renderShows = "";

    if (isLoading) {
        return <Spinner />
    }

    // Fetched movies details
    renderMovies =
        movies.Response === 'True' ? (
            movies.Search.map((movie, index) => (
                <MovieCard key={index} data={movie} />
            ))
        ) : (
            <div className="movies-error">
                <h3>{movies.Error}</h3>
            </div>
        );

    // Fetched shows details
    renderShows =
        shows.Response === "True" ? (
            shows.Search.map((movie, index) => <MovieCard key={index} data={movie} />)
        ) : (
            <div className="shows-error">
                <h3>{shows.Error}</h3>
            </div>
        );

    return (
        <div className="movie-wrapper">
            <div className="movie-list">
                <h2>Movies</h2>
                <div className="movie-container">{renderMovies}</div>
            </div>

            <div className="show-list">
                <h2>Shows</h2>
                <div className="movie-container">{renderShows}</div>
            </div>
        </div>
    );
};

export default MovieListing;