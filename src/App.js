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
import Dogs from './Dogs';
import OneDog from './OneDog';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // catList: [
      //   'Oakley',
      //   'Mila',
      //   'Whisper',
      //   'Neo'
      // ],
      catToys: {
        'Oakley': [
          'string',
          'bookmarks',
          'ice',
          'daddy/s face'
        ],
        'Milla': [
          'drool',
          'hammocks'
        ],
        'Whisper': [
          'no toyzz'
        ],
        'Neo': [
          'blood',
          'sweat',
          'tears'
        ]
      },
      dogs: {
        'Skyler': {
          'owner': 'Evan',
          'toys': [
            'tennis balls',
            'shoes'
          ]
        },
        'Leroy': {
          'owner': 'Ian',
          'toys': [
            'squeeky toy',
            'love',
            'hugs'
          ]
        },
        'Ladybird': {
          'owner': 'Hank',
          'toys': [
            'martinis',
            'self-loathing'
          ] 
        },
        'Judge': {
          'owner': 'Clare',
          'toys': []
        }
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
          <Route path="/cats/:catName" render={(props) => {
            return <OneCat toys={this.state.catToys} {...props} />
          }} />
          <Route path="/dogs" render={(props) => {
            return (<Dogs dogList={Object.keys(this.state.dogs)} {...props} />);
          }} />

          <Route path="/dogs/:dogName" render={(props) => {
            return (<OneDog dogInfo={this.state.dogs} {...props} />);
          }} />
      </div>
      </Router>
    );
  }
}
      

export default App;