// import { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { getData } from '../redux/actions';
import './Landing.css';

const Landin2 = () => {
	/*
	sm:bg-yellow-500
	md:bg-blue-500
	lg:bg-red-500
	xl:bg-green-500
	2xl:bg-pink-500
	*/
	return (
		<>
			<section
				style={{ height: 'calc(100vh - 8rem)' }}
				className='w-screen select-none -z-10
			bg-gradient-to-b from-black to-purple-700 flex items-center justify-center'
			>
				<div
					className='h-full
					w-[420px] 
					lg:w-[1020px] lg:h-[510px]  
					xl:w-[1480px] xl:h-[620px]  
					2xl:w-[1620px] 2xl:h-[820px]
				'
				>
					<div
						className='relative bg-center bg-no-repeat bg-cover
							w-[420px] h-[420px]
							lg:w-[520px]
							xl:w-[720px] xl:h-[620px]  
							2xl:w-[1020px] 2xl:h-[820px]
							'
						style={{
							backgroundImage: `url(https://i.ibb.co/5xRfKDy/img3.png)`,
						}}
					>
						<div
							className='absolute flex flex-col items-center p-7 bg-neutral-900 rounded-xl drop-shadow-2xl h-auto
							top-[100%]
							lg:items-start lg:top-1/2 lg:left-3/4 lg:h-[50%] lg:mt-[-20%] lg:w-[500px] 
							xl:p-10 xl:w-[600px] xl:h-[40%]
						'
						>
							<span className='text-sm'>Unique Art Pieces</span>
							<span
								className='mt-4 text-4xl 
								2xl:text-6xl'
							>
								Cakes
								<span className='text-5xl 2xl:text-7xl text-myPurple-100'>
									&
								</span>
								Bases
							</span>
							<p
								className='mt-4 text-center max-w-xl text-sm
								lg:max-w-md lg:text-left lg:text-[12px]
								xl:max-w-2xl  xl:text-[14px]
								2xl:text-lg
								'
							>
								Functional Art in your Table. Original pieces created with love
								creativity. Wood, painting, colors, and advanced techniques are
								collected togheter to achieve this unique art pieces.
							</p>
						</div>
					</div>
					{/* <div
						style={{
							backgroundImage: `url(https://i.ibb.co/5xRfKDy/img3.png)`,
						}}
						className='mx-auto bg-center bg-no-repeat -z-10 bg-cover 
						w-[420px] h-[420px] 
						xl:w-[620px] xl:h-[620px]  
						2xl:w-[620px] 2xl:h-[620px]
						'
					>
						ACA ESTOY
					</div> */}
				</div>
			</section>
		</>
	);
};

export default Landin2;
