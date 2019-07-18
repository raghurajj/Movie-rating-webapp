import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import styled from "styled-components";
import { Navbar, NavbarBrand,Nav, NavbarToggler, Collapse , NavItem, Jumbotron, Button , Modal, ModalHeader, ModalBody,
Form,FormGroup,Input, Label } from 'reactstrap';
import {NavLink} from 'react-router-dom';

export default class Header extends Component {

constructor(props){
    super(props);
    this.state={
        isNavOpen:false,
        isModalOpen:false
    };
    this.toggleNav=this.toggleNav.bind(this);
    this.toggleModal=this.toggleModal.bind(this);
    this.handleLogin=this.handleLogin.bind(this);
}

toggleNav(){
    this.setState({
        isNavOpen:!this.state.isNavOpen
    });
}

toggleModal(){
    this.setState({
        isModalOpen:!this.state.isModalOpen
    });
}
handleLogin(event){
    this.toggleModal();
    alert("Username:" + this.username.value + "Password: " + this.password.value + "Remember: " + this.remember.checked)
    event.preventDefault();

}

    render() {
        return (
            <NavbarWrapper>
            <Navbar className="navbar-dark bg-dark" expand="md">
                <div className="container" >
                    <NavbarToggler onClick={this.toggleNav}/>
                <NavbarBrand className="mr-auto" href="/">
                <Link to="/" className="navbar-brand"><i className="fa fa-home fa-lg"></i>Home</Link>
                </NavbarBrand>
            <Collapse isOpen={this.state.isNavOpen } navbar>
                <Nav navbar>
                    <NavItem>
                        <NavLink className="nav-link" to="/AddMovies">
                            <span className="fa fa-plus-square fa-lg">Add Movies</span>

                        </NavLink>
                    </NavItem>

                </Nav>
                <Nav className="ml-auto" navbar>
                    <NavItem>
                        <Button outline onClick={this.toggleModal}>
                            <span className="fa fa-sign-in fa-lg"></span>Login
                        </Button>
                    </NavItem>

                </Nav>
                </Collapse>
                </div>

            </Navbar> 

            <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                <ModalHeader  toggle={this.toggleModal}>Login</ModalHeader>
                <ModalBody>
                    <Form onSubmit={this.handleLogin}>
                        <FormGroup>
                            <Label htmlFor="username">Username</Label>
                            <Input type="text" id="username" name="username" innerRef={(input)=>this.username=input}></Input>
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="password">Password</Label>
                            <Input type="password" id="password" name="password" innerRef={(input)=>this.password=input}></Input>
                        </FormGroup>
                        <FormGroup check>
                            <Label check>
                                <Input type="checkbox" name="remember" innerRef={(input)=>this.remember=input}></Input>Remember me
                            </Label>

                        </FormGroup>
                        <Button type="submit" value="submit" color="primary">Login</Button>

                    </Form> 
                </ModalBody>
            </Modal>
            </NavbarWrapper>
        )
    }
}

const NavbarWrapper=styled.div`
    .Navlink{
        color:white;
    }

`
