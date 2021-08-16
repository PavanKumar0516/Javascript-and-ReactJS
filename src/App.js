//import logo from './logo.svg';
import './App.css';

function App() {
  var o=
  {
        set a(value){
          this.val=value
        },
        get a(){
          return this.val;
        }
  }
  o.a=80;
 // console.log(" o.a ="+o.a);
  if(o.a==80){
    o.a=o.a+20;
  }
  return (
    <div className="App">  
    Welcome   App  Vaishali  
    <h2 data-testid="compId"> Janmashtami</h2>
    </div>
  );
}

export default App;
