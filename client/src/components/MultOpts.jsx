import './MultOpt.css';
import { useDispatch, useSelector } from 'react-redux';
import { getColors } from '../redux/actions';

export const MultOpts = ({ OnClickItem, queryColors }) => {
	const { redColors } = useSelector(state => state);
	const dispatch = useDispatch();

	const handleOnClickDiv = () => {
		dispatch(getColors());
		document.querySelector('.select-btn').classList.toggle('open');
	};

	return (
		<div className='opts-container'>
			<div onClick={handleOnClickDiv} className='select-btn'>
				<span className='btn-text'>Select Color </span>
				<span className='filter'>
					<i className='fa-solid fa-paintbrush'></i>
				</span>
			</div>

			<ul className='list-items'>
				{redColors.map(c => (
					<li key={c.id} className='item'>
						<span
							onClick={OnClickItem}
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
