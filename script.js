let url = 'Own-url';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': 'Own-Key',
		'x-rapidapi-host': 'phone-number-validator6.p.rapidapi.co'
	}
};

let display = document.querySelector(".inp");
let button = document.querySelector(".search");
let details = document.querySelector(".details");
let country = document.querySelector("#cou");
let iso = document.querySelector("#iso");
let carrier = document.querySelector("#car");
let invalid = document.querySelector(".invalid");
getData = async() => {
	try {
		const response = await fetch(url, options);
		const result = await response.json();
		if (result.is_valid === true) {
			details.classList.remove("hide");
			country.innerText = result.country_name;
			iso.innerText = result.country_iso;
			carrier.innerText = result.carrier;
			invalid.classList.add("hide");
		}
		else {
			details.classList.add("hide");
			invalid.classList.remove("hide");
		}
	} catch (error) {
		console.error(error);
	}
}

button.addEventListener("click", () => {
	url = `Own-url${display.value}`;
	getData();
})
