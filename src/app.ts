import axios from 'axios';

const form = document.querySelector('form')! as HTMLFormElement;
const addressInput = document.getElementById('address')! as HTMLInputElement;
const apiKey = process.env.API_KEY;

type GoogleGeocodingResponse = {
	results: { geometry: { location: { lat: number; lng: number } } }[];
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
			const coordinates = response.data.results[0].geometry.location;
		})
		.catch((err) => {
			console.log(err);
		});
}

form.addEventListener('submit', searchAddressHandler);
