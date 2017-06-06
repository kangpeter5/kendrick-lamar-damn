import React, { Component } from 'react';
// import Button from 'react-bootstrap/lib/Button';
import './header.css';

class Header extends Component {

  render() {
    return (
		<nav>
			<div className="brandLogo">
				<a className="home-btn" href="/home"><h3>/home</h3></a>
			</div>
			<ul>
				<li>
					<a className="reg-btn" href="/about"><p>/about</p></a>
				</li>
				<li>
					<a className="reg-btn" href="/albums"><p>/album</p></a>
					<ul>
						<li>
							<a className="reg-btn" href="/albums"><p>/album</p></a>
						</li>
					</ul>
				</li>
			</ul>
		</nav>
    );
  }
}

export default Header;