import { createContext } from "react"


export const themes = {
	ligth: {
		background: '#000',
		textColor: '#fff',
		logoColor: "#0f0",
		boxShadowNav: '0px 15px 35px rgba(0,0,0,0.2)',
		borderBottom: '1px solid #fff',
	},
	dark: {
		background: '#fff',
		textColor: '#333',
		logoColor: '#fff',
		boxShadowNav: 'none',
		borderBottom: '1px solid #333',
	}
}

export const ThemesContext = createContext(themes.ligth)
