import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {movieService} from "../../services";

const initialState = {
    movie: [],
    currentMovie: null,
    loading: false,
    errors: null
};

const getAll = createAsyncThunk(
    'movieSlice/getAll',
    async (_, {rejectWithValue}) => {
        try {
            const {data} = await movieService.getAll();
            return data
        } catch (e) {
            return rejectWithValue(e.response.data)
        }
    }
)
const movieSlice = createSlice({
    name: 'movieSlice',
    initialState,
    reducers: {
        getAllWithDispatch: (state, action) => {
            state.movie= action.payload
        }

    }
});

const {reducer: movieReducer, actions: {getAllWithDispatch}} = movieSlice;

const movieActions = {
    getAll,
    getAllWithDispatch
}
export {
    movieReducer,
    movieActions
}