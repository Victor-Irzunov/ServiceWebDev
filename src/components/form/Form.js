import React, { useContext, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ThemesContext } from "../../themes/themes";
import './Form.css'


const Form = props => {
	const { toggleTheme } = props
	const theme = useContext(ThemesContext)



	return (
		<section>
			<div className="form">
				<h4>Form</h4>
			</div>
		</section>
	)


}

export default Form
