import React, { useContext } from "react";
import { ThemesContext } from "../../themes/themes";
import './AboutPage.css'
import face from './image/face.png'
import logo2 from './image/about-logo.png'
import video from './video/video.mp4'

const AboutPage = props => {
	const { theme } = useContext(ThemesContext)

	let active = theme.isActive ? 'about-fon active' : 'about-fon'

	return (
		<main className="about"
			style={{ color: theme.textColor }}
		>
			<div className={active}></div>
			<video autoPlay={true} loop muted >
				<source src={video} type='video/mp4' />
				{/* <source src="https://www.thecreativemomentum.com/hubfs/TCMvidStudio-transcode.mp4" type='video/mp4' /> */}
				{/* <source src="https://f.hubspotusercontent20.net/hubfs/1573479/thecreativemomentum/5f52973dcea0aeca06354d4e_TCMvid" type='video/mp4' /> */}
			</video>
			<div className="container-about">

				<section>
					<article style={{ color: theme.textColor }}>

						<div className="about-block">

							<div className="box-title">
								<h2
									style={{
										color: theme.textColor
									}}>
									О нас
								</h2>

								<h3>Компания <img src={logo2} alt='Создать сайт логотип компании' title="Создать сайт логотип компании" className='about-logo' /> креативное цифровое агенство</h3>
								<div className="about-content">
									<p>Наша команда разработчиков использует самые современные технологии.<br /> Нас выбирают не только потому что мы быстро и качественно выполняем свою работу и главное в срок, но и потому что мы внимательно и с пониманием относимся к пожиланиям заказчиков, а ещё мы
										дарим 2 бесплатных месяца на изменение и дороботку лендингов, сайтов и приложений.
									</p>
								</div>
							</div>

						</div>


						<div className="box-face">
							<div className="box-face-foto">
								<div className="face">
									<img src={face} alt='Создать сайт лицо руководителя' title="Создать сайт лицо руководителя" className='face-foto' />

								</div>



								<div className="box-face-content">
									<div className="b-tooltip">
										<p>Приветствую Вас на нашем сайте!<br />
											Меня зовут Виктор Ирзунов, я руководитель компании VI:TECH.<br />
											Меня важно знать, что Вы думаете о нас!<br />
											Ниже способы связи со мной.
											Пожалуйста, просто напишите мне!
										</p>
										<p></p>
									</div>
								</div>





							</div>
							<div className="box-face-text">

							</div>
						</div>


					</article>
				</section>


			</div>
		</main >
	)


}

export default AboutPage