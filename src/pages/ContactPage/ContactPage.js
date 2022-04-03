import React, { useContext } from "react"
import { ThemesContext } from "../../themes/themes"
// import { Autocomplete } from '../../components/Autocomplete'
import { Map } from '../../components/Map-location/Map'
import contactImg from './image/contactImg.jpeg'
import './ContactPage.css'

const ContactPage = props => {
	const {
		isLoaded,
		// onSelect,
		// toggleMode,
		// clear,
		center,
		centerUser,
		mode,
		markers,
		onMarkerAdd
	} = props
	const theme = useContext(ThemesContext)


	let active = theme.isActive ? 'contact-fon active' : 'contact-fon'

	return (
		<main
			className="contact"
			style={{
				// background: theme.background,
				color: theme.textColor
			}}
		>
			<div className={active}></div>
			<div className="contact-container">
				<section>

				<h2 style={{
								webkitTextStroke: theme.webkitText,
								webkitTextFillColor: theme.webkitTextFull
							}}>Контакты</h2>
					<div className="contact-block">
						<div className="contact-box-1">
							
						</div>

						<div className="contact-box">
							<p>
								<a href="https://www.google.com/maps/place/%D1%83%D0%BB.+%D0%9A%D0%B8%D1%80%D0%B8%D0%BB%D0%BB%D0%B0+%D0%A2%D1%83%D1%80%D0%BE%D0%B2%D1%81%D0%BA%D0%BE%D0%B3%D0%BE+8,+%D0%9C%D0%B8%D0%BD%D1%81%D0%BA/@53.9324022,27.6529473,17z/data=!3m1!4b1!4m5!3m4!1s0x46dbcec3229b25c7:0x79262ca64e8a2271!8m2!3d53.9323991!4d27.655136!5m1!1e1?hl=ru-RUяя"
									title="Наш адрес"
									className="adress"
									style={{
										color: theme.textColor
									}}
								>
									<address>
										<span>
											<i class="fa fa-map-marker" aria-hidden="true" />
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
										<i class="fa fa-mobile" aria-hidden="true" />
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
										<i class="fa fa-envelope-o" aria-hidden="true" />
									</span>
									info.contact.vitech@gmail.com
								</a>
							</p>
						</div>
					</div>

				</section>


			</div>

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

		</main>
	)


}

export default ContactPage