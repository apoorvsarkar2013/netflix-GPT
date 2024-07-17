import React from 'react';
import { MOVIE_IMAGE_API } from '../utils/constants';

const MovieCard = ({posterPath}) => {
  if(!posterPath) return null;
  return (
    <div className='w-44'>
        <img className='rounded-md' src={MOVIE_IMAGE_API + posterPath} alt='movie-poster'/>
    </div>
  )
}

export default MovieCard