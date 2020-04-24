import React from "react";
import Images from "./GameImages";

import Card from "react-bootstrap/Card";

class Games extends React.Component{
    render(){
        const ImageCards = Images.map(images=>{
            return(
                <div className="row" key={Math.random()}>
                    <Card className="card-shadow">
                        <div className="row">
                            {
                                images.shots.map( image=>{
                                    return(
                                        <div className="col" key={Math.random()}><Card.Img src={image.path} /></div>
                                    );
                                })
                            }
                        </div>
                        <Card.Body>
                            <Card.Title>{images.title}</Card.Title>
                        </Card.Body>
                    </Card>
                </div>
            );
        })
        return(
            <div className="container">
                <div className="row">
                    <div className="col"></div>
                    <div className="col"><h1>Video Games</h1></div>
                    <div className="col"></div>
                </div>
                <div className="container">
                    {ImageCards}
                </div>
            </div>
        )
    }
}

export default Games;