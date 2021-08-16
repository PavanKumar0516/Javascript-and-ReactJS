import React,{Component} from "react";
import axios from "axios";
import {​​​BrowserRouter as Router,Route,Link,NavLink}​​​ from "react-router-dom";
class ShowAllEmpComp extends Component{
    constructor(props){
        super(props);
        this.state={AllEmpData:[],errorMsg:""}
    }
    componentDidMount(){
        console.log("in componentDidMount ShowAllComp");
        axios.get("http://localhost:3000/emps")
        .then((responseData)=>{
            console.log("....",responseData.data);
            this.setState({AllEmpData:responseData.data});
        })
        .catch((responseError)=>{
            console.log("something went wrong")
        })
        
    }
    render(){
        var empList=this.state.AllEmpData.map((emp,index)=>{
            return(<tr key={emp.id}>
                <td>{emp.id}</td>
                <td>{emp.empId}</td>
                <td>{emp.empName}</td>
                <td>{emp.empSal}</td>
                <td><Link to="">Delete</Link></td>
                <td><Link to="">Update</Link></td>
                </tr>)
        });
        
    }
}
export default ShowAllEmpComp;