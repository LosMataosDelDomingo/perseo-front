import './App.css';
import { Route, Switch } from 'react-router-dom'
import { useRoutes, A } from 'hookrouter'

import Link from '@material-ui/core/Link'

import Routes from './Routes/Routes'

import Signup from './components/signup/Signup'
import Login from './components/login/Login'
import Navbar from './components/navbar/Navbar'
import Landing from './components/landing/Landing'
import Footer from './components/footer/Footer'

function App() {
  const routeResult = useRoutes(Routes)
  return (
    <div className="App">
      <Navbar />
      <Footer />
    </div>
  );
}

export default App;
