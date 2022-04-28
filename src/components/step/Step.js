import React, { useContext } from "react";
import { ThemesContext } from "../../themes/themes";
import './Step.css'


const Step = () => {
	const { theme } = useContext(ThemesContext)

	return (
		<section>
			<div className={!theme.isActive ? "main__step active" : "main__step"}>
				<div className="container">
					<section className="step">
						<h2>Как мы работаем</h2>

						<div className="step__box">
							<div
								className={theme.isActive ? "box shadow3 active" : "box shadow3"}
							>
									<p>Шаг 1</p>
									<i className="fa fa-coffee" aria-hidden="true" />
									<p>Мы слушаем Ваши пожелания</p>
							</div>

							<div
								className={theme.isActive ? "box shadow3 active" : "box shadow3"}
							>
								<p>Шаг 2</p>
								<i className="fa fa-list-alt" aria-hidden="true" />
								<p>Разработка плана, стоимости и сроков</p>
							</div>

							<div
								className={theme.isActive ? "box shadow3 active" : "box shadow3"}
							>
								<p>Шаг 3</p>
								<i
									className="fa fa-file-image-o active"
									aria-hidden="true"
								/>
								<p>Дизайн, разработка и тестирование</p>
							</div>

							<div
								className={theme.isActive ? "box shadow3 active" : "box shadow3"}
							>
								<p>Шаг 4</p>
								<i
									className="fa fa-rocket" aria-hidden="true" />
								<p>Запуск</p>
							</div>
						</div>

					</section>

				</div>

			</div>
		</section>
	)


}

export default Step
