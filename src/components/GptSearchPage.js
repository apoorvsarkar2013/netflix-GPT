import React from 'react'
import GptSearchBar from './GptSearchBar';
import GptMovieSuggestions from './GptMovieSuggestions';
import { NETFLIX_BG } from '../utils/constants';

const GptSearchPage = () => {
  return (
    <div>
      <img className='fixed -z-10' src={NETFLIX_BG} alt='gpt-bg'/>
      <GptSearchBar/>
      <GptMovieSuggestions/>
    </div>
  )
}

export default GptSearchPage;