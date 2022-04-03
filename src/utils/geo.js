const defaultCenter = {
	lat: 53.93254575752285,
	lng: 27.655142588360597
}

export const getBrowserLocation = () => {
	return new Promise((resolve, reject) => {
		if ('geolocation' in navigator) {
			navigator.geolocation.getCurrentPosition(pos => {
				const { latitude: lat, longitude: lng } = pos.coords
				resolve({ lat, lng })
				console.log('{ lat, lng }:', { lat, lng })
			},
				() => {
					reject(defaultCenter)
				},
			)
		}
		else {
			reject(defaultCenter)
		}
	})
}