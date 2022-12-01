import { useEffect } from "react";
import "./home.scss";

import MovieListing from "../MovieListing/MovieListing";
import { getMovies, getShows } from '../../features/movies/moviesSlice';

import { useDispatch } from 'react-redux';

const Home = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getMovies())
        dispatch(getShows())
    }, [dispatch])

    return (
        <div>
            <div className="banner-img"></div>
            <MovieListing />
        </div>
    );
};

export default Home;