import React from "react"
import { Marker } from '@react-google-maps/api'


export const LocationMarkerUser = ({ position }) => {
	return <Marker
		position={position}
		// icon={{ url: '/map-marker.svg' }}
		label={{ text: 'Вы здесь', fontSize: '2em', color: '#0f0' }}
	/>
}