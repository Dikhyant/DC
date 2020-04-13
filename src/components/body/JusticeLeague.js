import React from "react";
import Card from "react-bootstrap/Card";
import imageInfo from "./JusticeLeagueImages";

import "../../styles/textAlign.css";
import "../../styles/ImageResize.css";

class JusticeLeague extends React.Component{
    render(){
        const imagesCards = imageInfo.map( image=>{
            return(
                <div key={Math.random()} className="col-sm">
                    <Card className="card-shadow">
                        <a href={image.path}><Card.Img src={image.path} /></a>
                        <Card.Body>
                            <Card.Title>{image.title}</Card.Title>
                            <Card.Text>{image.Info}</Card.Text>
                        </Card.Body>
                    </Card>
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