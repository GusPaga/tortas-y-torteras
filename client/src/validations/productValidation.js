const noEmpty = /\S+/;
const letters = /^[a-z]+$/i;

export const validateProduct = input => {
	const error = {};

	if (
		!noEmpty.test(input.name) ||
		!letters.test(input.name) ||
		input.name.length < 4
	)
		error.name = 'Name is required';
	if (!noEmpty.test(input.description) || input.description.length > 50)
		error.description =
			'Description is requiredDescription cannot be longer than 50 characters';
};
