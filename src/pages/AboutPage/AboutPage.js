import React, { useContext, useState } from "react";
import { ThemesContext } from "../../themes/themes";
import './AboutPage.css'
import face from './image/face.png'
import video from './video/about-video.mp4'
import background from './image/background.webp'
import Modal from '../../components/modal/Modal';

const AboutPage = () => {
	const { theme } = useContext(ThemesContext)
	const [isModal, setIsModal] = useState(false)
	const [dataModal, setDataModal] = useState('')

	let active = theme.isActive ? 'about-fon active' : 'about-fon'

	return (
		<>
			{isModal && <Modal dataModal={dataModal} setIsModal={setIsModal} title={'Написать руководителю компании'} />}
			<main className="about"
				style={{ color: theme.textColor }}
			>
				<div className={active}></div>
				<video
					autoPlay
					playsInline
					muted
					loop
					defaultMuted
					poster={background}

				>
					<source src={video} type='video/mp4' />
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

									<h3>Компания <span>vi:tech</span> креативное цифровое агенство</h3>
									<div className="about-content">
										<p>Наша команда разработчиков использует самые современные технологии.<br /> Нас выбирают не только потому что мы быстро и качественно выполняем свою работу и главное в срок, но и потому что мы внимательно и с пониманием относимся к пожиланиям заказчиков, а ещё мы
											дарим 2 бесплатных месяца на изменение и доработку лендингов, сайтов и приложений.
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
												Мне важно знать, что Вы думаете о нас!<br />
												Пожалуйста, просто напишите мне!
											</p>
											<p>
												<button
													className="about-send"
													style={{
														color: theme.textColor
													}}
													onClick={() => {
														setDataModal('Напишите мне')
														setIsModal(i => !i)
													}}>
													Написать
													<span><i class="fa fa-paper-plane-o" aria-hidden="true" /></span>
												</button>
											</p>
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
		</>
	)


}

export default AboutPage