import React from "react";
import "../CSS/Header.css";
class Header extends React.Component
{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>
                <h1>
                    Welcome To {this.props.compName}
               {this.props.location} </h1>

            </div>
        )
    }
}
export default Header;