import React, {useEffect, useState } from "react";
import './ToTop.css'


const ToTop = () => {
	const [scrollTop, setScrollTop] = useState(false)

	useEffect(() => {
		window.addEventListener("scroll", function () {
			setScrollTop(i => !i)
		})
		return () => window.removeEventListener("scroll", function () {
			setScrollTop(i => !i)
		})
	}, [])


	function scrollToTop() {
		window.scrollTo({
			top: 0,
			behavior: 'smooth'
		})
	}
	let toTop = (window.scrollY > 450) ? 'scroll-top active' : 'scroll-top'

	return (
		<div className={toTop} onClick={scrollToTop}>
			<span
				className="top-text"
			>
				Наверх
			</span>
			<span className="top-icon">
				<i
					className="fa fa-arrow-up"
					aria-hidden="true"
				/>
			</span>
		</div>
	)


}

export { ToTop }
