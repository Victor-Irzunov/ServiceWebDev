import React, { useContext, useState } from "react";
import { ThemesContext } from "../../../themes/themes";
import './ServicePage2.css'
// import { logo, design, leanding } from "../../data";
import { RightOutlined, DownOutlined } from "@ant-design/icons"


const ServicePage2 = props => {
	const theme = useContext(ThemesContext)

	const [size, setSize] = useState(false)
	const [logo, setLogo] = useState(false)
	const [design, setDesign] = useState(false)
	const [leanding, setLeanding] = useState(false)
	const [site, setSite] = useState(false)
	const [store, setStore] = useState(false)
	const [app, setApp] = useState(false)
	const [domain, setDomain] = useState(false)

	const [firstBtn, setFirstBtn] = useState(true)
	const [secondBtn, setSecondBtn] = useState(false)



	const onChange = () => setSize(i => !i)



	return (
		<main
			className="service2"
			style={{ background: theme.background }}
		>
			<div className="container">
				<section>
					<article>
						<h2 style={{ color: theme.textColor }}>УСЛУГИ</h2>


						<div className="block-btn">
										<span
											className={firstBtn ? "btn-box active" : "btn-box"}
											onClick={() => {
												setFirstBtn(i => !i)
												setSecondBtn(false)
											}}
								style={{ background: theme.background, color: theme.textColor}}
										>
											A
										</span>
									
										<span
											className={secondBtn ? "btn-box active" : "btn-box"}
											onClick={() => {
												setFirstBtn(false)
												setSecondBtn(i => !i)
											}}
											style={{ background: theme.background, color: theme.textColor }}
										>
											A
										</span>
									</div>

						<div className="" style={{ color: theme.textColor }}>
							<div className="block-service" onClick={() => setLogo(i => !i)}>
								<div className="block-service-icon">
									{!logo
										? <RightOutlined style={{ color: theme.textColor, fontSize: (firstBtn ? '1.3em': '1.8em') }} />
										: <DownOutlined style={{ color: theme.textColor , fontSize: (firstBtn ? '1.3em': '1.8em')}} />
									}
									<span style={{ fontSize: (firstBtn ? '1.2em': '1.8em')}}>Логотип</span>
								</div>
								
								<div className={!logo ? "box-content" : "box-content active"} style={{ fontSize: (firstBtn ? '1.3em': '1.8em')}}>
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
							</div>

							<div className="block-service" onClick={() => setDesign(i => !i)}>
								<div className="block-service-icon">
									{!design
										? <RightOutlined style={{ color: theme.textColor, fontSize: (firstBtn ? '1.3em': '1.8em') }} />
										: <DownOutlined style={{ color: theme.textColor, fontSize: (firstBtn ? '1.3em': '1.8em') }} />
									}
									<span>Дизайн</span>
								</div>
								
								<div className={!design ? "box-content" : "box-content active"} >
									<p>Вы можете воспользоваться услугами нашего дизайнера, который поможет Вам подобрать шрифт, цвет сайта, картинки и сделать сайт максимально удобным и простым для взаимодействия пользователя.
										А можете сами всё подобрать или показать нашему разработчику похожий сайт или сайт конкурентов, который Вам нравится, сделать похожий и с экономить время и т.д.</p>
								</div>
							</div>

							<div className="block-service" onClick={() => setLeanding(i => !i)}>
								<div className="block-service-icon">
									{!leanding
										? <RightOutlined style={{ color: theme.textColor, fontSize: (firstBtn ? '1.2em': '1.8em') }} />
										: <DownOutlined style={{ color: theme.textColor, fontSize: (firstBtn ? '1.2em': '1.8em') }} />
									}
									<span>Лендинг</span>
								</div>
								
								<div className={!leanding ? "box-content" : "box-content active"} >
									<p>Вы можете воспользоваться услугами нашего дизайнера, который поможет Вам подобрать шрифт, цвет сайта, картинки и сделать сайт максимально удобным и простым для взаимодействия пользователя.
										А можете сами всё подобрать или показать нашему разработчику похожий сайт или сайт конкурентов, который Вам нравится, сделать похожий и с экономить время и т.д.</p>
								</div>
							</div>

							<div className="block-service" onClick={() => setSite(i => !i)}>
								<div className="block-service-icon">
									{!site
										? <RightOutlined style={{ color: theme.textColor, fontSize: (firstBtn ? '1.2em': '1.8em') }} />
										: <DownOutlined style={{ color: theme.textColor, fontSize: (firstBtn ? '1.2em': '1.8em') }} />
									}
									<span>Сайт</span>
								</div>
								
								<div className={!site ? "box-content" : "box-content active"} >
									<p>Разработаем Лендинг (одностраничный сайт) с(без) дизайнером. Если без дизайнера Вам необходимо будет подготовить красивые картинки товара или услуги. Если не важен индивидульный дизайн и <a href='https://ru.wikipedia.org/wiki/%D0%98%D0%BD%D1%82%D0%B5%D1%80%D1%84%D0%B5%D0%B9%D1%81_(%D0%B7%D0%BD%D0%B0%D1%87%D0%B5%D0%BD%D0%B8%D1%8F)#:~:text=%D0%98%D0%BD%D1%82%D0%B5%D1%80%D1%84%D0%B5%D0%B9%D1%81%20%E2%80%94%20%D1%84%D0%BE%D1%80%D0%BC%D0%B0%2C%20%D0%BC%D0%B5%D1%82%D0%BE%D0%B4%20%D0%BE%D1%80%D0%B3%D0%B0%D0%BD%D0%B8%D0%B7%D0%B0%D1%86%D0%B8%D0%B8%20%D0%B2%D0%B7%D0%B0%D0%B8%D0%BC%D0%BE%D0%B4%D0%B5%D0%B9%D1%81%D1%82%D0%B2%D0%B8%D1%8F,%D0%BF%D1%80%D0%BE%D0%B3%D1%80%D0%B0%D0%BC%D0%BC%D1%8B%20%D0%B8%20%D1%83%D1%81%D1%82%D1%80%D0%BE%D0%B9%D1%81%D1%82%D0%B2%D0%B0%20%D0%B8%20%D1%82.' target='_blank'>интерфейс</a> , то поищите похожие по тематике сайты в Вашей или в другой стране и сбросите ссылку разработчику, он сделает похожий, а свои шрифты и цвета сайта Вы с ним подберете. Для размещения Вашего лендинга в сети интернет необходим домен (назнавание лендинга, например 'app.by') и хостинг (место в интернете).</p>
								</div>
							</div>

							<div className="block-service" onClick={() => setStore(i => !i)}>
								<div className="block-service-icon">
									{!store
										? <RightOutlined style={{ color: theme.textColor, fontSize: (firstBtn ? '1.2em': '1.8em') }}/>
										: <DownOutlined style={{ color: theme.textColor, fontSize: (firstBtn ? '1.2em': '1.8em') }} />
									}
									<span>Интернет магазин</span>
								</div>
								
								<div className={!store ? "box-content" : "box-content active"} >
									<p>Разработаем Ваш интернет-магазин, который будет продавать 24/7, принимать онлайн платежи, иметь настраиваемые варианты доставки, с административной панелью (добовлять, удалять, изменять товар, цену и информацию) собирать данные покупателя, который будет прекрасно работать на мобильном устройстве, будет легкий и удобный в использовании, с поиском  и сортировкой товара, отзывами и характеристиками, рейтингом, рекламами и акциями и т.д. В отличии от сайтов на конструкторах, мы можем добавить любой функционал какой только пожелаете. Для разработки будем использовать самые передовые технологии.</p>
								</div>
							</div>

							<div className="block-service" onClick={() => setApp(i => !i)}>
								<div className="block-service-icon">
									{!app
										? <RightOutlined style={{ color: theme.textColor, fontSize: (firstBtn ? '1.2em': '1.8em') }} />
										: <DownOutlined style={{ color: theme.textColor, fontSize: (firstBtn ? '1.2em': '1.8em') }} />
									}
									<span>Корпоративное приложение</span>
								</div>
								
								<div className={!app ? "box-content" : "box-content active"} >
									<p>Современные компании понимают, что данные имеют большое значение и для того чтобы их получать, обновлять, правильно структурировать, анализировать необходимо специально разработанное для определенной сферы деятельности или компании корпоративное приложение. Наша команда программистов может разработать его для Вас.</p>
								</div>
							</div>

							<div className="block-service" onClick={() => setDomain(i => !i)}>
								<div className="block-service-icon">
									{!domain
										? <RightOutlined style={{ color: theme.textColor, fontSize: (firstBtn ? '1.2em': '1.8em') }} />
										: <DownOutlined style={{ color: theme.textColor, fontSize: (firstBtn ? '1.2em': '1.8em') }} />
									}
									<span>Домен и хостинг</span>
								</div>
								
								<div className={!domain ? "box-content" : "box-content active"} >
									<p>Поможем выбрать домен и хостинг.</p>
								</div>
							</div>

						</div>
					</article>
				</section>
			</div>
		</main>
	)


}

export default ServicePage2