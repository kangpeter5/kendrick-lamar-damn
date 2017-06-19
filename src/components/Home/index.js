import React, { Component } from 'react';
import {Grid} from 'react-bootstrap/lib';
import Header from '../Header';
import Footer from '../Footer';
import Albums from '../Albums';
// import About from '../About';
import './home.css';

class Home extends Component {

  render() {

    return (
		<Grid className="fluid">
    		<Header />
    		<Albums />
    		<Footer />
		</Grid>
    );
  }
}

export default Home;