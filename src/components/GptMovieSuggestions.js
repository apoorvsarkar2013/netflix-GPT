import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import MovieList from './MovieList';
import { clearGptMovies } from '../utils/gptSlice';

const GptMovieSuggestions = () => {
  const {movieNames, movieResults} = useSelector(store=>store.gpt);
  const dispatch = useDispatch()
  if(movieNames?.length === 0 || movieResults?.length === 0) return null;

  const handleClearSearchResults = () =>{
    dispatch(clearGptMovies());
  }

  return (
    <div className='mt-6 p-4 bg-black text-white bg-opacity-85'>
      <button className='m-4 py-2 px-4  bg-red-700 text-white rounded-lg' onClick={handleClearSearchResults}>Clear Search Result</button>
      {movieNames && movieNames.map((movieName, index)=>{
        return <MovieList key={movieName} title={movieName} movies={movieResults[index]} />
      })}
    </div>
  )
}

export default GptMovieSuggestions;