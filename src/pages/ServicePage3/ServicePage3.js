import React, { useContext, useState, useEffect } from "react";
import { ThemesContext } from "../../themes/themes";
import './ServicePage3.css'
// import { logo, design, leanding } from "../../data";
// import { RightOutlined, DownOutlined } from "@ant-design/icons"
import logoService from './image/logo-service2.png'
import designService from './image/design.png'
import landingService from './image/landing-service.png'
import siteService from './image/site-service.png'
import storeService from './image/store2.png'
import appService from './image/app.png'
import { ToTop } from "../../components/toTop/ToTop";


const ServicePage3 = props => {
	const theme = useContext(ThemesContext)

	const [card, setCard] = useState(false)
	const [card2, setCard2] = useState(false)
	const [card3, setCard3] = useState(false)
	const [card4, setCard4] = useState(false)
	const [card5, setCard5] = useState(false)
	const [card6, setCard6] = useState(false)
	// const [card7, setCard7] = useState(false)




	return (
		<main
			className="service3"
			style={{ background: theme.background }}
		>
		
			<ToTop/>

			<div className="container">
				<section>
					<article>
						<h2 style={{
									// color: theme.textColorMain,
									// webkitBackgroundClip: 'text',
									// backgroundClip: 'text',
									// backgroundImage: 'linear-gradient(to top, #577de6, #1ce3da)'
										webkitTextStroke: theme.webkitText,
										webkitTextFillColor: theme.webkitTextFull
									
								}}>УСЛУГИ</h2>

						<div className="block-service3">

							<div className={!card ? "card" : "card active"}>
								<div className="icon">
									<img src={logoService} className='icon-img' />
								</div>
								<div className="content">
									<h3>Разработаем<br /> логотип</h3>
									<p>Наш дизайнер может разработать для Вашего бренда логотип.<br />
										Может возникнуть вопрос: "Что делает логотип и зачем он нужен?"<br />
										Вот например: <br />
										1. Логотип производит первое впечатление, которое побуждает взаимодействовать с Вашим брендом.<br />
										2. Поможет Вам создать фирменный стиль.<br />
										3. Логотип помогат лучше запомнить бренд.<br />
										4. Выделяет среди конкурентов.<br />
										5. Повышает лояльность к бренду.<br />
										Путешествие Вашего бизнеса начинается с хорошего логотипа и цели однажды стать узнаваемым брендом.</p>
								</div>
								<button className="more" onClick={() => setCard(i => !i)}></button>
							</div>

							<div className={!card2 ? "card" : "card active"}>
								<div className="icon">
									<img src={designService} className='icon-img2' />
								</div>
								<div className="content">
									<h3>Услуги дизайнера</h3>
									<p>Вы можете воспользоваться услугами нашего дизайнера, который поможет Вам подобрать шрифт, цвет сайта, картинки и сделать сайт максимально удобным и простым для взаимодействия пользователя.
										А можете сами всё подобрать или показать нашему разработчику похожий сайт или сайт конкурентов, который Вам нравится, сделать похожий и с экономить время и т.д.</p>
								</div>
								<button className="more" onClick={() => setCard2(i => !i)}></button>
							</div>

							<div className={!card3 ? "card" : "card active"}>
								<div className="icon">
									<img src={landingService} className='icon-img3' />
								</div>
								<div className="content">
									<h3>Разработаем<br /> лендинг</h3>
									<p>Разработаем Лендинг (одностраничный сайт) с(без) дизайнером. Если без дизайнера Вам необходимо будет подготовить красивые картинки товара или услуги. Если не важен индивидульный дизайн и <a href='https://ru.wikipedia.org/wiki/%D0%98%D0%BD%D1%82%D0%B5%D1%80%D1%84%D0%B5%D0%B9%D1%81_(%D0%B7%D0%BD%D0%B0%D1%87%D0%B5%D0%BD%D0%B8%D1%8F)#:~:text=%D0%98%D0%BD%D1%82%D0%B5%D1%80%D1%84%D0%B5%D0%B9%D1%81%20%E2%80%94%20%D1%84%D0%BE%D1%80%D0%BC%D0%B0%2C%20%D0%BC%D0%B5%D1%82%D0%BE%D0%B4%20%D0%BE%D1%80%D0%B3%D0%B0%D0%BD%D0%B8%D0%B7%D0%B0%D1%86%D0%B8%D0%B8%20%D0%B2%D0%B7%D0%B0%D0%B8%D0%BC%D0%BE%D0%B4%D0%B5%D0%B9%D1%81%D1%82%D0%B2%D0%B8%D1%8F,%D0%BF%D1%80%D0%BE%D0%B3%D1%80%D0%B0%D0%BC%D0%BC%D1%8B%20%D0%B8%20%D1%83%D1%81%D1%82%D1%80%D0%BE%D0%B9%D1%81%D1%82%D0%B2%D0%B0%20%D0%B8%20%D1%82.' target='_blank'>интерфейс</a> , то поищите похожие по тематике сайты в Вашей или в другой стране и сбросите ссылку разработчику, он сделает похожий, а свои шрифты и цвета сайта Вы с ним подберете. Для размещения Вашего лендинга в сети интернет необходим домен (назнавание лендинга, например 'app.by') и хостинг (место в интернете).</p>
								</div>
								<button className="more" onClick={() => setCard3(i => !i)}></button>
							</div>

							<div className={!card4 ? "card" : "card active"}>
								<div className="icon">
									<img src={siteService} className='icon-img4' />
								</div>
								<div className="content">
									<h3>Сделаем сайт</h3>
									<p>Разработаем сайт для Вашего бизнеса с(без) дизайнером, с(без) регистрацией и авторизацией, с(без) подключением платежной системы, с(без) выбора языка, с(без) определинием место положения пользователя, с(без) административной панелью и т.д. Для размещения Вашего сайта в сети интернет необходим домен (назнавание сайта, например "app.by") и хостинг (место в интернете).</p>
								</div>
								<button className="more" onClick={() => setCard4(i => !i)}></button>
							</div>

							<div className={!card5 ? "card" : "card active"}>
								<div className="icon">
									<img src={storeService} className='icon-img5' />
								</div>
								<div className="content">
									<h3>Интернет магазин</h3>
									<p>Создадим Ваш интернет-магазин, который будет продавать 24/7, принимать онлайн платежи, иметь настраиваемые варианты доставки, с административной панелью (добовлять, удалять, изменять товар, цену и информацию) собирать данные покупателя, который будет прекрасно работать на мобильном устройстве, будет легкий и удобный в использовании, с поиском  и сортировкой товара, отзывами и характеристиками, рейтингом, рекламами и акциями и т.д. В отличии от сайтов на конструкторах, мы можем добавить любой функционал какой только пожелаете. Для разработки будут использоваться самые передовые технологии.</p>
								</div>
								<button className="more" onClick={() => setCard5(i => !i)}></button>
							</div>

							<div className={!card6 ? "card" : "card active"}>
								<div className="icon">
									<img src={appService} className='icon-img6' />
								</div>
								<div className="content">
									<h3>Корпоротивное приложение</h3>
									<p>Современные компании понимают, что данные имеют большое значение и для того чтобы их получать, обновлять, правильно структурировать, анализировать необходимо специально разработанное для определенной сферы деятельности или компании корпоративное приложение. Наша команда программистов может разработать его для Вас.</p>
								</div>
								<button className="more" onClick={() => setCard6(i => !i)}></button>
							</div>

						</div>
					</article>

				</section>
			</div>
			<div className="b-marquee b-marquee--rtl">
				<div
					className="b-marquee__text"
					style={{ color: theme.textColor }}
				>
					<span>-10%</span> до конца апреля на разработку лендинга и сайта.
				</div>
			</div>
		</main>
	)


}

export default ServicePage3