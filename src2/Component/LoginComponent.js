import React,{Component} from "react";

class LoginComponent extends Component{
    constructor(props){
        super(props);
        this.state={
            isLoggedIn:false}
            

    }
    handleClick(){
        console.log(" inside handleclick ");
        this.setState((prevState)=>
        {
            return ({isLoggedIn : !prevState.isLoggedIn})
        })
    }
    render(){
        let buttonText=this.state.isLoggedIn?"Login":"Logout";
        let worldDisplay;
        if(this.state.isLoggedIn==true){
            worldDisplay="IN";

        }
        else{
            worldDisplay="OUT";
        }
        return(<div><h3>You are Logged {worldDisplay}</h3>
                   <button onClick={this.handleClick}>{buttonText}</button>
                   </div>)
        
    }
}
export default LoginComponent