import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Detail from './pages/Detail';
import RegistrationForm from './components/RegistrationForm';
import ProductForm from './components/ProductForm';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Landing from './pages/Landing';
import ShoppingCart from './components/ShoppingCart';
import Try from './components/Try';
import SignInSide from './components/SignIn';

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
			</Switch>
			{/* <Footer /> */}
		</>
	);
}

export default App;
