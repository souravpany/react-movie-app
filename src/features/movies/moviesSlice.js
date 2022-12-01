import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { extractErrorMessage } from '../../utils';

import moviesService from './moviesService';

const initialState = {
    movies: {},
    shows: {},
    slectedMovieOrShowsDetails: {},
    isLoading: false
}


// Get movies
export const getMovies = createAsyncThunk(
    'movies/getAll',
    async (_, thunkAPI) => {
        try {
            return await moviesService.getMovies()
        } catch (error) {
            return thunkAPI.rejectWithValue(extractErrorMessage(error))
        }
    }
)

// Get shows
export const getShows = createAsyncThunk(
    'shows/getAll',
    async (_, thunkAPI) => {
        try {
            return await moviesService.getShows()
        } catch (error) {
            return thunkAPI.rejectWithValue(extractErrorMessage(error))
        }
    }
)

// Get Movies Or Shows Details
export const getMoviesOrShowsDetails = createAsyncThunk(
    'showsormovies/details',
    async (id, thunkAPI) => {
        try {
            return await moviesService.getMoviesOrShowsDetails(id)
        } catch (error) {
            return thunkAPI.rejectWithValue(extractErrorMessage(error))
        }
    }
)


export const moviesSlice = createSlice({
    name: 'movies',
    initialState,
    reducers: {
        removeSelectedMovieOrShowDetails: (state) => {
            state.slectedMovieOrShowsDetails = {}; // Note: due to render issue in details page adding clean up function
        },
    }
    ,
    extraReducers: (builder) => {
        builder
            .addCase(getMovies.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getMovies.fulfilled, (state, action) => {
                state.movies = action.payload;
                state.isLoading = false
            })
            .addCase(getShows.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getShows.fulfilled, (state, action) => {
                state.shows = action.payload;
                state.isLoading = false
            })
            .addCase(getMoviesOrShowsDetails.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getMoviesOrShowsDetails.fulfilled, (state, action) => {
                console.log()
                state.slectedMovieOrShowsDetails = action.payload;
                state.isLoading = false
            })
    },
})

export const { removeSelectedMovieOrShowDetails } = moviesSlice.actions;
export default moviesSlice.reducer