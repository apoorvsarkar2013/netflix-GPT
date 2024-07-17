import React from 'react';
import MovieList from './MovieList';
import { useSelector } from 'react-redux';

const SecondaryContainer = () => {
  const movies = useSelector((store)=>store.movies.nowPlayingMovies);
  const popularMovies = useSelector((store)=> store.movies.popularMovies);
  const topRatedMovies = useSelector((store)=> store.movies.topRatedMovies);
  const upcomingMovies = useSelector((store)=> store.movies.upcomingMovies);

  return (
    <div className='bg-black'>
      <div className='-mt-52 pl-8 relative z-0'>
        <MovieList title={'Now Playing'} movies={movies} />
        <MovieList title={'Popular Movies'} movies={popularMovies} />
        <MovieList title={'Top Rated Movies'} movies={topRatedMovies} />
        <MovieList title={'Upcoming Movies'} movies={upcomingMovies} />
      </div>
    </div>
  )
}

export default SecondaryContainer