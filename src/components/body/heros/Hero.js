import React from "react";

class Hero extends React.Component{
    render(){
        return(
            <div>
                <div><img src={this.props.img} className="img-3" alt="Img not found" /></div>
                <div className="hero-info">
                    {this.props.info}
                </div>
            </div>
        )
    }
}

export default Hero;