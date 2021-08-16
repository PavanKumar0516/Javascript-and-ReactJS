
import { BrowserRouter as Router,Switch,Route,Link,NavLink} from "react-router-dom";
import './App.css';
import Employee from './Component/Employee';
import React from 'react';
import ShowAllEmpComp from "./Component/ShowAllEmpComp";
import ShowAddEmpComp from "./Component/ShowAddEmpComp";
import ShowDeleteEmpComp from "./Component/ShowDeleteEmpComp";
import ShowUpdateEmpComp from "./Component/ShowUpdateEmpComp";
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  
  //<li><Link to="/ShowDeleteEmpPage" class="text-white">Delete Emp</Link></li>
      //<Route path="/ShowDeleteEmpPage" component={ShowDeleteEmpComp}></Route>
  return (<div className="App"><Router>
      <div class="p-2 mb-2 bg-primary text-white"><h3>WELCOME TO EMPLOYEE MANAGEMENT!!!</h3>
      <li><Link to="/" class="text-white">Home</Link></li>
      <li><Link to="/ShowAddEmpPage" class="text-white">Add Emp</Link></li>
      <li><Link to="/" class="text-white">Show All Emp</Link></li>
      <li><Link to="/ShowUpdateEmpPage" class="text-white">Update Emp </Link></li>
      <li><Link to="/ShowDeleteEmpPage" class="text-white">Delete Emp </Link></li>
      </div>
      <hr/>
      <Route path="/" component={ShowAllEmpComp}></Route>
      <Route path="/ShowAllEmpPage" component={ShowAllEmpComp}></Route>
      <Route path="/ShowAddEmpPage" component={ShowAddEmpComp}></Route>
      <Route path="/ShowUpdateEmpPage/:id" component={ShowUpdateEmpComp}></Route>
      <Route path="/ShowDeleteEmpPage/:id" component={ShowDeleteEmpComp}></Route></Router>
      <div class="p-5 mb-2 bg-secondary"></div>
      </div>
    );
}

export default App;
