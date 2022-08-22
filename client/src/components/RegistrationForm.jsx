import axios from 'axios';
import { useState, useEffect } from 'react';
import { validateRegister } from '../validations/registerValidation';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import '../components/RegistrationForm.css';

const RegistrationForm = () => {
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
		if (!input.email || !!Object.keys(error).length)
			alert('Some fields are missing');
		else if (input.password !== cpassword)
			alert('Incorrect password. They must be the same!');
		else {
			try {
				await axios.post('http://localhost:3001/users/signup', input);
				setInput({
					name: '',
					lastname: '',
					email: '',
					password: '',
				});
				setCpassword('');
				alert('User Created');
			} catch (error) {
				alert('User email already exists');
				console.log(error);
			}
		}
	};

	useEffect(() => {}, []);

	return (
		<div className='min-h-screen w-full'>
			<form onSubmit={handleSubmit} className='relative w-2/5 min-h-55vh justify-evenly py-[20px 10px] bg-white my-[50px] mx-auto flex flex-col'>
				<Typography component='h1' variant='h5' align="center">
					Sign Up
				</Typography>

				<div className='flex'>
					<div className="md:w-1/2 px-3 mb-6 md:mb-0">
						<TextField
							margin='normal'
							required
							fullWidth
							id='name'
							label='First Name'
							name='name'
							autoComplete='name'
							autoFocus
							onChange={handleChange}
						/>
						{error.name && <div className="text-red-500 text-xs italic">{error.name}</div>}
					</div>

					<div className="md:w-1/2 px-3 mb-6 md:mb-0">
						<TextField
							margin='normal'
							required
							fullWidth
							id='lastname'
							label='Last Name'
							name='lastname'
							autoComplete='lastname'
							autoFocus
							onChange={handleChange}
						/>
						{error.lastname && <div className="text-red-500 text-xs italic">{error.lastname}</div>}
					</div>
				</div>

				<div className="px-3 mb-6 md:mb-0">
					<TextField
						margin='normal'
						required
						fullWidth
						id='email'
						label='Email Address'
						name='email'
						autoComplete='email'
						autoFocus
						onChange={handleChange}
					/>
					{error.email && <div className="text-red-500 text-xs italic">{error.email}</div>}
				</div>

				<div className='flex'>
					<div className="md:w-1/2 px-3 mb-6 md:mb-0">
						<div className="dialog">
							<TextField
								margin='normal'
								required
								fullWidth
								name='password'
								label='Password'
								type='password'
								id='password'
								autoComplete='current-password'
								onChange={handleChange}
							/>
							{error.password && <div className="text-red-500 text-xs italic">{error.password}</div>}
						</div>
					</div>

					<div className="md:w-1/2 px-3 mb-6 md:mb-0">
						<TextField
							margin='normal'
							required
							fullWidth
							name='cpassword'
							label='Confirm password'
							type='password'
							id='cpassword'
							autoComplete='current-password'
							onChange={handleChange}
						/>
					</div>
				</div>

				<div className="px-3 mb-6 md:mb-0">
					<Button
						type='submit'
						fullWidth
						variant='contained'
						sx={{ mt: 3, mb: 2 }}
					>
						Register
					</Button>
				</div>
			</form>
		</div>
	);
};

export default RegistrationForm;
