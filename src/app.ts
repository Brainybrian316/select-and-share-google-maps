import axios from 'axios';
const form = document.querySelector('form')! as HTMLFormElement;
const addressInput = document.getElementById('address')! as HTMLInputElement;
const apiKey = process.env.API_KEY!;

import { Loader } from '@googlemaps/js-api-loader';

const loader = new Loader({
	apiKey: apiKey,
	version: 'weekly',
});

loader.load().then(() => {
	new google.maps.Map(document.getElementById('map') as HTMLElement, {
		center: { lat: -34.397, lng: 150.644 },
		zoom: 8,
	});
});

type GoogleGeocodingResponse = {
	results: { geometry: { location: { lat: number; lng: number } } }[];
	status: 'OK' | 'ZERO_RESULTS';
};

function searchAddressHandler(event: Event) {
	event.preventDefault();

	const enteredAddress = addressInput.value;

	axios
		.get<GoogleGeocodingResponse>(
			`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURI(
				enteredAddress,
			)}&key=${apiKey}`,
		)
		.then((response) => {
			if (response.data.status !== 'OK') {
				throw new Error('Could not fetch location!');
			}
			const coordinates = response.data.results[0].geometry.location;
			console.log(coordinates);
		})
		.catch((err) => {
			alert(err.message);
			console.log(err);
		});
}

form.addEventListener('submit', searchAddressHandler);
