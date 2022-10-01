const form = document.querySelector('form')! as HTMLFormElement;
const addressInput = document.getElementById('address')! as HTMLInputElement;

function searchAddressHandler(event: Event) {
	event.preventDefault();

	const enteredAddresst = addressInput.value;

	//send to gogle api
}

form.addEventListener('submit');
