import React, { useContext } from "react";
import { ThemesContext } from "../../themes/themes";
import './Main.css'

const Main = props => {
	const theme = useContext(ThemesContext)



	return (
		<main className="main" style={{ background: theme.background, color: theme.textColor }}>
			
			<p>main</p>
		</main>
	)


}

export default Main
