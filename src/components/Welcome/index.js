import React, { Component } from 'react';
import FrontPage from '../../../public/js/frontPage.js';
import './welcome.css';

class Welcome extends Component {

  render() {

    return (
      <div className="wrap">
        <div className="bg"></div>
        <div className="image-wrap">
          <img className="top-image" src="http://i.imgur.com/pbFaZu6.png" alt="#" />
          <a href="/home"><h1>damn.</h1></a>
        </div>
        <script>FrontPage</script>
      </div>
    );
  }
}

export default Welcome;