// import Dog from "../components/Dogs";
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import Rating from '../components/Rating';
import { setLoading } from '../redux/actions';
import './Detail.css';

function Detail() {
	const { id } = useParams();
	const [product, setProduct] = useState([]);
	const history = useHistory();
	const dispatch = useDispatch();
	const { redLoading } = useSelector(state => state);

	useEffect(() => {
		async function fetchData() {
			try {
				dispatch(setLoading(true));
				const response = await axios.get('http://localhost:3001/products');
				setProduct(response.data); // ➡ Guardar datos
				dispatch(setLoading(false));
			} catch (error) {
				alert(error);
			}
		}
		fetchData();
	}, [dispatch, id]);

	let myproduct = {};
	if (product.length) myproduct = product?.find(e => e.id === id);
	else return <h1>Cargando...</h1>;

	return (
		<div className='detail-wrapper'>
			<div className='detail-content'>
				{/* LEFT COLUMN */}
				<div className='detail-content-left'>
					<div
						id='carouselControls'
						className='carousel slide'
						data-bs-ride='carousel'
					>
						<div className='carousel-inner'>
							{myproduct.img_detail.map((im, i) => (
								<div
									key={i}
									className={i === 0 ? 'carousel-item active' : 'carousel-item'}
								>
									<div
										style={{
											backgroundImage: `url(${im})`,
										}}
										className='det-img d-block w-100'
										alt='...'
									/>
								</div>
							))}
						</div>
						<button
							className='carousel-control-prev'
							type='button'
							data-bs-target='#carouselControls'
							data-bs-slide='prev'
						>
							<span
								className='carousel-control-prev-icon'
								aria-hidden='true'
							></span>
							<span className='visually-hidden'>Previous</span>
						</button>
						<button
							className='carousel-control-next'
							type='button'
							data-bs-target='#carouselControls'
							data-bs-slide='next'
						>
							<span
								className='carousel-control-next-icon'
								aria-hidden='true'
							></span>
							<span className='visually-hidden'>Next</span>
						</button>
					</div>
				</div>

				{/* RIGHT COLUMN */}
				<div className='detail-content-right'>
					<div className='detail-1'>
						<div className='dt1-ref'>Ref-{myproduct.id}</div>
						<div className='dt1-name'>{myproduct.name}</div>
						<div className='dt1-price'>Price: {myproduct.price}</div>
					</div>
					<div className='detail-2'>
						{/* <span>{myproduct.score}/5</span> */}
						<Rating />
						<span className='dt2-3'>See all xx reviews</span>
					</div>
					<div className='detail-3'>
						<span>Colours</span>
						<div className='dt3'>
							<div
								className='dt3-1'
								style={{
									backgroundColor: `${myproduct.Colors[0].hex}`,
									border: `2px solid ${myproduct.Colors[0].hex}`,
								}}
							></div>
							<div
								className='dt3-2'
								style={{
									backgroundColor: `${myproduct.Colors[1].hex}`,
									border: `2px solid ${myproduct.Colors[1].hex}`,
								}}
							></div>
							<div
								className='dt3-3'
								style={{
									backgroundColor: `${myproduct.Colors[2].hex}`,
									border: `2px solid ${myproduct.Colors[2].hex}`,
								}}
							></div>
						</div>
					</div>
					<div className='detail-4'>
						<span>Size</span>
						<div className='dt4'>
							<div className='dt4-1'>
								<p className='dt4-1-p1'>Medium</p>
								<p className='dt4-1-p2'>32 cm</p>
							</div>
							<div className='dt4-2'>
								<p className='dt4-2-p1'>Large</p>
								<p className='dt4-1-p2'>35 cm</p>
							</div>
						</div>
					</div>
					<div className='detail-5'>Avaibility: In stock</div>
					<div className='detail-6'>
						<span>Add</span>
						<div className='dt6-1'>Add to bag</div>
						<div className='dt6-2'>Add to wishlist</div>
					</div>
				</div>
			</div>
			<button
				onClick={() => history.push('/')}
				className='detail-back'
				type='button'
			>
				back
			</button>
		</div>
	);
}

export default Detail;
