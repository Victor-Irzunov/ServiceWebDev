import { createContext } from "react"


export const themes = {
	ligth: {
		background: '#0a0e1a',
		textColor: '#fff',
		logoColor: "#0f0",
		boxShadowNav: '0px 15px 35px rgba(0,0,0,0.2)',
		borderBottom: '1px solid rgb(185, 178, 178)',
		aside: '#e4e0e0',
		filter: 'invert(1)',
	},
	dark: {
		background: '#fff',
		textColor: '#333',
		logoColor: '#fff',
		boxShadowNav: 'none',
		borderBottom: '1px solid #333',
		aside: '#aea7a7',
		filter: 'invert(0)',
	}
}

export const ThemesContext = createContext(themes.ligth)
