import './App.css';
import Header from './components/Header/Header';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import NoMatch from './components/NoMatch/NoMatch';
import Login from './components/Login/Login';
import Destination from './components/Destination/Destination';
import Blog from './Blog/Blog';

function App() {
  return (
    <Router>
      
      <Switch>
        <Route path="/home" >
            <Header />
        </Route>
        <Route path="/login" >
            <Login />
        </Route>
        <Route path="/blog" >
            <Blog />
        </Route>
        <Route path="/destination/:place" >
            <Destination />
        </Route>
        <Route exact path="/" >
            <Header />
        </Route>
        <Route path="*">
          <NoMatch />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
