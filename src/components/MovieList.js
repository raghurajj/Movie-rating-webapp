import React, { Component } from 'react'
import {MovieConsumer} from "../Context";
import Movie from "./Movie";
import styled from "styled-components";
export default class  extends Component {

    
    render() {
        
        return (
            <React.Fragment>
                <div className="py-5">
                <div className="container">
                <TitleWrapper>
                    
                    <div className="col-10 mx-auto text-center">
                    <h1  className="text-capitalize font-weight-bold "><strong>Welcome to the World Of Movies</strong></h1>
                    </div>
                    </TitleWrapper>
                <div className="row">
                <MovieConsumer>
                    {
                        value => {
                           return value.moviesList.movies.map(movie =>{
                               return <Movie key={movie.movie_id} movie={movie}/>
                           });
                        }
                    }
                </MovieConsumer>

                </div>

                </div>

                </div>
            </React.Fragment>
        )
    }
}

const TitleWrapper = styled.div`

font-family:"Permanent Marker";
letter-spacing:0.3rem;
color:black;
text-shadow:2px 0px 2px grey; 
transform:scale(1.4);

`