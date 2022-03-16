import React, {createContext} from "react"


export const themes = {
	ligth: {
		background: '#000',
		textColor:'#fff',
	},
	dark: {
		background: '#fff',
		textColor:'#000',
	}
}

export const ThemesContext = createContext(themes.ligth)
