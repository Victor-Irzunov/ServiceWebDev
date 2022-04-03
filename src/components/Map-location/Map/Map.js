import React, { useContext, useRef, useCallback,} from "react"
import { GoogleMap } from '@react-google-maps/api'
import { ThemesContext } from "../../../themes/themes"
import { LocationMarker } from "../LocationMarker"
import { defaultThemeMap } from "./ThemeMap"
import { Marker } from "../Marker"
import './Map.css'
import { LocationMarkerUser } from "../LocationMarkerUser"
// import{Autocomplete}from'../Autocomplete'


const containerStyle = {
	width: '100%',
	height: '400px'
}

const defaultOption = {
	// panControl: true,
	// zoomControl: true,
	// mspTypeControl: false,
	// scaleControl: false,
	// streetViewControl: false,
	// rotateControl: false,
	// clickableIcons: false,
	keyboardShortcuts: false,
	// scrollwhell: false,
	// disableDoubleClickZoom: false,
	// fullscreenControl: false,
	styles: defaultThemeMap,
}

export const MODES = {
	MOVE: 0,
	SET_MARKER: 1,
}



const Map = props => {
	const { center, centerUser, mode, markers, onMarkerAdd, isLoaded, onSelect, toggleMode, clear } = props
	const theme = useContext(ThemesContext)
	const useMap = useRef(undefined)



	const onLoad = useCallback(function callback(map) {
		useMap.current = map
	}, [])

	const onUnmount = useCallback(function callback(map) {
		useMap.current = undefined
	}, [])


	const onClick = useCallback(loc => {
		if (mode === MODES.SET_MARKER) {
			const lat = loc.latLng.lat()
			const lng = loc.latLng.lng()
			onMarkerAdd({ lat, lng })
		}
	}, [mode, onMarkerAdd])

	return (
		<main className="map"
			style={{ background: theme.background, color: theme.textColor }}
		>


			{/* <div className='address-search'>
				<Autocomplete
					isLoaded={isLoaded}
					onSelect={onSelect}
				/>
				<button
					className="markers"
					onClick={toggleMode}
				>
					Поставить метку
				</button>
				<button
					className="markers"
					onClick={clear}
				>
					Убрать метку
				</button>
			</div> */}


			<GoogleMap
				mapContainerStyle={containerStyle}
				center={center}
				zoom={10}
				onLoad={onLoad}
				onUnmount={onUnmount}
				options={defaultOption}
				onClick={onClick}
			>

				<LocationMarker position={center} />
				<LocationMarkerUser position={centerUser} />


				{markers.map((pos, idx) => {
					return <Marker position={pos} key={idx} />
				})}
			</GoogleMap>
		</main>
	)


}

export { Map }