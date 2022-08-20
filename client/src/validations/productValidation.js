const noEmpty = /\S+/;
const letters = /^[a-z]+$/i;
const oneDecimal = /^-?(?:\d+(?:,\d*)?)$/;

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
	if (!noEmpty.test(input.stock) || isNaN(parseInt(input.stock)))
		error.stock = 'Stock is required and must be numerical';
	if (
		!noEmpty.test(input.price) ||
		isNaN(parseInt(input.price) || !oneDecimal.test(input.price))
	)
		error.price = 'Price is required and can be decimal number';
};
