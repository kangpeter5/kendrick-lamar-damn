import React, { Component } from 'react';
import FrontPage from '../../../public/js/frontPage.js';
import './welcome.css';

class Welcome extends Component {

  render() {

    return (
      <div className="wrap">
        <div className="bg"></div>
        <div className="image-wrap">
          <img className="top-image" src="https://s3-us-west-2.amazonaws.com/kendrickdamnproject/kendrick+lamar+damn/welcome-top.png" alt="#" />
          <a href="/home"><h1>damn.</h1></a>
        </div>
        // eslint-disable-next-line
        <script>FrontPage</script>
      </div>
    );
  }
}

export default Welcome;