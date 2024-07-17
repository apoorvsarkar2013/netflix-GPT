import React, { useState, useRef } from 'react';
import Header from './Header';
import {NETFLIX_BG} from '../utils/constants';
import {checkValidateData} from '../utils/validate';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import {auth} from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import {PROFILE_LOGO} from '../utils/constants';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';


const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const handleButttonClick = () =>{
    // Validate the form data
    const nameValue = isSignInForm ? '' : name?.current?.value;
    const message = checkValidateData(email?.current?.value, password?.current?.value, nameValue, isSignInForm);
    setErrorMessage(message);

    if(message) return;

    if(!isSignInForm){
      //Sign Up Logic
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
      .then((userCredential) => {
      // Signed up 
      const user = userCredential.user;
      updateProfile(user, {
        displayName: nameValue, photoURL: PROFILE_LOGO
      }).then(() => {
        const {uid, email, displayName, photoURL} = user;
        dispatch( addUser({uid:uid, email:email, displayName:displayName, photoURL:photoURL}));
        navigate('/browse');
      }).catch((error) => {
        setErrorMessage(error.message);
      });      
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      setErrorMessage(`${errorCode} ${errorMessage}`);
    });
    } else {
      //Sign In Logic
      signInWithEmailAndPassword(auth, email.current.value, password.current.value,)
      .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      navigate('/browse');
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      setErrorMessage(`${errorCode} ${errorMessage}`)
    });
    }

  }

  const toggleSignInForm = () =>{
    setIsSignInForm(!isSignInForm);
  }

  return (
    <div>
      <Header/>
      <div className='absolute'>
        <img
        src= {NETFLIX_BG}
        alt='background'/>
      </div>
      <form onClick={(e)=>e.preventDefault()} className='absolute flex flex-col justify-center items-center p-12 bg-black w-4/12 my-24 mx-auto right-0 left-0 bg-opacity-80 rounded-md'>
        <h1 className='w-10/12 text-3xl text-white font-bold py-2 m-2'>{isSignInForm ? "Sign In" : "Sign Up"}</h1>
        {isSignInForm ? null : <input ref={name} className='w-10/12 p-4 my-3 bg-transparent border rounded-md text-white' type='text' placeholder='Full Name'/>}
        <input ref={email} className='w-10/12 p-4 my-3 bg-transparent border rounded-md text-white' type='text' placeholder='Email Address'/>
        <input ref={password} className='w-10/12 p-4 my-3 bg-transparent border rounded-md text-white' type='password' placeholder='Password'/>
        <p className='w-10/12 text-red-600 font-bold'>{errorMessage}</p>
        <button className='w-10/12 h-12 my-3 bg-red-700 text-white font-bold rounded-md' onClick={handleButttonClick}>{isSignInForm ? "Sign In" : "Sign Up"}</button>
        <p className='py-6 text-white w-10/12 cursor-pointer' onClick={toggleSignInForm}>
        {isSignInForm ? "New to Netflix? Sign Up Now" : "Already a User? Sign In Now"}
        </p>
      </form>
    </div>
  )
}

export default Login;

