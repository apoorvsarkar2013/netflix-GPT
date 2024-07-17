import React, { useEffect, useState } from 'react';
import { API_OPTIONS } from '../utils/constants';
import { useParams } from 'react-router-dom';


const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null)

  const fetchMovieDetails = async () => {
    const data = await fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, API_OPTIONS);
    const json = await data.json();
    // console.log(json?.results);
    setMovie(json?.results[0])
  };

  useEffect(() => {
    fetchMovieDetails();
  }, [id]);

  return (
    <div>
      <iframe width="1450" height="790" 
      src={"https://www.youtube.com/embed/" + movie?.key + "?autoplay=1" }
      title="YouTube video player" frameBorder="0" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; 
      gyroscope; picture-in-picture; web-share" 
      referrerPolicy="strict-origin-when-cross-origin" 
      allowFullScreen></iframe>
    </div>
  );
}

export default MovieDetails;