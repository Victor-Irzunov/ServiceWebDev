import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import sliderImg1 from './image/1.webp'
import sliderImg2 from './image/2.webp'
import sliderImg3 from './image/3.webp'


const Slider = () => {


	return (
		<Carousel
			autoPlay={true}
			infiniteLoop={true}
			thumbWidth={50}
			width={'100%'}
			showStatus={false}
			showThumbs={false}
		>
			<div>
				<img src={sliderImg1} />
				<p className="legend">Legend 1</p>
			</div>
			<div>
				<img src={sliderImg2} />
				<p className="legend">Legend 2</p>
			</div>
			<div>
				<img src={sliderImg3} />
				<p className="legend">Legend 3</p>
			</div>
			{/* <div>
				<img src={sliderImg4} />
				<p className="legend">Legend 4</p>
			</div> */}
		</Carousel>
	)
}

export default Slider