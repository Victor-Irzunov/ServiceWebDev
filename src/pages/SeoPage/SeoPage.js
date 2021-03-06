import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ToTop } from "../../components/toTop/ToTop";
import { ThemesContext } from "../../themes/themes";
import './SeoPage.css'

const SeoPage = props => {
	const { theme } = useContext(ThemesContext)

	let active = theme.isActive ? 'seo-fon active' : 'seo-fon'

	return (
		<main className="seo"
			style={{
				color: theme.textColor
			}}>

			<ToTop />

			<div className={active}></div>
			<div className={theme.isActive ? "seo-container active" : "seo-container"}>
				<section>
					<article className="article">
						<h2 style={{
							color: theme.textH2Main
						}}>
							Чем отличается органическое (SEO) продвижения сайта от контекстной рекламы?
						</h2>
						<p>
							SEO продвижение - это действия направленные для вывода сайта на первые позиции поисковых систем
							Яндекс или Google с целью увеличения посещаемости. Эти позиции нельзя купить, и это не быстрый процесс, занимает примерно 3-6 месяцев, а в некоторых случаях и дольше.<br />
							Органический поиск - для пользователя который ищет например окна ПВХ это результаты без надписи реклама, для владельца сайта это не оплачиваемый результат по данному запросу.<br />
							Контекстная реклама для владельца сайта это платный поиск, оплата снимается за клик (переход на страницу) пользователя. Цена клика определятся через аукцион, кто поставит выше цену (например 30 центов за один клик), того результат будет выше и чаще показываться. Для пользователя все бесплатно.<br />
							<br />
							Вот например некоторые факторы для органического продвижения:
							<ul>
								<li>Уникальный, качественный контент по запросу</li>
								<li>Скорость загрузки сайта</li>
								<li>Время нахождения пользователя на сайте</li>
								<li>Старый или новый домен</li>
							</ul>
							<br />
							Поисковый робот смотрит сайты и те сайты которые наиболее удобные и полезные для пользователя показываются в поисковом запросе первыми, в контекстной рекламе позиция зависит от цены за клик.<br />

							Задача поисковых систем показывать на запрос пользователя наиболее полезный контент.<br /><br />

							Вывод:<br />

							Если нужен быстрый результат и хотелось бы получать прибыль как можно быстрее, то контекстная реклама именно то, что необходимо, а параллельно заниматься SEO продвижением, которое проявит себя на длительной дистанции.
						</p>
						<div className="seo-author">
							<h4>
							Автор: Александр Гис
							</h4>
						</div>
					</article>
					<Link to="/speed-info" className="link-speed">Почему важна скорость загрузки сайта.</Link>
				</section>
			</div>

		</main>
	)
}

export { SeoPage }