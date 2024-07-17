import React, { useEffect, useState } from 'react';
import VideoTitle from './VideoTitle';
import VideoBackground from './VideoBackground';
import { useSelector } from 'react-redux';

const MainContainer = () => {
    const movies = useSelector((store)=> store?.movies?.nowPlayingMovies);
    const [mainMovie, setMainMovie] = useState(null);

    useEffect(()=>{
        if(movies && movies.length>0){
            const randomMovie = Math.floor(Math.random() * movies.length);
            setMainMovie(movies[randomMovie]);
        }
    }, [movies]);

    if(!mainMovie) return;
    
    const {original_title, overview, id} = mainMovie;

  return (
    <div>
        <VideoTitle title={original_title} overview={overview}/>
        <VideoBackground movieId={id}/>
    </div>
  )
}

export default MainContainer;
