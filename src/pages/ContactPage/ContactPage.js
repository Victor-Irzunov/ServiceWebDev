import React, { useContext } from "react";
import { ThemesContext } from "../../themes/themes";
import './ContactPage.css'

const ContactPage = props => {
	const theme = useContext(ThemesContext)



	return (
		<main className="contact" style={{ background: theme.background, color: theme.textColor }}>
			
			<p>ContactPage</p>
		</main>
	)


}

export default ContactPage