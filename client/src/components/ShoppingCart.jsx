import { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { ShoppingCartContext } from '../context/ShoppingCartContext';
import './ShoppingCart.css';

const ShoppingCart = () => {
	const [cart, setCart] = useContext(ShoppingCartContext);
	const history = useHistory();
	const totalPrice = cart.reduce((acc, curr) => acc + curr.price, 0);
	return (
		<div className='shopping-wrapper'>
			<div className='shopping-bag'>
				<div className='shopping-header'>
					<h2>Bag</h2>
				</div>
				<hr />
				<div className='shopping-container'>
					<div className='shop-cont-left'>
						{!cart.length ? (
							<div>No items in the bag</div>
						) : (
							cart.map(e => (
								<div key={e.id}>
									<div className='shopping-product'>
										<div
											className='shp-img'
											style={{
												backgroundImage: `url('${e.imgHome}')`,
											}}
										></div>
										<div className='shp-details'>
											<p className='shp-ref'>RF {e.id}</p>
											<h3>{e.name}</h3>
											<p>Size</p>
											<p>Avaibility</p>
											<div id='shp-bottom-shp-details'>
												<span className='shp-add-fv'>Add to favorites</span>
												<span
													className='shp-remove'
													onClick={() =>
														setCart(cart.filter(i => i.id !== e.id))
													}
												>
													Remove
												</span>
											</div>
										</div>
										<div>$ {e.price}</div>
									</div>
									<hr />
								</div>
							))
						)}
					</div>
					<div className='shop-cont-right'>
						<h1 style={{ color: '#c684ff' }}>Summary</h1>
						<div className='shp-pay-info'>
							<div className='shp-pay-info-left'>
								<p>Subtotal</p>
								<p>Shipping</p>
								<p>Tax</p>
								<h3>Total</h3>
							</div>
							<div className='shp-pay-info-right'>
								<p>$ {totalPrice}</p>
								<p>$ {cart.length * 30}</p>
								<p>$ {(totalPrice + cart.length * 30) * 0.2}</p>
								<h3>$ {(totalPrice + cart.length * 30) * 1.2}</h3>
							</div>
						</div>
						<button className='shp-chkout'>Checkout</button>
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
};

export default ShoppingCart;
