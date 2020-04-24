import React from "react";
import Images from "./HeroImages";
import Hero from "./Hero";
import { LinkContainer } from "react-router-bootstrap";
import {Switch, Route} from "react-router-dom"

import Card from "react-bootstrap/Card";

class HeroGallery extends React.Component{
    render(){
        const imageCards = Images.map( image=>{
            return(
                <div className="col" key={Math.random()}>
                    <LinkContainer to={"/heros/"+image.title} >
                        <Card className="card-shadow img-card">
                            <Card.Img src={image.path} alt="Image not found" />
                            <Card.Body>
                                <Card.Title>{image.title}</Card.Title>
                            </Card.Body>
                        </Card>
                     </LinkContainer>
                </div>
            )
        })

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

        const HeroRoutes = Images.map( image=>{
            return(
                <Route key={Math.random()} path={"/heros/"+image.title}>
                    <Hero img={image.path} info={image.info} />
                </Route>
            )
        })
        return(
            <div className="container">
                <Switch>
                    <Route exact path="/heros">
                        {imageGrid}
                    </Route>
                    {HeroRoutes}
                </Switch>
            </div>
        )
    }
}

export default HeroGallery;