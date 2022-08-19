import './MultOpt.css';
import { useDispatch, useSelector } from 'react-redux';
import { getColors } from '../redux/actions';
import { useState } from 'react';

export const MultOpts = () => {
	const { redColors } = useSelector(state => state);
	const [queryColors, setQueryColors] = useState([]);
	const dispatch = useDispatch();

	const countSelected = () => {
		const checked = document.querySelectorAll('.checked');
		const btnText = document.querySelector('.btn-text');
		checked.length
			? (btnText.innerText = `${checked.length} Selected`)
			: (btnText.innerText = 'Select Temperament');
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

	const handleOnClickRender = () => {};
	return (
		<div className='opts-container'>
			<div onClick={handleOnClickDiv} className='select-btn'>
				<span className='btn-text'>Select Color </span>
				<span onClick={handleOnClickRender} className='filter'>
					<i className='fa-solid fa-paintbrush'></i>
				</span>
			</div>

			<ul className='list-items'>
				{redColors.map(c => (
					<li key={c.id} className='item' onClick={OnClickItem}>
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
		</div>
	);
};
