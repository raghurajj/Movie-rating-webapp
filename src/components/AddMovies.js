import React, { Component } from 'react'
import movies from "../data/movies";
import styled from "styled-components";

export default class  extends Component {

    constructor(props) {
        super(props)
    
        this.state =  {
                     movie_id:' ',
                     title:' ',
                     release_date:' ',
                     director_id:' ',
                     image:' ',
                     actors:[ ],
                     avg_rating:' ',
                     description:' ',
                     addmovie:movies.movies[0]
                 
        }
    }
    


    handlemovieidchange=event => {
        this.setState({
            movie_id:event.target.value,
        })
    }

    handletitlechange=event => {
        this.setState({
            title:event.target.value
        })
    }

    handlereleasedatechange=event => {
        this.setState({
            release_date:event.target.value
        })
    }

    handledirectoridchange=event => {
        this.setState({
            director_id:event.target.value
        })
    }
    handleimagechange=event => {
        this.setState({
            image:event.target.value
        })
    }

    handleactorschange=event => {
        this.setState({
            actors:event.target.value
        })
    }
    handleaverageratingchange=event => {
        this.setState({
            avg_rating:event.target.value
        })
    }

    handledescriptionchange=event => {
        this.setState({
            description:event.target.value
        })
    }


    handleSubmit=event=>{
        this.setState({
            movie_id:this.state.movie_id,
            title:this.state.title,
            release_date:this.state.release_date,
            director_id:this.state.director_id,
            image:this.state.image,
            actors:this.state.actors,
            description:this.state.description,
            avg_rating:this.state.avg_rating,


        })
        event.preventDefault();
        console.log(this.state);
    }

    handleactorschange=(event)=>{
        var options = event.target.options;
         for (var i = 0, l = options.length; i < l; i++) {
          if (options[i].selected) {
            this.setState({ 
                actors: [...this.state.actors, options[i].value ] });
               // actors.push(options[i].value)
           // });
          }
        }
          }

    render() {
        //var json = JSON.stringify(obj);
        

        return (
            <DetailsWrapper>
                <div  className="heading col-10 mx-auto  text-center text-slanted text-blue my-5">
                    <h1>Fill Following Details to add a Movie</h1>
                </div>
            <div  className="details col-10 mx-auto  text-center text-slanted text-blue my-5">
            <form >
            <div >
                <label className="Label">Movie Id</label>
                <input className="Input" type="number" value={this.state.movie_id} onChange={this.handlemovieidchange}>
                </input>
            </div>
            <div>
                <label className="Label">Title</label>
                <input className="Input" type="text" value={this.state.title} onChange={this.handletitlechange}>
                </input>
            </div>
            <div>
                <label className="Label">Release Date</label>
                <input  className="Input" type="date" value={this.state.release_date} onChange={this.handlereleasedatechange}>
                </input>
            </div>
            <div>
                <label className="Label">Director Id</label>
                <select  className="Input" type="number" value={this.state.director_id} onChange={this.handledirectoridchange}>
                <option>select director_id</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                </select>
            </div>
            <div>
                <label className="Label">Image Url</label>
                <input  className="Input" type="url" value={this.state.image} onChange={this.handleimagechange}>
                </input>
            </div>
            <div>
                <label className="Label">Actors</label>
                <select className="Input" type="text" value={this.state.actors} onChange={this.handleactorschange} multiple>  
                    <option value={1}>Daniel Radcliffe</option>
                    <option value={2}>Jodie Foster</option>
                    <option value={3} >Anthony Hopkins</option>
                    <option value={4} >Emma Watson</option>
                    <option value={5} >John Doe</option>
                </select>
            </div>
            <div>
                <label className="Label">Average Rating</label>
                <input className="Input" type="number" value={this.state.avg_rating} onChange={this.handleaverageratingchange}>
                </input>
            </div>
            <div>
                <label className="Label">Description</label>
                <textarea className="Input" type="text" value={this.state.description} onChange={this.handledescriptionchange}>
                </textarea>
            </div>

            <div>
                <button className="Button" onClick={this.handleSubmit}>
                    Submit
                </button>
            </div>
            </form>
            
            </div>
            </DetailsWrapper>
        )
    }
}

const DetailsWrapper = styled.div`

.heading{
    font-family:"Permanent Marker";
    letter-spacing:0.3rem;
    color:black;
    text-shadow:2px 0px 2px grey; 
    transform:scale(1.4);

}

.details{
    padding:25px;
    width:550px;
    background-color:lightgrey;
    border:0.04rem solid rgba(0,0,0,0.2);
    box-shadow:4px 2px 5px 0px rgba(0,0,0,0.2);
}
.Label{
    width:150px;
    height:20px;
}
.Input{
    border:0.04rem solid rgba(0,0,0,0.2);
    box-shadow:4px 2px 5px 0px rgba(0,0,0,0.2);
    width:200px;
}
.Button{
    background-color:black;
    color:white;
    border:0.04rem solid rgba(0,0,0,0.2);
    box-shadow:4px 2px 5px 0px rgba(0,0,0,0.2);
    width:80px;
}

.Button:hover{
    background-color:green;
}

`