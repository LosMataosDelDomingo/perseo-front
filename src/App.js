// import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { useRoutes, A } from 'hookrouter'

import routes from './Routes/Routes'

import Signup from './components/signup/Signup'
import Login from './components/login/Login'
import Navbar from './components/navbar/Navbar'
import Landing from './components/landing/Landing'
import { Profile } from './components/Profile';
import {Header} from "./components/navbar"

function App() {
  const routeResult = useRoutes(routes)
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route path="/" component={Landing} />
          <Route path="/profile" component={Profile} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;