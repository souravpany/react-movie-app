import "./moviedetails.scss"

import { useEffect } from "react";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";

import { getMoviesOrShowsDetails, removeSelectedMovieOrShowDetails } from '../../features/movies/moviesSlice';
import Spinner from '../../components/Spinner/Spinner'


const MovieDetails = () => {

    const { imdbId } = useParams();
    const dispatch = useDispatch();
    const { slectedMovieOrShowsDetails, isLoading } = useSelector((state) => state.movieDetails)

    const { Title,
        imdbRating,
        imdbVotes,
        Runtime,
        Year,
        Plot,
        Director,
        Actors,
        Genre,
        Language,
        Awards,
        Poster
    } = slectedMovieOrShowsDetails;

    useEffect(() => {
        dispatch(getMoviesOrShowsDetails(imdbId));
        return () => {
            dispatch(removeSelectedMovieOrShowDetails());
        };
    }, [dispatch, imdbId])


    console.log(slectedMovieOrShowsDetails);

    if (isLoading) {
        return <Spinner />
    }

    return (
        <div className="movie-section">
            <div className="section-left">
                <div className="movie-title">{Title}</div>
                <div className="movie-rating">
                    <span>
                        IMDB Rating <i className="fa fa-star"></i> : {imdbRating}
                    </span>
                    <span>
                        IMDB Votes <i className="fa fa-thumbs-up"></i> :{" "}
                        {imdbVotes}
                    </span>
                    <span>
                        Runtime <i className="fa fa-film"></i> : {Runtime}
                    </span>
                    <span>
                        Year <i className="fa fa-calendar"></i> : {Year}
                    </span>
                </div>
                <div className="movie-plot">{Plot}</div>
                <div className="movie-info">
                    <div>
                        <span>Director</span>
                        <span>{Director}</span>
                    </div>
                    <div>
                        <span>Stars</span>
                        <span>{Actors}</span>
                    </div>
                    <div>
                        <span>Generes</span>
                        <span>{Genre}</span>
                    </div>
                    <div>
                        <span>Languages</span>
                        <span>{Language}</span>
                    </div>
                    <div>
                        <span>Awards</span>
                        <span>{Awards}</span>
                    </div>
                </div>
            </div>
            <div className="section-right">
                <img src={Poster} alt={Title} />
            </div>
        </div>
    );
};

export default MovieDetails;