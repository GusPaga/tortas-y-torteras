import * as yup from 'yup';

const regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü]+$/;
const regexPassword = /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/;

export const validateUser = yup.object({
	firstName: yup
		.string()
		.required('Please enter your name')
		.matches(regexName, 'Please, enter a valid name')
		.min(3, 'Please min 3 characters')
		.max(15, 'Please max 15 characters'),
	lastName: yup
		.string()
		.required('Please enter your last name')
		.matches(regexName, 'Please, enter a valid last name')
		.min(3, 'Please min 3 characters')
		.max(20, 'Please max 20 characters'),
	gender: yup.mixed().oneOf(['male', 'female', 'other']).defined(),
	identityCard: yup
		.number()
		.typeError('you must specify a number')
		.min(5, 'Must be at least 5 digits'),
	typeId: yup.mixed().oneOf(['cc', 'ce', 'passport']).defined(),
	birthDate: yup
		.date()
		.nullable()
		.min(new Date(1900, 0, 1))
		.required('Please, select your birthdate'),
});

export const validateChangePassword = yup.object({
	password: yup
		.string()
		.required('Please choose a password')
		.min(8, 'Please min 8 characters')
		.max(16, 'Please max 16 characters')
		.matches(
			regexPassword,
			'Please *at least one lowercase, *at least one uppercase, *at least one digit'
		),
	c_password: yup
		.string()
		.required('Please enter the password again')
		.oneOf([yup.ref('password'), null], 'Please the passwords must match'),
});
