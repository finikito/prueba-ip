import './App.css';
import React, { lazy, Suspense } from 'react';
import { Router } from "@reach/router";
import Spinner from 'react-bootstrap/Spinner';

import Search  from './pages/Search';
import { MovieProvider } from './MovieContext';
const MyList = lazy(()=> import ('./pages/MyList'));



function App() {
  return (
    <div className="App">
      <MovieProvider>
      <Suspense fallback={ <Spinner animation="border" />}>
        <Router>          
            <Search default path="/" />
            <Search path="/search" />
            <MyList path="/mylist" />      
        </Router>
      </Suspense>
      </MovieProvider>
         
    </div>
  );
}

export default App;
