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
					<div className="article">
						<h2 style={{
							color: theme.textH2Main
						}}>
							Что необходимо для органического (SEO) продвижения сайта?
						</h2>
						<p>Органический поиск – это выдача поисковых систем (Яндекс, Google и т.д.), которая формируется поисковыми роботами на основе поисковых алгоритмов, и результаты которой нельзя выкупить у поисковика, в отличие от контекстной рекламы.

							<p>
								Organic – это очень важный канал, т.к. в большинстве случаев он является либо основным, либо одним из основных каналов привлечения посетителей, как по их количеству, так и по их качеству.
							</p>

							<p>
								<h3>Настройка систем аналитики</h3>
								<h4>На сайте должен быть:</h4>
								<ul>
									<li>установлен счетчик Яндекс Метрики;</li>
									<li>установлен счетчик Google Analytics;</li>
									<li>в системах аналитики настроены цели;</li>
									<li>настроен Яндекс Вебмастер;</li>
									<li>настроен Google Console.</li>
								</ul>

								<h3>Индексация страниц в поисковых системах</h3>
								<ul>
									<li>проверьте индексацию сайта в Google;</li>
									<li>индексацию сайта в Яндексе;</li>
									<li>в Яндекс и Google должно быть проиндексировано одинаковое количество страниц;</li>
									<li>в индексе поисковых систем не должно быть копий сайта (например: проверить, закрыты ли от индексации тестовые домены);</li>
									<li>среди исключенных из индекса страниц не должно быть продвигаемых;</li>
									<li>в индексе поисковых систем и на сайте не должно быть дублей страниц.</li>
								</ul>

								<h3>Технические факторы</h3>
								<ul>
									<li>проверьте, корректно ли настроен robots.txt;</li>
									<li>проверьте, корректно ли настроен файл sitemap.xml (карта сайта);</li>
									<li>проверьте, как настроены канонические страницы;</li>
									<li>проверьте, как настроены страниц пагинации;</li>
									<li>на продвигаемом сайте не должно быть битых ссылок;</li>
									<li>на продвигаемом сайте должны отсутствовать циклические ссылки;</li>
									<li>не должно быть лишних редиректов;</li>
									<li>должны быть настроены заголовки Last Modified и If-Modified-Since;</li>
									<li>должны быть настроены ЧПУ (человеко-понятные урлы);</li>
									<li>должны быть в URL не должны использоваться заглавные буквы;</li>
									<li>не должно быть ошибок сервера;</li>
									<li>не должно быть ошибок верстке сайта;</li>
									<li>на сайте должна быть внедрена микроразметка;</li>
									<li>на сайте должна быть внедрена Open Graph разметка;</li>
									<li>скорость загрузки сайта должна быть высокая;</li>
									<li>сайт должен иметь адаптивный дизайн, мобильную версию или динамическую верстку;</li>
									<li>на сайте должен использоваться атрибут rel=alternate, указывающий на соответствующую мобильную версию страницы;</li>
									<li>сайт должен корректно отображаться в разных браузерах;</li>
									<li>сервер должен выдерживать нагрузку;</li>
									<li>проверьте разметку локализованных страниц - на страницах, имеющих различные языковые версии, должны быть указаны адреса всех языковых версий с атрибутом rel=«alternate» hreflang=«x»;</li>
									<li>на сайте, конечно, же не должно быть вирусов и вредоносного кода;</li>
									<li>документы не должны весить не больше 10 МБ.</li>
								</ul>

								<h3>Внутренняя оптимизация сайта</h3>
								<ul>
									<li>проверьте оптимизацию title — он обязательно должен быть уникальным для каждой страницы, 12 слов или 140 символов, основные ключи нужно вынести в начало;</li>
									<li>проверьте оптимизацию мета-тега Description - длина 60-200 символов;</li>
									<li>проверьте заполнение тега Keywords;</li>
									<li>проверьте оптимизацию заголовков H1, H2, H3;</li>
									<li>распределение ссылочного веса в пользу важных страниц;</li>
									<li>проверьте, нет ли на сайте так называемых «висячих узлов». «Висячие узлы» — это ссылки из-за которых статический вес утекает в никуда, например, кнопки лидогенерации, активные кнопки для связи, ссылки на непродвигаемые документы и pdf-файлы);</li>
									<li>на сайте должны быть реализованы «хлебные крошки» (строка навигации);</li>
									<li>на сайте должна быть корректно сделана внутренняя перелинковка контента;</li>
									<li>на сайте не должно быть скрытого текста;</li>
									<li>проверьте в Яндекс.Вебмастере, сформированы ли быстрые ссылки;</li>
									<li>проверьте названия изображений на сайте — имя файла должно быть осмысленным и соответствовать содержанию картинки (например, «otdelka_fasada.jpg», а не «1111.jpg»);</li>
									<li>у изображений должны быть атрибуты alt и title;</li>
									<li>на всех страницах сайта с протоколом HTTPS весь контент должен передаваться только по HTTPS протоколу.</li>
								</ul>
								<h3>Семантическое ядро и ключевые слова</h3>
								<ul>
									<li>ключевые запросы должны быть собраны из разных источников;</li>
									<li>должны быть собраны собраны подсказки в Яндекс и Google;</li>
									<li>должны быть собраны учтены синонимы LSI-слова, частотные жаргонные выражения, ошибки, сокращения или возможные варианты названий;</li>
									<li>семантическое ядро сайта должно быть всегда актуальное (его периодически, не реже раз в год) нужно обновлять;</li>
									<li>из семантического ядра должны быть исключены нецелевые запросы;</li>
									<li>обязательно должна быть проведена кластеризация семантического ядра — группировка слов, которые должны продвигаться на отдельных страницах;</li>
									<li>все ключевые запросы должны быть поделены на информационные и коммерческие.</li>
								</ul>

								<h3>Коммерческие факторы оптимизации</h3>
								<ul>
									<li>опубликуйте на сайте информацию о компании;</li>
									<li>добавьте сведения о доставке и оплате;</li>
									<li>не забудьте про клиентскую поддержку;</li>
									<li>разместите данные о гарантийном сроке и возврате товара;</li>
									<li>не следует указывать на сайте рекламу сторонних веб-ресурсов;</li>
									<li>расскажите об акциях и скидках;</li>
									<li>также можно добавить информацию о возможности покупки товара в кредит;</li>
									<li>помните: чем больше ассортимент товара на сайте, тем лучше;</li>
									<li>возможность перейти в корзину должна быть с любой страницы;</li>
									<li>разместите юридические реквизиты (ИНН/КПП/ОГРН);</li>
									<li>опубликуйте лицензии и сертификаты;</li>
									<li>откройте доступ к регистрации пользователей через социальные сети;</li>
									<li>обязательно наличие https-протокола (подписанного SSL-сертификата);</li>
									<li>для мультирегиональных сайтов необходима опция «Выбрать город»;</li>
									<li>электронная почта должна быть на собственном домене.</li>
								</ul>

								<h3>На сайте нужно указать максимальное количество вариантов связи</h3>
								<ul>


									<li>онлайн-связь (Skype, WhatsApp, Viber, Telegram и т.п);</li>
									<li>телефон — идеально номер, который начинается с 8-800… (добавить и в шапку, и в подвал/футер сайта);</li>
									<li>онлайн-консультант;</li>
									<li>форма обратной связи;</li>
									<li>опция «Заказать звонок/перезвонить мне» (добавить в шапку сайта).</li>
								</ul>

								<h3>Оптимизация карточки товара для интернет-магазина</h3>
								<h4>Что должно быть в карточке товара:</h4>
								<ul>
									<li>информация о цене и оплате;</li>
									<li>информация о наличии/статусе товара;</li>
									<li>информация о сроках и стоимости доставки товара;</li>
									<li>подробное текстовое описание товара;</li>
									<li>вопрос-ответ о товаре;</li>
									<li>технические характеристики товара;</li>
									<li>отзывы и оценки;</li>
									<li>фотографии;</li>
									<li>видео (хорошая возможность уникализации карточки товара, если нет уникальных описаний);</li>
									<li>разнообразие вариантов заявок (корзина + быстрый заказ);</li>
									<li>информация о бренде/производителе;</li>
									<li>возможность добавить каждый товар в избранное или поделиться им в соцсетях.</li>
								</ul>

								<h3>Внешние факторы оптимизации сайта</h3>
								<ul>
									<li>на сайт должны быть ссылки с других сайтов;</li>
									<li>ссылочная масса должна быть не хуже, чем у конкурентов;</li>
									<li>все ссылки можно найти в инструментах для вебмастеров (все ссылки должны видеть поисковые системы);</li>
									<li>страницы, с которых есть ссылки на ваш сайт, должны быть проиндексированы поисковыми системами;</li>
									<li>в анкор-листе должен отсутствовать спам;</li>
									<li>нельзя использовать ссылки с сайтов запрещенных тематик или с подозрительными анкорами;</li>
									<li>ссылки с других сайтов не должны вести на несуществующие страницы;</li>
									<li>пользуйтесь бесплатными способами получения ссылок;</li>
									<li>пользуйтесь социальными сигналами и крауд-маркетингом;</li>
									<li>должны быть упоминания бренда в интернете;</li>
									<li>избегайте «линкопомоек» и скрытых ссылок на сайте;</li>
									<li>избегайте ссылок с АГС-сайтов и явных SEO-ссылок.</li>
								</ul>

								<h3>Проверьте на наличие фильтров поисковых систем</h3>
								<ul>
									<li>в Яндекс Вебмастер и Google Console нет предупреждений;</li>
									<li>нет аффилированных сайтов;</li>
									<li>тексты не перенасыщены ключевыми словами;</li>
									<li>нет рекламы или ее немного.</li>
								</ul>
								<h3>Региональное продвижение</h3>
								<ul>
									<li>в отзывах и кейсах заказчиков укажите населенные пункты;</li>
									<li>добавьте на сайт региональные страницы;</li>
									<li>добавьте сайт в справочник Яндекса и Google Мой Бизнес;</li>
									<li>добавьте ссылки на сайт с региональных площадок;</li>
									<li>используйте инструмент Geositemap (для Google можно сгенерировать специальный файл в формате KML, который будет указывать точное местонахождение ваших филиалов — готовый файл необходимо поместить в корневую папку сайта, а в sitemap.xml указать ссылку на него);</li>
									<li>откройте доступность страниц для робота вне зависимости от его IP — если на сайте настроена геолокация, то разные версии контента показываются в зависимости от региона пользователя (например, если робот зашел на сайт с московского IP-адреса, то он может не проиндексировать контент для Новосибирска), поэтому необходимо сделать весь контент доступным для поисковых роботов;</li>
									<li>привяжите сайт к региону через Яндекс.Вебмастер.</li>
								</ul>

								<h3>Проанализируйте поведенческие факторы, к которым относят:</h3>
								<ul>
									<li>отказы;</li>
									<li>глубину просмотра сайта (количество страниц, посещенных пользователем за сеанс);</li>
									<li>время, проведенное на сайте;</li>
									<li>CTR на поиске;</li>
									<li>возвраты на поиск и возвраты на сайт из поиска;</li>
									<li>шеринги в социальные сети.</li>
								</ul>

								<h4>Проведите работу над улучшением поведенческих факторов:</h4>
								<ul>
									<li>время на сайте должно быть не меньше, чем у конкурентов;</li>
									<li>определите точки входа с высоким показателем отказов по целевым запросам, проанализируйте их и попробуйте найти причину плохих показателей;</li>
									<li>основные блоки информации нужно разместить на привычных местах;</li>
									<li>сайт нужно адаптировать под мобильные устройства.</li>
									<li>сниппеты должны быть привлекательны;</li>
									<li>страницы входа должны соответствовать запросу;</li>
									<li>шрифты должны легко читаться.</li>
								</ul>

								<h3>Геосервисы и локальное продвижение</h3>
								Это стратегия поисковой оптимизации, которая помогает добиться высоких позиций в выдаче по геозависимым запросам — где уточнен город, район или просто местоположение пользователя.

								<h4>Для локального продвижения потребуется:</h4>
								<ul>
									<li>«засветиться» на местных новостных сайтах - можно воспользоваться специальными сервисами, в числе которых Pressfeed.ru и PRNEWS.io;</li>
									<li>включить геозапросы в Title и Description;</li>
									<li>добавить информацию на Яндекс.Карты;</li>
									<li>зарегистрировать сайт в Яндекс Справочнике;</li>
									<li>зарегистрировать сайт на 2GiS;</li>
									<li>зарегистрировать сайт на Google My Business;</li>
									<li>зарегистрировать сайт на Maps.me;</li>
									<li>зарегистрироваться в локальных каталогах, городских справочниках, тематических агрегаторах;</li>
									<li>сделать виртуальный тур по вашему магазину / заведению / офису и загрузить его на Google Maps;</li>
									<li>сделать правильную микроразметку сайта — в структуре сниппета указать физический адрес организации, телефон с опцией быстрого звонка, рейтинг и отзывы о компании;</li>
									<li>создать контент для сайта согласно локальным запросам
										указать адрес на страничках в соцсетях;</li>
									<li>учесть гео-запросы при составлении семантического ядра.</li>
								</ul>
							</p>
						</p>

					</div>
					<Link to="/speed-info" className="link-speed">Почему важна скорость загрузки сайта.</Link>
				</section>
			</div>

		</main>
	)


}

export { SeoPage }