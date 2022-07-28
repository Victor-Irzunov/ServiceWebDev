import React, { useContext} from "react";
import { ThemesContext } from "../../themes/themes";

import './Social.css'


const Social = () => {



	return (
		<div className="icons">
			<a href="https://www.facebook.com/profile.php?id=100050427249731" target="_blank">
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
			<a href="https://web.telegram.org/z/#213696448" target="_blank">
				<div className="layer">
					<span></span>
					<span></span>
					<span></span>
					<span></span>
					<span className="fa fa-telegram"></span>
				</div>
				<div className="text">
					Twitter</div>
			</a>
			<a href="https://www.instagram.com/webproduct_developer" target="_blank">
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
			<a href="https://www.linkedin.com/in/victor-irzunov-0605a2bb" target="_blank">
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
			<a href="#/" target="_blank">
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
