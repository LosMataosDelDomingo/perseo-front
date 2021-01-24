import logo from './logo.svg';
import './App.css';

import Link from '@material-ui/core/Link'

import Signup from './components/signup/Signup'
import Login from './components/login/Login'
import Navbar from './components/navbar/Navbar'


function App() {
  return (
    <div className="App">
      <Navbar />
      
      <Signup />
      <Login />

    </div>
  );
}

export default App;
