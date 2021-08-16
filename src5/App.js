import logo from './logo.svg';
import './App.css';
import ViewEmployee from './component/ViewEmployee';
import AddEmployee from './component/AddEmployee';
import UpdateEmployee from './component/UpdateEmployee';
import DeleteEmployee from './component/DeleteEmployee';
import { BrowserRouter as Router,Switch,Route,Link,NavLink} from "react-router-dom";

function App() {
  return (
    <div className="App"><Router>
     <div class="p-2 mb-2 bg-primary text-white">
       <h3>WELCOME TO EMPLOYEE MANAGEMENT!!!</h3>
      <li><Link to="/" class="text-white">Home</Link></li>
      <li><Link to="/ShowAddEmpPage" class="text-white">Add Emp</Link></li>
      <li><Link to="/" class="text-white">Show All Emp</Link></li>
      <li><Link to="/ShowUpdateEmpPage" class="text-white">Update Emp </Link></li>
      <li><Link to="/ShowDeleteEmpPage" class="text-white">Delete Emp </Link></li>
      </div>
      <hr/>
      <Route path="/" component={ViewEmployee}></Route>
      <Route path="/ShowAllEmpPage" component={ViewEmployee}></Route>
      <Route path="/ShowAddEmpPage" component={AddEmployee}></Route>
      <Route path="/ShowUpdateEmpPage/:id" component={UpdateEmployee }></Route>
      <Route path="/ShowDeleteEmpPage/:id" component={DeleteEmployee}></Route></Router>
      <div class="p-5 mb-2 bg-secondary"></div></div>)
    }

export default App;
