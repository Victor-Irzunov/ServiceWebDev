import React, { useContext } from "react";
import { ThemesContext } from "../../themes/themes";
import './AboutPage.css'
import video from './video/video.mp4'

const AboutPage = props => {
	const theme = useContext(ThemesContext)

	let active = theme.isActive ? 'about-fon active' : 'about-fon'

	return (
		<main className="about"
			style={{ color: theme.textColor }}
		>
			<div className={active}></div>
			<video autoPlay={true} loop muted >
				{/* <source src={video} type='video/mp4' /> */}
				<source src="https://www.thecreativemomentum.com/hubfs/TCMvidStudio-transcode.mp4" type='video/mp4' />
				<source src="https://f.hubspotusercontent20.net/hubfs/1573479/thecreativemomentum/5f52973dcea0aeca06354d4e_TCMvid" type='video/mp4' />
			</video>
			<div className="container-about">

				<section>
					<article style={{ color: theme.textColor }}>
						<div className="about-box box-title">
							<h2
								style={{
								webkitTextStroke: theme.webkitText,
								webkitTextFillColor: theme.webkitTextFull
							}}>О нас</h2>
							<p>Компания&nbsp;
								<span
									style={{
										webkitTextStroke: theme.webkitText,
										webkitTextFillColor: theme.webkitTextFull
									}}
								>
									VI:TECH
								</span> креативное цифровое агенство</p>
						</div>
						<div className="about-box box-content">
							<p>Наша команда разработчиков использует самые современные технологии</p>
						</div>

					</article>
				</section>


			</div>
		</main>
	)


}

export default AboutPage