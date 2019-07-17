import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import styled from "styled-components";
export default class Navbar extends Component {
    render() {
        return (
            <NavbarWrapper>
            <nav className="navbar navbar-expand-sm bg-dark navbar-dark px-sm-5" >
                
                <Link to="/" className="navbar-brand">Home</Link>
                <Link to = "/AddMovies" className="nav-link ml-auto"> AddMovies</Link>
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