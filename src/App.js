import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Switch , Route} from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Details from "./components/Details";
import MovieList from "./components/MovieList";
import Default from "./components/Default";
import AddMovies from "./components/AddMovies";

function App() {
  return (
    <React-Fragment>
      <Navbar/>
      
      <Switch>
      <Route  exact path='/' component={MovieList} />
      <Route  path='/details' component={Details} />   
      <Route  path='/addMovies' component={AddMovies} />
      <Route  component={Default} />   
      </Switch>
    </React-Fragment>
  );
}

export default App;
