import React from 'react';
import './App.css';
import InitialPage from './components/InitialPage';
import Home from './components/Home';
import FormPost from './components/FormPost';
import Collection from './components/Collection';
import EditPost from './components/EditPost';
import DeletePost from './components/DeletePost';
import CommentPost from './components/CommentPost';
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
          <Route exact path="/posts/listPost" component={Collection}></Route>
          <Route exact path="/posts/edit/:id" component={EditPost}></Route>
          <Route exact path="/posts/destroy/:id" component={DeletePost}></Route>
          <Route exact path="/posts/show/:id" component={CommentPost}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
