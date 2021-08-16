import React,{Component} from "react";
import Army from "./ArmyMen"
class Pooja extends Component
{
    constructor(props)
    {
        super(props);
        this.state=
        {    
            gunShots:0       
        }             
    }
    //-----------------------------------
    handleGunShots=()=>{
            this.setState({gunShots:this.state.gunShots+1})
    }
     //------------------------------------ 
    render()
    {
        return (
        <div>
           <h4 onMouseOver={this.handleGunShots}>
           Pooja : {this.props.gunName}   gunShots  ={this.state.gunShots}
           </h4> 
        </div>   )     
    }
}
export default Army(Pooja);