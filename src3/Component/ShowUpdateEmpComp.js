import React,{Component} from "react";
import axios from "axios";
import { BrowserRouter as Router,Switch,Route,Link,NavLink} from "react-router-dom";
import ShowAllEmpComp from "./ShowAllEmpComp";
class ShowUpdateEmpComp extends Component
{
    constructor(props)
    {
       super(props)
       this.state=
       {
        "empId":"",
        "empName":"",
        "empSal":"",
        "isMarried":false,
        empObj:{"id":"0", "empId":"", "empName":"","empSal":""}
    }
    }
    componentWillMount(){
        console.log("componentWillMount of showUpdateEmpComp")
        var empId=this.props.match.params.id
        console.log("empId : "+empId)
        axios.get(`http://localhost:3000/emps/${empId}`)
        .then((responseData)=>{

            console.log("received employee data "+responseData.data.empName)
            this.setState({empObj:responseData.data})
        })


    }
    
    handleChange=(event)=>{
        const {name,value,type,checked}=event.target
        console.log("...In handle change"+name+":"+value);
        this.setState({[name]:value})
    }

        updateEmp=(event)=>{
            let tempEmp=
            {
                    "empId":this.state.empObj.empId,
                    "empName":this.state.empName,
                    "empSal":this.state.empSal,
                    "isMarried":false
            }
            alert("Updated "+this.state.empName+" Salary "+this.state.empSal)
            alert(this.state.empObj.empName)
            this.setState({empObj:tempEmp});//d
            var empId=this.props.match.params.id
            axios.put(`http://localhost:3000/emps/${empId}`,tempEmp)
            .then((responseData)=>{console.log("Data added")})
            .catch((responseError)=>{console.log("Error while adding");})
            alert(this.state.empObj.empName)
            this.props.history.push("/")
       
    }
    render()
    {
        console.log("This is render Update")
        return(<div>
        
            <form onSubmit={this.updateEmp} class="container-fluid col-md-4">
                <div class="form-group">
            EMPID:<input type="text" value={this.state.empObj.empId} onChange={this.handleChange}  name="empId" class="form-control"></input><br/>
            EMPNAME:<input type="text" value={this.state.empName} onChange={this.handleChange} name="empName" class="form-control"></input><br/>
            SALARY:<input type="text" value={this.state.empSal} onChange={this.handleChange} name="empSal" class="form-control"></input><br/>
            <button type="submit" class="btn btn-success">Update Emp</button></div><br/>
        </form>
        </div>)
    }
}
export default ShowUpdateEmpComp;