
import { Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import ProductForm from './components/ProductForm';
import RegistrationForm from './components/RegistrationForm';
import ShoppingCart from './components/ShoppingCart';
import SignInSide from './components/SignIn';
import Try from './components/Try';
import Detail from './pages/Detail';
import Home from './pages/Home';
import Landing from './pages/Landing';
import Page404 from './components/Pag404';


function App() {
	return (
		<>
			{location.pathname !== '/' && <Navbar />}
			<Switch>
				<Route exact path='/' component={Landing} />
				<Route exact path='/home' component={Home} />
				<Route exact path='/registration' component={RegistrationForm} />
				<Route exact path='/addproduct' component={ProductForm} />
				<Route exact path='/shop/shoppingCart' component={ShoppingCart} />
				<Route exact path='/bases/try' component={Try} />
				<Route exact path='/bases/signin' component={SignInSide} />
				<Route exact path='/:id' component={Detail} />
				<Route path='/' component={Page404} />
			</Switch>
			{/* <Footer /> */}
		</>
	);
}

export default App;
