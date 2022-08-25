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
					<div className='h-full flex flex-col justify-between'>
						<span className='text-white text-xs w-fit bg-[rgba(0,0,0,0.5)] rounded-md p-1'>
							{name}
						</span>
						<div>
							<span className='text-white text-xs w-fit bg-[rgba(0,0,0,0.5)] rounded-md p-1'>
								{collection}
							</span>
							<div>
								<div></div>
								<div></div>
								<div></div>
							</div>
						</div>
					</div>
				</div>
			</Link>
		</div>
	);
}
