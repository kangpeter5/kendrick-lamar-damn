import React, { Component } from 'react';
import Header from '../Header';
import Footer from '../Footer';
import './home.css';

class Home extends Component {

  render() {

    return (
    	<div>
    		<Header />
    		<h2>Hello</h2>
    		<Footer />
    	</div>
    );
  }
}

export default Home;