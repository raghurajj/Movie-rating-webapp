import React, { Component } from 'react'
import {Link } from "react-router-dom";
import {MovieConsumer} from "../Context";
import styled from "styled-components";
import StarRatings from 'react-star-ratings';



export default class extends Component {

    render() {
        const {movie_id,title,release_date,director_id,image,actors,avg_rating} = this.props.movie;
        return (
            <MovieContainer className="col-9 mx-auto col-md-6 col-lg-4 my-3">
              <div className="card" >
                  <MovieConsumer>
                      { (value) => (
                          <div className="img-container p-5" onClick={()=>value.handleDetail(movie_id)}>
                          <Link to="/details" key={movie_id}>
                              <img src={image} alt="movie" className="card-img-top"></img>
                          </Link>
    
                      </div>
                      )}
                  
                  </MovieConsumer>
                  <div className="card-footer d-flex justify-content-between">
                  <p className="align-self-center mb-0">{title}</p>
                  {/* <StarRatingComponent
                  name="rate1" 
                  starCount={5}
                  value={rating}
                  /> */}
                  <StarRatings
                        rating= {parseFloat(avg_rating)}
                        starRatedColor="gold"
                        starEmptyColor="grey"
                        numberOfStars={5}
                        starDimension="20px"
                        starSpacing="2px"
                        name='rating1'
                    />

                  
                  </div>
              </div>
            </MovieContainer>
        )
    }
}

const MovieContainer=styled.div`
.card {
    border:transparent;
    transition:all 1s linear;
}

.card-footer {
    background:transparent;
    border-top:transparent;
    transition:all 1s linear;
}

&:hover {
    .card {
        border:0.04rem solid rgba(0,0,0,0.2);
        box-shadow:2px 2px 5px 0px rgba(0,0,0,0.2);
    }

    .card-footer {
        background:rgba(247,247,247);
    }
}

.img-container{
        position:relative;
        overflow:hidden;
}

.img-container:hover .card-img-top{
    transform:scale(1.2);
}

.card-img-top{
    transition:all 1s linear;
}



`