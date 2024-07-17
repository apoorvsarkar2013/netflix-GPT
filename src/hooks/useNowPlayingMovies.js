import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS, NOW_PLAYING_MOVIE_API } from "../utils/constants";
import { addNowPlayingMovies } from "../utils/moviesSlice";
import { useEffect } from "react";

const useNowPlayingMovies = () =>{
    const dispatch = useDispatch();
    const nowPlayingMovies = useSelector(store=>store.movies.nowPlayingMovies)

    const getNowPlayingMovies = async () =>{
       try{
        const data = await fetch(NOW_PLAYING_MOVIE_API, API_OPTIONS);
        const json = await data.json();
        const filteredMovieList = json.results.filter((data)=>{
         if(data?.original_title !== "Un père idéal" && data?.original_title !== "May the 12th Be with You"){
            return true
         }
        })
      
        dispatch(addNowPlayingMovies(filteredMovieList));
       } catch(error){
          console.log(error)
       }
    }
  
    useEffect(()=>{
      if(!nowPlayingMovies) getNowPlayingMovies()
    }, [])
}

export default useNowPlayingMovies;
