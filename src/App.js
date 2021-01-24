import logo from './logo.svg';
import './App.css';
import { Header } from "./components/Header"

import Signup from './components/signup/Signup'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/" component={Signup} />
        </Switch>
        {/* <Signup /> */}
      </div>
    </Router>
  );
}

export default App;
