import { Link } from 'react-router-dom';
// import './Card.css';

export default function Card(props) {
	// eslint-disable-next-line react/prop-types
	const { id, imgHome, name, color1, color2, color3, collection } = props;

	// console.log('cart=', cart);

	return (
		<div className=''>
			<Link to={`/${id}`}>
				<div
					className='bg-center bg-no-repeat bg-cover w-full p-4
				h-[600px]
				sm:h-[300px]
				md:h-[250px]
				'
					style={{
						backgroundImage: `url(${imgHome})`,
					}}
				>
					<div className='card-header'>
						<span className='bg-[rgba(0,0,0,0.5)] rounded-md p-1'>
							{collection}
						</span>
					</div>
				</div>
			</Link>
			{/* <div className='card-text'>
				<div className='card-text-container'>
					<span className='card-collection'>Collection:</span>
					<span className='card-collection'>{collection}</span>
				</div>
				<div className='card-text-container'>
					<span className='card-colors'>Main Colors:</span>
					<span className='card-colors'>
						<div
							className='card-color1'
							style={{
								backgroundColor: `${color1}`,
								border: `2px solid ${color1}`,
							}}
						></div>
						<div
							className='card-color2'
							style={{
								backgroundColor: `${color2}`,
								border: `2px solid ${color2}`,
							}}
						></div>
						<div
							className='card-color3'
							style={{
								backgroundColor: `${color3}`,
								border: `2px solid ${color3}`,
							}}
						></div>
					</span>
				</div>
			</div> */}
		</div>
	);
}
