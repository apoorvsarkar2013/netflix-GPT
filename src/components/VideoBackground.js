import React, { useEffect, useState, useRef } from 'react';
import { API_OPTIONS } from '../utils/constants';

const VideoBackground = ({ movieId }) => {
  const [movieTrailer, setMovieTrailer] = useState(null);
  const videoRef = useRef(null);
  const [muted, setMuted] = useState(true);

  const fetchMovieVideoData = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos`,
      API_OPTIONS
    );
    const json = await data.json();
    setMovieTrailer(json.results);
  };

  useEffect(() => {
    fetchMovieVideoData();
  }, [movieId]);

  if (!movieTrailer) return null;

  const filteredMovieTrailer = movieTrailer.filter(
    (data) => data?.type === "Trailer" && data?.site === "YouTube"
  );

  const mainMovieTrailer = filteredMovieTrailer.length
    ? filteredMovieTrailer[0]
    : movieTrailer[0];

  const handleToggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setMuted(videoRef.current.muted);
    }
  };

  return (
    <div>
      <iframe
        className="w-screen aspect-video"
        src={`https://www.youtube.com/embed/${mainMovieTrailer?.key}?autoplay=1&mute=${muted ? 1 : 0}`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        ref={videoRef}
      ></iframe>
      <button className='text-4xl text-white absolute top-0 bottom-0 right-0 mr-24 mt-96 h-0 w-0' onClick={handleToggleMute}>
        {muted ?  <i className="fa fa-volume-off" aria-hidden="true"></i> : 
        <i className="fa fa-volume-up" aria-hidden="true"></i>}
      </button>
    </div>
  );
};

export default VideoBackground;


