import React, { Component } from 'react';
import './App.css';
import Main from "./pages/Main";
import Nav from "./components/Nav";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Nav />
          <Switch>
            <Route exact path="/" component={Main}></Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
