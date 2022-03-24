import React, { useContext, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ThemesContext } from "../../themes/themes";
import './Footer.css'


const Footer = props => {
	const { toggleTheme } = props
	const theme = useContext(ThemesContext)


	return (
		<footer
			className="footer"
			style={{ background: theme.background, color: theme.textColor }}
		>
			<section>
				<div className="container">
					<div className="footer__block">
						<div className="left__box">
							<h3>Контакты</h3>
							<div className="footer__contact">

							</div>
						</div>
						<div className="right__box2">
							<h3>Написать нам</h3>
							<div className="footer__sendmail">

							</div>
						</div>
					</div>
				</div>
			</section>
		</footer>
	)


}

export default Footer
