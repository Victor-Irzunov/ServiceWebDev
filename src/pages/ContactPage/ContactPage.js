import React, { useContext, useState } from "react"
import { ThemesContext } from "../../themes/themes"
import { getBrowserLocation } from "../../utils/geo"
// import { Autocomplete } from '../../components/Autocomplete'
import { Map } from '../../components/Map-location/Map'
import contactIcon from './image/contact-icon.png'
import './ContactPage.css'



const defaultCenter = {
	lat: 53.9327511,
	lng: 27.6551419
}

const ContactPage = (props) => {
	const {
		isLoaded,
		// onSelect,
		// toggleMode,
		// clear,




		center,
		// centerUser,


		mode,
		markers,
		onMarkerAdd,
	} = props
	const { theme } = useContext(ThemesContext)
	const [actionToggle, setActionToggle] = useState(false)
	const [isOpenMap, setIsOpenMap] = useState(false)


	// let active = theme.isActive ? 'contact-fon active' : 'contact-fon'

	const [centerUser, setCenterUser] = useState({})

	const mapOn = () => {
		getBrowserLocation()
			.then(curLoc => {
				setCenterUser(curLoc)
			})
			.catch(defaultLocation => {
				setCenterUser(defaultLocation)
			})
	}

	return (
		<main
			className="contact"
			style={{
				// background: theme.background,
				color: theme.textColor
			}}
		>
			<div className={theme.isActive ? 'contact-fon active' : 'contact-fon'}></div>




			<div className={actionToggle ? "action active" : "action"}
				onClick={() => setActionToggle(i => !i)}
			>
				<span className="contact-span">+</span>
				<ul className="contact-ul">
					<li><i className="fa fa-telegram" aria-hidden="true" />Facebook</li>
					<li><i className="fa fa-instagram" aria-hidden="true" />Twitter</li>
					<li><i className="fa fa-youtube" aria-hidden="true" />Instagram</li>
					<li><i className="fa fa-linkedin" aria-hidden="true" />Linkded</li>
				</ul>
			</div>


			<div className="contact-container">
				<section className={theme.isActive ? '' : 'contact-active'}>

					<h2
						style={{
							color: theme.textColor
						}}
					>
						Контакты
					</h2>
					<div className="contact-block">
						<div className="contact-box-1">
							{!theme.isActive && <img
								src={contactIcon}
								className='contact-img'
								alt="Сделать сайт картинка контакты"
								title="Сделать сайт фон картинка контакты"
							/>}
							{theme.isActive &&
								<div className='contact-text'>
									<div className="contact-text-text">
										<h3>Позвоните нам и мы <br /> проконсультируем Вас <br /> по срокам и цене.</h3>
										<p>Мы работаем <br />
											Понедельник - пятница <br />
											c 9:00 - 19:00
										</p>
									</div>
								</div>
							}


						</div>

						<div className="contact-box">
							<div className="contact-box-box">
								<p>
									<a href="https://www.google.com/maps/place/%D1%83%D0%BB.+%D0%9A%D0%B8%D1%80%D0%B8%D0%BB%D0%BB%D0%B0+%D0%A2%D1%83%D1%80%D0%BE%D0%B2%D1%81%D0%BA%D0%BE%D0%B3%D0%BE+8,+%D0%9C%D0%B8%D0%BD%D1%81%D0%BA/@53.9324022,27.6529473,17z/data=!3m1!4b1!4m5!3m4!1s0x46dbcec3229b25c7:0x79262ca64e8a2271!8m2!3d53.9323991!4d27.655136!5m1!1e1?hl=ru-RUяя"
										title="Наш адрес"
										target='_blank'
										rel="noreferrer"
										className="adress"
										style={{
											color: theme.textColor
										}}
									>
										<address>
											<span>
												<i className="fa fa-map-marker" aria-hidden="true" />
											</span>
											г. Минск: ул. К.Туровского 8
										</address>
									</a>
								</p>

								<p>
									<a href="tel:+375291880022"
										className="contact-phone"
										title="Наш номер телефона"
										style={{
											color: theme.textColor
										}}
									>
										<span>
											<i className="fa fa-mobile" aria-hidden="true" />
										</span>
										+375 29 188-00-22
									</a>
								</p>

								<p>
									<a href="mailto:info.contact.vitech@gmail.com"
										title="Наша почта"
										className="contact-mail"
									>
										<span>
											<i className="fa fa-envelope-o" aria-hidden="true" />
										</span>
										info.contact.vitech@gmail.com
									</a>
								</p>

							</div>
						</div>


					</div>


				</section>

				<div className="open-map">
					<button
						className="open"
						onClick={() => {
							mapOn()
							setIsOpenMap(i => !i)

						}}

					>
						<svg width="277" height="62">
							<defs>
								<linearGradient id="grad1">
									<stop offset="0%" stopColor="#af1be3" />
									<stop offset="100%" stopColor="#f81b9f" />
								</linearGradient>
							</defs>
							<rect x="5" y="5" rx="25" fill="none" stroke="url(#grad1)" width="266" height="50"></rect>
						</svg>
						<span>{!isOpenMap ? 'Открыть карту' : 'Закрыть карту'}</span>
					</button>
				</div>


			</div>



			<div className={isOpenMap ? "map-block" : "map-block active"}>
				{isLoaded
					? <Map
						center={center}
						centerUser={centerUser}
						mode={mode}
						markers={markers}
						onMarkerAdd={onMarkerAdd}

					// isLoaded={isLoaded}
					// onSelect={onSelect}
					// toggleMode={toggleMode}
					// clear={clear}
					/>
					: <h2>Loading</h2>
				}
			</div>
		</main>
	)


}

export default ContactPage