import React,{Component} from "react";
import axios from "axios";
import { BrowserRouter as Router,Switch,Route,Link,NavLink} from "react-router-dom";

class ShowAddEmpComp extends Component{
    constructor(props){
       super(props)
       this.state={
           "empId":"",
           "empName":"",
           "empSal":"",
           "isMarried":false,
           empObj:{"id":"0", "empId":"", "empName":"","empSal":""}
       }
       
    }
    handleChange=(event)=>{
        const {name,value,type,checked}=event.target
        console.log("...In handle change"+name+":"+value);
        this.setState({[name]:value})
}
handleSubmit=(event)=>{
    let tempEmpObj={
        "empId":this.state.empId,
        "empName":this.state.empName,
        "empSal":this.state.empSal,
        "isMarried":false
    }
    console.log(""+tempEmpObj);
    this.setState({empObj:tempEmpObj});
    axios.post("http://localhost:3000/emps",tempEmpObj)
    .then((responseData)=>{console.log("Data added")})
    .catch((responseError)=>{console.log("Error while adding");})
    this.props.history.push("/")
}
render(){
    return(<div>
        <form onSubmit={this.handleSubmit} class="container col-md-4">
            <div class="form-group">
            EMPID:<input type="text" onChange={this.handleChange} name="empId" class="form-control"></input><br/>
            EMPNAME:<input type="text" onChange={this.handleChange} name="empName" class="form-control"></input><br/>
            SALARY:<input type="text" onChange={this.handleChange} name="empSal" class="form-control"></input><br/>
            <button type="submit" class="btn btn-success">Add Emp</button></div><br/>
        </form>

    </div>)
}
}
export default ShowAddEmpComp;