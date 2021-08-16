import React,{Component} from "react";


class Register extends Component
{
    constructor(){
        super();
        this.state={
           // id:0,
            //name:""
           employeeData:[]
        }
    }
    handleSubmit=(e)=>{
        e.preventDefault();
        let employeeData=this.state.employeeData;
        let id=this.refs.txtId.value;
        let name=this.refs.txtName.value;
        let salary=this.refs.txtSalary.value;
        let department=this.refs.txtDepartment.value;
        
        let newEmployee={
            "id":id,
            "name":name,
            "salary":salary,
            "department":department
        }
        employeeData.push(newEmployee);
         this.setState({
            employeeData:employeeData
        })
        alert(this.state.employeeData.id)
        alert(employeeData.name)
        this.refs.myForm.reset();
                        }
        
    
    
    render()
    {
        let employeeData=this.state.employeeData;
        return (<div align="center"><form ref="myForm" class="form-horizontal">
           <div class="container"> <label>Id</label>
           
            <input type="text" ref="txtId" placeholder="Enter Id" class="form-control"></input><br></br><br></br>
             <label>Name</label>
            <input type="text" ref="txtName" placeholder="Enter Name" class="form-control"></input><br></br><br></br>
            <label>Salary</label>
            <input type="text" ref="txtSalary" placeholder="Enter Salary" class="form-control"></input><br></br><br></br>
            <label>Department</label>
            <input type="text" ref="txtDepartment" placeholder="Enter Dept" class="form-control"></input><br></br><br></br>
            <button onClick={e=>this.handleSubmit(e)} class="btn btn-dark">Save</button><br></br><br></br></div>

        </form><div class="container"><table class="table table-striped">
            <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Salary</th>
                <th>Department</th>
                <th>Edit</th>
                <th>Delete</th>
            </tr>
            {
                employeeData.map((data, i)=>
                <tr key={i}>
                <td>{data.id}</td>
                <td>{data.name}</td>
                <td>{data.salary}</td>
                <td>{data.department}</td>
                <td><button class="btn btn-primary">Edit</button></td>
                <td><button><span class="glyphicon glyphicon-trash">Delete</span></button></td>
                </tr>)
            }
        </table></div>
        </div>)
    }
}
export default Register;
