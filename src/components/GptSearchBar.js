import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import lang from '../utils/languageConstants';
import openai from '../utils/openai';
import { API_OPTIONS } from '../utils/constants';
import { addGptMovies } from '../utils/gptSlice';

const GptSearchBar = () => {
  const langKey = useSelector((store)=> store?.config?.lang)
  const searchText = useRef(null);
  const dispatch = useDispatch();

  const searchMovieTMDB = async (movie) => {
    const data = await fetch('https://api.themoviedb.org/3/search/movie?query=' + movie + '&include_adult=false&language=en-US&page=1', API_OPTIONS);
    const json = await data.json();
    return json.results
  }

  const handleGptSearchClick = async () =>{
    const gptQuery = 'Act as a movie Recommendation system and suggest some movies for the query : ' + searchText.current.value + '. Only give me names of five movies, comma separated like the example result given ahead. Example Result: Gadar, Sholay, Golmaal, Don, Kabhi Khushi Kabhie Gham';
    searchText.current.value = null;
    
    try{const gptResults = await openai.chat.completions.create({
      messages: [{ role: 'user', content: gptQuery }],
      model: 'gpt-3.5-turbo',
    });

    if(!gptResults.choices || gptResults.choices.length === 0){
      return `No result found`
    }
    
    console.log(gptResults?.choices[0]?.message?.content);
    const gptMovies = gptResults?.choices[0]?.message?.content.split(',');
    const promiseArray = gptMovies.map((data)=> searchMovieTMDB(data));
    const tmdbMovieResults = await Promise.all(promiseArray);
    // console.log(tmdbMovieResults);
    dispatch(addGptMovies({movieNames:gptMovies, movieResults:tmdbMovieResults}));

    } catch(error){
      console.error('Error during GPT search:', error);
      return 'An error occurred while fetching results.';
      }
    }

  return (
    <div className='pt-[10%] flex justify-center'>
        <form className='bg-black w-1/2 grid grid-cols-12 rounded-lg' onSubmit={(e)=>e.preventDefault()}>
            <input ref={searchText} className='col-span-9 p-4 m-4' type='text' placeholder={lang[langKey]?.gptSearchPlaceholder}/>
            <button className='col-span-3 m-4 py-2 px-4 bg-red-700 text-white rounded-lg' onClick={handleGptSearchClick}>{lang[langKey]?.search}</button>
        </form>
    </div>
  )
}

export default GptSearchBar