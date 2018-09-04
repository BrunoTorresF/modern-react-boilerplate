import React, { Component } from 'react';
//RHL only for front end development
import { hot } from 'react-hot-loader';

class App extends Component {
  render() {
    return <div>Put your phone away</div>;
  }
}
//hot export works with RHL. Remove when starting fullstack integration
export default hot(module)(App);
