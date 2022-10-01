import 'dotenv/config';
import axios from 'axios';

const form = document.querySelector('form')! as HTMLFormElement;
const addressInput = document.getElementById('address')! as HTMLInputElement;
const apiKey = process.env.API_KEY;

function searchAddressHandler(event: Event) {
	event.preventDefault();

	const enteredAddress = addressInput.value;

	axios
		.get(
			`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURI(
				enteredAddress,
			)}&key=${apiKey}`,
		)
		.then((response) => {
			console.log(response);
		})
		.catch((err) => {
			console.log(err);
		});
}

form.addEventListener('submit', searchAddressHandler);
