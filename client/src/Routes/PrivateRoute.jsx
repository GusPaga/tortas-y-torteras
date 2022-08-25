import { Redirect, Route } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
export const PrivateRoute = ({ isLoggedIn, component, ...res }) => {
	console.log(isLoggedIn);
	return (
		<Route {...res}>
			{isLoggedIn ? <component /> : <Redirect to='/signin' />}
		</Route>
	);
};
