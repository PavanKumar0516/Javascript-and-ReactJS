import React,{Component} from "react";
import LoginComponent from "./LoginComponent";

class Greet extends Component{
    constructor(props){
        super(props);
        this.state=
        {
            id:0,
            name:"",
            count:0,
            message:"Happy BirthDay"
        }
        this.increaseCount=this.increaseCount.bind(this);
    }
    /*handleInput=(e)=>{
        e.preventDefault();
        let id=this.refs.txtId.value;
        let name=this.refs.txtName.value;
        p={
            "id":id,
            "name":name
            
        }
        this.setState({
            :id,
            "this.state.name":name
        })
        alert(this.state.id);
    }*/
        increaseCount()
        {
            this.setState({count:this.state.count+1});
        }
        //bind() is not require when using arrow function 
        decreaseCount=()=>
        {
            this.setState({count:this.state.count-1});
        }
    render(){
        let blueStyle={
            backgroundColor:'pink',
            color:'blue'
        }
        return(<div>
            <p style={blueStyle}>{this.state.message}:
            {this.props.firstName} </p>
            <button onClick={this.increaseCount}>IncrementCount</button>
            {this.state.count}
            <button onClick={this.decreaseCount}>Decrement count</button>
             <LoginComponent/>
             <form ref="myForm" class="form-horizontal">
           <div class="container"> <label>Id</label>
           
            <input type="text" ref="txtId" placeholder="Enter Id" class="form-control"></input><br></br><br></br>
             <label>Name</label>
            <input type="text" ref="txtName" placeholder="Enter Name" class="form-control"></input>
            <button onClick={e=>this.handleInput(e)} class="btn btn-dark">Save</button></div>
            </form>
        </div>)
    }
}
export default Greet;