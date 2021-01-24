import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
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
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route path="/" component={Landing} />
          {/* <Route path="/" component={Landing} /> */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
