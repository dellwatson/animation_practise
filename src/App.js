import React, { Component } from 'react';
import Trails2 from './components/trails/Trails'
import TestKeyframes from './components/keyframes/TestKeyframes'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <Trails2 />
          <TestKeyframes />
        </div>
      </div>
    );
  }
}

export default App;
