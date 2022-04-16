import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import sliderImg1 from './image/slider-1.webp'
import sliderImg2 from './image/slider-2.webp'
import sliderImg3 from './image/slider-3.webp'


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
				<img src={sliderImg1} alt='Разработка сайтов Картинка 1 слайдера' title='Картинка 1 слайдера' />
				{/* <p className="legend">Legend 1</p> */}
			</div>
			<div>
				<img src={sliderImg2}  alt='Разработка сайтов Картинка 2 слайдера'  title='Картинка 2 слайдера'/>
				{/* <p className="legend">Legend 2</p> */}
			</div>
			<div>
				<img src={sliderImg3}  alt='Разработка сайтов Картинка 3 слайдера' title='Картинка 3 слайдера' />
				{/* <p className="legend">Legend 3</p> */}
			</div>
		</Carousel>
	)
}

export default Slider