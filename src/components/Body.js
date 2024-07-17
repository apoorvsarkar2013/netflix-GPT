import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Login from './Login';
import Browse from './Browse';
import MovieDetails from './MovieDetails';

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Login />
  },
  {
    path: "/browse",
    element: <Browse />
  },
  {
    path: "/movieDetails/:id",
    element: <MovieDetails />
  },
]);

const Body = () => {
  return <RouterProvider router={appRouter} />;
}

export default Body;