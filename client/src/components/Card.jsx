import './Card.css';

export default function Card(props) {
	// eslint-disable-next-line react/prop-types
	const { imgHome, name, price } = props;
	console.log(name);

	return (
		<div className='card-wrapper'>
			<div
				className='card'
				style={{
					backgroundImage: `url(${imgHome})`,
				}}
			></div>
			<div className='card-text'>
				<span className='card-name'>{name}</span>
				<span className='card-price'>{price}</span>
			</div>
		</div>
	);
}
