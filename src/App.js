import React, { Component } from 'react';
import './App.css';
import Main from "./pages/Main";
import Character from "./pages/Character";
import Nav from "./components/Nav";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Nav />
          <Switch>
            <Route exact path="/" component={Main}></Route>
            <Route exact path="/character/:id" component={Character}></Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
