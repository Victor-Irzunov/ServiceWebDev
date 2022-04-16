import React, { useContext, useEffect, useRef, useState } from "react";
import Typed from 'typed.js';
import { ThemesContext } from "../../themes/themes";
import Slider from "../../components/Slider/Slider";
import Step from "../../components/step/Step";
import './MainPage.css'
import imgLand from './images/land.png'
import imgSite from './images/site.png'
import imgStore from './images/store.png'
import imgCorpApp from './images/corp_app.png'
import speed from './images/speed.png'
import seo from './images/seo.png'
import clip from './images/Clip.svg';
import screen from './images/Background.svg'
import { Link } from "react-router-dom";
import { ToTop } from "../../components/toTop/ToTop";
import Modal from '../../components/modal/Modal'

const MainPage = props => {
	const { theme, dollar } = useContext(ThemesContext)
	// const [dollar, serDollar] = useState(null)
	const [firstBtn, setFirstBtn] = useState(true)
	const [secondBtn, setSecondBtn] = useState(false)
	const [thirdBtn, setThirdBtn] = useState(false)
	const [isModal, setIsModal] = useState(false)
	const [dataModal, setDataModal] = useState('')
	const [styleClip, setStyleClip] = useState({ opacity: '1' })
	const el = useRef(null)
	const typed = useRef(null)
	const clipRef = useRef()

	useEffect(() => {
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
		}
	}, [])

	
	const handleScrollMain = () => {
		const maxScrollTop = window.innerHeight
		clipRef.current.style.opacity = 1 - window.pageYOffset / maxScrollTop
		setStyleClip(window.scrollY)
	}

	useEffect(() => {
		window.addEventListener("scroll", handleScrollMain)
		return () => window.removeEventListener("scroll", handleScrollMain)
	}, [])



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
				<div className="container">

					<section className="main__title-slider" id="fon">
						<div className="main__title">
							{!theme.isActive &&
								<div className="fon-box">
									<div className="custom-shape-divider-bottom-1600710071">
										<svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
											<path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
										</svg>
									</div>
								</div>
							}

							<h1 style={{ color: theme.textH2Main5 }}>

								<span
									ref={el}
									className='develop'
									style={{ color: theme.textH2Main5 }}
								/>

								<span>
									<a
										href="#site"
										className="land"
										style={{ color: theme.textH2Main4 }}
									>
										Сайты
									</a>
								</span>

								<span>
									<a
										href="#land"
										className="land"
										style={{ color: theme.textH2Main5 }}
									>
										Лендинги
									</a>
								</span>

								<span>
									<a
										href="#store"
										className="land"
										style={{ color: theme.textH2Main4 }}
									>
										Интернет магазины
									</a>
								</span>
								<span>
									<a
										href="#po"
										className="land"
										style={{ color: theme.textH2Main5 }}
									>
										Корпоративные приложения
									</a>
								</span>
							</h1>
						</div>
						<Slider />
					</section>



					<div className="main__block">
						<div className="main__box">




							<section>
								<article className="main__section2 box-428">
									<div className='flex-item section2__box1'>
										<div className='box1'>
											<h2><a
												href='https://ru.wikipedia.org/wiki/%D0%A6%D0%B5%D0%BB%D0%B5%D0%B2%D0%B0%D1%8F_%D1%81%D1%82%D1%80%D0%B0%D0%BD%D0%B8%D1%86%D0%B0' target='__blank'
												name='land'
												style={{ color: theme.textH2Main, }}
											>
												Лендинг
											</a></h2>

											<img
												src={screen}
												style={{ filter: theme.filter }}
												className="box1__img"
												alt="Разработка лендингов экраны устройств"
												title="Экраны устройств"
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
											style={firstBtn && { fontSize: '1em' }
												|| secondBtn && { fontSize: '1.25em' }
												|| thirdBtn && { fontSize: '1.75em' }}
										>
											Это одностраничный сайт (или несколько страниц), нужен для того, чтобы зашедший на него клиент нашёл именно то, что он ищет и не отвлекался ни на что другое, и в результате сделал заказ или позвонил.

										</p>

										<span
											style={firstBtn && { fontSize: '1em' }
												|| secondBtn && { fontSize: '1.25em' }
												|| thirdBtn && { fontSize: '1.75em' }}
											className='price'
										>
											Цена: {Math.floor((dollar / 2) * 100)},00p &#8212; {Math.floor(dollar * 100)},00p
										</span>

										<a href="#/" class="cta order">
											<span
												style={{ color: theme.textColor }}
												onClick={() => {
													setDataModal('Лендинг')
													setIsModal(i => !i)
												}}
											>
												Заказать
											</span>
											{/* <svg width="13px" height="10px" viewBox="0 0 13 10">
											<path d="M1,5 L11,5"></path>
											<polyline points="8 1 12 5 8 9"></polyline>
										</svg> */}
										</a>
									</div>

									<div className="flex-item section2__box2">
										<img src={imgLand} alt='Разработка лендинга' title="Лендинг" />
									</div>
								</article>
							</section >


							<section>
								<article className="main__section3 box-428">
									<div className="flex-item section3__box1">
										<div className="box1">
											<h2><a
												href='https://ru.wikipedia.org/wiki/%D0%A1%D0%B0%D0%B9%D1%82'
												target='__blank'
												name='site'
												style={{ color: theme.textH2Main }}
											>
												Сайт
											</a></h2>

											<img
												src={screen}
												style={{ filter: theme.filter }}
												className="box1__img"
												alt="Разработка сайтов экраны устройств"
												title="Экраны устройств"
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
											style={firstBtn && { fontSize: '1em' }
												|| secondBtn && { fontSize: '1.25em' }
												|| thirdBtn && { fontSize: '1.75em' }}
										>Обычно имеет много страниц с множеством товаров и услуг, предостовляющий подробную информацию о них, может содержать отдел статей, нужен для того, чтобы клиент увидел весь ассортимент или весь спектр услуг, которые вы хотите продложить ему.</p>
										<span
											style={firstBtn && { fontSize: '1em' }
												|| secondBtn && { fontSize: '1.25em' }
												|| thirdBtn && { fontSize: '1.75em' }}
											className='price'
										>
											Цена: {Math.floor((dollar / 2) * 100)},00p &#8212; {Math.floor(dollar * 100)},00p
										</span>
										<a href="#/" class="cta order">
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
										<img src={imgSite}
											alt='Разработка сайтов пример сайта'
											title="Пример сайта"

										/>
									</div>

								</article>
							</section>


							<section>
								<article className="main__section4 box-428">
									<div className="flex-item section4__box1">
										<div className="box1">
											<h2><a
												href='https://ru.wikipedia.org/wiki/%D0%98%D0%BD%D1%82%D0%B5%D1%80%D0%BD%D0%B5%D1%82-%D0%BC%D0%B0%D0%B3%D0%B0%D0%B7%D0%B8%D0%BD'
												target='__blank'
												name='store'
												style={{ color: theme.textH2Main }}
											>
												<span>Интернет</span> <span>магазин</span>
											</a></h2>

											<img
												src={screen}
												style={{ filter: theme.filter }}
												className="box1__img"
												alt="Разработка интернет магазинов экраны устройств"
												title="Экраны устройств"
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
											style={firstBtn && { fontSize: '1em' }
												|| secondBtn && { fontSize: '1.25em' }
												|| thirdBtn && { fontSize: '1.75em' }}
										>Это многостраничный сайт (или веб приложение), который позволяет потребителям не выходя из дома (онлайн) выбирать товар, читать его характеристики, смотреть его фото, отзывы, рейтинг, закидовать товар в корзину, формировать заказ, выбирать способ оплаты и доставки, оплатичивать заказ.</p>
										{/* <span className="more__detailed">Подробнее</span><br /> */}
										<span
											style={firstBtn && { fontSize: '1em' }
												|| secondBtn && { fontSize: '1.25em' }
												|| thirdBtn && { fontSize: '1.75em' }}
											className='price'
										>
											Цена: {Math.floor((dollar / 2) * 100)},00p &#8212; {Math.floor(dollar * 100)},00p
										</span>
										<a href="#/" class="cta order">
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
										<img src={imgStore}
											alt='Сделать интернет магазин пример интернет магазина'
											title="Пример интернет магазина"
										/>
									</div>

								</article>
							</section>


							<section>
								<article className="main__section4 box-428">
									<div className="flex-item section5__box1">
										<div className="box1">
											<h2><a
												href='https://ru.wikipedia.org/wiki/%D0%98%D0%BD%D1%82%D0%B5%D1%80%D0%BD%D0%B5%D1%82-%D0%BC%D0%B0%D0%B3%D0%B0%D0%B7%D0%B8%D0%BD'
												target='__blank'
												name='po'
												style={{ color: theme.textH2Main }}
											>
												<span>Корпоративное</span> <span>приложение</span>
											</a></h2>

											<img
												src={screen}
												style={{ filter: theme.filter }}
												className="box1__img"
												alt="Разработка корпоративного приложения экраны устройств"
												title="Экраны устройств"
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
											style={firstBtn && { fontSize: '1em' }
												|| secondBtn && { fontSize: '1.25em' }
												|| thirdBtn && { fontSize: '1.75em' }}
										>Это закрытое приложение (веб приложение или(и) мобильное приложение) только для сотрудников компании. Используется для оптимизации работы компании. Внедрив такое приложение вы можете структурировать большое количество данных, автоматизировать бизнес процессы, повысить эфективность сотрудников, контролировать взаимоотношения с клиентами, эфективно упрвалять цепочками поставок, расширить возможности удаленных сотрудников, наладить быструю связь между отделами, иметь доступ к актульной информации в режиме реального времени, сохранять информацию о личных данных сотрудников, сократить временные и материальные издержки, анализ и многое другое.</p>
										{/* <span className="more__detailed">Подробнее</span><br /> */}
										<span
											style={firstBtn && { fontSize: '1em' }
												|| secondBtn && { fontSize: '1.25em' }
												|| thirdBtn && { fontSize: '1.55em' }}
											className='price'
										>
											Цена: {Math.floor((dollar / 2) * 100)},00p &#8212; {Math.floor(dollar * 100)},00p
										</span>
										<a href="#/" class="cta order">
											<span
												style={{ color: theme.textColor }}
												onClick={() => {
													setDataModal('Корпоративное приложение')
													setIsModal(i => !i)
												}}
											>
												Заказать
											</span>
											{/* <svg width="13px" height="10px" viewBox="0 0 13 10">
											<path d="M1,5 L11,5"></path>
											<polyline points="8 1 12 5 8 9"></polyline>
										</svg> */}
										</a>


									</div>

									<div className="flex-item section4__box2">
										<img src={imgCorpApp}
											alt='Разработка корпоративного приложения пример приложения'
											title="Пример приложения"
										/>
									</div>


								</article>
							</section>

						</div>


						<aside className="main__aside">
							<h3
								style={{
									// borderBottom: theme.borderBottom,
									color: theme.aside
								}}>Интересно</h3>


							<div className="aside-box">
								<Link to='/speed-info' style={{ color: theme.aside }} className='aside__link'>
									<img src={speed} alt='Картинка скорость загрузки сайта' title="Загрузка сайта" />
									<p>Почему важна скорость загрузки сайта.</p>
								</Link>
								<Link to='/seo-info' style={{ color: theme.aside }} className='aside__link'>
									<img src={seo} alt='Картинка Seo продвижение' title="Seo продвижения" />
									<p>Что необходимо для органического (SEO) продвижения сайта.</p>
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
