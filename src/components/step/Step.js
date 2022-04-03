import React, { useContext, useState } from "react";
import { ThemesContext } from "../../themes/themes";
import './Step.css'


const Step = props => {
	const { toggleTheme } = props
	const theme = useContext(ThemesContext)

	const [classBox1, setClassBox1] = useState(false)
	const [classBox2, setClassBox2] = useState(false)
	const [classBox3, setClassBox3] = useState(false)
	const [classBox4, setClassBox4] = useState(false)



	return (
		<section>
			<div className="main__step">
				<div className="container">
					<section className="step">
						<h2>Как мы работаем</h2>

						<div className="step__box">
							<div
								className={classBox1 ? "box shadow3 active" : "box shadow3"}
								onClick={() => setClassBox1(i => !i)}
							>
								<p>Шаг 1</p>
								<i className="fa fa-coffee" aria-hidden="true" />
								<p>Встречаемся, общаемся</p>
							</div>

							<div
								className={classBox2 ? "box shadow3 active" : "box shadow3"}
								onClick={() => setClassBox2(i => !i)}
							>
								<p>Шаг 2</p>
								<i className="fa fa-list-alt" aria-hidden="true" />
								<p>Разработка плана, стоимости и сроков</p>
							</div>

							<div
								className={classBox3 ? "box shadow3 active" : "box shadow3"}
								onClick={() => setClassBox3(i => !i)}
							>
								<p>Шаг 3</p>
								<i className="fa fa-file-image-o" aria-hidden="true" />
								<p>Дизайн, разработка и тестирование</p>
							</div>

							<div
								className={classBox4 ? "box shadow3 active" : "box shadow3"}
								onClick={() => setClassBox4(i => !i)}
							>
								<p>Шаг 4</p>
								<i className="fa fa-rocket" aria-hidden="true" />
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
