import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Register from './components/Register';
import Footer from './components/Footer';
import Header from './components/Header';
function App() {

  
  return (
    <div className="App">
      <header><Header/></header>
                 <body><Register/></body>
                 <footer ><Footer/></footer>
    </div>
  );
}

export default App;
