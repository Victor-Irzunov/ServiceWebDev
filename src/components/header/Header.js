import React, { useContext, useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ThemesContext } from "../../themes/themes";
import './Header.css'
import lampOff from './image/bulb-off.png'
import lampOn from './image/bulb-on.png'
// import logo from './image/14.png'
import logo from './image/logo-16.png'

const Header = props => {
	const { toggleTheme } = props
	const theme = useContext(ThemesContext)
	const [logoTechColor, setLogoTechColor] = useState(false)

	const [scroll, setScroll] = useState(0)

	const divRef = useRef()

	let tech = logoTechColor ? 'logo__tech active' : 'logo__tech'

	const indicator = e => {
		divRef.current.style.left = e.offsetLeft + 'px'
		divRef.current.style.width = e.offsetWidth + 'px'
	}

	const handleScroll = () => {
		setScroll(window.scrollY)
	}

	useEffect(() => {
		window.addEventListener("scroll", handleScroll)
		return () => window.removeEventListener("scroll", handleScroll)
	}, [])


	return (
		<header
			className="header"
			style={{
				background: (scroll > 100 ? theme.headerBackground : theme.headerBackgroundScroll),
				color: theme.textColor
			}}
		>
			<div className="container__header">
				<div className={tech}>
					<Link to="/"><img src={logo} className='logo__img' alt="logo" title="Логотип компании"/></Link>
				</div>

				<nav className="nav">
					<ul>
						<li>
							<Link style={{ color: theme.textColor, boxShadow: theme.boxShadowNav }}
								onMouseMove={e => indicator(e.target)}
								to="/">
								Главная
							</Link>
						</li>
						<li>
							<Link style={{ color: theme.textColor, boxShadow: theme.boxShadowNav }}
								onMouseMove={e => indicator(e.target)}
								to="/service">
								Услуги
							</Link>
						</li>
						<li>
							<Link style={{ color: theme.textColor, boxShadow: theme.boxShadowNav }}
								onMouseMove={e => indicator(e.target)}
								to="/about">
								О компании
							</Link>
						</li>
						<li>
							<Link style={{ color: theme.textColor, boxShadow: theme.boxShadowNav }}
								onMouseMove={e => indicator(e.target)}
								to="/contact">
								Контакты
							</Link>
						</li>
						<div id="marker" ref={divRef}></div>
					</ul>
				</nav>

				<a
					href="tel:+375291880022"
					className="header__phone"
					title="Наш рабочий телефон"
					style={{
						webkitTextStroke: theme.webkitText,
						webkitTextFillColor: theme.webkitTextFull
					}}
				>
					+375 29 188-00-22
				</a>

				<button type="button" className="header__btn" onClick={() => {
					toggleTheme()
					setLogoTechColor(i => !i)
				}}>
					<img src={!logoTechColor ? lampOn : lampOff} className='header__theme' alt='lamp' title="Переключение темы" />
				</button>
			</div>
		</header>
	)


}

export default Header
