import React from 'react';
import './App.css';
import InitialPage from './components/InitialPage';
import Home from './components/Home';
import Registry from './pages/registry';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={InitialPage}></Route>
          <Route exact path="/home" component={Home}></Route>
          <Route exact path="/users/create" component={Home}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
