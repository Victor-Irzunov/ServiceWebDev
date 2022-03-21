import React, { useContext, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ThemesContext } from "../../themes/themes";
import './Header.css'
import lampOff from './image/bulb-off.png'
import lampOn from './image/bulb-on.png'

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
		<header
			className="header"
			style={{ background: theme.background, color: theme.textColor }}
		>
			<div className="container__header">
				<div className={tech}>
					<span style={{ color: theme.logoColor }}>VI:TECH</span>
				</div>

				<nav className="nav">
					<ul>
						<li><Link style={{ color: theme.textColor, boxShadow: theme.boxShadowNav }} onMouseMove={e => indicator(e.target)} to="/">Главная</Link></li>
						<li><Link style={{ color: theme.textColor, boxShadow: theme.boxShadowNav }} onMouseMove={e => indicator(e.target)} to="/service">Услуги</Link></li>
						<li><Link style={{ color: theme.textColor, boxShadow: theme.boxShadowNav }} onMouseMove={e => indicator(e.target)} to="/price">Цены</Link></li>
						<li><Link style={{ color: theme.textColor, boxShadow: theme.boxShadowNav }} onMouseMove={e => indicator(e.target)} to="/about">О компании</Link></li>
						<li><Link style={{ color: theme.textColor, boxShadow: theme.boxShadowNav }} onMouseMove={e => indicator(e.target)} to="/contact">Контакты</Link></li>
						<div id="marker" ref={divRef}></div>
					</ul>
				</nav>

				<a href="tel:+375333511597" className="header__phone">+375 33 351-15-97</a>

				<button type="button" className="header__btn" onClick={() => {
					toggleTheme()
					setLogoTechColor(i => !i)
				}}>
					<img src={!logoTechColor ? lampOn : lampOff} className='header__theme' alt='lamp' width={'50px'} />
				</button>
			</div>
		</header>
	)


}

export default Header
