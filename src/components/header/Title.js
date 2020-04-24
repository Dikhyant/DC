import React from "react";
import JumboTron from "react-bootstrap/Jumbotron";
import {LinkContainer} from "react-router-bootstrap"
import DC_logo from "../../images/logo/DC_logo.png";

class Title extends React.Component{
    render(){
        return(
            <div>
                <JumboTron className="jumbotron-fluid bg-primary text-white">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col">
                                <div className="site-title-container">
                                    <LinkContainer to="/" ><img src={DC_logo} className="site-title" alt="Img not found" /></LinkContainer>
                                </div>
                                <p>
                                    Detective Comics
                                </p>
                            </div>
                        </div>
                    </div>
                </JumboTron>
            </div>
        )
    }
}

export default Title;