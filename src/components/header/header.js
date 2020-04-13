import React from "react";
import Title from "./Title";
import Navigation from "./Navigation";

class Header extends React.Component{
    render(){
        return(
            <div>
                <Navigation />
                <Title />
            </div>
        )
    }
}

export default Header;