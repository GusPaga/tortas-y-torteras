import './Navbar.css';

export default function Navbar() {
	return (
		<div className='bar-header'>
			<span className='bar-brush-icon'>
				<i className='fa-solid fa-palette'></i>
			</span>
			<div className='bar-heading'>Cakes&Bases</div>
			<span className='bar-bag-icon'>
				<i className='fa-solid fa-bag-shopping'></i>
			</span>
			<span className='bar-user-icon'>
				<i className='fa-solid fa-circle-user'></i>
			</span>
			<div className='bar-login-text'>Log In</div>
		</div>
	);
}
