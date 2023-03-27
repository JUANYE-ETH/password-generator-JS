function generatePassword(length) {
	const characters =
		"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_-+=<>?/";
	let password = "";

	for (let i = 0; i < length; i++) {
		const randomIndex = Math.floor(Math.random() * characters.length);
		password += characters[randomIndex];
	}

	return password;
}

document.addEventListener("DOMContentLoaded", () => {
	const generateBtn = document.getElementById("generate-btn");
	const passwordLengthInput = document.getElementById("password-length");
	const passwordOutput = document.getElementById("password-output");

	generateBtn.addEventListener("click", () => {
		const passwordLength = parseInt(passwordLengthInput.value, 10);
		if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
			alert(
				"Please enter a valid password length between 8 and 128 characters."
			);
			return;
		}

		const generatedPassword = generatePassword(passwordLength);
		passwordOutput.value = generatedPassword;
	});
});
