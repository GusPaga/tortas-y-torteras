import './Navbar.css';
import { Link } from 'react-router-dom';

export default function Navbar() {
	return (
		<div className='bar-header'>
			<span className='bar-brush-icon'>
				<Link to='/'>
					<i className='fa-solid fa-palette'></i>
				</Link>
			</span>
			<div className='bar-heading'>Cakes&Bases</div>
			<span className='bar-bag-icon'>
				<i className='fa-solid fa-bag-shopping'></i>
			</span>
			<span className='bar-user-icon'>
				<i className='fa-solid fa-circle-user'></i>
			</span>
			<Link to='/registration' className='bar-login-text'>
				Log In
			</Link>
		</div>
	);
}
