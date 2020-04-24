import React from "react";
import Images from "./VillainImages";
import Villain from "./Villain";

import {Switch, Route} from "react-router-dom";
import {LinkContainer} from "react-router-bootstrap";
import Card from "react-bootstrap/Card";

class VillainGallery extends React.Component{
    render(){
        const imageCards = Images.map( image=>{
            return(
                <div className="col" key={Math.random()}>
                    <LinkContainer to={"/villains/"+image.title} >
                        <Card className="card-shadow img-card">
                            <Card.Img src={image.path} alt="Image not found" />
                            <Card.Body>
                                <Card.Title>{image.title}</Card.Title>
                            </Card.Body>
                        </Card>
                     </LinkContainer>
                </div>
            )
        });

        var imageGrid = [];
        var row_Images = [];
        let i=0;
        imageCards.forEach( imgCrd=>{
            row_Images.push(imgCrd); i++;
            if(i===6){ // after 6 image cards are fit in a row , we move on to create the next row
                imageGrid.push(
                    <div className="row" key={Math.random()}>
                        {row_Images}
                    </div>
                );
                i=0;
                row_Images = [];
            }
        });

        if(row_Images.length !== 0){
            imageGrid.push(
                <div className="row" key={Math.random()}>
                    {row_Images}
                </div>
            );
        }

        const VillainRoutes = Images.map( image=>{
            return(
                <Route key={Math.random()} path={"/villains/"+image.title}>
                    <Villain img={image.path} info={image.info} />
                </Route>
            )
        });

        
        return(
            <div className="container">
                <Switch>
                    <Route exact path="/villains">
                        {imageGrid}
                    </Route>
                    {VillainRoutes}
                </Switch>
            </div>
        )
    }
}

export default VillainGallery;