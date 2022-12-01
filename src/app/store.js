import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';

import moviesReducer from '../features/movies/moviesSlice';

const customizedMiddleware = getDefaultMiddleware({
    serializableCheck: false
})

export const store = configureStore({
    reducer: {
        movieDetails: moviesReducer
    },
    middleware: customizedMiddleware
});
