import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name : 'gpt',
    initialState : {
        showGptSearch : false,
        movieNames : null,
        movieResults : null,

    },
    reducers : {
       toggleGptSearchView : (state, action)=>{
            state.showGptSearch = !state.showGptSearch;
        },
        addGptMovies : (state, action)=>{
            const {movieNames, movieResults} = action.payload;
            state.movieNames = movieNames;
            state.movieResults = movieResults;

        },
        clearGptMovies : (state, action)=>{
            state.movieNames = null;
            state.movieResults = null;
        }
    } 
});

export const {toggleGptSearchView, addGptMovies, clearGptMovies} = gptSlice.actions;

export default gptSlice.reducer;