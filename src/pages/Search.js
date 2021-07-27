
import React, {useEffect} from 'react';

import PosterList from '../components/PosterList';
import { useMovie } from '../MovieContext';
import {getMostPopularMovies} from '../services/MovieApi';


const Search = () => {
    const {movieData} = useMovie();
    /*useEffect(() =>{
        //getMostPopularMovies();      
    }, []);*/
    console.log("MovieData", movieData);
    
    return (<>
    <PosterList movieData={movieData}></PosterList>
    </>);
}


export default Search;