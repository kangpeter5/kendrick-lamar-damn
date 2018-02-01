import React, { Component } from 'react';
import './footer.css';

class Footer extends Component {

	scrollUp() {
		var doc = document.documentElement;
		var top = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);

		if(top > 0) {
			window.scrollTo(0, top)
			setTimeout(this.scrollUp, 10)
		}
	}

	render() {
	    return (
	    	<footer>
	    		<p>&copy; <a href="http://www.petekang.com/" target="blank">Pete Kang</a> 2017</p>
			</footer>
	    );
	}
}

export default Footer;
