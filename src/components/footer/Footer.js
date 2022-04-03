import React, { useContext, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ThemesContext } from "../../themes/themes";
import './Footer.css'
import emailjs from '@emailjs/browser';

import mail from '../../emailkey'


const Footer = props => {
	const theme = useContext(ThemesContext)
	const [email, setEmail] = useState('')
	const [name, setName] = useState('')
	const [message, setMessage] = useState('')
	const [onMouseOver, setMouseOver] = useState(false)

	const form = useRef()


	const sendEmail = (e) => {
		e.preventDefault();
		console.log('form.current:', form.current)
		emailjs.sendForm(mail.SERVICE_ID, mail.TEMPLATE_ID, form.current, mail.USER_ID)
			.then((result) => {
				alert('Сообщение отправлено')
				setEmail('')
				setMessage('')
				setName('')
			}, (error) => {
				alert('Сообщение не отправилось: ', error.text)

			});
	};


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
								className={theme.isActive ? 'footer__contact active': 'footer__contact'}
								onMouseOver={() => setMouseOver(true)}
								onMouseOut={() => setMouseOver(false)}
							>
								<p style={onMouseOver ? { color: theme.footerColor } : null}>
									<a href="https://www.google.com/maps/place/%D1%83%D0%BB.+%D0%9A%D0%B8%D1%80%D0%B8%D0%BB%D0%BB%D0%B0+%D0%A2%D1%83%D1%80%D0%BE%D0%B2%D1%81%D0%BA%D0%BE%D0%B3%D0%BE+8,+%D0%9C%D0%B8%D0%BD%D1%81%D0%BA/@53.9324022,27.6529473,17z/data=!3m1!4b1!4m5!3m4!1s0x46dbcec3229b25c7:0x79262ca64e8a2271!8m2!3d53.9323991!4d27.655136!5m1!1e1?hl=ru-RUяя" title="Наш адрес">
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
						</div>
						<div className="right__box2">
							<h3 style={{ color: theme.textColor }}>Написать нам</h3>
							<div className="footer__sendmail">
								<form ref={form} onSubmit={sendEmail} className="contact__form">
									<div className="form__box">
										<input
											type="text"
											className="name__zone"
											placeholder="Имя"
											value={name}
											required={true}
											name="user_name"
											onChange={e => setName(e.target.value)}
											style={{ color: theme.textColor }}
										/>
										<input
											type="email"
											className="email__zone"
											placeholder="Ваш Email"
											name="user_email"
											required={true}
											value={email}
											onChange={e => setEmail(e.target.value)}
											style={{ color: theme.textColor }}
										/>
									</div>
									<textarea
										className="message__zone"
										placeholder="Сообщение"
										value={message}
										name="message"
										onChange={e => setMessage(e.target.value)}
										style={{ color: theme.textColor }}
									></textarea>
									<input type="submit"
										value="Отправить"
										className="btn__form"
									/>
								</form>
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
