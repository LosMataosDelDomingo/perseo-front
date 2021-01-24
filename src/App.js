import './App.css';
import { Route, Switch } from 'react-router-dom'
import { useRoutes, A } from 'hookrouter'

import Link from '@material-ui/core/Link'

import routes from './Routes/Routes'

import Signup from './components/signup/Signup'
import Login from './components/login/Login'
import Navbar from './components/navbar/Navbar'
import Landing from './components/landing/Landing'

function App() {
  const routeResult = useRoutes(routes)
  return (
    <div className="App">
      <Navbar />
      {routeResult} 
    </div>
  );
}

export default App;
