import React, { useContext, useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ThemesContext } from "../../themes/themes";
import './MenuBar.css'

const MenuBar = props => {
	const { theme } = useContext(ThemesContext)
	const [isActive, setIsActive] = useState(false)



	return (
		<>
			<div
				className={isActive ? "toggle active" : "toggle"}
				onClick={() => setIsActive(i => !i)}
				style={{color: theme.textColor }}
			>
				<span
					className={!theme.isActive ? "toggle-span active" : "toggle-span"}
				></span>
			</div>


			<section className={isActive ? "navigation active" : "navigation"}>
				<span style={{ "--i": 0 }}></span>
				<span style={{ "--i": 1 }}></span>
				<span style={{ "--i": 2 }}></span>
				<span style={{ "--i": 3 }}></span>

				<ul onClick={() => setIsActive(i => !i)}>
					<li><Link to="/" >Главная</Link></li>
					<li><Link to="/service" >Услуги</Link></li>
					<li><Link to="/about">О компании</Link></li>
					<li><Link to="/contact">Контакты</Link></li>
				</ul>
			</section>
		</>
	)


}

export default MenuBar
