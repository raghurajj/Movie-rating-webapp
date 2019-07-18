import React, { Component } from 'react'
import {MovieConsumer} from "../Context";
import users from "../data/user";
import styled from "styled-components";
import StarRatingComponent from 'react-star-rating-component';
import StarRatings from 'react-star-ratings';

export default class Details extends Component {
    state={
        users:users,
        rating:0
    };



    // onStarClick(nextValue, prevValue, name) {
    //     this.setState({rating: nextValue});
    //   }

      changeRating( newRating, name ) {
        this.setState({rating: newRating});
        
         }

    render() {  
        console.log(this.state.rating)
        return (
            <MovieConsumer>
                { value => {
                   // console.log(value.detailMovie)
                    const {movie_id,title,release_date,director_id,image,actors,avg_rating,description} = value.detailMovie;
                    //console.log(users.users[{director_id}]);
                    const {rtng}=avg_rating;
                    return (
                        <DetailsWrapper >
                        <div className="container py-5">
                            <div className="row">
                                <div className="title col-10 mx-auto text-center text-slanted text-blue my-5">

                                    <h1><strong>{title}</strong></h1>

                                </div>

                            </div>
                            
                            <div className="row">
                                <div className="img col-10 mx-auto col-md-5 my-3">
                                    <img src={image} className="img-fluid" alt="movie" />
                                </div>


                                <div className="details col-10 mx-auto col-md-6 my-3 text-capitalize">
                                    <h6><strong>Date Of Release:</strong>{release_date}</h6>
                                    <h5><strong>Average Rating:</strong></h5>
                                    <StarRatings
                                    rating={parseFloat(avg_rating)}
                                    starRatedColor="gold"
                                    starEmptyColor="grey"
                                    numberOfStars={5}
                                    starDimension="30px"
                                    name='rating'
                                    />
                                    <br/>
                                    <br/>
                                    <h4><strong>Actors:</strong></h4>
                                     {
                                         
                                         actors.map( id=> {
                                      return ( 
                                    <div> 
                                      <div class="image">  
                                      <img src={users.users[id].profile_pic} alt="user pic"/> 
                                      
                                      <div class="info">
                                      <h6><strong>Name:</strong> {users.users[id].first_name} {users.users[id].last_name}  <strong> Age:</strong> {users.users[id].age}</h6>
                                      </div>
                                      </div>
                                      </div> 
                                      );
                                        }
                                   
                                   ) 
                                    }
                                    <br/>
                                     <div>
                                    <h4><strong>director:</strong></h4>
                                    <div class="imagedir">  
                                      <img src={users.users[director_id].profile_pic} alt="user pic"/> 
                                      
                                      <div class="info">
                                       <h6><strong>Name:</strong> {users.users[director_id].first_name} {users.users[director_id].last_name} , <strong> Age:</strong> {users.users[director_id].age}</h6>
                                    </div>  
                                    </div>
                                    </div>
                                    <br/>
                                    <br/>
                                   <h5><strong>Rate this Movie:</strong></h5>
                                    <StarRatings
                                    rating={this.state.rating}
                                    starRatedColor="gold"
                                    starEmptyColor="grey"
                                    changeRating={this.changeRating.bind(this)}
                                    numberOfStars={5}
                                    starDimension="30px"
                                    name='rating1'
                                    />
                                    {/* <StarRatingComponent 
                                    name="rate1" 
                                    starCount={5}
                                    value={this.state.rating}
                                    onStarClick={this.onStarClick.bind(this)}
                                    /> */}
                                
                                </div>

                            </div>
                            
                            <div className="row">
                                <div className="col-10 mx-auto text-center text-slanted text-blue my-5">

                                    <h3><strong>About Movie</strong></h3>
                                    <p>{description}</p>
                                </div>

                            </div>

                        </div>
                        </DetailsWrapper>
                    )
                }

                }
            </MovieConsumer>
        )
    }
}


const DetailsWrapper=styled.div`

.img{
    height:500px;
    width:500px;
    overflow:hidden;
    transition:all 1s linear;
}
.img-fluid{
    width:100%;
}

.img:hover{   
    border:0.04rem solid rgba(0,0,0,0.2);
    box-shadow:4px 2px 5px 0px rgba(0,0,0,0.2);
}
.details{
    padding:20px;
    transition:all 1s linear;
    border:transparent;
    background-color:lightgrey;
}
.details:hover{   
    border:0.04rem solid rgba(0,0,0,0.2);
    box-shadow:4px 2px 5px 0px rgba(0,0,0,0.2);
}

.title{
    font-family:"Permanent Marker";
    letter-spacing:0.3rem;
    color:black;
    text-shadow:2px 0px 2px grey; 
    transform:scale(1.3);
}
.image{
    height:150px;
    width:150px;
    position:relative;
    float:left;
    margin:5px;
    
}

.image>img{
    height:150px;
    width:100%;
    overflow:hidden;
    display:block;
}

.info{
    position: absolute;
    bottom: 0px;
    right: 0px;
    top:0px;
    left:0px;
    height:100%;
    width:100%;
    color: white;
    opacity:0;
    transition: .5s ease;
    background-color: grey;
    text-align:center;
    padding-top:35px;
}

.image:hover .info{
    opacity:1;
}




.imagedir{
    height:150px;
    width:150px;
    position:relative;
    margin:5px;
}

.imagedir>img{
    height:150px;
    width:100%;
    overflow:hidden;
}
.imagedir:hover .info{
    opacity:1;
}


`