import React, { useEffect } from "react"
import usePlacesAutocomplete, {
	getGeocode,
	getLatLng,
} from "use-places-autocomplete";
import useOnclickOutside from "react-cool-onclickoutside";
import './Autocomplete.css'


export const Autocomplete = ({ isLoaded, onSelect }) => {

	const {
		ready,
		value,
		suggestions: { status, data },
		setValue,
		init,
		clearSuggestions,
	} = usePlacesAutocomplete({
		initOnMount: false,
		debounce: 300,
	});
	const ref = useOnclickOutside(() => {
		// When user clicks outside of the component, we can dismiss
		// the searched suggestions by calling this method
		clearSuggestions();
	});

	const handleInput = (e) => {
		// Update the keyword of the input element
		setValue(e.target.value);
	};

	const handleSelect =
		({ description }) =>
			() => {
				// When user selects a place, we can replace the keyword without request data from API
				// by setting the second parameter to "false"
				setValue(description, false);
				clearSuggestions();

				// Get latitude and longitude via utility functions
				getGeocode({ address: description })
					.then((results) => getLatLng(results[0]))
					.then(({ lat, lng }) => {
						console.log("📍 Coordinates: ", { lat, lng });
						onSelect({ lat, lng })
					})
					.catch((error) => {
						console.log("😱 Error: ", error);
					});
			};

	const renderSuggestions = () =>
		data.map((suggestion) => {
			const {
				place_id,
				structured_formatting: { main_text, secondary_text },
			} = suggestion

			return (
				<li key={place_id} className='list-item' onClick={handleSelect(suggestion)}>
					<strong>{main_text}</strong> <small>{secondary_text}</small>
				</li>
			)
		})

	useEffect(() => {
		if (isLoaded) { init() }
	}, [isLoaded, init])

	return (
		<div className="autocomplite" ref={ref}>
			<input
				type="text"
				className="autocomplite-input"
				value={value}
				onChange={handleInput}
				disabled={!ready}
				placeholder="Поиск"
			/>
			{status === "OK"
				&& <ul className="suggestion">
					{renderSuggestions()}
				</ul>
			}
		</div>
	)
}