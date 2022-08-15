import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Navbar from '../components/Navbar';
import Card from '../components/Card';
import { getData } from '../redux/actions';

export default function Home() {
	const dispatch = useDispatch();
	const { redData } = useSelector(state => state);

	useEffect(() => {
		dispatch(getData());
	}, [dispatch]); //

	// console.clear();
	// console.log('data', redData);

	// if (!redData) return <h1>No ha cargado</h1>;

	return (
		<>
			<Navbar />
			<h1>Soy Home</h1>
			<div>
				{redData?.map(prod => (
					<div key={prod.id}>
						<Card id={prod.id} img_home={prod.img_home} />
					</div>
				))}
			</div>
		</>
	);
}
