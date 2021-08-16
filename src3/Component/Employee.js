import React,{useState} from 'react';
//import {EmployeeData} from "../EmployeeData.json";
function Employee(){
    const [employee,setEmployee]=useState({
        id:"",
        name:"",
        salary:"",
        department:""
           })
       // const empList=[];
           
          const handleSubmit=(event)=>{
              //alert("hello"+event.target.value)
              alert(employee.name+" added successfully")
              //empList.push(employee);
             //this.setEmployee({employee.id:event.target.value})

       
           } 
         
        return (<div>
            <h1>EMPLOYEE MANAGEMENT SYSTEM</h1><hr/>
                   <form onSubmit={handleSubmit}>
        <div class="form-group">
            EmployeeId : <input type="text" value={employee.id}  onChange={
                (event)=>{setEmployee({...employee,id:event.target.value})}
            } class="form-control"/><br/><br/>
            EmployeeName : <input type="text" value={employee.name} onChange={
                (event)=>{setEmployee({...employee,name:event.target.value})}
            } class="form-control"/><br></br><br/>
            EmployeeSalary : <input type="text" value={employee.salary} onChange={
                (event)=>{setEmployee({...employee,salary:event.target.value})}
            } class="form-control"/><br></br><br/>
            EmployeeDepartment : <input type="text" value={employee.department} onChange={
                (event)=>{setEmployee({...employee,department:event.target.value})}
            } class="form-control"/><br></br><br/>
             <button type="submit"  class="btn btn-dark">Save</button><br></br></div>
        </form>
        <table></table>
        <h2>EmployeeName:{employee.name}</h2><hr/>
        
               </div>)
               
}
export default Employee;
