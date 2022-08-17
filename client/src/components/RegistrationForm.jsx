import axios from 'axios';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { validateRegister } from '../validations/registerValidation';
import '../components/RegistrationForm.css';

const RegistrationForm = () => {
	const users = useSelector(state => state);
	const history = useHistory();
	const [input, setInput] = useState({
		name: '',
		lastname: '',
		email: '',
		password: '',
	});
	const [error, setError] = useState({});
	const [cpassword, setCpassword] = useState('');

	const handleChange = e => {
		if (e.target.name === 'cpassword') setCpassword(e.target.value);
		else {
			setInput({
				...input,
				[e.target.name]: e.target.value,
			});
			setError(
				validateRegister({
					...input,
					[e.target.name]: e.target.value,
				})
			);
		}
	};

	const handleSubmit = async e => {
		e.preventDefault();
		// const existUser = users?.filter(u => u.email === input.email);
		if (!input.email || !!Object.keys(error).length)
			alert('Some fields are missing');
		else if (input.password !== cpassword)
			alert('Incorrect password. They must be the same!');
		else {
			// console.log(input);
			try {
				await axios.post('http://localhost:3001/users/signup', input);
				setInput({
					name: '',
					lastname: '',
					email: '',
					password: '',
				});

				alert('User Created');
			} catch (error) {
				alert('User email already exists');
				console.log(error);
			}
			// history.push('/');
		}
	};

	useEffect(() => {}, []);

	return (
		<div className='registrationFormContainer'>
			<form onSubmit={handleSubmit}>
				<span className='registrationFormHeader'>Registration Form</span>

				<label>First Name</label>
				<input
					type='text'
					name='name'
					placeholder='Name...'
					value={input.name}
					onChange={handleChange}
				/>
				{error.name && <div className={'danger'}>{error.name}</div>}

				<label>Last Name</label>
				<input
					type='text'
					name='lastname'
					placeholder='LastName...'
					value={input.lastname}
					onChange={handleChange}
				/>
				{error.lastname && <div className={'danger'}>{error.lastname}</div>}

				<label>Email</label>
				<input
					type='email'
					name='email'
					placeholder='Email...'
					value={input.email}
					onChange={handleChange}
				/>
				{error.email && <div className={'danger'}>{error.email}</div>}

				<label>Password</label>
				<div className='dialog'>
					<input
						type='password'
						name='password'
						placeholder='Password...'
						value={input.password}
						onChange={handleChange}
					/>
				</div>
				{error.password && <div className={'danger'}>{error.password}</div>}

				<label>Confirm password</label>
				<input
					type='password'
					name='cpassword'
					placeholder='Confirm password...'
					value={cpassword}
					onChange={handleChange}
				/>
				{error.cpassword && <div className={'danger'}>{error.cpassword}</div>}

				<input type={'submit'} value='Register' />
			</form>
		</div>
	);
};

export default RegistrationForm;
