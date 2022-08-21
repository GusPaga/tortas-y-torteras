import { Link } from 'react-router-dom';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import './Card.css';

export default function Card(props) {
	// eslint-disable-next-line react/prop-types
	const { id, imgHome, name, price1, price2, collection } = props;

	// console.log('cart=', cart);

	return (
		<div className='card-wrapper'>
			<Link to={`/${id}`}>
				<div
					className='card-card'
					style={{
						backgroundImage: `url(${imgHome})`,
					}}
				>
					<div>card-header</div>
					<span className='card-name'>{name}</span>
					<FavoriteBorderIcon />
					{/* <span className='card-collection'>Collection: {collection}</span> */}
				</div>
			</Link>
			<div className='card-text'>
				<div className='card-text-container'>
					<span className='card-type1'>Cake Trail:</span>
					<span className='card-price1'>$ {price1}</span>
				</div>
				<div className='card-text-container'>
					<span className='card-type2'>Turn Table: </span>
					<span className='card-price2'>$ {price2}</span>
				</div>
			</div>
		</div>
	);
}
