import React, { Component } from 'react';
//RHL only for front end development
import { hot } from 'react-hot-loader';

class App extends Component {
  render() {
    return <div>I to the Modern React Boilerplate</div>;
  }
}
//hot export works with RHL. Remove when starting fullstack integration
export default hot(module)(App);
