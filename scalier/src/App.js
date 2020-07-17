import React from 'react';
import './App.css';
import InitialPage from './components/InitialPage';
import Home from './components/Home';
import FormPost from './components/FormPost';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';

function PrivateRoute(props) {
  const authorization = localStorage.getItem('token');

  if (!authorization) return <Redirect to="/" />;
  return <Route {...props} />;
}

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={InitialPage}></Route>
          <PrivateRoute exact path="/home" component={Home}></PrivateRoute>
          <PrivateRoute
            exact
            path="/users/create"
            component={Home}
          ></PrivateRoute>
          <Route exact path="/posts/create" component={FormPost}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
