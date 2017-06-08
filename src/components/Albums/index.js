import React, { Component } from 'react';
import { Row, Col, Button } from 'react-bootstrap/lib';
import './album.css';

class Albums extends Component {

  render() {
    return (
		<div className="album">
			<Row className="album-section">
				<Col xs={12} md={6}>
					<div className="album-desc">
						<h3>Section.80</h3>
						<p>Section.80 is the debut studio album by American rapper Kendrick Lamar. It was released on July 2, 2011, by Top Dawg Entertainment. The album features guest appearances from GLC, Colin Munroe, Ashtrobot, BJ the Chicago Kid, Schoolboy Q, Ab-Soul and vocals from late singer-songwriter Alori Joh. The production was mainly handled by Top Dawg in-house producers from production group Digi+Phonics, along with THC, Tommy Black, Wyldfyer, Terrace Martin and J. Cole. The concept album features lyrical themes delivered by Lamar such as the 1980s crack epidemic, racism and medication tolerance. The album's lead single, "HiiiPoWeR" was released on April 12, 2011.</p>
						<Button href="http://pitchfork.com/reviews/albums/15653-section80/">Pitchfork</Button>
						<Button href="http://www.xxlmag.com/news/2017/04/kendrick-lamars-section-80-certified-gold/">XXL</Button>
					</div>
				</Col>
				<Col xs={12} md={6}>
					<iframe className="album-sp" src="https://open.spotify.com/embed/album/13WjgUEEAQp0d9JqojlWp1" frameBorder="0" allowTransparency="true"></iframe>
				</Col>
			</Row>
			<Row className="album-section">
				<Col xs={12} md={6}>
					<iframe className="album-yt" src="https://www.youtube.com/embed/GF8aaTu2kg0?list=PLqZcp8_6M275I4Cu0yreysTw9R9ZyZNGr" frameBorder="0" allowFullScreen></iframe>
				</Col>
				<Col xs={12} md={6}>
					<div className="album-desc">
						<h3>Good Kid, M.A.A.D City</h3>
						<p>The second studio album by KDot debuted at number two on the Billboard 200 chart, selling 242,000 copies in its first week – earning the highest first-week hip hop album sales of 2012 from a male artist, along with the best-selling debut from a male artist of the year. It became Lamar's first album to enter the UK Albums Chart, peaking at number 16, and entering the UK R&B Albums Chart at number two. The album was also named to many end-of-the-year lists, often topping them. It was later certified Platinum by the Recording Industry Association of America (RIAA) in August 2013. By March 2015, the album had sold 1,400,000 copies domestically, according to Nielsen SoundScan.</p>
						<Button href="http://pitchfork.com/reviews/albums/17253-good-kid-maad-city/">Pitchfork</Button>
						<Button href="http://www.complex.com/music/2012/10/the-making-of-kendrick-lamars-good-kid-maad-city/before-the-album">Complex</Button>
					</div>
				</Col>
			</Row>

			<Row className="album-section">
				<Col xs={12} md={6}>
					<div className="album-desc">
						<h3>To Pimp a Butterfly</h3>
						<p>To Pimp a Butterfly is the third studio album by King Kendrick. It was released on March 15, 2015, by Top Dawg Entertainment, Aftermath Entertainment and Interscope Records. The album incorporates elements of free jazz, funk, soul, spoken word, and the avant-garde and explores a variety of political and personal themes concerning African-American culture, racial inequality, depression, and institutional discrimination. It debuted atop the Billboard 200 and received widespread acclaim from critics, who praised its musical scope and the social relevance of Lamar's lyrics. It was ranked as the best album of 2015 by many publications, including Rolling Stone, Billboard and Pitchfork. It was nominated for Album of the Year and won Best Rap Album at the 58th Grammy Awards.
						<Button className="reference-link" href="https://en.wikipedia.org/wiki/Damn_(Kendrick_Lamar_album)">Reference</Button></p>
						<Button href="http://pitchfork.com/reviews/albums/20390-to-pimp-a-butterfly/">Pitchfork</Button>
						<Button href="http://www.xxlmag.com/news/2017/01/kendrick-lamars-to-pimp-a-butterfly-archived-harvard-library/">XXL</Button>
					</div>
				</Col>
				<Col xs={12} md={6}>
					<iframe className="album-sp" src="https://open.spotify.com/embed/album/7ycBtnsMtyVbbwTfJwRjSP" frameBorder="0" allowTransparency="true"></iframe>
				</Col>
			</Row>
			<Row className="album-section">
				<Col xs={12} md={6}>
					<iframe className="album-yt" src="https://www.youtube.com/embed/NLZRYQMLDW4?list=PLxKHVMqMZqUTMHeEmiAn8uylx3W_u8KI5" frameBorder="0" allowFullScreen></iframe>
				</Col>
				<Col xs={12} md={6}>
					<div className="album-desc">
						<h3>Damn</h3>
						<p>Damn received widespread acclaim from critics. At Metacritic, which assigns a normalized rating out of 100 to reviews from mainstream publications, the album received an average score of 96, based on 37 reviews. Andy Kellman of AllMusic stated that "It contains some of Lamar's best writing and performances, revealing his evolving complexity and versatility as a soul-baring lyricist and dynamic rapper." Writing for The A.V. Club, Evan Rytlewski concluded, "Lamar trusts every idea to stand on its own. When you're making art this substantial, vital, and virtuosic, there's no need to wrap a tidy bow around it." In his review, Greg Kot of Chicago Tribute states, "Damn. strips down the rhythms to their essence, flavored with the occasional cameo (notably Rihanna and U2). Lamar's voice does most of the heavy lifting, playing multiple roles and characters. His supple singing complements a variety of rap tones and textures."
						<Button className="reference-link" href="https://en.wikipedia.org/wiki/Damn_(Kendrick_Lamar_album)">Reference</Button></p>
						<Button href="http://pitchfork.com/reviews/albums/23147-damn/">Pitchfork</Button>
						<Button href="http://www.xxlmag.com/rap-music/reviews/2017/04/kendrick-lamar-damn-album-review/">XXL</Button>
					</div>
				</Col>
			</Row>
		</div>
    );
  }
}

export default Albums;