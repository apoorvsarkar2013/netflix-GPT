import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS, TOP_RATED_MOVIES_API } from "../utils/constants";
import { addTopRatedMovies } from "../utils/moviesSlice";

const useTopRatedMovies = () => {
    const dispatch = useDispatch();
    const topRatedMovies = useSelector(store=>store.movies.topRatedMovies)

    const getTopRatedMovies = async() =>{
        try{
            const data = await fetch(TOP_RATED_MOVIES_API, API_OPTIONS);
            const json = await data.json();
            dispatch(addTopRatedMovies(json?.results))

        } catch(error){
            console.log(error)
        }
    }

    useEffect(()=>{
        if(!topRatedMovies) getTopRatedMovies();
    }, [])
}

export default useTopRatedMovies;