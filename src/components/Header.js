import React from 'react';
import { useEffect } from 'react';
import {NETFLIX_LOGO, SUPPORTED_LANGUAGES} from '../utils/constants';
import { useSelector, useDispatch } from 'react-redux';
import { signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { addUser,  removeUser} from '../utils/userSlice';
import { toggleGptSearchView } from '../utils/gptSlice';
import { changeLanguage } from '../utils/configSlice';


const Header = () => {
  const user = useSelector(store => store.user);
  const showGptSearch = useSelector((store)=> store?.gpt?.showGptSearch);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSignOut = () =>{
    signOut(auth).then(() => {
      navigate('/')
    }).catch((error) => {
      navigate('/error')
    });

  }

  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const {uid, email, displayName, photoURL} = user;
        dispatch( addUser({uid:uid, email:email, displayName:displayName, photoURL:photoURL}));
        navigate('/browse');
      } else {
        dispatch(removeUser());
        navigate('/');
      }
    });

    return ()=> unsubscribe();
  }, []);

  const handleGptSearchToggle = () =>{
    dispatch(toggleGptSearchView())
  }

  const handleLanguageChange = (e) =>{
    dispatch(changeLanguage(e?.target?.value))
  }

  return (
    <div className='flex justify-between w-full fixed px-8 py-1 bg-gradient-to-b from-black z-10'>
      <img className='w-48 ml-12'
      src={NETFLIX_LOGO} 
      alt='logo'/>
      {user && <div className='mt-3 flex gap-3 w-85'>
        {showGptSearch && <select className='mb-9 p-1 bg-gray-900 text-white rounded-sm' onChange={handleLanguageChange}>
          {SUPPORTED_LANGUAGES.map((data)=>{
            return <option key={data?.identifier} value={data?.identifier}>{data?.name}</option>
          })}
        </select>}
        <button className='bg-purple-700 font-medium text-white w-28 h-8 rounded-sm' onClick={handleGptSearchToggle}>{showGptSearch ? 'Homepage' : 'GPT Search'}</button>
        <img className='w-8 h-8' src={user?.photoURL} alt='user-icon'/>
        <button className='text-xl text-white w-24 h-8' onClick={handleSignOut}>(Sign Out)</button>
      </div>}
    </div>
  )
}

export default Header;