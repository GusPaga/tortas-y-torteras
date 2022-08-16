import { Link } from 'react-router-dom';
import './Card.css';

export default function Card(props) {
	// eslint-disable-next-line react/prop-types
	const { id, imgHome, name, price } = props;

	return (
		<div className='card-wrapper'>
			<Link to={`/${id}`}>
				<div
					className='card'
					style={{
						backgroundImage: `url(${imgHome})`,
					}}
				></div>
			</Link>
			<div className='card-text'>
				<span className='card-name'>{name}</span>
				<span className='card-price'>{price}</span>
			</div>
		</div>
	);
}
