import './App.css';
import React from "react";
//import ShowAllEmpComp from './Component/ShowAllEmpComp';
//import {​​​BrowserRouter as Router,Route,Link,NavLink}​​​ from "react-router-dom";
import UseEffectDemo from './Component/UseEffectDemo';
import CComponent from './Component/CComponenet';
//function App() {
  export const UserContext=React.createContext();
  export const UserChannel=React.createContext();
const App=()=>{
  return (<div>

   <UserContext.Provider value={'Pavankumar'}>
     <UserChannel.Provider value="Capgemini">
       <CComponent/>
     </UserChannel.Provider>
   </UserContext.Provider>
      
    </div>
  );}
//}

export default App;
