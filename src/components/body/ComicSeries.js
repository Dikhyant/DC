import React from "react";
import Images from "./ComicSeriesImages";

import Card from "react-bootstrap/Card";

class ComicSeries extends React.Component{
    render(){
        const ImageCards = Images.map( image=>{
            return(
                <div className="col-sm" key={Math.random()}>
                    <Card className="card-shadow img-card-3">
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
                    <div className="col"><h1 className="h1">Comic Series</h1></div>
                    <div className="col"></div>
                </div>
                <div className="row">
                    {ImageCards}
                </div>
            </div>
        )
    }
}

export default ComicSeries;