import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { Container } from 'bloomer';
import HomePage from './components/HomePage';
import NamePage from './components/NamePage';
import BookPage from './components/BookPage';
import 'bulma/css/bulma.css';

class App extends Component {
  render() {
    return (
      <Router>
        <Container>
          <div>
            <Link to="/">Home</Link> | <Link to="/name">Name</Link>
          </div>
          <Switch>
            <Route exact path="/" component={HomePage}/>
            <Route exact path="/name" component={NamePage}/>
            <Route path="/name/:list_name_encoded" component={BookPage}/>
          </Switch>
        </Container>
      </Router>
    );
  }
}

export default App;
