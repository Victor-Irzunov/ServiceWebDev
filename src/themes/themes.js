import React, { createContext } from "react"


export const themes = {
	ligth: {
		background: '#000',
		textColor: '#fff',
		logoColor: "#0f0",
		boxShadowNav: '0px 15px 35px rgba(0,0,0,0.2)',
	},
	dark: {
		background: '#fff',
		textColor: '#000',
		logoColor: '#fff',
		boxShadowNav: 'none',
	}
}

export const ThemesContext = createContext(themes.ligth)
