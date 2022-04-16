import React, { useContext, useState } from "react"
import { ThemesContext } from "../../themes/themes"
import './Footer.css'
import Social from "../social/Social"
import FormEmail from "../formEmail/FormEmail"
import FormPhone from "../formPhone/FormPhone"


const Footer = () => {
	const { theme } = useContext(ThemesContext)
	const [onMouseOver, setMouseOver] = useState(false)

	const [toggle, setToggle] = useState(false)


	return (
		<footer
			className="footer"
			style={{ background: theme.background, color: theme.textColor }}
		>
			<section>
				<div className="container">
					<div className="footer__block">
						<div className="left__box">
							<h3 style={{ color: theme.textColor }}>Контакты</h3>
							<div
								className={theme.isActive ? 'footer__contact active' : 'footer__contact'}
								onMouseOver={() => setMouseOver(true)}
								onMouseOut={() => setMouseOver(false)}
							>
								<p style={onMouseOver ? { color: theme.footerColor } : null}>
									<a href="https://www.google.com/maps/place/%D1%83%D0%BB.+%D0%9A%D0%B8%D1%80%D0%B8%D0%BB%D0%BB%D0%B0+%D0%A2%D1%83%D1%80%D0%BE%D0%B2%D1%81%D0%BA%D0%BE%D0%B3%D0%BE+8,+%D0%9C%D0%B8%D0%BD%D1%81%D0%BA/@53.9324022,27.6529473,17z/data=!3m1!4b1!4m5!3m4!1s0x46dbcec3229b25c7:0x79262ca64e8a2271!8m2!3d53.9323991!4d27.655136!5m1!1e1?hl=ru-RUяя" target='_blank' rel="noreferrer" title="Наш адрес">
										<span>
											<i class="fa fa-map-marker" aria-hidden="true" />
											г. Минск, ул. К.Туровского дом 8
										</span>
									</a>
								</p>

								<p style={onMouseOver ? { color: theme.footerColor } : null}>
									<a href="tel:+375291880022" title="Наш номер телефона">
										<span>
											<i class="fa fa-mobile" aria-hidden="true" />
										</span>
										+375 29 188-00-22
									</a>
								</p>

								<p>
									<a href="mailto:info.contact.vitech@gmail.com" title="Наша почта">
										<span>
											<i class="fa fa-envelope-o" aria-hidden="true" />
										</span>
										info.contact.vitech@gmail.com
									</a>
								</p>
							</div>
							<Social />
						</div>


						<div className="right__box2">

							<div className="right-title">
								<h3
									style={!toggle ? { color: theme.textColor } : { color: '#cebfbf' }}
									onClick={() => setToggle(i => !i)}
								>
									Написать нам
								</h3>
								<h3
									style={toggle ? { color: theme.textColor } : { color: '#cebfbf' }}
									onClick={() => setToggle(i => !i)}
								>
									Вам перезвонить
								</h3>
							</div>


							<div className={toggle ? "footer__sendmail active" : "footer__sendmail"}>
								{!toggle ?
									<FormEmail />
									:
									<FormPhone />
								}
							</div>
						</div>
					</div>
					<p className='copirait' >Copyright © 2018-2022 | Created & Designed By <span style={{
						webkitTextStroke: theme.webkitText,
						webkitTextFillColor: theme.webkitTextFull,
						color: theme.footerLogo,
					}}>VI:TECH</span></p>
				</div>
			</section>
		</footer>
	)


}

export default Footer
