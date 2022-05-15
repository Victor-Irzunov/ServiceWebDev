import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
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
						sizes="(max-width: 1920px) 100vw, 1920px"
						srcSet={`
						${require('./image/slider-1-1,w_310.webp')} 310w, 
						${require('./image/slider-1-1,w_832.webp')} 832w, 
						${require('./image/slider-1-1,w_1213.webp')} 1213w, 
						${require('./image/slider-1-1,w_1526.webp')} 1526w, 
						${require('./image/slider-1-1,w_1882.webp')} 1882w, 
						${require('./image/slider-1-1,w_1920.webp')} 1920w, 
						`}
						src={`${require("./image/slider-1-1,w_1920.webp")} 1920w`}
						alt='Разработка сайтов Картинка 1 слайдера адаптация экранов устройств'
						title='Картинка 1 слайдера'
						className='slider-img1' />
				</picture>
			</div>
			<div>
				<picture>
					<img
						sizes="(max-width: 1920px) 100vw, 1920px"
						srcSet={`
						${require('./image/slider-2-2,w_310.webp')} 310w, 
						${require('./image/slider-2-2,w_879.webp')} 879w, 
						${require('./image/slider-2-2,w_1308.webp')} 1308w, 
						${require('./image/slider-2-2,w_1700.webp')} 1700w, 
						${require('./image/slider-2-2,w_1920.webp')} 1920w, 
						`}
						src={`${require("./image/slider-2-2,w_1920.webp")} 1920w`}
						alt='Разработка сайтов Картинка 2 слайдера адаптация экранов устройств'
						title='Картинка 2 слайдера'
					/>
				</picture>
			</div>
			<div>
				<picture>
					<img
						loading="lazy"
						sizes="(max-width: 1530px) 100vw, 1530px"
						srcSet={`
						${require('./image/slider-3-3,w_310.webp')} 310w, 
						${require('./image/slider-3-3,w_519.webp')} 519w, 
						${require('./image/slider-3-3,w_683.webp')} 683w, 
						${require('./image/slider-3-3,w_848.webp')} 848w, 
						${require('./image/slider-3-3,w_1067.webp')} 1067w, 
						${require('./image/slider-3-3,w_1530.webp')} 1530w, 
						`}
						src={`${require("./image/slider-3-3,w_1530.webp")} 1530w`}
						alt='Разработка сайтов Картинка 3 слайдера адаптация экранов устройств'
						title='Картинка 3 слайдера'
						className='slider-img3'
					/>
				</picture>
			</div>
			<div>
				<picture>
					<img
						sizes="(max-width: 1920px) 100vw, 1920px"
						srcSet={`
						${require('./image/slider-4-4,w_330.webp')} 330w, 
						${require('./image/slider-4-4,w_688.webp')} 688w, 
						${require('./image/slider-4-4,w_983.webp')} 983w, 
						${require('./image/slider-4-4,w_1217.webp')} 1217w, 
						${require('./image/slider-4-4,w_1482.webp')} 1482w, 
						${require('./image/slider-4-4,w_1796.webp')} 1796w, 
						${require('./image/slider-4-4,w_1920.webp')} 1920w, 
						`}
						src={`${require("./image/slider-4-4,w_1920.webp")} 1920w`}
						alt='Разработка сайтов Картинка 4 слайдера адаптация экранов устройств'
						title='Картинка 4 слайдера'
						className='slider-img4'
					/>
				</picture>
			</div>

		</Carousel>
	)
}

export default Slider