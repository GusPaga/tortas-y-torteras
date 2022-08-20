import './Navbar.css';
import { Link } from 'react-router-dom';
import { useContext, useEffect } from 'react';
import { AppBar, Toolbar } from '@mui/material';
import { ShoppingCartContext } from '../context/ShoppingCartContext';

export default function Navbar() {
	const [cart, setCart] = useContext(ShoppingCartContext);
	console.log(cart.length);

	useEffect(() => {
		document.getElementById('navbar-shp-num').innerHTML = cart.length;
	}, [cart]);

	return (
		<>
			{/* <CssBaseline /> */}
			<AppBar style={{ backgroundColor: '#1f2937' }} position='relative'>
				<Toolbar>
					<span className='bar-brush-icon'>
						<Link to='/'>
							<i className='fa-solid fa-palette'></i>
						</Link>
					</span>
					<div className='bar-heading'>
						Cakes<span>&</span>Bases
					</div>
					<span className='bar-bag-icon'>
						<Link to='/shop/shoppingcart'>
							<i className='fa-solid fa-bag-shopping'>
								<span id='navbar-shp-num'></span>
							</i>
						</Link>
					</span>
					<span className='bar-user-icon'>
						<i className='fa-solid fa-circle-user'></i>
					</span>
					<Link to='/registration' className='bar-login-text'>
						Log In
					</Link>
				</Toolbar>
			</AppBar>
		</>
	);
}
