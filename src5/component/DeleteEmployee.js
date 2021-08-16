import React, { Component } from "react";
import axios from "axios";
import { BrowserRouter as Router, Switch, Route, Link, NavLink } from "react-router-dom";

export default class DeleteEmployee extends Component {

    constructor(props) {
        super(props)
        this.state = {
            "id": "",
            empObj: { "id": "0"}
        }
    }

    deleteEmp = (event) => {
        let tempEmpObj = {
            "id": this.state.id
        }
        console.log("" + tempEmpObj);
        this.setState({ empObj: tempEmpObj });
        axios.delete("http://localhost:3000/emps" + tempEmpObj.id, tempEmpObj)
            .then((responseData) => { console.log("Data Deleted!") })
            .catch((responseError) => { console.log("Error while adding"); })
        this.props.history.push("/ShowAllEmpPage")
    }

    render() {
        console.log("This is render Update")
        return ( <div>
             <h2><b>DELETE EMPLOYEE</b></h2>
            <form onSubmit = { this.deleteEmp }>

            EMPID: < input type = "text"
            onChange = {
                (e) => this.setState({ id: e.target.value })
            }
            name = "id"/> <br/><br/>
            <button type = "submit"> Delete Employee </button>
            </form>
            </div>)
    }


}