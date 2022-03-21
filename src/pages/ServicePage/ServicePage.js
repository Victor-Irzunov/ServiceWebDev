import React, { useContext } from "react";
import { ThemesContext } from "../../themes/themes";
import './ServicePage.css'

const ServicePage = props => {
	const theme = useContext(ThemesContext)



	return (
		<main className="service" style={{ background: theme.background, color: theme.textColor }}>
			
			<p>ServicePage</p>
		</main>
	)


}

export default ServicePage