import React, { Component } from 'react';
// import Button from 'react-bootstrap/lib/Button';
import './header.css';

class Header extends Component {

  render() {
    return (
		<nav>
			<brandLogo>
				<a className="home-btn" href="/home"><h2>/home</h2></a>
			</brandLogo>
			<ul>
				<li>
					<a className="reg-btn" href="/about"><h4>/about</h4></a>
				</li>
				<li>
					<a className="reg-btn" href="/albums"><h4>/album</h4></a>
					<ul>
						<li>
							<a className="reg-btn" href="/albums"><h5>/album</h5></a>
						</li>
					</ul>
				</li>
			</ul>
		</nav>
    );
  }
}

export default Header;