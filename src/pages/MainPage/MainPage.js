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
import speed from './images/aside-speed.png'
import seo from './images/aside-seo.png'
import screen from './images/screen.png'
import { dollarExchangeRate } from '../../Api-bank/api'
import { Link } from "react-router-dom";
import { ToTop } from "../../components/toTop/ToTop";

const MainPage = props => {
	const theme = useContext(ThemesContext)
	const [dollar, serDollar] = useState(null)
	const [firstBtn, setFirstBtn] = useState(true)
	const [secondBtn, setSecondBtn] = useState(false)
	const [thirdBtn, setThirdBtn] = useState(false)
	// const [scrollTop, setScrollTop] = useState(false)


	const el = useRef(null)
	const typed = useRef(null)

	useEffect(() => {
		dollarExchangeRate().then(data => {
			serDollar(data.data.Cur_OfficialRate)
		})
	}, [])



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

	// 

	return (
		<main
			className="main"
			style={{ background: theme.background, color: theme.textColor }}
		>
			<ToTop/>

			<div className="container">

				<section className="main__title-slider" id="fon">
					<div className="main__title">
						<h1
						// style={{ color: theme.textColor }}
						>

							<span ref={el} className='develop' />

							<span><a href="#land"
								className="land"
								style={{
									// color: theme.textColorMain,
									// webkitBackgroundClip: 'text',
									// backgroundClip: 'text',
									// backgroundImage: 'linear-gradient(#0cf2ff, #0cf2ff)'
									webkitTextStroke: theme.webkitText,
									webkitTextFillColor: theme.webkitTextFull
								}}
							>Лендинги</a></span>
							<span><a href="#site" className="land"
								style={{
									webkitTextStroke: theme.webkitText,
									webkitTextFillColor: theme.webkitTextFull
								}}
							>Сайты</a></span>
							<span><a href="#store" className="land"
								style={{
									webkitTextStroke: theme.webkitText,
									webkitTextFillColor: theme.webkitTextFull
								}}
							>Интернет магазины</a></span>
							<span><a href="#po" className="land"
								style={{
									webkitTextStroke: theme.webkitText,
									webkitTextFillColor: theme.webkitTextFull
								}}
							>Корпоративные приложения</a></span>
						</h1>
					</div>
					<Slider />
				</section>



				<div className="main__block">
					<div className="main__box">


						<section>
							<article className="main__section2">
								<div className='section2__box1'>
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
										/>

									</div>


									<div className="buttons">
										<span
											className={firstBtn ? "btn active" : "btn"}
											onClick={() => {
												setFirstBtn(i => !i)
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
												setSecondBtn(i => !i)
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
												setThirdBtn(i => !i)
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
										Это одностраничный сайт (или несколько страниц), нужен для того, чтобы зашедший на него клиент нашёл именно то, что он ищет и не отвлекался ни на что другое, и в результате сделал заказ или позвонил либо оставил сообщение.

									</p>
									{/* <span className="more__detailed">Подробнее</span><br /> */}

									<span
										style={firstBtn && { fontSize: '1em' }
											|| secondBtn && { fontSize: '1.25em' }
											|| thirdBtn && { fontSize: '1.75em' }}
										className='price'
									>
										Цена: {Math.floor((dollar / 2) * 100)},00p &#8212; {Math.floor(dollar * 100)},00p
									</span>
								</div>

								<div className="section2__box2">
									<img src={imgLand} alt='landing' />
								</div>

							</article>
						</section >


						<section>
							<article className="main__section3">
								<div className="section3__box1">
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
										/>

									</div>



									<div className="buttons">
										<span
											className={firstBtn ? "btn active" : "btn"}
											onClick={() => {
												setFirstBtn(i => !i)
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
												setSecondBtn(i => !i)
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
												setThirdBtn(i => !i)
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
									{/* <span className="more__detailed">Подробнее</span><br /> */}
									<span
										style={firstBtn && { fontSize: '1em' }
											|| secondBtn && { fontSize: '1.25em' }
											|| thirdBtn && { fontSize: '1.75em' }}
											className='price'
									>
										Цена: {Math.floor((dollar / 2) * 100)},00p &#8212; {Math.floor(dollar * 100)},00p
									</span>
								</div>

								<div className="section3__box2">
									<img src={imgSite} alt='site' />
								</div>

							</article>
						</section>


						<section>
							<article className="main__section4">
								<div className="section4__box1">
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
										/>


									</div>

									<div className="buttons">
										<span
											className={firstBtn ? "btn active" : "btn"}
											onClick={() => {
												setFirstBtn(i => !i)
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
												setSecondBtn(i => !i)
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
												setThirdBtn(i => !i)
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
								</div>

								<div className="section4__box2">
									<img src={imgStore} alt='store' />
								</div>

							</article>
						</section>


						<section>
							<article className="main__section4">
								<div className="section4__box1">
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
										/>

									</div>

									<div className="buttons">
										<span
											className={firstBtn ? "btn active" : "btn"}
											onClick={() => {
												setFirstBtn(i => !i)
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
												setSecondBtn(i => !i)
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
												setThirdBtn(i => !i)
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
								</div>

								<div className="section4__box2">
									<img src={imgCorpApp} alt='app' />
								</div>


							</article>
						</section>

					</div>


					<aside className="main__aside">
						<h3 style={{ borderBottom: theme.borderBottom, color: theme.aside }}>Интересно</h3>

						<Link to='/speed-info' style={{ color: theme.aside }} className='aside__link'>
							<img src={speed} alt='speed' />
							Почему важна скорость загрузки сайта.
						</Link>
						<Link to='/seo-info' style={{ color: theme.aside }} className='aside__link'>
							<img src={seo} alt='seo' />
							Что необходимо для органического (SEO) продвижения сайта.
						</Link>


					</aside>
				</div>




			</div >
			<Step />
		</main >
	)


}

export default MainPage
