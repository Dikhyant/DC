import React from "react";
import Images from "./TvSeriesImages";

import Card from "react-bootstrap/Card";

class TvSeries extends React.Component{
    render(){
        const ImageCards = Images.map(image=>{
            return(
                <div className="col" key={Math.random()}>
                    <Card className="card-shadow">
                        <Card.Img src={image.path} />
                        <Card.Body>
                            <Card.Title>{image.title}</Card.Title>
                        </Card.Body>
                    </Card>
                </div>
            )
        })
        return(
            <div className="container">
                <div className="row">
                    <div className="col"></div>
                    <div className="col"><h1 className="h1">TV Series</h1></div>
                    <div className="col"></div>
                </div>
                <div className="row">
                    {ImageCards}
                </div>
            </div>
        )
    }
}

export default TvSeries;