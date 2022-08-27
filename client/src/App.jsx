import { onAuthStateChanged } from 'firebase/auth';
import { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import { SignIn } from './components/auth/SignIn';
import { SignUp } from './components/auth/SignUp';
import { ChangePassword } from './components/formsUsers/ChangePassword';
import { EditUserProfile } from './components/formsUsers/EditUserProfile';
import Navbar from './components/Navbar';
import Page404 from './components/Pag404';
import ProductForm from './components/ProductForm';
import ShoppingCart from './components/ShoppingCart';
import Try from './components/Try';
import { auth, getUserInfo, userExists } from './firebase/firebase';
import Detail from './pages/Detail';
// import Home from './pages/Home';
import Home2 from './pages/Home2';
import Landing from './pages/Landing';

function App() {
	const [userLoggedComplete, setUserLoggedComplete] = useState(false);
	useEffect(() => {
		onAuthStateChanged(auth, handleUserStateChanged);
	}, []);
	async function handleUserStateChanged(user) {
		if (user) {
			const isRegister = await userExists(user.uid);
			if (isRegister) {
				// TODO: redirigir a Dashboard
				const userInfo = await getUserInfo(user.uid);
				if (userInfo.processCompleted) {
					setUserLoggedComplete(true);
				}
			}
		}
	}
	return (
		<>
			<Navbar userLoggedComplete={userLoggedComplete} />
			<Switch>
				<Route exact path='/' component={Landing} />
				<Route exact path='/home' component={Home2} />
				<Route exact path='/addproduct' component={ProductForm} />
				<Route exact path='/shop/shoppingCart' component={ShoppingCart} />
				{/* <Route exact path='/bases/signin' component={SignInSide} /> */}
				<Route exact path='/bases/try' component={Try} />
				<Route exact path='/signup' component={SignUp} />
				<Route exact path='/user/edit' component={EditUserProfile} />
				<Route exact path='/user/changepassword' component={ChangePassword} />
				<Route exact path='/signin' component={SignIn} />
				<Route exact path='/:id' component={Detail} />
				<Route path='/' component={Page404} />
			</Switch>
			{/* <Footer /> */}
		</>
	);
}

export default App;
