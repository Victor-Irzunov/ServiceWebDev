import React, { useContext} from "react";
import { ThemesContext } from "../../themes/themes";

import './Social.css'


const Social = () => {



	return (
		<div className="icons">
			<a href="#/">
				<div className="layer">
					<span></span>
					<span></span>
					<span></span>
					<span></span>
					<span className="fa fa-facebook-f"></span>
				</div>
				<div className="text">
					Facebook</div>
			</a>
			<a href="#/">
				<div className="layer">
					<span></span>
					<span></span>
					<span></span>
					<span></span>
					<span className="fa fa-twitter"></span>
				</div>
				<div className="text">
					Twitter</div>
			</a>
			<a href="#/">
				<div className="layer">
					<span></span>
					<span></span>
					<span></span>
					<span></span>
					<span className="fa fa-instagram"></span>
				</div>
				<div className="text">
					Instagram</div>
			</a>
			<a href="#/">
				<div className="layer">
					<span></span>
					<span></span>
					<span></span>
					<span></span>
					<span className="fa fa-linkedin"></span>
				</div>
				<div className="text">
					Linkedin</div>
			</a>
			<a href="#/">
				<div className="layer">
					<span></span>
					<span></span>
					<span></span>
					<span></span>
					<span className="fa fa-youtube"></span>
				</div>
				<div className="text">
					YouTube</div>
			</a>
		</div>
	)


}

export default Social
