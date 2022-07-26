import React, { useContext, useRef, useState } from "react"
import { ThemesContext } from "../../themes/themes"
import './FormEmail.css'
import emailjs from '@emailjs/browser'

import mail from '../../emailkey'


const FormEmail = () => {
	const { theme } = useContext(ThemesContext)
	const [email, setEmail] = useState('')
	const [name, setName] = useState('')
	const [message, setMessage] = useState('')

	const form = useRef()


	const sendEmail = e => {
		e.preventDefault()
		emailjs.sendForm(mail.SERVICE_ID, mail.TEMPLATE_ID, form.current, mail.USER_ID)
			.then(result => {
				alert('Сообщение отправлено')
				setEmail('')
				setMessage('')
				setName('')
			}, (error) => {
				console.log('-----', error)
				alert('Сообщение не отправилось: ', error.text)
			})
	}


	return (
		<form ref={form} onSubmit={sendEmail} className="contact__form">
			<div className="form__box">
				<input
					type="text"
					className="name__zone"
					placeholder="Имя *"
					value={name}
					required={true}
					name="user_name"
					onChange={e => setName(e.target.value)}
					style={{ color: theme.textColor }}
				/>
				<input
					type="email"
					className="email__zone"
					placeholder="Ваш Email *"
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
				className={theme.isActive ? "btn__form active" : "btn__form"}
			/>
		</form>
	)


}

export default FormEmail
