import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Redirect, Route, Switch } from 'react-router-dom';
import { SignIn } from './components/auth/SignIn';
import { SignUp } from './components/auth/SignUp';
// import { EditUserProfile } from './components/dashboardClient/formsUsers/EditUserProfile';
// import { ChangePassword } from './components/dashboardClient/formsUsers/ChangePassword';
import { Menu } from './components/dashboardClient/Menu';
import Navbar from './components/Navbar';
import Page404 from './components/Pag404';
import ProductForm from './components/ProductForm';
import ShoppingCart from './components/ShoppingCart';
import Try from './components/Try';
import { auth } from './firebase/firebase-config';
import Detail from './pages/Detail';
import Bases from './pages/Bases';
import Landing from './pages/Landing';
import { login } from './redux/actions';
import DashBoard from './components/Administrator';

function App() {
	const dispatch = useDispatch();
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const [checking, setChecking] = useState(true);

	useEffect(() => {
		auth.onAuthStateChanged(user => {
			if (user?.uid) {
				dispatch(login(user.uid, user.displayName));
				setIsLoggedIn(true);
			} else {
				setIsLoggedIn(false);
			}
			setChecking(false);
		});
	}, [dispatch, isLoggedIn, checking]);
	return (
		<>
			<Navbar />
			<Switch>
				<Route exact path='/' component={Landing} />
				<Route exact path='/home' component={Bases} />
				<Route exact path='/admin' component={DashBoard} />
				<Route exact path='/addproduct' component={ProductForm} />
				<Route exact path='/shop/shoppingCart' component={ShoppingCart} />
				<Route exact path='/bases/try' component={Try} />
				<Route exact path='/signup' component={SignUp} />
				<Route exact path='/user/main' component={Menu} />
				{/* <Route exact path='/user/edit' component={EditUserProfile} />
				<Route exact path='/user/changepassword' component={ChangePassword} /> */}
				<Route
					exact
					path='/signin'
					render={() => (isLoggedIn ? <Redirect to='/' /> : <SignIn />)}
				/>
				<Route exact path='/:id' component={Detail} />
				<Route path='/' component={Page404} />
			</Switch>
			{/* <Footer /> */}
		</>
	);
}

export default App;
