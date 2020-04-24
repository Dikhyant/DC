import React from "react";
import Card from "react-bootstrap/Card";
import imageInfo from "./JusticeLeagueImages";

import {LinkContainer} from "react-router-bootstrap";

import "../../styles/textAlign.css";
import "../../styles/ImageResize.css";

class Demo extends React.Component{
    render(){
        // console.log(this.props.children);
        return(
            <div>
                {this.props.children}
            </div>
        )
    }
}

class JusticeLeague extends React.Component{
    render(){
        const imagesCards = imageInfo.map( image=>{
            return(
                <div key={Math.random()} className="col-sm">
                    <Demo>
                    <LinkContainer to={"/heros/"+image.title}>
                        <Card className="card-shadow img-card">
                            <Card.Img src={image.path} />
                            <Card.Body>
                                <Card.Title>{image.title}</Card.Title>
                                <Card.Text>{image.Info}</Card.Text>
                            </Card.Body>
                        </Card>
                    </LinkContainer>
                    </Demo>
                </div>
            )
        })
        return(
                <div className="container">
                    <div className="row">
                        <div className="col"></div>
                        <div className="col">
                            <h1 className="h1">Justice League</h1>
                        </div>
                        <div className="col"></div>
                    </div>

                    <div className="row">
                        {imagesCards}
                    </div>
                </div>
        )
    }
}

export default JusticeLeague;