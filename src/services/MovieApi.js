
import React from 'react';
import axios from "axios";

import axiosHeaders from './axios.headers';
const config = {
    method: 'GET',
    headers: {
        'Access-Control-Allow-Origin': '*',
        'origin':'x-requested-with',
        'Access-Control-Allow-Headers': 'POST, GET, PUT, DELETE, OPTIONS, HEAD, Authorization, Origin, Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers, Access-Control-Allow-Origin',
        'Content-Type': 'application/json'
    },
    params: {
        api_key: process.env.REACT_APP_MOVIE_API_KEY
    }
};

const  MovieApi = axios.create({ baseURL: process.env.REACT_APP_MOVIE_API_URL, https: config, });
  
export const getMostPopularMovies = () => {
    console.log("ENV ",  process.env);
    MovieApi.get("/discover/movie?sort_by=popularity.desc&api_key=8f781d70654b5a6f2fa69770d1d115a3")
        .then( popularMovies => {
            console.log("Data:", popularMovies);
        })
        .catch(error => console.log("Error getting most popular movies ",error))
}


