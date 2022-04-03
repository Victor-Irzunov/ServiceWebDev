import React from "react"
import { Marker } from '@react-google-maps/api'


export const LocationMarker = ({ position }) => {
	return <Marker
		position={position}
		icon={{ url: '/map-marker.png' }}
		label={{ text: `Мы здесь`, fontSize: '2em', color: 'white' }}
	/>
}