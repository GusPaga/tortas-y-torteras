import axios from 'axios';
import { useState, useEffect } from 'react';
import { validateRegister } from '../validations/registerValidation';
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
			<form onSubmit={handleSubmit} className='relative w-2/5 min-h-75vh flex flex-col justify-evenly py-[20px 10px] bg-white my-[50px] mx-auto'>
				<span className='uppercase tracking-wide text-black text-center text-lg font-bold mb-2'>Sign Up</span>

				<label className='uppercase tracking-wide text-black text-xs font-bold mb-2 inline-block'>First Name</label>
				{error.name && <div className="text-red-500 text-xs italic">{error.name}</div>}
				<input
					type='text'
					className='w-full bg-gray-100 text-black border border-gray-200 rounded-md py-1 px-4 mb-3'
					name='name'
					placeholder='Name...'
					value={input.name}
					onChange={handleChange}
				/>

				<label className='uppercase tracking-wide text-black text-xs font-bold mb-2'>Last Name</label>
				{error.lastname && <div className="text-red-500 text-xs italic">{error.lastname}</div>}
				<input
					type='text'
					className='w-full bg-gray-100 text-black border border-gray-200 rounded-md py-1 px-4 mb-3'
					name='lastname'
					placeholder='LastName...'
					value={input.lastname}
					onChange={handleChange}
				/>

				<label className='uppercase tracking-wide text-black text-xs font-bold mb-2'>Email</label>
				{error.email && <div className="text-red-500 text-xs italic">{error.email}</div>}
				<input
					type='email'
					className='w-full bg-gray-100 text-black border border-gray-200 rounded-md py-1 px-4 mb-3'
					name='email'
					placeholder='Email...'
					value={input.email}
					onChange={handleChange}
				/>

				<label className='uppercase tracking-wide text-black text-xs font-bold mb-2'>Password</label>
				{error.password && <div className="text-red-500 text-xs italic">{error.password}</div>}
				<div className='dialog'>
					<input
						type='password'
						className='w-full bg-gray-100 text-black border border-gray-200 rounded-md py-1 px-4 mb-3'
						name='password'
						placeholder='Password...'
						value={input.password}
						onChange={handleChange}
					/>
				</div>

				<label className='uppercase tracking-wide text-black text-xs font-bold mb-2'>Confirm password</label>
				<input
					type='password'
					className='w-full bg-gray-100 text-black border border-gray-200 rounded-md py-1 px-4 mb-3'
					name='cpassword'
					placeholder='Confirm password...'
					value={cpassword}
					onChange={handleChange}
				/>

				<input type={'submit'} value='Register' className='uppercase tracking-wide text-black text-sm font-bold mb-2 border-solid border-1 border-indigo-600/60 rounded-md' />
			</form>
		</div>
	);
};

export default RegistrationForm;
