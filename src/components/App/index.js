import React, { Component } from 'react';
import './app.css';

class App extends Component {

  render() {

    return (
      <div className="wrap">
        <div className="bg"></div>
        <div className="image-wrap">
          <img className="top-image" src="https://s3-us-west-2.amazonaws.com/kendrickdamnproject/kendrick+lamar+damn/welcome-top.png" alt="#" />
        <a href="/home"><h1>damn.</h1></a>
        </div>
      </div>
    );
  }
}

export default App;