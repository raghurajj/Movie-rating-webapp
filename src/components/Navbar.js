import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import styled from "styled-components";
export default class Navbar extends Component {
    render() {
        return (
            <NavbarWrapper>
            <nav className="navbar navbar-expand-sm bg-dark navbar-dark px-sm-5" >
                
                <Link to="/" className="navbar-brand"><i className="fa fa-home fa-lg"></i>Home</Link>
                <Link to = "/AddMovies" className="nav-link ml-auto"><i className="fa fa-plus-square fa-lg"></i> AddMovies</Link>
            </nav>
            </NavbarWrapper>
        )
    }
}

const NavbarWrapper=styled.div`
.nav-link{
    color:white;
}

.nav-link:hover{
    color:red;
}
`