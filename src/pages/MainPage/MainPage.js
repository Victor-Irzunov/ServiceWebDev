import React, { useContext, useEffect, useRef } from "react";
import Typed from 'typed.js';
import { ThemesContext } from "../../themes/themes";
import Slider from "../../components/Slider/Slider";
import Form from "../../components/form/Form";
import './MainPage.css'
import display from './image/1.png'

const MainPage = props => {
	const theme = useContext(ThemesContext)

	const el = useRef(null);
	const typed = useRef(null);

	useEffect(() => {
		const options = {
			strings: [
				'Разрабатываем:'
			],
			typeSpeed: 120, // Скорость печати
			startDelay: 500, // Задержка перед стартом анимации
			backSpeed: 50, // Скорость удаления
			loop: true
		};

		typed.current = new Typed(el.current, options);

		return () => {
			typed.current.destroy();
		}
	}, [])



	return (
		<main
			className="main"
			style={{ background: theme.background, color: theme.textColor }}
		>
			<div className="container">

				<section>
					<div className="main__title">
						<h1>
							<span ref={el} />
							<span><a href="#land" style={{ color: theme.textColor }}>Лендинги</a></span>
							<span><a href="#site" style={{ color: theme.textColor }}>Сайты</a></span>
							<span><a href="#store" style={{ color: theme.textColor }}>Интернет магазины</a></span>
							<span><a href="#po" style={{ color: theme.textColor }}>Корпоративные приложения</a></span>
						</h1>
						<div className="mainbox__btn">
							<button className="btn__more-detailed" style={{ color: theme.textColor }}>Подробнее...</button>
						</div>
					</div>
					<Slider />
				</section>

				<section>
					<article className="main__section2">
						<div className="section2__box1">
							<h2><a
								href='https://ru.wikipedia.org/wiki/%D0%A6%D0%B5%D0%BB%D0%B5%D0%B2%D0%B0%D1%8F_%D1%81%D1%82%D1%80%D0%B0%D0%BD%D0%B8%D1%86%D0%B0' target='__blank'
								name='land'
								style={{ color: theme.textColor, borderBottom: theme.borderBottom }}
							>
								Лендинг
							</a></h2>
							<p>Это одностраничный сайт (или несколько страниц), нужен для того, чтобы зашедший на него клиент нашёл именно то, что он ищет и не отвлекался ни на что другое, и в результате сделал заказ или позвонил либо оставил сообщение.</p>
							<span>Подробнее...</span>
						</div>

						<div className="section2__box2">
							<img src={display} alt='display' />
						</div>

						<aside className="section2__box3-info">
							<h3 style={{ borderBottom: theme.borderBottom }}>Интересно</h3>
						</aside>
					</article>
				</section>

				<section>
					<article className="main__section3">
						<div className="section3__box1">
							<h2><a
								href='https://ru.wikipedia.org/wiki/%D0%A1%D0%B0%D0%B9%D1%82'
								target='__blank'
								name='site'
								style={{ color: theme.textColor, borderBottom: theme.borderBottom }}
							>
								Сайт
							</a></h2>
							<p>Обычно имеет много страниц с множеством товаров и услуг, предостовляющий подробную информацию о них, может содержать отдел статей, нужен для того, чтобы клиент увидел весь ассортимент или весь спектр услуг, которые вы хотите продложить ему.</p>
							<span>Подробнее...</span>
						</div>

						<div className="section3__box2">
							<img src={display} alt='display' />
						</div>

						<aside className="section3__box3-info">
							<h3 style={{ borderBottom: theme.borderBottom }}>Интересно</h3>
						</aside>
					</article>
				</section>

				<section>
					<article className="main__section4">
						<div className="section4__box1">
							<h2><a
								href='https://ru.wikipedia.org/wiki/%D0%98%D0%BD%D1%82%D0%B5%D1%80%D0%BD%D0%B5%D1%82-%D0%BC%D0%B0%D0%B3%D0%B0%D0%B7%D0%B8%D0%BD'
								target='__blank'
								name='store'
								style={{ color: theme.textColor, borderBottom: theme.borderBottom }}
							>
								Интернет магазин
							</a></h2>
							<p>Это многостраничный сайт (или веб приложение), который позволяет потребителям не выходя из дома (онлайн) выбирать товар, читать его характеристики, смотреть его фото, отзывы, рейтинг, закидовать товар в корзину, формировать заказ, выбирать способ оплаты и доставки, оплатичивать заказ.</p>
							<span>Подробнее...</span>
						</div>

						<div className="section4__box2">
							<img src={display} alt='display' />
						</div>

						<aside className="section4__box3-info">
							<h3 style={{ borderBottom: theme.borderBottom }}>Интересно</h3>
						</aside>
					</article>
				</section>

				<section>
					<article className="main__section4">
						<div className="section4__box1">
							<h2><a
								href='https://ru.wikipedia.org/wiki/%D0%98%D0%BD%D1%82%D0%B5%D1%80%D0%BD%D0%B5%D1%82-%D0%BC%D0%B0%D0%B3%D0%B0%D0%B7%D0%B8%D0%BD'
								target='__blank'
								name='po'
								style={{ color: theme.textColor, borderBottom: theme.borderBottom }}
							>
								Корпоративное приложение
							</a></h2>
							<p>Это закрытое приложение (веб приложение или(и) мобильное приложение) только для сотрудников компании. Используется для оптимизации работы компании. Внедрив такое приложение вы можете структурировать большое количество данных, автоматизировать бизнес процессы, повысить эфективность сотрудников, контролировать взаимоотношения с клиентами, эфективно упрвалять цепочками поставок, расширить возможности удаленных сотрудников, наладить быструю связь между отделами, иметь доступ к актульной информации в режиме реального времени, сохранять информацию о личных данных сотрудников, сократить временные и материальные издержки, анализ и многое другое.</p>
							<span>Подробнее...</span>
						</div>

						<div className="section4__box2">
							<img src={display} alt='display' />
						</div>

						<aside className="section4__box3-info">
							<h3 style={{ borderBottom: theme.borderBottom }}>Интересно</h3>
						</aside>
					</article>
				</section>

			<Form/>
			</div>
		</main>
	)


}

export default MainPage
