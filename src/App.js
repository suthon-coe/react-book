import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import HomePage from './components/HomePage';
import NamePage from './components/NamePage';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <div>
            <Link to="/">Home</Link> | <Link to="/name">Name</Link>
          </div>
          <div>
            <Route exact path="/" component={HomePage}/>
            <Route path="/name" component={NamePage}/>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
