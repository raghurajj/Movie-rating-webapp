import React from 'react';
import './App.css';
import {Switch , Route} from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Details from "./components/Details";
import MovieList from "./components/MovieList";
import Default from "./components/Default";
import AddMovies from "./components/AddMovies";
import Footer from "./components/Footer";


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
      <Footer/>
    </React-Fragment>
  );
}

export default App;
