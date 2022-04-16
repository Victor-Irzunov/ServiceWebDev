import React, { useContext, useRef, useState } from "react"
import { ThemesContext } from "../../themes/themes"
import './FormPhone.css'
import emailjs from '@emailjs/browser'

import mail from '../../emailkey'


const FormPhone = ({ dataModal, setIsModal }) => {
	const { theme } = useContext(ThemesContext)
	const [name, setName] = useState('')
	const [message, setMessage] = useState(dataModal ? `Мой заказ ${dataModal}` : '')
	const [tel, setTel] = useState('')

	const form = useRef()


	const sendEmail = e => {
		e.preventDefault()
		emailjs.sendForm(mail.SERVICE_ID, mail.TEMPLATE_ID, form.current, mail.USER_ID)
			.then(result => {
				alert('Сообщение отправлено')
				setMessage('')
				setName('')
				setTel('')
				setIsModal(false)
			}, (error) => {
				alert('Сообщение не отправилось: ', error.text)
			})
	}


	return (
		<form ref={form} onSubmit={sendEmail} className="contact__form2">
			<div className="form__box">
				<input
					type="text"
					className="name__zone"
					placeholder="Имя *"
					value={name}
					required={true}
					name="user_name"
					onChange={e => setName(e.target.value)}
					style={dataModal ? { color: '#000' } : { color: theme.textColor }}
				/>
				<input
					type="tel"
					className="email__zone"
					placeholder="Ваш Телефон *"
					name="user_email"
					required={true}
					value={tel}
					onChange={e => setTel(e.target.value)}
					style={dataModal ? { color: '#000' } : { color: theme.textColor }}
				/>
			</div>
			<textarea
				className="message__zone"
				placeholder="Сообщение (необязательно)"
				value={message}
				name="message"
				onChange={e => setMessage(e.target.value)}
				style={dataModal ? { color: '#000' } : { color: theme.textColor }}
			></textarea>
			<input type="submit"
				value="Отправить"
				className={theme.isActive ? "btn__form active" : "btn__form"}
				style={dataModal&& {borderRadius: '10px'}}
			/>
		</form>
	)


}

export default FormPhone
