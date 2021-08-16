import React,{Component} from "react";
import axios from "axios";
import { BrowserRouter as Router,Switch,Route,Link,NavLink} from "react-router-dom";


class ViewEmployee extends Component{

    constructor(props){
        super(props);
        this.state={AllEmpData:[],errorMsg:""}
        this.displayUpdateEmpPage=this.displayUpdateEmpPage.bind(this);
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
    displayUpdateEmpPage=(event)=>{
        console.log("received id:"+event.target.value);
     this.props.history.push(`/ShowUpdateEmpPage/`+event.target.value)
    }

    deleteEmployee=(empId)=>{
        //alert(empId);
        axios.delete("http://localhost:3000/emps/"+empId)
        .then(response=>{
            if(response.data!==null){
               // alert("Employee Deleted Succesfully");
                this.setState({
                    AllEmpData:this.state.AllEmpData.filter(emp=>emp.id!==empId)

                });
            }

        });

    };

    render(){
        var empNewList=this.state.AllEmpData.map((employees,index)=>{
            return(
            <tr key={employees.id}>
                <td>{employees.id}</td>
                <td>{employees.name}</td>
                <td>{employees.salary}</td>
                <td>{employees.department}</td>
                <td><button name="btnUpdate"  value={employees.id} onClick={this.deleteEmployee.bind(this,employees.id)}>Delete</button></td>
                <td><button name="btnUpdate"  value={employees.id} onClick={this.displayUpdateEmpPage}>Update</button></td>
                </tr>)
        });
        return(<div>
            <h2><b>VIEW EMPLOYEE</b></h2>
            <table border="4">
                <thead><tr>
                    <th>ID</th>
                    <th>NAME</th>
                    <th>SALARY</th>
                    <th>DEPARTMENT</th>
                    <th>DELETE</th>
                    <th>UPDATE</th>
                    </tr></thead>
                    <tbody>
                        {empNewList}
                    </tbody>
            </table>
        </div>)
        
    }

}
export default ViewEmployee;