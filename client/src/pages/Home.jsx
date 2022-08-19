import './Home.css';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Card from '../components/Card';
import { getData, setPage } from '../redux/actions';
import Pagination from '@mui/material/Pagination';

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
	const pages = Math.ceil(totalCards / cardsPerPage);

	useEffect(() => {
		dispatch(getData());
	}, [dispatch]); //

	const handleChange = (e, value) => dispatch(setPage(value));

	return (
		<>
			<div className='pag-wrapper'>
				<Pagination size='large' count={pages} onChange={handleChange} />
			</div>

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
