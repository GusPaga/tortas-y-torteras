import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Card from '../components/Card';
import { getData } from '../redux/actions';

const Home2 = () => {
	const dispatch = useDispatch();
	const { redData } = useSelector(state => state);

	useEffect(() => {
		dispatch(getData());
	}, [dispatch]); //

	return (
		<div
			className='w-screen select-none -z-10
			bg-gradient-to-b from-black to-blue-500 flex'
		>
			<span
				className='absolute text-white top-5 left-4 cursor-pointer'
				onClick={() =>
					document
						.querySelector('.sidebar')
						.classList.toggle('translate-x-full')
				}
			>
				<i className='bi bi-filter-left px-2'></i>
			</span>
			<div
				id='sidebar'
				className='sidebar fixed top-0 bottom-0 left-[-300px] p-2 w-[300px] overflow-y-auto text-center bg-gray-900	translate-x-0 ease-in-out duration-500
				'
			>
				<div className='text-gray-100 text-xl'>
					<div className='p-2.5 mt-1 flex items-center'>
						<i className='bi bi-app-indicator px-2 py-1 bg-blue-600 rounded-md'></i>
						<h1 className='font-bold text-gray-200 text-md ml-3'>Menu</h1>
						<i
							className='bi bi-x ml-20 cursor-pointer'
							onClick={() =>
								document
									.querySelector('.sidebar')
									.classList.toggle('translate-x-full')
							}
						></i>
					</div>
					<hr className='my-2 text-gray-600' />
				</div>

				<div className='p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer bg-gray-700 text-white'>
					<i className='bi bi-search text-sm'></i>
					<input
						type='text'
						placeholder='Search'
						className='text-md ml-4 w-full bg-transparent focus:outline-none'
					/>
				</div>

				<div className='p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white'>
					<i className='bi bi-house-door-fill'></i>
					<span className='text-md ml-4 text-gray-200'>Home</span>
				</div>

				<div className='p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white'>
					<i className='bi bi-bookmark-fill'></i>
					<span className='text-md ml-4 text-gray-200'>Bookmark</span>
				</div>
				<hr className='my-2 text-gray-600' />

				<div
					className='p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white'
					onClick={() => {
						document.querySelector('#submenu').classList.toggle('hidden');
						document.querySelector('#arrow').classList.toggle('rotate-0');
					}}
				>
					<i className='bi bi-chat-left-text-fill'></i>
					<div className='flex justify-between w-full items-center'>
						<span className='text-md ml-4 text-gray-200'>Chatbox</span>
						<span className='text-sm rotate-180' id='arrow'>
							<i className='bi bi-chevron-down'></i>
						</span>
					</div>
				</div>

				<div
					className='text-left text-sm font-thin mt-2 w-4/5 mx-auto text-gray-200'
					id='submenu'
				>
					<h1 className='cursor-pointer p-2 hover:bg-gray-700 rounded-md mt-1'>
						Social
					</h1>
					<h1 className='cursor-pointer p-2 hover:bg-gray-700 rounded-md mt-1'>
						Personal
					</h1>
					<h1 className='cursor-pointer p-2 hover:bg-gray-700 rounded-md mt-1'>
						Friends
					</h1>
				</div>

				<div className='p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white'>
					<i className='bi bi-box-arrow-in-right'></i>
					<span className='text-md ml-4 text-gray-200'>Logout</span>
				</div>
			</div>

			<div className='container p-8'>
				<div
					className='grid grid-cols-1 gap-1 
            sm:grid-cols-2
            md:grid-cols-3
            lg:grid-cols-4
            xl:grid-cols-5
            2xl:grid-cols-6
            '
					// sm:bg-yellow-500
					// md:bg-blue-500
					// lg:bg-red-500
					// xl:bg-green-500
					// 2xl:bg-pink-500
				>
					{redData.map(prod => (
						<div key={prod.id}>
							<Card
								imgHome={prod.img_home.secure_url}
								id={prod.id}
								name={prod.name}
								color1={prod.Colors[0].hex}
								color2={prod.Colors[1].hex}
								color3={prod.Colors[2].hex}
								collection={prod.collection}
							/>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Home2;
