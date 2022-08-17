const noEmpty = /\S+/;
const letters = /^[a-z]+$/i;
const validateMail =
	/[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{2,5}$/;
const validatePassword =
	/^(?=(?:.*\d))(?=.*[A-Z])(?=.*[a-z])(?=.*[.,*!?¿¡/#$%&])\S{8,64}$/;
/* Al menos un número 0-9
  Al menos una mayúscula
  Al menos una minúscula
  Al menos un carácter especial (.,*!?¿¡/#$%&)
  Longitud mínima de 8 caracteres, 64 máxima
  No acepta espacios */

export const validateRegister = input => {
	const error = {};

	if (
		!noEmpty.test(input.firstName) ||
		!letters.test(input.firstName) ||
		input.firstName.length < 2
	)
		error.firstName = 'First Name is required';
	if (
		!noEmpty.test(input.lastName) ||
		!letters.test(input.lastName) ||
		input.lastName.length < 2
	)
		error.lastName = 'Last Name is required';
	if (!validateMail.test(input.email)) error.email = 'It has to be an email';
	if (!noEmpty.test(input.password) || !validatePassword.test(input.password))
		error.password = 'Requires 8 characters or more';
	if (!noEmpty.test(input.cpassword) || !validatePassword.test(input.cpassword))
		error.cpassword = 'Requires 8 characters or more';

	return error;
};
