import { Link } from 'react-router-dom';

export default function Card(props) {
	// eslint-disable-next-line react/prop-types
	const { id, imgHome, name, color1, color2, color3, collection } = props;

	return (
		<div className=''>
			<Link to={`/${id}`}>
				<div
					className='bg-center bg-no-repeat bg-cover w-full p-2
				h-[600px]
				sm:h-[300px]
				md:h-[250px]
				'
					style={{
						backgroundImage: `url(${imgHome})`,
					}}
				>
					<div className='h-full flex flex-col justify-between'>
						<div className='w-full flex justify-between'>
							<span className='text-white text-xs w-fit bg-[rgba(0,0,0,0.5)] rounded-md p-1'>
								{collection}
							</span>
							<div className='flex gap-[2px] bg-[rgba(0,0,0,0.5)] rounded-md p-1'>
								<div
									className={'rounded-full w-3 h-3'}
									style={{
										backgroundColor: `${color1}`,
										border: ` ${color1}`,
									}}
								></div>
								<div
									className={'rounded-full w-3 h-3'}
									style={{
										backgroundColor: `${color2}`,
										border: ` ${color2}`,
									}}
								></div>
								<div
									className={'rounded-full w-3 h-3'}
									style={{
										backgroundColor: `${color3}`,
										border: ` ${color3}`,
									}}
								></div>
							</div>
						</div>
						<span className='text-white text-xs w-fit bg-[rgba(0,0,0,0.5)] rounded-md p-1'>
							{name}
						</span>
					</div>
				</div>
			</Link>
		</div>
	);
}
