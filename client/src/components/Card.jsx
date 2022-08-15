import './Card.css';

export default function Card(props) {
	// eslint-disable-next-line react/prop-types
	const { id, imgHome } = props;

	return (
		<div
			style={{
				backgroundImage: `url(${imgHome})`,
			}}
			className='card'
		>
			<div className='border'>
				<h2>{id}</h2>
			</div>
		</div>
	);
}
