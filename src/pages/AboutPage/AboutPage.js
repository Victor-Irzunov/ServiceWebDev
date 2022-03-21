import React, { useContext } from "react";
import { ThemesContext } from "../../themes/themes";
import './AboutPage.css'

const AboutPage = props => {
	const theme = useContext(ThemesContext)



	return (
		<main className="about" style={{ background: theme.background, color: theme.textColor }}>
			
			<p>AboutPage</p>
		</main>
	)


}

export default AboutPage