import React from 'react';
import MovieCard from './MovieCard';
import { Link } from 'react-router-dom';

const MovieList = ({ title, movies }) => {
  console.log(movies)
  return (
    <div className='p-6 '>
      <h1 className='pb-3 text-xl font-semibold text-white'>{title}</h1>
      <div className='flex overflow-x-scroll'>
        <div className='flex gap-4'>
          {movies?.map((movie) => {
            return (
              <Link key={movie.id} to={`/movieDetails/${movie?.id}`}>
                <MovieCard movies={movies} posterPath={movie?.poster_path} />
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default MovieList;