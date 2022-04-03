import React, { useContext, useState } from "react";
import { ThemesContext } from "../../../themes/themes";
import './ServicePage.css'
import { dataContent } from "../../../data";

import { Tabs, Radio } from 'antd';
const { TabPane } = Tabs;


const ServicePage = props => {
	const theme = useContext(ThemesContext)
	const [state, setState] = useState({ mode: 'top' })
	// const [size, setSize] = useState({ size: 'small' })
	const [size, setSize] = useState(false)


	const handleModeChange = e => setState({ mode: e.target.value })
	// const onChange = e => setSize({ size: e.target.value })
	const onChange = () => setSize(i => !i)

	return (
		<main
			className="service"
			style={{ background: theme.background }}
		>
			<div className="container">
				<section>
					<article>
						<h2 style={{ color: theme.textColor }}>УСЛУГИ</h2>
						<div>
							<Radio.Group
								value={size.size}
								onChange={onChange}
							>
								<Radio.Button
									value="small"
									style={{
										fontSize: '16px', background: 'transparent',
										border: 'none', color: theme.textColor
									}}
								>
									A
								</Radio.Button>

								<Radio.Button
									value="large"
									style={{
										fontSize: '24px', background: 'transparent',
										border: 'none', color: theme.textColor
									}}
								>
									A
								</Radio.Button>
							</Radio.Group>
							<Radio.Group
								onChange={handleModeChange}
								value={state.mode}
								className='radio__group'

							>
								<Radio.Button
									value="top"
									style={{
										fontSize: '24px', background: 'transparent',
										border: 'none', color: theme.textColor
									}}
									className='top'
								>
									—
								</Radio.Button>
								<Radio.Button
									value="left"
									style={{
										fontSize: '24px', background: 'transparent',
										border: 'none', color: theme.textColor
									}}
									className='left'
								>
									|
								</Radio.Button>

							</Radio.Group>
							<Tabs
								defaultActiveKey="1"
								tabPosition={state.mode}
								style={{ color: theme.textColor }}
								// size={size.size}
								animated={{ inkBar: true, tabPane: true }}
							>
								<TabPane
									tab={<span style={!size ? { fontSize: '18px' } : { fontSize: '24px' }}>Логотип</span>}
									key={1}
									style={{ color: theme.textColor }}
									className='tab__pane'
								>
									<span style={!size ? { fontSize: '18px' } : { fontSize: '24px' }}>
										Наш дизайнер может разработать для Вашего бренда логотип.<br />
										Что делает логотип и зачем он нужен?<br />
										Вот например:<br />
										1. Логотип производит первое впечатление, которое побуждает взаимодействовать с Вашим брендом.<br />
										2. Поможет Вам создать фирменный стиль.<br />
										3. Логотип помогат лучше запомнить бренд.<br />
										4. Выделяет среди конкурентов.<br />
										5. Повышает лояльность к бренду.<br />
										Путешествие Вашего бизнеса начинается с хорошего логотипа и цели однажды стать узнаваемым брендом.
									</span>
								</TabPane>
								<TabPane
									tab={<span style={!size ? { fontSize: '18px' } : { fontSize: '24px' }}>Дизайн</span>}
									key={2}
									style={{ color: theme.textColor }}
									className='tab__pane'
								>
									<span style={!size ? { fontSize: '18px' } : { fontSize: '24px' }}>
										Вы можете воспользоваться услугами нашего дизайнера, который поможет Вам подобрать шрифт, цвет сайта, картинки и сделать сайт максимально удобным и простым для взаимодействия пользователя.<br/>
										А можете сами всё подобрать или показать нашему разработчику похожий сайт или сайт конкурентов, который Вам нравится, сделать похожий и с экономить время и т.д.
									</span>
								</TabPane>
								<TabPane
									tab={<span style={!size ? { fontSize: '18px' } : { fontSize: '24px' }}>Лендинг</span>}
									key={3}
									style={{ color: theme.textColor }}
									className='tab__pane'
								>
									<span style={!size ? { fontSize: '18px' } : { fontSize: '24px' }}>
									Разработаем Лендинг (одностраничный сайт) с(без) дизайнером. Если без дизайнера Вам необходимо будет подготовить красивые картинки товара или услуги. Если не важен индивидульный дизайн и <a href='https://ru.wikipedia.org/wiki/%D0%98%D0%BD%D1%82%D0%B5%D1%80%D1%84%D0%B5%D0%B9%D1%81_(%D0%B7%D0%BD%D0%B0%D1%87%D0%B5%D0%BD%D0%B8%D1%8F)#:~:text=%D0%98%D0%BD%D1%82%D0%B5%D1%80%D1%84%D0%B5%D0%B9%D1%81%20%E2%80%94%20%D1%84%D0%BE%D1%80%D0%BC%D0%B0%2C%20%D0%BC%D0%B5%D1%82%D0%BE%D0%B4%20%D0%BE%D1%80%D0%B3%D0%B0%D0%BD%D0%B8%D0%B7%D0%B0%D1%86%D0%B8%D0%B8%20%D0%B2%D0%B7%D0%B0%D0%B8%D0%BC%D0%BE%D0%B4%D0%B5%D0%B9%D1%81%D1%82%D0%B2%D0%B8%D1%8F,%D0%BF%D1%80%D0%BE%D0%B3%D1%80%D0%B0%D0%BC%D0%BC%D1%8B%20%D0%B8%20%D1%83%D1%81%D1%82%D1%80%D0%BE%D0%B9%D1%81%D1%82%D0%B2%D0%B0%20%D0%B8%20%D1%82.' target='_blank'>интерфейс</a> , то поищите похожие по тематике сайты в Вашем или в другом регионе и сбросите ссылку разработчику, он сделает похожий сайт, а свои шрифты и цвета сайта Вы с ним подберете. Для размещения Вашего лендинга в сети интернет необходим домен (назнавание лендинга, например 'app.by') и хостинг (место в интернете).
									</span>
								</TabPane>
								<TabPane
									tab={<span style={!size ? { fontSize: '18px' } : { fontSize: '24px' }}>Сайт</span>}
									key={4}
									style={{ color: theme.textColor }}
									className='tab__pane'
								>
									<span style={!size ? { fontSize: '18px' } : { fontSize: '24px' }}>
										Разработаем сайт для Вашег бизнеса с(без) дизайнером, с(без) регистрацией и авторизацией, с(без) подключением платежной системы, с(без) выбора языка, с(без) определинием место положения пользователя, с(без) административной панелью, с(без) анимацией, с(без) выбором темы, онлайн чатом и т.д.<br />
										Для размещения Вашего сайта в сети интернет необходим домен (назнавание сайта, например 'app.by') и хостинг (место в интернете). <br />
										Сайт — это визитная карточка компании.Сделаем такой сайт, который заставит Ваших конкурентов желать, чтобы у них был тоже, что и у Вас. 
									</span>
								</TabPane>
								<TabPane
									tab={<span style={!size ? { fontSize: '18px' } : { fontSize: '24px' }}>Интернет магазин</span>}
									key={5}
									style={{ color: theme.textColor }}
									className='tab__pane'
								>
									<span style={!size ? { fontSize: '18px' } : { fontSize: '24px' }}>
										Создадим Ваш интернет-магазин, который будет продавать 24/7, принимать онлайн платежи, иметь настраиваемые варианты доставки, с административной панелью (добавлять, удалять, изменять товар, цену и информацию) собирать данные покупателя, который будет прекрасно работать на мобильном устройстве, будет легкий и удобный в использовании, с поиском  и сортировкой товара, отзывами и характеристиками, рейтингом, рекламами и акциями и т.д. В отличии от сайтов на конструкторах, мы можем добавить любой функционал какой только пожелаете. Для разработки будем использовать самые передовые технологии. <br />
										Для размещения Вашего сайта в сети интернет необходим домен (назнавание сайта, например 'app.by') и хостинг(сервер) (место в интернете).
									</span>
								</TabPane>
								<TabPane
									tab={<span style={!size ? { fontSize: '18px' } : { fontSize: '24px' }}>Корпоротивное приложение</span>}
									key={6}
									style={{ color: theme.textColor }}
									className='tab__pane'
								>
									<span style={!size ? { fontSize: '18px' } : { fontSize: '24px' }}>
									Современные компании понимают, что данные имеют большое значение и для того чтобы их получать, обновлять, правильно структурировать, анализировать необходимо специально разработанное для определенной сферы деятельности или компании корпоративное приложение. Наша команда программистов может разработать его для Вас.
									</span>
								</TabPane>
								<TabPane
									tab={<span style={!size ? { fontSize: '18px' } : { fontSize: '24px' }}>Домен и хостинг</span>}
									key={7}
									style={{ color: theme.textColor }}
									className='tab__pane'
								>
									<span style={!size ? { fontSize: '18px' } : { fontSize: '24px' }}>
									Поможем выбрать домен и хостинг.
									</span>
								</TabPane>
								
							</Tabs>
						</div>
					</article>
				</section>
			</div>
		</main>
	)


}

export default ServicePage