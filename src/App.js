import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="parallax-container">
          <div className="top foreground layer">Top Foreground</div>
          <div className="top midground layer">Top Midground</div>
          <div className="top background layer">Top Background</div>

          <div className="middle foreground layer">Middle Foreground</div>
          <div className="middle midground layer">Middle Midground</div>
          <div className="middle background layer">Middle Background</div>

          <div className="bottom foreground layer">Bottom Foreground</div>
          <div className="bottom midground layer">Bottom Midground</div>
          <div className="bottom background layer">Bottom Background</div>
        </div>
      </div>
    );
  }
}

export default App;
