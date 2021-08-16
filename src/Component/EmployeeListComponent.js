import React,{Component} from "react";
class EmployeeListComponent extends Component{
    constructor(props){
        super(props);
        this.state={
            cities:["pune","noida","chennai","nagpur"],
            employees:[
                {id:1,empId:112,empName:"Vaishali"},
                {id:2,empId:678,empName:"Vishal"},
                {id:3,empId:345,empName:"sameer"},
                {id:4,empId:234,empName:"Arti"}
                ]
        }
        
        }
        render()
        {
            var cityList=this.state.cities.
            map((city,index)=>{
                return<h4 key={index}>Key:{index}- City:{city}</h4>
            })
            var empList=this.state.employees.map((emp,index)=>{
                return<h3 key={emp.id}>key:{emp.id}- EmpName:{emp.empName}</h3>
            })
            return (
                <div>
                    <h1>City List</h1>
                    {cityList}
                    <hr/>
                    <h2>
                        Emp List
                    </h2>{empList}
                </div>
            );

    }
}
export default EmployeeListComponent;