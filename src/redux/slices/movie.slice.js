import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {movieService} from "../../services";



const initialState = {
    movies: [],
    genres: [],
    currentGenres: [],
    loading: false,
    page: 1,
    show: true,
}

const getMovie = createAsyncThunk(
    'movieSlice/getAllMovie',
    async ({page}, {rejectWithValue}) => {
        try {
            const {data} = await movieService.getAll(page);
            return data.results;
        } catch (e) {
            rejectWithValue(e.response.data)
        }
    }
);

const searchMovie = createAsyncThunk(
    'movieSlice/searchMovie',
    async (arg, {rejectWithValue}) => {
        try {
            const {data} = await movieService.searchMovie(arg);
            return data;
        } catch (e) {
            rejectWithValue(e.response.data)
        }
    }
);

const getGenrebadge = createAsyncThunk(
    'movieSlice/getAllGenres',
    async (_, {rejectWithValue}) => {
        try {
            const {data} = await movieService.getGenres();
            return data;
        } catch (e) {
            rejectWithValue(e.response.data)
        }
    }
);

const searchByGenre = createAsyncThunk(
    'movieSlice/searchByGenre',
    async (genre, {rejectWithValue}) => {
        try {
            const {data} = await movieService.searchByGenre(genre)
            return data;
        } catch (e) {
            rejectWithValue(e.response.data)
        }
    }
)

const movieSlice = createSlice({
    name: 'movieSlice',
    initialState,
    reducers: {
        nextPage: (state, action) => {
            if (state.page < 500) state.page += action.payload;
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        },
        prevPage: (state, action) => {
            if (state.page > 1) state.page -= action.payload;
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        },
        show: (state, action) => {
            state.show = action.payload;
        },
        selectGenre: (state, action) => {
            state.currentGenres.push(action.payload);
        },
    },
    extraReducers: builder =>
        builder
            .addCase(getMovie.fulfilled, (state, action) => {
                state.movies = action.payload;
                state.loading = false
            })
            .addCase(getMovie.pending, (state) => {
                state.loading = true
            })
            .addCase(searchMovie.fulfilled, (state, action) => {
                state.movies = action.payload?.results;
                state.loading = false
            })
            .addCase(searchMovie.pending, (state) => {
                state.loading = true
            })
            .addCase(getGenrebadge.fulfilled, (state, action) => {
                state.genres = action.payload;
                state.loading = false;
            })
            .addCase(searchByGenre.fulfilled, (state, action) => {
                state.movies = action.payload.results;
                state.loading = false;
            })
            .addCase(searchByGenre.pending, (state) => {
                state.loading = true;
            })
});

const {reducer: movieReducer, actions: {nextPage, prevPage, show,selectGenre}} = movieSlice;

const movieActions = {
    getMovie,
    searchMovie,
    getGenrebadge,
    nextPage,
    prevPage,
    show,
    searchByGenre,
    selectGenre
}

export {
    movieReducer,
    movieActions
}