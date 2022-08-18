import React, { useCallback, useContext, useEffect, useRef, useState } from "react"

import * as Scroll from 'react-scroll';
import { Element, Events, scrollSpy } from 'react-scroll'



import Typed from 'typed.js';
import { ThemesContext } from "../../themes/themes";
import Slider from "../../components/Slider/Slider";
import Step from "../../components/step/Step";
import './MainPage.css'
import speed from './images/speed.png'
import seo from './images/seo.png'
import clip from './images/Clip.svg';
import screen from './images/Background.svg'
import { Link } from "react-router-dom";
import { ToTop } from "../../components/toTop/ToTop";
import Modal from '../../components/modal/Modal'
import discount from './images/discount.svg'
import consultation from './images/consultation.svg'
import support from './images/support.svg'
// import point from './images/point.svg'


let LinkScroll = Scroll.Link

const MainPage = props => {
	const { theme, dollar } = useContext(ThemesContext)
	const [firstBtn, setFirstBtn] = useState(true)
	const [secondBtn, setSecondBtn] = useState(false)
	const [thirdBtn, setThirdBtn] = useState(false)
	const [isModal, setIsModal] = useState(false)
	const [dataModal, setDataModal] = useState('')
	// const [styleClip, setStyleClip] = useState()
	const [isArrow, setIsArrow] = useState(false)
	const el = useRef(null)
	const typed = useRef(null)
	const clipRef = useRef()
	const clipRef11 = useRef()
	const lineRef = useRef()
	const mainBlock = useRef()
	const pricesDescrip = useRef()

	useEffect(() => {

		scrollSpy.update();

		const options = {
			strings: [
				'Разрабатываем:'
			],
			typeSpeed: 120, // Скорость печати
			startDelay: 500, // Задержка перед стартом анимации
			backSpeed: 50, // Скорость удаления
			loop: true
		}
		typed.current = new Typed(el.current, options)
		return () => {
			typed.current.destroy()


			Events.scrollEvent.remove('begin');
			Events.scrollEvent.remove('end');
		}
	}, [])

	const handleScrollMain = useCallback(() => {
		const maxScrollTop = window.innerHeight
		if (theme.isActive) {
			clipRef.current.style.opacity = 0.9 - window.pageYOffset / maxScrollTop
			lineRef.current.style.opacity = 1 - window.pageYOffset / maxScrollTop

			lineRef.current.style.transform = `translateY(-${window.pageYOffset / 8}px)`

		}
		clipRef11.current.style.opacity = 1 - window.pageYOffset / maxScrollTop
		clipRef11.current.style.transform = `translateY(-${window.pageYOffset / 8}px)`
		pricesDescrip.current.style.opacity = 1 - window.pageYOffset / maxScrollTop
		pricesDescrip.current.style.transform = `translateY(-${window.pageYOffset / 8}px)`

		if (window.pageYOffset > 5) {
			mainBlock.current.style.display = 'flex'
		}
	}, [theme.isActive])

	useEffect(() => {
		window.addEventListener("scroll", handleScrollMain)
		setTimeout(() => {
			setIsArrow(true)
		}, 2000)
		return () => window.removeEventListener("scroll", handleScrollMain)
	}, [theme.isActive, handleScrollMain])

	const clickScroll = () => {
		setTimeout(() => window.scrollBy({
			top: 700,
			left: 0,
			behavior: 'smooth',
		}), 150)
	}


	// function handleSetActive(to) {
	// 	console.log(to);
	// }




	return (
		<>
			{isModal && <Modal dataModal={dataModal} setIsModal={setIsModal} />}

			<main
				className="main"
				style={{
					background: theme.background,
					color: theme.textColor
				}}
			>
				<ToTop />

				{theme.isActive &&
					<div className="clip-box">
						<img
							src={clip}
							className='clip'
							alt="Разработать сайт фоновое изображение"
							title="Изображение фона"
							ref={clipRef}
						/>
					</div>
				}

				<div className={isArrow ? "arrow-down-box active" : "arrow-down-box"}
					onClick={() => clickScroll()}
					ref={pricesDescrip}
				>
					<span className="arrow-down-box-span">
						<h2 className="scale-up-center">Цены и описание</h2>
					</span>
					<div className="arrow-down scale-up-center">
						<span></span>
					</div>
				</div>

				<div className="container">

					<section className="main__title-slider" id="fon">
						{!theme.isActive &&
							<div className="fon-box">
								<div className="custom-shape">
									<svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
										<path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
									</svg>
								</div>
							</div>
						}
						<div className="main__title " ref={clipRef11}>


							<h1 className="scale-up-center" style={{ color: theme.textH2Main5 }} >

								<span
									ref={el}
									className='develop'
									style={{ color: theme.textH2Main5 }}
								/>

								<span className="h1-content">
									<LinkScroll
										className="land"
										style={{ color: theme.textH2Main4 }}


										activeClass="active"
										to="site"
										smooth={true}
										offset={-100}
										duration={1000}
									>
										Сайты
									</LinkScroll>
								</span>

								<span className="h1-content">
									<LinkScroll
										className="land"
										style={{ color: theme.textH2Main5 }}

										activeClass="active"
										to="land"
										smooth={true}
										offset={-100}
										duration={1000}
									>
										Лендинги
									</LinkScroll>
								</span>

								<span className="h1-content">
									<LinkScroll
										className="land"
										style={{ color: theme.textH2Main4 }}
										activeClass="active"
										to="store"
										smooth={true}
										offset={-100}
										duration={1000}
									>
										Интернет магазины
									</LinkScroll>
								</span>
								<span className="h1-content">
									<LinkScroll
										className="land"
										style={{ color: theme.textH2Main5 }}
										activeClass="active"
										to="cor-app"
										smooth={true}
										offset={-100}
										duration={1000}
									>
										Корпоративные приложения
									</LinkScroll>
								</span>
							</h1>
						</div>
						<Slider />

						{theme.isActive ?
							<div className="main-line" ref={lineRef}>
								<div className="line-box scale-up-center">
									<span className="line-span">
										<span>
											<img src={discount} className='discount' alt='Сделать сайт цены снижены' title="Картинка скидки" />
										</span>
										Цены снижены
									</span>
								</div>
								<div className="line-box scale-up-center">
									<span className="line-span">
										<span>
											<img src={consultation} className='discount' alt='Сделать сайт цены снижены' title="Картинка скидки" />
										</span>
										Консультация
									</span>
								</div>
								<div className="line-box scale-up-center">
									<span className="line-span">
										<span>
											<img src={support} className='discount' alt='Сделать сайт цены снижены' title="Картинка скидки" />
										</span>
										Тех поддержка
									</span>
								</div>
							</div>
							:
							<></>
						}

					</section>



					<div className="main__block" ref={mainBlock}>
						<div className="main__box">

							<section>
								<article className="main__section2 box-428">
									<div className='flex-item section2__box1'>
										<div className='box1'>
											<h2>
												<Element
													name="land">
													<a
														href='https://ru.wikipedia.org/wiki/%D0%A6%D0%B5%D0%BB%D0%B5%D0%B2%D0%B0%D1%8F_%D1%81%D1%82%D1%80%D0%B0%D0%BD%D0%B8%D1%86%D0%B0'
														target='__blank'
														style={{ color: theme.textH2Main, }}
													>
														Лендинг
													</a>
												</Element>
											</h2>

											<img
												src={screen}
												style={{ filter: theme.filter }}
												className="box1__img"
												alt="Разработка лендингов экраны устройств"
												title="Экраны устройств"
												loading="lazy"
											/>

										</div>


										<div className="buttons">
											<span
												className={firstBtn ? "btn active" : "btn"}
												onClick={() => {
													setFirstBtn(true)
													setSecondBtn(false)
													setThirdBtn(false)
												}}
												style={{ background: theme.background, color: theme.textColor }}
											>
												A
											</span>
											<span
												className={secondBtn ? "btn active" : "btn"}
												onClick={() => {
													setFirstBtn(false)
													setSecondBtn(true)
													setThirdBtn(false)
												}}
												style={{ background: theme.background, color: theme.textColor }}
											>
												A
											</span>
											<span
												className={thirdBtn ? "btn active" : "btn"}
												onClick={() => {
													setFirstBtn(false)
													setSecondBtn(false)
													setThirdBtn(true)
												}}
												style={{ background: theme.background, color: theme.textColor }}
											>
												A
											</span>
										</div>
										<p
											style={(firstBtn && { fontSize: '1em' })
												|| (secondBtn && { fontSize: '1.25em' })
												|| (thirdBtn && { fontSize: '1.75em' })}
										>
											Это одностраничный сайт (или несколько страниц), нужен для того, чтобы зашедший на него клиент нашёл именно то, что он ищет и не отвлекался ни на что другое, и в результате сделал заказ или позвонил.

										</p>

										<span
											style={(firstBtn && { fontSize: '1em' })
												|| (secondBtn && { fontSize: '1.25em' })
												|| (thirdBtn && { fontSize: '1.75em' })}
											className='price'
										>
											Цена: от {Math.floor((dollar / 2) * 100)},00p
										</span>

										<a href="#/" className="cta order">
											<span
												style={{ color: theme.textColor }}
												onClick={() => {
													setDataModal('Лендинг')
													setIsModal(i => !i)
												}}
											>
												Заказать
											</span>
										</a>
									</div>

									<div className="flex-item section2__box2">
										<picture>
											<img
												loading="lazy"
												sizes="(max-width: 1400px) 100vw, 1400px"
												srcSet={`
															${require('./images/landing/land_l6mhxu_c_scale,w_311.webp')} 311w, 
															${require('./images/landing/land_l6mhxu_c_scale,w_411.webp')} 411w, 
															${require('./images/landing/land_l6mhxu_c_scale,w_504.webp')} 504w, 
															${require('./images/landing/land_l6mhxu_c_scale,w_624.webp')} 624w, 
															${require('./images/landing/land_l6mhxu_c_scale,w_689.webp')} 689w, 
															${require('./images/landing/land_l6mhxu_c_scale,w_753.webp')} 753w, 
															${require('./images/landing/land_l6mhxu_c_scale,w_827.webp')} 827w, 
															${require('./images/landing/land_l6mhxu_c_scale,w_898.webp')} 898w, 
															${require('./images/landing/land_l6mhxu_c_scale,w_959.webp')} 959w, 
															${require('./images/landing/land_l6mhxu_c_scale,w_1024.webp')} 1024w, 
															${require('./images/landing/land_l6mhxu_c_scale,w_1079.webp')} 1079w, 
															${require('./images/landing/land_l6mhxu_c_scale,w_1140.webp')} 1140w, 
															${require('./images/landing/land_l6mhxu_c_scale,w_1203.webp')} 1203w, 
															${require('./images/landing/land_l6mhxu_c_scale,w_1266.webp')} 1266w, 
															${require('./images/landing/land_l6mhxu_c_scale,w_1325.webp')} 1325w, 
															${require('./images/landing/land_l6mhxu_c_scale,w_1394.webp')} 1394w, 
															${require('./images/landing/land_l6mhxu_c_scale,w_1397.webp')} 1397w, 
															${require('./images/landing/land_l6mhxu_c_scale,w_1400.webp')} 1400w, 
															`}
												src={`${require("./images/landing/land_l6mhxu_c_scale,w_1400.webp")} 1400w`}
												alt='Разработка лендинга' title="Лендинг" />
										</picture>
									</div>
								</article>
							</section >


							<section>
								<article className="main__section3 box-428">
									<div className="flex-item section3__box1">
										<div className="box1">
											<h2>
												<Element
													name="site">
													<a
														href='https://ru.wikipedia.org/wiki/%D0%A1%D0%B0%D0%B9%D1%82'
														target='__blank'
														style={{ color: theme.textH2Main }}
													>
														Сайт
													</a>
												</Element>
											</h2>

											<img
												src={screen}
												style={{ filter: theme.filter }}
												className="box1__img"
												alt="Разработка сайтов экраны устройств"
												title="Экраны устройств"
												loading="lazy"
											/>

										</div>


										<div className="buttons">
											<span
												className={firstBtn ? "btn active" : "btn"}
												onClick={() => {
													setFirstBtn(true)
													setSecondBtn(false)
													setThirdBtn(false)
												}}
												style={{ background: theme.background, color: theme.textColor }}
											>
												A
											</span>
											<span
												className={secondBtn ? "btn active" : "btn"}
												onClick={() => {
													setFirstBtn(false)
													setSecondBtn(true)
													setThirdBtn(false)
												}}
												style={{ background: theme.background, color: theme.textColor }}
											>
												A
											</span>
											<span
												className={thirdBtn ? "btn active" : "btn"}
												onClick={() => {
													setFirstBtn(false)
													setSecondBtn(false)
													setThirdBtn(true)
												}}
												style={{ background: theme.background, color: theme.textColor }}
											>
												A
											</span>
										</div>
										<p
											style={(firstBtn && { fontSize: '1em' })
												|| (secondBtn && { fontSize: '1.25em' })
												|| (thirdBtn && { fontSize: '1.75em' })}
										>Обычно имеет много страниц с множеством товаров и услуг, предостовляющий подробную информацию о них, может содержать отдел статей, нужен для того, чтобы клиент увидел весь ассортимент или весь спектр услуг, которые вы хотите предложить.</p>
										<span
											style={(firstBtn && { fontSize: '1em' })
												|| (secondBtn && { fontSize: '1.25em' })
												|| (thirdBtn && { fontSize: '1.75em' })}
											className='price'
										>
											Цена: от {Math.floor(dollar * 100)},00p
										</span>
										<a href="#/" className="cta order">
											<span
												style={{ color: theme.textColor }}
												onClick={() => {
													setDataModal('Сайт')
													setIsModal(i => !i)
												}}
											>
												Заказать
											</span>
										</a>
									</div>

									<div className="flex-item section3__box2">
										<picture>
											<img
												loading="lazy"
												sizes="(max-width: 1400px) 100vw, 1400px"
												srcSet={`
															${require('./images/site/site_650_l8qw1i_c_scale,w_303.webp')} 303w, 
															${require('./images/site/site_650_l8qw1i_c_scale,w_375.webp')} 375w, 
															${require('./images/site/site_650_l8qw1i_c_scale,w_461.webp')} 461w, 
															${require('./images/site/site_650_l8qw1i_c_scale,w_533.webp')} 533w, 
															${require('./images/site/site_650_l8qw1i_c_scale,w_575.webp')} 575w, 
															${require('./images/site/site_650_l8qw1i_c_scale,w_617.webp')} 617w, 
															${require('./images/site/site_650_l8qw1i_c_scale,w_669.webp')} 669w, 
															${require('./images/site/site_650_l8qw1i_c_scale,w_726.webp')} 726w, 
															${require('./images/site/site_650_l8qw1i_c_scale,w_781.webp')} 781w, 
															${require('./images/site/site_650_l8qw1i_c_scale,w_843.webp')} 843w, 
															${require('./images/site/site_650_l8qw1i_c_scale,w_901.webp')} 901w, 
															${require('./images/site/site_650_l8qw1i_c_scale,w_964.webp')} 964w, 
															${require('./images/site/site_650_l8qw1i_c_scale,w_1085.webp')} 1085w, 
															${require('./images/site/site_650_l8qw1i_c_scale,w_1150.webp')} 1150w, 
															${require('./images/site/site_650_l8qw1i_c_scale,w_1313.webp')} 1313w, 
															${require('./images/site/site_650_l8qw1i_c_scale,w_1362.webp')} 1362w, 
															${require('./images/site/site_650_l8qw1i_c_scale,w_1398.webp')} 1398w, 
															${require('./images/site/site_650_l8qw1i_c_scale,w_1400.webp')} 1400w, 
															`}
												src={`${require("./images/site/site_650_l8qw1i_c_scale,w_1400.webp")} 1400w`}
												alt='Разработка сайтов пример сайта'
												title="Пример сайта" />
										</picture>
									</div>

								</article>
							</section>


							<section>
								<article className="main__section4 box-428">
									<div className="flex-item section4__box1">
										<div className="box1">
											<h2>
												<Element
													name="store">
													<a
														href='https://ru.wikipedia.org/wiki/%D0%98%D0%BD%D1%82%D0%B5%D1%80%D0%BD%D0%B5%D1%82-%D0%BC%D0%B0%D0%B3%D0%B0%D0%B7%D0%B8%D0%BD'
														target='__blank'
														style={{ color: theme.textH2Main }}
													>
														<span>Интернет</span> <span>магазин</span>
													</a>
												</Element>
											</h2>

											<img
												src={screen}
												style={{ filter: theme.filter }}
												className="box1__img"
												alt="Разработка интернет магазинов экраны устройств"
												title="Экраны устройств"
												loading="lazy"
											/>


										</div>

										<div className="buttons">
											<span
												className={firstBtn ? "btn active" : "btn"}
												onClick={() => {
													setFirstBtn(true)
													setSecondBtn(false)
													setThirdBtn(false)
												}}
												style={{ background: theme.background, color: theme.textColor }}
											>
												A
											</span>
											<span
												className={secondBtn ? "btn active" : "btn"}
												onClick={() => {
													setFirstBtn(false)
													setSecondBtn(true)
													setThirdBtn(false)
												}}
												style={{ background: theme.background, color: theme.textColor }}
											>
												A
											</span>
											<span
												className={thirdBtn ? "btn active" : "btn"}
												onClick={() => {
													setFirstBtn(false)
													setSecondBtn(false)
													setThirdBtn(true)
												}}
												style={{ background: theme.background, color: theme.textColor }}
											>
												A
											</span>
										</div>
										<p
											style={(firstBtn && { fontSize: '1em' })
												|| (secondBtn && { fontSize: '1.25em' })
												|| (thirdBtn && { fontSize: '1.75em' })}
										>Это многостраничный сайт (или веб приложение), который позволяет потребителям не выходя из дома (онлайн) выбирать товар, читать его характеристики, смотреть его фото, отзывы, рейтинг, добавлять товар в корзину, формировать заказ, выбирать способ оплаты и доставки, оплачивать заказ.</p>
										<span
											style={(firstBtn && { fontSize: '1em' })
												|| (secondBtn && { fontSize: '1.25em' })
												|| (thirdBtn && { fontSize: '1.75em' })}
											className='price'
										>
											Цена: от {Math.floor((dollar * 3) * 100)},00p
										</span>
										<a href="#/" className="cta order">
											<span
												style={{ color: theme.textColor }}
												onClick={() => {
													setDataModal('Интернет магазин ')
													setIsModal(i => !i)
												}}
											>
												Заказать
											</span>
										</a>
									</div>

									<div className="flex-item section4__box2">

										<picture>
											<img
												loading="lazy"
												sizes="(max-width: 1400px) 100vw, 1400px"
												srcSet={`
												${require('./images/store/store_aqnmpk_c_scale,w_382.webp')} 382w, 
												${require('./images/store/store_aqnmpk_c_scale,w_499.webp')} 499w, 
												${require('./images/store/store_aqnmpk_c_scale,w_590.webp')} 590w, 
												${require('./images/store/store_aqnmpk_c_scale,w_684.webp')} 684w, 
												${require('./images/store/store_aqnmpk_c_scale,w_779.webp')} 779w, 
												${require('./images/store/store_aqnmpk_c_scale,w_908.webp')} 908w, 
												${require('./images/store/store_aqnmpk_c_scale,w_954.webp')} 954w, 
												${require('./images/store/store_aqnmpk_c_scale,w_1093.webp')} 1093w, 
												${require('./images/store/store_aqnmpk_c_scale,w_1162.webp')} 1162w, 
												${require('./images/store/store_aqnmpk_c_scale,w_1203.webp')} 1203w, 
												${require('./images/store/store_aqnmpk_c_scale,w_1361.webp')} 1361w, 
												${require('./images/store/store_aqnmpk_c_scale,w_1378.webp')} 1378w, 
												${require('./images/store/store_aqnmpk_c_scale,w_1385.webp')} 1385w, 
												${require('./images/store/store_aqnmpk_c_scale,w_1400.webp')} 1400w, 
												`}

												src={`${require("./images/store/store_aqnmpk_c_scale,w_1400.webp")} 1400w`}
												alt='Сделать интернет магазин пример интернет магазина'
												title="Пример интернет магазина" />
										</picture>
									</div>

								</article>
							</section>


							<section>
								<article className="main__section4 box-428">
									<div className="flex-item section5__box1">
										<div className="box1">
											<h2>
												<Element
													name="cor-app">
													<a
														href='https://ru.wikipedia.org/wiki/%D0%98%D0%BD%D1%82%D0%B5%D1%80%D0%BD%D0%B5%D1%82-%D0%BC%D0%B0%D0%B3%D0%B0%D0%B7%D0%B8%D0%BD'
														target='__blank'
														name='po'
														style={{ color: theme.textH2Main }}
													>
														<span>Корпоративное</span> <span>приложение</span>
													</a>
												</Element>
											</h2>

											<img
												src={screen}
												style={{ filter: theme.filter }}
												className="box1__img"
												alt="Разработка корпоративного приложения экраны устройств"
												title="Экраны устройств"
												loading="lazy"
											/>

										</div>

										<div className="buttons">
											<span
												className={firstBtn ? "btn active" : "btn"}
												onClick={() => {
													setFirstBtn(true)
													setSecondBtn(false)
													setThirdBtn(false)
												}}
												style={{ background: theme.background, color: theme.textColor }}
											>
												A
											</span>
											<span
												className={secondBtn ? "btn active" : "btn"}
												onClick={() => {
													setFirstBtn(false)
													setSecondBtn(true)
													setThirdBtn(false)
												}}
												style={{ background: theme.background, color: theme.textColor }}
											>
												A
											</span>
											<span
												className={thirdBtn ? "btn active" : "btn"}
												onClick={() => {
													setFirstBtn(false)
													setSecondBtn(false)
													setThirdBtn(true)
												}}
												style={{ background: theme.background, color: theme.textColor }}
											>
												A
											</span>
										</div>
										<p
											style={(firstBtn && { fontSize: '1em' })
												|| (secondBtn && { fontSize: '1.25em' })
												|| (thirdBtn && { fontSize: '1.75em' })}
										>Это закрытое приложение (веб приложение или(и) мобильное приложение) только для сотрудников компании. Используется для оптимизации работы компании. Внедрив такое приложение вы можете структурировать большое количество данных, автоматизировать бизнес процессы, повысить эффективность сотрудников, контролировать взаимоотношения с клиентами, эффективно упрвалять цепочками поставок, расширить возможности удаленных сотрудников, наладить быструю связь между отделами, иметь доступ к актульной информации в режиме реального времени, сохранять информацию о личных данных сотрудников, сократить временные и материальные издержки, анализ и многое другое.</p>
										{/* <span className="more__detailed">Подробнее</span><br /> */}
										<span
											style={(firstBtn && { fontSize: '1em' })
												|| (secondBtn && { fontSize: '1.25em' })
												|| (thirdBtn && { fontSize: '1.55em' })}
											className='price'
										>
											Цена: от {Math.floor((dollar * 10) * 100)},00p
										</span>
										<a href="#/" className="cta order">
											<span
												style={{ color: theme.textColor }}
												onClick={() => {
													setDataModal('Корпоративное приложение')
													setIsModal(i => !i)
												}}
											>
												Заказать
											</span>
										</a>


									</div>

									<div className="flex-item section4__box2">
										<picture>
											<img
												loading="lazy"
												sizes="(max-width: 1400px) 100vw, 1400px"
												srcSet={`
												${require('./images/appl/app_pi7x1l_c_scale,w_438.webp')} 438w,
												${require('./images/appl/app_pi7x1l_c_scale,w_707.webp')} 707w,
												${require('./images/appl/app_pi7x1l_c_scale,w_740.webp')} 740w,
												${require('./images/appl/app_pi7x1l_c_scale,w_882.webp')} 882w,
												${require('./images/appl/app_pi7x1l_c_scale,w_967.webp')} 967w,
												${require('./images/appl/app_pi7x1l_c_scale,w_1067.webp')} 1067w,
												${require('./images/appl/app_pi7x1l_c_scale,w_1143.webp')} 1143w,
												${require('./images/appl/app_pi7x1l_c_scale,w_1309.webp')} 1309w,
												${require('./images/appl/app_pi7x1l_c_scale,w_1340.webp')} 1340w,
												${require('./images/appl/app_pi7x1l_c_scale,w_1400.webp')} 1400w"
												`}

												src={`${require("./images/appl/app_pi7x1l_c_scale,w_1400.webp")} 1400w`}
												alt='Разработка корпоративного приложения пример приложения'
												title="Пример приложения" />
										</picture>
									</div>


								</article>
							</section>

						</div>


						<aside className="main__aside">
							<h3
								style={{
									color: theme.aside
								}}>Интересно</h3>


							<div className="aside-box">
								<Link to='/speed-info' style={{ color: theme.aside }} className='aside__link'>
									<img src={speed} alt='Картинка скорость загрузки сайта' title="Загрузка сайта" loading="lazy" />
									<p>Почему важна скорость загрузки сайта.</p>
								</Link>
								<Link to='/seo-info' style={{ color: theme.aside }} className='aside__link'>
									<img src={seo} alt='Картинка Seo продвижение' title="Seo продвижения" loading="lazy" />
									<p>Чем отличается органическое (SEO) продвижения сайта от контекстной рекламы?</p>
								</Link>
							</div>

						</aside>
					</div>

				</div >
				<Step />
			</main >
		</>
	)


}

export default MainPage
