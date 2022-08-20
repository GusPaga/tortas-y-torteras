import axios from 'axios';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getColors } from '../redux/actions';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import { validateProduct } from '../validations/productValidation';
import '../components/ProductForm.css';

const ProductForm = () => {
	const { redColors } = useSelector(state => state);
	const [queryColors, setQueryColors] = useState([]);
	const [stock, setStock] = useState({
		cakeTrail: '',
		turntable: '',
	});
	const dispatch = useDispatch();
	const [input, setInput] = useState({
		name: '',
		description: '',
		imageMain: '',
		imagesDetail: [],
		collection: '',
		artist: '',
		stock: [
			{ quantity: 0, productTypeName: "Cake Tray" },
      { quantity: 0, productTypeName: "Turntable" }
		],
		colors: [],
	});

	const countSelected = () => {
		const checked = document.querySelectorAll('.checked');
		const btnText = document.querySelector('.btn-text');
		checked.length
			? (btnText.innerText = `${checked.length} Selected`)
			: (btnText.innerText = 'Select Color');
	};

	const handleOnClickDiv = () => {
		dispatch(getColors());
		document.querySelector('.select-btn').classList.toggle('open');
	};

	const OnClickItem = e => {
		const li = // si el click es en algun span, el elemento es li
			e.target.classList[0] === 'item' ? e.target : e.target.parentElement;
		li.classList.toggle('checked');
		try {
			li.classList[1]
				? setQueryColors([...queryColors, li.childNodes[1].innerText])
				: setQueryColors(
						queryColors.filter(e => e !== li.childNodes[1].innerText)
				);
		} catch (error) {
			console.log(error);
		}
		countSelected();
	};

	const [error, setError] = useState({});

	const handleChange = e => {
		setInput({
			...input,
			[e.target.name]: e.target.value,
		});
		setError(
			validateProduct({
				...input,
				[e.target.name]: e.target.value,
			})
		);
	};

	const handleChangeImages = e => {
		if(input.imagesDetail.includes(e.target.value)) {alert('Image exists already')}
		else {
			setInput({
				...input,
				imagesDetail: [...input.imagesDetail, e.target.value]
			})
		};
	};

	const handleChangeStock = e => {
		if (e.target.value < 0) return alert('negative quantity not allowed');
		setStock({ ...stock, [e.target.name]: Number(e.target.value) });
	};

	/* const juancho = { ...input };
	console.log(juancho);
	juancho.ProductTypes[0].Stocks.quantity = types['Cake Tray'];
	juancho.ProductTypes[1].Stocks.quantity = types.Turntable; */

	const handleSubmit = async e => {
		e.preventDefault();
		const newProduct = { ...input };
		newProduct.stock[0].quantity = stock.cakeTrail;
		newProduct.stock[1].quantity = stock.turntable;
		console.log(newProduct);
		if (!newProduct.name || !!Object.keys(error).length)
			alert('Some fields are missing');
		try {
			await axios.post('http://localhost:3001/product', newProduct);
		} catch (error) {}
	};

	useEffect(() => {}, []);

	return (
		<div className='productFormContainer'>
			<form onSubmit={handleSubmit}>
				<span className='uppercase tracking-wide text-black text-center text-lg font-bold mb-2'>
					Product Form
				</span>

				<label className='uppercase tracking-wide text-black text-xs font-bold mb-2'>
					Name
				</label>
				{error.name && <span className="text-red-500 text-xs italic">{error.name}</span>}
				<input
					type='text'
					className='w-full bg-gray-100 text-black border border-gray-200 rounded-md py-1 px-4 mb-3'
					name='name'
					placeholder='Name...'
					value={input.name}
					onChange={handleChange}
				/>

				<label className='uppercase tracking-wide text-black text-xs font-bold mb-2'>
					Description
				</label>
				{error.description && <span className="text-red-500 text-xs italic">{error.description}</span>}
				<input
					type='text'
					className='w-full bg-gray-100 text-black border border-gray-200 rounded-md py-1 px-4 mb-3'
					name='description'
					placeholder='Description...'
					value={input.description}
					onChange={handleChange}
				/>

				<label className='uppercase tracking-wide text-black text-xs font-bold mb-2'>
					Image Main
				</label>
				{error.imageMain && <span className="text-red-500 text-xs italic">{error.imageMain}</span>}
				<input
					type='file'
					className='w-full bg-gray-100 text-black border border-gray-200 rounded-md py-1 px-4 mb-3'
					name='imageMain'
					placeholder='Image main...'
					value={input.imageMain}
					onChange={handleChange}
				/>

				<label className='uppercase tracking-wide text-black text-xs font-bold mb-2'>
					Images Details
				</label>
				{error.imagesDetail && <span className="text-red-500 text-xs italic">{error.imagesDetail}</span>}
				<input
					type='file'
					className='w-full bg-gray-100 text-black border border-gray-200 rounded-md py-1 px-4 mb-3'
					name='imagesDetail'
					placeholder='Images...'
					multiple
					onChange={handleChangeImages}
				/>

				<label className='uppercase tracking-wide text-black text-xs font-bold mb-2'>
					Collection
				</label>
				<FormControl>
					<RadioGroup
						row
						aria-labelledby='demo-row-radio-buttons-group-label'
						name='collection'
						onChange={handleChange}
					>
						<FormControlLabel
							value='abstract'
							control={<Radio />}
							label='Abstract'
						/>
						<FormControlLabel
							value='flowers'
							control={<Radio />}
							label='Flowers'
						/>
						<FormControlLabel
							value='butterflies'
							control={<Radio />}
							label='Butterflies'
						/>
						<FormControlLabel value='other' control={<Radio />} label='Other' />
					</RadioGroup>
				</FormControl>

				<label className='uppercase tracking-wide text-black text-xs font-bold mb-2'>
					Cake Trail Stock:
				</label>
				<input
					type='number'
					className='w-full bg-gray-100 text-black border border-gray-200 rounded-md py-1 px-4 mb-3'
					name='cakeTrail'
					placeholder='1, 2 or more...'
					value={stock.cakeTrail}
					onChange={handleChangeStock}
				/>

				<label className='uppercase tracking-wide text-black text-xs font-bold mb-2'>
					Turntable Stock:
				</label>
				<input
					type='number'
					className='w-full bg-gray-100 text-black border border-gray-200 rounded-md py-1 px-4 mb-3'
					name='turntable'
					placeholder='1, 2 or more...'
					// value={input.stock[1].quantity}
					value={stock.turntable}
					onChange={handleChangeStock}
				/>

				<label className='uppercase tracking-wide text-black text-xs font-bold mb-2'>
					Artist
				</label>
				{error.artist && <span className="text-red-500 text-xs italic">{error.artist}</span>}
				<input
					type='text'
					className='w-full bg-gray-100 text-black border border-gray-200 rounded-md py-1 px-4 mb-3'
					name='artist'
					placeholder='Artist...'
					value={input.artist}
					onChange={handleChange}
				/>

				<label className='uppercase tracking-wide text-black text-xs font-bold mb-2'>
					Colors
				</label>
				<div onClick={handleOnClickDiv} className='select-btn'>
					<span className='btn-text'>Select Color </span>
					<span className='filter'>
						<i className='fa-solid fa-paintbrush'></i>
					</span>
				</div>
				<ul className='list-items'>
					{redColors.map(c => (
						<li key={c.id} className='item' name='colors' onClick={OnClickItem}>
							<span
								className='checkbox'
								style={{
									backgroundColor: `${c.hex}`,
									borderColor: `${c.hex}`,
								}}
							>
								<i className='fa-solid fa-check check-icon'></i>
							</span>
							<span id={`item${c.id}`} className='item-text'>
								{c.name}
							</span>
						</li>
					))}
				</ul>

				<input
					type={'submit'}
					value='Add product'
					className='uppercase tracking-wide text-black text-sm font-bold mb-2 border-solid border-1 border-indigo-600/60 rounded-md'
				/>
			</form>
		</div>
	);
};

export default ProductForm;
