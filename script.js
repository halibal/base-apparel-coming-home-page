const email = document.getElementById('email');
const alertMessage = document.getElementById('alertMessage');
const exclamationMark = document.querySelector('.exclamationMark');

email.addEventListener('input', validateEmail)

const validMailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

function validateEmail() {
	if (email.value.match(validMailFormat)) {
		email.classList.remove('wrongEmail');
		alertMessage.innerHTML = ``;
		exclamationMark.style.display = "none";
		return true;
	} else {
		email.classList.add('wrongEmail');
		alertMessage.innerHTML = `Please provide a valid email`;
		exclamationMark.style.display = "initial";
		return false;
	}
}


