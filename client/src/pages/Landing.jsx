import './Landing.css';

const Landing = () => {
	/*

	const arrayImg = [];
	for (const product of redData) arrayImg.push(product.img_home.secure_url);
	const randomImg = Math.floor(Math.random() * 20);

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
							className='neon absolute flex flex-col items-center p-7 text-white bg-neutral-900 rounded-xl drop-shadow-2xl h-auto border-white border-solid border-2
							top-[100%]
							lg:lg:top-1/2 lg:left-3/4 lg:h-[50%] lg:mt-[-20%] lg:w-[500px] 
							xl:p-10 xl:w-[600px] xl:h-[40%]
						'
						>
							<span className='text-sm'>Unique Art Pieces</span>
							<span
								className='mt-4 text-3xl 
								2xl:text-4xl'
							>
								Cakes
								<span
									className='text-4xl text-myPurple-100
								2xl:text-5xl'
								>
									&
								</span>
								Bases
							</span>
							<p
								className='mt-4 text-center max-w-xl text-sm
								lg:max-w-md lg:text-[12px]
								xl:max-w-2xl  xl:text-[14px]
								2xl:text-[20px]
								'
							>
								Functional Art in your Table. Original pieces created with love
								creativity. Wood, painting, colors, and advanced techniques are
								collected togheter to achieve this unique art pieces.
							</p>
						</div>
					</div>
				</div>
			</section>
			<section
				style={{ height: 'calc(100vh - 8rem)' }}
				className='w-screen select-none -z-10
			bg-gradient-to-b from-purple-700 to-purple-700 flex items-center justify-center'
			></section>
		</>
	);
};

export default Landing;
