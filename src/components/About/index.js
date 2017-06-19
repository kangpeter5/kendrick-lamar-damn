import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap/lib';
import './about.css';

class About extends Component {

  render() {
    return (
    	<Grid className="about">
    		<Row className="about-section">
    			<h2>About</h2>
    			<Col xs={12} md={6}>
    				<div className="about-desc">
						<p>Kendrick Lamar Duckworth (born June 17, 1987)[2] is an American rapper and songwriter. Born and raised in Compton, California, he embarked on his musical career as a teenager under the stage name K-Dot, releasing a mixtape that garnered local attention and led to his signing with indie record label Top Dawg Entertainment (TDE). He began to gain recognition in 2010, after his first retail release, Overly Dedicated. The following year, Lamar independently released his first studio album, Section.80, which included his debut single, "HiiiPoWeR". By that time, he had amassed a large Internet following and collaborated with several prominent artists in the hip hop industry, including The Game, Busta Rhymes and Snoop Dogg.
							<br />
							<br />
						His major label debut album, good kid, m.A.A.d city, was released in 2012 by TDE, Aftermath and Interscope Records to critical success. It debuted at #2 on the US Billboard 200 chart and was later certified platinum by the Recording Industry Association of America (RIAA). The record contained the top 40 hit singles "Swimming Pools (Drank)", "Bitch, Don't Kill My Vibe" and "Poetic Justice". Lamar won his first Grammy Award for "i", the lead single from his critically acclaimed third album To Pimp a Butterfly (2015). The album drew on free jazz, funk, soul, and spoken word, debuted atop the charts in the US and the UK, and won the Grammy Award for Best Rap Album at the 58th ceremony. In 2016, Lamar released Untitled Unmastered, a collection of unreleased demos that originated during the recording sessions for Butterfly. He released his fourth album Damn in 2017; its lead single "Humble" topped the US Billboard Hot 100 chart.
							<br />
							<br />
						Lamar has received a number of accolades over the course of his career, including seven Grammy Awards. In early 2013, MTV named Lamar the number one "Hottest MC in the Game", on their annual list.[3] Time named Lamar one of the 100 most influential people in the world in 2016.[4] Aside from his solo career, Lamar is also known as a member of the West Coast hip hop supergroup Black Hippy, alongside his TDE label-mates and fellow South Los Angeles-based rappers Ab-Soul, Jay Rock and Schoolboy Q.</p>
						</div>
    			</Col>
    			<Col xs={12} md={6}>
    				<div className="image-wrap">
			          <img className="about-image" src="http://runthetrap.com/wp-content/uploads/2017/03/kendrick.jpg" alt="#" />
			        </div>
    			</Col>
    		</Row>
    	</Grid>
    	
    );
  }
}

export default About;