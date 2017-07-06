import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap/lib';
import './about.css';

class About extends Component {
  render() {
    return (
    	<Grid className="about" id="aboutMe">
            <h2>Kendrick Lamar</h2>
    		<Row className="is-flex about-section">
    			<Col md={6} mdPush={6}>
    				<div className="about-image">
			          <img className="kdot-img" src="http://i.imgur.com/2iO4peC.jpg" alt="#" />
			        </div>
    			</Col>
    			<Col md={6} mdPull={6}>
    				<div className="about-desc">
						<p><span className="name-change">Kendrick Lamar Duckworth</span> (born June 17, 1987) is an American rapper and songwriter. Born and raised in Compton, California, he embarked on his musical career as a teenager under the stage name K-Dot, releasing a mixtape that garnered local attention and led to his signing with indie record label Top Dawg Entertainment (TDE). He began to gain recognition in 2010, after his first retail release, Overly Dedicated.
							<br />
							<br />
							The following year, Lamar independently released his first studio album, <i>Section.80</i>, which included his debut single, "HiiiPoWeR". His major label debut album, <i>good kid, m.A.A.d city</i>, was released in 2012 by TDE, Aftermath and Interscope Records to critical success. It debuted at #2 on the US Billboard 200 chart and was later certified platinum by the Recording Industry Association of America (RIAA). Lamar won his first Grammy Award for "i", the lead single from his critically acclaimed third album To <i>Pimp a Butterfly</i> (2015). In 2016, Lamar released <i>Untitled Unmastered</i>, a collection of unreleased demos that originated during the recording sessions for Butterfly. He released his fourth album <i>Damn</i> in 2017; its lead single "Humble" topped the US Billboard Hot 100 chart.
							<br />
							<br />
						Lamar has received a number of accolades over the course of his career, including seven Grammy Awards. Time named Lamar one of the 100 most influential people in the world in 2016.</p>
					</div>
    			</Col>
    		</Row>
            <Row className="is-flex about-section">
                <Col md={12}>
                    <div className="scroll-btn">
                        <a href="#albumTop"><span></span>Scroll</a>
                    </div>
                </Col>
            </Row>
    	</Grid>	
    );
  }
}

export default About;