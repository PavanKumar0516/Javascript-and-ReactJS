import React,{Component} from "react";
import Army from "./ArmyMen"
class Yuvraj extends Component
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
           Yuvraj : {this.props.gunName}   gunShots  ={this.state.gunShots}
           </h4> 
        </div>   )     
    }
}
export default Army(Yuvraj);