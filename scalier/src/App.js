import React from 'react';
import './App.css';
import InitialPage from './components/InitialPage';
import InitialForms from './components/InitialForms';
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
        </Switch>
      </Router>
    </div>
  );
}

export default App;
