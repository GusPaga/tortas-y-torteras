import { Link } from 'react-router-dom';
import './Card.css';
import { useContext, useState } from 'react';
import { ShoppingCartContext } from '../context/ShoppingCartContext';

export default function Card(props) {
	// eslint-disable-next-line react/prop-types
	const { id, imgHome, name, price } = props;
	const [cart, setCart] = useContext(ShoppingCartContext);
	const [amount, setAmount] = useState(1);

	const addToCart = () => {
		console.log(cart);
		if (!cart.some(e => e.id === id))
			setCart([...cart, { name, imgHome, price: price * amount, id }]);
	};

	// console.log('cart=', cart);

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
				<span className='card-price'>$ {price}</span>
			</div>
			{/* <button onClick={addToCart}>Add to Cart</button> */}
		</div>
	);
}
