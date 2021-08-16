import React, { Component } from "react";
import axios from "axios";
import { BrowserRouter as Router, Switch, Route, Link, NavLink } from "react-router-dom";

class UpdateEmployee extends Component {

    constructor(props) {
        super(props)
        this.state = {
            "id": "",
            "name": "",
            "salary": "",
            "department": "",
            empObj: { "id": "0", "name": "", "salary": "", "department": "" }
        }
    }

    updateEmp = (event) => {
        let tempEmpObj = {
            "id": this.state.id,
            "name": this.state.name,
            "salary": this.state.salary,
            "department": this.state.department
        }
        console.log("" + tempEmpObj);
        this.setState({ empObj: tempEmpObj });
        axios.put("http://localhost:3000/emps/" + tempEmpObj.id, tempEmpObj)
            .then((responseData) => { console.log("Data Updated!") })
            .catch((responseError) => { console.log("Error while adding"); })
        this.props.history.push("/ViewEmployee")
    }

    render() {
        console.log("This is render Update")
        return ( < div >
         <h2><b>UPDATE EMPLOYEE</b></h2>
            <form onSubmit = { this.updateEmp }>

            EMPID: < input type = "text"
            onChange = {
                (e) => this.setState({ id: e.target.value })
            }
            name = "id"/> <br/>

            EMPNAME: < input type = "text" 
            onChange = {
                (e) => this.setState({ name: e.target.value })
            } name = "name"/> <br/>

            SALARY: < input type = "text"
            onChange = {
                (e) => this.setState({ salary: e.target.value })
            }
            name = "salary"/> <br/>

            Department: <input type = "text"
            onChange = {
                (e) => this.setState({ department: e.target.value })
            } name = "department"/> <br/>
            <button type = "submit"> Update Employee </button> </form > </div>)
        }
    }
    export default UpdateEmployee