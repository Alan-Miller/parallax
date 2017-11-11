import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="box one">
          <span className="text one">TEXT ONE</span>
          <span className="text two">TEXT TWO</span>
          <span className="text thr">TEXT THR</span>
        </div>
        <div className="box two">
          <span className="text one">TEXT ONE</span>
          <span className="text two">TEXT TWO</span>
          <span className="text thr">TEXT THR</span>
        </div>
        <div className="box thr">
          <span className="text one">TEXT ONE</span>
          <span className="text two">TEXT TWO</span>
          <span className="text thr">TEXT THR</span>
        </div>
      </div>
    );
  }
}

export default App;
