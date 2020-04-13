import React from "react";
import ImageSlides from "./ImageSlides";
import JusticeLeague from "./JusticeLeague";

class Body extends React.Component{
    render(){
        return(
            <div>
                <ImageSlides />
                <JusticeLeague />
            </div>
        )
    }
}

export default Body;