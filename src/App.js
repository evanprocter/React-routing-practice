import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

import {                    // three important components
  BrowserRouter as Router,  // watches for changes to URL
  Route,                    // renders components based on the specific URL
 // Link                      // changes the URL so the Router sees it
} from 'react-router-dom';

import Home from './Home';
import About from './About';
import Cats from './Cats';
import OneCat from './OneCat';
import NavBar from './NavBar';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      catList: [
        'Oakley',
        'Mila',
        'Whisper',
        'Neo'
      ],
      catToys: {
        'Oakley': [
          'string',
          'bookmarks',
          'ice',
          'daddy/s face'
        ],
        'Milla': [
          'drool'
        ],
        'Whisper': [
          'no toyzz'
        ],
      }
    };
  };
  render() {
    return (
      <Router>
       <div>
          <NavBar />
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/cats" render={(props) => {
            return <Cats catList={Object.keys(this.state.catToys)} {...props} />
          }} />
          <Route path="/Cats/:catName" render={(props) => {
            return <OneCat toys={this.state.catToys} {...props} />
          }} />
      </div>
      </Router>
    );
  }
}
      

export default App;
