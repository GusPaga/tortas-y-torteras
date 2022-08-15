import { useDispatch, useSelector } from 'react-redux';
import { setPage } from '../redux/actions';
import './Paginate.css';

// eslint-disable-next-line react/prop-types
export default function Paginado({ cardsPerPage, totalCards, indexFirstCard }) {
	const { redPage } = useSelector(state => state);
	const dispatch = useDispatch();
	const pages = Math.ceil(totalCards / cardsPerPage);
	const pageNumbers = [];

	const start = Number(redPage) - 1 < 1 ? 1 : Number(redPage) - 1;
	const end = Number(redPage) + 1 > pages ? pages : Number(redPage) + 1;

	for (let i = start; i <= end; i++) {
		pageNumbers.push(i);
	}

	const onClickPage = e => dispatch(setPage(e.target.innerHTML));

	const onClickPrev = () => {
		const page = document.querySelector('.active-pag');
		page.classList.remove('active-pag');

		page.previousSibling.innerHTML === 'Prev'
			? dispatch(setPage(pages))
			: dispatch(setPage(page.previousSibling.innerHTML));
	};

	const onClickNext = () => {
		const page = document.querySelector('.active-pag');
		page.classList.remove('active-pag');

		page.nextSibling.innerHTML === 'Next'
			? dispatch(setPage(1))
			: dispatch(setPage(page.nextSibling.innerHTML));
	};

	return (
		<div className='pagination-container'>
			<ul className='pagination'>
				<li className='prev' onClick={onClickPrev}>
					Prev
				</li>
				{pageNumbers.map(number => (
					<li
						className={
							indexFirstCard / cardsPerPage + 1 === number
								? 'pageNumber active-pag'
								: 'pageNumber'
						}
						id={`page-${number}`}
						key={number}
						onClick={onClickPage}
					>
						{number}
					</li>
				))}
				<li className='next' onClick={onClickNext}>
					Next
				</li>
			</ul>
		</div>
	);
}
