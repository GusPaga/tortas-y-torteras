// const noEmpty = /\S+/;
const letters = /^[a-z]+$/i;
const validImage = /.(gif|jpeg|jpg|png)$/i;

export const validateProduct = input => {
	const error = {};

	if (!letters.test(input.name) || input.name.length < 4)
		error.name = 'Name is required. Alphabetic field';
	if (input.description.length > 50 || input.description.length < 5)
		error.description = 'Description cannot be longer than 50 characters';
	if (!validImage.test(input.imageMain))
		error.imageMain = 'This image format is not supported';
	if (input.imageMain.length === 0) error.imageMain = 'Please select an image';
	if (!validImage.test(input.imagesDetail))
		error.imagesDetail = 'This image format is not supported';
	if (input.imageMain.length === 0) error.imageMain = 'Please select an image';
	if (!letters.test(input.artist)) error.artist = 'Artist is required';
	return error;
};
