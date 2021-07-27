import React,  {createContext, useState, useMemo, useContext, useEffect} from 'react';

import testData from './TestData';
const MovieContext = createContext();


export function  MovieProvider ({children}) {
    const [movieData, setMovieData] = useState(testData);

   const modifyMovieData = (newData) => {
        setMovieData(newData);
   }
    const value = useMemo(() => {
        return({
            movieData,
            modifyMovieData
        })
    }, [movieData, modifyMovieData]);

    return(
        <MovieContext.Provider value={value}>
            {children}
        </MovieContext.Provider>
    );
}

export function useMovie(){
    const context = useContext(MovieContext);
    if(!context){
        throw new Error("useMovie must be inside MovieContext Provider");
    }

    return context;
}