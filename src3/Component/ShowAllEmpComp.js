import React,{Component} from "react";
import axios from "axios";
import { BrowserRouter as Router,Switch,Route,Link,NavLink} from "react-router-dom";
class ShowAllEmpComp extends Component{
    constructor(props){
        super(props);
        this.state={AllEmpData:[],errorMsg:""}
        this.displayUpdateEmpPage=this.displayUpdateEmpPage.bind(this);
        this.deleteRow=this.deleteRow.bind(this);
        //this.sortBySalary=this.sortBySalary.bind(this);
    }
    componentDidMount(){
        console.log("in componentDidMount ShowAllComp");
        axios.get("http://localhost:3000/emps")
        .then((responseData)=>{
            console.log("..data..",responseData.data);
            this.setState({AllEmpData:responseData.data});
            console.log("..data2..",this.state.AllEmpData);
        })
        .catch((responseError)=>{
            console.log("something went wrong")
        })
        
    }
    displayUpdateEmpPage=(event)=>{
        console.log("received id"+event.target.value);
        this.props.history.push(`/ShowUpdateEmpPage/${event.target.value}`)

    }
    deleteRow(event){  
        alert("received id"+event.target.value);
        this.props.history.push(`/ShowDeleteEmpPage/${event.target.value}`);    //history.push(`/ShowDeleteEmpPage/${event.target.value}`)
         } 
         /* sortBySalary=()=>{
         var sortArr=this.AllEmpData.sort((a,b)=>a.empSal-b.empSal);
         this.setState(sortArr)
    }*/
    render(){
        var empNewList=this.state.AllEmpData.map((emp,index)=>{
            return(<tr key={emp.id}>
                <td>{emp.id}</td>
                <td>{emp.empId}</td>
                <td>{emp.empName}</td>
                <td>{emp.empSal}</td>
                <td><button name="btnUpdate" value={emp.id} onClick={this.deleteRow} class="btn btn-link">Delete</button></td>
                <td><button name="btnUpdate"  value={emp.id} onClick={this.displayUpdateEmpPage} class="btn btn-link">Update</button></td>
                </tr>)
        });
        return(<div>
            <table  class="table table-striped">
                <thead><tr>
                    <th>ID</th>
                    <th>EMPID</th>
                    <th>EMPNAME</th>
                    <th onClick={this.sortBySalary}>EMPSAL</th>
                    <th>DELETE</th>
                    <th>UPDATE</th>
                    </tr></thead>
                    <tbody>
                        {empNewList}
                    </tbody>
            </table>
            <hr/>
        </div>)
        
    }

}
export default ShowAllEmpComp;