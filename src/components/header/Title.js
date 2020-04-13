import React from "react";
import JumboTron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class Title extends React.Component{
    render(){
        return(
            <div>
                <JumboTron className="jumbotron-fluid bg-primary text-white">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col">
                                <h1 className="display-1">
                                    DC
                                </h1>
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