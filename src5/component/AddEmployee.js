import axios from "axios";
import React, { Component } from "react";
//import ReactDOM from 'react-dom';

class AddEmployee extends Component {

    constructor(props) {
        super(props);
        this.state = { id: '',
        name: '',
        salary: '',
        department: '',
     };
    }

    myChangeHandler1 = (event) => {
        this.setState({id: event.target.value});
    }
      myChangeHandler2 = (event) => {
        this.setState({name: event.target.value});
    }
    myChangeHandler3 = (event) => {
        this.setState({salary: event.target.value});
    }
    myChangeHandler4 = (event) => {
        this.setState({department: event.target.value});
    }

    handleSubmit = (event) => {
        alert(`A form was submitted:- ID:${this.state.id} Name:${this.state.name} Salary:${this.state.salary} Department:${this.state.department}`)
		event.preventDefault();
        const data = { id: this.state.id ,name:this.state.name,salary:this.state.salary,department:this.state.department};

        axios.post('http://localhost:3000/emps',data)
        .then(response => response.json())
        .then(data => {
          console.log('Success:', data);
        })
        .catch((error) => {
          console.error('Error:', error);
        });

    }

    render() {
        return ( <div>
        <h2><b>&emsp;ADD EMPLOYEE</b></h2>
        <form onSubmit={this.handleSubmit}>
        <label>&emsp;ID&emsp;&emsp;&emsp;</label>
      <input type='text' onChange={this.myChangeHandler1}/><br/><br/>
      <label>&emsp;Name&emsp;&ensp;</label>
      <input type='text' onChange={this.myChangeHandler2}/><br/><br/>
      <label>&emsp;Salary&emsp;&ensp;</label>
      <input type='text' onChange={this.myChangeHandler3}/><br/><br/>
      <label>&emsp;Dept.&emsp;&ensp;</label>
      <input type='text' onChange={this.myChangeHandler4}/><br/><br/>
      &emsp;{this.state.id}&emsp;{this.state.name}&emsp;{this.state.salary}&emsp;{this.state.department}<br/><br/>
      &emsp;<input type="submit" value="Add Employee"/>
        </form>

    </div>)
    }
}
export default AddEmployee;