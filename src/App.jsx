import React, { Component } from 'react';
import './App.css';
import Home from "./components/Home";


class App extends Component {
  render() {
    return (
        <div className="container-fluid">
          <Home />
        </div>
    );
  }
}

export default App;
