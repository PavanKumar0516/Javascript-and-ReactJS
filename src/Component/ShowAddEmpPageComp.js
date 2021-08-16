import React,{Component} from "react";
import axios from "axios";
import {​​​BrowserRouter as Router,Route,Link,NavLink}​​​ from "react-router-dom";
class ShowAddEmpPageComp extends Component{
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
    
}
}