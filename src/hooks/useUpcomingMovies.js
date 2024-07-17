import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS, UPCOMING_MOVIES_API } from "../utils/constants";
import { addUpcomingMovies } from "../utils/moviesSlice";

const useUpcomingMovies = () =>{
    const dispatch = useDispatch();
    const upcomingMovies = useSelector(store=>store.movies.upcomingMovies)

    const getUpcomingMovies = async() =>{
        try{
            const data = await fetch(UPCOMING_MOVIES_API, API_OPTIONS);
            const json = await data.json();
            dispatch(addUpcomingMovies(json?.results))

        } catch(error){
            console.log(error)
        }
    }

    useEffect(()=>{
        if(!upcomingMovies) getUpcomingMovies();
    }, [])
}

export default useUpcomingMovies;