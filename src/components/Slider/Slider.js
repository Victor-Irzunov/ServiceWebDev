import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
// import sliderImg1 from './image/1.png'
import sliderImg1 from './image/slider-1.webp'
import sliderImg2 from './image/slider-2.webp'
import sliderImg3 from './image/slider-3.webp'
import sliderImg4 from './image/slider-4-min.webp'
import './Slider.css'


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
				<picture>
					<img
						sizes="(max-width: 1400px) 100vw, 1400px"
						srcSet={`
						${require('./image/slider-1,w_200.webp')} 200w, 
						${require('./image/slider-1,w_739.webp')} 739w, 
						${require('./image/slider-1,w_1161.webp')} 1161w, 
						${require('./image/slider-1,w_1400.webp')} 1400w, 
						`}
						src={`${require("./image/slider-1,w_1400.webp")} 1400w`}
						alt='Разработка сайтов Картинка 1 слайдера'
						title='Картинка 1 слайдера'
						className='slider-img1' />
				</picture>
			</div>
			<div>
				<picture>
					<img
						sizes="(max-width: 1400px) 100vw, 1400px"
						srcSet={`
						${require('./image/slider-2,w_200.webp')} 200w, 
						${require('./image/slider-2,w_794.webp')} 794w, 
						${require('./image/slider-2,w_1218.webp')} 1218w, 
						${require('./image/slider-2,w_1400.webp')} 1400w, 
						`}
						src={`${require("./image/slider-2,w_1400.webp")} 1400w`}
						alt='Разработка сайтов Картинка 2 слайдера'
						title='Картинка 2 слайдера'
					/>
				</picture>
			</div>
			<div>
				<picture>
					<img
						sizes="(max-width: 1400px) 100vw, 1400px"
						srcSet={`
						${require('./image/slider-3,w_200.webp')} 200w, 
						${require('./image/slider-3,w_418.webp')} 418w, 
						${require('./image/slider-3,w_637.webp')} 637w, 
						${require('./image/slider-3,w_827.webp')} 827w, 
						${require('./image/slider-3,w_999.webp')} 999w, 
						${require('./image/slider-3,w_1186.webp')} 1186w, 
						${require('./image/slider-3,w_1392.webp')} 1392w, 
						${require('./image/slider-3,w_1400.webp')} 1400w, 
						`}
						src={`${require("./image/slider-3,w_1400.webp")} 1400w`}
						alt='Разработка сайтов Картинка 3 слайдера'
						title='Картинка 3 слайдера'
						className='slider-img3'
					/>
				</picture>
			</div>
			<div>
				<picture>
					<img
						sizes="(max-width: 1400px) 100vw, 1400px"
						srcSet={`
						${require('./image/slider-4,w_200.webp')} 200w, 
						${require('./image/slider-4,w_638.webp')} 638w, 
						${require('./image/slider-4,w_941.webp')} 941w, 
						${require('./image/slider-4,w_1216.webp')} 1216w, 
						${require('./image/slider-4,w_1400.webp')} 1400w, 
						`}
						src={`${require("./image/slider-4,w_1400.webp")} 1400w`}
						alt='Разработка сайтов Картинка 4 слайдера'
						title='Картинка 4 слайдера'
						className='slider-img4'
					/>
				</picture>
			</div>

		</Carousel>
	)
}

export default Slider