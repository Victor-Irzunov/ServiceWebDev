import React, { useContext, useRef, useState } from "react";
import { ThemesContext } from "../../themes/themes";
import './Header.css'

const Header = props => {
	const { toggleTheme } = props
	const theme = useContext(ThemesContext)
	const [logoTechColor, setLogoTechColor] = useState(false)
	const divRef = useRef()

	let tech = logoTechColor ? 'logo__tech active' : 'logo__tech'

	const indicator = e => {
		divRef.current.style.left = e.offsetLeft + 'px'
		divRef.current.style.width = e.offsetWidth + 'px'
	}


	return (
		<header className="header" style={{ background: theme.background, color: theme.textColor }}>

			<div className={tech}>
				<span style={{ color: theme.logoColor }}>VI:TECH</span>
			</div>
			<nav className="nav">
				<ul>
					<li><a style={{ color: theme.textColor, boxShadow: theme.boxShadowNav }} onMouseMove={e => indicator(e.target)} href="#">Главная</a></li>
					<li><a style={{ color: theme.textColor, boxShadow: theme.boxShadowNav }} onMouseMove={e => indicator(e.target)} href="#">Услуги</a></li>
					<li><a style={{ color: theme.textColor, boxShadow: theme.boxShadowNav }} onMouseMove={e => indicator(e.target)} href="#">Цены</a></li>
					<li><a style={{ color: theme.textColor, boxShadow: theme.boxShadowNav }} onMouseMove={e => indicator(e.target)} href="#">О компании</a></li>
					<li><a style={{ color: theme.textColor, boxShadow: theme.boxShadowNav }} onMouseMove={e => indicator(e.target)} href="#">Контакты</a></li>
					<div id="marker" ref={divRef}></div>
				</ul>
			</nav>


			<button type="button" onClick={() => {
				toggleTheme()
				setLogoTechColor(i => !i)
			}}>toggleTheme</button>

			<p className="header__phone">+375 33 351-15-97</p>
		</header>
	)


}

export default Header
