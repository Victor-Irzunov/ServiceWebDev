import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemesContext } from "../../themes/themes";
import './ErrorPage.css'

const ErrorPage = props => {
	const theme = useContext(ThemesContext)



	return (
		<main className="error" style={{ background: theme.background, color: theme.textColor }}>

			<h2>Error not found page</h2>
			<p>вернутся на гланую <Link to='/'>Главная</Link></p>
		</main>
	)


}

export default ErrorPage