import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getColors, getFilteredData } from '../redux/actions';

const Sidebar = () => {
	const dispatch = useDispatch();
	const { redColors } = useSelector(state => state);
	const [queryColors, setQueryColors] = useState([]);
	const [filter, setFilter] = useState({
		inStock: true,
		coll1: true,
		coll2: true,
		coll3: true,
		coll4: true,
	});

	const handleOnClick = () => {
		!redColors.length && dispatch(getColors());
		document.querySelector('#colors').classList.toggle('hidden');
		document.querySelector('#arr-clr').classList.toggle('rotate-180');
	};

	const handleOnClickColors = e => {
		if (e.target.checked) {
			if (queryColors.length === 3) return;
			setQueryColors([...queryColors, e.target.name]);
			e.target.parentNode.style.backgroundColor = e.target.name;
		} else {
			setQueryColors(queryColors.filter(color => color !== e.target.name));
			e.target.parentNode.style.backgroundColor = '';
		}
	};

	const handleonClickFilter = e => {
		setFilter({ ...filter, [e.target.name]: e.target.checked });
	};

	const makeQuery = () => {
		const queryString = `?
		${queryColors[0] ? `color1=${queryColors[0]}&` : ''}
		${queryColors[1] ? `color2=${queryColors[1]}&` : ''}
		${queryColors[2] ? `color3=${queryColors[2]}&` : ''}
		${filter.coll1 ? `collection1=Abstract&` : ''}
		${filter.coll2 ? `collection2=Flowers&` : ''}
		${filter.coll3 ? `collection3=Butterflies&` : ''}
		${filter.coll4 ? `collection4=Other&` : ''}
		stock=${filter.inStock}
		`.replace(/\s/g, '');
		console.log(queryString);
		dispatch(getFilteredData(queryString));
	};

	return (
		<div>
			<div
				id='sidebar'
				className=' fixed top-0 bottom-0 p-2 w-[300px] overflow-y-auto text-center bg-[rgba(0,0,0,0.9)]
				'
			>
				<div className='text-gray-100 text-xl'>
					<div className='p-2.5 mt-1 flex items-center'>
						<i className='bi bi-filter-left px-2'></i>
						<h1 className='text-gray-200 text-md ml-3' onClick={makeQuery}>
							Filter
						</h1>
						<i
							className='bi bi-x ml-20 cursor-pointer'
							onClick={() =>
								document.querySelector('#sidebar').classList.toggle('hidden')
							}
						></i>
					</div>
					<hr className='my-2 text-neutral-100' />
				</div>

				<div className='p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer bg-neutral-900 text-white'>
					<i className='bi bi-search text-sm'></i>
					<input
						type='text'
						placeholder='Search'
						className='text-md ml-4 w-full bg-transparent focus:outline-none'
					/>
				</div>

				{/* On Stock */}
				<div
					className='p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white'
					onClick={() => {
						document.querySelector('#onStock').classList.toggle('hidden');
						document.querySelector('#arr-sock').classList.toggle('rotate-180');
					}}
				>
					<i className='bi bi-chat-left-text-fill'></i>
					<div className='flex justify-between w-full items-center'>
						<span className='text-md ml-4 text-gray-200'>Avaibility</span>
						<span className='text-sm rotate-180' id='arr-sock'>
							<i className='bi bi-chevron-down'></i>
						</span>
					</div>
				</div>

				<div className='text-left text-sm font-thin mt-2 w-4/5 mx-auto text-gray-200'>
					<div className='form-check form-switch cursor-pointer p-2 hover:bg-gray-700 rounded-md mt-1 ml-10'>
						<input
							className='form-check-input appearance-none rounded-full   bg-gray-300 cursor-pointer'
							type='checkbox'
							role='switch'
							name='inStock'
							onClick={handleonClickFilter}
							defaultChecked={filter.inStock}
						/>
						<label
							className='form-check-label inline-block text-white'
							htmlFor='stock-switch'
						>
							On stock
						</label>
					</div>
				</div>

				{/* Collection */}
				<div
					className='p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white'
					onClick={() => {
						document.querySelector('#collection').classList.toggle('hidden');
						document.querySelector('#arr-coll').classList.toggle('rotate-180');
					}}
				>
					<i className='bi bi-chat-left-text-fill'></i>
					<div className='flex justify-between w-full items-center'>
						<span className='text-md ml-4 text-gray-200'>Collection</span>
						<span className='text-sm rotate-180' id='arr-coll'>
							<i className='bi bi-chevron-down'></i>
						</span>
					</div>
				</div>

				<div
					className='text-left text-sm font-thin mt-2 w-4/5 mx-auto text-gray-200'
					id='collection'
				>
					<div className='form-check form-switch cursor-pointer p-2 hover:bg-gray-700 rounded-md mt-1 ml-10'>
						<input
							className='form-check-input appearance-none rounded-full   bg-gray-300 cursor-pointer'
							type='checkbox'
							role='switch'
							name='coll1'
							onClick={handleonClickFilter}
							defaultChecked={filter.coll1}
						/>
						<label
							className='form-check-label inline-block text-white'
							htmlFor='stock-switch'
						>
							Abstract
						</label>
					</div>
					<div className='form-check form-switch cursor-pointer p-2 hover:bg-gray-700 rounded-md mt-1 ml-10'>
						<input
							className='form-check-input appearance-none rounded-full   bg-gray-300 cursor-pointer'
							type='checkbox'
							role='switch'
							name='coll2'
							onClick={handleonClickFilter}
							defaultChecked={filter.coll2}
						/>
						<label
							className='form-check-label inline-block text-white'
							htmlFor='stock-switch'
						>
							Flowers
						</label>
					</div>
					<div className='form-check form-switch cursor-pointer p-2 hover:bg-gray-700 rounded-md mt-1 ml-10'>
						<input
							className='form-check-input appearance-none rounded-full   bg-gray-300 cursor-pointer'
							type='checkbox'
							role='switch'
							name='coll3'
							onClick={handleonClickFilter}
							defaultChecked={filter.coll3}
						/>
						<label
							className='form-check-label inline-block text-white'
							htmlFor='stock-switch'
						>
							Butterflies
						</label>
					</div>
					<div className='form-check form-switch cursor-pointer p-2 hover:bg-gray-700 rounded-md mt-1 ml-10'>
						<input
							className='form-check-input appearance-none rounded-full   bg-gray-300 cursor-pointer'
							type='checkbox'
							name='coll4'
							onClick={handleonClickFilter}
							defaultChecked={filter.coll4}
						/>
						<label
							className='form-check-label inline-block text-white'
							htmlFor='stock-switch'
						>
							Other
						</label>
					</div>
				</div>

				{/* COLORS */}
				<div
					className='p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white'
					onClick={handleOnClick}
				>
					<i className='bi bi-chat-left-text-fill'></i>
					<div className='flex justify-between w-full items-center'>
						<span className='text-md ml-4 text-gray-200'>Colors</span>
						<span className='text-sm' id='arr-clr'>
							<i className='bi bi-chevron-down'></i>
						</span>
					</div>
				</div>

				<div
					className='hidden text-left text-sm font-thin mt-2 w-4/5 mx-auto text-white'
					id='colors'
				>
					{!redColors.length ? (
						<h1>Loading...</h1>
					) : (
						redColors.map(color => (
							<div
								key={color.id}
								className={`form-check form-switch cursor-pointer p-2 rounded-md mt-1 ml-10`}
							>
								<input
									className='form-check-input appearance-none rounded-full   bg-gray-300 cursor-pointer'
									type='checkbox'
									role='switch'
									name={color.hex}
									onClick={handleOnClickColors}
									style={{
										backgroundColor: `${color.hex}`,
										borderColor: `${color.hex}`,
									}}
								/>
								<label
									className='form-check-label inline-block text-white '
									htmlFor='stock-switch'
								>
									{color.name}
								</label>
							</div>
						))
					)}
				</div>
			</div>
		</div>
	);
};

export default Sidebar;
