
export const NETFLIX_LOGO = 'https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png';
export const NETFLIX_BG = 'https://assets.nflxext.com/ffe/siteui/vlv3/41c789f0-7df5-4219-94c6-c66fe500590a/3149e5eb-4660-4e3d-9e65-b1e615229c64/IN-en-20240513-popsignuptwoweeks-perspective_alpha_website_medium.jpg';
export const PROFILE_LOGO = 'https://occ-0-2152-3647.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABTZ2zlLdBVC05fsd2YQAR43J6vB1NAUBOOrxt7oaFATxMhtdzlNZ846H3D8TZzooe2-FT853YVYs8p001KVFYopWi4D4NXM.png?r=229';

export const API_OPTIONS = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer ' + process.env.REACT_APP_TMDB_KEY
    }
  };

export const NOW_PLAYING_MOVIE_API = 'https://api.themoviedb.org/3/movie/now_playing';

export const MOVIE_IMAGE_API = 'https://image.tmdb.org/t/p/w500/';

export const POPULAR_MOVIE_API = 'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1';

export const TOP_RATED_MOVIES_API = 'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1';

export const UPCOMING_MOVIES_API = 'https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1';

export const SUPPORTED_LANGUAGES = [
  {identifier : 'en', name : 'English'},
  {identifier : 'hindi', name : 'Hindi'}
]

export const OPENAI_KEY = process.env.REACT_APP_OPENAI_KEY
