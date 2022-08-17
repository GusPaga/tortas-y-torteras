import './Home.css';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Navbar from '../components/Navbar';
import Card from '../components/Card';
import Paginate from '../components/Paginate';
import { getData } from '../redux/actions';
import Footer from '../components/Footer';

export default function Home() {
	const dispatch = useDispatch();
	const { redData, redPage } = useSelector(state => state);

	// Pages:
	const cardsPerPage = 6;
	const indexLastCard = redPage * cardsPerPage;
	const indexFirstCard = indexLastCard - cardsPerPage;
	let totalCards = 0;
	let cardsPage = [];
	if (redData) {
		totalCards = redData.length;
		cardsPage = redData.slice(indexFirstCard, indexLastCard);
	}

	useEffect(() => {
		dispatch(getData());
	}, [dispatch]); //

	return (
		<>
			<Paginate
				cardsPerPage={cardsPerPage}
				totalCards={totalCards}
				indexFirstCard={indexFirstCard}
			/>
			<div className='wrapper'>
				{cardsPage.map(prod => (
					<div key={prod.id}>
						<Card
							imgHome={prod.img_home}
							id={prod.id}
							name={prod.name}
							price={prod.price}
						/>
					</div>
				))}
			</div>
		</>
	);
}
