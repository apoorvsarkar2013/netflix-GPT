import { useEffect } from "react";
import { API_OPTIONS, POPULAR_MOVIE_API } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addPopularMovies } from "../utils/moviesSlice";

const usePopularMovies = () =>{
    const dispatch = useDispatch();
    const popularMovies = useSelector(store=>store.movies.popularMovies)

    const getPopularMovies = async() =>{
        try{
            const data = await fetch(POPULAR_MOVIE_API, API_OPTIONS);
            const json = await data.json();
            dispatch(addPopularMovies(json?.results))

        } catch(error){
            console.log(error)
        }
    }

    useEffect(()=>{
        if(!popularMovies) getPopularMovies();
    }, [])
}

export default usePopularMovies;