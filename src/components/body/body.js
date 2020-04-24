import React from "react";
import ImageSlides from "./ImageSlides";
import JusticeLeague from "./JusticeLeague";
import ComicSeries from "./ComicSeries";
import Games from "./Games";
import TvSeries from "./TvSeries";


import "../../styles/index.css";

class Body extends React.Component{
    render(){
        return(
                <div className="main-body">
                    <ImageSlides />
                    <JusticeLeague />
                    <ComicSeries />
                    <Games />
                    <TvSeries />
                </div>
        )
    }
}

export default Body;


 