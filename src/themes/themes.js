import { createContext } from "react"


export const themes = {
	ligth: {

		background: '#fff',
		headerBackground: '#f0eeeee6',
		headerBackgroundScroll: '#f0eeee00',
		textColor: '#000',
		textColorMain: 'transparent',
		footerLogo: 'transparent',
		textH2Main:'#000',
		logoColor: '#fff',
		boxShadowNav: 'none',
		borderBottom: '1px solid #333',
		borderBottomFooter: '1px solid rgba(25, 25, 25, 0.18)',
		aside: '#aea7a7',
		filter: 'invert(0)',
		footerColor: '#7a8392',
		tabs: '#333',
		webkitText: '1px rgba(0,0,0,0.5)',
		webkitTextFull: 'rgba(0,0,0,0.1)',
		isActive: false,
	},
	dark: {

		background: '#0a0e1a',
		headerBackground: '#0a0e1ae6',
		headerBackgroundScroll: '#0a0e1a00',
		textColor: '#fff',
		textColorMain: 'transparent',
		footerLogo: '#0cf2ff',
		textH2Main:'#0cf2ff',
		logoColor: "#00bcd4",
		boxShadowNav: '0px 15px 35px rgba(0,0,0,0.2)',
		borderBottom: '1px solid rgb(185, 178, 178)',
		borderBottomFooter: '1px solid #1a1a1a ',
		aside: '#e4e0e0',
		filter: 'invert(1)',
		footerColor: '#fff',
		tabs: '#00bcd4',
		webkitText: '',
		webkitTextFull: '',
		isActive: true,
	}
}

export const ThemesContext = createContext(themes.dark)


//#0cf2ff