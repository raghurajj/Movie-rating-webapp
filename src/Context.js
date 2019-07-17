import React, { Component } from 'react'
import movies from "./data/movies";

const MovieContext=React.createContext();

class MovieProvider extends Component {
state={
    moviesList:movies,
    detailMovie:movies.movies[0]
};

getItem= movie_id =>{
    const movie=this.state.moviesList.movies.find(item => item.movie_id === movie_id);
    return movie;
}

handleDetail= (movie_id) =>{
    const movie=this.getItem(movie_id);
    this.setState(() => {
     return { detailMovie:movie };
    })
};

    render() {
        
        return (
            <MovieContext.Provider value={{...this.state,handleDetail:this.handleDetail}}>
            {this.props.children}
            </MovieContext.Provider>
        )
    }
}

const MovieConsumer=MovieContext.Consumer;

export {MovieProvider , MovieConsumer};