import React from 'react';
import {Link} from 'react-router-dom';
import styled from "styled-components";
function Footer(props) {
    return(
    <FooterWrapper>
    <div className="footer bg-dark">
        <div className="container ">
            <div className="row justify-content-center">             
                <div className="col-7 col-sm-5">
                    <h5>Our Address</h5>
                    <address>
		              22/5,charbhag road<br />
		              kapoorthla chauraha, lucknow<br />
		              India<br />
		              <i className="fa fa-phone fa-lg"></i>: 9833******<br />
		              <i className="fa fa-fax fa-lg"></i>: 8756******<br />
		              <i className="fa fa-envelope fa-lg"></i>: <a href="review@movie.com">
                         review@movie.com</a>
                    </address>
                </div>
                <div className="col-12 col-sm-4 align-self-center">
                    <div className="text-center">
                        <a className="btn btn-social-icon btn-google" href="http://google.com/+"><i className="fa fa-google-plus"></i></a>
                        <a className="btn btn-social-icon btn-facebook" href="http://www.facebook.com/profile.php?id="><i className="fa fa-facebook"></i></a>
                        <a className="btn btn-social-icon btn-linkedin" href="http://www.linkedin.com/in/"><i className="fa fa-linkedin"></i></a>
                        <a className="btn btn-social-icon btn-twitter" href="http://twitter.com/"><i className="fa fa-twitter"></i></a>
                        <a className="btn btn-social-icon btn-google" href="http://youtube.com/"><i className="fa fa-youtube"></i></a>
                        <a className="btn btn-social-icon" href="mailto:"><i className="fa fa-envelope-o"></i></a>
                    </div>
                </div>
            </div>
            <div className="row justify-content-center">             
                <div className="col-auto">
                    <p>© Copyright 2019 raghuraj pratap</p>
                </div>
            </div>
        </div>
    </div>
    </FooterWrapper>
    )
}


export default Footer;

const FooterWrapper=styled.div`
color:white;
.container{
    padding:20px;
}
.btn{
    margin:5px;
}

`