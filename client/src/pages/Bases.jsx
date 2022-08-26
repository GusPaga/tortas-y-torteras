import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Card from '../components/Card';
import Sidebar from '../components/Sidebar';
import { getData } from '../redux/actions';

const Bases = () => {
	const dispatch = useDispatch();
	const { redData } = useSelector(state => state);

	useEffect(() => {
		dispatch(getData());
	}, [dispatch]); //

	return (
		<div
			className='w-screen min-h-screen select-none -z-10
			bg-gradient-to-b from-black to-blue-500 flex'
		>
			<Sidebar />
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

export default Bases;
