import React, { Component } from 'react';
import Header from '../Header';
import Footer from '../Footer';
import Albums from '../Albums';
import './home.css';

class Home extends Component {

  render() {

    return (
    	<div className="container">
    		<Header />
    		<Albums />
    		<Footer />
    	</div>
    );
  }
}

export default Home;