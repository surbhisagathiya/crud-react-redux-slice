import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <nav className="navbar navbar-expand-lg bg-dark">
          <Link className="navbar-brand" to="#">
            Navbar
          </Link>
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to="#">tutorial</Link>
            </li>
            <li className="nav-item">
              <Link to="#">Add</Link>
            </li>
          </div>
        </nav>
        {/* <div className="container mt-3">
          <Switch>
            <Route exact path="#" />
          </Switch>
        </div> */}
      </Router>
    );
  }
}

export default App;
