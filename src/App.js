import logo from './logo.svg';
import './App.css';
import { Header } from "./components/Header"
import { Access } from "./components/Access"
import Signup from './components/signup/Signup'
import {Profile} from "components/Profile"
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/1" component={Signup} />
          <Route path="/2" component={Access} />
          <Route path="/" component={Profile} />
        </Switch>
        {/* <Signup /> */}
      </div>
    </Router>
  );
}

export default App;
