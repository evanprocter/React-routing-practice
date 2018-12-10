import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import {                    // three important components
  BrowserRouter as Router,  // watches for changes to URL
  Route,                    // renders components based on the specific URL
  Link                      // changes the URL so the Router sees it
} from 'react-router-dom';

import Home from './Home';
import About from './About';
import Cats from './Cats';

class App extends Component {
  render() {
    return (
      <Router>
       <div className="App">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/cats">Cats</Link></li>
          </ul>
          <Route path="/" exact  component={Home} />
          <Route path="/about" component={About} />
          <Route path="/cats" component={Cats} />
      </div>
        </Router>
    );
  }
}
      

export default App;
