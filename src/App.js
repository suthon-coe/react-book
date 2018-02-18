import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import HomePage from './components/HomePage';
import NamePage from './components/NamePage';
import BookPage from './components/BookPage';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <div>
            <Link to="/">Home</Link> | <Link to="/name">Name</Link>
          </div>
          <Switch>
            <Route exact path="/" component={HomePage}/>
            <Route exact path="/name" component={NamePage}/>
            <Route path="/name/:list_name_encoded" component={BookPage}/>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
