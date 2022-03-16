import React, { useContext } from "react";
import { ThemesContext } from "../../themes/themes";
import './Main.css'

const Main = props => {
	const { toggleTheme } = props
	const theme = useContext(ThemesContext)



	return (
		<div className="main" style={{ background: theme.background, color: theme.textColor }}>
			<button type="button" onClick={toggleTheme} >toggleTheme</button>
			<p>Lorem</p>
		</div>
	)


}

export default Main
